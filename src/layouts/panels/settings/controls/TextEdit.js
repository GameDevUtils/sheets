import React from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';

class TextEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue,
            setValueCallback: this.props.setValueCallback
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e, event) {
        let value = event.nativeEvent.target.innerHTML.trim();
        this.setState({ filename: value });
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    id={this.props.id}
                    type="text"
                    value={this.state.value}
                    placeholder="Filename"
                    onChange={this.handleValueChange}
                    bsSize="small"
                />
            </div>
        );
    }
}

export default TextEdit;