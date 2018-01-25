import React from "react";

class DropDownBase extends React.Component {

    constructor(props) {
        super(props);

        let options = this.props.options.slice();
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
            defKey: options.indexOf(defOption) + 1
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e, event) {
        let value = (e.nativeEvent || event.nativeEvent).target.innerHTML.trim();
        let values = {};
        values["currentKey"] = this.state.options.indexOf(value) + 1;
        values["currentOption"] = value;
        this.setState(values);
        /* istanbul ignore else */
        if(this.props.setValueCallback) { this.props.setValueCallback(this.props.valueKey, value); }
    }

}

export default DropDownBase;