import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

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
        let glyph = !!this.props.glyph ? (<Glyphicon glyph={this.props.glyph} />) : (null);
        let text = !!this.props.text ? (this.props.text) : (null);

        return (
            <Button onClick={this.handleClick} id={this.props.id} title={this.props.title}>{glyph}{(!!glyph && !!text) ? (<span>&nbsp;</span>) : ""}{text}</Button>
        );
    }
}

export default ToolbarButton;