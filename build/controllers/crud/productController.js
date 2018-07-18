"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class ProductController extends crudController_1.CrudController {
    constructor() {
        super(services_1.productService);
    }
    filter(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.filter(params, option);
        });
    }
    postProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.postProduct(params);
        });
    }
    postQuickProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.postQuickProduct(params);
        });
    }
    getProductWithHistory(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getProductWithHistory(params, option);
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map