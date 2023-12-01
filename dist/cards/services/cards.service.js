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
const axios_1 = __importDefault(require("axios"));
const debug_1 = __importDefault(require("debug"));
const adaptive_card_resource_1 = require("../resources/adaptive-card.resource");
const log = (0, debug_1.default)('app:cards-service');
class CardsService {
    sendAlert(alert) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.post(`${process.env.WEBHOOK_URL}`, (0, adaptive_card_resource_1.getAdaptiveCard)(alert));
        });
    }
}
exports.default = new CardsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmRzL3NlcnZpY2VzL2NhcmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsa0RBQTBCO0FBQzFCLGdGQUFzRTtBQUV0RSxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFlBQVk7SUFDUixTQUFTLENBQUMsS0FBZTs7WUFDM0IsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUNaLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFDNUIsSUFBQSx3Q0FBZSxFQUFDLEtBQUssQ0FBQyxDQUN6QixDQUFDO1FBQ04sQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=