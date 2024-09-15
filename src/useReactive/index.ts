import { useCreation, useUpdate } from 'use-hooks';

function Observer<T extends Record<string, any>>(
  initialState: T,
  callback: () => void,
): T {
  return new Proxy<T>(initialState, {
    get(target, key, receiver) {
      const res = Reflect.get(target, key, receiver);
      return typeof res === 'object'
        ? Observer(res, callback)
        : Reflect.get(target, key);
    },
    set(target, key, val) {
      const ret = Reflect.set(target, key, val);
      callback();
      return ret;
    },
    deleteProperty(target, key) {
      const ret = Reflect.deleteProperty(target, key);
      callback();
      return ret;
    },
  });
}
export const useReactive = <T extends Record<string, any>>(
  initialState: T,
): T => {
  const update = useUpdate();
  const state = useCreation(() => Observer(initialState, update), []);
  return state;
};
