"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class GlobalAttributeRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.globalAttributeController);
    }
}
exports.default = GlobalAttributeRouter;
//# sourceMappingURL=global_attribute.js.map