import React from 'react';
import { ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import ToolbarButton from './controls/ToolbarButton';
import AppStatusLabel from './AppStatusLabel';
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
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectNew"  glyph="file" text=" New" />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectOpen" glyph="folder-open" text="&nbsp; Open" />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectSave" glyph="download-alt" text=" Save" />
                        </ButtonGroup>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdSpriteAdd"    glyph="picture" text=" Add" />
                            <ToolbarButton onClick={this.handleClick} id="cmdSpriteRemove" glyph="remove"  text=" Remove" />
                        </ButtonGroup>
                        <ButtonGroup>
                            <ToolbarButton onClick={this.handleClick} id="cmdWorkspaceRefresh" glyph="refresh" text=" Refresh" />
                            <ToolbarButton onClick={this.handleClick} id="cmdProjectPublish"   glyph="share"   text=" Publish" />
                        </ButtonGroup>
                        <div id="divStatus" className="pull-right">
                            <AppStatusLabel id="foo" title="STATUS:" caption="Ready." />
                        </div>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default AppToolbar;