$(document).ready(function() {
   
    $('.js-dropdown').SumoSelect({search: true, searchText: 'Enter here.', placeholder: 'This is a placeholder'});
    $('.menu-link').click(function(){
        $(this).toggleClass('menu-link_active');
        $('.adaptiveMenu').toggle();
    });






    $(".tab-mobile").click(function() {
        $(this).next('div').slideToggle();
        $(this).find(".fa-plus-circle").toggle(100);
        $(this).find(".fa-minus-circle").toggle(100);
       });
});


