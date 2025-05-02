/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio HTML5 Template
Theme URI: https://themejunction.net/html/gerold/demo/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio HTML5 Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
// Lenis Scroll Js
// Stacking Cards Js
// Sticky Header Js
// Hamburger Menu Js
// OnePage Active Js
// Testimonial Carousel Js
// Post Carousel Js
// Accordion Js
// Brand Slider Js
// Nice Select Js
// All Popup Js
// WoW Js
// Preloader Js
// Services Hover Js
// Portfolio Filter Js
// Portfolio Carousel Js
// Fun Fact Js
// Anim Js
// Contact Form Js

****************************************************/

(function ($) {
	"use strict";

	var windowSize = $(window).width();
	$(window).on("load", function () {
		if (windowSize > 991) {
			// Stacking Cards Js
			const cards = document.querySelectorAll(".stack-item");
			const stickySpace = document.querySelector(".stack-offset");
			const animation = gsap.timeline();
			let cardHeight;
			if (document.querySelector(".stack-item")) {
				function initCards() {
					animation.clear();
					cardHeight = cards[0].offsetHeight;
					//console.log("initCards()", cardHeight);
					cards.forEach((card, index) => {
						if (index > 0) {
							gsap.set(card, { y: index * cardHeight });
							animation.to(
								card,
								{ y: 0, duration: index * 0.5, ease: "none" },
								0
							);
						}
					});
				}
				initCards();
				ScrollTrigger.create({
					trigger: ".stack-wrapper",
					start: "top top",
					pin: true,
					end: () =>
						`+=${cards.length * cardHeight + stickySpace.offsetHeight}`,
					scrub: true,
					animation: animation,
					// markers: true,
					invalidateOnRefresh: true,
				});
				ScrollTrigger.addEventListener("refreshInit", initCards);
			}
		}
	});

	// Data Js
	$("[data-bg-image]").each(function () {
		$(this).css(
			"background-image",
			"url(" + $(this).attr("data-bg-image") + ")"
		);
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$(document).ready(function ($) {
		// Sticky Header Js

		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".tj-header-area.header-sticky").addClass("sticky");
				$(".tj-header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".tj-header-area.header-sticky").addClass("sticky-out");
					$(".tj-header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".tj-header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		// Meanmenu Js
		$("#headerMenu").meanmenu({
			meanMenuContainer: ".mobile-menu",
			meanScreenWidth: "991",
			meanExpand: [
				"<i class='fa-light fa-plus'></i> <i class='fa-light fa-minus'></i>",
			],
		});

		// Hamburger Menu Js
		$(".menu-bar").on("click", function () {
			$(".menu-bar").toggleClass("menu-bar-toggeled");
			$(".mobile-menu").toggleClass("opened");
			$("body").toggleClass("overflow-hidden");
		});

		$(".mobile-menu ul li a")
			.not(".mean-expand")
			.on("click", function () {
			$(".menu-bar").removeClass("menu-bar-toggeled");
			$(".mobile-menu").removeClass("opened");
			$("body").removeClass("overflow-hidden");
		});

		// Portfolio Filter Js
		$(".portfolio-box").imagesLoaded(function () {
			var $grid = $(".portfolio-box").isotope({
				// options
				masonry: {
					columnWidth: ".portfolio-box .portfolio-sizer",
					gutter: ".portfolio-box .gutter-sizer",
				},
				itemSelector: ".portfolio-box .portfolio-item",
				percentPosition: true,
			});

			// filter items on button click
			$(".filter-button-group").on("click", "button", function () {
				$(".filter-button-group button").removeClass("active");
				$(this).addClass("active");

				var filterValue = $(this).attr("data-filter");
				$grid.isotope({ filter: filterValue });
			});
		});

		// Portfolio filter js
		$(".tj-project-4-wrappper").isotope({
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: ".tj-project-4-item",
				gutter: 125,
			},
		});
		$(".tj-project-4-wrappper").imagesLoaded(function () {
			var $grid = $(".tj-project-4-wrappper").isotope({
				itemSelector: ".tj-project-4-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".tj-project-4-item",
					gutter: 125,
				},
			});
		});

		// Portfolio Carousel Js
		$(".portfolio_gallery.owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			lazyLoad: true,
			center: true,
			// autoWidth: true,
			autoplayHoverPause: false,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 800,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				0: {
					items: 1,
					margin: 0,
				},
				768: {
					items: 2,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
			},
		});

		// Testimonial Carousel Js
		$(".testimonial-carousel.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});

		// Testimonial Carousel Js
		$(".testimonial-carousel-h5.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 1,
				},
				768: {
					items: 1,
				},
				992: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});

		// testimonial Slider Js
		if ($(".testimonial-slider-6").length > 0) {
			var testimonial = new Swiper(".testimonial-slider-6", {
				slidesPerView: 4,
				spaceBetween: 30,
				centeredSlides: true,
				loop: true,
				speed: 2000,
				autoplay: {
					delay: 2000,
				},
				navigation: {
					prevEl: ".testimonial-prev",
					nextEl: ".testimonial-next",
				},
				pagination: {
					el: ".testimonial-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 1.5,
					},
					992: {
						slidesPerView: 1.5,
					},
					1200: {
						slidesPerView: 2.5,
					},
					1440: {
						slidesPerView: 3.5,
					},
				},
			});
		}

		// Post Carousel Js
		$(".tj-post__gallery.owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			navText: [
				'<i class="fal fa-arrow-left"></i>',
				'<i class="fal fa-arrow-right"></i>',
			],
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3000,
		});

		// Services Slider Js
		if ($(".service-slider-8").length > 0) {
			var service = new Swiper(".service-slider-8", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				centeredSlides: true,
				speed: 2000,
				autoplay: {
					delay: 2000,
				},
				navigation: {
					prevEl: ".service-prev",
					nextEl: ".service-next",
				},
				pagination: {
					el: ".service-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					430: {
						slidesPerView: 1.2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
					1400: {
						slidesPerView: 3,
					},
				},
			});
		}

		// Project Slider Js
		var slider = new Swiper(".tj-project-9-active", {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			speed: 2000,
			autoplay: true,
			centeredSlides: true,
			navigation: {
				prevEl: ".tj-project-9-prev",
				nextEl: ".tj-project-9-next",
			},
			pagination: {
				el: ".tj-project-9-pagination",
				clickable: true,
			},
			breakpoints: {
				1200: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 1.5,
				},
				576: {
					slidesPerView: 1,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});

		// Home 7 testimonial Slider Js
		var testimonialSwiper = new Swiper(".tj-testimonial-7-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
			},
			speed: 3000,
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});


		// Home 9 testimonial Slider  Js
		var slider = new Swiper(".tj-testimonial-9-active", {
			direction: "vertical",
			slidesPerView: 1.8,
			spaceBetween: 30,
			centeredSlides: true,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 3000,
			},
		});

		// Home 10 testimonial Slider Js
		var testimonial = new Swiper(".tj-testimonial-10-active", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			centeredSlides: true,
			autoplay: {
				delay: 2000,
			},
			speed: 3000,
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".slider-next",
				prevEl: ".slider-prev",
			},
		});

		// Rating Js
		if ($(".fill-ratings span").length > 0) {
			var star_rating_width = $(".fill-ratings span").width();
			$(".star-ratings").width(star_rating_width);
		}

		// VenoBox Js
		if ($(".ig-gallery").length > 0) {
			new VenoBox({
				selector: ".ig-gallery",
				numeration: true,
				// infinigall: true,
				spinner: "pulse",
			});
		}

		if ($(".video-popup").length > 0) {
			new VenoBox({
				selector: ".video-popup",
				numeration: true,
				// infinigall: true,
				spinner: "pulse",
			});
		}

		// Accordion Js
		if ($(".accordion-item").length > 0) {
			$(".accordion-item .faq-title").on("click", function () {
				if ($(this).parent().hasClass("active")) {
					$(this).parent().removeClass("active");
				} else {
					$(this).parent().siblings().removeClass("active");
					$(this).parent().addClass("active");
				}
			});
		}

		// hover blog image Js
		const hoverItem = document.querySelectorAll(".anim-reveal-item");
		function moveImage(e, hoverItem, index) {
			const item = hoverItem.getBoundingClientRect();
			const x = e.clientX - item.x;
			const y = e.clientY - item.y;
			if (hoverItem.children[index]) {
				hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
			}
		}
		hoverItem.forEach((item, i) => {
			item.addEventListener("mousemove", e => {
				setInterval(moveImage(e, item, 1), 50);
			});
		});

		// Blog Hover animation Js
		function hoverWidget_animation() {
			let active_bg = $(".blog-wrapper-8 .active-bg");
			let element = $(".blog-wrapper-8 .current");
			$(".blog-wrapper-8 .blog-item").on("mouseenter", function () {
				let e = $(this);
				activeHover(active_bg, e);
			});
			$(".blog-wrapper-8").on("mouseleave", function () {
				element = $(".blog-wrapper-8 .current");
				activeHover(active_bg, element);
				element.closest(".blog-item").siblings().removeClass("mleave");
			});
			activeHover(active_bg, element);
		}
		hoverWidget_animation();

		function activeHover(active_bg, e) {
			if (!e.length) {
				return false;
			}
			let topOff = e.offset().top;
			let height = e.outerHeight();
			let menuTop = $(".blog-wrapper-8").offset().top;
			e.closest(".blog-item").removeClass("mleave");
			e.closest(".blog-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".blog-wrapper-8 .blog-item").on("click", function () {
			$(".blog-wrapper-8 .blog-item").removeClass("current");
			$(this).addClass("current");
		});

		// Sticky Card Js
        function stackAnimations() {
			const pineVanish = gsap.utils.toArray(".an-pine-vanish");
			pineVanish.forEach(item => {
			  gsap.to(item, {
				// opacity: 0,
				// scale: 0.9,
				// y: 10,
				scrollTrigger: {
					trigger: item,
					scrub: true,
					// start: "bottom bottom",
					start: "top",
					end: "bottom",
					pin: true,
					pinSpacing: false,
					markers: false,
					invalidateOnRefresh: true,
				},
					ease: "none",
			  	});
			});
		}
		
		// Initialize animations on page load
		stackAnimations();
	
		// Refresh ScrollTrigger on resize
		window.addEventListener("resize", () => {
		ScrollTrigger.refresh();
		});

		// Brand Slider Js
		if ($(".brand-slider").length > 0) {
			var brand = new Swiper(".brand-slider", {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: false,
				breakpoints: {
					320: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				},
			});
		}

		// Portfolio Slider js
		var portfolio = new Swiper(".portfolio-slider-5", {
			spaceBetween: 30,
			autoplay: {
				delay: 8500,
			},
			speed: 3000,
			pagination: {
				el: ".portfolio-pagination",
				clickable: true,
			},
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1.5,
				},
				992: {
					slidesPerView: 2.5,
				},
				1200: {
					slidesPerView: 2.5,
				},
				1400: {
					slidesPerView: 2.5,
				},
			},
		});

		// Testimonial Slider Js
		if ($(".tj-testimonial-slider").length > 0) {
			var brand = new Swiper(".tj-testimonial-slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: true,
				autoplay: {
					delay: 6000,
				},
				speed: 3000,
				pagination: {
					el: ".testimonial-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1,
					},
					640: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 3,
					},
				},
			});
		}

		// Testimonial Slider Js
		if ($(".tj-testimonial-slider8").length > 0) {
			var brand = new Swiper(".tj-testimonial-slider8", {
				slidesPerView: 3,
				spaceBetween: 30,
				active: true,
				loop: true,
				autoplay: {
					delay: 6000,
				},
				speed: 3000,
				pagination: {
					el: ".testimonial-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1.5,
					},
					768: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
				},
			});
		}

		// Marquee slider Js
		if ($(".maquee-slider-one").length > 0) {
			var swiper = new Swiper(".maquee-slider-one", {
				slidesPerView: "auto",
				spaceBetween: 80,
				loop: true,
				speed: 5000,
				breakpoints: {
					320: {
						spaceBetween: 40,
					},
					768: {
						spaceBetween: 40,
					},
					992: {
						spaceBetween: 40,
					},
					1024: {
						spaceBetween: 80,
					},
				},
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		if ($(".maquee-slider-two").length > 0) {
			var swiper = new Swiper(".maquee-slider-two", {
				slidesPerView: "auto",
				spaceBetween: 80,
				loop: true,
				speed: 5000,
				breakpoints: {
					320: {
						spaceBetween: 40,
					},
					992: {
						spaceBetween: 60,
					},
					1024: {
						spaceBetween: 80,
					},
				},
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		if ($(".maquee-slider-three").length > 0) {
			var swiper = new Swiper(".maquee-slider-three", {
				slidesPerView: "auto",
				spaceBetween: 50,
				loop: true,
				speed: 5000,
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		if ($(".maquee-slider-four").length > 0) {
			var swiper = new Swiper(".maquee-slider-four", {
				slidesPerView: "auto",
				spaceBetween: 0,
				freemode: true,
				centeredSlides: true,
				loop: true,
				speed: 5000,
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		// Marquee slider Js
		if ($(".maquee-slider-9").length > 0) {
			var swiper = new Swiper(".maquee-slider-9", {
				slidesPerView: "auto",
				spaceBetween: 20,
				centeredSlides: true,
				loop: true,
				speed: 5000,
				breakpoints: {
					320: {
						spaceBetween: 20,
					},
					768: {
						spaceBetween: 20,
					},
					992: {
						spaceBetween: 20,
					},
					1024: {
						spaceBetween: 20,
					},
				},
				allowTouchMove: false,
				autoplay: {
					delay: 1,
					disableOnInteraction: true,
				},
			});
		}

		// Nice Select Js
		$("select").niceSelect();

		// All Popup Js
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}

		$(".modal-popup").magnificPopup({
			type: "inline",
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: "auto",
			closeBtnInside: true,
			preloader: false,
			midClick: true,
			removalDelay: 300,
			mainClass: "popup-mfp",
		});
	});

	$(window).on("load", function () {
		// WoW Js
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();

		// Services Hover Js
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		$(".services-widget .service-item").on("click", function () {
			$(".services-widget .service-item").removeClass("current");
			$(this).addClass("current");
		});

		// Portfolio Filter Js
		function filter_animation() {
			var active_bg = $(".portfolio-filter .button-group .active-bg");
			var element = $(".portfolio-filter .button-group .active");
			$(".portfolio-filter .button-group button").on("click", function () {
				var e = $(this);
				activeFilterBtn(active_bg, e);
			});
			activeFilterBtn(active_bg, element);
		}
		filter_animation();

		function activeFilterBtn(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var leftOff = e.offset().left;
			var width = e.outerWidth();
			var menuLeft = $(".portfolio-filter .button-group").offset().left;
			e.siblings().removeClass("active");
			e.closest("button")
				.siblings()
				.addClass(".portfolio-filter .button-group");
			active_bg.css({ left: leftOff - menuLeft + "px", width: width + "px" });
		}

		// Fun Fact Js
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
		}

		// Side Bar Sticky Js
		if ($(".side-sticky").length > 0) {
			var sticky = new Sticky(".side-sticky");
		}

		// Rating Js
		if ($(".fill-ratings span").length > 0) {
			var star_rating_width = $(".fill-ratings span").width();
			$(".star-ratings").width(star_rating_width);
		}

		// Skillbar Js
		if ($(".progress_bar").length > 0) {
			$(document).ready(function () {
				progress_bar();
			});
			function progress_bar() {
				var speed = 30;
				var items = $(".progress_bar").find(".progress-item");
				items.appear(function () {
					var item = $(this).find(".progress");
					var itemValue = item.data("progress");
					var i = 0;
					var value = $(this);
					var count = setInterval(function () {
						if (i <= itemValue) {
							var iStr = i.toString();
							item.css({
								width: iStr + "%",
							});
							value.find(".item_value").html(iStr + "%");
						} else {
							clearInterval(count);
						}
						i++;
					}, speed);
				});
			}
		}

		// Anim Js
		const target = document.getElementById("anim");
		function splitTextToSpans(targetElement) {
			if (targetElement) {
				const text = targetElement.textContent;
				targetElement.innerHTML = "";
				for (let character of text) {
					const span = document.createElement("span");
					if (character === " ") {
						span.innerHTML = "&nbsp;";
					} else {
						span.textContent = character;
					}
					targetElement.appendChild(span);
				}
			}
		}
		splitTextToSpans(target);

		// accordion Js
		$(".accordion-list > li:nth-child(1)")
			.addClass("active")
			.find(".tj-service-5-accordion-wrap")
			.show();
		$(
			".accordion-list > li:not(:nth-child(1)) .tj-service-5-accordion-wrap"
		).hide();
		$(".accordion-list > li").click(function () {
			if ($(this).hasClass("active")) {
				$(this)
					.removeClass("active")
					.find(".tj-service-5-accordion-wrap")
					.slideUp();
			} else {
				$(".accordion-list > li.active .tj-service-5-accordion-wrap").slideUp();
				$(".accordion-list > li.active").removeClass("active");
				$(this)
					.addClass("active")
					.find(".tj-service-5-accordion-wrap")
					.slideDown();
			}
		});

		// Contact Form Js
		if ($("#contact-form").length > 0) {
			$("#contact-form").validate({
				rules: {
					conName: "required",
					conEmail: {
						required: true,
						email: true,
					},
				},
				messages: {
					conName: "Enter your name.",
					conEmail: "Enter a valid email.",
				},
				submitHandler: function (form) {
					// start ajax request
					$.ajax({
						type: "POST",
						url: "assets/mail/contact-form.php",
						data: $("#contact-form").serialize(),
						cache: false,
						success: function (data) {
							if (data == "Y") {
								$("#message_sent").modal("show");
								$("#contact-form").trigger("reset");
							} else {
								$("#message_fail").modal("show");
							}
						},
					});
				},
			});
		}
	});


	/*****************************************************************
================================= GSAP ====================================
********************************************************************/
	gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});

	// Lenis Scroll Js

	/*
	============================== Lenis Scroll Js =====================================
	*/
	const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add(time => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);

	/*
	============================== Preloader =====================================
	*/
	const svg = document.getElementById("preloaderSvg");

	const preTl = gsap.timeline({
		onComplete: startAnimationAfterPreloader,
	});

	const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

	preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
		delay: 1.5,
		y: -100,
		opacity: 0,
	});
	preTl
		.to(svg, {
			duration: 0.5,
			attr: { d: curve },
			ease: "power2.easeIn",
		})
		.to(svg, {
			duration: 0.5,
			attr: { d: flat },
			ease: "power2.easeOut",
		});
	preTl.to(".preloader", {
		y: -1500,
	});
	preTl.to(".preloader", {
		zIndex: -1,
		display: "none",
	});

	let svgText = document.querySelector(".hero-section .intro_text svg text");
	let heroAnimation = document.querySelector(".heroAnimation");

	function startAnimationAfterPreloader() {
		if (svgText) {
			// Add a class or directly apply styles to trigger the stroke animation
			svgText.classList.add("animate-stroke");
		}

		if (heroAnimation) {
			// Add a class or directly apply styles to trigger the stroke animation
			heroAnimation.classList.add("activeAnimation");
		}

		heroAreaAnimation();
	}

	/*
	============================== Hero 04 & 07 Animation =====================================
	*/
	function heroAreaAnimation() {
		let heroArea = $(".heroAnimation.activeAnimation");

		let hero4SubTitle = $(
			".activeAnimation .tj-hero-4-subtitle, .activeAnimation .tj-hero-7-thumb"
		);
		let hero4Title = $(
			".activeAnimation .tj-hero-4-title, .activeAnimation .tj-hero-7-content"
		);
		let hero4Thumb = $(
			".activeAnimation .tj-hero-4-bottom-thumb img, .activeAnimation .tj-hero-7-button"
		);
		let hero4Shape1 = $(
			".activeAnimation .tj-hero-4-bottom-thumb-shape-1, .activeAnimation .tj-feature-7-thumb"
		);
		let hero4Shape2 = $(
			".activeAnimation .tj-hero-4-bottom-thumb-shape-2, .activeAnimation .tj-feature-7-wrapper"
		);
		let hero4Reviews = $(".activeAnimation .tj-hero-4-bottom-reviews");
		let hero4Counter = $(".activeAnimation .tj-hero-4-bottom-counter");

		if (heroArea.length > 0) {
			const heroTl = gsap.timeline();

			if (hero4SubTitle.length > 0) {
				heroTl.from(hero4SubTitle, {
					y: 50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Title.length > 0) {
				heroTl.from(hero4Title, {
					y: 50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Thumb.length > 0) {
				heroTl.from(hero4Thumb, {
					y: 50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Shape1.length > 0) {
				heroTl.from(hero4Shape1, {
					x: 50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Shape2.length > 0) {
				heroTl.from(hero4Shape2, {
					x: -50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Reviews.length > 0) {
				heroTl.from(hero4Reviews, {
					x: -50,
					opacity: 0,
					duration: 0.5,
				});
			}
			if (hero4Counter.length > 0) {
				heroTl.from(hero4Counter, {
					x: 50,
					opacity: 0,
					duration: 0.5,
				});
			}
		}
	}


	//  button hover animation
	$('.tj-btn-rounded').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		$(this).find('.tj-btn-circle-dot').css({
			top: y,
			left: x
		});
	});
	$('.tj-btn-rounded').on('mouseout', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;
		$(this).find('.tj-btn-circle-dot').css({
			top: y,
			left: x
		});
	});



	/*
	============================== Title Animation =====================================
	*/

	// splitText
	if ($(".tj-char-animation").length > 0) {
		let char_come = gsap.utils.toArray(".tj-char-animation");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: "top 90%",
					end: "bottom 60%",
					scrub: false,
					markers: false,
					toggleActions: "play none none none",
				},
			});

			const itemSplitted = new SplitText(splitTextLine, {
				type: "chars, words",
			});
			gsap.set(splitTextLine, { perspective: 300 });
			itemSplitted.split({ type: "chars, words" });
			tl.from(itemSplitted.chars, {
				duration: 1,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05,
			});
		});
	}

	// Text Invert
	const split = new SplitText(".tj-text-invert", { type: "lines" });
	split.lines.forEach(target => {
		gsap.to(target, {
			backgroundPositionX: 0,
			ease: "none",
			scrollTrigger: {
				trigger: target,
				scrub: 1,
				start: "top 85%",
				end: "bottom center",
			},
		});
	});

	// line 3d
	let tj_title_anim = gsap.utils.toArray(".tj_title_anim");
	tj_title_anim.forEach(splitTextLine => {
		var delay_value = 0.5;
		if (splitTextLine.getAttribute("data-delay")) {
			delay_value = splitTextLine.getAttribute("data-delay");
		}
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 1.5,
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});

		const itemSplitted = new SplitText(splitTextLine, {
			type: "lines",
		});
		gsap.set(splitTextLine, {
			perspective: 400,
		});
		itemSplitted.split({
			type: "lines",
		});
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: delay_value,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});
})(jQuery);
