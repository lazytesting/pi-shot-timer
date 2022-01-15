//const Display = require('./display/i2c-display.js');
const Display = require('./display/console-display.js');
const ShotTimer = require('./domain/shot-timer.js');
const EventEmitter = require('events')
const Input = require('./input/gpio-input.js');

const eventEmitter = new EventEmitter()

const display = new Display();

new Input(eventEmitter);
new ShotTimer(eventEmitter, display);

// keep app running and show heartbeat
setInterval(()=> console.log('alive'), 30000);