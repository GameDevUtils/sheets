import React from 'react';
import AppWorkspace from './AppWorkspace';
import AppWorkspaceToolbar from './AppWorkspaceToolbar';
import { mount, render, shallow } from 'enzyme';
import $ from 'jquery';
import sinon from 'sinon';
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import Workspace from "../data/Workspace";

describe("<AppWorkspace/>", () => {

    beforeEach(() => {
        Workspace.Reset();
    });

    it("Zoom in and zoom out, do", () => {
        const wrapper = mount(<AppWorkspace />);
        const component = wrapper.instance();

        expect(Workspace.config.zoomLevel).toEqual("100%");
        wrapper.find("#cmdZoomIn").first().simulate("click");
        expect(Workspace.config.zoomLevel).toEqual("200%");
        wrapper.find("#cmdZoomOut").first().simulate("click");
        expect(Workspace.config.zoomLevel).toEqual("100%");
    });

    it("Clicks on glyph icon bubble up to parent button", () => {
        const wrapper = mount(<AppWorkspace />);
        const component = wrapper.instance();

        expect(Workspace.config.zoomLevel).toEqual("100%");
        wrapper.find("#cmdZoomIn span.glyphicon").first().simulate("click");
        expect(Workspace.config.zoomLevel).toEqual("200%");
    });

    it("Select zoom level, does", () => {
        const div = document.createElement('div');
        ReactDOM.render(<AppWorkspace />, div);

        const $ddlZoomLevel = $(div).find("#ddlZoomLevel");

        expect($ddlZoomLevel.text().trim()).toEqual("100%");
        ReactTestUtils.Simulate.click($ddlZoomLevel.parent().find("ul li a").get(0));
        expect($ddlZoomLevel.text().trim()).toEqual("1600%");
    });
});