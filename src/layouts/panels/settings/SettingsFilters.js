import React from 'react';
import Project from '../../../data/Project';
import SpinnerEdit from "./controls/SpinnerEdit";
import DropDownList from "./controls/DropDownList";

class SettingsFilters extends React.Component {
    render() {
        return (
            <div>
                <h3>FILTERS</h3>

                <DropDownList id="ddlCleanAlpha" label="Clean Alpha" setValueCallback={Project.updateSettings} valueKey="filterCleanAlpha" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlColorMask" label="Color Mask" setValueCallback={Project.updateSettings} valueKey="filterColorMask" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlAliasSprites" label="Alias Sprites" setValueCallback={Project.updateSettings} valueKey="filterAliasSprites" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlDebugMode" label="Debug Mode" setValueCallback={Project.updateSettings} valueKey="filterDebugMode" options={Project.YES_NO_FLAGS} />

                <DropDownList id="ddlTrimMode" label="Trim Mode" setValueCallback={Project.updateSettings} valueKey="filterTrimMode" options={Project.TRIM_MODES} />

                <SpinnerEdit id="ddlTrimThreshold" label="Trim Threshold" setValueCallback={Project.updateSettings} valueKey="filterTrimThreshold" defaultValue={1} />
            </div>
        );
    }
}

export default SettingsFilters;