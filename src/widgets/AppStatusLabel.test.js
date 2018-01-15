import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AppStatusLabel from "./AppStatusLabel";


describe('Command Bar Button', () => {

    beforeEach(() => {
    });

    it('renders properly when properties are missing', () => {
        const btn = mount(<AppStatusLabel />);

        expect(btn.find("span").get(0).props.className).toEqual("appStatusLabelTitle");
        expect(btn.find("span.appStatusLabelTitle").text()).toEqual("STATUS:");
        expect(btn.find("span.appStatusLabelText").text()).toEqual("Status is unknown.");
        expect(btn.find("#appStatusLabel1_Title").length).toEqual(1);
        expect(btn.find("#appStatusLabel1_Text").length).toEqual(1);
    });

});