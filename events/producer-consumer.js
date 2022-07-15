'use-strict';
const EventEmitter = require('events').EventEmitter;

const data = [];

class Producer extends EventEmitter {

    constructor(data) {
        super();
        // 90 - 65cap  97-122sma
        this.i = 65;
        this.data = data;
        this.produce();
    }
    produce() {
        this.timer = setInterval(() => {
            if (this.i < 91) {
                const value = String.fromCharCode(this.i++);
                this.data.push(value);
                this.emit("produced", value);
            } else {
                this.emit("end", this.timer);
            }
        }, 500);
        
    }
}

class Consumer extends EventEmitter {
    constructor(data) {
        super();
        this.data = data;
    }
    consume() {
        this.timer = setTimeout(() => {
            if (this.data.length > 0) {
              this.emit("consumed", this.data.pop());
            } else {
              this.emit("end", this.timer);
            }
        }, 1000);
        
    }

}

const producer = new Producer(data);
const consumer = new Consumer(data);

producer
    .on('produced', value => {
        console.log('Producer produced:', value, '\r\n');
        consumer.consume();
    })
    .on('end', (timer) => {
        clearInterval(timer);
        console.log('Producer finished production');
        consumer.consume();
    });

consumer
    .on('consumed', value => {
        console.log('>>>>>>>>>Consumer consumed:', value);
    })
    .on('end', (timer) => {
        clearTimeout(timer)
        console.log('>>>>>>>>Consumer finished consumption');
    });

