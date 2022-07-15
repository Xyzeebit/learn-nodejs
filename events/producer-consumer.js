'use-strict';
const EventEmitter = require('events').EventEmitter;

const data = [];

class Producer extends EventEmitter {

    constructor() {
        super();
        // 90 - 65cap  97-122sma
        this.i = 65;
        this.data = [];
        this.produce();
    }
    produce() {
        this.timer = setInterval(() => {
            if (this.i < 91) {
                this.data.push(String.fromCharCode(this.i++));
                this.emit("produced", this.data[this.data.length - 1]);
            } else {
                this.emit("end", this.timer);
            }
        }, 500);
        
    }
}

// class Consumer extends EventEmitter {
//     constructor(data) {
//         super();
//         this.data = data;
//     }
//     consume() {
//         if (this.data.length > 0) {
//            this.emit("consumed", this.data.pop());
//         } else {
//             this.emit('end');
//         }
//     }

// }

const producer = new Producer();


// const consumer = new Consumer(data);

producer
    .on('produced', value => {
        console.log('Producer produced:', value);
    })
    .on('end', (timer) => {
        clearInterval(timer);
        console.log('Producer finished production');
    });

// consumer
//     .on('consumed', value => {
//         console.log('Consumer consumed:', value);
//     })
//     .on('end', () => {
//         console.log('Consumer finished consumption');
//     });

