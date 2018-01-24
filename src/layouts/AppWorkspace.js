import React from 'react';
import AppWorkspaceToolbar from './AppWorkspaceToolbar';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // this.handleClick = this.handleClick.bind(this);
        // this.handleSelect = this.handleSelect.bind(this);
    }

    // static setProgress(value) {
    //     let val = Number.parseFloat(value) || 0.0;
    //     val = Math.min(Math.max(0.0, Math.round(val)), 100.0);
    //     return val;
    // }
    //
    // zoom(delta) {
    //     let zoomLevel = Number.parseFloat(this.state.zoomLevel.replace("%", ""));
    //     zoomLevel *= delta;
    //     zoomLevel = Math.max(12.5, zoomLevel);
    //     zoomLevel = zoomLevel + "%";
    //     this.setState({ zoomLevel: zoomLevel });
    // }

    // handleClick(e) {
    //     let event = e.nativeEvent;
    //     let newState = {};
    //     let target = (event.target.id ? event.target : event.target.parentElement);
    //     target.blur();
    //     switch(target.id) {
    //         case "cmdZoomOut":
    //             this.zoom(0.5);
    //             break;
    //         case "cmdZoomIn":
    //             this.zoom(2.0);
    //             break;
    //         // case "cmdZoomFitWidth":
    //         //     newState.zoomLevel = "400%";
    //         //     newState.progress = 400;
    //         //     break;
    //         // case "cmdZoomFitHeight":
    //         //     newState.zoomLevel = "25%";
    //         //     newState.progress = 25;
    //         //     break;
    //         // case "cmdZoomFitScreen":
    //         //     newState.zoomLevel = "12.5%";
    //         //     newState.progress = 12.5;
    //         //     break;
    //         /* istanbul ignore next */
    //         default:
    //             break;
    //     }
    //     this.setState(newState);
    // }

    // handleSelect(e, event) {
    //     // let target = (event.nativeEvent || event).target;
    //     let target = event.nativeEvent.target;
    //     this.setState({
    //         zoomLevel: (target.innerHTML || "100%").trim()
    //     });
    // }

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