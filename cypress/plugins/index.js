// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const webpack = require("@cypress/webpack-preprocessor");

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const { PROJECT_NAME, REGION, API_SERVER_URL } = process.env;

  config.env = {
    PROJECT_NAME,
    REGION,
    API_SERVER_URL,
  };

  const options = {
    // send in the options from your webpack.config.js, so it works the same
    // as your app's code
    webpackOptions: require("../webpack.config"),
    watchOptions: {},
  };

  on("file:preprocessor", webpack(options));

  return config;
};
