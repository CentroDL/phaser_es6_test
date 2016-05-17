class Preload extends Phaser.State {

	preload() {
		/* Preload required assets */
		//this.game.load.image('myImage', 'assets/my-image.png');
		//this.game.load.audio('myAudio', 'assets/my-audio.wav');
		//this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
    this.game.load.image('mountains-back', 'assets/mountains-back.png');
    this.game.load.image('mountains-mid1', 'assets/mountains-mid1.png');
    this.game.load.image('mountains-mid2', 'assets/mountains-mid2.png');

    this.game.load.image("sun", 'assets/sun.png');
    this.game.load.image("moon", 'assets/moon.png');
  }


	create() {
		//NOTE: Change to GameTitle if required
		this.game.state.start("Main");
	}

}

export default Preload;
