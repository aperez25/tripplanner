
const delButton = '<button class="btn btn-xs btn-danger remove btn-circle id="">x</button>'

$('#hotel-add').on('click', function(){
  // capture selected hotel value
  const $hotelSelected = $('#hotel-choices').children('option:selected').text();
  // add hotel to the itinerary list
  $('#hotel-item').append('<span class="itinerary">' + $hotelSelected + ' ' + delButton + '</span>');
  // find the index of the hotel in hotels array
  const index = hotels.findIndex(function(hotel){
    return hotel.name ===  $hotelSelected;
  });
  drawMarker('hotel', hotels[index].place.location);
});

$('#restaurant-add').on('click', function(){
  // capture selected restaurant value
  const $restaurantSelected = $('#restaurant-choices').children('option:selected').text();
  // add restaurant to the itinerary list
  $('#restaurant-item').append('<span class="itinerary">' + $restaurantSelected  + ' ' + delButton + '</span>' );
  // find the index of the restaurant in restaurants array
  const index = restaurants.findIndex(function(restaurant){
    return restaurant.name ===  $restaurantSelected;
  });
  drawMarker('restaurant', restaurants[index].place.location);
});

$('#activity-add').on('click', function(){
  // capture selected activities value
  const $activitiesSelected = $('#activity-choices').children('option:selected').text();
  const $activitiesIndex = $('#activity-choices').children('option:selected').index
  // find the index of the activities in activitiess array
  const index = activities.findIndex(function(activities){
    return activities.name ===  $activitiesSelected;
  });
  const marker = drawMarker('activity', activities[index].place.location);
  console.log(marker.position);
  // add activities to the itinerary list
  $('#activity-item').append('<span class="itinerary" id="' + $activitiesIndex + '">' + $activitiesSelected + ' ' + delButton + '</span>').data();

});

$('#itinerary').on('click', '.remove', function(){
    $(this).parent().remove();
});
