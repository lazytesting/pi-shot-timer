class ShotTimer {
    constructor(eventEmitter, display) {
      this.eventEmitter = eventEmitter;
      this.display = display;
      this.init();
    }

    #shotStart;
    #interval;
    
    init() {
        this.eventEmitter.on('shotStarted', () => {
            this.startTimer();  
        });
        this.eventEmitter.on('shotStopped', () => {
            this.stopTimer();
        });
    }

    startTimer() {
        console.log('shotStarted received');
        this.#shotStart = Date.now();
        this.#interval = setInterval(()=> this.display.displayTimer(Date.now() - this.#shotStart) , 100);      
    }

    stopTimer() {
        console.log('shotStopped received');
        clearInterval(this.#interval);
        this.display.displayTimer(Date.now() - this.#shotStart);
    }

}

module.exports = ShotTimer;