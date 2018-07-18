"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudService_pg_1 = require("../crudService.pg");
const tables_1 = require("@/models/tables");
class CommentService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.Comment);
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=commentService.js.map