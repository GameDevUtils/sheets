import React from 'react';
import DropDownList from './controls/DropDownList';
import DropDownEdit from './controls/DropDownEdit';
import Project from '../../../data/Project';

class SettingsDimensions extends React.Component {
    render() {
        return (
            <div>
                <h3>DIMENSIONS</h3>

                <DropDownEdit id="ddlSizeWidth" label="Width" setValueCallback={Project.updateSetting} valueKey="sizeWidth" options={Project.SIZE_PRESETS_WIDTH} />

                <DropDownEdit id="ddlSizeHeight" label="Height" setValueCallback={Project.updateSetting} valueKey="sizeHeight" options={Project.SIZE_PRESETS_HEIGHT} />

                <DropDownList id="ddlSizeMode" label="Size Mode" setValueCallback={Project.updateSetting} valueKey="sizeMode" options={Project.SIZE_MODES} />

                <DropDownList id="ddlSizeConstraint" label="Size Constraint" setValueCallback={Project.updateSetting} valueKey="sizeConstraint" options={Project.SIZE_MODES} />

                <DropDownList id="ddlSizeForceSquare" label="Force Square" setValueCallback={Project.updateSetting} valueKey="sizeForceSquare" options={Project.SIZE_CONSTRAINTS} />

                <DropDownList id="ddlIncludeAt2X" label="Size Mode" setValueCallback={Project.updateSetting} valueKey="sizeMode" options={Project.SIZE_MODES} />

            </div>
        );
    }
}

export default SettingsDimensions;