
$(document).ready(function() {

	//BURGER MENU
	if($(window).width() < 750) {
		$('.burger').on('click', function() {
			$('.logo, .login').addClass('menu-open');
			$('.login-forms').removeClass('login-open');
			$('.menu').fadeIn();
			$('body').css({'overflow':'hidden'});
		});
		$('.menu .close, .menu a, .logo .img, .login').on('click', function() {
			$('.logo, .login').removeClass('menu-open');
			$('.menu').fadeOut();
			$('body').removeAttr('style');
		});
	}

	//LOGIN
	$('.login').on('click', function() {
		$('.login-forms').toggleClass('login-open');
	});
	$(document).mouseup(function (e) {
		if ( !$('.login-forms, .login').is(e.target) // if the target of the click isn't the login forms container neither the login button (the latter already has a function above)...
			&& $('.login-forms').has(e.target).length === 0 ) // ... nor a descendant of the container
			{
				$('.login-forms').removeClass('login-open');
			};
	});
	$('.login-forms form').submit(function() {
		$('.login-forms').removeClass('login-open');
	});

	//MORE
	$('#more .button').on('click', function() {
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+1.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+2.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+3.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+4.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+5.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+6.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+7.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+8.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+9.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
		$('#more').before('<div class="row"><div class="cell"><div class="number orange">+10.</div></div><div class="cell"><div class="title">Another article</div><div><div class="upvote"><div class="button"><span></span></div><div class="votes">X</div></div><div class="comments"><span></span>X</div></div><span class="space"></span><div class="source"><span class="orange"></span>link</div><div class="author"><div><span class="line"></span><span class="pen orange"></span></div>by someone</div><div class="date"><div><span class="clock_hand"></span></div>Xh ago</div></div></div>');
	});

});