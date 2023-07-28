window.onload = translate

function executeTranslation(event) {
  const language = event.target.value
  localStorage.setItem('@besttransfer-1.0.0-language', language)
  location.reload()
}

function translate() {
  const language = localStorage.getItem('@besttransfer-1.0.0-language') ?? 'en'
  document.querySelector('#navigation .form-select').value = language
  switch (language) {
    case 'en':
      document.getElementById('en-flag').style = 'display: block !important'
      break
    case 'pt':
      document.getElementById('pt-flag').style = 'display: block !important'
      break
    case 'fr':
      document.getElementById('fr-flag').style = 'display: block !important'
      break
    default:
      document.getElementById('es-flag').style = 'display: block !important'
      break
  }
  translateNavigation(language)
  translateHome(language)
  translateExecutiveTransportation(language)
  translateGetCars(language)
  translateMultilingualDrivers(language)
  translateContact(language)
  translateFooter(language)
}

function translateNavigation(language) {
  if (language === 'en') {
    document.querySelector('#navigation .nav-list .home').innerText = 'Home'
    document.querySelector('#navigation .nav-list-mobile .home').innerText =
      'Home'
    document.querySelector('#navigation .nav-list .services').innerText =
      'Services'
    document.querySelector('#navigation .nav-list-mobile .services').innerText =
      'Services'
    document.querySelector('#navigation .nav-list .cars').innerText = 'Cars'
    document.querySelector('#navigation .nav-list-mobile .cars').innerText =
      'Cars'
    document.querySelector('#navigation .nav-list .contact').innerText =
      'Contact'
    document.querySelector('#navigation .nav-list-mobile .contact').innerText =
      'Contact'
    return
  }
  if (language === 'pt') {
    document.querySelector('#navigation .nav-list .home').innerText = 'Início'
    document.querySelector('#navigation .nav-list-mobile .home').innerText =
      'Início'
    document.querySelector('#navigation .nav-list .services').innerText =
      'Serviços'
    document.querySelector('#navigation .nav-list-mobile .services').innerText =
      'Serviços'
    document.querySelector('#navigation .nav-list .cars').innerText = 'Carros'
    document.querySelector('#navigation .nav-list-mobile .cars').innerText =
      'Carros'
    document.querySelector('#navigation .nav-list .contact').innerText =
      'Contacto'
    document.querySelector('#navigation .nav-list-mobile .contact').innerText =
      'Contacto'
    return
  }
  if (language === 'fr') {
    document.querySelector('#navigation .nav-list .home').innerText = 'Accueil'
    document.querySelector('#navigation .nav-list-mobile .home').innerText =
      'Accueil'
    document.querySelector('#navigation .nav-list .services').innerText =
      'Services'
    document.querySelector('#navigation .nav-list-mobile .services').innerText =
      'Services'
    document.querySelector('#navigation .nav-list .cars').innerText = 'Voitures'
    document.querySelector('#navigation .nav-list-mobile .cars').innerText =
      'Voitures'
    document.querySelector('#navigation .nav-list .contact').innerText =
      'Contact'
    document.querySelector('#navigation .nav-list-mobile .contact').innerText =
      'Contact'
    return
  }
  document.querySelector('#navigation .nav-list .home').innerText = 'Inicio'
  document.querySelector('#navigation .nav-list-mobile .home').innerText =
    'Inicio'
  document.querySelector('#navigation .nav-list .services').innerText =
    'Servicios'
  document.querySelector('#navigation .nav-list-mobile .services').innerText =
    'Servicios'
  document.querySelector('#navigation .nav-list .cars').innerText = 'Coches'
  document.querySelector('#navigation .nav-list-mobile .cars').innerText =
    'Coches'
  document.querySelector('#navigation .nav-list .contact').innerText =
    'Contacto'
  document.querySelector('#navigation .nav-list-mobile .contact').innerText =
    'Contacto'
}

