import React from 'react';
import './AppCommandBar.css';
import AppCommandBarButton from "./AppCommandBarButton";

class AppCommandBar extends React.Component {

    static DEFAULT_BUTTONS() {
        return [
            { id: "cmdToggleSettingsPanel", active: false, icon: "cog",       caption: "Settings", panel: "panelCommandSettings" },
            { id: "cmdToggleSpritesPanel",  active: false, icon: "picture-o", caption: "Sprites",  panel: "panelCommandSprites" },
            { id: "cmdToggleConsolePanel",  active: false, icon: "terminal",  caption: "Console",  panel: "panelCommandConsole", notifyTitle: "You have unread messages." },
            { id: "cmdToggleTrashPanel",    active: false, icon: "recycle",   caption: "Trash",    panel: "panelCommandTrash" },
        ];
    }

    constructor(props) {
        super(props);
        this.state = {
            buttons: props.buttons || AppCommandBar.DEFAULT_BUTTONS()
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt, id) {
        let button = undefined;
        let buttons = this.state.buttons;

        for(let i = 0; i < buttons.length; i++) {
            let btn = buttons[i];
            if(btn.id === id) {
                btn.active = !btn.active || (!!!this.props.showPanel);
                button = btn;
            } else {
                btn.active = false;
            }
        }

        this.setState({ buttons: buttons });

        if(this.props.handleClick) { this.props.handleClick(evt, button); }
    }

    render() {
        let buttons = (<div>Error creating buttons.</div>);

        /* istanbul ignore else */
        if(this.state.buttons && this.state.buttons.length > 0) {
            buttons =
                this.state.buttons.map((btn, i) => {
                    return <AppCommandBarButton
                        id={btn.id}
                        key={i+1}
                        handleClick={this.handleClick}
                        active={!!this.props.showPanel ? btn.active : false}
                        icon={btn.icon}
                        caption={btn.caption}
                        notify={!!btn.notifyTitle}
                        title={btn.notifyTitle}
                    />;
                });
        }

        return (
            <div className="divCommandBar">
                {buttons}
            </div>
        );
    }
}

export default AppCommandBar;