var Q = require('q');
var harbor = require('harbor')(8000, 10000);

var claimPort = function(id) {
    return Q.nfcall(harbor.claim.bind(harbor), id);
};

module.exports = {
    claim: claimPort
};