function translateHome(language) {
  if (language === 'en') {
    document.querySelector('#home .home_text h1').innerHTML =
      'Travel in luxury <br /> and comfort'
    document.querySelector('#home .home_text p').innerHTML =
      'Enjoy an exceptional trip with your <br /> own private driver.'
    document.querySelector('#home .home_button button').innerText = 'Contact'
    return
  }
  if (language === 'pt') {
    document.querySelector('#home .home_text h1').innerHTML =
      'Viaje com luxo <br /> e conforto'
    document.querySelector('#home .home_text p').innerHTML =
      'Aproveite uma viagem excepcional com o <br /> seu próprio motorista privado.'
    document.querySelector('#home .home_button button').innerText = 'Contacto'
    return
  }
  if (language === 'fr') {
    document.querySelector('#home .home_text h1').innerHTML =
      'Voyagez dans le <br /> luxe et le confort'
    document.querySelector('#home .home_text p').innerHTML =
      "Profitez d'un voyage exceptionnel avec <br /> votre propre chauffeur privé."
    document.querySelector('#home .home_button button').innerText = 'Contact'
    return
  }
  document.querySelector('#home .home_text h1').innerHTML =
    'Viaje con lujo <br /> y comodidad'
  document.querySelector('#home .home_text p').innerHTML =
    'Disfrute de un viaje excepcional con su <br /> propio conductor privado.'
  document.querySelector('#home .home_button button').innerText = 'Contacto'
}

function translateExecutiveTransportation(language) {
  if (language === 'en') {
    document
      .querySelector('#executive_transportation')
      .classList.remove('france')
    document.querySelector('#executive_transportation h2').innerText =
      'Executive Transportation Services in Switzerland'
    document.querySelector('#executive_transportation .et_card01 p').innerText =
      'We have experience with complex schedules'
    document.querySelector('#executive_transportation .et_card02 p').innerText =
      'Executive Transportation and Events'
    document.querySelector('#executive_transportation .et_card03 p').innerText =
      'Transfers / Limousine Service'
    return
  }
  if (language === 'pt') {
    document
      .querySelector('#executive_transportation')
      .classList.remove('france')
    document.querySelector('#executive_transportation h2').innerText =
      'Serviços de Transporte Executivo na Suíça'
    document.querySelector('#executive_transportation .et_card01 p').innerText =
      'Temos experiência com horários complexos'
    document.querySelector('#executive_transportation .et_card02 p').innerText =
      'Transporte Executivo e Eventos'
    document.querySelector('#executive_transportation .et_card03 p').innerText =
      'Transfers / Serviço de Limusine'
    return
  }
  if (language === 'fr') {
    document.querySelector('#executive_transportation').classList.add('france')
    document.querySelector('#executive_transportation h2').innerText =
      'Services de Transport Exécutif en Suisse'
    document.querySelector('#executive_transportation .et_card01 p').innerText =
      "Nous avons de l'expérience avec des horaires complexes"
    document.querySelector('#executive_transportation .et_card02 p').innerText =
      'Transport Exécutif et Événements'
    document.querySelector('#executive_transportation .et_card03 p').innerText =
      'Transferts / Service de Limousine'
    return
  }
  document.querySelector('#executive_transportation').classList.remove('france')
  document.querySelector('#executive_transportation h2').innerText =
    'Servicios de Transporte Ejecutivo en Suiza'
  document.querySelector('#executive_transportation .et_card01 p').innerText =
    'Tenemos experiencia con horarios complejos'
  document.querySelector('#executive_transportation .et_card02 p').innerText =
    'Transporte Ejecutivo y Eventos'
  document.querySelector('#executive_transportation .et_card03 p').innerText =
    'Traslados / Servicio de Limusina'
}

