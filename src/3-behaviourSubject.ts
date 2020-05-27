import { BehaviorSubject } from 'rxjs';

import { logValues } from '../utils/util';

const subject = new BehaviorSubject(123);

// two new subscribers will get initial value => output: 123, 123
subject.subscribe({
  next(value) {
    logValues(value);
    console.log(value);
  }
});
subject.subscribe({
  next(value) {
    logValues(value);
    console.log(value);
  }
});

// two subscribers will get new value => output: 456, 456
subject.next(456);

// new subscriber will get latest value (456) => output: 456
subject.subscribe({
  next(value) {
    logValues(value);
    console.log(value);
  }
});

// all three subscribers will get new value => output: 789, 789, 789
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789
