import { Observable } from 'rxjs';

import { logValues } from '../utils/util';

const observable = Observable.create((observer: any) => {
  observer.next('Hello World!');
  observer.next('Hello Again!');
  observer.complete();
  observer.next('Bye'); // doest not render because its completed
})

const subscription = observable.subscribe(
  (param: any) => logValues(param),
  (error: any) => logValues('Error: ' + error),
  () => logValues('Completed')
);

setTimeout(() => {
  subscription.unsubscribe();
}, 2000);
