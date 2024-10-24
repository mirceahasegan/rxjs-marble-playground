import { TestScheduler } from 'rxjs/testing';
import {
  of,
  interval,
  take,
  map,
  switchMap,
  delay,
  from,
  merge,
  mergeMap,
  concatMap,
  filter,
} from 'rxjs';

describe('Observable', () => {
  let testScheduler: TestScheduler;

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('can subscribe with three callbacks', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const obsMarble = '--a--b--c-|';
      const observable = cold(obsMarble);

      // simple subscribe syntax

      // full subscribe syntax
    });
  });

  it('of operator creates an observable', () => {
    const observable = of('hello', 'world');

    // simple subscribe syntax
    observable.subscribe((value) => console.log(value));

    // full subscribe syntax)
  });

  it('interval, map and take', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const pollingObservable = interval(2);
      pollingObservable.subscribe((value) => console.log(value));

      // .pipe(
      //   map((value: number) => value.toString()),
      //   take(3),
      // );
      {
        // expectObservable(pollingObservable).toBe('--0-1-(2|)');
      }
    });
  });

  it('switchMap cancels previous request', () => {
    testScheduler.run(({ expectObservable, cold }) => {
      const httpReq = (resp: string, delayTime: number) =>
        of(resp).pipe(delay(delayTime));

      const pollingObservable$ = interval(2).pipe(take(5));

      // pollingObservable$.subscribe((reqNumber) => {
      //   httpReq('hello' + reqNumber, reqNumber === 0 ? 5 : 0).subscribe(
      //     (response) => {
      //       console.log(response);
      //     },
      //   );
      // });

      const httpPolling$ = pollingObservable$.pipe(
        mergeMap((reqNumber) =>
          httpReq('hello' + reqNumber, reqNumber === 0 ? 5 : 0),
        ),
      );

      // httpPolling$.subscribe((response) => {
      //     console.log(response);
      //   });

      // SwitchMap marbles
      {
        // expectObservable(httpPolling$).toBe('----b-c-d-(e|)', {
        //   b: 'hello1',
        //   c: 'hello2',
        //   d: 'hello3',
        //   e: 'hello4',
        // });
      }

      // mergeMap marbles
      {
        // expectObservable(httpPolling$).toBe('----b-cad-(e|)', {
        //   a: 'hello0',
        //   b: 'hello1',
        //   c: 'hello2',
        //   d: 'hello3',
        //   e: 'hello4',
        // });
      }
    });
  });

  describe('Marble Q&A Examples', () => {
    it('map operator', () => {
      testScheduler.run(({ cold, expectObservable }) => {
        const source = cold('--a--b--c--|');
        const expected = '  ';
        const result = source.pipe(map((x) => x.toUpperCase()));
        expectObservable(result).toBe(expected);
      });
    });

    it('filter operator', () => {
      testScheduler.run(({ cold, expectObservable }) => {
        const source = cold('--a--b--c--d--|');
        const expected = '';
        const result = source.pipe(filter((x) => x !== 'b' && x !== 'd'));
        expectObservable(result).toBe(expected);
      });
    });

    it('mergeMap operator', () => {
      testScheduler.run(({ cold, expectObservable }) => {
        const source = cold('--a-b----|');
        const expected = '';
        const result = source.pipe(
          mergeMap((x) => of(x.toUpperCase()).pipe(delay(3))),
        );
        expectObservable(result).toBe(expected);
      });
    });

    it('concatMap operator', () => {
      testScheduler.run(({ cold, expectObservable }) => {
        const source = cold('--a-b------|');
        const expected = '';

        const result = source.pipe(
          concatMap((x) => of(x.toUpperCase()).pipe(delay(3))),
        );
        expectObservable(result).toBe(expected);
      });
    });

    it('switchMap operator', () => {
      testScheduler.run(({ cold, expectObservable }) => {
        const source = cold('--a-b----|');
        const expected = '';
        const result = source.pipe(
          switchMap((x) => of(x.toUpperCase()).pipe(delay(3))),
        );
        expectObservable(result).toBe(expected);
      });
    });
  });
});
