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
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    headers: {"Content-Type": 'application/json'},
    data: '{}',
    success: function (data) {
      for (d in data) {
        S('section.places').append('<li>d</li>');
      }
    }
  });
});
