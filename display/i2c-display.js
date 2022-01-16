class I2CDisplay {
  constructor() {

    var i2c = require('i2c-bus');
    var OLED = require('oled-i2c-bus');
    this.font = require('oled-font-5x7');

    const i2cBus = i2c.openSync(1)

    const opts = {
        width: 128,
        height: 32,
        address: 0x3C
    };

    this.firstoled = new OLED(i2cBus, opts);
    firstoled.clearDisplay()
  }
  
  displayTimer(millis) {
    console.log(millis);
    const prettyTime = `${Math.round(millis / 1000)} s`; //todo 0 safe
    this.oled.setCursor(1, 1);
    this.oled.writeString(this.font, 2, prettyTime, 1, true);
  }

}
module.exports = I2CDisplay;