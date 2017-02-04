(function($){

	console.log(location.search.split("=")[1]);
	var goodID = location.search.split("=")[1];
	$.ajax({
		url:"../api/goodsDetail.json",
		data:{goodsId:goodID},
		type:"get",
		dataType:"json",
		success:function(result){
			// console.log(result[0]);
			// console.log(goodID);

			//放大镜右侧商品详情动态创建
			$("<span>").appendTo($(".goodsparameters .brand")).html(result[goodID-1].brand)
			$("<h1>").appendTo($(".goodsparameters .goodsName")).html(result[goodID-1].goodsName).addClass("title")
			$("<span>").appendTo($(".goodsparameters .description")).html(result[goodID-1].buyer)

			$("<span>").appendTo($(".pricebox .pbprice")).html("￥"+result[goodID-1].price).addClass("rbox").addClass("l")
			// $("<h1>").appendTo($(".goodsparameters .goodsName")).html(result[goodID-1].goodsName).addClass("title")






			//商品详细信息动态创建
			var arr1 = JSON.parse(result[goodID-1].detailImge); //字符串解析成数组
			var arr2 = JSON.parse(result[goodID-1].goodsZoom);
			console.log(arr2);
			$.each(arr1,function(index,item){
				// console.log(item);
				$("<img>").attr("src",item).appendTo($(".datadetails .goodsimg"));
			})


			$("<div>").appendTo($(".datadetails .goodsname")).html(result[goodID-1].goodsName).addClass("decgoods").addClass("l");
			$("<div>").appendTo($(".datadetails .brand")).html(result[goodID-1].brand).addClass("decgoods").addClass("l");
			$("<div>").appendTo($(".datadetails .onsale")).html(result[goodID-1].onsale).addClass("decgoods").addClass("l");
			$("<div>").appendTo($(".datadetails .parameter")).html(result[goodID-1].parameter).addClass("decgoods").addClass("l");
			$("<div>").appendTo($(".datadetails .list")).html(result[goodID-1].list).addClass("decgoods").addClass("l");

			//放大镜效果创建
			$.each(arr2,function(index,item){
				// console.log(item);
				var goodsname = $("<img>").attr("src",item).appendTo($(".goodsgallery .two"));

			})
			$(".goodsgallery .two img").eq(0).addClass("active")
			$("<img>").attr("src",result[goodID-1].dafaultImg).appendTo($(".goodsgallery .one"));
			$("<img>").attr("src",result[goodID-1].dafaultImg).appendTo($(".goodsgallery .the"));


			var ione = $(".one"),
			ithe = $(".the"),
			itwo = $(".two img"),
			tthe = $(".the img");
		
			var arr = arr2;
			var oarr = arr2;
			itwo.each(function(i){
				$(this).click(function(){
					$(".one img").attr("src",arr[i])
					tthe.attr("src",oarr[i])
					itwo.removeClass("active")
					$(this).addClass("active")
				})
				
				ione.mousemove(function(a){
					var evt = a || window.event
					ithe.css('display','block')
					var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
					var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
					if(ol<=0){
						ol = 0;
					}
					if(ot<=0){
						ot = 0;
					}
					if(ol>=225){
						ol=225
					}
					if(ot>=225){
						ot=225
					}
					$(".zoom").css({'left':ol,'top':ot})
					var ott = ot/560*400
					var oll = ol/560*400
					tthe.css({'left':-oll,'top':-ott})
				})
				ione.mouseout(function(){
					ithe.css('display','none')
				})
				
			})
		},
		error:function(result){
			console.log("error")
		}
	})

	function adddel(){
	//小计和加减
		//加
		$(".tobuy .add").each(function() {
			$(this).click(function() {
				var $multi = 0;
				var vall = $(this).prev().val();
				vall++;
				$(this).prev().val(vall);
				$multi = parseFloat(vall) * parseFloat($(this).parent().prev().text());
				$(this).parent().next().text(parseFloat($multi));
			})

		})
		//减
		$(".tobuy .reduc").each(function() {
			$(this).click(function() {
				var $multi1 = 0;
				var vall1 = $(this).next().val();
				vall1--;
				if(vall1 <= 0) {
					vall1 = 1;
				}
				$(this).next().val(vall1);
				$multi1 = parseFloat(vall1) * parseFloat($(this).parent().prev().text());
				$(this).parent().next().text(parseFloat($multi1));
			})

		})
	}
	adddel();


	$(".addcart").click(function(){
		$.ajax({
			url:"../api/shopcar.php",
			data:{
				goodsId:goodID
			},
			type:"post",
			success:function(result){
				console.log("success")
				console.log(goodID)
				console.log(result)
			},
			error:function(result){
				console.log("error")
				console.log(goodID)
				console.log(result)
			}
		})
	})







	
})(jQuery)
