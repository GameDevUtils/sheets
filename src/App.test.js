import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import $ from 'jquery';
import App from './App';
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

    // TODO: this is only here to trigger handleButtonClick .. needed?
    it('shows panel when AppCommandBarButton is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
    });

    // TODO: this is only here to trigger handleButtonClick .. needed?
    it('shows panel when AppCommandBarButton is clicked', () => {
        component.forceUpdate();
        wrapper.update();

        wrapper.find("#cmdProjectNew").first().simulate("click");
    });

});
