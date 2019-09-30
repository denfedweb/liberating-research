$(document).ready(function() {
// логика селектов (врзможно нужно переделать)
    $('.js-dropdown').SumoSelect({search: true, searchText: 'Enter here.', placeholder: 'This is a placeholder'});
    $('.menu-link').click(function(){
        $(this).toggleClass('menu-link_active');
        $('.adaptiveMenu').toggle();
    });





// логика раскрывания таблицы в адаптивном виде
    $(".tab-mobile").click(function() {
        $(this).next('div').slideToggle();
        $(this).find(".fa-plus-circle").toggle(100);
        $(this).find(".fa-minus-circle").toggle(100);
       });
});


