```ts
const observer = {
  next(value: any) {
    console.log(value);
  },
  error(error: any) {
    console.log(error);
  },
  complete() {
    console.log('Completed');
  }
};

const observableExample = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.complete();
  }, 1000);
});
```