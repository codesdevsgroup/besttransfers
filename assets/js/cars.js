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
    $('.img-carousel').removeClass('active')
    if ($(this).hasClass('cars01')) {
      changeSrc('cars01', 'v300D')
    } else if ($(this).hasClass('cars02')) {
      changeSrc('cars02', 'v300D')
    } else if ($(this).hasClass('cars03')) {
      changeSrc('cars03', 'v300D')
    } else if ($(this).hasClass('cars04')) {
      changeSrc('cars04', 'v300D')
    } else if ($(this).hasClass('cars05')) {
      changeSrc('cars05', 'v300D')
    } else if ($(this).hasClass('cars06')) {
      changeSrc('cars06', 'v300D')
    } else if ($(this).hasClass('cars07')) {
      changeSrc('cars07', 'v300D')
    }
  })

  $('.car-cla200 .img-carousel').on('click', function () {
    $('.img-carousel').removeClass('active')
    if ($(this).hasClass('cars01')) {
      changeSrc('cars01', 'cla200')
    } else if ($(this).hasClass('cars02')) {
      changeSrc('cars02', 'cla200')
    } else if ($(this).hasClass('cars03')) {
      changeSrc('cars03', 'cla200')
    } else {
      changeSrc('cars04', 'cla200')
    }
  })

  $('.nav-left').click(function () {
    if ($('#get_cars .car-v300D').hasClass('d-none')) {
      navigateCarousel(-1, 3)
      return
    }
    navigateCarousel(-1, 6)
  })

  $('.nav-right').click(function () {
    if ($('#get_cars .car-v300D').hasClass('d-none')) {
      navigateCarousel(1, 3)
      return
    }
    navigateCarousel(1, 6)
  })

  function navigateCarousel(offset, max) {
    const carType = $('#get_cars .car-v300D').hasClass('d-none')
      ? 'cla200'
      : 'v300D'
    const activeImage = $(`.car-${carType} .img-carousel-modal.active`)
    if (activeImage.length) {
      const allImages = $(`.car-${carType} .img-carousel-modal`)
      const currentIndex = allImages.index(activeImage)
      let newIndex = 0
      if (currentIndex === 0 && offset === -1) {
        newIndex = max
      } else if (currentIndex === max && offset === 1) {
        newIndex = 0
      } else {
        newIndex = currentIndex + offset
      }

      activeImage.removeClass('active')
      allImages.eq(newIndex).addClass('active')
      const imgActiveSrc = `.car-${carType} .img-carousel-modal.active`
      if ($(imgActiveSrc).hasClass('cars01')) {
        changeSrc('cars01', carType)
      } else if ($(imgActiveSrc).hasClass('cars02')) {
        changeSrc('cars02', carType)
      } else if ($(imgActiveSrc).hasClass('cars03')) {
        changeSrc('cars03', carType)
      } else if ($(imgActiveSrc).hasClass('cars04')) {
        changeSrc('cars04', carType)
      } else if ($(imgActiveSrc).hasClass('cars05')) {
        changeSrc('cars05', carType)
      } else if ($(imgActiveSrc).hasClass('cars06')) {
        changeSrc('cars06', carType)
      } else if ($(imgActiveSrc).hasClass('cars07')) {
        changeSrc('cars07', carType)
      }
    }
  }

  function changeSrc(className, car) {
    if (className === 'cars07') {
      $('.car-v300D .modal .main-modal-img').remove()
      $('.car-v300D .modal .img-carousel.cars07').addClass('active')
      $('.car-v300D .img-wrapper').prepend(
        `
        <video class="main-modal-video" width="640" height="360" controls>
          <source src="./assets/img/cars/v300D/modal_cars07.mp4" type="video/mp4">
          Seu navegador não suporta o elemento de vídeo.
        </video>  
        `
      )
      scrollRight()
      return
    }
    let newSrc = `./assets/img/cars/${car}/modal_${className}.jpg`
    $(`.car-${car} .modal .img-carousel.${className}`).addClass('active')
    $(`.car-${car} .main-modal-img`).attr('src', newSrc)
    if (className === 'cars05' || className === 'cars06') {
      scrollRight()
    } else {
      scrollLeft()
    }
    if (
      car === 'v300D' &&
      $('.car-v300D .modal .main-modal-img').length === 0
    ) {
      $('.car-v300D .modal .main-modal-video').remove()
      $('.car-v300D .img-wrapper').prepend(
        `<img src="${newSrc}" class="img-fluid main-modal-img" alt="" />`
      )
    }
  }
  function scrollLeft() {
    document.querySelector(
      '.car-v300D .modal-body .custom-scroll'
    ).scrollLeft = 0
  }
  function scrollRight() {
    let scrollableElement = $('.car-v300D .modal-body .custom-scroll > div')
    let scrollableContent = $('.car-v300D .modal-body .custom-scroll')
    let scrollAmount = scrollableElement.width() - scrollableContent.width()
    document.querySelector('.car-v300D .modal-body .custom-scroll').scrollLeft =
      scrollAmount
  }
})

$(document).ready(function () {
  $('#whatsapp').on('input', function () {
    if ($(this).val().trim() !== '') {
      $('#email').prop('required', false)
    } else {
      $('#email').prop('required', true)
    }
  })
})
