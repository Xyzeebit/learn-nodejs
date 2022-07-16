'use-strict';
const { EventEmitter } = require('events');

// No result
// function getEmitter() {
//     let emitter = new EventEmitter();
//     emitter.emit('start');
//     return emitter;
// }

// const myEmitter = getEmitter();
// myEmitter.on('start', () => console.log('started'));

function getEmitter() {
  let emitter = new EventEmitter();
  process.nextTick(() => {
      emitter.emit("start");
  })
  return emitter;
}

const myEmitter = getEmitter();
myEmitter.on("start", () => console.log("started"));