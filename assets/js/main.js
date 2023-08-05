const url = new URL(window.location.href)
const message = url.searchParams.get('message')

if (message === 'success') {
  alert('Email enviado com sucesso! Em breve entraremos em contato!')
}

if (message === 'failed') {
  alert('Infelizmente houve um erro, tente novamente.')
}

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    document.getElementById('navigation').classList.add('scape')
  } else {
    document.getElementById('navigation').classList.remove('scape')
  }

  if (window.scrollY >= 200) {
    document.getElementById('navigation').classList.add('fixed')
  } else {
    document.getElementById('navigation').classList.remove('fixed')
  }
})

/* Mensagem previa no formulario de contanto no campo de mensagem */
var textarea = document.getElementById('contactMenssage')

textarea.addEventListener('focus', function () {
  if (textarea.value === 'Message') {
    textarea.value = ''
  }
})

textarea.addEventListener('blur', function () {
  if (textarea.value === '') {
    textarea.value = 'Message'
  }
})

$(document).ready(function () {
  // Quando o campo de entrada for clicado
  $('input[name="date"]').on('click', function () {
    document.getElementById('datepicker').showPicker()
  })
})
