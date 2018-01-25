import React from 'react';
import { DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';
import DropDownBase from './DropDownBase';

class DropDownList extends DropDownBase {

    constructor(props) {
        super(props);

        this.state.isEdit = false;

        this.renderDropDownList = this.renderDropDownList.bind(this);
    }

    renderDropDownList() {
        return (
            <ButtonGroup justified>
                <DropdownButton
                    id={this.props.id}
                    bsStyle={this.props.bsStyle || "default"}
                    bsSize="small"
                    title={this.state.currentOption}
                    key={this.state.currentKey || -1}
                    pullRight={this.props.pullRight || false}
                    onSelect={this.handleValueChange}
                >
                    {this.state.options.map((opt, i) => <MenuItem key={i+1} eventKey={i+1} active={this.state.defKey===i+1}>{opt}</MenuItem>)}
                </DropdownButton>
            </ButtonGroup>
        );
    }
}

export default DropDownList;