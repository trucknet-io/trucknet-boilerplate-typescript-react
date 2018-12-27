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
var styles_1 = require("@material-ui/core/styles");
var React = require("react");
var Header_1 = require("src/layout/Header");
var Dashboard_1 = require("src/pages/Dashboard");
var styles = function (theme) {
    var _a;
    return ({
        layout: (_a = {
                paddingTop: 30,
                width: "auto",
                marginLeft: theme.spacing.unit * 3,
                marginRight: theme.spacing.unit * 3
            },
            _a[theme.breakpoints.up(theme.spacing.unit * 3 * 2 + 900)] = {
                width: 900,
                marginLeft: "auto",
                marginRight: "auto"
            },
            _a)
    });
};
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement(React.Fragment, null,
            React.createElement(Header_1["default"], null),
            React.createElement("main", { className: classes.layout },
                React.createElement(Dashboard_1["default"], null))));
    };
    return Body;
}(React.Component));
exports["default"] = styles_1.withStyles(styles)(Body);
//# sourceMappingURL=Body.js.map