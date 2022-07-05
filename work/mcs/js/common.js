$(function(){  
    response();
	mMenu();	
	sele();
	$('#js-popup-bg').click(function(){
		$("body").removeClass("ofHidden");
		$('.js-popup').css("display","none");
		$(this).css("display","none");
	});			
});

window.onresize = function() {	
    response();
	mMenu();	
};

function response(){
	 if ($( window ).width() > 1199) {
        pcMenu();       
        familySite();
		$('#menu .depth1 > a').off('click');
		$('#menu .depth2').off();
		$('#menu .depth2').show();
		$('.list_group li').off();
		$('.list_group li').removeClass('on');		
	}else{
        mMenu();
		mobileMenu();	
		organize();				
    }	 
	 
}

//loacation
jQuery(function($){
    // Common
    var select_root = $('div.fake_select');
    var select_value = $('.my_value');
    var select_a = $('div.fake_select>ul>li>a');
    var select_input = $('div.fake_select>ul>li>input[type=radio]');
    var select_label = $('div.fake_select>ul>li>label');
    // Radio Default Value
    $('div.my_value').each(function(){
        var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
        $(this).append(default_value);
    });
    // Line
    select_value.bind('focusin',function(){$(this).addClass('outLine');});
    select_value.bind('focusout',function(){$(this).removeClass('outLine');});
    select_input.bind('focusin',function(){$(this).parents('div.fake_select').children('div.my_value').addClass('outLine');});
    select_input.bind('focusout',function(){$(this).parents('div.fake_select').children('div.my_value').removeClass('outLine');});
    // Show
    function show_option(){
        $(this).parents('div.fake_select:first').toggleClass('open');
    }
    // Hover
    function i_hover(){
        $(this).parents('ul:first').children('li').removeClass('hover');
        $(this).parents('li:first').toggleClass('hover');
    }
    // Hide
    function hide_option(){
        var t = $(this);
        setTimeout(function(){
            t.parents('div.fake_select:first').removeClass('open');
        }, 1);
    }
    // Set Input
    function set_label(){
        var v = $(this).next('label').text();
        $(this).parents('ul:first').prev('.my_value').text('').append(v);
        $(this).parents('ul:first').prev('.my_value').addClass('selected');
    }
    // Set Anchor
    function set_anchor(){
        var v = $(this).text();
        $(this).parents('ul:first').prev('.my_value').text('').append(v);
        $(this).parents('ul:first').prev('.my_value').addClass('selected');
    }
    // Anchor Focus Out
    $('*:not("div.fake_select a")').focus(function(){
        $('.a_list').parent('.fake_select').removeClass('open');
    });
    select_value.click(show_option);
    select_root.removeClass('open');
    select_root.mouseleave(function(){$(this).removeClass('open');});
    select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
    select_input.change(set_label).focus(set_label);
    select_label.hover(i_hover).click(hide_option);
});

//fullpage
function onePage(){
    var myFullpage = new fullpage('#fullpage', {
       licenseKey:'C62E7714-4F9F4F58-B34CDF98-8CA5F880' ,
       anchors: [ 'main','business', 'community', 'place', 'mFooter'],
	   menu: '#anchor_menu', 
       responsiveHeight: 700, 
       responsiveWidth: 1199,
       scrollingSpeed: 1500, 
	   onLeave: function(origin, destination, direction){
			var leavingSection = this;
			if(origin.index == 0 && direction =='down'){
			   $('.anchor_wrap').addClass('white'); 
			   $('.anchor_wrap').removeClass('pop'); 
			   $('.main_slider > li').addClass('zoom');
			}
			if(origin.index == 1 && direction =='up'){
				$('.anchor_wrap').removeClass('white');
				$('.main_slider > li').removeClass('zoom');
				if($('.popup_slider_area').css('display') == 'block'){
					$('.anchor_wrap').addClass('pop');
				}else{
					$('.anchor_wrap').removeClass('pop');
				}
			}
			if(origin.index == 1 && direction =='down'){
				$('.anchor_wrap').removeClass('white');
			}
			if(origin.index == 2 && direction =='down'){
				$('.anchor_wrap').removeClass('white');
			}			
			if(origin.index == 2 && direction =='up'){
				$('.anchor_wrap').addClass('white');
			}
		},
       afterResponsive: function(isResponsive){


       }
   });

}

function pcMenu(){
  $('#gnb').on({
    'mouseenter focusin':function() {
      $(".gnb_bg").addClass("on").stop().animate({"height":"254px"},500);
      $("#gnb .depth2").stop().animate({"height":"315px"},500);
      $("#gnb .depth2 > li").on("mouseenter focusin", function(){
        $("#gnb .depth2 li").not(this).removeClass("on");
        $(this).addClass("on");
        var gnbImg = $(".gnb_bg > span");
        var gnbOn1 = $("#gnb .depth1_1 ");
        var gnbOn2 = $("#gnb .depth1_2 ");
        var gnbOn3 = $("#gnb .depth1_3 ");
        var gnbOn4 = $("#gnb .depth1_4 ");
        var gnbOn5 = $("#gnb .depth1_5 ");
        
        if(gnbOn1.hasClass('on')){	  
      	  gnbImg.removeClass().addClass("gnb_thum").addClass("gnb_img01");
      	  
        }else if(gnbOn2.hasClass('on')){
      	  gnbImg.removeClass().addClass("gnb_thum").addClass("gnb_img02");
      	  
        }else if(gnbOn3.hasClass('on')){
      	  gnbImg.removeClass().addClass("gnb_thum").addClass("gnb_img03");
      	  
        }else if(gnbOn4.hasClass('on')){
      	  gnbImg.removeClass().addClass("gnb_thum").addClass("gnb_img04");
      	  
        }else if(gnbOn5.hasClass('on')){
      	  gnbImg.removeClass().addClass("gnb_thum").addClass("gnb_img05");    	  
        }
      });   
            
    },'mouseleave focusout':function(){
      $("#gnb .depth2").stop().animate({"height":"63px"},500);
      $("#gnb .depth2 li").removeClass("on");
      $(".gnb_bg").removeClass("on").stop().animate({"height":"0"},600);
      $(".gnb_bg > span").removeClass().addClass("gnb_thum");
    }
  });
  
}

