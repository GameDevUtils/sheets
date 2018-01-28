import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './App';
import Project from './data/Project';
import Workspace from './data/Workspace';

describe("<App/>", () => {

    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('shows panel when AppCommandBarButton is clicked', () => {
        expect(Workspace.config.isExpanded).toEqual(true);
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        expect(Workspace.config.isExpanded).toEqual(false);
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        expect(Workspace.config.isExpanded).toEqual(true);
    });

    it('creates a new project when button is clicked', () => {
        Project.dirty = true;
        wrapper.find("#cmdProjectNew").first().simulate("click");
        expect(Project.dirty).toEqual(false);
    });

    it('creates a new project when button icon is clicked', () => {
        Project.dirty = true;
        wrapper.find("#cmdProjectNew span.glyphicon").first().simulate("click");
        expect(Project.dirty).toEqual(false);
    });

    it('hides panels and expands workspace', () => {
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        expect(Workspace.config.isExpanded).toEqual(false);
        wrapper.find("#panelCommandSettings button").first().simulate("click");
        expect(Workspace.config.isExpanded).toEqual(true);
    });

});
