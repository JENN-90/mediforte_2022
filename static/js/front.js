(() => {

    const body = document.querySelector('body');
    const chat_mute = document.querySelectorAll('.btn-mute-alert'); 
    
    chat_mute.forEach(e => { 
        e.addEventListener('click' , (event) => {
           if(e.classList.contains('is-mute')) {
                e.classList.remove('is-mute')
           }else{
            e.classList.add('is-mute')
           }
        });
    })
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
        //if (pageYOffset > 0 && ((body.scrollHeight - window.innerHeight) > 200))
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