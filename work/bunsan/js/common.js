$(function(){
  gnbMenu();
  lnbMenu();
});

function gnbMenu(){
  $(".js-gnb").hover(function(){
        if($(".js-menuWrap").is(":hidden")){
            $(".js-menuWrap").slideDown();
            $(".js-gnb-bg").slideDown();
        }else{
            $(".js-menuWrap").show();
            $(".js-gnb-bg").show();
        }
        $(".js-gnb > li").on("mouseenter focusin",function(){
            $(".js-gnb > li > a").removeClass("on");
            $(this).children().addClass("on");
        });
    });
    $(".js-gnb").on("mouseenter focusin",function(){
        if($(".js-menuWrap").is(":hidden")){
            $(".js-menuWrap").slideDown();
            $(".js-gnb-bg").slideDown();
        }else{
            $(".js-menuWrap").show();
            $(".js-gnb-bg").show();
        }
        $(".js-gnb > li").on("mouseenter focusin",function(){
            $(".js-gnb > li > a").removeClass("on");
            $(this).children().addClass("on");
        });
    });
    $(".js-gnb").on("mouseleave blur",function(){
        $(".js-menuWrap").slideUp();
        $(".js-gnb-bg").slideUp();
    });
    $(".js-gnb > li").on("mouseleave blur",function(){
        $(this).children().removeClass("on");
    });
    $('*:not(".js-gnb *")').focus(function(){
        $(".js-menuWrap").slideUp();
        $(".js-gnb > li > a").removeClass("on");
        $(".js-gnb-bg").slideUp();
    });
}

function lnbMenu(){
  $(".js-lnb li.active").addClass("open").children("ul").show();
        $(".js-lnb li.has_sub> a").on("click", function(){
            $(this).removeAttr("href");
            var element = $(this).parent("li");
            if (element.hasClass("open")) {
                element.removeClass("open");
                element.find("li").removeClass("open");
                element.find("ul").slideUp(200);
            }
            else {
                element.addClass("open").addClass('active');
                element.children("ul").slideDown(200);
                element.siblings("li").children("ul").slideUp(200);
                element.siblings("li").removeClass("open").removeClass('active');
                element.siblings("li").find("li").removeClass("open").removeClass('active');
                element.siblings("li").find("ul").slideUp(200);
            }
        });
}

function mainTab(){
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $(".js-tab a").click(function(event) {
        event.preventDefault(); //주소에 #숨김
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab_content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
}

//DMS기능구현 슬라이드
function process(){
    var item_length = $('.process_list > li').length - 1;
    var slider = $('.process_list').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows:true,
        infinite: false,
        speed: 0,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
    });

    // autoplay시 한번만 시행하고 정지
    /*slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
      if( item_length === slider.slick('slickCurrentSlide') ){
        slider.slickSetOption("autoplay",false,false)
      };
    });*/
}