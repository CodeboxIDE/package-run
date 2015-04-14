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

if (codebox.menubar) {
    codebox.menubar.createMenu({
        caption: "Run",
        items: [
            {
                caption: "Run Project",
                command: "run.project"
            },
            {
                caption: "Run Project As...",
                command: "run.project.as"
            },
            { type: "separator" },
            {
                caption: "Run File",
                command: "run.file"
            }
        ]
    });
}


