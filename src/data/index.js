import { HOSPITALS_KL } from './hospitals/kuala-lumpur.js'
import { HOSPITALS_PUTRAJAYA } from './hospitals/putrajaya.js'
import { HOSPITALS_LABUAN } from './hospitals/labuan.js'
import { HOSPITALS_SELANGOR } from './hospitals/selangor.js'
import { HOSPITALS_PENANG } from './hospitals/penang.js'
import { HOSPITALS_JOHOR } from './hospitals/johor.js'
import { HOSPITALS_PERAK } from './hospitals/perak.js'
import { HOSPITALS_KEDAH } from './hospitals/kedah.js'
import { HOSPITALS_KELANTAN } from './hospitals/kelantan.js'
import { HOSPITALS_TERENGGANU } from './hospitals/terengganu.js'
import { HOSPITALS_PAHANG } from './hospitals/pahang.js'
import { HOSPITALS_NS } from './hospitals/negeri-sembilan.js'
import { HOSPITALS_MELAKA } from './hospitals/melaka.js'
import { HOSPITALS_PERLIS } from './hospitals/perlis.js'
import { HOSPITALS_SARAWAK } from './hospitals/sarawak.js'
import { HOSPITALS_SABAH } from './hospitals/sabah.js'

export const ALL_HOSPITALS = [
  ...HOSPITALS_KL,
  ...HOSPITALS_PUTRAJAYA,
  ...HOSPITALS_LABUAN,
  ...HOSPITALS_SELANGOR,
  ...HOSPITALS_PENANG,
  ...HOSPITALS_JOHOR,
  ...HOSPITALS_PERAK,
  ...HOSPITALS_KEDAH,
  ...HOSPITALS_KELANTAN,
  ...HOSPITALS_TERENGGANU,
  ...HOSPITALS_PAHANG,
  ...HOSPITALS_NS,
  ...HOSPITALS_MELAKA,
  ...HOSPITALS_PERLIS,
  ...HOSPITALS_SARAWAK,
  ...HOSPITALS_SABAH,
]

export const ALL_STATES = [...new Set(ALL_HOSPITALS.map(h => h.state))].sort()
export const PUBLIC_COUNT = ALL_HOSPITALS.filter(h => h.sector === 'public').length
export const PRIVATE_COUNT = ALL_HOSPITALS.filter(h => h.sector === 'private').length
export const ROBOTICS_COUNT = ALL_HOSPITALS.filter(h =>
  h.technology?.roboticSurgery || h.technology?.aiDiagnostics
).length
