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
    if ($(this).hasClass('car-07')) {
      $('.car-v300D .modal .main-modal-img').remove()
      $('.car-v300D .modal .img-carousel.car-07').addClass('active')
      $('.car-v300D .modal-body').prepend(
        `
        <video class="main-modal-video" width="640" height="360" controls>
          <source src="./assets/img/cars/v300D/modal_cars07.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo.
        </video>  
        `
      )
      return
    }
    if ($(this).hasClass('car-01')) {
      newSrc = './assets/img/cars/v300D/modal_cars01.webp'
      $('.car-v300D .modal .img-carousel.car-01').addClass('active')
    } else if ($(this).hasClass('car-02')) {
      newSrc = './assets/img/cars/v300D/modal_cars02.webp'
      $('.car-v300D .modal .img-carousel.car-02').addClass('active')
    } else if ($(this).hasClass('car-03')) {
      newSrc = './assets/img/cars/v300D/modal_cars03.webp'
      $('.car-v300D .modal .img-carousel.car-03').addClass('active')
    } else if ($(this).hasClass('car-04')) {
      newSrc = './assets/img/cars/v300D/modal_cars04.webp'
      $('.car-v300D .modal .img-carousel.car-04').addClass('active')
    } else if ($(this).hasClass('car-05')) {
      newSrc = './assets/img/cars/v300D/modal_cars05.webp'
      $('.car-v300D .modal .img-carousel.car-05').addClass('active')
    } else if ($(this).hasClass('car-06')) {
      newSrc = './assets/img/cars/v300D/modal_cars06.webp'
      $('.car-v300D .modal .img-carousel.car-06').addClass('active')
    }
    if ($('.car-v300D .modal .main-modal-img').length === 0) {
      $('.car-v300D .modal .main-modal-video').remove()
      $('.car-v300D .modal-body').prepend(
        `<img src="${newSrc}" class="img-fluid main-modal-img" alt="" />`
      )
      return
    }
    $('.car-v300D .main-modal-img').attr('src', newSrc)
  })
  $('.car-cla200 .img-carousel').on('click', function () {
    let newSrc = ''
    $('.img-carousel').removeClass('active')
    if ($(this).hasClass('car-01')) {
      newSrc = './assets/img/cars/cla200/modal_cars01.webp'
      $('.car-cla200 .modal .img-carousel.car-01').addClass('active')
    } else if ($(this).hasClass('car-02')) {
      newSrc = './assets/img/cars/cla200/modal_cars02.webp'
      $('.car-cla200 .modal .img-carousel.car-02').addClass('active')
    } else if ($(this).hasClass('car-03')) {
      newSrc = './assets/img/cars/cla200/modal_cars03.webp'
      $('.car-cla200 .modal .img-carousel.car-03').addClass('active')
    } else {
      newSrc = './assets/img/cars/cla200/modal_cars04.webp'
      $('.car-cla200 .modal .img-carousel.car-04').addClass('active')
    }
    $('.car-cla200 .main-modal-img').attr('src', newSrc)
  })

  $('.car-v300D .nav-left').click(function () {
    document.querySelector(
      '.car-v300D .modal-body .custom-scroll'
    ).scrollLeft = 0
  })

  $('.car-v300D .nav-right').click(function () {
    let scrollableElement = $('.car-v300D .modal-body .custom-scroll > div')
    let scrollableContent = $('.car-v300D .modal-body .custom-scroll')
    let scrollAmount = scrollableElement.width() - scrollableContent.width()
    document.querySelector('.car-v300D .modal-body .custom-scroll').scrollLeft =
      scrollAmount
  })
})
