import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import AlertsController from './controllers/alerts.controller';

export class AlertsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AlertsRoutes');
    }

    configureRoutes() {
        this.app.route(`/alerts`)
        .get(AlertsController.getAlerts)
        .post(AlertsController.pushAlert);

        return this.app;
    }
}