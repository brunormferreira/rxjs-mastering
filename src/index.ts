import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const observable = Observable.create((observer: any) => {
  observer.next('Hello World!');
  observer.next('Hello Again!');
  observer.complete();
  observer.next('Bye');
})

observable.subscribe(
  (param: any) => logItem(param),
  (error: any) => logItem('Error: ' + error),
  () => logItem('Completed')
);

function logItem(value: any) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  document.getElementById('list').appendChild(node);
}

//---------------------------------------------

map(
  (param: number) => param * param)
  (of(1, 2, 3)).subscribe((value) => console.log(`Output is: ${value}`)
);