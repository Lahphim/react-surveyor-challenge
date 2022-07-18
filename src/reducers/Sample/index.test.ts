import { sampleReducers, initialState, SampleState } from './index';

describe('sample reducer', () => {
  describe('increment', () => {
    it('changes the value by increasing 1', () => {
      const mockState: SampleState = { ...initialState };

      sampleReducers.increment(mockState);

      expect(initialState.value).toBe(0);
      expect(mockState.value).toBe(1);
    });
  });
});
