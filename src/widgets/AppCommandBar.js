import React from 'react';
import './AppCommandBar.css';
import AppCommandBarButton from "./AppCommandBarButton";

class AppCommandBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            handleButtonClick: props.handleButtonClick || (() => {})
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    static findClassInElementOrParent(target, className) {
        let result = { found: false };

        /* istanbul ignore else */
        if(!(target && target.id && target.className && target.className.includes(className))) {
            target = target.parentElement;
        }

        /* istanbul ignore else */
        if(target && target.id && target.className && target.className.includes(className)) {
            result.found = true;
        }

        result.target = target;

        return result;
    }

    handleButtonClick(event) {
        /* istanbul ignore else */
        if(this.state.handleButtonClick) {
            /* istanbul ignore else */
            if(event && event.preventDefault) { event.preventDefault(); }

            let result = AppCommandBar.findClassInElementOrParent(event.target, "appCommandBarButton");

            /* istanbul ignore else */
            if(result.found) {
                this.state.handleButtonClick(event, result.target, result.target.id, result.target.className);
            }
        }
    }

    render() {
        return (
            <div className="divCommandBar">
                <AppCommandBarButton id="cmdToggleSettingsPanel" handleButtonClick={this.handleButtonClick} active="false" icon="cog"       caption="Settings" />
                <AppCommandBarButton id="cmdToggleSpritesPanel"  handleButtonClick={this.handleButtonClick} active="false" icon="picture-o" caption="Sprites" />
                <AppCommandBarButton id="cmdToggleConsolePanel"  handleButtonClick={this.handleButtonClick} active="false" icon="terminal"  caption="Console" notify="true" title="You have unread messages." />
                <AppCommandBarButton id="cmdToggleTrashPanel"    handleButtonClick={this.handleButtonClick} active="false" icon="recycle"   caption="Trash" />
            </div>
        );
    }
}

export default AppCommandBar;