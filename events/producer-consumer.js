'use-strict';
const EventEmitter = require('events').EventEmitter;

const data = [];

class Producer extends EventEmitter {

    constructor(data, timeout) {
        super();
        // 90 - 65cap  97-122sma
        this.i = 65;
        this.data = data;
        this.timeout = timeout;
        this.produce();
    }
    produce() {
        this.timer = setInterval(() => {
            if (this.i < 91) {
                const value = String.fromCharCode(this.i++);
                this.data.push(value);
                
                if (this.i % 2) {
                    this.emit("produced", value);
                } else {
                    this.emit("produced another", value);
                }
            } else {
                this.emit("end", this.timer);
            }
        }, this.timeout);
        
    }
}

class Consumer extends EventEmitter {
    constructor(data, timeout) {
        super();
        this.data = data;
        this.timeout = timeout;
    }
    consume() {
        this.timer = setTimeout(() => {
            if (this.data.length > 0) {
              this.emit("consumed", this.data.pop());
            } else {
              this.emit("end", this.timer);
            }
        }, this.timeout);
        
    }

}

const producer = new Producer(data, 250);
const consumer = new Consumer(data, 1000);
const anotherConsumer = new Consumer(data, 1000);

producer
    .on('produced', value => {
        console.log('Producer produced:', value, '\r\n');
        consumer.consume();
        
    })
    .on('produced another', value => {
        console.log("Producer produced another:", value, "\r\n");
        anotherConsumer.consume();
    })
    .on('end', (timer) => {
        clearInterval(timer);
        console.log('Producer finished production');
        consumer.consume();
        anotherConsumer.consume();
    });

consumer
    .on('consumed', value => {
        console.log('>>>>>>>>>Consumer consumed:', value);
    })
    .on('end', (timer) => {
        clearTimeout(timer)
        console.log('>>>>>>>>Consumer finished consumption');
    });

anotherConsumer
    .on("consumed", (value) => {
        console.log(">>>>>>>>><<<<<<<<<AnotherConsumer consumed:", value);
    })
    .on("end", (timer) => {
        clearTimeout(timer);
        console.log(">>>>>>>><<<<<<<<AnotherConsumer finished consumption");
    });

