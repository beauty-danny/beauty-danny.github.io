$(document).ready(function(){
	$('.list_group_item1 h4').on('click',function(){
		$('.list_group_item1 .self_introduce').show();
		$('.list_group_item1 span:first-child').hide();
		$('.list_group_item1 span:last-child').show();
		return false;
	})	
	$('.list_group_item1 .self_introduce').on('click',function(){
		$('.list_group_item1 .self_introduce').hide();
		$('.list_group_item1 span:first-child').show();
		$('.list_group_item1 span:last-child').hide();
		return false;
	})
	$('.list_group_item2 h4').on('click',function(){
		$('.list_group_item2 .self_introduce').show();
		$('.list_group_item2 span:first-child').hide();
		$('.list_group_item2 span:last-child').show();
		return false;
	})	
	$('.list_group_item2 .self_introduce').on('click',function(){
		$('.list_group_item2 .self_introduce').hide();
		$('.list_group_item2 span:first-child').show();
		$('.list_group_item2 span:last-child').hide();
		return false;
	})	
	$('.list_group_item3 h4').on('click',function(){
		$('.list_group_item3 .self_introduce').show();
		$('.list_group_item3 span:first-child').hide();
		$('.list_group_item3 span:last-child').show();
	})	
	$('.list_group_item3 .self_introduce').on('click',function(){
		$('.list_group_item3 .self_introduce').hide();
		$('.list_group_item3 span:first-child').show();
		$('.list_group_item3 span:last-child').hide();
	})	
	$('.list_group_item4 h4').on('click',function(){
		$('.list_group_item4 .self_introduce').show();
		$('.list_group_item4 span:first-child').hide();
		$('.list_group_item4 span:last-child').show();
	})	
	$('.list_group_item4 .self_introduce').on('click',function(){
		$('.list_group_item4 .self_introduce').hide();
		$('.list_group_item4 span:first-child').show();
		$('.list_group_item4 span:last-child').hide();
	})
	$('.list_group_item5 h4').on('click',function(){
		$('.list_group_item5 .self_introduce').show();
		$('.list_group_item5 span:first-child').hide();
		$('.list_group_item5 span:last-child').show();
	})	
	$('.list_group_item5 .self_introduce').on('click',function(){
		$('.list_group_item5 .self_introduce').hide();
		$('.list_group_item5 span:first-child').show();
		$('.list_group_item5 span:last-child').hide();
	})
	// $.each('.list_group_item h4',function(){
	// 	$('.list_group_item .self_introduce').show();
	// 	$('.list_group_item span:first-child').hide();
	// 	$('.list_group_item span:last-child').show();
	// })		
	// $.each('.list_group_item table',function(){
	// 	$('.list_group_item .self_introduce').hide();
	// 	$('.list_group_item span:first-child').show();
	// 	$('.list_group_item span:last-child').hide();
	// })
})