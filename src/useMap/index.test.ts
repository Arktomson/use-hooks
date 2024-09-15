import { act, renderHook } from '@testing-library/react';
import { useMap } from '.';

const setup = (initialMap?: Iterable<[any, any]>) =>
  renderHook(() => useMap(initialMap));

describe('useMap', () => {
  it('should init map and utils', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const map = result.current;

    expect(Array.from(map.value)).toEqual([
      ['foo', 'bar'],
      ['a', 1],
    ]);

    const { value, ...utils } = map;
    expect(utils).toStrictEqual({
      get: expect.any(Function),
      set: expect.any(Function),
      setAll: expect.any(Function),
      remove: expect.any(Function),
      reset: expect.any(Function),
      clear: expect.any(Function),
    });
  });

  it('should init empty map if not initial object provided', () => {
    const { result } = setup();
    expect([...result.current.value]).toEqual([]);

    const { result: result2 } = setup(undefined);
    expect([...result2.current.value]).toEqual([]);
  });

  it('should get corresponding value for initial provided key', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const { get, set } = result.current;

    let value;
    act(() => {
      value = get('a');
    });

    expect(value).toBe(1);
  });

  it('should get corresponding value for existing provided key', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);

    act(() => {
      result.current.set('a', 99);
    });

    let value;
    act(() => {
      value = result.current.get('a');
    });

    expect(value).toBe(99);
  });

  it('should get undefined for non-existing provided key', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const { get } = result.current;

    let value;
    act(() => {
      value = get('nonExisting');
    });

    expect(value).toBeUndefined();
  });

  it('should set new key-value pair', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const { set } = result.current;

    act(() => {
      set('newKey', 99);
    });

    expect([...result.current.value]).toEqual([
      ['foo', 'bar'],
      ['a', 1],
      ['newKey', 99],
    ]);
  });

  it('should override current value if setting existing key', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const { set } = result.current;

    act(() => {
      set('foo', 'qux');
    });

    expect([...result.current.value]).toEqual([
      ['foo', 'qux'],
      ['a', 1],
    ]);
  });

  it('should set new map', () => {
    const { result } = setup([
      ['foo', 'bar'],
      ['a', 1],
    ]);
    const { setAll } = result.current;

    act(() => {
      setAll([
        ['foo', 'foo'],
        ['a', 2],
      ]);
    });

    expect([...result.current.value]).toEqual([
      ['foo', 'foo'],
      ['a', 2],
    ]);

    act(() => {
      // @ts-ignore
      setAll();
    });
    expect([...result.current.value]).toEqual([]);
  });

  it('remove should be work', () => {
    const { result } = setup([['msg', 'hello']]);
    const { remove } = result.current;
    expect(result.current.value.size).toBe(1);
    act(() => {
      remove('msg');
    });
    expect(result.current.value.size).toBe(0);

    const { result: result2 } = setup([
      ['foo', 'bar'],
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const { remove: remove1 } = result2.current;

    act(() => {
      remove1('a');
    });

    expect([...result2.current.value]).toEqual([
      ['foo', 'bar'],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('reset should be work', () => {
    const { result } = setup([['msg', 'hello']]);
    const { set, reset } = result.current;
    act(() => {
      set('text', 'new map');
    });
    expect([...result.current.value]).toEqual([
      ['msg', 'hello'],
      ['text', 'new map'],
    ]);
    act(() => {
      reset();
    });
    expect([...result.current.value]).toEqual([
      ['msg', 'hello'],
    ]);
  });
  it('clear should be work', () => {
    const { result } = setup([['msg', 'hello']]);
    const { set, clear } = result.current;
    act(() => {
      set('text', 'new map');
    });
    expect([...result.current.value]).toEqual([
      ['msg', 'hello'],
      ['text', 'new map'],
    ]);
    act(() => {
      clear();
    });
    expect([...result.current.value]).toEqual([]);
  });
});
