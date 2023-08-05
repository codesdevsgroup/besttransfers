$(document).ready(function () {
  var images = [
    '../img/cars/cla200/modal_cars01.jpg',
    '../img/cars/cla200/modal_cars02.jpg',
    '../img/cars/cla200/modal_cars03.jpg',
    '../img/cars/cla200/modal_cars04.jpg',
    '../img/cars/v300D/modal_cars01.jpg',
    '../img/cars/v300D/modal_cars02.jpg',
    '../img/cars/v300D/modal_cars03.jpg',
    '../img/cars/v300D/modal_cars04.jpg',
    '../img/cars/v300D/modal_cars05.jpg',
    '../img/cars/v300D/modal_cars06.jpg'
  ]

  function preloadImages() {
    for (var i = 0; i < images.length; i++) {
      $('<img>').attr('src', images[i])
    }
  }

  preloadImages()
})
