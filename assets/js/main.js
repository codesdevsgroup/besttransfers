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
