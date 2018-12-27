"use strict";
exports.__esModule = true;
var test_utils_1 = require("@material-ui/core/test-utils");
var React = require("react");
var App_1 = require("src/layout/App");
var wrapper = test_utils_1.createShallow()(React.createElement(App_1["default"], null));
describe("src/App", function () {
    test("renders without crashing", function () {
        expect(wrapper.exists()).toBe(true);
    });
});
//# sourceMappingURL=App.spec.js.map