import React from 'react';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {

    render() {
        return (
            <div id="appWorkspace" className="appWorkspace expandedWorkspace">
                <div className="appWorkspaceContainer">
                    <div id="appWorkspaceContainerCrop" className="appWorkspaceContainerCrop" style={{ width:"32px", height:"32px"}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppWorkspace;