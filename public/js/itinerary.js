
const delButton = '<button class="btn btn-xs btn-danger remove btn-circle id="">x</button>',
  itineraryMarkers = [];

$('#hotel-add').on('click', function(){
  // capture selected hotel value & index
  const $hotelSelected = $hotelChoices.children('option:selected').text();
  const $hotelIndex = $hotelChoices.children('option:selected').index();
  // creat Google map marker
  const marker = drawMarker('hotel', hotels[$hotelIndex].place.location);
  // add hotel to the itinerary list
  $('#hotel-item').append('<span class="itinerary">' + $hotelSelected + ' ' + delButton + '</span>');
});

$('#restaurant-add').on('click', function(){
  const $restaurantSelected = $restaurantChoices.children('option:selected').text();
  const $restaurantIndex = $restaurantChoices.children('option:selected').index();
  const marker = drawMarker('restaurant', restaurants[$restaurantIndex].place.location);
  // itineraryMarkers.push(restaurants[$restaurantIndex].place.location);
  $('#restaurant-item').append('<span class="itinerary">' + $restaurantSelected  + ' ' + delButton + '</span>');
});

$('#activity-add').on('click', function(){
  // capture selected activities value
  const $activitiesSelected = $activityChoices.children('option:selected').text();
  const $activitiesIndex = $activityChoices.children('option:selected').index();
  const marker = drawMarker('activity', activities[$activitiesIndex].place.location);
  // add activities to the itinerary list
  $('#activity-item').append('<span class="itinerary">' + $activitiesSelected + ' ' + delButton + '</span>');
});

$('#itinerary').on('click', '.remove', function(){
    $(this).parent().remove();
});
