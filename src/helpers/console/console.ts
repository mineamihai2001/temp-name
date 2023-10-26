export class Console {
    private static infoColor = "\x1b[36m";
    private static warningColor = "\x1b[33m";
    private static errorColor = "\x1b[31m";
    private static debugColor = "\x1b[35m";
    private static logColor = "";
    private static successColor = "\x1b[32m";

    public static info(message: any = "", ...other: any[]): void {
        console.log(this.infoColor, message, ...other);
    }

    public static warn(message: any = "", ...other: any[]): void {
        console.log(this.warningColor, message, ...other);
    }

    public static error(message: any = "", ...other: any[]): void {
        console.log(this.errorColor, message, ...other);
    }

    public static debug(message: any = "", ...other: any[]): void {
        console.log(this.debugColor, message, ...other);
    }

    public static success(message: any = "", ...other: any[]): void {
        console.log(this.successColor, message, ...other);
    }

    public static log(message: any = "", ...other: any[]): void {
        console.log(this.logColor, message, ...other);
    }

    public static writeLine(message: any = "", ...other: any[]): void {
        console.log(this.logColor, message, ...other, "\n");
    }
}
