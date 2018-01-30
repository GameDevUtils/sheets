import React from 'react';
import './PanelConsole.css';

class PanelConsole extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(evt, id) {
    // }

    render() {
        let output = (<p>No messages have been logged.</p>);

        /* istanbul ignore else */
        if(this.props.lines && this.props.lines.length > 0) {
            output =
                this.props.lines.map((html, i) => {
                    return <div key={`${i}`} dangerouslySetInnerHTML={{__html: html}} />;
                });
        }

        return (
            <div className="divPanelConsole">
                {output}
            </div>
        );
    }
}

export default PanelConsole;