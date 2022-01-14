class I2CDisplay {
  constructor() {
    this.font =  require('oled-font-5x7');
    var oled = require('oled-js-pi');
    var opts = {
      width: 128,
      height: 64,
      address: 0x3D
    };

    this.oled = new oled(opts);
    
    }
  


  displayTimer(millis) {
    const prettyTime = `${Math.round(millis / 1000)} s`; //todo 0 safe
    this.oled.setCursor(1, 1);
    this.oled.writeString(font, 2, prettyTime, 1, true);
  }

}
module.exports = I2CDisplay;