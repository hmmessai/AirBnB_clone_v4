$('document').ready( function () {
  $.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    success: function (data) {
      if (data['status'] == "OK") {
        $('header #api_status').addClass('available');
      } else {
        $('header #api_status').removeClass('available');
      }
    }
  });
});
