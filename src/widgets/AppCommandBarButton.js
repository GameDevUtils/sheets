import React from 'react';
import './AppCommandBarButton.css';

class AppCommandBarButton extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
            active: props.active || false,
            icon: props.icon || "question-circle-o",
            caption: props.caption || "[Undefined]",
            notifyVisible: props.notify || false,
            title: props.title || props.caption,
            id: props.id || ("appCommandBarButton" + AppCommandBarButton._idCount++),
            handleButtonClick: props.handleButtonClick || /* istanbul ignore next */ (() => {})
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        this.state.handleButtonClick(event);
    }

    render() {
        return (
            <div id={ this.state.id } onClick={ this.handleButtonClick } className={ "appCommandBarButton" + (this.state.active === "true" ? " active" : "") }>
                <i className={ "fa fa-" + this.state.icon }></i>
                <p>{ this.state.caption }</p>
                { this.state.notifyVisible === "true" ? (<span className="appCommandBarButtonBadge badge" title={ this.state.title }>&nbsp;</span>) : ""  }
            </div>
        );
    }
}

export default AppCommandBarButton;