"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RemoteControl {
    constructor() {
        this.command = null;
    }
    setCommand(command) {
        this.command = command;
    }
    pressButton() {
        if (this.command) {
            this.command.execute();
        }
    }
}
exports.default = RemoteControl;
