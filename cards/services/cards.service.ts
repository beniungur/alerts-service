import axios from "axios";
import { TeamsAlertDto } from '../../alerts/dto/teams-alert.dto';
import debug from 'debug';
import { getAdaptiveCard } from "../resources/adaptive-card.resource";

const log: debug.IDebugger = debug('app:cards-service');

class CardsService {
    async sendAlert(alert: TeamsAlertDto) {
        await axios.post<string>(
            `${process.env.WEBHOOK_URL}`,
            getAdaptiveCard(alert)
        );
    }
}

export default new CardsService();