import React from 'react';
import AppWorkspaceToolbar from './AppWorkspaceToolbar';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div id="appWorkspace" className="appWorkspace expandedWorkspace">
                <AppWorkspaceToolbar />
                <div className="appWorkspaceContainer">
                    <div id="appWorkspaceContainerCrop" className="appWorkspaceContainerCrop" style={{ width:"32px", height:"32px"}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppWorkspace;