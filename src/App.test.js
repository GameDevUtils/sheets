import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import $ from 'jquery';
import App from './App';
import Project from './data/Project';
import sinon from "sinon";

describe("<App/>", () => {

    let wrapper;
    // let component;

    beforeEach(() => {
        wrapper = mount(<App />);
        // component = wrapper.instance();

        // component.forceUpdate();
        // wrapper.update();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('shows panel when AppCommandBarButton is clicked', () => {
        // TODO: this is only here to trigger handleButtonClick. Add state checks.
        // expect(wrapper.find("#panelCommandSettings").first().getDOMNode().style["_values"]).toHaveProperty("display", "none");

        expect(wrapper.find(".expandedWorkspace")).toHaveLength(1);
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        expect(wrapper.find(".expandedWorkspace")).toHaveLength(0);


        // const div = document.createElement('div');
        // ReactDOM.render(<App />, div);
        // expect($(div).find(".expandedWorkspace")).toHaveLength(1);
        // wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        // wrapper.update();
        // expect($(div).find(".expandedWorkspace")).toHaveLength(0);





        // expect(wrapper.find("#panelCommandSettings").first().getDOMNode().style["_values"]).toHaveProperty("display", "block");
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

});
