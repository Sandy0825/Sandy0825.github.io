$(function(){
    lnbshow();
    lnbdepth();
     // Common
    var select_root = $('div.js-fake-select');
    var select_value = $('.js-my-value');
    var select_a = $('div.js-fake-select>ul>li>a');
    var select_input = $('div.js-fake-select>ul>li>input[type=radio]');
    var select_label = $('div.js-fake-select>ul>li>label');
    // Radio Default Value
    $('div.js-my-value').each(function(){
        var default_value = $(this).next('.js-i-list').find('input[checked]').next('label').text();
        $(this).append(default_value);          });
 
    // Line
    select_value.bind('focusin',function(){$(this).addClass('outLine')});
    select_value.bind('focusout',function(){$(this).removeClass('outLine')});
    select_input.bind('focusin',function(){$(this).parents('div.js-fake-select').children('div.js-my-value').addClass('outLine')});
    select_input.bind('focusout',function(){$(this).parents('div.js-fake-select').children('div.js-my-value').removeClass('outLine')});
    // Show
    function show_option(){
        $(this).parents('div.js-fake-select:first').toggleClass('open');
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
            t.parents('div.js-fake-select:first').removeClass('open');
        }, 1);
    }
    // Set Input
    function set_label(){
        var v = $(this).next('label').text();
        $(this).parents('ul:first').prev('.js-my-value').text('').append(v);
        $(this).parents('ul:first').prev('.js-my-value').addClass('selected');
    }
    // Set Anchor
    function set_anchor(){
        var v = $(this).text();
        $(this).parents('ul:first').prev('.js-my-value').text('').append(v);
        $(this).parents('ul:first').prev('.js-my-value').addClass('selected');
    }
    // Anchor Focus Out
    $('*:not("div.js-fake-select a")').focus(function(){
        $('.a_list').parent('.js-fake-select').removeClass('open');
    });
    select_value.click(show_option);
    select_root.removeClass('open');
    select_root.mouseleave(function(){$(this).removeClass('open')});
    select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
    select_input.change(set_label).focus(set_label);
    select_label.hover(i_hover).click(hide_option);
});

function lnbshow(){
    var hideWidth = $('#contents').outerWidth();
    $('.btn_lnb').on('click',function(){
        $('.lnb').toggleClass('on');
        $('#contents').toggleClass('on');
        if($('#contents').hasClass('on')){
            $('#contents').animate({width: hideWidth - 275},400);
        }else{
            $('#contents').animate({width:hideWidth},400);
        }
        if($('.lnb').hasClass('on')){
            $('.lnb').animate({left: 0},400);
        }else{
            $('.lnb').animate({left: -275},400);
        }
    }); 
}
function lnbdepth(){
    $('.js-lnb li.open').addClass('active').children('ul').show();
    $('.js-lnb li.has_sub > a').on('click', function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(200);
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });
}