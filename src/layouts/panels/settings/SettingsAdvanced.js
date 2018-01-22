import React from 'react';
import DropDownList from './controls/DropDownList';
import Project from '../../../data/Project';

class SettingsAdvanced extends React.Component {
    render() {
        return (
            <div>
                <h3>ADVANCED</h3>

                <DropDownList id="ddlAdvancedExtractGIF" label="Animated GIF" setValueCallback={Project.updateSettings} valueKey="advancedExtractGIF" options={Project.ANIMATED_GIF_OPTS} />

                <DropDownList id="ddlAdvancedZipProject" label="ZIP Project" setValueCallback={Project.updateSettings} valueKey="advancedZipProject" options={Project.YES_NO_FLAGS} />

            </div>
        );
    }
}

export default SettingsAdvanced;