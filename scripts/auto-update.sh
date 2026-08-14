#!/usr/bin/env bash
# Local equivalent of .github/workflows/auto-update-content.yml — lets you
# run the same scheduled content-refresh pass on demand, from your own
# machine, without waiting for GitHub Actions or depending on it being up.
#
# Unlike the GitHub Action, this authenticates via your Claude subscription
# (Pro/Max/Team/Enterprise) login on this machine, NOT an API key — so it
# draws from a genuinely separate resource/pool than the GitHub Action's
# ANTHROPIC_API_KEY. That's the actual point of having both: if the account
# behind the API key runs out of credit, this still works, and vice versa.
#
# Requires: `claude auth login` already run once on this machine (this
# script checks and tells you if not), Node/npm, and a clean git working
# tree (uncommitted changes are left alone — the script refuses to run
# over them rather than risk mixing your in-progress edits with Claude's).
#
# Usage:
#   npm run auto-update            # research, edit, build — stops for you to review
#   npm run auto-update -- --push  # ...then also commit and push straight to main

set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")/.."

PUSH=false
for arg in "$@"; do
  if [ "$arg" = "--push" ]; then PUSH=true; fi
done

if ! command -v claude >/dev/null 2>&1; then
  echo "Claude Code CLI not found on PATH — running it via npx instead (no global install)."
  CLAUDE_CMD="npx --yes @anthropic-ai/claude-code"
else
  CLAUDE_CMD="claude"
fi

# ANTHROPIC_API_KEY always overrides subscription login when present, even
# if you're logged in via `claude auth login` — so unset it here regardless
# of what's in your shell, to guarantee this actually bills against your
# subscription and not an API key you (or an earlier `export`) left set.
unset ANTHROPIC_API_KEY

if ! $CLAUDE_CMD auth status >/dev/null 2>&1; then
  echo "Error: not logged in to Claude Code on this machine." >&2
  echo "  Run: claude auth login" >&2
  echo "This uses your Claude subscription (Pro/Max/Team/Enterprise), not an API key." >&2
  exit 1
fi

if [ -n "$(git status --porcelain)" ]; then
  echo "Error: you have uncommitted changes. Commit or stash them first —" >&2
  echo "this script won't run Claude over a dirty working tree." >&2
  exit 1
fi

ORIGINAL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
BRANCH="auto-update-local/$(date -u +%Y-%m-%d-%H%M)"
git checkout -b "$BRANCH"

cleanup_on_failure() {
  echo ""
  echo "Left on branch $BRANCH so you can inspect what happened."
  echo "Switch back with: git checkout $ORIGINAL_BRANCH"
}
trap cleanup_on_failure ERR

echo "Running Claude Code via your subscription login (this can take a few minutes)..."
$CLAUDE_CMD -p "$(cat scripts/auto-update-prompt.txt)" \
  --permission-mode acceptEdits \
  --allowedTools "WebSearch,WebFetch,Bash(npm run build)"

echo ""
echo "Installing dependencies and building as a gate..."
npm ci
npm run build

trap - ERR

if git diff --quiet && git diff --cached --quiet; then
  echo ""
  echo "Build passed, but Claude made no changes this run — nothing to do."
  git checkout "$ORIGINAL_BRANCH"
  git branch -d "$BRANCH"
  exit 0
fi

echo ""
echo "Build passed. Changes:"
git diff --stat

if [ "$PUSH" = true ]; then
  git config user.name "$(git config user.name || echo 'Auto-Update (local)')"
  git add -A
  git commit -m "Automated content refresh (local) — $(date -u +%Y-%m-%d)"
  git checkout "$ORIGINAL_BRANCH"
  git merge --ff-only "$BRANCH"
  git push origin "$ORIGINAL_BRANCH"
  git branch -d "$BRANCH"
  echo ""
  echo "Pushed directly to $ORIGINAL_BRANCH."
else
  echo ""
  echo "Left uncommitted on branch $BRANCH for you to review. To finish:"
  echo "  git add -A && git commit -m 'Automated content refresh'"
  echo "  git checkout $ORIGINAL_BRANCH && git merge --ff-only $BRANCH && git push"
  echo "Or re-run with --push to do all of that automatically next time."
fi
