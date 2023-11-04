"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function showHelloWorld() {
    console.log('Hello, World!');
    // of(1, 2, 3).pipe(
    //   concatMap((value) => interval(1000))
    // ).subscribe((value) => {
    //   console.log(`ConcatMap: ${value}`);
    // });
    // ///*** */
    // //interval(100).pipe( audit(x => interval(x * 1000)), takeUntil(interval(3500)) )
    // // Создаем Observable, который испускает значение каждые 100 мс.
    // const source$ = interval(100);
    // // Создаем Observable, который завершается через 3500 мс.
    // const stop$ = interval(3500).pipe(takeUntil(interval(3500)));
    // // Применяем оператор audit, который задерживает значения на основе времени, указанного внутри функции.
    // // В данном случае задержка будет увеличиваться с каждым новым значением.
    // const example$ = source$.pipe(
    //   audit(value => interval(value * 1000)),
    //   takeUntil(stop$)
    // );
    // // Подписываемся на результат и выводим значения в консоль.
    // const subscribe = example$.subscribe(val => console.log(`Value: ${val}`));
    // //***** */
    //What result does stream produce: forkJoin([ timer(500, 1000), of(1, 2, 3) ])
    // Создаём Observable, который начинает выдавать значения через 500 мс и затем каждую секунду
    // const timer$ = timer(500, 1000);
    // // Создаём Observable, который выдаёт значения 1, 2, 3 сразу
    // const numbers$ = of(1, 2, 3);
    // // Используем forkJoin для получения последних значений каждого Observable как только они завершатся
    // const combined$ = forkJoin([timer$, numbers$]);
    // // Подписываемся на результат и выводим значения в консоль
    // const subscribe = combined$.subscribe({
    //   next: values => console.log(values),
    //   complete: () => console.log('Completed')
    // });
    //stream: interval(100).pipe( audit(() => interval(1000)), takeUntil(interval(3500)) )
    // Создаем Observable, который испускает значение каждые 100 мс.
    const source$ = (0, rxjs_1.interval)(100);
    // Создаем Observable, который будет использоваться для завершения source$ потока через 3500 мс.
    const stop$ = (0, rxjs_1.interval)(3500).pipe((0, operators_1.takeUntil)((0, rxjs_1.interval)(3500)));
    // Применяем оператор audit, который задерживает значения на основе внутреннего interval Observable,
    // который испускает значения каждую секунду. Таким образом, audit будет пропускать значение
    // каждую секунду, но только если в этот момент будет испущено новое значение исходным потоком.
    // const example$ = source$.pipe(
    //   audit(() => interval(1000)),
    //   takeUntil(stop$)
    // );
    //const example$ = interval(100).pipe(audit(() => interval(1000)), takeUntil(interval(3500)));
    //const example$ = interval(1000).pipe(take(2), concatMap(() => interval(100).pipe(take(3))))
    //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3), EMPTY])
    //const example$ = interval(1000).pipe(map(console.log), startWith('Angular'));
    //const example$ = timer(500, 1000).pipe(filter(x => !x % 2), take(3))
    //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3), EMPTY]);
    //const example$ = forkJoin([timer(500, 1000), of(1, 2, 3)])
    // const example$ = interval(100).pipe(take(2), mergeMap(() => interval(1000).pipe(take(3))))
    const example$ = (0, rxjs_1.race)((0, rxjs_1.interval)(10000).pipe((0, operators_1.take)(3)), Promise.resolve(1), (0, rxjs_1.of)(10));
    // Подписываемся на результат и выводим значения в консоль.
    const subscribe = example$.subscribe({
        next: value => console.log(`Audit Value: ${value}`),
        complete: () => console.log('Stream Completed')
    });
}
// Вызов функции
showHelloWorld();
