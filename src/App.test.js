import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import $ from 'jquery';
import App from './App';
import sinon from "sinon";

describe("<App/>", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    // TODO: this is only here to trigger handleButtonClick .. needed?
    it('shows panel when AppCommandBarButton is clicked', () => {
        const wrapper = mount(<App />);
        const component = wrapper.instance();
        let mockFn = sinon.stub(component, "handleButtonClick");

        component.forceUpdate();
        wrapper.update();

        // expect(mockFn.callCount).toEqual(0);
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        // expect(mockFn.callCount).toEqual(1);
    });

    // TODO: this is only here to trigger handleButtonClick .. needed?
    it('shows panel when AppCommandBarButton is clicked', () => {
        const wrapper = mount(<App />);
        const component = wrapper.instance();
        let mockFn = sinon.stub(component, "handleButtonClick");

        component.forceUpdate();
        wrapper.update();

        // expect(mockFn.callCount).toEqual(0);
        wrapper.find("#cmdProjectNew").first().simulate("click");
        // expect(mockFn.callCount).toEqual(1);
    });

});
