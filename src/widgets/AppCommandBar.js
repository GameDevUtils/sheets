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

    handleButtonClick(event) {
        /* istanbul ignore else */
        if(this.state.handleButtonClick) {
            /* istanbul ignore else */
            if(event && event.preventDefault) { event.preventDefault(); }
            let target = event.target || /* istanbul ignore next */ {};
            let targetId = target.id;
            let targetClassName = target.className;

            let tries = 3;
            while (target && tries-- > 0) {
                if (target && targetId && targetClassName && targetClassName.includes("appCommandBarButton")) { break; }
                target = target.parentElement;
                /* istanbul ignore else */
                if (target) {
                    targetId = target.id;
                    targetClassName = target.className;
                }
            }

            /* istanbul ignore else */
            if (target) {
                /* istanbul ignore else */
                if (targetId && targetClassName && targetClassName && targetClassName.includes("appCommandBarButton")) {
                    this.state.handleButtonClick(event, target, targetId, targetClassName, tries);
                }
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