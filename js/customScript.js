$(document).ready(function() {

    (function() {
        var backToTop = $('a.backToTop, .main-footer .logo a');

        backToTop.on('click', function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 300);

            event.preventDefault();
        });

        $(window).on('scroll', function() {
            var self = $(this),
                height = self.height() / 8,
                top = self.scrollTop();

            if (top > height) {
                if (!backToTop.hasClass("show")) {
                    backToTop.addClass("show");
                }
            } else {
                backToTop.removeClass("show");
            }
        });
    })();
	//Back to top button
	
	(function() {
        if ($(".hero-wrapper").length) {
            $(".hero-wrapper").vide({
				'mp4': 'videos/bg-video',
				'webm': 'videos/bg-video',
				'ogv': 'videos/bg-video',
				'poster': 'images/bg-video'
				}, {
				position: '50% 50%',
				posterType: "jpg",
				resizing: true
			});
        }
    })();
	//Hero Video Background Using Vide.js plugin

	(function() {
        if ($("#logo-frame").length) {
            var logoOutline = $("#logo-frame").drawsvg({
				duration: 10000,
				reverse: false,
				callback: function() {
				}
			});
			
			logoOutline.drawsvg("animate");

			setTimeout(function() { 
				$(".logo-frame .logo").addClass("show");
			}, 1200);
        }
    })();
	//Animate the logo with drawsvg plugin

	(function() {
        $(window).on('scroll', function() {
            var self = $(this),
				top = self.scrollTop();

            if (top > 10) {
                $(".main-nav").addClass("shrink");
			} else if(top <= 10) {
				$(".main-nav").removeClass("shrink");
            }
        });
    })();
	//Shrink Header when scroll

	(function () {
		$(".main-nav a").on("click", function (event) {
			event.preventDefault();

			$(this).closest(".main-nav").find("li").removeClass("active");
			$(this).closest("li").addClass("active");
			
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$("html, body").removeClass("show-mobile-nav");

				if (window.matchMedia('(max-width: 736px)').matches) {
					if($(this).html() == 'Build A Box') {
						$('html, body').animate({
							scrollTop: target.offset().top + 160
						}, 500, "easeInOutQuad");
						return false;
					} else {
						$('html, body').animate({
							scrollTop: target.offset().top
						}, 500, "easeInOutQuad");
						return false;
					}
				} else {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 500, "easeInOutQuad");
					return false;
				}
			}
		});
	})();
	// One Page Nav

	(function () {
		if ($(".steps").length) {
			$('.steps').slick({
				dots: false,
				autoplay: false,
				infinite: false,
				arrows: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				// fade: true,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1
			});

			$('.box-style').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.flowers-count').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.box-color').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});
			
			$('.rose-color').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.rose-sort').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.rose-gift').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.rose-recieve').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$('.payment-type').slick({
				dots: false,
				touchMove: false,
				draggable: false,
				swipe: false,
				slidesToShow: 4,
				prevArrow: '<a href="#" class="slick-prev"><img src="images/nav-arrow-left.svg" alt="Arrow Nav"></a>',
				nextArrow: '<a href="#" class="slick-next"><img src="images/nav-arrow-right.svg" alt="Arrow Nav"></a>',
				responsive: [{
						breakpoint: 1200,
						settings: {
							slidesToShow: 3
						}
					},
					{
						breakpoint: 900,
						settings: {
							slidesToShow: 2
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 1
						}
					}
				]
			});

			$(".box-style li > a, .flowers-count li > a, .box-color li > a, .rose-sort li > a, .rose-recieve li > a, .payment-type li > a").on("click", function (event) {
				event.preventDefault();
				$(this).closest("ul").find("li a").removeClass("selected");
				$(this).addClass("selected");

				$(this).closest(".step").find(".next-step").show().addClass("flipInX");
			});

			var i = 0;

			$(".rose-color li > a").on("click", function (event) {
				event.preventDefault();

				
				if($(this).hasClass("selected")) {
					$(this).removeClass("selected");
					i--;

					if(i == 0) {
						$(this).closest(".step").find(".next-step").show().addClass("flipOutX");
					}
				} else {
					if(i < 3) {
						$(this).addClass("selected");
						$(this).closest(".step").find(".next-step").show().removeClass("flipOutX").addClass("flipInX");
						i++;
					}
				}
			});


			$(".rose-gift li > a").on("click", function (event) {
				event.preventDefault();

				if($(this).hasClass("selected")) {
					$(this).removeClass("selected");

					if(!$(".rose-gift li").find("a.selected").length) {
						$(this).closest(".step").find(".next-step").show().addClass("flipOutX");
						$(".skip").show();
					}
				} else {
					$(this).addClass("selected");
					$(this).closest(".step").find(".next-step").show().removeClass("flipOutX").addClass("flipInX");
					$(".skip").hide();
				}
			});

			$(".payment-type li > a").on("click", function (event) {
				event.preventDefault();
				$(this).closest("ul").find("li a").removeClass("selected");
				$(this).addClass("selected");

				if($(this).hasClass("online-payment")) {
					$(".bank-note").show();
					$(this).closest(".step").find(".next-step").removeClass("flipInX").addClass("flipOutX");

					$(".bank-note input[type='checkbox']").change(function (event) {
						event.stopPropagation();
						if (this.checked) {
							$(this).closest(".step").find(".next-step").show().removeClass("flipOutX").addClass("flipInX");
						} else {
							$(this).closest(".step").find(".next-step").removeClass("flipInX").addClass("flipOutX");
						}
					});

				} else {
					$(".bank-note").hide();
					$(".bank-note input[type='checkbox']").prop("checked", false);

					// Here you can handle the payment process
					$(this).closest(".step").find(".next-step").show().removeClass("flipOutX").addClass("flipInX");
				}
				
			});

			$(".skip a").on("click", function (event) {
				event.preventDefault();
				skipToStep(7);
			});

			$(".choose-payment").on("click", function (event) {
				event.preventDefault();
				$(".steps").slick('slickNext');
			});

			$(".error .message a").on("click", function (event) {
				event.preventDefault();
				$(".steps").slick('slickGoTo', 11, false);
			});

			$(".next-step > a").on("click", function (event) {
				event.preventDefault();
				$(".steps").slick('slickNext');
				$(".back-step").show();
			}); //Next Button

			$(".back-step").on("click", function(event) {
				event.preventDefault();
				var currentSlide = $('.steps').slick('slickCurrentSlide');
				$(".steps").slick('slickPrev');
				if(currentSlide === 1) {
					$(".back-step").hide();
				}
			});
			// Back Button
		}
	})();
	//Build A Box Steps

	(function () {
		$(".card-content form").validate({
			errorElement: "span",
			submitHandler: function(form) {
				$(".steps").slick('slickNext');
			}
		}); //card info

		$(".contact-info form").validate({
			errorElement: "span",
			rules: {
				email: {
					email: true
				},
				mobileNumber: {
					number: true
				}
			},
			submitHandler: function(form) {
				$(".steps").slick('slickNext');
			}
		}); //contact info

		$(".recipient-info form").validate({
			errorElement: "span",
			rules: {
				email: {
					email: true
				},
				mobileNumber: {
					number: true
				}
			},
			submitHandler: function(form) {
				$(".steps").slick('slickNext');
			}
		}); //recipient info

		$(".recipient-address form").validate({
			errorElement: "span",
			submitHandler: function(form) {
				$(".steps").slick('slickNext');
			}
		}); //recipient address
	})();
	//Validate the forms
});

function skipToStep(stepNum) {
	$(".steps").slick('slickGoTo', stepNum, false);
} //skipToStep
