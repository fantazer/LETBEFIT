$(document).ready(function(){var s=($(window).width(),{isModalShow:!1,scrollPos:0}),i=window.innerWidth-$(document).width(),t=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),s.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-s.scrollPos,width:"100%",paddingRight:i})),s.isMofdalShow=!0},o=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:s.scrollPos,paddingRight:0}),$(window).scrollTop(s.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),s.isModalShow=!1},a=function(s){t(),$(".modal").each(function(){$(this).data("modal")===s?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var i=$(window).height();$(".modal-filter").height(i)};$(".modal-get").click(function(){var s=$(this).data("modal");a(s)}),$(".modal-close, .modal-hide").click(function(){o()}),$(".modal-wrap").click(function(s){"modal-wrap"===s.target.className&&o()}),function(){var s,i=$(".header"),t=i.height(),o=document.documentElement,a=window,e=a.scrollY||o.scrollTop,n=0,l=0,c=function(){s=a.scrollY||o.scrollTop,s>e?n=2:s<e&&(n=1),s<t&&($("body").css("paddingTop",0),i.removeClass("shrink")),n!==l&&d(n,s),e=s},d=function(s,o){2===s&&o>t?(l=s,$("body").css("paddingTop",0),i.removeClass("shrink")):1===s&&($("body").css("paddingTop",t),i.addClass("shrink"),l=s)};$(window).scroll(function(){c()})}();$(".js-toggle").click(function(){$(this).toggleClass("active")}),$(".js-slide").click(function(){$(this).closest(".js-slide-wrap").find(".js-slide-cont").slideToggle(500)});var e;(e=function(){$(".js-tick").click(function(){var s=$(this).closest(".js-tick-cont");s.find(".js-tick").removeClass("active"),$(this).addClass("active"),console.log(".js-tick")})})(),$(".js-commutator-el").click(function(){var s,i=$(this).data("item"),t=$(this).data("group")||!1,o=$(this).data("each")||!1;$(this).toggleClass("active"),s=$(".js-commutator-cont").data("group")?$(".js-commutator-cont[data-group="+t):$(".js-commutator-cont"),s.each(function(){$(this).data("item")===i?$(this).toggleClass("active"):!!o&&$(this).removeClass("active")})}),$(".js-switch").click(function(s){if("style-input"!=s.target.className){var i=$(this).data("item"),t=$(this).data("group"),o=$(".js-switch[data-group="+t+"]"),a=o.size();o.each(function(){$(this).removeClass("active")}),$(".js-switch-cont").each(function(){$(this).data("group")===t&&($(this).data("item")===i?0===a?$(this).toggleClass("hidden"):$(this).removeClass("hidden"):$(this).addClass("hidden"))}),$(this).addClass("active")}});var n;(n=function(){$(".js-tab").click(function(){var s=$(this).index();console.log(".js-tab");var i=$(this).closest(".js-tab-wrap");i.find(".js-tab-cont").removeClass("active"),i.find(".js-tab-cont").eq(s).addClass("active")})})(),$(".js-accordion-head").click(function(){var s=$(this).closest(".js-accordion-el").index();$(this).closest(".js-accordion").find(".js-accordion-el").each(function(){$(this).index()!=s?($(this).find(".js-accordion-head").removeClass("active"),$(this).find(".js-accordion-content").slideUp("active")):($(this).find(".js-accordion-content").slideToggle("active"),$(this).find(".js-accordion-head").toggleClass("active"))})});var l={};$(".incr__nav").click(function(){l.parent=$(this).closest(".incr"),l.value=parseInt($(this).closest(".incr").find(".incr__val span").html()),l.state=$(this).closest(".incr").find(".incr__val span")}),$(".incr__minus").click(function(){--l.value,l.parent.hasClass("incr--one")&&(l.value=l.value<1?1:l.value),l.value=l.value<1?0:l.value,l.state.html(l.value)}),$(".incr__plus").click(function(){++l.value,l.value=l.value>100?100:l.value,l.state.html(l.value)}),$(".incr-btn__el").click(function(){$(this).closest(".incr-btn").addClass("incr-btn--active")}),$(".incr-btn .incr__minus").click(function(){1===l.value?$(this).closest(".incr-btn").removeClass("incr-btn--active"):""}),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu__el").click(function(){var s=$(this).parents(".dropdown");s.find(".dropdown-current__val").html($(this).html()),s.find("input").attr("value",$(this).data("value"))}),$(".input").each(function(){var s=$(this);if(s.data("placeholder")){var i="<span class='input-placeholder-val'>"+s.data("placeholder")+"</span>";s.after(i),$(this).val()&&$(this).attr("data-empty",!this.value)}}),$(".input").on("input",function(s){$(s.currentTarget).attr("data-empty",!s.currentTarget.value)}),$(".input-placeholder-val").click(function(){$(this).parent().find(".input").focus()}),$(".program-type").on("init reInit",function(s){e(),n()}),$(".js-slider-pagination").on("init reInit afterChange",function(s,i,t,o){var a=(t?t:0)+1;$(this).closest(".slider-wrap").find(".number-slide").text(a+" / "+i.slideCount)}),$(".slider-main").slick({slidesToShow:1,speed:800,dots:!1,arrows:!1,rows:0}),$(".slider-review").slick({slidesToShow:4,speed:800,dots:!1,arrows:!1,rows:0,responsive:[{breakpoint:1200,settings:{slidesToShow:3.2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}},{breakpoint:640,settings:{slidesToShow:1.2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}}]}),$(".js-control-right").click(function(){$(this).closest(".js-slider-wrap").find(".js-slider").slick("slickNext")}),$(".js-control-left").click(function(){$(this).closest(".js-slider-wrap").find(".js-slider").slick("slickPrev")}),$(".js-scroll-to").mPageScroll2id({offset:0}),$(".js-contract-el").click(function(){$(this).find('input[type="radio"]').prop("checked",!0)}),$(".js-slide-block-toggle").click(function(s){$(".js-slide-block-toggle").not(this).removeClass("slide-block-toggle--open");var i=$(this).data("menu");$(".slide-block").each(function(){$(this).data("menu")===i?$(this).toggleClass("slide-block--open"):$(this).removeClass("slide-block--open")}),$(this).toggleClass("slide-block-toggle--open")}),$(".js-config-head").click(function(){var s=$(this).closest(".js-config");s.toggleClass("active"),s.find(".js-contract-config-wrap").slideToggle()})});