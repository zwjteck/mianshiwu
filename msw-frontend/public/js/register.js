$(function () {

   /**
    * @class 60s
    **/
    var timer = null , time = 60 ;
   $('#get-code').click(function () {
       var _this = this;
       $(this).hide()
       $('#resendcode').show().html('60s后重发')
       timer = setInterval(function () {
           time--;
           console.log(time)
           $('#resendcode').html(time +'s后重发');
           if(time<=0){
               clearInterval(timer);
               $('#get-code').show().html('获取验证码')
               $('#resendcode').hide()
           }
       },1000)

   })

    $('#register-rules-check').click(function () {
        $(this).parent().find('span').toggleClass('selected')
    })

});