import React from 'react';
import DropDownList from './controls/DropDownList';
import DropDownEdit from './controls/DropDownEdit';
import Project from '../../../data/Project';

class SettingsDimensions extends React.Component {
    render() {
        return (
            <div>
                <h3>DIMENSIONS</h3>

                <DropDownEdit id="ddlSizeWidth" label="Width" valueKey="sizeWidth" options={Project.SIZE_PRESETS_WIDTH} />

                <DropDownEdit id="ddlSizeHeight" label="Height" valueKey="sizeHeight" options={Project.SIZE_PRESETS_HEIGHT} />

                <DropDownList id="ddlSizeMode" label="Size Mode" valueKey="sizeMode" options={Project.SIZE_MODES} />

                <DropDownList id="ddlSizeConstraint" label="Size Constraint" valueKey="sizeConstraint" options={Project.SIZE_MODES} />

                <DropDownList id="ddlSizeForceSquare" label="Force Square" valueKey="sizeForceSquare" options={Project.SIZE_CONSTRAINTS} />

                <DropDownList id="ddlIncludeAt2X" label="Size Mode" valueKey="sizeMode" options={Project.SIZE_MODES} />

            </div>
        );
    }
}

export default SettingsDimensions;