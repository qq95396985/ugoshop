(function($){
	$.ajax({
		url:"../api/theme_goodsList.json",
		type:"get",
		dataType:"json",
		success:function(result){
			console.log(result);

			$.each(result,function(index,data){
				console.log(data.goodsId);

				var goodlist = $("<li>");
				goodlist.appendTo($(".themesale")).addClass("l");
				var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
				var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
				var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
				var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
				var buynow = $("<span>").addClass("buynow").appendTo($(goodsinfo))

				goodlist.click(function(){
					location.href="../html/goodsDetail.html?GoodsId="+data.goodsId;
				})
				buynow.click(function(){
					location.href="../html/goodsDetail.html?GoodsId="+data.goodsId;
				})


			})

		}
	})
})(jQuery)