// all menu
function mMenu(){
    var menuToggle = $('.menu_area');
    $('.btn_menu a').click(function(){
    	menuToggle.css("display","block");
    	$('.anchor_wrap').css('display','none');
    	$('.btn_scroll').css('display','none');
		menuToggle.stop().animate({"left":"0"},500);
        return false;
    });
    $('.menu_close').click(function(){
        menuToggle.stop().animate({"left":"100%"},500, function(){
        	menuToggle.css("display","none");
        	$('#header').css('display','block');
        	$('.anchor_wrap').css('display','block');
        	$('.btn_scroll').css('display','block');
        });       
		if(menuToggle.width() < 1199){			
			$('#menu .depth1').removeClass('open');
			$('#menu .depth1').find('ul').slideUp(200);
			
		}
		 return false;
    });
}

function mobileMenu(){
    $('#menu > ul > li > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        element.removeClass('open'); 
        if (element.hasClass('open')) {
            element.removeClass('open');           
            element.find('ul').slideUp(200); 
        }
        else {            
            element.siblings('li').removeClass('open');     
            element.siblings('li').find('ul').slideUp(200);
            element.addClass('open'); 
            element.children('ul').slideDown(200);       
        }
    });   
}

function familySite(){
    $(".footBtn button").click(function(){
        $(".family_list").slideToggle("fast", function(){
            $('.footBtn').toggleClass('open');
        });
    });
    $(".family_list a").click(function(){
        if($('.footBtn').hasClass('open')){
            $(".family_list").slideUp("4000");
            $('.footBtn').removeClass('open');
        }
    });
    $('html').click(function(e) {
        if(!$(e.target).parents().hasClass("footBtn")) {
            $(".family_list").slideUp();
            $('.footBtn').removeClass("open");
        }       
    });

}

function slideStar() {
    starArea = document.getElementById("effect1");
    var NUMBER_OF_STARS = 200;
    var addPulse = function( element ){
        var pulseTime = Math.random() * 4000;
        setTimeout( function(  ){
        element.className += ' pulse';
        }, pulseTime );

    };

    for( var jess = 0; jess < NUMBER_OF_STARS; jess++ ) {
        var aStar = document.createElement('div');
            aStar.className='star';
        var windowWidth = starArea.offsetWidth;
        var windowHeight = starArea.offsetHeight;

        var x = Math.random( ) * windowWidth;
        aStar.style.left = x + 'px';
        document.getElementById('effect1').appendChild( aStar );

        var y = Math.random( ) * windowHeight;
        aStar.style.top = y + 'px';
        addPulse( aStar );
    }
}

function mainLite(){
    starArea = document.getElementById("effect3");
    var NUMBER_OF_STARS = 80;
    var addPulse = function( element ){
        var pulseTime = Math.random() * 4000;
        setTimeout( function(  ){
        element.className += ' pulse';
        }, pulseTime );

    };

    for( var jess = 0; jess < NUMBER_OF_STARS; jess++ ) {
        var aStar = document.createElement('div');
            aStar.className='lite';
        var windowWidth = starArea.offsetWidth;
        var windowHeight = starArea.offsetHeight;

        var x = Math.random( ) * windowWidth;
        aStar.style.left = x + 'px';
        document.getElementById('effect3').appendChild( aStar );

        var y = Math.random( ) * windowHeight;
        aStar.style.top = y + 'px';
        addPulse( aStar );
    }
}

function organize(){
	$('.list_group li').on('click', function(){	       
        var element = $(this)
        if (element.hasClass('on')) {
            element.removeClass('on');
            element.find('li').removeClass('on');
        }
        else {
            element.addClass('on');	          
            element.siblings('li').removeClass('on');
        }
    }); 	
	$('html').click(function(e) {
        if(!$(e.target).parents().hasClass("on")) {
        	$('.list_group li').removeClass("on");
        }       
    });	 
}
//tab
function subTab(){
	$(".tab_content").hide();
	$(".tab_content:first").show();
	$(".tab a").click(function(event) {
		event.preventDefault(); //주소에 #숨김
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$(".tab_content").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
}
//popup
function view_show(num) {   
	$("body").addClass("ofHidden");
    var left = (( $(window).width() - $("#dispay_view"+num).width()) / 2 );
    var top = (( $(window).height() - $("#dispay_view"+num).height()) / 2 );
    $("#dispay_view"+num).css({'left':left,'top':top, 'position':'fixed'});
    document.getElementById("js-popup-bg").style.display = "block";
    document.getElementById("dispay_view"+num).style.display = "block";    
    return false;
 }
function view_hide(num) {  
	$("body").removeClass("ofHidden");
	document.getElementById("dispay_view"+num).style.display = "none"; 
	document.getElementById("js-popup-bg").style.display = "none";
	return false;
}
 
//image map color
function mapColor(){
	$('.js-map area').on('click', function() {
		var map = $(this).attr('src');
		if(typeof $(this).attr('src') == 'undefined') map = '';
		$('.js-hover-map').attr('src', map);
	});
}

//select
function sele(){	
	var selectTarget = $('.search_select select');	
    selectTarget.on('blur', function(){
        $(this).parent().removeClass('focus');
    });
    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
	
}