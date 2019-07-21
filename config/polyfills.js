const {
	createPolyfillsTransformerFactory
} = require("typescript-polyfills-generator");

const getCustomTransformers = () => {
	return {
		before: [
			createPolyfillsTransformerFactory({
				targets: "last 2 versions, IE >= 9"
			})
		]
	};
};

module.exports = getCustomTransformers;
