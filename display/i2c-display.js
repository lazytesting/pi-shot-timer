class I2CDisplay {
  constructor() {
    var i2c = require('i2c-bus'),
      i2cBus = i2c.openSync(1),
      oled = require('oled-i2c-bus');
  
    var opts = {
      width: 128,
      height: 64,
      address: 0x3D
    };
    this.font =  require('oled-font-5x7');
    this.oled = new oled(i2cBus, opts);
    }
  


  displayTimer(millis) {
    const prettyTime = `${Math.round(millis / 1000)} s`; //todo 0 safe
    oled.setCursor(1, 1);
    oled.writeString(font, 2, prettyTime, 1, true);
  }

}
module.exports = I2CDisplay;