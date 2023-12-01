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
const cards_service_1 = __importDefault(require("../../cards/services/cards.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:dao');
class AlertsDao {
    constructor() {
        this.alerts = [];
        log('Created new instance of AlertsDao');
    }
    pushAlert(alert) {
        return __awaiter(this, void 0, void 0, function* () {
            this.alerts.push(alert);
            cards_service_1.default.sendAlert(alert);
            return alert;
        });
    }
    getAlerts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.alerts;
        });
    }
}
exports.default = new AlertsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FsZXJ0cy9kYW8vYWxlcnRzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVGQUE4RDtBQUU5RCxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRTlDLE1BQU0sU0FBUztJQUdYO1FBRkEsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFHekIsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVLLFNBQVMsQ0FBQyxLQUFlOztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4Qix1QkFBWSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMifQ==