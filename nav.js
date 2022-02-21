const navToggleButton = document.querySelector('#nav-toggle')
const navOpenIcon = document.querySelector('#nav-open-icon')
const navCloseIcon = document.querySelector('#nav-close-icon')
const navMenu = document.querySelector('#nav-mini')
const body = document.querySelector('body')

navToggleButton.addEventListener('click', toggleNav)

// use transitionend listener instead of timeouts 
// so that transition timing can be controlled solely by css
navOpenIcon.addEventListener('transitionend', reenableControl)
navMenu.addEventListener('transitionend', hideInvisibleMenu)

let navControlsActive = true

function toggleNav () {
  if (navControlsActive) {
    // toggle nav control button state
    navControlsActive = false
    navCloseIcon.classList.toggle('invisible')
    navOpenIcon.classList.toggle('invisible')
    body.classList.toggle('no-overflow')
    // toggle menu
    if (!navMenu.classList.contains('hidden')) {
      navMenu.classList.toggle('invisible')
    }
    else {
      navMenu.classList.toggle('hidden')
      // workaround no transitions for display:none elements
      setTimeout(() => navMenu.classList.toggle('invisible'), 10)
    }
  }
}

function reenableControl () {
  navControlsActive = true
}

function hideInvisibleMenu (event) {
  if (event.target.classList.contains('invisible')) {
    navMenu.classList.toggle('hidden')
  }
}