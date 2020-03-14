"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var body_parser_1 = tslib_1.__importDefault(require("body-parser"));
var express_1 = tslib_1.__importDefault(require("express"));
var http_1 = tslib_1.__importDefault(require("http"));
var routes_1 = require("./routes");
function start() {
    // configure the app with baseline
    var app = express_1.default()
        .use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }))
        .use(body_parser_1.default.json({ limit: "50mb" }));
    routes_1.RegisterRoutes(app);
    app.use(function (err, _req, res, next) {
        var status = err.status || 500;
        var body = {
            fields: err.fields || undefined,
            message: err.message || "An error occurred during the request.",
            name: err.name,
            status: status
        };
        res.status(status).json(body);
        next();
    });
    var server = http_1.default.createServer(app);
    server.listen(3002);
}
start();
//# sourceMappingURL=server.js.map