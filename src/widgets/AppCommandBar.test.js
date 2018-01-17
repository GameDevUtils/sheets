import React from 'react';
import AppCommandBar from './AppCommandBar';
import {mount} from 'enzyme';
import sinon from 'sinon';

describe("<AppCommandBar/>", () => {

    it("clicking a command bar button calls its handleButtonClick function", () => {
        const wrapper = mount(<AppCommandBar />);
        const component = wrapper.instance();
        let mockFn = sinon.stub(wrapper.find("#cmdToggleSettingsPanel").first().instance(), "handleButtonClick");

        component.forceUpdate();
        wrapper.update();

        expect(mockFn.callCount).toEqual(0);
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click");
        expect(mockFn.callCount).toEqual(1);
    });

    it("handleButtonClick function does not crash", () => {
        const wrapper = mount(<AppCommandBar />);
        const component = wrapper.instance();

        let target = {
            id: "cmdToggleSettingsPanel",
            "className": "appCommandBarButton active"
        };

        // TODO: this is only here to trigger handleButtonClick. Add state checks.
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click", {preventDefault() {}, target:target});
    });

    it("handleButtonClick function does not crash when target isn't expected value", () => {
        const wrapper = mount(<AppCommandBar />);
        const component = wrapper.instance();

        let parentElement = {
            id: "cmdToggleSettingsPanel",
            "className": "appCommandBarButton active"
        };

        let target = {
            id: "",
            "className": "",
            parentElement: parentElement
        };

        // TODO: this is only here to trigger handleButtonClick. Add state checks.
        wrapper.find("#cmdToggleSettingsPanel").first().simulate("click", {preventDefault() {}, target:target});
    });
});