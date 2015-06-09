(function (credentials, helpers) {
  var exports = {};
  
  /* Data Feed Function */
  exports.partInfoByCiId = function (params) {
    var url = 'http://' + params.TargetServer + '/json/PartByCiId?ciId=' + params.CiId;
    return $.ajax({url: url});
  };
    
  return exports;
})