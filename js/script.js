$(document).ready(function() {
   
    $('.js-dropdown').SumoSelect({search: true, searchText: 'Enter here.', placeholder: 'This is a placeholder'});
    $('.menu-link').click(function(){
        $(this).toggleClass('menu-link_active');
        $('.adaptiveMenu').toggle();
    });
});


