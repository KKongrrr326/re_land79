
/* main.js */


var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;


// pc & moblie 공통 
jQuery(document).ready(function ($) {

    /* a 태그 경로 제거 */
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })


});

jQuery(document).ready(function ($) {
    // pc 감지
    if (!isMobile) {


    }
});

// moblie 감지
jQuery(document).ready(function ($) {
    if (isMobile) {
        $(function(){
            $("nav li").click(function(){

                $("nav li").removeClass("on")
                navi_menu_sel = $(this).index();
                $("nav li:eq(" + navi_menu_sel + ")").addClass("on")
            });
        });

    }
});