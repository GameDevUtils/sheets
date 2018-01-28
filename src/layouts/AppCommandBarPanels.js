import React from 'react';
import AppCommandBarPanel from './AppCommandBarPanel';
import PanelSettings from './panels/PanelSettings';
import './AppCommandBarPanels.css';

class AppCommandBarPanels extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="appCommandBarPanelGroup" style={{ display: (!!this.props.showPanel ? "block" : "none") }}>
                <AppCommandBarPanel id="panelCommandSettings" visible={this.props.showPanel === "panelCommandSettings"} icon="cog" title="Settings" onCollapsePanel={this.props.onCollapsePanel} >
                    <PanelSettings />
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandSprites" visible={this.props.showPanel === "panelCommandSprites"} icon="picture-o" title="Sprites" onCollapsePanel={this.props.onCollapsePanel} >
                    This is the sprites panel.
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandConsole" visible={this.props.showPanel === "panelCommandConsole"} icon="terminal" title="Console" onCollapsePanel={this.props.onCollapsePanel} >
                    Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/>
                    Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/> Hello there. Three.<br/>
                </AppCommandBarPanel>

                <AppCommandBarPanel id="panelCommandTrash" visible={this.props.showPanel === "panelCommandTrash"} icon="recycle" title="Trash" onCollapsePanel={this.props.onCollapsePanel} >
                    This is the trash panel. It should look like the sprites panel.
                </AppCommandBarPanel>
            </div>
        );
    }
}

export default AppCommandBarPanels;