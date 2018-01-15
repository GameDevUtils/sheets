import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import $ from 'jquery';
import AppToolbar from './AppToolbar';
import {mount, shallow, render} from 'enzyme';
import sinon from 'sinon';
import { Button } from 'react-bootstrap';

describe("App Toolbar", () => {

    let $root;
    let toolbar;

    beforeEach(() => {
        $root = $(document.createElement('div')).attr("id", "wrapper");
        toolbar = ReactDOM.render(<AppToolbar/>, $root.get(0));
    });

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

    // TODO: this is only here to trigger handleClick .. needed?
    it("handleClick function does not crash", () => {
        const wrapper = shallow(<AppToolbar />);
        const component = wrapper.instance();
        wrapper.find("#cmdProjectNew").simulate("click");
    });
});