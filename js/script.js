$(document).ready(function() {
// логика селектов (врзможно нужно переделать)
    $('.js-dropdown').select2({
        placeholder: 'Start typing or select an item...'
    });


//login form logic
$('#login, .close-login').click(function() {
    $('.login-header').slideToggle();

})

// scroll header  
$( window ).scroll(function() {
    if ($(this).scrollTop() > 250){
        $('.nav-toggle').addClass('header-fixed');
        $('.header-block-toggle').show();
    }
     if($(this).scrollTop() > 300){
        $('.header-fixed').css('top', '0');
    }else{
        $('.nav-toggle').removeClass('header-fixed').css('top', '');
        $('.header-block-toggle').hide();
    }
})
    
// adaptive logic
    $('.menu-link').click(function(){
        $(this).toggleClass('menu-link_active');
        $('.adaptiveMenu').toggle();
    });

//  логика попапа export 
$('.btn-popup-export').click(function(){
    $('.popup-export').css('display', 'flex');
})
$('.popup-export-close').click(function(){
    $('.popup-export').toggle();
})

// логика попапа send message
$('.btn-sendMessage').click(function(){
    $('.popup-content').slideToggle();
    
})
$('.popup-close').click(function(){
    $('.popup-content').slideToggle();
})

// логика таблицы в адаптивном виде
    $(".tab-mobile").click(function() {
        $(this).next('div').slideToggle();
        $(this).find(".fa-plus-circle").toggle(100);
        $(this).find(".fa-minus-circle").toggle(100);
       });
});


