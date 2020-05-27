## Link to read and understand

- [FreeCodeCamp article](https://www.freecodecamp.org/news/an-introduction-to-subjects-in-reactive-programming-bbdc8fed7b6/).

```
The BehaviorSubject is similar to a Subject except it `requires an initial value` as an argument to mark the starting point of the data stream. The reason is because when we subscribe, it returns the last message. This is similar concept when dealing with arrays; where we do [array.length - 1] to get the latest value.

Abstract: Requires an initial value and emits its current value (last emitted item) to new subscribers.
```

## Code example

```html
<button>Click me</button>
<div></div>
```

```ts
import { BehaviorSubject } from 'rxjs';

const clickEmitted = new BehaviorSubject('Not clicked');
const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => clickEmitted.next('Clicked!'));

clickEmitted.subscribe(
  (value) => div.textContent = value
);

// =========== Another example ===========

const bs = new BehaviorSubject('Hola');

bs.subscribe(console.log);

bs.next('Mundo');

bs.subscribe(console.log); // Emits last value
```
