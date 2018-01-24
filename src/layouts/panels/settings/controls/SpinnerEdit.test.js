import React from 'react';
import SpinnerEdit from './SpinnerEdit';
import Project from '../../../../data/Project';
import $ from "jquery";
import ReactTestUtils from "react-dom/test-utils";
import ReactDOM from "react-dom";

describe("<SpinnerEdit />", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it("Edit someValue, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpinnerEdit id="spnSomeValue" label="Some Value" setValueCallback={Project.updateSetting} valueKey="someValue" defaultValue="2" />, div);

        const $txtSomeValue = $(div).find("#spnSomeValue");

        expect(Project.settings.someValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);

        $txtSomeValue.get(0).value = "20";
        ReactTestUtils.Simulate.change($txtSomeValue.get(0));

        expect(Project.dirty).toEqual(true);
        expect(Project.settings.someValue).toEqual(20);
    });

    it("Cursor up increments value", () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpinnerEdit id="spnSomeValue" label="Some Value" setValueCallback={Project.updateSetting} valueKey="someValue" defaultValue="2" />, div);

        const $txtSomeValue = $(div).find("#spnSomeValue");

        expect(Project.settings.someValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);

        $txtSomeValue.text("2");
        ReactTestUtils.Simulate.focus($txtSomeValue.get(0));
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Up", keyCode: 38, which: 38});
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Up", keyCode: 38, which: 38});
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Up", keyCode: 38, which: 38});

        expect(Project.dirty).toEqual(true);
        expect(Project.settings.someValue).toEqual(5);
    });

    it("Cursor down decrements value", () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpinnerEdit id="spnSomeValue" label="Some Value" setValueCallback={Project.updateSetting} valueKey="someValue" defaultValue="20" />, div);

        const $txtSomeValue = $(div).find("#spnSomeValue");

        expect(Project.settings.someValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);

        ReactTestUtils.Simulate.focus($txtSomeValue.get(0));
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Down", keyCode: 40, which: 40});
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Down", keyCode: 40, which: 40});
        ReactTestUtils.Simulate.keyUp($txtSomeValue.get(0), {key: "Down", keyCode: 40, which: 40});

        expect(Project.dirty).toEqual(true);
        expect(Project.settings.someValue).toEqual(17);
    });

    it("KeyDown event is ignored", () => {
        const div = document.createElement('div');
        ReactDOM.render(<SpinnerEdit id="spnSomeValue" label="Some Value" setValueCallback={Project.updateSetting} valueKey="someValue" defaultValue="2" />, div);

        const $txtSomeValue = $(div).find("#spnSomeValue");

        expect(Project.settings.someValue).toEqual(undefined);
        expect(Project.dirty).toEqual(false);

        ReactTestUtils.Simulate.focus($txtSomeValue.get(0));
        ReactTestUtils.Simulate.keyDown($txtSomeValue.get(0), {key: "Down", keyCode: 40, which: 40});
        ReactTestUtils.Simulate.keyDown($txtSomeValue.get(0), {key: "Up", keyCode: 38, which: 38});

        expect(Project.dirty).toEqual(false);
        expect(Project.settings.someValue).toEqual(undefined);
    });
});