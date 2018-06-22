document.addEventListener('DOMContentLoaded', function () {

    // page 4
    var selector1 = document.querySelectorAll('.js-selector')[0];
    var selector2 = document.querySelectorAll('.js-selector')[1];
    var selector3 = document.querySelectorAll('.js-selector')[2];
    var selector4 = document.querySelectorAll('.js-selector')[3];

    var hide1 = document.getElementById("first-website--fourth-page");
    var hide2 = document.getElementById("second-website--fourth-page");
    var hide3 = document.getElementById("mobile-website--fourth-page");
    var hide4 = document.getElementById("this-website--fourth-page");

    var video1 = document.getElementById("first-video");
    var video2 = document.getElementById("second-video");
    var video3 = document.getElementById("third-video");
    var video4 = document.getElementById("fourth-video");


    selector1.addEventListener("click", function () {
        hide1.classList.remove("hide");
        hide2.classList.add("hide");
        hide3.classList.add("hide");
        hide4.classList.add("hide");
        video1.classList.remove("display-none");
        video2.classList.add("display-none");
        video3.classList.add("display-none");
        video4.classList.add("display-none");
    });

    selector2.addEventListener("click", function () {
        hide1.classList.add("hide");
        hide2.classList.remove("hide");
        hide3.classList.add("hide");
        hide4.classList.add("hide");
        video1.classList.add("display-none");
        video2.classList.remove("display-none");
        video3.classList.add("display-none");
        video4.classList.add("display-none");
    });

    selector3.addEventListener("click", function () {
        hide1.classList.add("hide");
        hide2.classList.add("hide");
        hide3.classList.remove("hide");
        hide4.classList.add("hide");
        video1.classList.add("display-none");
        video2.classList.add("display-none");
        video3.classList.remove("display-none");
        video4.classList.add("display-none");
    });

    selector4.addEventListener("click", function () {
        hide1.classList.add("hide");
        hide2.classList.add("hide");
        hide3.classList.add("hide");
        hide4.classList.remove("hide");
        video1.classList.add("display-none");
        video2.classList.add("display-none");
        video3.classList.add("display-none");
        video4.classList.remove("display-none");
    });

    // navbar menu
    var menu1 = document.getElementById("menu-button1");
    var menu2 = document.getElementById("menu-button2");
    var closeMenu = document.getElementById("back-button");
    var menuAppear = document.querySelectorAll('.navmenu')[0];

    menu1.addEventListener("click", function () {
        menuAppear.classList.remove("appear");
    });
    menu2.addEventListener("click", function () {
        menuAppear.classList.remove("appear");
    });
    closeMenu.addEventListener("click", function () {
        menuAppear.classList.add("appear");
    });


    var scroll = new SmoothScroll('.anchor-toggle', {
        header: 'nav',
        easing: 'easeInOutCubic',
        after: function (anchor, toggle) {;
            menuAppear.classList.add("appear");
        } // Callback to run
    });

    var scroll2 = new SmoothScroll('#highlight-toggle', {

        header: 'nav',

        // Speed & Easing
        speed: 500,
        offset: 200,
        easing: 'easeInQuint',

        // Callback API
        before: function (anchor, toggle) {
            document.getElementById("highlight-contacts").classList.add("highlight")
        },
        after: function (anchor, toggle) {;
            setTimeout(function () {
                document.getElementById("highlight-contacts").classList.remove("highlight")
            }, 2000);
        }

    });


});
