import React from 'react';
import { DropdownButton, MenuItem, InputGroup, FormControl } from 'react-bootstrap';
import DropDownBase from './DropDownBase';

class DropDownEdit extends DropDownBase {

    constructor(props) {
        super(props, true);

        this.renderDropDownList = this.renderDropDownList.bind(this);
    }

    renderDropDownList() {
        return (
            <InputGroup bsSize={this.props.bsSize || "small"}>
                <FormControl type="text" id={this.props.id + "_txt"} value={this.state.currentOption}
                             onChange={this.handleValueChange}/>
                <DropdownButton
                    id={this.props.id + "_ddl"}
                    bsStyle={this.props.bsStyle || "default"}
                    title=""
                    key={this.state.currentKey || -1}
                    componentClass={InputGroup.Button}
                    pullRight
                    onSelect={this.handleValueChange}
                >
                    {this.state.options.map((opt, i) => <MenuItem key={i + 1} eventKey={i + 1}
                                                                  active={this.state.defKey === i + 1}>{opt}</MenuItem>)}
                </DropdownButton>
            </InputGroup>
        );
    }
}

export default DropDownEdit;