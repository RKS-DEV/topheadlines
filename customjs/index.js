function a() {
    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.move').fadeIn();
        } else {
            $('.move').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.move').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    var w= $(window).width();
    if (w < 1200) {
        document.getElementById('foot').style.borderRight = '0px';
        //document.getElementById('body').style.backgroundColor = 'rgb(234, 234, 234)';
    }
}