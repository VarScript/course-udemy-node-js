const Task = require("./task");



class Tasks {
    
    _listing = {};



    get listArr() {
        const list = [];
        // For extract keys of an object and return array
        // ForEach = executes the indicated function once for each element of the array
        Object.keys(this._listing).forEach( key => {
            const task = this._listing[key];
            list.push( task );
        });
        return list
    }



    constructor() {
        this._listing = {};
    }



    uploadTaksFromArray( tasks = [] ) {
        tasks.forEach( task => {
        this._listing[task.id] = task;
        });
    }



    createTask( desc = '' )  {
        const task = new Task(desc);
        this._listing[task.id] = task;
    }


    completedList() {
        console.log();
            this.listArr.forEach( (task, id) => {
                const idx = `${ id + 1 }.`.green;
                const { desc, completedIn } = task;
                const status = (completedIn)    
                                ? 'Completed'.green
                                : 'Pending'.red;
            console.log(`${idx} ${desc} :: ${status}`);
        });
    }



    listPendingCompleted( completed = true){
        console.log();
        let counter = 0;
        this.listArr.forEach( task => {
            const { desc, completedIn } = task;
            const status = (completedIn)
                            ? 'Completed'.green
                            : 'Pending'.red
            if ( completed ){
                if ( completedIn ) {
                    counter += 1;
                    console.log(`${ (counter + '.').green } ${desc} :: ${completedIn}`);
                }
            } else {
                if ( !completedIn ) {
                    counter += 1;
                    console.log(`${ (counter + '.').green } ${desc} :: ${status}`);
                }
            }
        });
    }
}





module.exports = Tasks;