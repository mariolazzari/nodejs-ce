// https://nodejs.org/api/path.html#pathresolvepaths
const path = require("node:path");

// vars
console.log("\nvars:", __dirname);
console.log("vars:", __filename);

// base name: last portion
console.log("\nbasename:", path.basename(__dirname));
console.log("basename:", path.basename(__filename));

// extension
console.log("\npath:", path.extname(__filename));

// parse filename
const parsedFile = path.parse(__filename);
console.log("\nparse", parsedFile);

// format
console.log("\nformat:", path.format(parsedFile));

// is absolute path
console.log("\nisAbsolute:", path.isAbsolute(__filename));
console.log("isAbsolute:", path.isAbsolute("./data.json"));

// join paths
console.log("\njoin examples");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "data.json"));

// resolve: resolves a sequence of paths or path segments into an absolute path.
console.log("\nresolve examples");
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "data.json"));
