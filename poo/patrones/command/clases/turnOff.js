"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnOffCommand {
    constructor(light) {
        this.light = light;
    }
    execute() {
        this.light.turnOff();
    }
}
exports.default = TurnOffCommand;
