class GpioInput {
    constructor(eventEmitter) {
      this.eventEmitter = eventEmitter;
      this.init();
    }

    #isStarted = false;
    
      init() {
        const Gpio = require('onoff').Gpio;
        const button = new Gpio(4, 'in', 'both', {debounceTimeout: 100});
        
        button.watch((err, value) => {
 
            if (value === 0) {
              if(this.#isStarted) return;
                this.eventEmitter.emit('shotStarted');
                this.#isStarted = true;
            }
            else {
                this.eventEmitter.emit('shotStopped');
            }
        });
    }
  }

module.exports = GpioInput;