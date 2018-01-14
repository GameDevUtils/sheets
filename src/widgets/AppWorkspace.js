import React from 'react';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         expanded: props.expanded || true
    //     };
    // }

    render() {
        return (
            <div id="appWorkspace" className="appWorkspace expandedWorkspace">&nbsp;</div>
        );
    }
}

export default AppWorkspace;