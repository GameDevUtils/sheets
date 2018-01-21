import React, { Component } from 'react';
import $ from 'jquery';
import AppToolbar from './layouts/AppToolbar';
import AppCommandBar from './layouts/AppCommandBar';
import AppWorkspace from './layouts/AppWorkspace';
import AppCommandBarPanels from './layouts/AppCommandBarPanels';
import Project from './data/Project';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        let settings = Project.DEFAULT_OPTIONS();
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

    toolbarButtonClicked(e) {
        let event = e.nativeEvent;
        //let newState = {};
        let target = (event.target.id ? event.target : event.target.parentElement);
        target.blur();
        switch(target.id) {
            case "cmdProjectNew":
                // TOOO: check dirty flag!
                Project.NewProject();
                break;
            /* istanbul ignore next */
            default:
                break;
        }
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

    handleSettingsChanged(arg1, arg2) {
        let values = {};
        if(typeof arg1 === "string" || arg1 instanceof String) {
            values[arg1] = arg2;
        } else if (arg1 && typeof arg1 === "object") { // && arg1.constructor === Object) {
            values = arg1;
        }
        // this.updateSettings(values);
        Project.updateSettings(values);
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
