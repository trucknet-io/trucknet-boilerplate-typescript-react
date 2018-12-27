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
var Grid_1 = require("@material-ui/core/Grid");
var styles_1 = require("@material-ui/core/styles");
var React = require("react");
var HelloWorld_1 = require("src/components/HelloWorld");
var styles = {};
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        return (React.createElement(Grid_1["default"], { container: true, spacing: 24 },
            React.createElement(Grid_1["default"], { item: true, xs: 12, sm: 12 },
                React.createElement(HelloWorld_1["default"], { message: "Hello, Dashboard!", color: "#000" }))));
    };
    return Dashboard;
}(React.PureComponent));
exports["default"] = styles_1.withStyles(styles)(Dashboard);
//# sourceMappingURL=Dashboard.js.map