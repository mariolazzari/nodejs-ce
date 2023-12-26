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
