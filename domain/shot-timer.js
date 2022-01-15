class ShotTimer {
    constructor(eventEmitter, display) {
      this.eventEmitter = eventEmitter;
      this.display = display;
      this.init();
    }
    
    init() {
        let interval;
        let startDate;
        this.eventEmitter.on('shotStarted', () => {
            console.log('shotStarted received');
            //startDate = Date.now();
            //interval = setInterval(()=> this.display.displayTimer(Date.now() - startDate) , 100);      
        });
        this.eventEmitter.on('shotStopped', () => {
            console.log('shotStopped received');
           // clearInterval(interval);
            // this.display.displayTimer(Date.now() - startDate);
        });
    }   
}

module.exports = ShotTimer;