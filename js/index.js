		$("#search").focus(function(){
			$(this).animate({width:"150px"})
		})
		$("#search").blur(function(){
			$(this).animate({width:"100px"})
		})
$(function(){
    $('#owl-demo').owlCarousel({
        slideSpeed: 500,
        paginationSpeed: 500,
        singleItem: true,
    });
});
$(function(){
    $('#owl-demo1').owlCarousel({
    	items:4
    });
});
$(function(){
    $('#owl-demo3').owlCarousel({
    	items:3
    });
});
$(function(){
    $('#owl-demo4').owlCarousel({
    	items:5
    });
});
$(function(){
    $('#owl-demo2').owlCarousel({
    	items:1,
    	pagination:true,
    	singleItem: true,
    	navigation:true,
    	mouseDrag:true,
    	afterMove:homenext,
    	navigationText: ["上一个","下一个"]
    });
});
$(function(){
	   $('#left-menu').sidr({
		name: 'sidr-left',
		side: 'right'
	    });
	});
$('.owl_next').click(function(){
	 var owl = $(".owl-carousel").data('owlCarousel'); owl.next();
})
var eq=0;
function homenext(){
	eq++;
	if(eq==2)eq=0;
	$(".home_content").eq(eq).addClass("active").siblings(".home_content").removeClass('active')
}
//文苑之旅
var liwidth;
setInterval(function(){
		liwidth= $('.wyzl_content').children('ul').children('li').eq(0).width();
},300)
$(function(){
	$('.wyzl_nav li').click(function(){
		clearInterval(time1);
		var line_left=$(this).position().left+15;
		var liwidths=$(this).index()*liwidth;
		var indexs=$(this).index();
		$('.wyzl_nav .under_line').animate({left:line_left});
		$('.wyzl_content .content').animate({left:-liwidths});
		var time1=setInterval(function(){
			$('.wyzl_content .content').css('left',-liwidth*indexs);
		},300)
	})
})
setInterval(function(){
	var liwidth=$(window).width()*0.98
	$('.wyzl_content .content .lili').css('width',liwidth);
},300)
//文苑
$(function () {
		
		var filterList = {
		
			init: function () {
			
				// MixItUp plugin
				$('.wlzh .li_content').mixitup({
					targetSelector: '.li_contents',
					filterSelector: '.wlzh .li_nav .content_nav',
				});	
				$('.chayzx .li_content').mixitup({
					targetSelector: '.li_contents',
					filterSelector: '.chayzx .li_nav .content_nav',
				});	
				$('.chuyzx .li_content').mixitup({
					targetSelector: '.li_contents',
					filterSelector: '.chuyzx .li_nav .content_nav',
				});	
				$('.hcyy .li_content').mixitup({
					targetSelector: '.li_contents',
					filterSelector: '.hcyy .li_nav .content_nav',
				});	
				
			}
			

		};
		
		filterList.init();
	});	