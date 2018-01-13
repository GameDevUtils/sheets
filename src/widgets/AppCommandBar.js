import React from 'react';
import $ from 'jquery';
import './AppCommandBar.css';
import AppCommandBarButton from "./AppCommandBarButton";

class AppCommandBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            onCollapsePanels: props.onCollapsePanels || (() => {}),
            onExpandPanels: props.onExpandPanels || (() => {})
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        var source = event.target;
        var parentId = source.id || source.parentElement.id || source.parentElement.parentElement.id;
        var targetPanelId = (parentId || "").replace("Panel", "").replace("cmdToggle", "panelCommand");

        ["Settings", "Sprites", "Console", "Trash"].forEach((item, index) => {
            var idPanel = `#panelCommand${item}`;
            var isVisible = $(idPanel).is(":visible");
            $(`#cmdToggle${item}Panel`).removeClass("active");
            if(idPanel === `#${targetPanelId}`) {
                if(isVisible) {
                    $(idPanel).hide();
                    this.state.onCollapsePanels(targetPanelId);
                } else {
                    $(`#cmdToggle${item}Panel`).addClass("active");
                    $(idPanel).show();
                    this.state.onExpandPanels(targetPanelId);
                }
            } else {
                $(idPanel).hide();
            }
        });
    }

    render() {
        return (
            <div className="divCommandBar">
                <AppCommandBarButton id="cmdToggleSettingsPanel" onClick={this.handleClick} active="false" icon="cog"       caption="Settings" />
                <AppCommandBarButton id="cmdToggleSpritesPanel"  onClick={this.handleClick} active="false" icon="picture-o" caption="Sprites" />
                <AppCommandBarButton id="cmdToggleConsolePanel"  onClick={this.handleClick} active="false" icon="terminal"  caption="Console" notify="true" title="You have unread messages." />
                <AppCommandBarButton id="cmdToggleTrashPanel"    onClick={this.handleClick} active="false" icon="recycle"   caption="Trash" />
            </div>
        );
    }
}

export default AppCommandBar;