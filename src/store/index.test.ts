import { store } from './index';

describe('appStore', () => {
  it('is able to read the sample state', () => {
    expect(store.getState().sample).toBeDefined();
  });
});
