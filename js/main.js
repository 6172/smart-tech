// 回到顶部
$(document).ready(function() {
    var topRocket = $('#top-rocket');
    var timeout;
    $(window).on('scroll', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if(document.body.scrollTop > 500) {
                topRocket.show();
            }else {
                topRocket.hide();
            }
        }, 300);
    });

    topRocket.on('click', function() {
        $(document.body).animate({
            scrollTop : 0
        }, 500);
    });
});

// 子菜单
$(document).ready(function() {
    var lastItem = null;
    $('.toggle-nav').on('click', '.toggle-trigger', function(e) {
        e.preventDefault();
        if(this === lastItem) {
            $(this)
                .toggleClass('opened')
                .next('.toggle-sub-nav')
                .slideToggle();
        }else {
            $(this)
                .addClass('opened')
                .next('.toggle-sub-nav')
                .slideDown()
                .end()
                .parent()
                .siblings()
                .find('.toggle-sub-nav')
                .slideUp();
            $(lastItem).removeClass('opened');
        }
        lastItem = this;
    });

    $('.toggle-nav').find('.on').parent().parent().prev().trigger('click');
});

$(document).ready(function() {});
$(document).ready(function() {});
$(document).ready(function() {});