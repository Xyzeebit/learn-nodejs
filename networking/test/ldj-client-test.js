'use strict';
const assert = require('assert');
const EventEmitter = require('events').EventEmitter;
const LDJClient = require('../lib/ldj-client');

describe('LDJClient', () => {
    let stream = null;
    let client = null;

    beforeEach(() => {
        stream = new EventEmitter();
        client = new LDJClient(stream);
    });

    it('should emit a message event from a single data source', () => {
        client.on('message', message => {
            assert.deepStrictEqual(message, { foo: 'bar' });
        });
        stream.emit('message', '{ "foo": "bar" }\n');
    });
});