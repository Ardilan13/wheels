"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const light_1 = __importDefault(require("./clases/light"));
const remoteControl_1 = __importDefault(require("./clases/remoteControl"));
const turnOn_1 = __importDefault(require("./clases/turnOn"));
const turnOff_1 = __importDefault(require("./clases/turnOff"));
const light = new light_1.default();
const remote = new remoteControl_1.default();
const turnOn = new turnOn_1.default(light);
const turnOff = new turnOff_1.default(light);
remote.setCommand(turnOn);
remote.pressButton();
remote.setCommand(turnOff);
remote.pressButton();
