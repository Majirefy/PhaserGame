import * as Assets from '../assets';
import * as AssetUtils from '../utils/assetUtils';

export default class Preloader extends Phaser.State {
    private augixSprite: Phaser.Sprite = null;
    private preloadBarSprite: Phaser.Sprite = null;
    private preloadFrameSprite: Phaser.Sprite = null;

    public preload(): void {
        this.augixSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY - (this.game.world.centerY / 2), Assets.Images.ImagesSystemAugix.getName());
        this.augixSprite.anchor.setTo(0.5);

        this.preloadBarSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + (this.game.world.centerY / 2), Assets.Atlases.AtlasesPreloadSprites.getName(), Assets.Atlases.AtlasesPreloadSprites.Frames.PreloadBar);
        this.preloadBarSprite.anchor.setTo(0, 0.5);
        this.preloadBarSprite.x -= this.preloadBarSprite.width * 0.5;

        this.preloadFrameSprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + (this.game.world.centerY / 2), Assets.Atlases.AtlasesPreloadSprites.getName(), Assets.Atlases.AtlasesPreloadSprites.Frames.PreloadFrame);
        this.preloadFrameSprite.anchor.setTo(0.5);

        this.game.load.setPreloadSprite(this.preloadBarSprite);

        this.game.load.spritesheet('buttonsSprites', Assets.Images.ImagesUiButtons.getPNG(), 260, 100);

        this.game.load.spritesheet('ringSprites', Assets.Images.ImagesBlocksRing.getPNG(), 100, 100);
        this.game.load.spritesheet('ballSprites', Assets.Images.ImagesBlocksBalls.getPNG(), 50, 50);
        this.game.load.spritesheet('soundSprites', Assets.Images.ImagesUiSound.getPNG(), 64, 64);

        AssetUtils.Loader.loadAllAssets(this.game, this.waitForSoundDecoding, this);
    }

    private waitForSoundDecoding(): void {
        AssetUtils.Loader.waitForSoundDecoding(this.startGame, this);
    }

    private startGame(): void {
        this.game.camera.onFadeComplete.addOnce(this.loadTitle, this);
        this.game.camera.fade(0xffffff, 1000);
    }

    private loadTitle(): void {
        this.game.state.start('title');
    }
}
