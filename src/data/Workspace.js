class Workspace {

    static DEFAULT_OPTIONS() {
        return {
            zoomLevel: '100%',
            isExpanded: true
        };
    };

    static config = Workspace.DEFAULT_OPTIONS();

    static Reset() {
        Workspace.config = Workspace.DEFAULT_OPTIONS();
    };

    static zoom(delta) {
        let zoomLevel = Number.parseFloat(Workspace.config.zoomLevel.replace("%", ""));
        zoomLevel *= delta;
        zoomLevel = Math.max(12.5, zoomLevel);
        zoomLevel = zoomLevel + "%";
        Workspace.config.zoomLevel = zoomLevel;
    }

    static setProgress(value) {
        let val = Number.parseFloat(value) || 0.0;
        val = Math.min(Math.max(0.0, Math.round(val)), 100.0);
        return val;
    }

}

export default Workspace;