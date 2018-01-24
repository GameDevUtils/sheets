import React from 'react';
import { mount, render, shallow } from 'enzyme';
import $ from 'jquery';
import sinon from 'sinon';
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import Workspace from "../data/Workspace";
import AppWorkspaceToolbar from './AppWorkspaceToolbar';

describe("<AppWorkspaceToolbar/>", () => {

    // it("clicking a toolbar button calls AppWorkspaces's handleClick function", () => {
    //     const wrapper = mount(<AppWorkspace />);
    //     const component = wrapper.instance();
    //     let mockFn = sinon.stub(component, "handleClick");
    //
    //     component.forceUpdate();
    //     wrapper.update();
    //
    //     expect(mockFn.callCount).toEqual(0);
    //     wrapper.find("#cmdZoomOut").first().simulate("click");
    //     expect(mockFn.callCount).toEqual(1);
    // });

    it("Select zoom level handles missing value", () => {
        const wrapper = mount(<AppWorkspaceToolbar />);
        const component = wrapper.instance();

        expect(Workspace.config.zoomLevel).toEqual("100%");
        wrapper.find("#cmdZoomIn span.glyphicon").first().simulate("click");
        expect(Workspace.config.zoomLevel).toEqual("200%");
        component.handleSelect(0, { nativeEvent: { target : {} } });
        expect(Workspace.config.zoomLevel).toEqual("100%");
    });

});