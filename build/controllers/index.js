"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("./crudController");
exports.CrudController = crudController_1.CrudController;
const authController_1 = require("./authController");
const vnpayController_1 = require("./vnpayController");
const userController_1 = require("./crud/userController");
const postController_1 = require("./crud/postController");
const productController_1 = require("./crud/productController");
const globalareaController_1 = require("./crud/globalareaController");
const billItemController_1 = require("./crud/billItemController");
const billActivityController_1 = require("./crud/billActivityController");
const billController_1 = require("./crud/billController");
const likeController_1 = require("./crud/likeController");
const commentController_1 = require("./crud/commentController");
const rateController_1 = require("./crud/rateController");
const globalPromotionController_1 = require("./crud/globalPromotionController");
const walletController_1 = require("./crud/walletController");
const walletImportController_1 = require("./crud/walletImportController");
const walletExportController_1 = require("./crud/walletExportController");
const paidHistoryController_1 = require("./crud/paidHistoryController");
const employeeController_1 = require("./crud/employeeController");
const globalAttributeController_1 = require("./crud/globalAttributeController");
const globalCategoryController_1 = require("./crud/globalCategoryController");
const globalCategoryAndAttributeController_1 = require("./crud/globalCategoryAndAttributeController");
const userSettingController_1 = require("./crud/userSettingController");
const favoriteProductController_1 = require("./crud/favoriteProductController");
const favoritePostController_1 = require("./crud/favoritePostController");
const notificationController_1 = require("./crud/notificationController");
const storeController_1 = require("./crud/storeController");
const reportController_1 = require("./crud/reportController");
const productPostController_1 = require("./crud/productPostController");
const historyMembershipController_1 = require("./crud/historyMembershipController");
const productGlobalAttributeController_1 = require("./crud/productGlobalAttributeController");
const vnpayHistoryController_1 = require("./crud/vnpayHistoryController");
const authController = new authController_1.AuthController();
exports.authController = authController;
const vnpayController = new vnpayController_1.VnpayController();
exports.vnpayController = vnpayController;
// Crud
const userController = new userController_1.UserController();
exports.userController = userController;
const postController = new postController_1.PostController();
exports.postController = postController;
const productController = new productController_1.ProductController();
exports.productController = productController;
const globalAreaController = new globalareaController_1.GlobalareaController();
exports.globalAreaController = globalAreaController;
const billItemController = new billItemController_1.BillItemController();
exports.billItemController = billItemController;
const billActivityController = new billActivityController_1.BillActivityController();
exports.billActivityController = billActivityController;
const billController = new billController_1.BillController();
exports.billController = billController;
const likeController = new likeController_1.LikeController();
exports.likeController = likeController;
const rateController = new rateController_1.RateController();
exports.rateController = rateController;
const commentController = new commentController_1.CommentController();
exports.commentController = commentController;
const globalPromotionController = new globalPromotionController_1.GlobalPromotionController();
exports.globalPromotionController = globalPromotionController;
const walletController = new walletController_1.WalletController();
exports.walletController = walletController;
const walletImportController = new walletImportController_1.WalletImportController();
exports.walletImportController = walletImportController;
const walletExportController = new walletExportController_1.WalletExportController();
exports.walletExportController = walletExportController;
const paidHistoryController = new paidHistoryController_1.PaidHistoryController();
exports.paidHistoryController = paidHistoryController;
const employeeController = new employeeController_1.EmployeeController();
exports.employeeController = employeeController;
const globalAttributeController = new globalAttributeController_1.GlobalAttributeController();
exports.globalAttributeController = globalAttributeController;
const globalCategoryController = new globalCategoryController_1.GlobalCategoryController();
exports.globalCategoryController = globalCategoryController;
const globalCategoryAndAttributeController = new globalCategoryAndAttributeController_1.GlobalCategoryAndAttributeController();
exports.globalCategoryAndAttributeController = globalCategoryAndAttributeController;
const userSettingController = new userSettingController_1.UserSettingController();
exports.userSettingController = userSettingController;
const favoriteProductController = new favoriteProductController_1.FavoriteProductController();
exports.favoriteProductController = favoriteProductController;
const favoritePostController = new favoritePostController_1.FavoritePostController();
exports.favoritePostController = favoritePostController;
const historyMembershipController = new historyMembershipController_1.HistoryMembershipController();
exports.historyMembershipController = historyMembershipController;
const productGlobalAttributeController = new productGlobalAttributeController_1.ProductGlobalAttributeController();
exports.productGlobalAttributeController = productGlobalAttributeController;
const notificationController = new notificationController_1.NotificationController();
exports.notificationController = notificationController;
const storeController = new storeController_1.StoreController();
exports.storeController = storeController;
const reportController = new reportController_1.ReportController();
exports.reportController = reportController;
const productPostController = new productPostController_1.ProductPostController();
exports.productPostController = productPostController;
const vnpayHistoryController = new vnpayHistoryController_1.VnpayHistoryController();
exports.vnpayHistoryController = vnpayHistoryController;
//# sourceMappingURL=index.js.map