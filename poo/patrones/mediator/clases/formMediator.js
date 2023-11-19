"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormMediator = void 0;
class FormMediator {
    constructor() {
        this.colleagues = [];
    }
    addColleague(colleague) {
        this.colleagues.push(colleague);
        colleague.setMediator(this);
    }
    notify(sender, event) {
        this.colleagues.forEach((colleague) => {
            if (colleague !== sender) {
                colleague.notify(event);
            }
        });
    }
}
exports.FormMediator = FormMediator;
