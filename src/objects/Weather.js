class Weather {

    constructor(game){
        this.game = game;
    }

    addFog(){
        let fog = this.game.add.bitmapData(this.game.width, this.game.height);

        fog.ctx.rect(0, 0, this.game.width, this.game.height);
        fog.ctx.fillStyle = '#b2ddc8';
        fog.ctx.fill();

        this.fogSprite = this.game.add.sprite(0, 0, fog);

        this.fogSprite.alpha = 0;
        this.game.add.tween(this.fogSprite).to( { alpha: 0.7 }, 6000, null, true);
    }

    removeFog(){

    }

    addRain(){

    }

    removeRain(){

    }

}

export default Weather;
