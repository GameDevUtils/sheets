import React from 'react';
import AppToolbar from './AppToolbar';
import {shallow} from 'enzyme';
import sinon from 'sinon';

describe("<AppToolbar/>", () => {

    it("clicking a toolbar button calls AppToolbar's handleClick function", () => {
        const wrapper = shallow(<AppToolbar />);
        const component = wrapper.instance();
        let mockFn = sinon.stub(component, "handleClick");

        component.forceUpdate();
        wrapper.update();

        expect(mockFn.callCount).toEqual(0);
        wrapper.find("#cmdProjectNew").simulate("click");
        expect(mockFn.callCount).toEqual(1);
    });

    it("handleClick function does not crash", () => {
        const wrapper = shallow(<AppToolbar />);
        const component = wrapper.instance();

        // TODO: this is only here to trigger handleClick. Add state checks.
        wrapper.find("#cmdProjectNew").simulate("click");
    });
});