/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// import * as jsdom from "jsdom";

// const virtualConsole = new jsdom.VirtualConsole();
// virtualConsole.sendTo(globalThis.console);
// virtualConsole.on("jsdomError", (error) => {
//   throw error;
// });

// The above does not work. Upon `vitest run`, this error is thrown:

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Errors ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

// Vitest caught 3 unhandled errors during the test run.
// This might cause false positive tests. Resolve unhandled errors to make sure your tests are not affected.

// ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Error ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
// DataCloneError: () => {
//       // If "error" event has no listeners,
//       // EventEmitter throws an exception
//     } could not be cloned.
//  ❯ new DOMException node:internal/per_context/domexception:53:5
//  ❯ WorkerInfo.postTask node_modules/.pnpm/tinypool@0.3.0/node_modules/tinypool/dist/esm/index.js:409:17
//  ❯ ThreadPool.runTask node_modules/.pnpm/tinypool@0.3.0/node_modules/tinypool/dist/esm/index.js:695:16
//  ❯ Tinypool.run node_modules/.pnpm/tinypool@0.3.0/node_modules/tinypool/dist/esm/index.js:743:38
//  ❯ runFiles node_modules/.pnpm/vitest@0.25.8_eetf2xjpdhuqcs2dx4ndfgw7iq/node_modules/vitest/dist/chunk-vite-node-externalize.b9495318.js:7607:20
//  ❯ node_modules/.pnpm/vitest@0.25.8_eetf2xjpdhuqcs2dx4ndfgw7iq/node_modules/vitest/dist/chunk-vite-node-externalize.b9495318.js:7623:70
//  ❯ Object.runTests node_modules/.pnpm/vitest@0.25.8_eetf2xjpdhuqcs2dx4ndfgw7iq/node_modules/vitest/dist/chunk-vite-node-externalize.b9495318.js:7623:56
//  ❯ async file:/Users/spencerelliott/Dev/elliottsj/vitest-event-handler-errors/node_modules/.pnpm/vitest@0.25.8_eetf2xjpdhuqcs2dx4ndfgw7iq/node_modules/vitest/dist/chunk-vite-node-externalize.b9495318.js:10748:9
//  ❯ Vitest.runFiles node_modules/.pnpm/vitest@0.25.8_eetf2xjpdhuqcs2dx4ndfgw7iq/node_modules/vitest/dist/chunk-vite-node-externalize.b9495318.js:10763:12

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    environmentOptions: {
      // virtualConsole,
    },
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
});
