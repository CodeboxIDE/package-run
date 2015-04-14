var settings = require("./settings");

var _ = codebox.require("hr.utils");
var commands = codebox.require("core/commands");
var rpc = codebox.require("core/rpc");
var dialogs = codebox.require("utils/dialogs");

// Commands
var runProject = commands.register({
    id: "run.project",
    title: "Run: Project",
    icon: "playback-play",
    shortcuts: [
        "alt+r"
    ],
    run: function() {
        return rpc.execute("run/project")
        .then(function(r) {
            return commands.run("terminal.open", {
                shellId: r.shellId
            });
        });
    }
});
