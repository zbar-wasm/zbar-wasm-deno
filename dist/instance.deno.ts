import { loadWasmInstance } from './load.deno.ts';
import ZBarInstance from './ZBarInstance.deno.ts';

let inst: ZBarInstance | null = null;

let instPromise = (async () => {
  inst = await loadWasmInstance({});
  if (!inst) {
    throw Error('WASM was not loaded');
  }
  return inst;
})();

export const getInstance = async (): Promise<ZBarInstance> => {
  return await instPromise;
};
