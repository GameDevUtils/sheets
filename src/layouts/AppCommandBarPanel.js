import React from 'react';
import './AppCommandBarPanel.css';

class AppCommandBarPanel extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let displayValue = !!this.props.visible ? "block" : "none";
        return (
            <div id={ this.props.id } className="appCommandBarPanelContainer" style={{ display: displayValue }}>
                <div className="appCommandBarPanelTitle">
                    <button type="button" className="close pull-right" aria-label="Close" onClick={ this.props.onCollapsePanel }><span aria-hidden="true">&times;</span></button>
                    <i className={"fa fa-" + this.props.icon}></i> { this.props.title }
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