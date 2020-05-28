import { Observable } from 'rxjs';

let accountBalance = 100;

const withdraw = (value) => {
  return new Observable((observer) => {
    setTimeout(() => {
      if (accountBalance < value) {
        observer.error('You dont have enough balance!')
        observer.next('Other msg') // no execute
      } else {
        accountBalance -= value;
        observer.next('Other msg')
        observer.next('Balance successfully withdrawn!')
        // observer.complete()
      }
    }, 2500)
  })
}

const subscription = withdraw(90)
  .subscribe(
    (r) => console.log('1', r),
    (error) => console.log(error),
    // () => console.log('Completed')
  );

const subscriptionError = withdraw(11)
  .subscribe(
    (r) => console.log(r),
    (error) => console.log('2', error),
    // () => console.log('Completed')
  );


setTimeout(() => {
  subscription.unsubscribe();
  subscriptionError.unsubscribe();
}, 4000);
