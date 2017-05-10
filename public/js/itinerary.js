
const delButton = '<button class="btn btn-xs btn-danger remove btn-circle id="">x</button>',
  dayButtons = [];

$('#hotel-add').on('click', function(){
  // capture selected hotel value & index
  const $hotelSelected = $hotelChoices.children('option:selected').text();
  const $hotelIndex = $hotelChoices.children('option:selected').index();
  // creat Google map marker
  const marker = drawMarker('hotel', hotels[$hotelIndex].place.location, $hotelSelected);
  // add hotel to the itinerary list
  $('#hotel-item').append('<span class="itinerary">' + $hotelSelected + ' ' + delButton + '</span>');
});

$('#restaurant-add').on('click', function(){
  const $restaurantSelected = $restaurantChoices.children('option:selected').text();
  const $restaurantIndex = $restaurantChoices.children('option:selected').index();
  const marker = drawMarker('restaurant', restaurants[$restaurantIndex].place.location, $restaurantSelected);

  $('#restaurant-item').append('<span class="itinerary">' + $restaurantSelected  + ' ' + delButton + '</span>');
});

$('#activity-add').on('click', function(){
  // capture selected activities value
  const $activitiesSelected = $activityChoices.children('option:selected').text();
  const $activitiesIndex = $activityChoices.children('option:selected').index();
  const marker = drawMarker('activity', activities[$activitiesIndex].place.location, $activitiesSelected);

  $('#activity-item').append('<span class="itinerary">' + $activitiesSelected + ' ' + delButton + '</span>');
});

$('#itinerary').on('click', '.remove', function(){
    //find and delete Google marker
    const markerName = $(this).parent().text().slice(0, -2);
    deleteMarker(markerName)
    // remove itinerary item
    $(this).parent().remove();
});
//current-day - a class for currently selected day
//day-buttons (parent)
//  <button class="btn btn-circle day-btn current-day">1</button>
// remove current-day class from day one
//  <span id="day-title"> - the headline that needs to update
$("#day-add").on('click', function(){
  $(this).prev().removeClass('current-day')
  $(this).before('<button class="btn btn-circle day-btn current-day">' + 'T' + '</button');
});
