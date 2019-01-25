let Controller = require('node-pid-controller');

class Queue {
    constructor(...client) {
        let ctr = new Controller(0.25, 0.01, 0.01, 1);
        this._client.push(client);
    }

    get client() {
        return this._client;
    }

    throttle() {
        let goalReached = false
        while (!goalReached) {
        let output = measureFromSomeSensor();
        let input  = ctr.update(output);
        applyInputToActuator(input);
        goalReached = (input === 0) ? true : false; // in the case of continuous control, you let this variable 'false'
        }
    }

}