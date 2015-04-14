var Q = require("q");
var _ = require("lodash");
var ports = require("./ports");

module.exports = function(codebox) {
    var terminal = codebox.rpc.get("terminal");
    var project = codebox.rpc.get("project");
    var workspace = codebox.workspace;

    codebox.logger.log("start run services");

    codebox.rpc.service("run", {
        project: function() {
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
        file: function() {

        }
    });
};
