// 框架

define([
        'jquery',
        'text!../template/nav.html!strip',
        'text!../template/header.html!strip',
        'text!../template/footer.html!strip'
    ],
    function (
        $,
        htmlnav,
        htmlheader,
        htmlfooter
    ) {

        var self = {}

        self.nav = function() {
            $('body').prepend(htmlnav);

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

            var page = $('body').attr('data-page').toUpperCase();
            $('#page-name').text(page);

        }

        self.footer = function(){
            $('body').append(htmlfooter);
        }

        return self;
    
});
    