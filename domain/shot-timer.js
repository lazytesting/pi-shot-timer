class ShotTimer {
    constructor(eventEmitter, display) {
        eventEmitter.on('shotStarted', () => {
            this.startTimer();  
        });
        eventEmitter.on('shotStopped', () => {
            this.stopTimer();
        });
      this.display = display;
    }

    #shotStart;
    #interval;
    

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