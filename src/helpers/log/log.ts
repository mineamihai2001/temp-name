import { Injectable } from "@nestjs/common";

@Injectable()
export class Log {
    private logger: any;

    constructor() {
        this.logger = undefined;
    }

    public info(message: string, ...meta: any[]): void {
        this.logger.info(message, ...meta);
    }

    public warn(message: string, ...meta: any[]): void {
        this.logger.warn(message, ...meta);
    }

    public error(message: string, ...meta: any[]): void {
        this.logger.error(message, ...meta);
    }

    public debug(message: string, ...meta: any[]): void {
        this.logger.debug(message, ...meta);
    }

    public log(level: string, message: string, ...meta: any[]): void {
        this.logger.log(level, message, ...meta);
    }
}
