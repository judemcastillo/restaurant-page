// This module creates the homepage for the restaurant website.
function createHomepage() {
    const content = document.getElementById('content');
    //hero section
    const hero = document.createElement('div');
    content.innerHTML = ""; // Clear the content
    hero.classList.add('hero');
    content.appendChild(hero);
    hero.innerHTML = `<div class="welcome-message"><h2>Welcome to </h2><span class="logo-text">\"The Restaurant\"</span></div>`;
    

    return
}
export { createHomepage };