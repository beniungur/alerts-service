"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alerts_dao_1 = __importDefault(require("../dao/alerts.dao"));
class AlertsService {
    push(alert) {
        return __awaiter(this, void 0, void 0, function* () {
            return alerts_dao_1.default.pushAlert(alert);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return alerts_dao_1.default.getAlerts();
        });
    }
}
exports.default = new AlertsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hbGVydHMvc2VydmljZXMvYWxlcnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBMEM7QUFJMUMsTUFBTSxhQUFhO0lBQ1QsSUFBSSxDQUFDLEtBQWU7O1lBRXRCLE9BQU8sb0JBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssSUFBSSxDQUFDLEtBQWEsRUFBRSxJQUFZOztZQUNsQyxPQUFPLG9CQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDIn0=