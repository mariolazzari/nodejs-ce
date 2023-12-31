const fs = require("node:fs");
const fsP = require("node:fs/promises");

console.log("\nFile System");
const FILE_IN = "file.txt";
const FILE_OUT = "greet.txt";
const ENC = "utf-8";

// read file sync
const fileContent = fs.readFileSync(FILE_IN, ENC);
console.log("File content sync", fileContent);

// read file async
fs.readFile(FILE_IN, ENC, (err, data) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("File content async", data);
});

// write file sync
fs.writeFileSync(FILE_OUT, "Hello Mario!");

// write file async
fs.writeFile(FILE_OUT, "Async write", err => {
  if (err) {
    return console.error("Error writing file", err.message);
  }
  console.log("File written.");
});

// append content
fs.writeFile(FILE_OUT, "Async append", { flag: "a" }, err => {
  if (err) {
    return console.error("Error writing file", err.message);
  }
  console.log("Content appended.");
});

// read async with promises
fsP
  .readFile(FILE_IN, ENC)
  .then(data => console.log("Promise:", data))
  .catch(err => console.error(err));

// async await
(async function readFile() {
  try {
    const data = await fsP.readFile(FILE_IN, ENC);
    console.log("Async read:", data);
  } catch (error) {
    console.error(error);
  }
})();
