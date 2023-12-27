const fs = require("node:fs");
const crypto = require("crypto");
const https = require("https");

// 4 by default
// process.env.UV_THREADPOOL_SIZE = 16;

console.log("\nAsync");
console.log("Async first");

const FILE = "file.txt";
const ENC = "utf-8";

fs.readFile(FILE, ENC, (err, data) => {
  console.log("Async file content");
});

console.log("Async last");

console.time("crypto-sync");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
console.timeEnd("crypto-sync");

const start = Date.now();
const MAX_CALLS = 12;
for (let i = 0; i < MAX_CALLS; i++) {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log(`Hash: ${i + 1}`, Date.now() - start);
  });

  // does not use libuv (net op)
  https
    .request("https://www.google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(`Request: ${i + 1}`, Date.now() - start);
      });
    })
    .end();
}
