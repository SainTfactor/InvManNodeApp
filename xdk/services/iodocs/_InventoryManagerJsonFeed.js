(function (credentials, helpers) {
    var exports = {};
  
    /* Data Feed Function */
    exports.partInfoByCiId = function (params) {
        var url = 'http://' + params.TargetServer + '/json/PartByCiId?ciId=' + params.CiId;
        return $.ajax({url: url});
    };
    
    exports.logCompareRecord = function(params) {
        var url = 'http://' + params.TargetServer + '/json/LogCompareRecord';
        return $.ajax({
            url: url,
            data: {
                "CiId1": params.ciID1,
                "CiId2": params.ciID2,
                "Match": params.match
            }
        });
    }
    return exports;
})