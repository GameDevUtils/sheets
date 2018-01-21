import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import $ from 'jquery';
import Project from './Project';
import sinon from "sinon";

describe("data/Project.js", () => {

    beforeEach(() => {
        Project.NewProject();
    });

    it('updates settings and sets dirty flag', () => {
        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);

        Project.updateSettings({ "filename": "foo" });

        expect(Project.settings.filename).toEqual("foo");
        expect(Project.dirty).toEqual(true);
    });

});
