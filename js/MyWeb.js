$(document).ready(function(){
	var n=0;
	var next=0;
	var width=$('.item').width();
	console.log($('.item'))
	var t=setInterval(move,3000)
	function move(){
		next=n+1;
		if(next>=$('.item .banner_item').length){
			next=0;
		}
		$('.item .banner_item').eq(next).css("left",width).end().eq(n).animate({left:-width}).end().eq(next).animate({left:0});
		$('.item .list').eq(n).css('background','rgba(0,0,0,0.5)').end().eq(next).css('background','#fff');
		n=next;
	}
	$('#banner').mouseover(function(){
		clearInterval(t);
	}).end().mouseout(function(){
		t=setInterval(move,3000);
	})
	$('.right').click(function(){
		move();
	})
	
	$('.left').click(function(){
		next=n-1;
		if(next<0){
			next=$('.banner_item').length-1;
		}
		$('.banner_item').eq(next).css("left",-width+"px").end().eq(n).animate({left:width}).end().eq(next).animate({left:0});
		$('.list').eq(n).css('background','rgba(0,0,0,0.5)').end().eq(next).css('background','#fff');
		n=next;
	})
	$('.list').click(function(){
		var index=$(this).index();
		if(index>n){
			$('.banner_item').eq(index).css("left",width+"px").end().eq(n).animate({left:-width}).end().eq(index).animate({left:0});
			$('.list').eq(n).css('background','rgba(0,0,0,0.5)').end().eq(index).css('background','#fff');
			n=index;
		}else if(index<n){
			$('.banner_item').eq(index).css("left",-width+"px").end().eq(n).animate({left:width}).end().eq(index).animate({left:0});
			$('.list').eq(n).css('background','rgba(0,0,0,0.5)').end().eq(index).css('background','#fff');
			n=index;
		}
		
	})
})
// 
$(document).ready(function(){
	$('.foot_text .a1').hover(function(){
		$('.foot .kuang1').css('display','block');
	},function(){
		$('.foot .kuang1').css('display','none');
	})
})
$(document).ready(function(){
	$('.foot_text .a2').hover(function(){
		$('.foot .kuang2').css('display','block');
	},function(){
		$('.foot .kuang2').css('display','none');
	})
})