import React, { Component } from 'react';
import $ from 'jquery';
import AppToolbar from './widgets/AppToolbar';
import AppCommandBar from './widgets/AppCommandBar';
import AppWorkspace from './widgets/AppWorkspace';
import AppCommandBarPanels from "./widgets/AppCommandBarPanels";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.toolbarButtonClicked = this.toolbarButtonClicked.bind(this);
        this.onCollapsePanels = this.onCollapsePanels.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    onCollapsePanels(event) {
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
        this.onCollapsePanels();

        /* istanbul ignore else */
        if(!isActive) {
            $("#appWorkspace").removeClass("expandedWorkspace");
            $("#" + targetId).addClass("active");
            $(".appCommandBarPanelGroup").show();
            $("#panelCommand" + targetId.replace("cmdToggle", "").replace("Panel", "")).show();
        }
    }

    render() {
        return (
            <div className="App">
                <AppToolbar onButtonClicked={this.toolbarButtonClicked} />

                <AppCommandBar handleButtonClick={this.handleButtonClick} onExpandPanels={this.onExpandPanels} onCollapsePanels={this.onCollapsePanels} />

                <AppCommandBarPanels onCollapsePanel={this.onCollapsePanels} />

                <AppWorkspace />
            </div>
        );
    }
}

export default App;
