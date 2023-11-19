"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handler_1 = require("./handler");
const level1 = new handler_1.Level1Support();
const level2 = new handler_1.Level2Support();
const level3 = new handler_1.Level3Support();
level1.setSuccessor(level2);
level2.setSuccessor(level3);
level1.handleRequest("problema simple");
level1.handleRequest("problema grave");
