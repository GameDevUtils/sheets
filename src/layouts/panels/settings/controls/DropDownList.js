import React from 'react';
import { ControlLabel, DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
import DropDownBase from './DropDownBase';

class DropDownList extends DropDownBase {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                <ButtonGroup justified>
                    <DropdownButton
                        bsStyle="default"
                        bsSize="small"
                        title={this.state.currentOption}
                        key={this.state.currentKey}
                        id={this.props.id}
                        onSelect={this.handleValueChange}
                    >
                        {this.state.options.map((opt, i) => <MenuItem key={i+1} eventKey={i+1} active={this.state.defKey===i+1}>{opt}</MenuItem>)}
                    </DropdownButton>
                </ButtonGroup>
            </div>
        );
    }
}

export default DropDownList;