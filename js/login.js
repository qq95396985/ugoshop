(function($){

    var login = document.getElementById("login");

    login.onclick = function(){
        $.ajax({
            type:"post",
            url:"../api/login.php",
            data:{
                name: $("#yourname").val(),
                password: $("#yourpass").val()
            }
        }).done(function(result){
            if (result==0) {
                console.log("用户不存在");
                console.log($("#yourname").val());
                console.log($("#yourpass").val());
            }
            else{
                $("header .inner .user").html("<li>欢迎您 ,</li>"+"<li><a href='javascript:void(0)' >"+"  "+result+"  "+"</a><span>|</span></li><li><a href='javascript:void(0)' id='logout'>退出</a><span>|</span></li>");
                location.href="http://localhost/ugoshop/index.html"
                $("#logout").click(function(){
                    $.ajax({
                        url:"../api/logout.php"
                    }).done(function(result){
                        location.href="http://localhost/ugoshop/index.html"
                    })
                })
            }

        }).fail(function(){
            console.log("连接数据库失败")
        })
    }

})(jQuery);