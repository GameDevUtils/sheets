import React from 'react';
import './AppWorkspace.css';

class AppWorkspace extends React.Component {

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
            <div id="appWorkspace" className="appWorkspace expanded-xxx">&nbsp;</div>
        );
    }
}

export default AppWorkspace;