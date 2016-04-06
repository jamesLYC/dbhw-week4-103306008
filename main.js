var API_PATH = "http://cabu.kcg.gov.tw/Web/opendata/?category=region&type=xml";

function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
