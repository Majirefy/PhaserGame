import * as Assets from '../assets';

export default class Main extends Phaser.State {
    private redBlock: Phaser.Image = null;
    private greenBlock: Phaser.Image = null;
    private blueBlock: Phaser.Image = null;
    private yellowBlock: Phaser.Image = null;
    private blocksGroup: Phaser.Group = null;
    private ring: Phaser.Image = null;

    public preload(): void {
    }

    public create(): void {
        this.game.camera.flash(0xffffff, 1000);

        this.redBlock = this.game.add.image(0, 0, 'red');
        this.greenBlock = this.game.add.image(0, 100, 'green');
        this.blueBlock = this.game.add.image(100, 0, 'blue');
        this.yellowBlock = this.game.add.image(100, 100, 'yellow');

        this.redBlock.inputEnabled = true;
        this.redBlock.name = 'red';
        this.greenBlock.inputEnabled = true;
        this.greenBlock.name = 'green';
        this.blueBlock.inputEnabled = true;
        this.blueBlock.name = 'blue';
        this.yellowBlock.inputEnabled = true;
        this.yellowBlock.name = 'yellow';

        this.redBlock.events.onInputDown.add(this.changeColor, this);
        this.greenBlock.events.onInputDown.add(this.changeColor, this);
        this.blueBlock.events.onInputDown.add(this.changeColor, this);
        this.yellowBlock.events.onInputDown.add(this.changeColor, this);

        this.blocksGroup = this.game.add.group();
        this.blocksGroup.add(this.redBlock);
        this.blocksGroup.add(this.greenBlock);
        this.blocksGroup.add(this.blueBlock);
        this.blocksGroup.add(this.yellowBlock);

        this.blocksGroup.x = this.game.world.centerX - (this.blocksGroup.width / 2);
        this.blocksGroup.y = this.game.world.centerY + (this.blocksGroup.height / 2);

        this.ring = this.game.add.image(this.game.world.centerX, this.game.world.centerY - (this.game.world.centerY / 2), 'rings', 4);
        this.ring.anchor.setTo(0.5);
    }

    private changeColor(target: Phaser.Image, point: Phaser.Point): void {
        console.log(target.name);
    }
}