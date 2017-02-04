(function($){

	$.ajax({
		url:"api/index_goodsList.json",
		type:"get",
		dataType:"json",
		success:function(result){
			$.each(result,function(index,data){
				var goodlist = $("<li>").appendTo($(".themesale")).addClass("l");
				var imgP = $("<img>").attr({ src: data.goodsListImg}).appendTo($(goodlist));
				var goodsinfo = $("<div>").addClass("goodsinfo").appendTo($(goodlist));
				var goodstitle = $("<div>").addClass("goodstitle").appendTo($(goodsinfo)).html(data.goodsName);
				var buyer = $("<p>").addClass("buyer").appendTo($(goodsinfo)).html(data.buyer);
				var goodsprice = $("<div>").addClass("goodsprice").appendTo($(goodsinfo)).html("抢购价:￥"+data.price);
				var albuy = $("<span>").addClass("albuy").appendTo($(goodsinfo)).html(data.albuy+"人已购买");

				goodlist.click(function(){
					location.href="html/goodsDetail.html?GoodsId="+data.goodsId;
				})
			})
		}
	})
	
})(jQuery)

