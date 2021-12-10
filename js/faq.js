$(document).ready(function(){
  $(".set > a").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(400);
      $(".set > a span").removeClass("minus").addClass("plus");
    }else{
      $(".set > a span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(400);
      $(this).siblings('.content').slideDown(400);
    }    
  });
});