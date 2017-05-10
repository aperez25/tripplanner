
const delButton = '<button class="btn btn-xs btn-danger remove btn-circle id="">x</button>';
let dayCounter = 1,
  currentDay = 1,
  itineraryObject = {};

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
    // **** NEED TO UPDATE WITH ITINERARY OBJECT INSTEAD OF DELETING FROM DIV
    // remove itinerary item
    $(this).parent().remove();
});

$("#day-add").on('click', function(){
  // pushing prev day itinerary into array
  itineraryObject[currentDay] = $('#itinerary').clone()
  console.log(itineraryObject);
  // clear itinerary
  $('#itinerary .list-group').children().text('');

  $(this).prev().removeClass('current-day')
  $(this).before('<button class="btn btn-circle day-btn current-day days">' + ++dayCounter + '</button');
  $('#day-title').text('Day ' + dayCounter);
  currentDay = dayCounter;
});

// on click, switches day titles and buttons
$('.day-buttons').on('click', '.days', function(){
  // save current itinerary
  itineraryObject[currentDay] = $('#itinerary').clone()
  // update current-day button
  $(this).parent().find('.current-day')
  .removeClass('current-day');
  $(this).addClass('current-day');
  // update the current-day and replace itinerary
  currentDay = $(this).text();
  $('#itinerary').replaceWith(itineraryObject[currentDay]);
  $('#day-title').text('Day ' + currentDay)
})

// MAP TO DO
  // map markers also need to be saved
  // set markers to null
  // map needs to be reset
// if days are switched back, reload map

