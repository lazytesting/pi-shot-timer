var i2c = require('i2c-bus');
var OLED = require('oled-i2c-bus');
var font = require('oled-font-5x7');

const i2cBus = i2c.openSync(1)

const opts = {
    width: 128,
    height: 32,
    address: 0x3C
};

const firstoled = new OLED(i2cBus, opts);
firstoled.clearDisplay()
firstoled.setCursor(1, 1);
firstoled.writeString(font, 2, 'go', 1, true);
console.log("Yes");