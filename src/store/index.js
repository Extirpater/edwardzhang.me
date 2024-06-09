import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import zustymiddleware from 'zustymiddleware';

const useStore = create(devtools(immer((set) => {
  return {
    count: 0,
    // careful with this syntax if 2nd arg is true it will replace all state rather than merge
    increment: () => zustymiddleware(set((draftState) => { draftState.count += 1; }), false, 'count/increment'),
    decrement: () => zustymiddleware(set((draftState) => { draftState.count -= 1; }), false, 'count/decrement'),
  };
})));

export default useStore;
