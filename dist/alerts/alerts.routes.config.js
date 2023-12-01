"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const alerts_controller_1 = __importDefault(require("./controllers/alerts.controller"));
class AlertsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AlertsRoutes');
    }
    configureRoutes() {
        this.app.route(`/alerts`)
            .get(alerts_controller_1.default.getAlerts)
            .post(alerts_controller_1.default.pushAlert);
        return this.app;
    }
}
exports.AlertsRoutes = AlertsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnRzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hbGVydHMvYWxlcnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBRWxFLHdGQUErRDtBQUUvRCxNQUFhLFlBQWEsU0FBUSx5Q0FBa0I7SUFDaEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ3hCLEdBQUcsQ0FBQywyQkFBZ0IsQ0FBQyxTQUFTLENBQUM7YUFDL0IsSUFBSSxDQUFDLDJCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFaRCxvQ0FZQyJ9