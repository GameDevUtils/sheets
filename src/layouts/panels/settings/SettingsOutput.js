import React from 'react';
import Project from '../../../data/Project';
import DropDownList from './controls/DropDownList';
import TextEdit from "./controls/TextEdit";

class SettingsOutput extends React.Component {
    render() {
        return (
            <div>
                <h3>OUTPUT</h3>

                <TextEdit id="txtFilename" label="Filename" setValueCallback={Project.updateSettings} valueKey="filename" defaultValue="Untitled" />

                <DropDownList id="ddlImageFileType" label="Image File Type" valueKey="imageFileType" options={Project.IMAGE_FILE_TYPES} />

                <DropDownList id="ddlDataFileType" label="Date File Type (Atlas)" valueKey="dataFileType" options={Project.ATLAS_FILE_TYPES} />

                <DropDownList id="ddlDataFileExtension" label="Name in Date File" valueKey="dataFileExtensions" options={Project.ATLAS_EXTENSIONS} />
            </div>
        );
    }
}

export default SettingsOutput;