function translateGetCars(language) {
  if (language === 'en') {
    document.querySelector('#get_cars h2').innerText = 'Get to know our cars'
    document.querySelector('#get_cars .car-v300D .gc_seat p').innerText =
      '7 leather seats'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(2) h5'
    ).innerHTML = 'You choose <br /> the song'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(3) h5'
    ).innerText = 'Customized minibar'
    document.querySelector('.car-v300D #gc_footer button').innerText = 'Contact'

    document.querySelector('#get_cars .car-cla200 .gc_seat p').innerText =
      '5 seats'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(2) h5'
    ).innerHTML = 'You choose <br /> the song'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(3) h5'
    ).innerText = 'Customized minibar'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(4) h5'
    ).innerText = 'Sunroof'
    document.querySelector('.car-cla200 #gc_footer button').innerText =
      'Contact'

    document.querySelector('#cars h2').innerText = 'See our cars fleet'
    return
  }
  if (language === 'pt') {
    document.querySelector('#get_cars h2').innerText =
      'Conheça os nossos carros'
    document.querySelector('#get_cars .car-v300D .gc_seat p').innerText =
      '7 lugares em pele'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(2) h5'
    ).innerHTML = 'Você escolhe <br /> a música'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(3) h5'
    ).innerText = 'Minibar personalizado'
    document.querySelector('.car-v300D #gc_footer button').innerText =
      'Contacto'

    document.querySelector('#get_cars .car-cla200 .gc_seat p').innerText =
      '5 lugares'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(2) h5'
    ).innerHTML = 'Você escolhe <br /> a música'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(3) h5'
    ).innerText = 'Minibar personalizado'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(4) h5'
    ).innerText = 'Teto solar'
    document.querySelector('.car-cla200 #gc_footer button').innerText =
      'Contacto'

    document.querySelector('#cars h2').innerText =
      'Veja a nossa frota de carros'
    return
  }
  if (language === 'fr') {
    document.querySelector('#get_cars h2').innerText = 'Découvrez nos voitures'
    document.querySelector('#get_cars .car-v300D .gc_seat p').innerText =
      '7 sièges en cuir'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(2) h5'
    ).innerHTML = 'Vous choisissez <br /> la chanson'
    document.querySelector(
      '#get_cars .car-v300D .card-footer:nth-child(3) h5'
    ).innerText = 'Minibar personnalisé'
    document.querySelector('.car-v300D #gc_footer button').innerText = 'Contact'

    document.querySelector('#get_cars .car-cla200 .gc_seat p').innerText =
      '5 siègess'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(2) h5'
    ).innerHTML = 'Vous choisissez <br /> la chanson'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(3) h5'
    ).innerText = 'Minibar personnalisé'
    document.querySelector(
      '#get_cars .car-cla200 .card-footer:nth-child(4) h5'
    ).innerText = 'Toit ouvrant'
    document.querySelector('.car-cla200 #gc_footer button').innerText =
      'Contact'

    document.querySelector('#cars h2').innerText =
      'Découvrez notre flotte de voitures'
    return
  }
  document.querySelector('#get_cars h2').innerText = 'Conozca nuestros coches'
  document.querySelector('#get_cars .car-v300D .gc_seat p').innerText =
    '7 sillas en piel'
  document.querySelector(
    '#get_cars .car-v300D .card-footer:nth-child(2) h5'
  ).innerHTML = 'Usted elige <br /> la canción'
  document.querySelector(
    '#get_cars .car-v300D .card-footer:nth-child(3) h5'
  ).innerText = 'Minibar personalizado'
  document.querySelector('.car-v300D #gc_footer button').innerText = 'Contacto'

  document.querySelector('#get_cars .car-cla200 .gc_seat p').innerText =
    '5 asientos'
  document.querySelector(
    '#get_cars .car-cla200 .card-footer:nth-child(2) h5'
  ).innerHTML = 'Usted elige <br /> la canción'
  document.querySelector(
    '#get_cars .car-cla200 .card-footer:nth-child(3) h5'
  ).innerText = 'Minibar personalizado'
  document.querySelector(
    '#get_cars .car-cla200 .card-footer:nth-child(4) h5'
  ).innerText = 'Techo corredizo'
  document.querySelector('.car-cla200 #gc_footer button').innerText = 'Contacto'

  document.querySelector('#cars h2').innerText =
    'Conozca nuestra flota de coches'
}

