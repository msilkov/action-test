$(document).ready(function () {
	$(".pravo-tv__slider").slick({
		centerMode: true,
		centerPadding: "60px",
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: false,
					centerPadding: "0",
					slidesToShow: 1,
				},
			},
		],
	});
});
