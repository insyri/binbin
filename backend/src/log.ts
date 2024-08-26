import type { Express, Response, Request, NextFunction} from "express";

const options: Parameters<Date["toLocaleString"]>[1] = {
    // timeZoneName: "long",
    timeZone: "ET",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeStyle: "long"
}

export function log(req: Request, res: Response, next: NextFunction) {
    const date = new Date();
    console.log(date.toLocaleString("en-US", options))
}