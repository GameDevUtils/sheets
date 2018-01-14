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
        var sourceId = source.id || source.parentElement.id || source.parentElement.parentElement.id;
        var $button = $("#" + sourceId);

        if($button.hasClass("active")) {
            this.state.onCollapsePanels();
            $button.removeClass("active");
        } else {
            this.state.onExpandPanels();
            $(".appCommandBarButton").removeClass("active");
            $button.addClass("active");
            var panelId = (sourceId || "").replace("Panel", "").replace("cmdToggle", "panelCommand");
            $(".appCommandBarPanel").hide();
            $("#" + panelId).show();
        }
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