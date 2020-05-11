import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { logValues } from '../config/utils/util';

map(
  (param: number) => param * param)
  (of(1, 2, 3)).subscribe((value) => {
    logValues(value)
    console.log(`Output is: ${value}`)
  }
);