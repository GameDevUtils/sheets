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
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleValueChange(e, event) {
        // let value = (e.nativeEvent || event.nativeEvent).target.value;
        let value = e.nativeEvent.target.value;
        this.setState({ value: value });
        /* istanbul ignore else */
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

    handleKeyUp(e) {
        // e.preventDefault();
        let value = this.state.value;
        switch(e.keyCode) {
            case 38: this.setState({ value: ++value }); e.preventDefault(); break;
            case 40: this.setState({ value: --value }); e.preventDefault(); break;
            /* istanbul ignore next */
            default: break;
        }
        /* istanbul ignore else */
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

    handleKeyDown(e) {
        switch(e.keyCode) {
            case 38:
            case 40:
                e.preventDefault(); break;
            /* istanbul ignore next */
            default: break;
        }
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
                            onKeyDown={this.handleKeyDown}
                            onKeyUp={this.handleKeyUp}
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