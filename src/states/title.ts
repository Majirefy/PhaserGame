import * as Assets from '../assets';

export default class Title extends Phaser.State {

    public preload(): void {
    }

    public create(): void {
        this.game.camera.flash();
    }
}
