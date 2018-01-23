import React from 'react';
import DropDownEdit from './DropDownEdit';
import Project from '../../../../data/Project';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";

describe("<DropDownEdit />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it("Select greekToMe, does", () => {
        const opts = ["zeta", "alpha", "beta", "gamma", "omega", "omega"];
        const div = document.createElement('div');
        ReactDOM.render(<DropDownEdit id="ddlGreek" label="Greek" setValueCallback={Project.updateSetting} valueKey="greekToMe" options={opts} />, div);

        const $ddlGreek = $(div).find("#ddlGreek_ddl");

        expect(Project.settings.greekToMe).toEqual(undefined);
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlGreek.parent().parent().find("ul li a").get(3));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.greekToMe).toEqual("omega");
    });

    it("Select numbers, does", () => {
        const opts = [78, 12, 33, 40, 51, 51, 67, 70];
        const div = document.createElement('div');
        ReactDOM.render(<DropDownEdit id="ddlGreek" label="Greek" setValueCallback={Project.updateSetting} valueKey="greekToMe" options={opts} />, div);

        const $ddlGreek = $(div).find("#ddlGreek_ddl");

        expect(Project.settings.greekToMe).toEqual(undefined);
        expect(Project.dirty).toEqual(false);
        ReactTestUtils.Simulate.click($ddlGreek.parent().parent().find("ul li a").get(3));
        expect(Project.dirty).toEqual(true);
        expect(Project.settings.greekToMe).toEqual(51);
    });
});