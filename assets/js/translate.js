window.onload = translate

function executeTranslation(event) {
    const language = event.target.value
    localStorage.setItem('@besttransfer-1.0.0-language', language)
    location.reload()
}

function translate() {
    const language =
        localStorage.getItem('@besttransfer-1.0.0-language') ?? 'en'
    document.querySelector('#navigation .form-select').value = language
    switch (language) {
        case 'en':
            document.getElementById('en-flag').style =
                'display: block !important'
            break
        case 'pt':
            document.getElementById('pt-flag').style =
                'display: block !important'
            break
        case 'fr':
            document.getElementById('fr-flag').style =
                'display: block !important'
            break
        case 'es':
            document.getElementById('es-flag').style =
                'display: block !important'
            break
        default:
            break
    }
    translateNavigation(language)
    if (document.querySelector('#home') !== null) {
        translateIndex(language)
    }

    function translateIndex(language) {
        if (language === 'en') {
            return
        }
    }
}
