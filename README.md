# vitest-event-handler-errors

Demonstration of the issue described in (link).

## Problem

Using react-testing-library and jsdom, errors thrown in event handlers do not cause the test to fail. Instead, the error is printed to stderr and the test passes.

## Solutions tried

1. Use [`jsdom`'s `VirtualConsole`](https://github.com/jsdom/jsdom#virtual-consoles) to capture errors and fail the test. This does not work; see comments in [vite.config.js](vite.config.js) for details.
2. Override `console.error` in a setup file. **This works**, but produces output that is verbose missing the relevant stack trace. See comments in [setup.ts](src/test/setup.ts) for details.

## Usage

```shell
pnpm install
pnpm test:run
```

Observe that tests pass, but the error is printed to stderr.

To test the `console.error` override, uncomment the first few lines of [setup.ts](src/test/setup.ts) and re-run the tests.
