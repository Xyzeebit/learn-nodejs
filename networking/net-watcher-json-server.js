"use strict";
const net = require("net");
const fs = require("fs");

try {
  const filename = process.argv[2];
  net
    .createServer((connection) => {
        console.log("Subscriber connected");
        connection.write(
          JSON.stringify({ type: "watching", file: filename }) + "\n"
        );

      const watcher = fs.watch(filename, () =>
        connection.write(
          JSON.stringify({ type: "changed", timestamp: Date.now() }) + "\n"
        )
      );
      // error 
        connection.on('error', err => {
            console.log(err.message);
        })
      // cleanup
      connection.on("close", () => {
        console.log("Subscriber disconnected");
        watcher.close();
      });
    })
    .listen(60300, () => console.log("Listening for subscribers..."));
} catch (error) {
  console.log(error.message);
}
