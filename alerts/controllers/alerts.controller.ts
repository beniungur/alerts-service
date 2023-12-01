import express from 'express';
import alertsService from '../services/alerts.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:alerts-controller');

class AlertsController {
    async getAlerts(req: express.Request, res: express.Response) {
        const alerts = await alertsService.list(100, 2);
        res.status(200).send(alerts);
    }

    async pushAlert(req: express.Request, res: express.Response) {
        const alert = await alertsService.push(req.body);
        res.status(200).send(`${alert.environment}: Alert sent successfully`);
    }
}

export default new AlertsController();