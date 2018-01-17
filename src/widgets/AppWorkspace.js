import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon, ProgressBar } from 'react-bootstrap';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {

    render() {
        return (
            <div id="appWorkspace" className="appWorkspace expandedWorkspace">
                <div className="appWorkspaceToolbar">
                    <div className="container-xxx">
                        <ButtonToolbar>
                            <ButtonGroup>
                                <Button onClick={this.handleClick} id="cmdZoomOut" title="Zoom Out"><Glyphicon glyph="zoom-out" /></Button>
                                <Button onClick={this.handleClick} id="cmdZoomIn" title="Zoom In"><Glyphicon glyph="zoom-in" /></Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button onClick={this.handleClick} id="ddlZoomLevel" title="Zoom Level">100% <Glyphicon glyph="chevron-down" /></Button>
                            </ButtonGroup>
                            <ButtonGroup>
                                <Button onClick={this.handleClick} id="cmdZoomFitWidth" title="Fit to Width"><Glyphicon glyph="resize-horizontal" /></Button>
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