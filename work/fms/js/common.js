//pc & mobile 공통
$(function(){
	response();
    menuHover();
    sele();
    
})
window.onresize = function() {  
    response();
};


function response(){
    //pc만
     if ($(window).width() > 1199) {
        familySite();  
        menuHover();
        pcMenu();
        bgFix();
        PClocaWidth();
    }else{
    //mobile만        
        mMenu(); 
        MlocaWidth(); 
        locaPosition();
    }    
     
}


// menu hover
function menuHover(){
	/*$('#gnb .depth1 > li').on({
		'mouseenter focus':function(){
			$(this).children('.depth2').addClass('on');
		},'mouseleave focusout':function(){
			$(this).children('.depth2').removeClass('on');
		}
	});*/

    /*$('#gnb .depth1 > li').hover(function(){
    	$(this).children('.depth2').slideDown();
    },function(){ 
        $(this).children('.depth2').slideUp();
    });*/
    
    $('#gnb .depth1 > li').hover(function(){
    	$(this).children('.depth2').addClass('on');
    },function(){
        $(this).children('.depth2').removeClass('on');
    });
    
    /*$('#gnb .depth2 > li').hover(function(){
        $(this).children('.depth3').addClass('on');
    },function(){
        $(this).children('.depth3').removeClass('on');
    });*/
}

function mMenu(){ 
	$('.allmenu_box .depth2').css('display','none');
    $('.allmenu_box .depth1 > li').click(function(){
        $(this).removeClass('open');
        if($(this).hasClass('open')){
        	$(this).removeClass('open'); 
        	$(this).children('.depth2').slideUp();
        }else{
        	$(this).siblings('li').removeClass('open');
        	$(this).siblings('li').children('.depth2').slideUp();
        	$(this).addClass('open');
        	$(this).children('.depth2').slideDown();
        }
    });
    $('.btn_allmenu').click(function(){ 
        $('.allmenu_area').css({'left':'0'});
    }); 
    $('.allmenu_area .btn_close').click(function(){
        $('.allmenu_area').css({'left':'-100%'});
    });
}

function pcMenu(){
	$('.allmenu_box .depth1 > li').removeClass('open');
	$('.btn_allmenu').click(function(){ 
        $('.allmenu_area').css({'left':'0'});
    }); 
    $('.allmenu_area .btn_close').click(function(){
        $('.allmenu_area').css({'left':'-100%'});
    });
    
    $('.allmenu_box .depth2').css('display','block');
}

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

//popup
function view_show(num) {
    $("body").addClass("ofHidden"); // css로 body 스크롤 없애기
    var left = (( $(window).width() - $("#dispay_view"+num).width()) / 2 );
    var top = (( $(window).height() - $("#dispay_view"+num).height()) / 2 );
    $("#dispay_view"+num).css({'left':left,'top':top, 'position':'fixed'});
    document.getElementById("dispay_view"+num).style.display = "block";
    document.getElementById("js-popup-bg").style.display = "block";
    return false;
 }
function view_hide(num) {
  $("body").removeClass("ofHidden");
  document.getElementById("dispay_view"+num).style.display = "none";
  document.getElementById("js-popup-bg").style.display = "none";
  return false;
}
 
$(function(){
    $('#js-popup-bg').click(function(){
        $("body").removeClass("ofHidden");
        $('.js-popup').css("display","none");
        $(this).css("display","none");
      });
});		
 
$(function(){
    $('.window_close').click(function(){
        window.open('about:blank', '_self').close();
    })
});

//ie background-attached
function bgFix(){
	if(navigator.userAgent.match(/Trident\/7\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();

            var wheelDelta = event.wheelDelta;

            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });

        $('body').keydown(function (e) {

            var currentScrollPosition = window.pageYOffset;

            switch (e.which) {

                case 38: // up
                    e.preventDefault(); // prevent the default action (scroll / move caret)
                    window.scrollTo(0, currentScrollPosition - 10);
                    break;

                case 40: // down
                    e.preventDefault(); // prevent the default action (scroll / move caret)
                    window.scrollTo(0, currentScrollPosition + 10);
                    break;

                default: return; // exit this handler for other keys
            } 
        });
    }
}


/*location width*/
function PClocaWidth(){
	$('.location_2').css('width','calc(100% - 34rem)');
	$('.location_2 .a_list').css('width','');
}

function MlocaWidth(){ 
	$('.location_2 .a_list').each(function(){
		var $this = $(this), 
			sum = 0;
		$('li',$this).each(function(){
			sum += $(this).outerWidth(true); 
		}); 
		$this.css('width',sum + 10);
		var totalWidth = $('.top_area').outerWidth(true);
		var h = $('.i_home').outerWidth(true);
		var f = $('.fake_select').outerWidth(true);
		var l = $('.loca_arrow').outerWidth(true);
		$('.location_2').css('width', totalWidth - h - f - l);
	});
}


/*location position*/ 
function locaPosition(){
	var widthAdd = 0;
	var lengthPreDiv = $('.location_2 .a_list li.on').prevAll().length;
	for(i=0; i < lengthPreDiv; i++){
		widthAdd = widthAdd + parseInt($('.on').siblings().eq(i).width());
	}
	$('.location_2').scrollLeft(widthAdd);
}



var fncDate = function(){
	var setDate = arguments;
	var getId;
	var fmt = "yy.mm.dd";
	switch (setDate.length) {
		case 1: getId ="#"+setDate[0];break;
		case 2: if(setDate[1] != ''){getId ="#"+setDate[0]+", #"+setDate[1];break;}else{getId ="#"+setDate[0];break;}
		case 3: if(setDate[1] != ''){getId ="#"+setDate[0]+", #"+setDate[1];fmt=setDate[2];break;}else{getId ="#"+setDate[0];fmt=setDate[2];break;}
	}
	
	 var dates = $( getId ).datepicker({
      changeMonth: true,
      changeYear: true,
      showOn: "button",
      buttonImage: "/publish/ft/images/icon_calendar.png",
      buttonImageOnly: true,
      dateFormat : fmt,
      onSelect: function( selectedDate ) {
          var option = this.id == setDate[0] ? "minDate" : "maxDate",
          instance = $( this ).data( "datepicker" ),
          date = (fmt == 'yy.mm' ? new Date(instance.selectedYear, instance.selectedMonth, 1) : $.datepicker.parseDate( $.datepicker._defaults.dateFormat, selectedDate, instance.settings ))
    	  dates.not( this ).datepicker( "option", option, date );
      }
  });
}

function isValidEmail(value) {
	var pattern = /^[_a-zA-Z0-9-\.]+@[\.a-zA-Z0-9-]+\.[a-zA-Z]+$/;
	return (pattern.test(value));
}

function isValidpass(value) {
	var pattern = /^[a-zA-Z0-9_]{8,16}$/;
	return pattern.test(value);
}
