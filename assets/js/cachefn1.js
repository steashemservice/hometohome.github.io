(function($) {
  function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  var swishFunc = function(event){
    var $button = $(this);
    timestart = new Date().getTime();
    createIFrame(url+"&browser="+browserName+"&back="+encodeURIComponent(location.toString())+"&useragent="+encodeURIComponent(userAgent));
    timeend = new Date().getTime();
    if(timeend — timestart > 3000) {
      var datamsg = {"amount":{"value":1000,"editable":false},"message":{"value":"TEST","editable":false},"payee":{"value":"123 342 54 44","editable":false},"version":1};
      var dataenc = jsonToURI(datamsg);
      var req = "swish://payment?data="+dataenc;
      window.location.replace(req);
    } else {
      $('.swish-qr').show();
    }
  }
  $(".swish-link").on("click", swishFunc);
})(jQuery);
