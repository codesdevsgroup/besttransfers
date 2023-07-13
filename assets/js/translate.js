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
    if (language === 'en') {
        document.getElementById('en-flag').style = 'display: block !important'
    } else {
        document.getElementById('pt-flag').style = 'display: block !important'
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
