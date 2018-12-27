"use strict";
exports.__esModule = true;
var react_1 = require("@storybook/react");
var React = require("react");
var HelloWorld_1 = require("src/components/HelloWorld");
var stories = react_1.storiesOf("HelloWorld", module);
stories.add("With black message default", function () { return React.createElement(HelloWorld_1["default"], { color: "black", message: "default" }); });
stories.add("With red message Hellow", function () { return React.createElement(HelloWorld_1["default"], { color: "red", message: "Helo" }); });
stories.add("With red emoji", function () { return React.createElement(HelloWorld_1["default"], { color: "red", message: "\uD83D\uDE0B" }); });
//# sourceMappingURL=HelloWorld.stories.js.map