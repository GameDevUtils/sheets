import React from 'react';
import DropDownList from './controls/DropDownList';
import Project from '../../../data/Project';

class SettingsAlgorithm extends React.Component {
    render() {
        return (
            <div>
                <h3>ALGORITHM</h3>

                <DropDownList id="ddlPackerMethod" label="Sprite Packer" valueKey="packerMethod" options={Project.PACKER_METHODS} />

                <DropDownList id="ddlPackerSortBy" label="Sort By" valueKey="packerSortBy" options={Project.PACKER_SORTS} />

                <DropDownList id="ddlAllowRotate" label="Allow Rotate" valueKey="packerAllowRotate" options={Project.YES_NO_FLAGS} />
            </div>
        );
    }
}

export default SettingsAlgorithm;