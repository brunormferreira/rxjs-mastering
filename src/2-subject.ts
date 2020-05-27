import { Subject } from 'rxjs';

import { logValues } from '../utils/util';

const subject = new Subject();

subject.subscribe({
  next(value) {
    logValues(value)
    console.log(value);
  },
  error(error) {
    logValues(error)
    console.log(error);
  },
  complete() {
    logValues('Completed')
    console.log('Complete');
  }
});

subject.subscribe({
  next(value) {
    logValues(value)
    console.log(value);
  }
});

subject.next('A new data piece')
subject.error('Error')
// subject.complete();
// subject.next('New Value'); // does not work because already be completed
