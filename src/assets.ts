/* AUTO GENERATED FILE. DO NOT MODIFY. YOU WILL LOSE YOUR CHANGES ON BUILD. */

export namespace Images {
    export class ImagesBackgroundTemplate {
        static getName(): string { return 'background_template'; };

        static getPNG(): string { return require('assets/images/background_template.png'); };
    }
    export class ImagesChina2 {
        static getName(): string { return 'china2'; };

        static getPNG(): string { return require('assets/images/china2.png'); };
    }
    export class ImagesGameLogo {
        static getName(): string { return 'gameLogo'; };

        static getPNG(): string { return require('assets/images/gameLogo.png'); };
    }
    export class ImagesTilesetsTiles {
        static getName(): string { return 'tiles'; };

        static getPNG(): string { return require('assets/images/tilesets/tiles.png'); };
    }
}

export namespace Atlases {
    enum AtlasesPreloadSpritesArrayFrames {
        PreloadBar = <any>'preload_bar.png',
        PreloadFrame = <any>'preload_frame.png',
    }
    export class AtlasesPreloadSpritesArray {
        static getName(): string { return 'preload_sprites_array'; };

        static getJSONArray(): string { return require('assets/atlases/preload_sprites_array.json'); };

        static getPNG(): string { return require('assets/atlases/preload_sprites_array.png'); };

        static Frames = AtlasesPreloadSpritesArrayFrames;
    }
}

export namespace Audio {
    export class AudioMusic {
        static getName(): string { return 'music'; };

        static getAC3(): string { return require('assets/audio/music.ac3'); };
        static getM4A(): string { return require('assets/audio/music.m4a'); };
        static getMP3(): string { return require('assets/audio/music.mp3'); };
        static getOGG(): string { return require('assets/audio/music.ogg'); };
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
    export class AtlasesMap {
        static getName(): string { return 'map'; };

        static getJSON(): string { return require('assets/atlases/map.json'); };
    }
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
