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
var AppBar_1 = require("@material-ui/core/AppBar");
var styles_1 = require("@material-ui/core/styles");
var Toolbar_1 = require("@material-ui/core/Toolbar");
var Typography_1 = require("@material-ui/core/Typography");
var React = require("react");
var styles = {
    title: {
        margin: "0 15px"
    }
};
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var classes = this.props.classes;
        return (React.createElement(AppBar_1["default"], { position: "static", color: "default" },
            React.createElement(Toolbar_1["default"], null,
                React.createElement(Typography_1["default"], { className: classes.title, variant: "title", color: "inherit" }, "Site title"))));
    };
    return Header;
}(React.PureComponent));
exports["default"] = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=Header.js.map