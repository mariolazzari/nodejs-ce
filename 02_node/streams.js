const fs = require("node:fs");
const zlib = require("node:zlib");

console.log("\nStreams & Buffers");

const buffer = Buffer.from("Mario");
console.log("buffer:", buffer);
console.log("buffer to Json:", buffer.toJSON());
console.log("buffer to string:", buffer.toString());

console.log("Write to buffer (truncated)");
buffer.write("Mariarosa");
console.log("buffer:", buffer);
console.log("buffer to Json:", buffer.toJSON());
console.log("buffer to string:", buffer.toString());

// file streming
const readStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
const writeStream = fs.createWriteStream("./file2.txt");

readStream.on("data", chunk => {
  console.log("Read chunk", chunk);
  writeStream.write(chunk);
});

// pipes
readStream.pipe(writeStream);

// transform
const gzip = zlib.createGzip();
const writeZip = fs.createWriteStream("file2.txt.gz");
readStream.pipe(gzip).pipe(writeZip);

/*
const unzip = zlib.createUnzip();
const readZip = fs.createReadStream("file2.txt.gz");
const writeTxt = fs.createWriteStream("file3.txt");
readZip.pipe(unzip).pipe(writeTxt);
*/
