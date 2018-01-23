import React from 'react';
import SpinnerEdit from './SpinnerEdit';
import Project from '../../../../data/Project';
// import {mount} from 'enzyme';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";
//import sinon from 'sinon';

describe("<SpinnerEdit />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it("Edit someValue, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpinnerEdit id="spnSomeValue" label="Some Value" setValueCallback={Project.updateSettings} valueKey="someValue" defaultValue="2" />, div);

        const $txtSomeValue = $(div).find("#spnSomeValue");

        expect(Project.settings.someValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);

        $txtSomeValue.text("2");
        ReactTestUtils.Simulate.change($txtSomeValue.get(0));
        // ReactTestUtils.Simulate.keyDown($txtFilename.get(0), {key: "Enter", keyCode: 13, which: 13});

        expect(Project.dirty).toEqual(true);
        expect(Project.settings.someValue).toEqual(2);
    });
});