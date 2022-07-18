import { render, screen } from '@testing-library/react';

import { sampleActions } from '@/reducers/Sample';
import TestProvider from '@/tests/TestProvider';

import { useAppDispatch, useAppSelector } from './store';

describe('hooks', () => {
  describe('useAppDispatch', () => {
    const SampleComponent = () => {
      const dispatch = useAppDispatch();

      dispatch(sampleActions.increment());

      return <div data-test-id="sample"></div>;
    };

    it('renders sample component with dispatch', () => {
      render(
        <TestProvider>
          <SampleComponent />
        </TestProvider>
      );

      const sample = screen.getByTestId('sample');

      expect(sample).toBeVisible();
    });
  });

  describe('useAppSelector', () => {
    let sampleNumber = 0;
    const SampleComponent = () => {
      const dispatch = useAppDispatch();

      dispatch(sampleActions.increment());
      sampleNumber = useAppSelector((state) => state.sample.value);

      return <div data-test-id="sample">{sampleNumber}</div>;
    };

    it('renders sample component with dispatch', () => {
      render(
        <TestProvider>
          <SampleComponent />
        </TestProvider>
      );

      const sample = screen.getByText(`${sampleNumber}`);

      expect(sample).toBeVisible();
    });
  });
});
