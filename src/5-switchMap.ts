import { interval, fromEvent, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { logValues } from '../utils/util';

// check the console
fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);

//==============================================

// Function to simulate database call
const fetchOrders = async (userId: number) => {
  return `${userId}'s order data`
}

const user = of({ uid: Math.random() });

const orders = user.pipe(
  switchMap(user => fetchOrders(user.uid))
);

user.subscribe(console.log);

orders.subscribe((next: any) => {
  logValues(next)
})
