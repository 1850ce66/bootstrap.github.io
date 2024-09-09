$(document).ready(function(){
    $('.showmenu').on('click',function(e){
        console.log('click'); 
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});