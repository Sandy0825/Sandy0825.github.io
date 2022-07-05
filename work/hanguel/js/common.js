$(function(){
  gnbMenu();
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
