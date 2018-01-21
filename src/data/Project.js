class Project {

    static DEFAULT_OPTIONS() {
        return {
            filename: "Untitled",
            imageFileType: "PNG",
            dataFileType: "XML",
            dataFileExtension: "Strip Extension",

            packerMethod: "MaxRects",
            packerSortBy: "AREA_DESC",
            packerAllowRotate: "No",

            sizeWidth: "1024",
            sizeHeight: "1024",
            sizeMode: "Max Size",
            sizeConstraint: "Power of Two",
            sizeForceSquare: "No",
            sizeIncludeAt2x: "No",

            paddingBorder: "2",
            paddingShape: "2",
            paddingInner: "0",

            filterCleanAlpha: "No",
            filterColorMask: "No",
            filterAliasSprites: "No",
            filterDebugMode: "No",
            filterTrimMode: "None",
            filterTrimThreshold: "1",

            advancedExtractGIF: "Use First Frame",
            advancedZipProject: "No"
        };
    };

    static settings = Project.DEFAULT_OPTIONS();
    static dirty = false;

    static NewProject() {
        Project.settings = Project.DEFAULT_OPTIONS();
        Project.dirty = false;
    }

    static updateSettings(src) {
        for (let name in src) {
            /* istanbul ignore else */
            if (src.hasOwnProperty(name) && Project.settings[name] !== src[name]) {
                Project.settings[name] = src[name];
                Project.dirty = true;
            }
        }
    }

}

export default Project;