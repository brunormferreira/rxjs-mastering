## Link to read and understand

- [FreeCodeCamp article](https://www.freecodecamp.org/news/what-are-observables-how-they-are-different-from-promises/).

## Code example

```html
<button>Click me</button>
```

```ts
const button = document.querySelector('button');

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

//Rx.Observable.fromEvent(button, 'click')
const subscription = Rx.Observable.create((obs) => {
  //obs.next('A value');
  //obs.error('Error');
  //setTimeout(function() {
  //  obs.complete();
  //  obs.next('A second value');
  //}, 2000);
  button.onclick = function(event) {
    obs.next(event);
  }
})
  .subscribe(observer);
  
setTimeout(() => subscription.unsubscribe(), 5000);
```