(() => {

    const body = document.querySelector('body');

    const chat_mutes = document.querySelectorAll('.btn-mute-alert');
    const btn_chat_open = document.querySelector('.js-open-chat');
    const chat = document.querySelector('.chat');
    const chat_body = document.querySelector('.chat__body');
    const btn_chat_opt = document.querySelector('.js-chat-opt');
    const chat_optlist = document.querySelector('.chat__opt');
    const btn_chat_close = document.querySelector('.js-chat-close');

    //ALERT BOX
    const btn_alert_notify = document.querySelector('.js-alert-notify');
    const btn_alert_block = document.querySelector('.js-alert-block');
    const btn_alert_report = document.querySelector('.js-alert-report');
    const btn_alert_exit = document.querySelector('.js-alert-exit');
    const alert_notifybox = document.querySelector('.chat-alert--notify');
    const alert_reportbox = document.querySelector('.chat-alert--report');
    const alert_exitbox = document.querySelector('.chat-alert--exit');
    const alert_blockbox = document.querySelector('.chat-alert--block');

    const btn_mobile_menu = document.querySelector(".header__btn-menu");
    const menu_mobile = document.querySelector('.mobile-menu');
    const chat_textarea = document.querySelector('.js-auto-textarea');

    const gnb_quick = document.querySelector('.js-open-quick');
    const gnb_quick_cont = document.querySelector('.js-quick-container');


    window.addEventListener('click', (e) => {
        let tg = e.target;

        // if (e.target !== e.currentTarget) {
        //     let clickedItem = e.target.id;
        //     //alert("Hello " + clickedItem);
        // }
        // e.stopPropagation();
        if (tg === btn_mobile_menu) {
            console.log('block');
            menu_mobile.style.display = "block";
        }
        if (tg === menu_mobile) {
            console.log('none');
            menu_mobile.style.display = "none";
        }

        if (tg === gnb_quick) {
            console.log('a');
            gnb_quick_cont.classList.toggle('js-open');
        }
        //CHAT OPEN / CLOSE
        if (tg === btn_chat_open) {
            chat.style.display === 'block' ?
                chat.style.display = 'none' :
                chat.style.display = 'block';
        } else if (tg === btn_chat_close) {
            chat.style.display = 'none'
        }


        //CHAT OPTION LIST OPEN / CLOSE
        if (tg === btn_chat_opt) {
            if (chat_optlist.style.display === 'block') {
                chat_optlist.style.display = 'none'
                chat.classList.remove('disabled');
            } else {
                chat_optlist.style.display = 'block';
                chat.classList.add('disabled');
            }
        }

        //CHAT TEXTAREA HEIGHT SET
        if (chat_body) {
            if (chat_body.scrollHeight > 640) {
                console.log(chat_body.scrollHeight);
                chat_body.style.padding = "116px 0 30px 0"
            }
        }

        //CHAT OPTION LIST
        if (chat_optlist) {
            if (tg === btn_alert_notify) {
                alert_notifybox.style.display = 'block'
            } else if (tg === btn_alert_block) {
                alert_blockbox.style.display = 'block'
            } else if (tg === btn_alert_report) {
                alert_reportbox.style.display = 'block'
            } else if (tg === btn_alert_exit) {
                alert_exitbox.style.display = 'block'
            }
        }

        $('.js-close-alert').click((e) => {
            e.preventDefault();
            $('.chat-alert').hide()
        })

    })


    //CHAT MUTE
    chat_mutes.forEach(e => {
        e.addEventListener('click', (event) => {
            if (e.classList.contains('is-mute')) {
                e.classList.remove('is-mute')
            } else {
                e.classList.add('is-mute')
            }
        });
    })

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

    var main_product = new Swiper(".core-product", {
        navigation: {
            nextEl: ".core-product-next",
            prevEl: ".core-product-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
    });

    //REVIEW
    var main_review = new Swiper(".review-slide", {
        slidesPerView: 3,
        spaceBetween: 7,
        //slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,

        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
        }
    });



    //SNS
    var main_snslist_opt = {
        slidesPerView: 7,
        spaceBetween: 2,
        //slidesPerGroup: 3,
        //loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            1880: {
                slidesPerView: 6.2,

            },
            1700: {
                slidesPerView: 5.5
            },
            1024: {
                slidesPerView: 4.5
            },
            768: {
                slidesPerView: 3.5
            },
            640: {
                slidesPerView: 2.5
            },
            480: {
                slidesPerView: 1.8
            },
        }
    }


    var main_snslist = new Swiper(".sns-list", main_snslist_opt);

    snsButtons = $('.js-sns-tab');
    snsWrapper = $('.sns-list .swiper-wrapper');
    snsItem = $('.sns-item')

    snsButtons.on('click', function (e) {
        e.preventDefault();
        snsButtons.removeClass('active')
        $(this).addClass('active');

        main_snslist.destroy();


        var $this = $(this),
            datasns = $this.attr('data-sns');


        snsItem.remove();
        snsWrapper.append(snsItem.filter(`[data-sns="${datasns}"]`));
        main_snslist = new Swiper(".sns-list", main_snslist_opt);
    });


})();


//common - set viewport height(100%)
function setViewHeight() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function resize(chat_textarea) {
    if ((chat_textarea.scrollHeight + 7) <= 80) {
        chat_textarea.style.height = "1px";
        chat_textarea.style.height = (7 + chat_textarea.scrollHeight) + "px";
    }
}