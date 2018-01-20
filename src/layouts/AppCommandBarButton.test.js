import React from 'react';
import { mount } from 'enzyme';
import AppCommandBarButton from "./AppCommandBarButton";


describe('<AppCommandBarButton/>', () => {

    beforeEach(() => {
    });

    it('renders properly when properties are missing', () => {
        const btn = mount(<AppCommandBarButton />);
        expect(btn.find(".active").length).toEqual(0);
        expect(btn.find("#appCommandBarButton1").length).toEqual(1);
        expect(btn.find("i").props()).toHaveProperty("className", "fa fa-question-circle-o");
        //expect(btn.find("div").props()).toHaveProperty("onClick", AppCommandBarButton.NOP);
    });

    it('renders notify dot when specified', () => {
        const btn = mount(<AppCommandBarButton notify="true" />);

        expect(btn.find("span").props()).toHaveProperty("className", "appCommandBarButtonBadge badge");
    });

    it('renders as active when specified', () => {
        const btn = mount(<AppCommandBarButton active="true" />);

        expect(btn.find("div").props()).toHaveProperty("className", "appCommandBarButton active");
    });

});

