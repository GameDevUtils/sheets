class Project {

    static IMAGE_FILE_TYPES = ["PNG", "GIF", "JPG"];
    static ATLAS_FILE_TYPES = ["XML", "CSS", "JSON"];
    static ATLAS_EXTENSIONS = ["Strip Extensions", "Keep Extensions"];
    static YES_NO_FLAGS = ["No", "Yes"];
    static PACKER_METHODS = ["MaxRects", "Basic", "Shelf"];
    static PACKER_SORTS = ["AREA_DESC", "AREA", "HEIGHT", "HEIGHT_DESC", "WIDTH", "WIDTH_DESC", "NAME", "NAME_DESC"];
    static SIZE_PRESETS_WIDTH = [1024, 16, 32, 64, 128, 256, 512, 2048, 4096, 8192, 16384];
    static SIZE_PRESETS_HEIGHT = [1024, 16, 32, 64, 128, 256, 512, 2048, 4096, 8192, 16384];
    static SIZE_MODES = ["Max Size", "Fixed Size"];
    static SIZE_CONSTRAINTS = ["Power of Two", "Any Size"];
    static TRIM_MODES = ["None", "Trim"];
    static ANIMATED_GIF_OPTS = ["Use First Frame", "Extract Frames"];

    static DEFAULT_OPTIONS() {
        return {
            filename: "Untitled",
            imageFileType: Project.IMAGE_FILE_TYPES[0],
            dataFileType: Project.ATLAS_FILE_TYPES[0],
            dataFileExtension: Project.ATLAS_EXTENSIONS[0],
            packerMethod: Project.PACKER_METHODS[0],
            packerSortBy: Project.PACKER_SORTS[0],
            packerAllowRotate: Project.YES_NO_FLAGS[0],
            sizeWidth: Project.SIZE_PRESETS_WIDTH[0],
            sizeHeight: Project.SIZE_PRESETS_HEIGHT[0],
            sizeMode: Project.SIZE_MODES[0],
            sizeConstraint: Project.SIZE_CONSTRAINTS[0],
            sizeForceSquare: Project.YES_NO_FLAGS[0],
            sizeIncludeAt2x: Project.YES_NO_FLAGS[0],
            paddingBorder: 2,
            paddingShape: 2,
            paddingInner: 0,
            filterCleanAlpha: Project.YES_NO_FLAGS[0],
            filterColorMask: Project.YES_NO_FLAGS[0],
            filterAliasSprites: Project.YES_NO_FLAGS[0],
            filterDebugMode: Project.YES_NO_FLAGS[0],
            filterTrimMode: Project.TRIM_MODES[0],
            filterTrimThreshold: 1,
            advancedExtractGIF: Project.ANIMATED_GIF_OPTS[0],
            advancedZipProject: Project.YES_NO_FLAGS[0]
        };
    };

    static settings = Project.DEFAULT_OPTIONS();
    static dirty = false;

    static NewProject() {
        Project.settings = Project.DEFAULT_OPTIONS();
        Project.dirty = false;
    }

    static updateSetting(arg1, arg2) {
        arg2 = Project.isFloat(arg2) ? parseFloat(arg2) : arg2;

        let values = {};
        values[arg1] = arg2;
        Project.updateSettings(values);
    }

    static updateSettings(args) {
        for (let name in args) {
            /* istanbul ignore else */
            if (args.hasOwnProperty(name)) {
                Project.updateSettingValue(name, Project.isFloat(args[name]) ? parseFloat(args[name]) : args[name])
            }
        }
    }

    static updateSettingValue(key, val) {
        if(Project.settings[key] !== val) {
            Project.settings[key] = val;
            Project.dirty = true;
        }
    }

    // static updateSettings(args) {
    //     for (let name in args) {
    //         let value = Project.isFloat(args[name]) ? parseFloat(args[name]) : args[name];
    //         /* istanbul ignore else */
    //         if (args.hasOwnProperty(name) && Project.settings[name] !== value) {
    //             Project.settings[name] = value;
    //             Project.dirty = true;
    //         }
    //     }
    // }

    // *** Data Helpers ***

    static isInteger(value) {
        return Project.isFloat(value) && Math.floor(parseFloat(value)) === parseFloat(value);
    }

    static isFloat(value) {
        return !isNaN(parseFloat(value));
    }

}

export default Project;