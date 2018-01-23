import React from 'react';
import DropDownList from './DropDownList';
import Project from '../../../../data/Project';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";

describe("<DropDownList />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it("Selecting text item updates Project.settings.xxx.", () => {
        const opts = ["zeta", "alpha", "beta", "gamma", "omega", "omega"];
        const div = document.createElement('div');
        ReactDOM.render(<DropDownList id="ddlGreek" label="Greek" setValueCallback={Project.updateSetting} valueKey="greekToMe" options={opts} />, div);

        const $ddlGreek = $(div).find("#ddlGreek");

        expect(Project.settings.greekToMe).toEqual(undefined);
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlGreek.parent().find("ul li a").get(3));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.greekToMe).toEqual("omega");
    });

    it("Selecting numeric item updates Project.settings.xxx.", () => {
        const opts = [78, 12, 33, 40, 51, 51, 67, 70];
        const div = document.createElement('div');
        ReactDOM.render(<DropDownList id="ddlNumber" label="Number" setValueCallback={Project.updateSetting} valueKey="myValue" options={opts} />, div);

        const $ddlNumber = $(div).find("#ddlNumber");

        expect(Project.settings.myValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlNumber.parent().find("ul li a").get(3));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.myValue).toEqual(51);
    });
});