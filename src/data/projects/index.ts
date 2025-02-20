import { ecopacc } from './ecopacc';
import { keyence } from './keyence';
import { mixpeel } from './mixpeel';
import { sla } from './sla';
import { dispenser } from './dispenser';
import { n95 } from './n95';

export const projectData = {
  ecopacc,
  keyence,
  mixpeel,
  sla,
  dispenser,
  n95
};

export type ProjectId = keyof typeof projectData;