import { faker } from '@faker-js/faker';

import { capitalize } from './';

describe('String helper', () => {
  describe('capitalize', () => {
    it('returns capitalize text', () => {
      const text = `${faker.company}`.toLowerCase;

      expect(capitalize(`the ${text}`)).toBe(`The ${text}`);
    });
  });
});
