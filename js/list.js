(function($){
	Goodsnormal();
	var count = 0;

	$("#golbal_goods .inner .sort ul li").click(function(index){
		var currentIndex  = $("#golbal_goods .inner .sort ul li").index(this);
		if(currentIndex == 0||currentIndex == 2){
			return false;
		}else{
			$("#golbal_goods .inner .sort ul li").removeClass("cur").eq(currentIndex).addClass("cur");
			console.log(currentIndex);
			if(currentIndex == 1){
				$(".themesale li").remove();
				Goodsnormal();
			}else if(currentIndex == 3){
				$(".themesale li").remove();
				Goodsalbuy();
			}else if(currentIndex == 4){
				$(".themesale li").remove();
				Goodsonsale();
			}else if(currentIndex == 5){
				count++;
				console.log(count)
				if(count%2 == 0){
					$(".themesale li").remove();
					Goodspriceup();
				}else{
					$(".themesale li").remove();
					Goodspricedown();
				}
			}
			
		}
	})
	
	function Goodspriceup(){
		$.ajax({
			url:"../api/theme_goodsList.json",
			type:"get",
			dataType:"json",
			success:function(result){
				result.sort(function(a,b){
					return a.price - b.price;
				});
				$.each(result,function(index,data){
					var goodlist = $("<li>");
					goodlist.appendTo($(".themesale")).addClass("l");
					var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
					var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
					var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
					var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
					var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
					var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");

					goodlist.click(function(){
						location.href="goodsDetail.html?GoodsId="+data.goodsId;
					})
				})
			}
		})
	}
	function Goodspricedown(){
		$.ajax({
			url:"../api/theme_goodsList.json",
			type:"get",
			dataType:"json",
			success:function(result){
				result.sort(function(a,b){
					return b.price - a.price;
				});
				$.each(result,function(index,data){
					var goodlist = $("<li>");
					goodlist.appendTo($(".themesale")).addClass("l");
					var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
					var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
					var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
					var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
					var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
					var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");

					goodlist.click(function(){
						location.href="goodsDetail.html?GoodsId="+data.goodsId;
					})
				})
			}
		})
	}
	function Goodsnormal(){
		$.ajax({
			url:"../api/theme_goodsList.json",
			type:"get",
			dataType:"json",
			success:function(result){

				$.each(result,function(index,data){
					var goodlist = $("<li>");
					goodlist.appendTo($(".themesale")).addClass("l");
					var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
					var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
					var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
					var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
					var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
					var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");
					
					goodlist.click(function(){
						location.href="goodsDetail.html?GoodsId="+data.goodsId;
					})
				})
			}
		})
	}
	function Goodsalbuy(){
		$.ajax({
			url:"../api/theme_goodsList.json",
			type:"get",
			dataType:"json",
			success:function(result){
				// console.log(result);
				result.sort(function(a,b){
					return b.albuy - a.albuy;
				});
				$.each(result,function(index,data){
					var goodlist = $("<li>");
					goodlist.appendTo($(".themesale")).addClass("l");
					var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
					var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
					var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
					var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
					var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
					var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");

					goodlist.click(function(){
						location.href="goodsDetail.html?GoodsId="+data.goodsId;
					})
				})
			}
		})
	}
	function Goodsonsale(){
		$.ajax({
			url:"../api/theme_goodsList.json",
			type:"get",
			dataType:"json",
			success:function(result){
				// console.log(result);
				console.log(result.sort(function(a,b){
						return b.onsale - a.onsale;
					}));
				$.each(result,function(index,data){
					var goodlist = $("<li>");
					goodlist.appendTo($(".themesale")).addClass("l");
					var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
					var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
					var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
					var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
					var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
					var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");

					goodlist.click(function(){
						location.href="goodsDetail.html?GoodsId="+data.goodsId;
					})
				})
			}
		})
	}
})(jQuery)

