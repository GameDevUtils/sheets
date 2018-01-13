import React from 'react';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import AppStatusLabel from './AppStatusLabel';
import './AppToolbar.css';

class AppToolbar extends React.Component {

    handleClick(source, event) {
        event.preventDefault();
        source.target.blur();
        source.target.parentElement.blur();
        switch(source.target.id) {
            case 'cmdFontAdd':
                //FontPicker.Show();
                break;
            default:
                break;
        }
        // console.log(`clicked ${source.target.id}.`);
    }

    render() {
        return (
            <div className="appToolbar">
                <div className="container">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button onClick={this.handleClick} id="cmdProjectNew"><Glyphicon glyph="file" /> New</Button>
                            <Button onClick={this.handleClick} id="cmdProjectOpen"><Glyphicon glyph="folder-open" />&nbsp; Open</Button>
                            <Button onClick={this.handleClick} id="cmdProjectSave"><Glyphicon glyph="download-alt" /> Save</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button onClick={this.handleClick} id="cmdSpriteAdd"><Glyphicon glyph="picture" /> Add</Button>
                            <Button onClick={this.handleClick} id="cmdSpriteRemove"><Glyphicon glyph="remove" /> Remove</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button onClick={this.handleClick} id="cmdWorkspaceRefresh"><Glyphicon glyph="refresh" /> Refresh</Button>
                            <Button onClick={this.handleClick} id="cmdProjectPublish"><Glyphicon glyph="share" /> Publish</Button>
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