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
        
    }
}

export default new AlertsDao();