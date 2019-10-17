//doesn't work  start
$('.menu') .on('click', function(){
	$(this) .toggleClass('active');
	//doesn't work end
	&('.overlay').toggleClass('menu-open');
});