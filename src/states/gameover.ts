import * as Assets from '../assets';

export default class GameOver extends Phaser.State {
    private againButton: Phaser.Button = null;
    private label: Phaser.Text = null;
    private scoreLabel: Phaser.Text = null;

    private score = 0;

    public init(params) {
        this.score = params;
    }

    public preload(): void {
    }

    public create(): void {
        this.label = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 4, 'Score', { font: '64px fangsong', fill: '#ffffff' });
        this.label.anchor.setTo(0.5);
        this.scoreLabel = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 4 + this.label.height, this.score.toLocaleString(), { font: '64px fangsong bold', fill: '#ffffff' });
        this.scoreLabel.anchor.setTo(0.5);

        this.againButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + (this.game.world.centerY / 2), 'buttonsSprites', () => {
            this.game.camera.fade(0xffffff, 1000);
            this.game.camera.onFadeComplete.addOnce(() => {
                this.game.state.start('main');
            }, this);
        }, this, 1, 0, 1);
        this.againButton.anchor.set(0.5);
    }

    public update(): void {
    }
}