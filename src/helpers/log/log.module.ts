import { Module } from "@nestjs/common";
import { Log } from "./log";

@Module({
    providers: [Log],
    exports: [Log],
})
export class LogModule {}
