import * as Utils from '../utils/utils';
import * as Assets from '../assets';

export default class Boot extends Phaser.State {
    public preload(): void {
        // Load any assets you need for your preloader state here.
        this.game.load.atlasJSONArray(Assets.Atlases.AtlasesPreloadSprites.getName(), Assets.Atlases.AtlasesPreloadSprites.getPNG(), Assets.Atlases.AtlasesPreloadSprites.getJSONArray());
        this.game.load.image('augix', Assets.Images.ImagesSystemAugix.getPNG());
    }

    public create(): void {
        // Do anything here that you need to be setup immediately, before the game actually starts doing anything.

        // Uncomment the following to disable multitouch
        // this.input.maxPointers = 1;

        this.game.scale.scaleMode = Phaser.ScaleManager[SCALE_MODE];

        if (SCALE_MODE === 'USER_SCALE') {
            let screenMetrics: Utils.ScreenMetrics = Utils.ScreenUtils.screenMetrics;

            this.game.scale.setUserScale(screenMetrics.scaleX, screenMetrics.scaleY);
        }

        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        if (this.game.device.desktop) {
            // Any desktop specific stuff here
        } else {
            // Any mobile specific stuff here

            // Comment the following and uncomment the line after that to force portrait mode instead of landscape
            // this.game.scale.forceOrientation(true, false);
            this.game.scale.forceOrientation(false, true);
            this.game.scale.enterIncorrectOrientation.add(() => {
                document.getElementById('landscape').style.display = 'block';
            }, this.game);

            this.game.scale.leaveIncorrectOrientation.add(() => {
                document.getElementById('landscape').style.display = 'none';
            }, this.game);
        }

        // Use DEBUG to wrap code that should only be included in a DEBUG build of the game
        // Use GIT_REVISION as an identifier when testing builds
        // DEFAULT_GAME_WIDTH is the safe area width of the game
        // DEFAULT_GAME_HEIGHT is the safe area height of the game
        // MAX_GAME_WIDTH is the max width of the game
        // MAX_GAME_HEIGHT is the max height of the game
        // game.width is the actual width of the game
        // game.height is the actual height of the game
        // GOOGLE_WEB_FONTS are the fonts to be loaded from Google Web Fonts
        // SOUND_EXTENSIONS_PREFERENCE is the most preferred to least preferred order to look for audio sources
        console.log(
            `DEBUG....................... ${DEBUG} 
           \nGIT_REVISION................ ${GIT_REVISION}
           \nSCALE_MODE.................. ${SCALE_MODE}
           \nDEFAULT_GAME_WIDTH.......... ${DEFAULT_GAME_WIDTH}
           \nDEFAULT_GAME_HEIGHT......... ${DEFAULT_GAME_HEIGHT}
           \nMAX_GAME_WIDTH.............. ${MAX_GAME_WIDTH}
           \nMAX_GAME_HEIGHT............. ${MAX_GAME_HEIGHT} 
           \ngame.width.................. ${this.game.width} 
           \ngame.height................. ${this.game.height}
           \nGOOGLE_WEB_FONTS............ ${GOOGLE_WEB_FONTS}
           \nSOUND_EXTENSIONS_PREFERENCE. ${SOUND_EXTENSIONS_PREFERENCE}`
        );

        this.game.state.start('preloader');
    }
}
