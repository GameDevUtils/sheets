import React from 'react';
import SettingsAlgorithm from './settings/SettingsAlgorithm';
import SettingsAdvanced from "./settings/SettingsAdvanced";
import SettingsOutput from "./settings/SettingsOutput";
import SettingsPadding from "./settings/SettingsPadding";
import SettingsDimensions from "./settings/SettingsDimensions";
import SettingsFilters from "./settings/SettingsFilters";
import './PanelSettings.css';

class PanelSettings extends React.Component {
    render() {
        return (
            <form>
                <div className="divPanelSettings">

                    <SettingsOutput />

                    <SettingsAlgorithm />

                    <SettingsDimensions />

                    <SettingsPadding />

                    <SettingsFilters />

                    <SettingsAdvanced />

                    <br/><br/><br/><br/>

                </div>
            </form>
        );
    }
}

export default PanelSettings;