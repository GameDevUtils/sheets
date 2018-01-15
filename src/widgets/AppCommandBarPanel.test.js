import React from 'react';
import { mount } from 'enzyme';
import AppCommandBarPanel from "./AppCommandBarPanel";


describe('Command Bar Button', () => {

    it('renders properly when properties are missing', () => {
        const btn = mount(<AppCommandBarPanel />);

        expect(btn.find("div").get(0).props.style).toHaveProperty("display", "none");
    });

    it('renders display block when visible', () => {
        const btn = mount(<AppCommandBarPanel visible="true" />);

        expect(btn.find("div").get(0).props.style).toHaveProperty("display", "block");
    });

});