function translateMultilingualDrivers(language) {
  if (language === 'en') {
    document.querySelector('#multilingual_drivers h3').innerText =
      'Multilingual Drivers'
    document.querySelector('#multilingual_drivers p.text-sm-center').innerText =
      'Having a multilingual driver eliminates communication barriers.'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(1) p'
    ).innerText = 'English'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(2) p'
    ).innerText = 'Spanish'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(3) p'
    ).innerText = 'Portuguese'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(4) p'
    ).innerText = 'French'
    return
  }
  if (language === 'pt') {
    document.querySelector('#multilingual_drivers h3').innerText =
      'Motoristas Multilíngues'
    document.querySelector('#multilingual_drivers p.text-sm-center').innerText =
      'Ter um motorista multilíngue elimina barreiras de comunicação.'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(1) p'
    ).innerText = 'Inglês'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(2) p'
    ).innerText = 'Espanhol'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(3) p'
    ).innerText = 'Português'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(4) p'
    ).innerText = 'Francês'
    return
  }
  if (language === 'fr') {
    document.querySelector('#multilingual_drivers h3').innerText =
      'Chauffeurs Multilingues'
    document.querySelector('#multilingual_drivers p.text-sm-center').innerText =
      'Avoir un chauffeur multilingue élimine les barrières de communication.'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(1) p'
    ).innerText = 'Anglais'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(2) p'
    ).innerText = 'Espagnol'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(3) p'
    ).innerText = 'Portugais'
    document.querySelector(
      '#multilingual_drivers .md_card:nth-child(4) p'
    ).innerText = 'Français'
    return
  }
  document.querySelector('#multilingual_drivers h3').innerText =
    'Conductores Multilingües'
  document.querySelector('#multilingual_drivers p.text-sm-center').innerText =
    'Tener un conductor multilingüe elimina las barreras de comunicación.'
  document.querySelector(
    '#multilingual_drivers .md_card:nth-child(1) p'
  ).innerText = 'Inglés'
  document.querySelector(
    '#multilingual_drivers .md_card:nth-child(2) p'
  ).innerText = 'Castellano'
  document.querySelector(
    '#multilingual_drivers .md_card:nth-child(3) p'
  ).innerText = 'Portugués'
  document.querySelector(
    '#multilingual_drivers .md_card:nth-child(4) p'
  ).innerText = 'Francés'
}

function translateContact(language) {
  if (language === 'en') {
    document.querySelector('#contact h2').innerText = 'Get in touch'
    document.querySelector('#contact label[for="name"]').innerText = 'Name'
    document.querySelector('#contact label[for="start"]').innerText =
      'Pick up point'
    document.querySelector('#contact label[for="end"]').innerText =
      'Destination point'
    document.querySelector('#contact label[for="date"]').innerText =
      'Date and time at the pick up point'
    document.querySelector('#contact label[for="message"]').innerText =
      'Message'
    document.querySelector('#contact button.btn-white').innerText = 'Send'
    return
  }
  if (language === 'pt') {
    document.querySelector('#contact h2').innerText = 'Entre em contato'
    document.querySelector('#contact label[for="name"]').innerText = 'Nome'
    document.querySelector('#contact label[for="start"]').innerText =
      'Ponto de partida'
    document.querySelector('#contact label[for="end"]').innerText =
      'Ponto de destino'
    document.querySelector('#contact label[for="date"]').innerText =
      'Data e hora no ponto de partida'
    document.querySelector('#contact label[for="message"]').innerText =
      'Mensagem'
    document.querySelector('#contact button.btn-white').innerText = 'Enviar'
    return
  }
  if (language === 'fr') {
    document.querySelector('#contact h2').innerText = 'Contactez-nous'
    document.querySelector('#contact label[for="name"]').innerText = 'Nom'
    document.querySelector('#contact label[for="start"]').innerText =
      'Point de départ'
    document.querySelector('#contact label[for="end"]').innerText =
      'Point de destination'
    document.querySelector('#contact label[for="date"]').innerText =
      'Date et heure de prise en charge'
    document.querySelector('#contact label[for="message"]').innerText =
      'Message'
    document.querySelector('#contact button.btn-white').innerText = 'Envoyer'
    return
  }
  document.querySelector('#contact h2').innerText = 'Póngase en contacto'
  document.querySelector('#contact label[for="name"]').innerText = 'Nombre'
  document.querySelector('#contact label[for="start"]').innerText =
    'Punto de recogida'
  document.querySelector('#contact label[for="end"]').innerText =
    'Punto de destino'
  document.querySelector('#contact label[for="date"]').innerText =
    'Fecha y hora en el punto de recogida'
  document.querySelector('#contact label[for="message"]').innerText = 'Mensaje'
  document.querySelector('#contact button.btn-white').innerText = 'Enviar'
}

