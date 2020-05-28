import { Observable } from 'rxjs';

// const greetingPoster = new Promise((resolve, reject) => {
//   resolve('Welcome! Nice to meet you.');
// });

// console.log('1-Before calling then on Promise');

// greetingPoster.then(res => console.log(`3-Greeting from promise: ${res}`));

// console.log('2-After calling then on Promise (proof of being always async)');

// =====================================================================

const greetingLady$ = new Observable(observer => {
  console.log('2-Inside Observable (proof of being lazy)');
  observer.next('3-Hello! I am glad to get to know you.');
  observer.complete();
});

console.log('1-Before calling subscribe on Observable');

greetingLady$.subscribe({
  next: console.log,
  complete: () => console.log('4-End of conversation with preety lady')
});

// =====================================================================
// ANNOTATIONS

/*
In a nutshell, the main differences between a Promise and an Observable are as follows:

* a Promise is eager, whereas an Observable is lazy,
* a Promise is always asynchronous, while an Observable can be either synchronous or
asynchronous. Even if it’s immediatelly resolved.
* a Promise can provide a single value, whereas an Observable is a stream of values
(from 0 to multiple values), you can apply RxJS operators to an Observable to get a
new tailored stream.
*/
