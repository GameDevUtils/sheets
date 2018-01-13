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

    // handleClick(source, event) {
    //     event.preventDefault();
    //     source.target.blur();
    //     source.target.parentElement.blur();
    //     switch(source.target.id) {
    //         case 'cmdFontAdd':
    //             //FontPicker.Show();
    //             break;
    //         default:
    //             break;
    //     }
    //     // console.log(`clicked ${source.target.id}.`);
    // }

    render() {
        return (
            <div id={ this.state.id } className="appCommandBarPanel" style={{ display: ("true" === this.state.visible ? "block" : "none" ) }}>
                <div className="appCommandBarPanelTitle">
                    <button type="button" className="close pull-right" aria-label="Close" onClick={ this.state.onCollapsePanel }><span aria-hidden="true">&times;</span></button>
                    <i className={ true ? "fa fa-" + this.state.icon : "" }></i> { this.state.title }
                </div>
                <div className="appCommandBarPanelContent">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default AppCommandBarPanel;