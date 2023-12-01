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
const alerts_service_1 = __importDefault(require("../services/alerts.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:alerts-controller');
class AlertsController {
    getAlerts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alerts = yield alerts_service_1.default.list(100, 2);
            res.status(200).send(alerts);
        });
    }
    pushAlert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield alerts_service_1.default.push(req.body);
            res.status(200).send(`${alert.environment}: Alert sent successfully`);
        });
    }
}
exports.default = new AlertsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9hbGVydHMvY29udHJvbGxlcnMvYWxlcnRzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRkFBdUQ7QUFDdkQsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTVELE1BQU0sZ0JBQWdCO0lBQ1osU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN2RCxNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLDJCQUEyQixDQUFDLENBQUM7UUFDMUUsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGdCQUFnQixFQUFFLENBQUMifQ==