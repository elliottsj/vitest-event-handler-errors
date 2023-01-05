# vitest-event-handler-errors

Demonstration of the issue described in https://github.com/vitest-dev/vitest/discussions/2520.

## Problem

Using react-testing-library and jsdom, errors thrown in event handlers do not cause the test to fail. Instead, the error is printed to stderr and the test passes.

```
❯ pnpm test:run

> @vitest/example-testing-lib-react@ test:run /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors
> vitest run


 RUN  v0.25.8 /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors

stdout | src/components/input.test.tsx > Input > should change input value
Open this URL in your browser

https://testing-playground.com/#markup=DwEwlgbgfMA2CGAjAprABAMwPYCcC8ARMgLbxiwFQCip5aAgiCDsgM6vAD0CKsMYAOwAOAVwAuaAfGLJCJMhTRgQc2orEBPIbKJqCaIQgDGyABZZYIZPgI0F++DjDwAtD1SE7dRszatKXODQQA

stderr | src/App.test.tsx > Simple working test > should increment count on click
Error: Uncaught [Error: Error thrown from App component]
    at reportException (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
    at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
    at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
    at HTMLUnknownElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
    at HTMLUnknownElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
    at HTMLUnknownElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
    at Object.invokeGuardedCallbackDev (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
    at invokeGuardedCallback (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
    at invokeGuardedCallbackAndCatchFirstError (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4291:25)
    at executeDispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:9041:3) Error: Error thrown from App component
    at throwError (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/src/App.tsx:8:11)
    at onClick (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/src/App.tsx:20:15)
    at HTMLUnknownElement.callCallback (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
    at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
    at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
    at HTMLUnknownElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
    at HTMLUnknownElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
    at HTMLUnknownElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
    at Object.invokeGuardedCallbackDev (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
Error: Uncaught [Error: Error thrown from App component]
    at reportException (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
    at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
    at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
    at HTMLButtonElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
    at HTMLButtonElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
    at HTMLButtonElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
    at file:///Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+user-event@14.4.3/node_modules/@testing-library/user-event/dist/esm/event/dispatchEvent.js:43:33
    at /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/pure.js:79:16
    at /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/act-compat.js:64:24
    at act (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js:2512:16) Error: Error thrown from App component
    at throwError (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/src/App.tsx:8:11)
    at onClick (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/src/App.tsx:20:15)
    at HTMLUnknownElement.callCallback (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4164:14)
    at HTMLUnknownElement.callTheUserObjectsOperation (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventListener.js:26:30)
    at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:350:25)
    at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
    at HTMLUnknownElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
    at HTMLUnknownElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
    at HTMLUnknownElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
    at Object.invokeGuardedCallbackDev (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4213:16)

 ✓ src/hooks/useCounter.test.ts (1)
 ✓ src/App.test.tsx (3)
 ✓ src/components/input.test.tsx (3)

 Test Files  3 passed (3)
      Tests  7 passed (7)
   Start at  18:39:23
   Duration  1.38s (transform 497ms, setup 419ms, collect 642ms, tests 217ms)
```

## Solutions tried

1. Use [`jsdom`'s `VirtualConsole`](https://github.com/jsdom/jsdom#virtual-consoles) to capture errors and fail the test. This does not work; see comments in [vite.config.ts](vite.config.ts) for details.
2. Override `console.error` in a setup file. **This works**, but produces output that is verbose missing the relevant stack trace. See comments in [setup.ts](src/test/setup.ts) for details.

## Usage

```shell
pnpm install
pnpm test:run
```

Observe that tests pass, but the error is printed to stderr.

To test the `console.error` override, uncomment the first few lines of [setup.ts](src/test/setup.ts) and re-run the tests.
