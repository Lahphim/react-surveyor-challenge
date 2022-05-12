require('dotenv').config({ path: '.env.test' });

/**
 * @type {Cypress.PluginConfig}
 */
const loadConfig = (on: any, config: { env: object }) => {
  config.env = process.env;

  return config;
};

export default loadConfig;
