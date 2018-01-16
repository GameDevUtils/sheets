import React from 'react';
import { mount } from 'enzyme';
import AppCommandBarPanel from "./AppCommandBarPanel";


describe('<AppCommandBarPanel/>', () => {

    it('renders properly when properties are missing', () => {
        const btn = mount(<AppCommandBarPanel />);

        expect(btn.find("div").get(0).props.style).toHaveProperty("display", "none");
        expect(btn.find("i").get(0).props.className).toEqual("fa fa-question-circle-o");
        expect(btn.find("div").get(0).props.id).toEqual("appCommandBarPanel1");
    });

    it('renders display block when visible', () => {
        const btn = mount(<AppCommandBarPanel visible="true" />);

        expect(btn.find("div").get(0).props.style).toHaveProperty("display", "block");
    });

});