const menuIcon = document.querySelector('#menu-icon')
const navMenuIcon = document.querySelector('#nav-menu-icon')


const toggle = () => {
    navMenuIcon.classList.toggle('hidden')
    console.log('touch')
}

menuIcon.addEventListener('click', toggle)