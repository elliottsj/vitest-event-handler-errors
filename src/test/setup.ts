import "@testing-library/jest-dom";

// console.error = (message) => {
//   throw new Error(message);
// };

// The above works, but produces verbose output upon running `vitest run`.
// I expect to see a stack trace for 'Error thrown from App component' only, including line 8 of App.tsx, but instead see the following:
//
// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

// Vitest caught 1 unhandled error during the test run.
// This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// Error: Error: Uncaught [Error: Error: Uncaught [Error: Error thrown from App component]
//     at reportException (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
//     at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
//     at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
//     at HTMLUnknownElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
//     at HTMLUnknownElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
//     at HTMLUnknownElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
//     at Object.invokeGuardedCallbackDev (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4213:16)
//     at invokeGuardedCallback (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4277:31)
//     at invokeGuardedCallbackAndCatchFirstError (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4291:25)
//     at executeDispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:9041:3)]
//     at reportException (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
//     at innerInvokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9)
//     at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3)
//     at HTMLButtonElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9)
//     at HTMLButtonElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17)
//     at HTMLButtonElement.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34)
//     at file:///Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+user-event@14.4.3/node_modules/@testing-library/user-event/dist/esm/event/dispatchEvent.js:43:33
//     at /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/pure.js:79:16
//     at /Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/act-compat.js:64:24
//     at act (/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js:2512:16)
//  ❯ reportException node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24
//  ❯ innerInvokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9
//  ❯ invokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3
//  ❯ HTMLUnknownElementImpl._dispatch node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9
//  ❯ HTMLUnknownElementImpl.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17
//  ❯ HTMLUnknownElement.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34
//  ❯ Object.invokeGuardedCallbackDev node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4213:16
//  ❯ invokeGuardedCallback node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4277:31
//  ❯ invokeGuardedCallbackAndCatchFirstError node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/cjs/react-dom.development.js:4291:25
//  ❯ reportException node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24
//  ❯ innerInvokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9
//  ❯ invokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3
//  ❯ HTMLButtonElementImpl._dispatch node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9
//  ❯ HTMLButtonElementImpl.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17
//  ❯ HTMLButtonElement.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34
//  ❯ node_modules/.pnpm/@testing-library+user-event@14.4.3/node_modules/@testing-library/user-event/dist/esm/event/dispatchEvent.js:43:33
//  ❯ node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/pure.js:79:16
//  ❯ node_modules/.pnpm/@testing-library+react@13.4.0_biqbaboplfbrettd7655fr4n2y/node_modules/@testing-library/react/dist/act-compat.js:64:24
//  ❯ act node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js:2512:16
//  ❯ Console.console.error src/test/setup.ts:4:9
//       2|
//       3| console.error = (message) => {
//       4|   throw new Error(message);
//        |         ^
//       5| };
//       6|
//  ❯ VirtualConsole.<anonymous> node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/virtual-console.js:29:45
//  ❯ VirtualConsole.emit node:events:513:28
//  ❯ reportException node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:70:28
//  ❯ innerInvokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:353:9
//  ❯ invokeEventListeners node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:286:3
//  ❯ HTMLButtonElementImpl._dispatch node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:233:9
//  ❯ HTMLButtonElementImpl.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:104:17
//  ❯ HTMLButtonElement.dispatchEvent node_modules/.pnpm/jsdom@20.0.3/node_modules/jsdom/lib/jsdom/living/generated/EventTarget.js:241:34
//  ❯ node_modules/.pnpm/@testing-library+user-event@14.4.3/node_modules/@testing-library/user-event/dist/esm/event/dispatchEvent.js:43:33
