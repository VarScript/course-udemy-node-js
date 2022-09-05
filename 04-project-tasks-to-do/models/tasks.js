const Task = require("./task");


class Tasks {
    
    _listing = {};

    constructor() {
        this._listing = {};
    }


    createTask( desc = '' )  {

        const task = new Task(desc);

        this._listing[task.id] = task;

    }
}

module.exports = Tasks;