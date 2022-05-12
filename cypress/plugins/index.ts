require('dotenv').config({ path: '.env.test' });

/**
 * @type {Cypress.PluginConfig}
 */
 module.exports = (on: any, config: { env: object }) => {
  config.env = process.env;

  return config;
};
