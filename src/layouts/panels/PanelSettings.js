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

                    <SettingsOutput onSettingsChanged={this.props.onSettingsChanged}/>

                    <SettingsAlgorithm onSettingsChanged={this.props.onSettingsChanged} />

                    <SettingsDimensions onSettingsChanged={this.props.onSettingsChanged} />

                    <SettingsPadding onSettingsChanged={this.props.onSettingsChanged} />

                    <SettingsFilters onSettingsChanged={this.props.onSettingsChanged} />

                    <SettingsAdvanced onSettingsChanged={this.props.onSettingsChanged} />

                    <br/><br/><br/><br/>

                </div>
            </form>
        );
    }
}

export default PanelSettings;