// 特性检测
$(document).ready(function() {
    if( document.body.style.animation !== undefined ||
        document.body.style.WebkitAnimation !== undefined ||
        document.body.style.MozAnimation !== undefined ||
        document.body.style.msAnimation !== undefined ) {
        $(document.body).addClass('animation');
    }else {
        $(document.body).addClass('noAnimation');
    }
});

// 回到顶部
$(document).ready(function() {
    var topRocket = $('#top-rocket');
    var timeout;
    $(window).on('scroll', function(e) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            if(document.body.scrollTop > 300) {
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

// 加载下一页
$(document).ready(function() {
    var loader = $('#page-loader');
    var list  = $('.page-list');
    var page = {
        curr : 1,
        size : 6,
        total: 0
    };
    var timer;
    var url = loader.data('url');
    var isLoading = false;

    function createHTML(data) {
        return '<li class="st-solution-list-item">'+
                    '<div class="st-article-pubtime">'+
                        '<time class="month">'+ data.x +'</time>'+
                        '<time class="day">'+ data.x +'</time>'+
                    '</div>'+
                    '<header class="st-solution-list-header">'+
                        '<h2><a href="'+ data.x +'">'+ data.x +'</a></h2>'+
                        '<p>发布者：'+ data.x +'</p>'+
                    '</header>'+
                    '<p class="st-solution-list-abstract">'+ data.x +'</p>'+
                '</li>';
    }

    loader.on('click', '.trigger', function() {
        if(!isLoading) {
            isLoading = true;
            loader.addClass('loading');
            $.ajax({
                data : {
                    page : page.curr,
                    pageSize : page.size
                },
                method : 'GET',
                timeout : 7000,
                url : url
            }).done(function(result) {
                var html = '';
                for(var i = 0, len = result.length; i < len; i++) {
                    html += createHTML(result[i]);
                }
                list.append(html);
                page.curr += 1;
            }).fail(function() {
                alert('加载失败，再次点击试试~');
            }).always(function() {
                timer = setTimeout(function() {
                    loader.removeClass('loading');
                    isLoading = false;
                }, 1500);
            });
        }
    });
});

$(document).ready(function() {});
$(document).ready(function() {});