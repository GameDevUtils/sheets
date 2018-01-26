import React from 'react';
import PanelSettings from './PanelSettings';
import Project from '../../data/Project';
// import {mount} from 'enzyme';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
//import sinon from 'sinon';

function SimulateClickDDL($dropdown, index) { ReactTestUtils.Simulate.click($dropdown.parent().find("ul li a").get(index || 0)); }
function SimulateClickDDE($dropdown, index) { ReactTestUtils.Simulate.click($dropdown.parent().parent().find("ul li a").get(index || 0)); }

describe("<PanelSettings />", () => {

    let _div;

    beforeEach(() => {
        _div = document.createElement('div');
        ReactDOM.render(<PanelSettings />, _div);
        Project.NewProject();
    });

    it("Select packerMethod works", () => {
        const $ddlPackerMethod = $(_div).find("#ddlPackerMethod");

        expect(Project.settings.packerMethod).toEqual("MaxRects");
        expect(Project.dirty).toEqual(false);
        SimulateClickDDL($ddlPackerMethod, 0);
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.packerMethod).toEqual("Basic");
    });

    it("Select sizeWidth works", () => {
        const $ddlSizeWidth = $(_div).find("#ddlSizeWidth_ddl");

        expect(Project.settings.sizeWidth).toEqual(1024);
        expect(Project.dirty).toEqual(false);
        SimulateClickDDE($ddlSizeWidth, 3);
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.sizeWidth).toEqual(128);
    });
});