function translateFooter(language) {
  if (language === 'en') {
    document.querySelector('footer .navigation-bar h2').innerText =
      'Navigation Bar'
    document.querySelector('footer .navbar .home').innerText = 'Home'
    document.querySelector('footer .navbar .services').innerText = 'Services'
    document.querySelector('footer .navbar .cars').innerText = 'Cars'
    document.querySelector('footer .navbar .multilingual_drivers').innerText =
      'Multilingual Drivers'
    document.querySelector('footer .navbar .privacy').innerText =
      'Privacy Policy'
    document.querySelector('footer .footer_contact h2').innerText = 'Contact'
    document.querySelector('footer .footer_social h2').innerText =
      'Social network'
    return
  }
  if (language === 'pt') {
    document.querySelector('footer .navigation-bar h2').innerText =
      'Barra de Navegação'
    document.querySelector('footer .navbar .home').innerText = 'Início'
    document.querySelector('footer .navbar .services').innerText = 'Serviços'
    document.querySelector('footer .navbar .cars').innerText = 'Carros'
    document.querySelector('footer .navbar .multilingual_drivers').innerText =
      'Motoristas Multilíngues'
    document.querySelector('footer .navbar .privacy').innerText =
      'Política de Privacidade'
    document.querySelector('footer .footer_contact h2').innerText = 'Contacto'
    document.querySelector('footer .footer_social h2').innerText =
      'Redes Sociais'
    return
  }
  if (language === 'fr') {
    document.querySelector('footer .navigation-bar h2').innerText =
      'Barre de Navigation'
    document.querySelector('footer .navbar .home').innerText = 'Accueil'
    document.querySelector('footer .navbar .services').innerText = 'Services'
    document.querySelector('footer .navbar .cars').innerText = 'Voitures'
    document.querySelector('footer .navbar .multilingual_drivers').innerText =
      'Chauffeurs Multilingues'
    document.querySelector('footer .navbar .privacy').innerText =
      'Politique de Confidentialité'
    document.querySelector('footer .footer_contact h2').innerText = 'Contact'
    document.querySelector('footer .footer_social h2').innerText =
      'Réseaux Sociaux'
    return
  }
  document.querySelector('footer .navigation-bar h2').innerText =
    'Barra de Navegación'
  document.querySelector('footer .navbar .home').innerText = 'Inicio'
  document.querySelector('footer .navbar .services').innerText = 'Servicios'
  document.querySelector('footer .navbar .cars').innerText = 'Coches'
  document.querySelector('footer .navbar .multilingual_drivers').innerText =
    'Conductores Multilingües'
  document.querySelector('footer .navbar .privacy').innerText =
    'Política de Privacidad'
  document.querySelector('footer .footer_contact h2').innerText = 'Contacto'
  document.querySelector('footer .footer_social h2').innerText =
    'Redes Sociales'
}
