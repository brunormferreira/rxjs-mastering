import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
  next(value) {
    console.log(value);
  },
  error(error) {
    console.log(error);
  },
  complete() {
    console.log('Complete');
  }
});

subject.subscribe({
  next(value) {
    console.log(value);
  }
});

subject.next('A new data piece');
subject.error('Error');