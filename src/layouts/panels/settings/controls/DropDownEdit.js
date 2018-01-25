import React from 'react';
import { ControlLabel, DropdownButton, MenuItem, InputGroup, FormControl } from 'react-bootstrap';
import DropDownBase from './DropDownBase';

class DropDownEdit extends DropDownBase {

    // constructor(props) {
    //     super(props);
    // }

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