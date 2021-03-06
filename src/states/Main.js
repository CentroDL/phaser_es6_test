import ExampleObject from 'objects/ExampleObject';
import DayCycle from 'objects/DayCycle';
import Weather from 'objects/Weather';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.weather = new Weather(this.game);

		//Set the games background colour
		this.game.stage.backgroundColor = '#000';

		this.dayCycle = new DayCycle( this.game, 5000);

		let bgBitMap = this.game.add.bitmapData(this.game.width, this.game.height);

		bgBitMap.ctx.rect(0, 0, this.game.width, this.game.height);
    bgBitMap.ctx.fillStyle = '#b2ddc8';
    bgBitMap.ctx.fill();

    this.backgroundSprite = this.game.add.sprite(0, 0, bgBitMap);

    this.sunSprite = this.game.add.sprite(50, -250, 'sun');
    this.moonSprite = this.game.add.sprite(this.game.width - (this.game.width / 4), this.game.height + 500, 'moon');

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);
		this.mountainsBack = this.game.add.tileSprite(0,
			this.game.height - this.game.cache.getImage('mountains-back').height,
			this.game.width,
			this.game.cache.getImage("mountains-back").height,
			'mountains-back');

		this.mountainsMid1 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('mountains-mid1').height,
        this.game.width,
        this.game.cache.getImage('mountains-mid1').height,
        'mountains-mid1');

		this.mountainsMid2 = this.game.add.tileSprite(0,
        this.game.height - this.game.cache.getImage('mountains-mid2').height,
        this.game.width,
        this.game.cache.getImage('mountains-mid2').height,
        'mountains-mid2');

    let backgroundSprites = [
    {sprite: this.backgroundSprite, from: 0x1f2a27, to: 0xB2DDC8},
    {sprite: this.mountainsBack, from: 0x2f403b, to: 0x96CCBB},
    {sprite: this.mountainsMid1, from: 0x283632, to: 0x8BBCAC},
    {sprite: this.mountainsMid2, from: 0x202b28, to: 0x82AD9D}
    ];

    this.dayCycle.initShading(backgroundSprites);
    this.dayCycle.initSun(this.sunSprite);
    this.dayCycle.initMoon(this.moonSprite);

    this.weather.addRain();
		// this.weather.removeRain();
		this.weather.addFog();
		// this.weather.removeFog();

	} // create

	update() {
		this.mountainsBack.tilePosition.x -= 0.05;
    this.mountainsMid1.tilePosition.x -= 0.3;
    this.mountainsMid2.tilePosition.x -= 12.75;
	}

}

export default Main;
