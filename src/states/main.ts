import * as Assets from '../assets';

export default class Main extends Phaser.State {
    private redBlock: Phaser.Image = null;
    private greenBlock: Phaser.Image = null;
    private blueBlock: Phaser.Image = null;
    private yellowBlock: Phaser.Image = null;
    private blocksGroup: Phaser.Group = null;
    private ring: Phaser.Image = null;
    private ball: Phaser.Sprite = null;
    private soundButton: Phaser.Image = null;
    private label: Phaser.Text = null;
    private scoreLabel: Phaser.Text = null;

    private pointSe: Phaser.Sound = null;
    private loseSe: Phaser.Sound = null;

    private score = 0;
    private isMute = false;

    private speed = 200;
    private readonly INCREASEMENT = 20;
    private readonly MAXSPEED = 400;

    public preload(): void {
    }

    public create(): void {
        this.score = 0;
        this.game.camera.flash(0xffffff, 1000);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

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

        this.ring = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'ringSprites', 4);
        this.ring.anchor.setTo(0.5);

        this.ball = this.game.add.sprite(0, 0, 'ballSprites');
        this.ball.anchor.setTo(0.5);
        this.game.physics.arcade.enable(this.ball);

        this.game.input.onUp.add(this.resetRing, this);
        this.resetBall();

        this.label = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 4, 'Score', { font: '64px fangsong', fill: '#ffffff' });
        this.label.anchor.setTo(0.5);
        this.scoreLabel = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 4 + this.label.height, '0', { font: '64px fangsong bold', fill: '#ffffff' });
        this.scoreLabel.anchor.setTo(0.5);

        this.soundButton = this.game.add.image(32, this.game.world.height - 96, 'soundSprites', 0);
        this.soundButton.inputEnabled = true;
        this.soundButton.events.onInputDown.add(() => {
            this.isMute = !this.isMute;
            if (this.isMute) {
                this.soundButton.frame = 1;
            } else {
                this.soundButton.frame = 0;
            }
        }, this);

        this.pointSe = this.game.add.audio('point');
        this.loseSe = this.game.add.audio('lose');
    }

    public update(): void {
        let distanceX = Math.abs(this.ball.x - this.ring.x);
        let distanceY = Math.abs(this.ball.y - this.ring.y);

        if (distanceX < 20 && distanceY < 20) {
            this.ball.rotation = this.game.physics.arcade.moveToXY(this.ball, this.ring.x, this.ring.y, 0);

            if (this.ball.frame === this.ring.frame) {
                if (!this.isMute) {
                    this.pointSe.play();
                }
                this.resetBall();
                this.score++;
                this.scoreLabel.text = this.score.toLocaleString();
                if (this.score % 10 === 0) {
                    this.speed += this.INCREASEMENT;
                    if (this.speed === this.MAXSPEED) {
                        this.speed = this.MAXSPEED;
                    }
                }
            } else {
                if (!this.isMute) {
                    this.loseSe.play();
                }
                this.game.state.start('gameover', true, false, this.score);
            }
        }
    }

    private changeColor(target: Phaser.Image, point: Phaser.Point): void {
        // Color sequence: Red: 0, Green: 1, Blue: 2, Yellow: 3, White: 4
        switch (target.name) {
            case 'red':
                this.ring.frame = 0;
                break;
            case 'green':
                this.ring.frame = 1;
                break;
            case 'blue':
                this.ring.frame = 2;
                break;
            case 'yellow':
                this.ring.frame = 3;
                break;
            default:
                this.ring.frame = 4;
                break;
        }
    }

    private resetRing() {
        this.ring.frame = 4;
    }

    private resetBall() {
        let color = this.game.rnd.integerInRange(0, 5);
        let x = this.game.rnd.integerInRange(0, this.game.world.width);
        let y = this.game.rnd.integerInRange(0, this.game.height / 3);

        this.ball.frame = color;
        this.ball.x = x;
        this.ball.y = y;

        this.ball.rotation = this.game.physics.arcade.moveToXY(this.ball, this.ring.x, this.ring.y, this.speed);
    }
}