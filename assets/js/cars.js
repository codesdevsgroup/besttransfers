$(document).ready(function () {
  $('.img-car-v300D').on('click', function () {
    $('.car-cla200').addClass('d-none')
    $('.car-v300D').removeClass('d-none')
    document.getElementById('get_cars').scrollIntoView()
    $('html, body').scrollTop($('#get_cars').offset().top)
  })
  $('.img-car-cla200').on('click', function () {
    $('.car-v300D').addClass('d-none')
    $('.car-cla200').removeClass('d-none')
    $('html, body').scrollTop($('#get_cars').offset().top)
  })
  $('.car-v300D .img-carousel').on('click', function () {
    let newSrc = ''
    $('.img-carousel').removeClass('active')
    if ($(this).hasClass('car-01')) {
      newSrc = './assets/img/cars/v300D/modal_cars01.png'
      $('.car-v300D .modal .img-carousel.car-01').addClass('active')
    } else if ($(this).hasClass('car-02')) {
      newSrc = './assets/img/cars/v300D/modal_cars02.png'
      $('.car-v300D .modal .img-carousel.car-02').addClass('active')
    } else if ($(this).hasClass('car-03')) {
      newSrc = './assets/img/cars/v300D/modal_cars03.png'
      $('.car-v300D .modal .img-carousel.car-03').addClass('active')
    } else {
      newSrc = './assets/img/cars/v300D/modal_cars04.png'
      $('.car-v300D .modal .img-carousel.car-04').addClass('active')
    }
    $('.car-v300D .main-modal-img').attr('src', newSrc)
  })
  $('.car-cla200 .img-carousel').on('click', function () {
    let newSrc = ''
    $('.img-carousel').removeClass('active')
    if ($(this).hasClass('car-01')) {
      newSrc = './assets/img/cars/cla200/modal_cars01.png'
      $('.car-cla200 .modal .img-carousel.car-01').addClass('active')
    } else if ($(this).hasClass('car-02')) {
      newSrc = './assets/img/cars/cla200/modal_cars02.png'
      $('.car-cla200 .modal .img-carousel.car-02').addClass('active')
    } else if ($(this).hasClass('car-03')) {
      newSrc = './assets/img/cars/cla200/modal_cars03.png'
      $('.car-cla200 .modal .img-carousel.car-03').addClass('active')
    } else {
      newSrc = './assets/img/cars/cla200/modal_cars04.png'
      $('.car-cla200 .modal .img-carousel.car-04').addClass('active')
    }
    $('.car-cla200 .main-modal-img').attr('src', newSrc)
  })
})
