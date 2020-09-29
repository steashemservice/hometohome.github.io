(function($) {
  function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  function goToUri(uri) {
    setTimeout(function () { $('#swish-qr').show(); }, 1);
    window.location = uri;
    //var start, end, elapsed;
    //start = new Date().getTime();
    //document.location.replace(uri);
    //end = new Date().getTime();
    //elapsed = (end - start);
    //if (elapsed < 1) {
    //  $('#swish-qr').show();
    //}
  }
  var swishFunc = function(event){
    var $button = $(this);
    var datamsg = {"amount":{"value":1000,"editable":false},"message":{"value":"TEST","editable":false},"payee":{"value":"123 342 54 44","editable":false},"version":1};
    var dataenc = jsonToURI(datamsg);
    var req = "swish://payment?data="+dataenc;
    goToUri(req);
  }
  $(".swish-link").on("click", swishFunc);
  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    if (sParameterName[0] == sParam) {
      alert(sParameterName[1]);
    }
  }
  
})(jQuery);
