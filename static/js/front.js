(() => {

    const body = document.querySelector('body');
    const openMenu = document.querySelector('.btn-menu');
    const closenMenu = document.querySelector('.btn-close-menu');
    const menuContainer = document.querySelector('.menu-container');
    const subHeader = document.querySelector('.subpage .main-header');
    // openMenu.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     menuContainer.style.display = "block";
    // })
    // closenMenu.addEventListener('click', function (e) {
    //     e.preventDefault();
    //     menuContainer.style.display = "none";
    // })

    let vh;
    window.addEventListener('load', () => {
        setViewHeight();
    });
    window.addEventListener('resize', () => {
        setViewHeight();
    });

    window.addEventListener('scroll', (e) => {
        ///console.log(pageYOffset);
        //if (pageYOffset > 0 && ((body.scrollHeight - window.innerHeight) > 200)) {
       
        // if (pageYOffset > 64) {
        //     subHeader.classList.add('fixed')
        // } else {
        //     subHeader.classList.remove('fixed')
        // }
    });

    

    jQuery.exists = function (selector) {
        return ($(selector).length > 0);
    }

})();


//common - set viewport height(100%)
function setViewHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}