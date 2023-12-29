const cluster = require("node:cluster");
const os = require("node:os");

const cores = os.cpus().length;

if (cluster.isMaster) {
  console.log("Total cores:", cores);
  console.log("Master cluster pid", process.pid);

  for (let i = 0; i < cores; i++) {
    cluster.fork();
  }
} else {
  console.log("Worker cluster pid", process.pid);
  require("./no-cluster");
}
