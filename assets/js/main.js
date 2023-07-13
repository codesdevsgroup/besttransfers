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
