import board
import digitalio
from PIL import Image, ImageDraw, ImageFont
import adafruit_ssd1306

class Display:
	def __init__(self):
		print("init")
		oled_reset = digitalio.DigitalInOut(board.D4)
		WIDTH = 128
		HEIGHT = 32  # Change to 64 if needed
		BORDER = 5

		i2c = board.I2C()
		self.__oled = adafruit_ssd1306.SSD1306_I2C(WIDTH, HEIGHT, i2c, addr=0x3C, reset=oled_reset)

		# Clear display.
		self.__oled.fill(0)
		self.__oled.show()



	def displayTimer(self, millis):
		text = str(round(millis/1000, 0)) + " s"
		print(text)
		font = ImageFont.load_default()

		(font_width, font_height) = font.getsize(text)
		image = Image.new("1", (self.__oled.width, self.__oled.height))
		draw = ImageDraw.Draw(image)
		draw.text(
				(self.__oled.width // 2 - font_width // 2, self.__oled.height // 2 - font_height // 2),
				text,
				font=font,
				fill=255,
		)
		self.__oled.image(image)
		self.__	oled.show()