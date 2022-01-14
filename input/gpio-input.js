class GpioInput {
    constructor(eventEmitter) {
      this.eventEmitter = eventEmitter;
      this.init();
    }
    
      init() {
        const Gpio = require('onoff').Gpio;
        const button = new Gpio(4, 'in', 'both');
        
        button.watch((err, value) => {
            //todo check for error
            if (value === true) {
                this.eventEmitter.emit('shotStarted');
            }
            else {
                this.eventEmitter.emit('shotStopped');
            }
        });
    }
  }

module.exports = GpioInput;