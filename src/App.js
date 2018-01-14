import React, { Component } from 'react';
import $ from 'jquery';
import AppToolbar from './widgets/AppToolbar';
import AppCommandBar from './widgets/AppCommandBar';
import AppWorkspace from './widgets/AppWorkspace';
import AppCommandBarPanels from "./widgets/AppCommandBarPanels";
import './App.css';

class App extends Component {

    onCollapsePanels() {
        $("#appWorkspace").addClass("expandedWorkspace");
        $(".appCommandBarButton").removeClass("active");
        $(".appCommandBarPanel").hide();
        $(".appCommandBarPanelGroup").hide()
    }

    onExpandPanels() {
        $("#appWorkspace").removeClass("expandedWorkspace");
        $(".appCommandBarPanelGroup").show()
    }

    render() {
        return (
            <div className="App">
                <AppToolbar />

                <AppCommandBar onExpandPanels={this.onExpandPanels} onCollapsePanels={this.onCollapsePanels} />

                <AppCommandBarPanels onCollapsePanel={this.onCollapsePanels} />

                <AppWorkspace />
            </div>
        );
    }
}

export default App;
