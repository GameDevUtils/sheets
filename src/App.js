import React, { Component } from 'react';
import $ from 'jquery';
import AppToolbar from './layouts/AppToolbar';
import AppCommandBar from './layouts/AppCommandBar';
import AppWorkspace from './layouts/AppWorkspace';
import AppCommandBarPanels from "./layouts/AppCommandBarPanels";
import './App.css';

class App extends Component {

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

    constructor(props) {
        super(props);

        let settings = App.DEFAULT_OPTIONS();
        this.state = { settings: settings, dirty: false };

        this.toolbarButtonClicked = this.toolbarButtonClicked.bind(this);
        this.handleCollapsePanel = this.handleCollapsePanel.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSettingsChanged = this.handleSettingsChanged.bind(this);
    }

    handleCollapsePanel(event) {
        $("#appWorkspace").addClass("expandedWorkspace");
        $(".appCommandBarButton").removeClass("active");
        $(".appCommandBarPanelContainer").hide();
        $(".appCommandBarPanelGroup").hide();
    }

    toolbarButtonClicked(event) {
        // console.log(event);
    }

    handleButtonClick(event, target, targetId, targetClassName, tries) {
        let isActive = (targetClassName || /* istanbul ignore next */ "").includes("active");

        // reset all buttons and the workspace
        this.handleCollapsePanel();

        /* istanbul ignore else */
        if(!isActive) {
            $("#appWorkspace").removeClass("expandedWorkspace");
            $("#" + targetId).addClass("active");
            $(".appCommandBarPanelGroup").show();
            $("#panelCommand" + targetId.replace("cmdToggle", "").replace("Panel", "")).show();
        }
    }

    updateSettings(src) {
        let settings = this.state.settings;
        let dirty = false;
        for (let name in src) {
            if (src.hasOwnProperty(name)) {
                if(settings[name] !== src[name]) {
                    settings[name] = src[name];
                    dirty = true;
                }
            }
        }
        if(dirty) {
            this.setState({ dirty: dirty, settings: settings});
        }
    }

    handleSettingsChanged(arg1, arg2) {
        let values = {};
        if(typeof arg1 === "string" || arg1 instanceof String) {
            values[arg1] = arg2;
        } else if (arg1 && typeof arg1 === "object") { // && arg1.constructor === Object) {
            values = arg1;
        }
        this.updateSettings(values);
    }

    render() {
        return (
            <div className="App">
                <AppToolbar onButtonClicked={this.toolbarButtonClicked} />

                <AppCommandBar handleButtonClick={this.handleButtonClick} onCollapsePanel={this.handleCollapsePanel} />

                <AppCommandBarPanels onCollapsePanel={this.handleCollapsePanel} onSettingsChanged={this.handleSettingsChanged} />

                <AppWorkspace />
            </div>
        );
    }
}

export default App;
