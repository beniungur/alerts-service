export interface CRUD {
    list: (limit: number, page: number) => Promise<any>;
    push: (alert: any) => Promise<any>;
}