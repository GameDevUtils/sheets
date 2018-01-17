import React from 'react';
import './AppCommandBarPanel.css';

class AppCommandBarPanel extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible || false,
            icon: props.icon || "question-circle-o",
            title: props.title || "Untitled",
            id: props.id || ("appCommandBarPanel" + AppCommandBarPanel._idCount++),
            onCollapsePanel: props.onCollapsePanel
        };
    }

    render() {
        return (
            <div id={ this.state.id } className="appCommandBarPanelContainer" style={{ display: ("true" === this.state.visible ? "block" : "none" ) }}>
                <div className="appCommandBarPanelTitle">
                    <button type="button" className="close pull-right" aria-label="Close" onClick={ this.state.onCollapsePanel }><span aria-hidden="true">&times;</span></button>
                    <i className={"fa fa-" + this.state.icon}></i> { this.state.title }
                </div>
                <div className="appCommandBarPanel">
                    <div className="appCommandBarPanelContent">
                        { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

export default AppCommandBarPanel;