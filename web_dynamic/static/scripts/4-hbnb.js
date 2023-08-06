$('document').ready( function () {
  let amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenities).join(', '))
  });
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
  $('button').on('click', function () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      headers: '{"Content-Type": "application/json"}',
      data: $(amenities),
      success: function (data) {
	for (d in data)  {
          $('section.places').append('<li>d</li>');
	}
      }
    });
  });
});
