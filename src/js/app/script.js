// 剧本

define(['jquery', 'web', 'swiper'], function ($, web, swiper) {
    var self = {}

    self.open = function () {
        // 载入头尾和导航
        this.loadhtml();

        // 动作绑定
        this.bindAction();
        
    }

    self.bindAction = function(){

        // 回到顶部
        $('.backtop').on('click', function(){
            $('html,body').animate({ scrollTop: 0 }, 500);
        })

        // swiper
        var mySwiper = new swiper('.swiper-container', {
            loop: true,
            //autoplay: 4000,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            speed: 1500,
            //width: '100%',
            width: $('body').width() < 1440 ? 1440 : $('body').width(),

            // 如果需要分页器
            pagination: '.swiper-pagination',

            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',

            effect: 'fade'
        })

        // about list
        $('.about .list h3')
            .on('mouseenter', function(){
                $(this).addClass('active');
            })
            .on('mouseleave', function(){
                $(this).removeClass('active');
            });

        var arrayDetail = $('.about .list li>div');
        $('.about .list h3').each(function(index, item){
            $(item).on('click', function(){
                arrayDetail.eq(index).toggle();
            })
        })

        // clients
        $('.clients .category .item')
            .on('mouseenter', function(){
                $(this).addClass('hover');
            })
            .on('mouseleave', function(){
                $(this).removeClass('hover');
            });

        $('.clients .category .letter').on('click', function(){
            $('.clients .result-letter').show();
            $('.clients .result-other').hide();

            $('.clients .category .item').removeClass('active');
            $(this).addClass('active');
        })

        $('.clients .category .industry, .clients .category .service').on('click', function(){
            $('.clients .result-letter').hide();
            $('.clients .result-other').show();
            $('.clients .category .item').removeClass('active hover');
            $(this).addClass('active');
        })
    }

    self.loadhtml = function() {
        var page = $('body').attr('data-page');
        
            // 载入导航
            switch (page) {
                case 'index':
                    web.nav();                
                    break;
            
                default:                
                    web.header();
                    web.nav();
                    web.footer();
                    break;
            }
    }

    return self;
});

















