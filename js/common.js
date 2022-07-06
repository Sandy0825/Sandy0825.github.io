$(function(){
    response();
    //**메인 시작**
    //메인 타이틀효과
    $('.main_tit').addClass('active');
    //메인 버튼효과
    $('.btn_in').hover(function(){
        $(this).css('animation','none');
    },function(){
        $(this).css('animation','btnIn 1.2s linear infinite');
    });
    //클릭시 컨텐츠show
    $('.btn_in').on('click',function(){
        $('#wrapper').removeClass('black');
        setTimeout(function(){workSlide();},500);
        $('#content').addClass('on');
    });


    //클릭시 해당메뉴이동
    $('.gnb li a').on('click',function(){
        $('html, body').animate({scrollTop:$(this.hash).offset().top},600);
    });
});

window.onresize = function() {  
    response();
};

function response(){
    //pc만
     if ($(window).width() > 1024) {
        pcMenu();
    }else{
    //mobile만        
        mMenu(); 
        mHeight();
    }    
     
}


function pcMenu(){
    //gnb on/off
    $('.js-btn-gnb').on('click',function(e){
        $('#header').toggleClass('on');
        if($('#header').hasClass('on')){
            $(this).off('hover');
        }else{
            $(this).trigger('hover');
        }
    });
    //컨텐츠 클릭시 off처리
    $('#container').on('click',function(){
        if($('#header').hasClass('on')){
            $('#header').removeClass('on'); 
        }               
    });
}

function mMenu(){
    //gnb on/off
    $('.js-btn-gnb').on('click',function(){
        $('#header').toggleClass('on');
    });
    $('.gnb li a').on('click',function(){
        if($('#header').hasClass('on')){
            $('#header').removeClass('on');
        } 
    });

    

}
function mHeight(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    });
}

function workSlide(){
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
        "(min-width:1025px)":function(){
          let tl = gsap.timeline({
            scrollTrigger:{
              trigger:'#work',
              start:'top center',
              scrub:true,
              end:'+=300'
            }
          }),
          slide = [...document.querySelectorAll('.work_list > li')]
          tl.to(slide,{
            xPercent: -100 * (slide.length),
            scrollTrigger: {
                trigger: ".work_list",
                start: "center center",
                pin: true,
                scrub: 1,
                end: () => `+=11200`
            }
          });
        }
    });
   
}

//모바일작업물 팝업
function mobileView(href){
    let options = "toolbar=no,scrollbars=no,location=no,status=no,menubar=no,width=365, height=640"
    window.open(href,'_blank',options);
}

//popup
function view_show(num) {
  var left = (( $(window).width() - $("#display_view"+num).width()) / 2 );
  var top = (( $(window).height() - $("#display_view"+num).height()) / 2 );
  $("#display_view"+num).css({'position':'fixed','left':left,'top':top, display:'block'});
  return false;
}
function view_hide(num) {
  $("#display_view"+num).css({'display':'none'});
  return false;
}
