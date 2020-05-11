import { Subject } from 'rxjs';

import { renderItems } from '../config/utils/util';

const subject = new Subject();

subject.subscribe({
  next(value) {
    renderItems(value)
    console.log(value);
  },
  error(error) {
    renderItems(error)
    console.log(error);
  },
  complete() {
    renderItems('Completed')
    console.log('Complete');
  }
});

subject.subscribe({
  next(value) {
    renderItems(value)
    console.log(value);
  }
});

subject.next('A new data piece')
subject.error('Error')
// subject.complete();
// subject.next('New Value'); // does not work because already be completed
