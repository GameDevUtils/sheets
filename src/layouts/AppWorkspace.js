import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, ProgressBar, DropdownButton, MenuItem } from 'react-bootstrap';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomLevel: "100%",
            progress: 60.0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    static cleanProgress(value) {
        let val = Number.parseFloat(value) || 0.0;
        val = Math.min(Math.max(0.0, Math.round(val)), 100.0);
        return val;
    }

    handleClick(e) {
        var event = e.nativeEvent;
        var newState = {};
        var target = (event.target.id ? event.target : event.target.parentElement);
        target.blur();
        switch(target.id) {
            case "cmdZoomOut":
                newState.zoomLevel = "50%";
                newState.progress = 50;
                break;
            case "cmdZoomIn":
                newState.zoomLevel = "200%";
                newState.progress = 200;
                break;
            case "cmdZoomFitWidth":
                newState.zoomLevel = "400%";
                newState.progress = 400;
                break;
            case "cmdZoomFitHeight":
                newState.zoomLevel = "25%";
                newState.progress = 25;
                break;
            case "cmdZoomFitScreen":
                newState.zoomLevel = "12.5%";
                newState.progress = 12.5;
                break;
            default:
                break;
        }
        this.setState(newState);
    }

    handleSelect(e, event) {
        console.log(e, " -> ", event.target.innerText);
        let txt = (event.target.innerText || "100%").trim();
        let val = Number.parseFloat(txt.replace("%", "")) || 100.0;
        this.setState({
            zoomLevel: txt,
            progress: val
        });
    }

    render() {
        return (
            <div id="appWorkspace" className="appWorkspace expandedWorkspace">
                <div className="appWorkspaceToolbar">
                    <div className="container-xxx">
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button onClick={this.handleClick} id="cmdZoomOut" title="Zoom Out"><Glyphicon glyph="zoom-out" /></Button>
                                <Button onClick={this.handleClick} id="cmdZoomIn"  title="Zoom In" ><Glyphicon glyph="zoom-in"  /></Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <DropdownButton bsStyle="default" title={ this.state.zoomLevel } key="5" id="ddlZoomLevel" onSelect={this.handleSelect}>
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
                <div className="appWorkspaceContainer">
                    <div id="appWorkspaceContainerCrop" className="appWorkspaceContainerCrop" style={{ width:"32px", height:"32px"}}>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppWorkspace;