"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cluster = require("cluster");
const cpuCount = 4; // os.cpus().length
const webWorkers = [];
const jobWorkers = [];
if (cluster.isMaster) {
    // Create a worker for each CPU
    for (let i = 0; i < cpuCount; i += 1) {
        // addJobWorker();
        addWebWorker();
    }
    cluster.on('exit', (worker, code, signal) => {
        // if (jobWorkers.indexOf(worker.id) != -1) {
        //     console.log('job worker ' + worker.process.pid + ' died. Trying to respawn...');
        //     removeJobWorker(worker.id);
        //     addJobWorker();
        // }
        if (webWorkers.indexOf(worker.id) != -1) {
            console.log('http worker ' + worker.process.pid + ' died. Trying to respawn...');
            removeWebWorker(worker.id.toString());
            addWebWorker();
        }
    });
}
else {
    // if (process.env.job) {
    //     console.log('start job server: ' + cluster.worker.id);
    //     require('./worker');//initialize the agenda here
    // }
    if (process.env.web) {
        console.log('start http server: ' + cluster.worker.id);
        require('./index'); // initialize the http server here
    }
}
function addWebWorker() {
    webWorkers.push(cluster.fork({ web: 1 }).id);
}
function addJobWorker() {
    jobWorkers.push(cluster.fork({ job: 1 }).id);
}
function removeWebWorker(id) {
    webWorkers.splice(webWorkers.indexOf(id), 1);
}
function removeJobWorker(id) {
    jobWorkers.splice(jobWorkers.indexOf(id), 1);
}
//# sourceMappingURL=server.js.map