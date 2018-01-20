import React from 'react';
import { FormGroup, FormControl, ControlLabel, DropdownButton, MenuItem, ButtonGroup, InputGroup, Glyphicon } from 'react-bootstrap';
import './PanelSettings.css';

class PanelSettings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filename: props.filename || "Untitled",
            padBorder: props.padBorder || "2",
            padShape: props.padShape || "2",
            padInner: props.padinner || "2"
        };
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e) {
        let newValue = {};
        newValue[e.target.id] = e.target.value;
        this.setState(newValue);
    }

    render() {
        return (
            <form>
                <div className="divPanelSettings">
                    <h3>OUTPUT</h3>

                    <ControlLabel>Filename</ControlLabel>
                    <FormControl
                            id="filename"
                            type="text"
                            value={this.state.filename}
                            placeholder="Filename"
                            onChange={this.handleValueChange}
                            bsSize="small"
                        />

                    <ControlLabel>Image File Type</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="PNG"
                            key="3"
                            id="imageFileType"
                        >
                            <MenuItem eventKey="1">GIF</MenuItem>
                            <MenuItem eventKey="2">JPG</MenuItem>
                            <MenuItem eventKey="3" active>PNG</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Data File Type (Atlas)</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="XML"
                            key="3"
                            id="dataFileType"
                        >
                            <MenuItem eventKey="1">CSS</MenuItem>
                            <MenuItem eventKey="2">JSON</MenuItem>
                            <MenuItem eventKey="3" active>XML</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Name in Data File</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="Strip Extension"
                            key="3"
                            id="dataFileExtension"
                        >
                            <MenuItem eventKey="1">Keep Extension</MenuItem>
                            <MenuItem eventKey="2" active>Strip Extension</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <h3>ALGORITHM</h3>

                    <ControlLabel>Sprite Packer</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="MaxRects"
                            key="2"
                            id="packerMethod"
                        >
                            <MenuItem eventKey="1">Basic</MenuItem>
                            <MenuItem eventKey="2" active>MaxRects</MenuItem>
                            <MenuItem eventKey="3">Shelf</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Sort By</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="AREA_DESC"
                            key="2"
                            id="packerSortBy"
                        >
                            <MenuItem eventKey="1">AREA</MenuItem>
                            <MenuItem eventKey="2" active>AREA_DESC</MenuItem>
                            <MenuItem eventKey="3">HEIGHT</MenuItem>
                            <MenuItem eventKey="4">HEIGHT_DESC</MenuItem>
                            <MenuItem eventKey="5">NAME</MenuItem>
                            <MenuItem eventKey="6">NAME_DESC</MenuItem>
                            <MenuItem eventKey="7">WIDTH</MenuItem>
                            <MenuItem eventKey="8">WIDTH_DESC</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Allow Rotate</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="packerAllowRotate"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <h3>DIMENSIONS</h3>

                    <ControlLabel>Width</ControlLabel>
                    <InputGroup bsSize="small">
                        <FormControl type="text" value="1024" onChange={this.handleValueChange} />
                        <DropdownButton
                            bsStyle="default"
                            componentClass={InputGroup.Button}
                            id="sizeWidth"
                            title=""
                            pullRight
                        >
                            <MenuItem key="4">16</MenuItem>
                            <MenuItem key="5">32</MenuItem>
                            <MenuItem key="6">64</MenuItem>
                            <MenuItem key="7">128</MenuItem>
                            <MenuItem key="8">256</MenuItem>
                            <MenuItem key="9">512</MenuItem>
                            <MenuItem key="10" active>1024</MenuItem>
                            <MenuItem key="11">2048</MenuItem>
                            <MenuItem key="12">4096</MenuItem>
                            <MenuItem key="13">8192</MenuItem>
                            <MenuItem key="14">16384</MenuItem>
                        </DropdownButton>
                    </InputGroup>

                    <ControlLabel>Height</ControlLabel>
                    <InputGroup bsSize="small">
                        <FormControl type="text" value="1024" onChange={this.handleValueChange} />
                        <DropdownButton
                            bsStyle="default"
                            componentClass={InputGroup.Button}
                            id="sizeHeight"
                            title=""
                            pullRight
                        >
                            <MenuItem key="4">16</MenuItem>
                            <MenuItem key="5">32</MenuItem>
                            <MenuItem key="6">64</MenuItem>
                            <MenuItem key="7">128</MenuItem>
                            <MenuItem key="8">256</MenuItem>
                            <MenuItem key="9">512</MenuItem>
                            <MenuItem key="10" active>1024</MenuItem>
                            <MenuItem key="11">2048</MenuItem>
                            <MenuItem key="12">4096</MenuItem>
                            <MenuItem key="13">8192</MenuItem>
                            <MenuItem key="14">16384</MenuItem>
                        </DropdownButton>
                    </InputGroup>

                    <ControlLabel>Size Mode</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="Max Size"
                            key="2"
                            id="sizeMode"
                        >
                            <MenuItem eventKey="1">Fixed Size</MenuItem>
                            <MenuItem eventKey="2" active>Max Size</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Size Constraint</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="Power of Two"
                            key="2"
                            id="sizeConstraint"
                        >
                            <MenuItem eventKey="1">Any Size</MenuItem>
                            <MenuItem eventKey="2" active>Power of Two</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Force Square</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="sizeForceSquare"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Include @2x</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="sizeIncludeAt2x"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <h3>PADDING</h3>

                    <ControlLabel>Border Padding</ControlLabel>
                    <FormGroup>
                        <InputGroup bsSize="small">
                            <FormControl
                                type="text"
                                value={this.state.padBorder}
                                id="paddingBorder"
                                onChange={this.handleValueChange}
                            />
                            <InputGroup.Addon>
                                <Glyphicon glyph="resize-vertical" />
                            </InputGroup.Addon>
                        </InputGroup>
                    {/*</FormGroup>*/}

                    <ControlLabel>Shape Padding</ControlLabel>
                    {/*<FormGroup>*/}
                        <InputGroup bsSize="small">
                            <FormControl
                                type="text"
                                value={this.state.padShape}
                                id="paddingShape"
                                onChange={this.handleValueChange}
                            />
                            <InputGroup.Addon>
                                <Glyphicon glyph="resize-vertical" />
                            </InputGroup.Addon>
                        </InputGroup>
                    {/*</FormGroup>*/}

                    <ControlLabel>Inner Padding</ControlLabel>
                    {/*<FormGroup>*/}
                        <InputGroup bsSize="small">
                            <FormControl
                                type="text"
                                value={this.state.padInner}
                                id="paddingInner"
                                onChange={this.handleValueChange}
                            />
                            <InputGroup.Addon>
                                <Glyphicon glyph="resize-vertical" />
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>

                    <h3>FILTERS</h3>

                    <ControlLabel>Clean Alpha</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="filterCleanAlpha"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Color Mask</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="filterColorMask"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Alias Sprites</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="filterAliasSprites"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Debug Mode</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="filterDebugMode"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Trim Mode</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="None"
                            key="2"
                            id="filterTrimMode"
                        >
                            <MenuItem eventKey="1" active>None</MenuItem>
                            <MenuItem eventKey="2">Trim</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Trim Threshold</ControlLabel>
                    {/*<FormGroup>*/}
                        <InputGroup bsSize="small">
                            <FormControl
                                type="text"
                                value="1"
                                id="filterTrimThreshold"
                                onChange={this.handleValueChange}
                            />
                            <InputGroup.Addon>
                                <Glyphicon glyph="resize-vertical" />
                            </InputGroup.Addon>
                        </InputGroup>
                        {/*</FormGroup>*/}

                    <h3>ADVANCED</h3>

                    <ControlLabel>Animated GIF</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="Use First Frame"
                            key="2"
                            id="advancedExtractGIF"
                        >
                            <MenuItem eventKey="1" active>Use First Frame</MenuItem>
                            <MenuItem eventKey="2">Extract Frames</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <ControlLabel>Zip Project</ControlLabel>
                    <ButtonGroup justified>
                        <DropdownButton
                            bsStyle="default"
                            bsSize="small"
                            title="No"
                            key="2"
                            id="advancedZipProject"
                        >
                            <MenuItem eventKey="1">Yes</MenuItem>
                            <MenuItem eventKey="2" active>No</MenuItem>
                        </DropdownButton>
                    </ButtonGroup>

                    <br/><br/><br/><br/>

                </div>
            </form>
        );
    }
}

export default PanelSettings;