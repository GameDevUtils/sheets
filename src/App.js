import React, { Component } from 'react';
import $ from 'jquery';
import AppToolbar from './widgets/AppToolbar';
import AppCommandBar from './widgets/AppCommandBar';
import AppCommandBarPanel from './widgets/AppCommandBarPanel';
import AppWorkspace from './widgets/AppWorkspace';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

    onCollapsePanels(panelId) {
        $("#appWorkspace").css("left", "76px");
    }

    onExpandPanels(panelId) {
        $("#appWorkspace").css("left", "400px");
    }

    render() {
        return (
            <div className="App">
                <AppToolbar />

                <AppCommandBar onExpandPanels={this.onExpandPanels} onCollapsePanels={this.onCollapsePanels} />

                <AppCommandBarPanel id="panelCommandSettings" visible="false" icon="cog" title="Settings" onCollapsePanel={this.onCollapsePanels} >
                    Hello there. One.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandSprites" visible="false" icon="picture-o" title="Sprites" onCollapsePanel={this.onCollapsePanels} >
                    Hello there. Two.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandConsole" visible="false" icon="terminal" title="Console" onCollapsePanel={this.onCollapsePanels} >
                    Hello there. Three.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandTrash" visible="false" icon="recycle" title="Trash" onCollapsePanel={this.onCollapsePanels} >
                    Hello there. Four.
                </AppCommandBarPanel>

                <AppWorkspace />
            </div>
        );
    }
}

export default App;
