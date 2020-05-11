import { Observable } from 'rxjs';

import { renderItems } from '../config/utils/util';

const observable = Observable.create((observer: any) => {
  observer.next('Hello World!');
  observer.next('Hello Again!');
  observer.complete();
  observer.next('Bye'); // doest not render because its completed
})

const subscription = observable.subscribe(
  (param: any) => renderItems(param),
  (error: any) => renderItems('Error: ' + error),
  () => renderItems('Completed')
);

setTimeout(() => {
  subscription.unsubscribe();
}, 2000);
