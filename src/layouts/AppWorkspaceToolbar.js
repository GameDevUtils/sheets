import React from 'react';
import { ButtonToolbar, ButtonGroup, ProgressBar, DropdownButton, MenuItem } from 'react-bootstrap';
import ToolbarButton from './controls/ToolbarButton';
import Workspace from '../data/Workspace';
import './AppWorkspaceToolbar.css';

class AppWorkspaceToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleClick(e) {
        let event = e.nativeEvent;
        let target = (event.target.id ? event.target : event.target.parentElement);
        target.blur();
        switch(target.id) {
            case "cmdZoomOut":
                Workspace.zoom(0.5);
                break;
            case "cmdZoomIn":
                Workspace.zoom(2.0);
                break;
            // case "cmdZoomFitWidth":
            //     newState.zoomLevel = "400%";
            //     newState.progress = 400;
            //     break;
            // case "cmdZoomFitHeight":
            //     newState.zoomLevel = "25%";
            //     newState.progress = 25;
            //     break;
            // case "cmdZoomFitScreen":
            //     newState.zoomLevel = "12.5%";
            //     newState.progress = 12.5;
            //     break;
            /* istanbul ignore next */
            default:
                break;
        }
        this.setState(this.state);
    }

    handleSelect(e, event) {
        // let target = (event.nativeEvent || event).target;
        let target = event.nativeEvent.target;
        Workspace.config.zoomLevel = (target.innerHTML || "100%").trim();
        this.setState(this.state);
    }

    render() {
        return (
            <div className="appWorkspaceToolbar">
                <div className="container-xxx">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdZoomOut" glyph="zoom-out" text={null} title="Zoom Out" />
                            <ToolbarButton onClick={this.handleClick} id="cmdZoomIn"  glyph="zoom-in"  text={null} title="Zoom In" />
                        </ButtonGroup>
                        <ButtonGroup>
                            <DropdownButton bsStyle="default" title={ Workspace.config.zoomLevel } key="5" id="ddlZoomLevel" onSelect={this.handleSelect}>
                                {["1600%","800%","400%","200%","100%","50%","25%","12.5%"].map((opt, i) => <MenuItem key={i+1} eventKey={i+1} active={"100%"===opt}>{opt}</MenuItem>)}
                            </DropdownButton>
                        </ButtonGroup>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdZoomFitWidth"  glyph="resize-horizontal" text={null} title="Fit to Width" />
                            <ToolbarButton onClick={this.handleClick} id="cmdZoomFitHeight" glyph="resize-vertical"   text={null} title="Fit to Height" />
                            <ToolbarButton onClick={this.handleClick} id="cmdZoomFitScreen" glyph="fullscreen"        text={null} title="Fit to Screen" />
                        </ButtonGroup>
                        <div id="appWorkspaceProgress" className="pull-right">
                            <div><ProgressBar now={60} bsStyle="success" style={{minWidth: "250px", marginTop: "10px", marginRight: "35px"}} /></div>
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default AppWorkspaceToolbar;