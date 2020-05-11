import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// check the console
fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);