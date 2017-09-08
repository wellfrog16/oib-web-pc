// 框架

define([
        'jquery',
        'text!../template/nav.html!strip',
        'text!../template/header.html!strip',
        'text!../template/footer.html!strip',
        'i18n!./nls/message',
        'jquery.cookie'
    ],
    function (
        $,
        htmlnav,
        htmlheader,
        htmlfooter,
        i18n
    ) {

        var self = {}

        self.nav = function() {
            $('body').prepend(htmlnav);

            var a = $('.nav .link a'), i = 0;
            $.each(i18n.nav, function(index, item, ax){
                a.eq(i++).text(item.toUpperCase());
            })

            // 导航动画
            $('.nav-toggle').on('click', function(){
                $('.nav').animate({ 'right': '0' });
            })

            $('.nav .close').on('click', function(){
                $('.nav').animate({ 'right': '-250px' });
            })
        }

        self.header = function(){
            $('body').prepend(htmlheader);

            var page = $('body').attr('data-page');
            $('#page-name').text(i18n.nav[page].toUpperCase());

            // 设置语言
            $('#nav-toggle a').on('click', function(){
                var lang = $(this).attr('lang');
                $.cookie('lang', lang, { expires: 365 });
                //location.href = location.href;
                window.history.go(0);
            })

        }

        self.footer = function(){
            $('body').append(htmlfooter);
        }

        return self;
    
});
    