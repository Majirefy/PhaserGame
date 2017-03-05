/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; };

        static getPNG(): string { return require('assets/images/background_template.png'); };
    }
    export class ImagesBlocksBalls {
        static getName(): string { return 'balls'; };

        static getPNG(): string { return require('assets/images/blocks/balls.png'); };
    }
    export class ImagesBlocksBlue {
        static getName(): string { return 'blue'; };

        static getPNG(): string { return require('assets/images/blocks/blue.png'); };
    }
    export class ImagesBlocksGreen {
        static getName(): string { return 'green'; };

        static getPNG(): string { return require('assets/images/blocks/green.png'); };
    }
    export class ImagesBlocksRed {
        static getName(): string { return 'red'; };

        static getPNG(): string { return require('assets/images/blocks/red.png'); };
    }
    export class ImagesBlocksRing {
        static getName(): string { return 'ring'; };

        static getPNG(): string { return require('assets/images/blocks/ring.png'); };
    }
    export class ImagesBlocksYellow {
        static getName(): string { return 'yellow'; };

        static getPNG(): string { return require('assets/images/blocks/yellow.png'); };
    }
    export class ImagesSystemAugix {
        static getName(): string { return 'augix'; };

        static getPNG(): string { return require('assets/images/system/augix.png'); };
    }
    export class ImagesSystemLogo {
        static getName(): string { return 'logo'; };

        static getPNG(): string { return require('assets/images/system/logo.png'); };
    }
    export class ImagesUiButtons {
        static getName(): string { return 'buttons'; };

        static getPNG(): string { return require('assets/images/ui/buttons.png'); };
    }
    export class ImagesUiSound {
        static getName(): string { return 'sound'; };

        static getPNG(): string { return require('assets/images/ui/sound.png'); };
    }
}

export namespace Atlases {
    enum AtlasesPreloadSpritesFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSprites {
        static getName(): string { return 'preload_sprites'; };

        static getJSONArray(): string { return require('assets/atlases/preload_sprites.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites.png'); };

        static Frames = AtlasesPreloadSpritesFrames;
    }
}

export namespace Audio {
    export class AudioLose {
        static getName(): string { return 'lose'; };

        static getOGG(): string { return require('assets/audio/lose.ogg'); };
    }
    export class AudioMusic {
        static getName(): string { return 'music'; };

        static getOGG(): string { return require('assets/audio/music.ogg'); };
    }
    export class AudioPoint {
        static getName(): string { return 'point'; };

        static getOGG(): string { return require('assets/audio/point.ogg'); };
    }
    export class AudioTitle {
        static getName(): string { return 'title'; };

        static getOGG(): string { return require('assets/audio/title.ogg'); };
    }
}

export namespace Audiosprites {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace GoogleWebFonts {
    export const Barrio: string = 'Barrio';
}

export namespace CustomWebFonts {
    export class FontsFangsong {
        static getName(): string { return 'fangsong'; };

        static getFamily(): string { return 'fangsong'; };

        static getCSS(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/fangsong.css'); };
        static getTTF(): string { return require('!file-loader?name=assets/fonts/[name].[ext]!assets/fonts/fangsong.ttf'); };
    }
}

export namespace BitmapFonts {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace JSON {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace XML {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Text {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}

export namespace Misc {
    class IExistSoTypeScriptWillNotComplainAboutAnEmptyNamespace {}
}
