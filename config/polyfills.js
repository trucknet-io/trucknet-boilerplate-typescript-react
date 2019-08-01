const {
  createPolyfillsTransformerFactory,
} = require("typescript-polyfills-generator");

const getCustomTransformers = () => {
  return {
    before: [createPolyfillsTransformerFactory()],
  };
};

module.exports = getCustomTransformers;
