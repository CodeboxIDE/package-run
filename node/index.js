var Q = require("q");
var _ = require("lodash");
var path = require("path");
var ports = require("./ports");

var fileRunners = require("./runners");

module.exports = function(codebox) {
    var terminal = codebox.rpc.get("terminal");
    var project = codebox.rpc.get("project");
    var workspace = codebox.workspace;

    codebox.logger.log("start run services");

    codebox.rpc.service("run", {
        project: function(args) {
            var runId = _.uniqueId("run-project-");

            return Q.all([
                project.detect(),
                ports.claim(runId)
            ])
            .spread(function(projects, port) {
                var project = projects[0];
                if (!project || !project.runner[0]) throw "No runner found for this project type";

                var runner = project.runner[0];

                return terminal.create({
                    shellId: runId,
                    command: [
                        '/bin/bash',

                        // Script itself
                        runner.script,

                        // Path to project folder
                        workspace.root(),

                        // Port allocated/claimed
                        port
                    ]
                });
            });
        },
        file: function(args) {
            var runId = _.uniqueId("run-file-");
            var filename = args.file;
            if (!filename) throw "Need a filepath";

            var ext = path.extname(filename).replace('.', '').toLowerCase();
            var cmd = fileRunners[ext];
            if (!cmd) throw "No runner found for this file";

            return terminal.create({
                shellId: runId,
                command: cmd.replace("%s", filename)
            });
        }
    });
};
