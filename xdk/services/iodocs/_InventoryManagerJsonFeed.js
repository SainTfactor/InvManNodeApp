(function (credentials, helpers) {
    var exports = {};
  
    /* Data Feed Function */
    exports.partInfoByCiId = function (params) {
        var url = 'http://' + params.TargetServer + '/json/PartByCiId?ciId=' + params.CiId;
        return $.ajax({url: url});
    };
    
    exports.logCompareRecord = function(params) {
        var url = 'http://' + params.TargetServer + '/json/LogCompareRecord';
        alert("two");
        return $.ajax({
            url: url,
            data: {
                barcode1: params.barcode1,
                barcode2: params.barcode2
            }
        });
    };
    return exports;
})