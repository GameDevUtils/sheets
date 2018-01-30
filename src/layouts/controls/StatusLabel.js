import React from 'react';
import './StatusLabel.css';

class StatusLabel extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
            title: props.title || "STATUS:",
            caption: props.caption || "Status is unknown.",
            className: props.className || "appStatusLabel",
            id: props.id || ("appStatusLabel" + StatusLabel._idCount++)
        };
    }

    render() {
        return (
            <div id={this.state.id} className={this.state.className}>
                <strong><span id={this.state.id + "_Title"} className={this.state.className + "Title"}>{this.state.title}</span></strong> <span id={this.state.id + "_Text"} className={this.state.className + "Text"}>{this.state.caption}</span>
            </div>
        );
    }
}

export default StatusLabel;