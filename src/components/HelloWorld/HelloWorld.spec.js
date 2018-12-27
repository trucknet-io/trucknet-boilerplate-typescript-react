"use strict";
exports.__esModule = true;
var test_utils_1 = require("@material-ui/core/test-utils");
var React = require("react");
var HelloWorld_1 = require("src/components/HelloWorld");
var message = "test";
var color = "red";
var wrapper = test_utils_1.createShallow()(React.createElement(HelloWorld_1["default"], { message: message, color: color }));
describe("src/components/HelloWorld", function () {
    test("Should contain message with !", function () {
        expect(wrapper.text()).toBe(message + "!");
    });
    test("Should be in the color of color prop", function () {
        expect(wrapper.find("h1").prop("style")).toMatchObject({
            color: color
        });
    });
});
//# sourceMappingURL=HelloWorld.spec.js.map