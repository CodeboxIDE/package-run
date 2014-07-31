module.exports = function(codebox) {
    var terminal = codebox.rpc.get("terminal");

    codebox.logger.log("start run services");

    codebox.rpc.service("run", {
        project: function() {

        },
        file: function() {

        }
    });
};
