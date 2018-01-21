import React from 'react';
import AppWorkspace from './AppWorkspace';
import { mount, render, shallow } from 'enzyme';
import $ from 'jquery';
import sinon from 'sinon';
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';

describe("<AppToolbar/>", () => {

    it("clicking a toolbar button calls AppWorkspaces's handleClick function", () => {
        const wrapper = mount(<AppWorkspace />);
        const component = wrapper.instance();
        let mockFn = sinon.stub(component, "handleClick");

        component.forceUpdate();
        wrapper.update();

        expect(mockFn.callCount).toEqual(0);
        wrapper.find("#cmdZoomOut").first().simulate("click");
        expect(mockFn.callCount).toEqual(1);
    });

    it("Zoom in and zoom out, do", () => {
        const wrapper = mount(<AppWorkspace />);
        const component = wrapper.instance();

        expect(component.state.zoomLevel).toEqual("100%");
        wrapper.find("#cmdZoomIn").first().simulate("click");
        expect(component.state.zoomLevel).toEqual("200%");
        wrapper.find("#cmdZoomOut").first().simulate("click");
        expect(component.state.zoomLevel).toEqual("100%");
    });

    it("Clicks on glyph icon bubble up to parent button", () => {
        const wrapper = mount(<AppWorkspace />);
        const component = wrapper.instance();

        expect(component.state.zoomLevel).toEqual("100%");
        wrapper.find("#cmdZoomIn span.glyphicon").first().simulate("click");
        expect(component.state.zoomLevel).toEqual("200%");
    });

    it("Select zoom level, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppWorkspace />, div);

        const $ddlZoomLevel = $(div).find("#ddlZoomLevel");

        expect($ddlZoomLevel.text().trim()).toEqual("100%");
        ReactTestUtils.Simulate.click($ddlZoomLevel.parent().find("ul li a").get(0));
        expect($ddlZoomLevel.text().trim()).toEqual("1600%");
    });

    it("Function setProgress ...", () => {
        expect(AppWorkspace.setProgress(-20)).toEqual(0.0);
        expect(AppWorkspace.setProgress(200)).toEqual(100.0);
        expect(AppWorkspace.setProgress()).toEqual(0.0);
    });

});