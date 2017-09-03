// 剧本

define(['jquery', 'web'], function ($, web) {
    var self = {}

    self.open = function () {
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

















