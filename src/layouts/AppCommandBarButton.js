import React from 'react';
import './AppCommandBarButton.css';

class AppCommandBarButton extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        /* istanbul ignore else */
        if(this.props.handleClick) { this.props.handleClick(evt, this.props.id); }
    }

    render() {
        return (
            <div id={ this.props.id } onClick={ this.handleClick } className={ "appCommandBarButton" + (this.props.active ? " active" : "") }>
                <i className={ "fa fa-" + this.props.icon }></i>
                <p>{ this.props.caption }</p>
                { this.props.notify ? (<span className="appCommandBarButtonBadge badge" title={ this.props.title }>&nbsp;</span>) : ""  }
            </div>
        );
    }
}

export default AppCommandBarButton;