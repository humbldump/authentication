let buttons = document.querySelectorAll('[data-toggle-auth]')

/**
 * @param {Event} e
 * @type {Element} button
 */
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let auth = document.querySelector('.test-group')

        auth.classList.toggle('login', e.target.dataset.toggleAuth === 'login')
        auth.classList.toggle('register', e.target.dataset.toggleAuth === 'register')
    })
})