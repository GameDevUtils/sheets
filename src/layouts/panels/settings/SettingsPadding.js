import React from 'react';
import Project from '../../../data/Project';
import SpinnerEdit from "./controls/SpinnerEdit";

class SettingsPadding extends React.Component {
    render() {
        return (
            <div>
                <h3>OUTPUT</h3>

                <SpinnerEdit id="spnPaddingBorder" label="Border Padding" setValueCallback={Project.updateSettings} valueKey="paddingBorder" defaultValue={2} />

                <SpinnerEdit id="spnPaddingShape" label="Shape Padding" setValueCallback={Project.updateSettings} valueKey="paddingShape" defaultValue={2} />

                <SpinnerEdit id="spnPaddingInner" label="Inner Padding" setValueCallback={Project.updateSettings} valueKey="paddingInner" defaultValue={0} />
            </div>
        );
    }
}

export default SettingsPadding;