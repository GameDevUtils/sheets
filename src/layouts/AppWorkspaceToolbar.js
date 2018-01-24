import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, ProgressBar, DropdownButton, MenuItem } from 'react-bootstrap';
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
                            <Button onClick={this.handleClick} id="cmdZoomOut" title="Zoom Out"><Glyphicon glyph="zoom-out" /></Button>
                            <Button onClick={this.handleClick} id="cmdZoomIn"  title="Zoom In" ><Glyphicon glyph="zoom-in"  /></Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <DropdownButton bsStyle="default" title={ Workspace.config.zoomLevel } key="5" id="ddlZoomLevel" onSelect={this.handleSelect}>
                                <MenuItem eventKey="1">1600%</MenuItem>
                                <MenuItem eventKey="2">800%</MenuItem>
                                <MenuItem eventKey="3">400%</MenuItem>
                                <MenuItem eventKey="4">200%</MenuItem>
                                <MenuItem eventKey="5" active>100%</MenuItem>
                                <MenuItem eventKey="6">50%</MenuItem>
                                <MenuItem eventKey="7">25%</MenuItem>
                                <MenuItem eventKey="8">12.5%</MenuItem>
                            </DropdownButton>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button onClick={this.handleClick} id="cmdZoomFitWidth"  title="Fit to Width" ><Glyphicon glyph="resize-horizontal" /></Button>
                            <Button onClick={this.handleClick} id="cmdZoomFitHeight" title="Fit to Height"><Glyphicon glyph="resize-vertical" /></Button>
                            <Button onClick={this.handleClick} id="cmdZoomFitScreen" title="Fit to Screen"><Glyphicon glyph="fullscreen" /></Button>
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