import React, { Component } from 'react';
// import $ from 'jquery';
import AppToolbar from './layouts/AppToolbar';
import AppCommandBar from './layouts/AppCommandBar';
import AppWorkspace from './layouts/AppWorkspace';
import AppCommandBarPanels from './layouts/AppCommandBarPanels';
import Project from './data/Project';
import './App.css';
import Workspace from "./data/Workspace";

class App extends Component {

    constructor(props) {
        super(props);

        // let settings = Project.DEFAULT_OPTIONS();
        this.state = {
            showPanel: undefined
        };

        this.toolbarButtonClicked = this.toolbarButtonClicked.bind(this);

        this.handleCollapsePanel = this.handleCollapsePanel.bind(this);
        this.handleCommandBarButtonClick = this.handleCommandBarButtonClick.bind(this);
    }

    handleCollapsePanel(evt) {
        evt.preventDefault();
        Workspace.config.isExpanded = true;
        this.setState({ showPanel: undefined });
    }

    toolbarButtonClicked(e) {
        let event = e.nativeEvent;
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

    handleCommandBarButtonClick(evt, btn) {
        evt.preventDefault();
        Workspace.config.isExpanded = !btn.active;
        this.setState({ showPanel: btn.active ? btn.panel : undefined });
    }

    render() {
        return (
            <div className="App">
                <AppToolbar onButtonClicked={this.toolbarButtonClicked} />

                <AppCommandBar handleClick={this.handleCommandBarButtonClick} onCollapsePanel={this.handleCollapsePanel} showPanel={this.state.showPanel} />

                <AppCommandBarPanels showPanel={this.state.showPanel} onCollapsePanel={this.handleCollapsePanel} />

                <AppWorkspace />
            </div>
        );
    }
}

export default App;
