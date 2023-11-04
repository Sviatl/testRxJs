import { of, interval, fromEvent, timer, forkJoin, EMPTY, from, race } from 'rxjs';
import { concatMap, exhaustMap, bufferTime, audit, takeUntil, take, map, startWith, filter, mergeMap, delay } from 'rxjs/operators';

function showHelloWorld() {
  console.log('Hello, World!');
  //const example$ = interval(100).pipe(audit(() => interval(1000)), takeUntil(interval(3500)));

  //const example$ = interval(1000).pipe(take(2), concatMap(() => interval(100).pipe(take(3))))

  //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3), EMPTY])
  //const example$ = interval(1000).pipe(map(console.log), startWith('Angular'));
  //const example$ = timer(500, 1000).pipe(filter(x => !x % 2), take(3))

  //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3), EMPTY]);

  //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3)])

  // const example$ = interval(100).pipe(take(2), mergeMap(() => interval(1000).pipe(take(3))))
  const example$ = race(interval(10000).pipe(take(3)), Promise.resolve(1), of(10))




  // Подписываемся на результат и выводим значения в консоль.
  const subscribe = example$.subscribe({
    next: value => console.log(`Audit Value: ${value}`),
    complete: () => console.log('Stream Completed')
  });
}

// Вызов функции
showHelloWorld();