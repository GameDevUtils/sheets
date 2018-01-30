import React from 'react';
import { ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import ToolbarButton from './controls/ToolbarButton';
// import AppStatusLabel from './AppStatusLabel';
import StatusLabel from './controls/StatusLabel';
import './AppToolbar.css';

class AppToolbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onButtonClicked: this.props.onButtonClicked || /* istanbul ignore next */ (() => {})
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        /* istanbul ignore else */
        if(this.state.onButtonClicked) { this.state.onButtonClicked(event); }
    }

    render() {
        return (
            <div className="appToolbar">
                <div className="container">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectNew"  glyph="file"         text="New"   title="Create a new project." />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectOpen" glyph="folder-open"  text=" Open" title="Open an existing project." />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectSave" glyph="download-alt" text="Save"  title="Save the current project." />
                        </ButtonGroup>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdSpriteAdd"    glyph="picture" text="Add"    title="Import sprite(s) into the project." />
                            <ToolbarButton onClick={this.handleClick} id="cmdSpriteRemove" glyph="remove"  text="Remove" title="Remove selected sprite(s)." />
                        </ButtonGroup>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdWorkspaceRefresh" glyph="refresh" text="Refresh" title="Recalculate and redraw sheet in workspace." />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectPublish"   glyph="share"   text="Publish" title="Compile assets and save to file." />
                        </ButtonGroup>
                        <div id="divStatus" className="pull-right">
                            <StatusLabel id="foo" title="STATUS:" caption="Ready." />
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default AppToolbar;