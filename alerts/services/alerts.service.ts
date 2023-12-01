import AlertsDao from '../dao/alerts.dao';
import { TeamsAlertDto } from '../dto/teams-alert.dto';
import { CRUD } from '../../common/interfaces/crud.interface';

class AlertsService implements CRUD {
    async push(alert: TeamsAlertDto) {
        return AlertsDao.sendAlert(alert);
    }

    async list(limit: number, page: number) {
        return AlertsDao.getAlerts();
    }
}

export default new AlertsService();