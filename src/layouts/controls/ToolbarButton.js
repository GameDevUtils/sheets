import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
// import AppStatusLabel from './AppStatusLabel';
// import './AppToolbar.css';

class ToolbarButton extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        /* istanbul ignore else */
        if(this.props.onClick) { this.props.onClick(event); }
    }

    render() {
        return (
            <Button onClick={this.handleClick} id={this.props.id}><Glyphicon glyph={this.props.glyph} /> {this.props.text}</Button>
        );
    }
}

export default ToolbarButton;