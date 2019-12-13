(function() {
    // Shamil Alisultanov StartKit



    // slider1 ///////////////////////////////////////////////
    var slider1 = $('.manufacturers-slider').lightSlider({
        item       : 5,
        pager      : false,
        controls   : false,
        responsive : [
            {
                breakpoint:993,
                settings: {
                    item     : 3,
                    slideMove: 1
                }
            },
            {
                breakpoint:769,
                settings: {
                    item     : 2,
                    slideMove: 1
                }
            },
            {
                breakpoint:641,
                settings: {
                    item     : 1,
                    slideMove: 1
                }
            }
        ]
    });
    $('.manufacturers-slider-wr__prev').click(function(e){
        e.preventDefault();
        slider1.goToPrevSlide();
    });
    $('.manufacturers-slider-wr__next').click(function(e){
        e.preventDefault();
        slider1.goToNextSlide();
    });
    // slider1 end ///////////////////////////////////////////


    // my tabs
    $(".product-bottom-tabs .tab_item").not(":first").hide();
    $(".product-bottom-tabs .tab").click(function() {
        $(".product-bottom-tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".product-bottom-tabs .tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
    // my tabs end



    // masked phone //////////////////////////////////////////
    $('.myphone').mask("+7(999) 999-99-99");
    // masked phone ens //////////////////////////////////////////



    // fancybox  ///////////////////////////////////////////
    $('.fancybox').fancybox({
        helpers : {
            overlay : {
                locked: false
            }
        }
    });
    // fancybox end ///////////////////////////////////////////


    // filter slider ui
    //
    // filter slider ui end



    // sidebar accardeon ////////////////////////////////////////
    var accardeonItem = $('.product-filter__title');
    var accardeonCont = $('.product-filter-body');

    //accardeonCont.hide();

    accardeonItem.on('click', function(e){
        $(this).next( $('.product-filter-body')).stop().slideToggle();
    });

    // sidebar accardeon end ///////////////////////////////////



    // top-menu_xs
    $('.topmenu_xs').on('click', function(e){
        e.preventDefault();
        $(this).next('.topmenu').stop().slideToggle();
    });
    // top-menu_xs end



    // banner slider
    $('.banners-main-slider').lightSlider({
        item    : 1,
        pager   : true,
        controls: false
    });
    // banner slider end


    //
    var sortSpan = $('.catalog-right-sort__right span');
    sortSpan.on('click', function(e) {
        e.preventDefault();
        sortSpan.removeClass('active');
        $(this).addClass('active');
    });

    var productList = $('.catalog-right-list');
    $('.catalog-right-sort__list').on('click', function(e){
        e.preventDefault();
        productList.addClass('catalog-right-list_line');
    });
    $('.catalog-right-sort__box').on('click', function(e){
        e.preventDefault();
        productList.removeClass('catalog-right-list_line');
    });
    // end


})();