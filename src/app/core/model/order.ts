import { Aircraft } from './aircraft';
import { Part } from './part';

export interface Order {
  referenceNumber: string;
  aircraft: Aircraft;
  removedPart: Part;
  installedPart: Part;
}
