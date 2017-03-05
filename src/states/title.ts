import * as Assets from '../assets';

export default class Title extends Phaser.State {
    private logo: Phaser.Sprite = null;
    private titleBgm: Phaser.Sound = null;
    private startButton: Phaser.Button = null;

    public preload(): void {
    }

    public create(): void {
        this.game.camera.flash(0xffffff, 1000);

        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - (this.game.world.centerY / 2), 'logo');
        this.logo.anchor.setTo(0.5);
        this.startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + (this.game.world.centerY / 2), 'buttonsSprites', () => {
            this.game.camera.fade(0xffffff, 1000);
            this.game.camera.onFadeComplete.addOnce(() => {
                this.game.state.start('main');
            }, this);
        }, this, 7, 6, 7);
        this.startButton.anchor.set(0.5);

        this.titleBgm = this.game.add.audio('title', 1, true);
        // this.titleBgm.play();
    }
}
