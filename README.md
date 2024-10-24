# About

This is a work in progress project used for presenting RxJS capabilities using marble tests and examples.

# How to use

The `test/simple.test.ts` file contains various tests which should not be run as is, but instead serve as
a starting point for live coding.

The test suite `Marble Q&A Examples` contains empty `const expected = '  ';` variables to be completed
interactively while presenting, for a better understanding of the mental process when dealing with
RxJS observables and marble tests.

# Intro

## What is RxJS?
 - Reactive Extensions for JavaScript.
 - Provides a powerful way to work with asynchronous data streams (observables).

## Why use RxJS?
- Handles complex async workflows easily.
- Provides declarative APIs for handling events, streams, user inputs, HTTP requests, etc.

## Why not Promises?
- Handling Multiple Values: RxJS can handle multiple values over time, whereas Promises handle a single value or error.
- Complex async workflows can be combined and modelled easily with RxJS. Also easy to validate with marble tests.
- Cancellation: RxJS allows easy cancellation of ongoing operations, which is more cumbersome with Promises.

## Key concepts
- Observable: A source of data over time (events, HTTP requests, etc.).
  - they are like “push” collections (they push data over time)
- Observer: A consumer that reacts to changes in the observable stream.
- Subscription: Establishes a connection between observer and observable.
- Operators: Functions that modify streams.

## I will not copy paste documentation here
So: https://rxjs.dev/guide/observable

# Hands on examples
1. Subscribing to an Observable: shorthand vs full syntax.
2. `of` creates an observable that emits each argument and then completes. (unit test)
3. `interval`, `take` and `map`: let's create a polling observable. (marbles & test)
4. `switchMap`: Polling an HTTP endpoint (marbles & test)
5. `switchMap`, `mergeMap`, `concatMap` (marble examples)
6. Other useful ones: `tap`, `finalize`, `catchError`
7. Marble Q&A Examples

# Resources
1. [Main RxJS website](https://rxjs.dev/)
1. [Another site with well explained operators](https://www.learnrxjs.io/learn-rxjs/operators/creation/interval)
1. [Operator decision tree](https://rxjs.dev/operator-decision-tree)
1. [Operators as marbles](https://rxjsmarbles.dev/interval)