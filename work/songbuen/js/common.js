jQuery(function($){
    // Common
    var select_root = $('div.js-fake-select');
    var select_value = $('.js-my-value');
    var select_a = $('div.js-fake-select>ul>li>a');
    var select_input = $('div.js-fake-select>ul>li>input[type=radio]');
    var select_label = $('div.js-fake-select>ul>li>label');
    // Radio Default Value
    $('div.js-my-value').each(function(){
        var default_value = $(this).next('.i_list').find('input[checked]').next('label').text();
        $(this).append(default_value);          });

    // Line
    select_value.bind('focusin',function(){$(this).addClass('outLine');});
    select_value.bind('focusout',function(){$(this).removeClass('outLine');});
    select_input.bind('focusin',function(){$(this).parents('div.js-fake-select').children('div.js-my-value').addClass('outLine');});
    select_input.bind('focusout',function(){$(this).parents('div.js-fake-select').children('div.js-my-value').removeClass('outLine');});
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
        $('.js-a-list').parent('.js-fake-select').removeClass('open');
    });
    select_value.click(show_option);
    select_root.removeClass('open');
    select_root.mouseleave(function(){$(this).removeClass('open');});
    select_a.click(set_anchor).click(hide_option).focus(i_hover).hover(i_hover);
    select_input.change(set_label).focus(set_label);
    select_label.hover(i_hover).click(hide_option);


    //select
    var selectTarget = $('.js-search-select select');
    selectTarget.on('blur', function(){
        $(this).parent().removeClass('focus');
    });
    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });

});
