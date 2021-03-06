import React from "react";
import { ControlLabel } from "react-bootstrap";
import Project from "../../../../data/Project";

class DropDownBase extends React.Component {

    constructor(props, isEdit) {
        super(props);

        let options = props.options.slice();
        let defOption = options[0];
        options = options.sort((a,b) => {
            if(Number.parseFloat(a) && Number.parseFloat(b)) {
                return Number.parseFloat(a) < Number.parseFloat(b) ? -1 : a === b ? 0 : 1;
            } else {
                return a < b ? -1 : a === b ? 0 : 1;
            }
        });

        let defKey = options.indexOf(defOption) + 1;
        this.state = {
            options: options,
            currentKey: defKey,
            currentOption: defOption,
            defOption: defOption,
            defKey: defKey,
            id: props.id,
            isEdit: isEdit
        };

        this.handleValueChange = this.handleValueChange.bind(this);
        this.renderDropDownList = this.renderDropDownList.bind(this);
    }

    handleValueChange(e, event) {
        let value = (e.nativeEvent || event.nativeEvent).target.innerHTML.trim();
        let values = {};
        values["currentKey"] = this.state.options.indexOf(value) + 1;
        values["currentOption"] = value;

        this.setState(values);

        let opts = {};
        opts[this.props.valueKey] = value;
        /* istanbul ignore else */
        Project.updateSettings(opts);
    }

    /* istanbul ignore next */
    renderDropDownList(props) {
        // this is just a placeholder for the subclasses to override
        return <span>from base class</span>;
    }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.label}</ControlLabel>
                {this.renderDropDownList()}
            </div>
        );
    }
}

export default DropDownBase;