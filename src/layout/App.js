"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var styles_1 = require("@material-ui/core/styles");
var React = require("react");
var theme_1 = require("src/contexts/theme");
var Body_1 = require("src/layout/Body");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(CssBaseline_1["default"], null),
            React.createElement(styles_1.MuiThemeProvider, { theme: theme_1.theme },
                React.createElement(Body_1["default"], null))));
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=App.js.map