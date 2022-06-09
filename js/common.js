$(function(){
  gnbMenu();

  //let slideWidth = document.querySelector('.work_list > li').offsetWidth;
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:'#work',
      start:'top center',
      scrub:true,
      end:'+=300'
    }
  }),
  slide = [...document.querySelectorAll('.work_list > li')]
  // tl.to('#work .cont_tit',{
  //   scale:0.8,
  //   duration:1,
  //   ease:'slow'
  // })
  tl.to(slide,{
    xPercent: -95 * (slide.length - 1),
    scrollTrigger: {
        trigger: ".work_list",
        start: "center center",
        pin: true,
        // horizontal: true,
        // pinSpacing:false,
        markers: true,
        scrub: 1,
        //snap: 1 / (slide.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: () => `+=${smallFactsContainer.offsetWidth}`
        //end: () => `+=11200`
    }
  });
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
