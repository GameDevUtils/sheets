import React from 'react';
import PanelSettings from './PanelSettings';
import Project from '../../data/Project';
// import {mount} from 'enzyme';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
//import sinon from 'sinon';

describe("<PanelSettings />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    xit("Select packerMethod, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<PanelSettings />, div);

        const $ddlPackerMethod = $(div).find("#ddlPackerMethod");

        expect(Project.settings.packerMethod).toEqual("MaxRects");
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlPackerMethod.parent().parent().find("ul li a").get(0));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.packerMethod).toEqual("Basic");
    });

    it("Select sizeWidth, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<PanelSettings />, div);

        const $ddlSizeWidth = $(div).find("#ddlSizeWidth_ddl");

        expect(Project.settings.sizeWidth).toEqual(1024);
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlSizeWidth.parent().parent().find("ul li a").get(3));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.sizeWidth).toEqual(128);
    });
});