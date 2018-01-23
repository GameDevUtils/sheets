import React from 'react';
import TextEdit from './TextEdit';
import Project from '../../../../data/Project';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";

describe("<TextEdit />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it("Edit filename, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<TextEdit id="txtFilename" label="Filename" setValueCallback={Project.updateSetting} valueKey="filename" defaultValue="Untitled" />, div);

        const $txtFilename = $(div).find("#txtFilename");

        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);

        $txtFilename.text("Project01");
        ReactTestUtils.Simulate.change($txtFilename.get(0));
        // ReactTestUtils.Simulate.keyDown($txtFilename.get(0), {key: "Enter", keyCode: 13, which: 13});

        expect(Project.dirty).toEqual(true);
        expect(Project.settings.filename).toEqual("Project01");
    });
});