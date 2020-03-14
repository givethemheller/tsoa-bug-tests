"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tsoa_1 = require("tsoa");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.AdminFindUser = function (request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    UserController.prototype.FindUser = function (request, requestBody, page, count) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, []];
            });
        });
    };
    UserController.prototype.GetUser = function (request, UserId) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, {}];
            });
        });
    };
    UserController.prototype.CreateUser = function (request, requestBody) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, requestBody];
            });
        });
    };
    UserController.prototype.UpdateUser = function (UserId, requestBody, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, requestBody];
            });
        });
    };
    UserController.prototype.deleteUser = function (UserId, request) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    };
    tslib_1.__decorate([
        tsoa_1.Get(),
        tsoa_1.Tags("User"),
        tslib_1.__param(0, tsoa_1.Request())
    ], UserController.prototype, "AdminFindUser", null);
    tslib_1.__decorate([
        tsoa_1.Post("find"),
        tsoa_1.Tags("User"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Header("page")),
        tslib_1.__param(3, tsoa_1.Header("count"))
    ], UserController.prototype, "FindUser", null);
    tslib_1.__decorate([
        tsoa_1.Get("{UserId}"),
        tsoa_1.Tags("User"),
        tslib_1.__param(0, tsoa_1.Request())
    ], UserController.prototype, "GetUser", null);
    tslib_1.__decorate([
        tsoa_1.Post(),
        tsoa_1.Tags("User"),
        tslib_1.__param(0, tsoa_1.Request()),
        tslib_1.__param(1, tsoa_1.Body())
    ], UserController.prototype, "CreateUser", null);
    tslib_1.__decorate([
        tsoa_1.Put("{UserId}"),
        tsoa_1.Tags("User"),
        tslib_1.__param(1, tsoa_1.Body()),
        tslib_1.__param(2, tsoa_1.Request())
    ], UserController.prototype, "UpdateUser", null);
    tslib_1.__decorate([
        tsoa_1.Delete("{UserId}"),
        tsoa_1.Tags("User"),
        tslib_1.__param(1, tsoa_1.Request())
    ], UserController.prototype, "deleteUser", null);
    UserController = tslib_1.__decorate([
        tsoa_1.Route("user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=User-controller.js.map