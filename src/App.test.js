import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import $ from 'jquery';
import App from './App';
import Project from './data/Project';
import sinon from "sinon";

describe("<App/>", () => {

    let wrapper;
    let component;

    beforeEach(() => {
        wrapper = mount(<App />);
        component = wrapper.instance();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('shows panel when AppCommandBarButton is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        // TODO: this is only here to trigger handleButtonClick. Add state checks.
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
    });

    it('shows panel when AppCommandBarButton is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        // TODO: this is only here to trigger handleButtonClick. Add state checks.
        wrapper.find("#cmdProjectNew").first().simulate("click");
    });

    it('creates a new project when button is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        Project.dirty = true;
        wrapper.find("#cmdProjectNew").first().simulate("click");
        expect(Project.dirty).toEqual(false);
    });

    it('creates a new project when button icon is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        Project.dirty = true;
        wrapper.find("#cmdProjectNew span.glyphicon").first().simulate("click");
        expect(Project.dirty).toEqual(false);
    });

});
