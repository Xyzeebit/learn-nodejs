"use-strict";
const EventEmitter = require("events").EventEmitter;

class Counter extends EventEmitter {
  constructor(i) {
    super();
    this.i = i;
  }
  increment() {
    this.i++;
    this.emit("incremented", this.i); // Emits and event name incremented
  }
  decrement() {
    this.i--;
    this.emit("decremented", this.i); // Emits and event name decremented
  }
}

const counter = new Counter(10);

const callback = function (n) {
  console.log(n);
};

counter.on("incremented", callback);
counter.on('decremented', n => {
    console.log(n);
})
counter.increment();
counter.increment();
counter.decrement();
