import cardsService from '../../cards/services/cards.service';
import { TeamsAlertDto } from '../dto/teams-alert.dto';
import debug from 'debug';

const log: debug.IDebugger = debug('app:dao');

class AlertsDao {
    alerts: Array<TeamsAlertDto> = [];

    constructor() {
        log('Created new instance of AlertsDao');
    }

    async sendAlert(alert: TeamsAlertDto) {
        this.alerts.push(alert);
        cardsService.sendAlert(alert);
        return alert;
    }

    async getAlerts() {
        return this.alerts;
    }
}

export default new AlertsDao();