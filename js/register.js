(function($){
    //验证码

    var oDivcheckcode = document.getElementById("divcheckcode");
    var oDisplay = document.getElementById("display");
    var oCodetip = document.getElementById("codetip");
    var registernow = document.getElementById("registernow");
    var checkbox = document.getElementById("checkbox");
    var mainlogin = document.getElementById("mainlogin");
    var save;

    function start(){
    save = "";
    var a = [0,1,2,3,4,5,6,7,8,9];
        for(var i = 0;i<4;i++){
            var check = Math.round(Math.random()*9);
            save += a[check]
        }
        oDisplay.innerHTML = save;
    }
    start();
    oDivcheckcode.onblur = function(){
        if(save == oDivcheckcode.value){
            oCodetip.innerHTML='<font class="tips_true">验证成功</font>';
        }else if(oDivcheckcode.value == ""){
            oCodetip.innerHTML='<font class="tips_false">请输入验证码</font>';
        }else{
            oCodetip.innerHTML='<font class="tips_false">验证码错误</font>';
            start();
        }
    }

        registernow.onclick = function(){
            $.ajax({
            type:"post",
            url:"../api/register.php",
            data:{
                name: $("#yourname").val(),
                password: $("#yourpass").val()
            }
        }).done(function(result){
                if(result==$("#yourname").val()) {
                    alert("注册失败");
                }
                else{
                    $("header .inner .user").html("<li>欢迎您 ,</li>"+"<li><a href='javascript:void(0)' >"+"  "+result+"  "+"</a><span>|</span></li><li><a href='javascript:void(0)' id='logout'>退出</a><span>|</span></li>");
                    location.href="http://localhost/ugoshop/index.html"
                    $("#logout").click(function(){
                        $.ajax({
                            url:"../api/logout.php"
                        }).done(function(){
                            location.href="http://localhost/ugoshop/index.html"
                        })
                    })
                    console.log(result);
                    console.log($("#yourname").val());
                }

            }).fail(function(){
                console.log("连接数据库失败")
            })
        }

})(jQuery);