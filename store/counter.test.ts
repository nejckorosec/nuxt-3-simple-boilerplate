import { setActivePinia, createPinia } from 'pinia';
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
} from 'vitest';

import { useCounterStore } from './counter';

beforeAll(() => {
  setActivePinia(createPinia());
});

describe('useCounterStore', () => {
  let store: ReturnType<typeof useCounterStore>;

  beforeEach(() => {
    store = useCounterStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test('creates counter store', () => {
    expect(store).toBeDefined();
  });

  test('init with default settings', () => {
    expect(store.counter).toEqual(0);
  });

  test('increment counter', () => {
    expect(store.counter).toEqual(0);
    store.increment();
    expect(store.counter).toEqual(1);
    store.increment();
    store.increment();
    expect(store.counter).toEqual(3);
  });
});
