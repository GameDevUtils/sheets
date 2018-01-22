import React from 'react';
import { ControlLabel, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class SpinnerEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.defaultValue,
            setValueCallback: this.props.setValueCallback
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e, event) {
        let value = event.nativeEvent.target.value;
        this.setState({ value: value });
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                    <InputGroup bsSize="small">
                        <FormControl
                            type="text"
                            value={this.state.value}
                            id={this.props.id}
                            onChange={this.handleValueChange}
                        />
                        <InputGroup.Addon>
                            <Glyphicon glyph="resize-vertical" />
                        </InputGroup.Addon>
                    </InputGroup>
            </div>
        );
    }
}

export default SpinnerEdit;