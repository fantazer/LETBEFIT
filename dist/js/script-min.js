$(document).ready(function(){var s=$("body"),i=$(window).width();$(window).resize(function(){return i=$(window).width()});var t={isModalShow:!1,scrollPos:0},e=window.innerWidth-$(document).width(),o=function(){$(".modal-layer").hasClass("modal-layer-show")||($(".modal-layer").addClass("modal-layer-show"),t.scrollPos=$(window).scrollTop(),$("body").css({overflowY:"hidden",top:-t.scrollPos,width:"100%",paddingRight:e})),t.isMofdalShow=!0},a=function(){$(".modal-layer").removeClass("modal-layer-show"),$("body").css({overflow:"",position:"",top:t.scrollPos,paddingRight:0}),$(window).scrollTop(t.scrollPos),$(".modal").addClass("modal-hide-animation"),setTimeout(function(){$(".modal").removeClass("modal-hide-animation"),$(".modal").removeClass("modal__show")},600),t.isModalShow=!1},l=function(s){o(),$(".modal").each(function(){$(this).data("modal")===s?$(this).addClass("modal__show"):$(this).removeClass("modal__show")});var i=$(window).height();$(".modal-filter").height(i)};$(".modal-get").click(function(){var s=$(this).data("modal");l(s)}),$(".modal-close, .modal-hide").click(function(){a()}),$(".modal-wrap").click(function(s){"modal-wrap"===s.target.className&&a()}),function(){var s,i=$(".header"),t=i.height(),e=document.documentElement,o=window,a=o.scrollY||e.scrollTop,l=0,n=0,c=function(){s=o.scrollY||e.scrollTop,s>a?l=2:s<a&&(l=1),s<t&&($("body").css("paddingTop",0),i.removeClass("shrink")),l!==n&&r(l,s),a=s},r=function(s,e){2===s&&e>t?(n=s,$("body").css("paddingTop",0),i.removeClass("shrink")):1===s&&($("body").css("paddingTop",t),i.addClass("shrink"),n=s)};$(window).scroll(function(){c()})}();s.on("click",".js-toggle",function(){$(this).toggleClass("active")}),s.on("click",".js-slide",function(){$(this).toggleClass("active"),$(this).closest(".js-slide-wrap").toggleClass("active").find(".js-slide-cont").slideToggle(500)});var n;(n=function(){$("body").on("click",".js-tick",function(){var s=$(this).closest(".js-tick-cont");s.find(".js-tick").removeClass("active"),$(this).addClass("active")})})(),s.on("click",".js-commutator-el",function(){var s,i=$(this).data("item"),t=$(this).data("group")||!1,e=$(this).data("each")||!1;$(this).toggleClass("active"),s=$(".js-commutator-cont").data("group")?$(".js-commutator-cont[data-group="+t):$(".js-commutator-cont"),s.each(function(){$(this).data("item")===i?$(this).toggleClass("active"):!!e&&$(this).removeClass("active")})}),s.on("click",".js-switch",function(s){if("style-input"!=s.target.className){var i=$(this).data("item"),t=$(this).closest(".js-switch-wrap").length;if(t<1){var e=$(this).data("group"),o=$(".js-switch[data-group="+e+"]"),a=o.size();o.each(function(){$(this).removeClass("active")}),$(".js-switch-cont").each(function(){$(this).closest(".js-switch-wrap").length;$(this).data("group")===e&&void 0!=$(this).data("group")?(console.log("inner"),$(this).data("item")===i?1===a?$(this).toggleClass("hidden"):$(this).removeClass("hidden"):$(this).addClass("hidden")):$(this).data("item")===i&&$(this).toggleClass("hidden")})}else{var l=$(this).closest(".js-switch-wrap");l.find(".js-switch").removeClass("active"),l.find(".js-switch-cont").each(function(){$(this).data("item")===i?$(this).removeClass("hidden"):$(this).addClass("hidden")})}$(this).addClass("active")}});var c;if((c=function(){$("body").on("click",".js-tab",function(){var s=$(this).index(),i=$(this).closest(".js-tab-wrap");i.find(".js-tab-cont").removeClass("active"),i.find(".js-tab-cont").eq(s).addClass("active")})})(),s.on("click",".js-accordion-head",function(s){var i=$(this).closest(".js-accordion-el").index();$(this).closest(".js-accordion").find(".js-accordion-el").each(function(){$(this).index()!=i?($(this).find(".js-accordion-head").removeClass("active"),$(this).find(".js-accordion-content").slideUp("active")):($(this).find(".js-accordion-content").slideToggle("active"),$(this).find(".js-accordion-head").toggleClass("active"))})}),$(".dropdown").click(function(){$(this).attr("tabindex",1).focus(),$(this).toggleClass("active"),$(this).find(".dropdown-menu").slideToggle(300)}),$(".dropdown").focusout(function(){$(this).removeClass("active"),$(this).find(".dropdown-menu").slideUp(300)}),$(".dropdown .dropdown-menu__el").click(function(){var s=$(this).parents(".dropdown");s.find(".dropdown-current__val").html($(this).html()),s.find("input").attr("value",$(this).data("value"))}),$(".input").each(function(){var s=$(this);if(s.data("placeholder")){var i="<span class='input-placeholder-val'>"+s.data("placeholder")+"</span>";s.after(i),$(this).val()&&$(this).attr("data-empty",!this.value)}}),$(".input").on("input",function(s){$(s.currentTarget).attr("data-empty",!s.currentTarget.value)}),$(".input-placeholder-val").click(function(){$(this).parent().find(".input").focus()}),$(".js-slider-pagination").on("init reInit afterChange",function(s,i,t,e){var o=(t?t:0)+1;$(this).closest(".slider-wrap").find(".number-slide").text(o+" / "+i.slideCount)}),$(".slider-main").slick({slidesToShow:1,speed:800,dots:!1,arrows:!1,rows:0}),$(".slider-lk").slick({slidesToShow:1,speed:800,dots:!1,arrows:!1,rows:0}),$(".slider-review").slick({slidesToShow:4,speed:800,dots:!1,arrows:!1,rows:0,responsive:[{breakpoint:1200,settings:{slidesToShow:3.2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}},{breakpoint:769,settings:{slidesToShow:2.2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}},{breakpoint:640,settings:{slidesToShow:1.2,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}}]}),$(".slider-press").slick({slidesToShow:6,speed:800,dots:!1,arrows:!1,rows:0,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}},{breakpoint:769,settings:{slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}},{breakpoint:640,settings:{slidesToShow:2.5,slidesToScroll:1,infinite:!1,arrows:!1,dots:!1}}]}),$(".js-control-right").click(function(){$(this).closest(".js-slider-wrap").find(".js-slider").slick("slickNext")}),$(".js-control-left").click(function(){$(this).closest(".js-slider-wrap").find(".js-slider").slick("slickPrev")}),$(".js-scroll-to").mPageScroll2id({offset:0}),s.on("click",".js-contract-el",function(s){$(this).find('input[type="radio"]').prop("checked",!0)}),s.on("click",".js-slide-block-toggle",function(s){$(".js-slide-block-toggle").not(this).removeClass("slide-block-toggle--open");var i=$(this).data("menu");$(".slide-block").each(function(){$(this).data("menu")===i?$(this).toggleClass("slide-block--open"):$(this).removeClass("slide-block--open")}),$(this).toggleClass("slide-block-toggle--open")}),s.on("click",".js-config-head",function(s){var i=$(this).closest(".js-config");i.toggleClass("active"),i.find(".js-contract-config-wrap").slideToggle()}),$(".js-copy").click(function(){$(this).addClass("active");var s=$(this).find(".js-copy-val");s.select(),document.execCommand("copy")}),$(".blog-list").length>0){mixitup(".blog-list",{selectors:{target:".blog-el"},animation:{duration:500,effects:"fade"}})}$(".fancybox").fancybox(),$(".upload-btn").change(function(){if(console.log("img"),this.files&&this.files[0]){$(".upload-img").append('<div class="upload-img__el" onclick="this.parentNode.removeChild(this);"></div>');var s=$(".upload-img .upload-img__el:last"),i=new FileReader;i.onload=function(){s.attr("style"," background-image:url( "+i.result+") ")},i.readAsDataURL(this.files[0])}}),$(".upload-img__el").click(function(){console.log("remove"),$(this).remove()}),i>1025&&$(".js-horizontal-scroll").mousewheel(function(s,i){return(this.scrollLeft-=40*i)!=this.scrollLeft});var r=function(s){s.find(".js-history-edit").removeClass("active"),s.find(".btn-menu").slideUp(200)};s.on("click",".js-history-edit",function(){var s=$(this),i=$(".js-history-edit").not(this);i.removeClass("active"),i.closest(".btn-menu-wrap").find(".btn-menu").slideUp(200),s.toggleClass("active"),s.closest(".btn-menu-wrap").find(".btn-menu").slideToggle(200)}),s.on("click",".btn-menu__el",function(s){var i=$(this).closest(".btn-menu-wrap");r(i)}),$(document).mouseup(function(s){var i=$(".btn-menu-wrap");i.is(s.target)||0!==i.has(s.target).length||r(i)}),$(".chart").circleProgress({animation:!0,size:160,startAngle:-1.6,lineCap:"round",thickness:10,fill:"white",emptyFill:"#ffffff80"}),s.on("click",".history-panel-toggle",function(){$(this).closest(".history-list-el").find(".history-wrap").slideToggle()});var d={};if($(".incr__nav").click(function(){d.parent=$(this).closest(".incr"),d.value=parseInt($(this).closest(".incr").find(".incr__val span").html()),d.state=$(this).closest(".incr").find(".incr__val span")}),$(".incr__minus").click(function(){--d.value,d.parent.hasClass("incr--one")&&(d.value=d.value<1?1:d.value),d.value=d.value<1?0:d.value,d.state.html(d.value)}),$(".incr__plus").click(function(){++d.value,d.value=d.value>100?100:d.value,d.state.html(d.value)}),$(".incr--single .incr__nav").click(function(){var s=$(this).closest(".incr--single");s.hasClass("incr--one")?d.value>1?s.addClass("incr--single-active"):s.removeClass("incr--single-active"):d.value?s.addClass("incr--single-active"):s.removeClass("incr--single-active")}),$(".rating").each(function(){var s=1*$(this).data("size"),i=100*s/5+"%";$(this).find(".rating--fill").css("width","calc("+i+" - 2.5px")}),$(".js-sale-range").length){var h=$(".js-sale-range").data("config"),u=$(".js-sale-calc-total__val"),f=$(".js-sale-calc-total__cost");$(".js-sale-range").ionRangeSlider({prefix:"<span class='msg-range-icon'><svg class='icon'><use xlink:href='#userGroup'></use></svg></span>От ",postfix:"-х",from:2,to_fixed:!0,onChange:function(s){console.log(s.from_pretty),h.forEach(function(i){i.value==s.from_pretty&&(u.text(i.sale),f.text(i.cost))})}})}if(s.on("click",".js-filter-result__el",function(){$(this).remove()}),s.on("click",".js-filter-list-el",function(){$(this).closest(".js-filter-list").addClass("hide");var s=$(this).text();$(this).closest(".js-filter-wrap").find(".filter-result").append('<div class="filter-result__el js-filter-result__el"><span>'+s+'</span><svg class="icon"><use xlink:href="#close"></use></svg></div>')}),$(document).mouseup(function(s){var i=$(".filter-item");i.is(s.target)||0!==i.has(s.target).length||$(".filter-list").addClass("hide")}),s.on("click",".js-mark",function(){$(this).closest(".js-mark-wrap").find(".js-mark").removeClass("active"),$(this).addClass("active");var s=$(this).prevAll(".js-mark").addClass("active").length,i=$(this).closest(".js-mark-wrap").find(".js-mark-msg");s<1?i.removeClass("hidden"):i.addClass("hidden")}),$(".js-timer").length>0){var m=function(s,i){s=Math.abs(s)%100;var t=s%10;return s>10&&s<20?i[2]:t>1&&t<5?i[1]:1==t?i[0]:i[2]},v=$(".js-timer").data("time"),g=new Date(v);g=Date.parse(g)/1e3;var p=function(){var s=new Date;s=Date.parse(s)/1e3;var i=g-s,t=Math.floor(i/86400),e=Math.floor((i-86400*t)/3600),o=Math.floor((i-86400*t-3600*e)/60),a=Math.floor(i-86400*t-3600*e-60*o);e<"10"&&(e="0"+e),o<"10"&&(o="0"+o),a<"10"&&(a="0"+a),1*t<0?$(".js-promo-cont").addClass("hidden"):"",$(".js-timer__el-day").html(t),$(".js-timer__el-day-name").html(m(t,["день","дня","дней"])),$(".js-timer__el-hour").html(e),$(".js-timer__el-hour-name").html(m(e,["час","часа","часов"])),$(".js-timer__el-min").html(o),$(".js-timer__el-min-name").html(m(o,["минута","минуты","минут"])),$(".js-timer__el-sec").html(a),$(".js-timer__el-sec-name").html(m(a,["секунда","секунды","секунд"])),$(".timer-dot").toggleClass("hideOpacity")};setInterval(function(){p()},1e3)}$(".paralax-el").length>0&&i>1023&&$(window).scroll(function(){$(".paralax-el").each(function(){var s=-$(window).scrollTop()/$(this).data("depth")*1;$(this).css({"-webkit-transform":"translate3d(0px, "+s+"%, 100px)"})})}),window.condition={},window.condition.closeModal=a,window.condition.initModal=l});