import React from 'react';
// import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
// import MyLabel from './MyLabel';
import './AppCommandBarButton.css';

class AppCommandBarButton extends React.Component {
    static _idCount = 1;

    constructor(props) {
        super(props);
        this.state = {
            active: props.active || false,
            icon: props.icon || "question-circle-o",
            caption: props.caption || "[Undefined]",
            notify: props.notify || false,
            title: props.title || props.caption,
            id: props.id || ("appCommandBarButton" + AppCommandBarButton._idCount++),
            onClick: props.onClick || (() => {})
        };
        this.handleClick = this.handleClick.bind(this);
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

    handleClick(event) {
        event.preventDefault();
        //alert(this.state.title);
    }

    render() {
        return (
            <div id={ this.state.id } onClick={ this.state.onClick } className={ "appCommandBarButton" + (this.state.active === "true" ? " active" : "") }>
                <i className={ "fa fa-" + this.state.icon }></i>
                <p>{ this.state.caption }</p>
                { this.state.notify === "true" ? (<span className="appCommandBarButtonBadge badge" title={ this.state.title }>&nbsp;</span>) : ""  }
            </div>
        );
    }
}

export default AppCommandBarButton;