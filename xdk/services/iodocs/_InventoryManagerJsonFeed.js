(function (credentials, helpers) {
  var exports = {};
  
  /* Data Feed Function */
  exports.partInfoByCiId = function (params) {
    var url = 'http://10.0.0.61/invman/json/PartByCiId?ciId=' + params.CiId;
    return $.ajax({url: url});
  };
    
  return exports;
})