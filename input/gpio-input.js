class GpioInput {
    constructor(eventEmitter) {
      this.eventEmitter = eventEmitter;
      this.init();
    }
    
      init() {
        const Gpio = require('onoff').Gpio;
        const button = new Gpio(4, 'in', 'rising', {debounceTimeout: 10});
        
        button.watch((err, value) => {
            if (value === 0) {
                this.eventEmitter.emit('shotStarted');
            }
            else {
                this.eventEmitter.emit('shotStopped');
            }
        });
    }
  }

module.exports = GpioInput;