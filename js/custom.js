$(function(){
  $(window).scroll(function(){
    var scroll=$(window).scrollTop();
    console.log(scroll);
    if(scroll>20){
      $(".topBtn").css("display","block");
    }else{
      $(".topBtn").css("display","none");
    }
  });

  //
  $(".topBtn").click(function(){
    $(window).scrollTop(0);
  })
});