import React from 'react';
import { ControlLabel, DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';

class DropDownList extends React.Component {

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
        let value = event.nativeEvent.target.innerHTML.trim();
        // let key = e;
        let values = {};
        values["currentKey"] = this.state.options.indexOf(value) + 1;
        values["currentOption"] = value;
        this.setState(values);
        if(this.state.setValueCallback) { this.state.setValueCallback(this.props.valueKey, value); }
    }

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