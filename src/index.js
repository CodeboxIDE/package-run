define([
    "src/settings"
], function(settings) {
    var _ = codebox.require("hr/utils");
    var commands = codebox.require("core/commands");
    var rpc = codebox.require("core/rpc");
    var dialogs = codebox.require("utils/dialogs");

    // Browse/Find files
    commands.register({
        id: "run.project",
        title: "Run: Project",
        shortcuts: [
            "alt+r"
        ],
        run: function() {

        }
    });
});