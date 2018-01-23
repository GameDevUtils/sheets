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

    it('given object, updates settings and sets dirty flag', () => {
        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);

        Project.updateSettings({ "filename": "foo" });

        expect(Project.settings.filename).toEqual("foo");
        expect(Project.dirty).toEqual(true);
    });

    it('given name / value, updates settings and sets dirty flag', () => {
        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);

        Project.updateSetting("filename", "foo");

        expect(Project.settings.filename).toEqual("foo");
        expect(Project.dirty).toEqual(true);
    });

    it('given values that are not changed, does not update settings or set dirty flag', () => {
        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);

        Project.updateSetting("filename", "Untitled");

        expect(Project.settings.filename).toEqual("Untitled");
        expect(Project.dirty).toEqual(false);
    });

    it('recognizes integers', () => {
        expect(Project.isInteger(NaN)).toEqual(false);
        expect(Project.isInteger("hello")).toEqual(false);
        expect(Project.isInteger("1.23")).toEqual(false);
        expect(Project.isInteger("-1.23")).toEqual(false);
        expect(Project.isInteger(1.23)).toEqual(false);
        expect(Project.isInteger(-1.23)).toEqual(false);
        //expect(Project.isInteger(Infinity)).toEqual(false);
        expect(Project.isInteger(123)).toEqual(true);
        expect(Project.isInteger(-123)).toEqual(true);
        expect(Project.isInteger("123")).toEqual(true);
        expect(Project.isInteger("-123")).toEqual(true);
    });

    it('recognizes floats', () => {
        expect(Project.isFloat(NaN)).toEqual(false);
        expect(Project.isFloat("hello")).toEqual(false);
        expect(Project.isFloat("1.23")).toEqual(true);
        expect(Project.isFloat("-1.23")).toEqual(true);
        expect(Project.isFloat(1.23)).toEqual(true);
        expect(Project.isFloat(-1.23)).toEqual(true);
        //expect(Project.isFloat(Infinity)).toEqual(false);
        expect(Project.isFloat(123)).toEqual(true);
        expect(Project.isFloat(-123)).toEqual(true);
        expect(Project.isFloat("123")).toEqual(true);
        expect(Project.isFloat("-123")).toEqual(true);
    });

});
