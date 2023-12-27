const fs = require("node:fs");

console.log("\nQueues");

// callbacks queue
console.log("first");
process.nextTick(() => console.log("next tick1"));
console.log("second");

// promise queue
Promise.resolve().then(() => console.log("Promise 1 resolved"));
process.nextTick(() => console.log("next tick1 after promise 1"));

// timer queue
setTimeout(() => console.log("timeout1"), 1000);
setTimeout(() => console.log("timeout2"), 500);
setTimeout(() => console.log("timeout3"), 0);

// I/O queue
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log("file data queue");
});

// Polling queue
setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("Immediate"));

// check queue
fs.readFile("file.txt", "utf-8", (err, data) => {
  setImmediate(() => console.log("Immediate inser read file"));
  console.log("file data queue");
});

// close queue
const readStream = fs.createReadStream(__filename);
readStream.close();

readStream.on("close", () => {
  console.log("Stream closed");
});
