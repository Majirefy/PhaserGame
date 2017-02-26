import * as Assets from '../assets';

export default class Title extends Phaser.State {
    private backgroundTemplateSprite: Phaser.Sprite = null;
    private localFontText: Phaser.Text = null;
    private bgm: Phaser.Sound = null;
    private chinaActor: Phaser.Sprite = null;
    private map: Phaser.Tilemap = null;

    public preload(): void {
        this.backgroundTemplateSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, Assets.Images.ImagesBackgroundTemplate.getName());
        this.backgroundTemplateSprite.anchor.setTo(0.5);

        this.localFontText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, '测试本地字体效果', {
            font: '50px ' + Assets.CustomWebFonts.FontsFangsong.getFamily()
        });
        this.localFontText.anchor.setTo(0.5);

        this.bgm = this.game.add.audio(Assets.Audio.AudioMusic.getName(), 1.0, true);
        // this.bgm.play();

        this.chinaActor = this.game.add.sprite(100, 100, 'china');

        this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('map', 'tiles', 16, 16);
    }

    public create(): void {
        this.game.camera.flash();

        this.backgroundTemplateSprite.inputEnabled = true;
        this.backgroundTemplateSprite.events.onInputDown.add(() => {
            if (this.bgm.isPlaying) {
                this.bgm.pause();
            } else {
                this.bgm.resume();
            }
        });
        this.chinaActor.animations.add('walk');
        this.chinaActor.play('walk', 4, true);

        let ground = this.map.createLayer('Ground');
        ground.fixedToCamera = false;
        ground.position.set(this.game.world.centerX, this.game.world.centerY);
        ground.anchor.setTo(0.5, 0.5);
        let trees1 = this.map.createLayer('Trees1');
        let trees2 = this.map.createLayer('Trees2');
        ground.resizeWorld();
        trees1.resizeWorld();
        trees2.resizeWorld();
    }
}
