import React from 'react';
import AppCommandBarPanel from './AppCommandBarPanel';
import './AppCommandBarPanels.css';

class AppCommandBarPanels extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
            id: props.id || ("appCommandBarPanelGroup" + AppCommandBarPanels._idCount++),
            onCollapsePanel: props.onCollapsePanel
        };
    }

    render() {
        return (
            <div className="appCommandBarPanelGroup">
                <AppCommandBarPanel id="panelCommandSettings" visible="false" icon="cog" title="Settings" onCollapsePanel={this.state.onCollapsePanel} >
                    Hello there. One.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandSprites" visible="false" icon="picture-o" title="Sprites" onCollapsePanel={this.state.onCollapsePanel} >
                    Hello there. Two.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandConsole" visible="false" icon="terminal" title="Console" onCollapsePanel={this.state.onCollapsePanel} >
                    Hello there. Three.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandTrash" visible="false" icon="recycle" title="Trash" onCollapsePanel={this.state.onCollapsePanel} >
                    Hello there. Four.
                </AppCommandBarPanel>
            </div>
        );
    }
}

export default AppCommandBarPanels;