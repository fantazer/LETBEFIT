$(document).ready(function () {

	// watch window resize
	var currentSize = $(window).width()
	/*$(window).resize(function(){
		currentSize = $(window).width();
		return currentSize;
	});*/
	// watch window resize === end

	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isMofdalShow = true;
	};

	//openModal()

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();

		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});

	$('.modal-wrap').click(function(e){
		e.target.className === 'modal-wrap' ? closeModal() : false
	});

	//modals===end

	// fix top-menu
	(function () {
		var head = $('.header');
		var heightHeader = head.height();
		var doc = document.documentElement;
		var w = window;
		var prevScroll = w.scrollY || doc.scrollTop;
		var curScroll;
		var direction = 0;
		var prevDirection = 0;
		var checkScroll = function () {
			curScroll = w.scrollY || doc.scrollTop;
			if (curScroll > prevScroll) {
				direction = 2;
			} else if (curScroll < prevScroll) {
				direction = 1;
			} 
			if(curScroll < heightHeader){
				$('body').css('paddingTop', 0);
				head.removeClass('shrink')
			}
			if (direction !== prevDirection) {
				toggleHeader(direction, curScroll);
			}
			prevScroll = curScroll;
		}
		var toggleHeader = function(direction, curScroll) {
			if (direction === 2 && curScroll > heightHeader) {
				prevDirection = direction;
				$('body').css('paddingTop', 0);
				head.removeClass('shrink');
			} else if (direction === 1) {
				$('body').css('paddingTop', heightHeader);
				head.addClass('shrink');
				prevDirection = direction;
			}
		};
		$(window).scroll(function () {
			checkScroll()
		});
	})()

	var clearShrink = function(){
		$('body').css('paddingTop',0);
		head.removeClass('shrink');
	}
	// fix top-menu === end


	// toggle single
	$('.js-toggle').click(function(){
		$(this).toggleClass("active")
	})
	// toggle single === end

	// slide toggle
	$('.js-slide').click(function(){
		$(this).closest('.js-slide-wrap').find('.js-slide-cont').slideToggle(500);
	});
	// slide toggle === end

	// toggle class one from list
	var actionTick;
	(
		actionTick = function(){
				$('body').on('click','.js-tick',function(){
					var parent = $(this).closest('.js-tick-cont');
					parent.find('.js-tick').removeClass('active');
					$(this).addClass('active')
				});
			}
	)()
	// toggle class one from list === end

	//toggle class + neighbor
	$('.js-commutator-el').click(function(){
		var thisItem = $(this).data("item");
		var thisGroup = $(this).data("group") || false;
		var isEach = $(this).data("each") || false;
		var selector;
		$(this).toggleClass("active")
		if($('.js-commutator-cont').data('group')) {
			selector = $(".js-commutator-cont[data-group=" + thisGroup + "");
		}else{
			selector = $(".js-commutator-cont");
		}
		selector.each(function(){
			if($(this).data("item")=== thisItem){
				$(this).toggleClass('active');
			}else{
				isEach ? $(this).removeClass("active") : false
			}
		})
	})
	//toggle class + neighbor === end

	// switch
	$('.js-switch').click(function (e) {
		if(e.target.className!='style-input'){
				var typeItem = $(this).data("item");
				var groupItem = $(this).data("group");
				var selector = $('.js-switch[data-group=' + groupItem +']');
				var size = selector.size()
				selector.each(function () {
					$(this).removeClass("active");
				});
				$('.js-switch-cont').each(function () {
					if ($(this).data("group") === groupItem) {
						if ($(this).data("item") === typeItem) {
							if (size === 0) {
								$(this).toggleClass("hidden")
							} else {
								$(this).removeClass("hidden")
							}
						} else {
							$(this).addClass("hidden");
						}
					}
				});
				$(this).addClass("active");
		}
	});
	// switch === end

	// toggle program types list
	var actionTab;
	(
		actionTab = function(){
			$('body').on('click','.js-tab',function(){
				var current = $(this).index();
				var parent = $(this).closest('.js-tab-wrap')
				parent.find('.js-tab-cont').removeClass('active')
				parent.find('.js-tab-cont').eq(current).addClass('active')
			});
		}
	)()
	// toggle program types list  === end

	// accordion row toggle
	$('.js-accordion-head').click(function () {
		var current = $(this).closest('.js-accordion-el').index()
		$(this).closest('.js-accordion').find('.js-accordion-el').each(function(){
			if($(this).index()!=current){
				 $(this).find('.js-accordion-head').removeClass('active')
				 $(this).find('.js-accordion-content').slideUp('active')
			}else{
				 $(this).find('.js-accordion-content').slideToggle('active')
				 $(this).find('.js-accordion-head').toggleClass('active')
			}
		})
	});
	// accordion row toggle === end

	// dropdown
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu__el').click(function () {
		var parent = $(this).parents('.dropdown')
		parent.find('.dropdown-current__val').html($(this).html());
		parent.find('input').attr('value', $(this).data('value'));
	});
	// dropdown === end

	// animate placeholder
	$('.input').each(function(){
		var current = $(this);
		if(current.data('placeholder')){
		var dataString = "<span class='input-placeholder-val'>"+current.data('placeholder')+"</span>";
			current.after(dataString);
			if ($(this).val()){
				$(this).attr('data-empty', !this.value);
			}
		}
	});

	$('.input').on('input', function (e) {
		$(e.currentTarget).attr('data-empty', !e.currentTarget.value);
	});

	$('.input-placeholder-val').click(function(){
		$(this).parent().find('.input').focus(); //найти Input и повесить focus
	});
	// animate placeholder === end

	// === slick ===

	// slider pagination
	$('.js-slider-pagination').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	  var i = (currentSlide ? currentSlide : 0) + 1;
	  $(this).closest('.slider-wrap').find('.number-slide').text(i + ' / ' + slick.slideCount);
	});
	// slider pagination === end

	// main slider
	$('.slider-main').slick({
		slidesToShow: 1,
		speed: 800,
		dots:false,
		arrows:false,
		rows:0,
		//fade:true
	});
	// main slider === end

	// review slider
	$('.slider-review').slick({
		slidesToShow: 4,
		speed: 800,
		dots:false,
		arrows:false,
		rows:0,
		responsive: [
			{
				breakpoint: 1200,
					settings: {
						slidesToShow: 3.2,
						slidesToScroll: 1,
						infinite: false,
						arrows:false,
						dots: false,

				}
			},
			{
				breakpoint: 640,
					settings: {
						slidesToShow: 1.2,
						slidesToScroll: 1,
						infinite: false,
						arrows:false,
						dots: false,

				}
			}
		]
	});
	// review slider === end

	// === custom arrow el ===
	$('.js-control-right').click(function(){
		$(this).closest(".js-slider-wrap").find(".js-slider").slick('slickNext');
	});

	$('.js-control-left').click(function(){
		$(this).closest(".js-slider-wrap").find(".js-slider").slick('slickPrev');
	});
	// custom arrow el === end

	// === slick === end

	// animate scroll to id
	$(".js-scroll-to").mPageScroll2id({
		offset:0,
	});
	// animate scroll to id === end

	// drop click on contract
	$('.js-contract-el').click(function(){
		$(this).find('input[type="radio"]').prop('checked', true);
	});
	// drop click on contract === end*/

	// slide menu
	$('.js-slide-block-toggle').click(function (event) {
		$(".js-slide-block-toggle").not(this).removeClass('slide-block-toggle--open');
		var current = $(this).data("menu");
		$(".slide-block").each(function () {
			if ($(this).data("menu") === current) {
				$(this).toggleClass("slide-block--open")
			} else {
				$(this).removeClass("slide-block--open")
			}
		})
		$(this).toggleClass('slide-block-toggle--open');
	});
	// slide menu === end
	
	
	// toggle contract full view
	$('.js-config-head').click(function(){
		var parent = $(this).closest('.js-config');
		parent.toggleClass('active')
		parent.find('.js-contract-config-wrap').slideToggle();
	});
	// toggle contract full view === end

	// copy code
	$('.js-copy').click(function(){
		$(this).addClass('active')
		var valueCode = $(this).find('.js-copy-val')
		//$("body").append(valueCode);
		valueCode.select()
		document.execCommand("copy");
	});
	// copy code === end

	// animate sort
	var mixer = mixitup('.blog-list', {
			selectors: {
					target: '.blog-el'
			},
			animation: {
					duration: 500,
					effects: 'fade'
			}
	});
	// animate sort === end

	window.condition = {};
	window.condition.closeModal = closeModal
	window.condition.initModal = initModal


});
