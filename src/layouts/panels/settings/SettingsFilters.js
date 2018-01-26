import React from 'react';
import Project from '../../../data/Project';
import SpinnerEdit from "./controls/SpinnerEdit";
import DropDownList from "./controls/DropDownList";

class SettingsFilters extends React.Component {
    render() {
        return (
            <div>
                <h3>FILTERS</h3>

                <DropDownList id="ddlCleanAlpha" label="Clean Alpha" valueKey="filterCleanAlpha" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlColorMask" label="Color Mask" valueKey="filterColorMask" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlAliasSprites" label="Alias Sprites" valueKey="filterAliasSprites" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlDebugMode" label="Debug Mode" valueKey="filterDebugMode" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlTrimMode" label="Trim Mode" valueKey="filterTrimMode" options={Project.TRIM_MODES} />

                <SpinnerEdit id="ddlTrimThreshold" label="Trim Threshold" setValueCallback={Project.updateSettings} valueKey="filterTrimThreshold" defaultValue={1} />
            </div>
        );
    }
}

export default SettingsFilters;