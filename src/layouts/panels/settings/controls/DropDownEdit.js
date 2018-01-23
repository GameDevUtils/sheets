import React from 'react';
import { ControlLabel, DropdownButton, MenuItem, InputGroup, FormControl } from 'react-bootstrap';

class DropDownEdit extends React.Component {

    constructor(props) {
        super(props);

        let options = this.props.options;
        let defOption = options[0];
        options = options.sort((a,b) => {
            if(Number.parseFloat(a) && Number.parseFloat(b)) {
                return Number.parseFloat(a) < Number.parseFloat(b) ? -1 : a === b ? 0 : 1;
            } else {
                return a < b ? -1 : a === b ? 0 : 1;
            }
        });

        this.state = {
            options: options,
            currentKey: options.indexOf(defOption) + 1,
            currentOption: defOption,
            defOption: defOption,
            defKey: options.indexOf(defOption) + 1,
            setValueCallback: this.props.setValueCallback
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e, event) {
        // let value = event.nativeEvent.target.innerText;
        let value = event.nativeEvent.target.innerHTML;
        let values = {};
        values["currentKey"] = this.state.options.indexOf(value) + 1;
        values["currentOption"] = value;
        this.setState(values);
        /* istanbul ignore else */
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup bsSize="small">
                    <FormControl type="text" id={this.props.id + "_txt"} value={this.state.currentOption} onChange={this.handleValueChange} />
                    <DropdownButton
                        bsStyle="default"
                        componentClass={InputGroup.Button}
                        id={this.props.id + "_ddl"}
                        onSelect={this.handleValueChange}
                        title=""
                        pullRight
                    >
                        {this.state.options.map((opt, i) => <MenuItem key={i+1} eventKey={i+1} active={this.state.defKey===i+1}>{opt}</MenuItem>)}
                    </DropdownButton>
                </InputGroup>
            </div>
        );
    }
}

export default DropDownEdit;