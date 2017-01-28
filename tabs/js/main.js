$(document).ready(function(){
	var link = $('.tabs__control-link'),
		item = $('.tabs__item');

	link.on('click', function(event){
		event.preventDefault();

		var target = $(this),
			navItem = target.closest('.tabs__control-item')
			number = navItem.index();
		
	
		item.eq(number).addClass('active')
		.siblings().removeClass('active');
		navItem.addClass('active').siblings().removeClass('active')
		
	});

});