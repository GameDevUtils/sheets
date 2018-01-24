import React from 'react';
import Workspace from './Workspace';

describe("data/Workspace.js", () => {

    beforeEach(() => {
        Workspace.Reset();
    });

    it('clamps progress between 0 .. 100', () => {
        expect(Workspace.setProgress(-200)).toEqual(0);
        expect(Workspace.setProgress(200)).toEqual(100);
        expect(Workspace.setProgress(45)).toEqual(45);
        expect(Workspace.setProgress()).toEqual(0);
    });

    it('handles zooming in', () => {
        Workspace.zoom(2);
        Workspace.zoom(2);
        Workspace.zoom(2);

        expect(Workspace.config.zoomLevel).toEqual("800%");
    });

    it('handles zooming out', () => {
        Workspace.zoom(0.5);
        Workspace.zoom(0.5);
        Workspace.zoom(0.5);

        expect(Workspace.config.zoomLevel).toEqual("12.5%");
    });

});
