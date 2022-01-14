const Display = require('./display/console-display.js');
const ShotTimer = require('./domain/shot-timer.js');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter()
const display = new Display();
new ShotTimer(eventEmitter, display);

// test events
eventEmitter.emit('shotStarted');
setTimeout(()=> eventEmitter.emit('shotStopped'), 3000);

// keep app running and show heartbeat
setInterval(()=>console.log('alive'), 30000);