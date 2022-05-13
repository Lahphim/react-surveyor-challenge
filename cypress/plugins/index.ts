import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

/**
 * @type {Cypress.PluginConfig}
 */
const loadConfig = (on: unknown, config: { env: object }) => {
  config.env = process.env;

  return config;
};

export default loadConfig;
