const menuIcon = document.querySelector('#menu-icon')
const navMenuIcon = document.querySelector('#nav-menu-icon')


const toggle = () => {
    navMenuIcon.classList.toggle('hidden')
}

menuIcon.addEventListener('click', toggle)