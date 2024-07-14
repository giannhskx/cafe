document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('aboutButton');
    const menuButton = document.getElementById('menuButton');
    const contactButton = document.getElementById('contactButton');
    
    aboutButton.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
    
    menuButton.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
    
    contactButton.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});
