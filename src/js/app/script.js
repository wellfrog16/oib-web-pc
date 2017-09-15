// 剧本

define(['jquery', 'web', 'swiper', 'bootstrap', 'i18n!./nls/message'], function ($, web, swiper, bootstrap, i18n) {
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

        // index
        $('video').on('click', function(){
            $(this).hide();
        })

        // swiper
        var mySwiper = new swiper('.swiper-container', {
            loop: true,
            autoplay: 4000,
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

        // service
        $('.service .category .item')
            .on('mouseenter', function(){
                $(this).addClass('hover');
            })
            .on('mouseleave', function(){
                $(this).removeClass('hover');
            });

        $('.service .category .letter').on('click', function(){
            $('.service .result-letter').show();
            $('.service .result-other').hide();

            $('.service .category .item').removeClass('active');
            $(this).addClass('active');
        })

        $('.service .category .industry, .service .category .project').on('click', function(){
            $('.service .result-letter').hide();
            $('.service .result-other').show();
            $('.service .category .item').removeClass('active hover');
            $(this).addClass('active');
        })

        // contact
        if ($('.map').length > 0)
        {
            var level = 15;
            
            var map1 = new BMap.Map("map-shanghai");    // 创建Map实例
            map1.centerAndZoom(new BMap.Point(121.502788, 31.207219), level);  // 初始化地图,设置中心点坐标和地图级别
            map1.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map1.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
            var myGeo1 = new BMap.Geocoder();
            myGeo1.getPoint("上海半淞园路388号B4-3D栋", function(point){
                if (point) {
                    map1.centerAndZoom(point, 16);
                    map1.addOverlay(new BMap.Marker(point));
                }else{
                    alert("您选择地址没有解析到结果!");
                }
            }, "上海市");

            var map2 = new BMap.Map("map-guangzhou");    // 创建Map实例
            map2.centerAndZoom(new BMap.Point(113.333566,23.127401), level);  // 初始化地图,设置中心点坐标和地图级别
            map2.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map2.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
            var myGeo2 = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo2.getPoint("广州市天河区珠江新城洗村路11号保利威座2005-2006", function(point){
                if (point) {
                    map2.centerAndZoom(point, 16);
                    map2.addOverlay(new BMap.Marker(point));
                }else{
                    alert("您选择地址没有解析到结果!");
                }
            }, "广州市");
        }
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

















