import React from 'react';
import { mount } from 'enzyme';
import ToolbarButton from "./ToolbarButton";


describe('<ToolbarButton/>', () => {

    it('renders empty button text', () => {
        const btn = mount(<ToolbarButton id="btnTest" />);
        expect(btn.find("#btnTest").first().text()).toEqual("");
    });

    it('renders glyph only', () => {
        const btn = mount(<ToolbarButton id="btnTest" glyph="file" />);
        expect(btn.find("#btnTest span").first().hasClass("glyphicon-file")).toEqual(true);
    });

    it('renders text only', () => {
        const btn = mount(<ToolbarButton id="btnTest" text="Hotdog" />);
        expect(btn.find("#btnTest").first().text()).toEqual("Hotdog");
    });

});