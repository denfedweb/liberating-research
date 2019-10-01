$(document).ready(function() {
// логика селектов (врзможно нужно переделать)
    
    $('.js-dropdown').select2({
        placeholder: ''
    });
    
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

// логика добавление селектов на кнопку
   $('.collection-add-btn').click(function(){
       console.log( $(this).prev('select'))
      
   })
// логика раскрывания таблицы в адаптивном виде
    $(".tab-mobile").click(function() {
        $(this).next('div').slideToggle();
        $(this).find(".fa-plus-circle").toggle(100);
        $(this).find(".fa-minus-circle").toggle(100);
       });
});


