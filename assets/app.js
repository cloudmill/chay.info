!function(e){function t(t){for(var i,o,r=t[0],l=t[1],c=t[2],u=0,f=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var l=n[r];0!==s[l]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},s={0:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([5,1]),n()}({13:function(e,t,n){var i,s,a;s=[n(0)],void 0===(a="function"==typeof(i=function(e){var t,n=navigator.userAgent,i=/iphone/i.test(n),s=/chrome/i.test(n),a=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each((function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())}))):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var r,l,c,d,u,f,p;if(!n&&this.length>0){var h=e(this[0]).data(e.mask.dataName);return h?h():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),r=e.mask.definitions,l=[],c=f=n.length,d=null,e.each(n.split(""),(function(e,t){"?"==t?(f--,c=e):r[t]?(l.push(new RegExp(r[t])),null===d&&(d=l.length-1),c>e&&(u=l.length-1)):l.push(null)})),this.trigger("unmask").each((function(){function h(){if(o.completed){for(var e=d;u>=e;e++)if(l[e]&&y[e]===v(e))return;o.completed.call(S)}}function v(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function m(e){for(;++e<f&&!l[e];);return e}function g(e,t){var n,i;if(!(0>e)){for(n=e,i=m(t);f>n;n++)if(l[n]){if(!(f>i&&l[n].test(y[i])))break;y[n]=y[i],y[i]=v(i),i=m(i)}w(),S.caret(Math.max(d,e))}}function k(){C(),S.val()!=j&&S.change()}function b(e,t){var n;for(n=e;t>n&&f>n;n++)l[n]&&(y[n]=v(n))}function w(){S.val(y.join(""))}function C(e){var t,n,i,s=S.val(),a=-1;for(t=0,i=0;f>t;t++)if(l[t]){for(y[t]=v(t);i++<s.length;)if(n=s.charAt(i-1),l[t].test(n)){y[t]=n,a=t;break}if(i>s.length){b(t+1,f);break}}else y[t]===s.charAt(i)&&i++,c>t&&(a=t);return e?w():c>a+1?o.autoclear||y.join("")===_?(S.val()&&S.val(""),b(0,f)):w():(w(),S.val(S.val().substring(0,a+1))),c?t:d}var S=e(this),y=e.map(n.split(""),(function(e,t){return"?"!=e?r[e]?v(t):e:void 0})),_=y.join(""),j=S.val();S.data(e.mask.dataName,(function(){return e.map(y,(function(e,t){return l[t]&&e!=v(t)?e:null})).join("")})),S.one("unmask",(function(){S.off(".mask").removeData(e.mask.dataName)})).on("focus.mask",(function(){var e;S.prop("readonly")||(clearTimeout(t),j=S.val(),e=C(),t=setTimeout((function(){w(),e==n.replace("?","").length?S.caret(0,e):S.caret(e)}),10))})).on("blur.mask",k).on("keydown.mask",(function(e){if(!S.prop("readonly")){var t,n,s,a=e.which||e.keyCode;p=S.val(),8===a||46===a||i&&127===a?(n=(t=S.caret()).begin,(s=t.end)-n==0&&(n=46!==a?function(e){for(;--e>=0&&!l[e];);return e}(n):s=m(n-1),s=46===a?m(s):s),b(n,s),g(n,s-1),e.preventDefault()):13===a?k.call(this,e):27===a&&(S.val(j),S.caret(0,C()),e.preventDefault())}})).on("keypress.mask",(function(t){if(!S.prop("readonly")){var n,i,s,o=t.which||t.keyCode,r=S.caret();t.ctrlKey||t.altKey||t.metaKey||32>o||!o||13===o||(r.end-r.begin!=0&&(b(r.begin,r.end),g(r.begin,r.end-1)),n=m(r.begin-1),f>n&&(i=String.fromCharCode(o),l[n].test(i))&&(function(e){var t,n,i,s;for(t=e,n=v(e);f>t;t++)if(l[t]){if(i=m(t),s=y[t],y[t]=n,!(f>i&&l[i].test(s)))break;n=s}}(n),y[n]=i,w(),s=m(n),a?setTimeout((function(){e.proxy(e.fn.caret,S,s)()}),0):S.caret(s),r.begin<=u&&h()),t.preventDefault())}})).on("input.mask paste.mask",(function(){S.prop("readonly")||setTimeout((function(){var e=C(!0);S.caret(e),h()}),0)})),s&&a&&S.off("input.mask").on("input.mask",(function(){var e=S.val(),t=S.caret();if(e.length<p.length){for(C(!0);t.begin>0&&!l[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<d&&!l[t.begin];)t.begin++;S.caret(t.begin,t.begin)}else{for(C(!0);t.begin<f&&!l[t.begin];)t.begin++;S.caret(t.begin,t.begin)}h()})),C()}))}})})?i.apply(t,s):i)||(e.exports=a)},5:function(e,t,n){"use strict";n.r(t),function(e){n(6);var t=n(1),i=n.n(t),s=n(2),a=n.n(s);n(8),n(13),e(document).ready((function(){}));var o=Math.max(document.documentElement.clientWidth,window.innerWidth||0);e(window).on("load",(function(){if(e(".loader").addClass("hidden"),setTimeout((function(){e(".loader").css("z-index",-9999)}),1e3),i.a.init(),o>767)new a.a(".rellax",{speed:2,center:!0,wrapper:null,vertical:!0,horizontal:!1});window.scrollTo(0,0)}))}.call(this,n(0))},6:function(e,t,n){},8:function(e,t,n){"use strict";n.r(t),function(e){n(9),n(10),n(11),n(12);var t=n(3),i=n.n(t),s=n(4),a=n.n(s),o=document.getElementById("range"),r=[document.getElementById("skip-value-lower"),document.getElementById("skip-value-upper")];function l(t,n){var i=e(t);i.length&&!i.is(n.target)&&0===i.has(n.target).length&&(i.removeClass("active"),e("body").removeClass("fixed"),e(".search--js").show(),e(".search--close").hide())}o&&(i.a.create(o,{start:[1200,3500],step:1,behaviour:"drag",connect:!0,range:{min:100,max:1e4},format:a()({decimals:0})}),o.noUiSlider.on("update",(function(e,t){r[t].value=e[t]})),r.forEach((function(e,t){e.addEventListener("change",(function(){o.noUiSlider.setHandle(t,this.value)})),e.addEventListener("keydown",(function(e){var n,i=o.noUiSlider.get(),s=Number(i[t]),a=o.noUiSlider.steps()[t];switch(e.which){case 13:o.noUiSlider.setHandle(t,this.value);break;case 38:!1===(n=a[1])&&(n=1),null!==n&&o.noUiSlider.setHandle(t,s+n);break;case 40:!1===(n=a[0])&&(n=1),null!==n&&o.noUiSlider.setHandle(t,s-n)}}))}))),e(document).ready((function(){d(),u(),c(),f(),e(".sent--js").click((function(){e(this).closest(".activeForm").hide(),e(this).closest(".activeForm").next().show()})),e(".anchor").on("click","a",(function(t){t.preventDefault();var n=e(this).attr("href"),i=e(n).offset().top;e("body,html").animate({scrollTop:i-120},1600,"easeOutQuart")})),e("[name=phone]").mask("+7 (999) 999-9999"),e(".popup-modal").magnificPopup({type:"inline",removalDelay:300,mainClass:"my-mfp-zoom-in",showCloseBtn:!1,callbacks:{open:function(){e(".slider-for").slick("setPosition"),e(".slider-navi").slick("setPosition")}}}),e(document).on("click",".popup-modal-dismiss",(function(t){t.preventDefault(),e.magnificPopup.close()})),e(".accordion").on("click",".accordion-header",(function(){e(this).toggleClass("active").next().slideToggle()})),e(".tabs-list").on("click",".tab",(function(){var t=e(this).attr("href"),n=e(this).position().left;return e(this).parent().find(".line").css({left:n}),e(this).closest(".tabs").find("> .tabs-list .tab").removeClass("active"),e(this).closest(".tabs").find("> .tabs-content").removeClass("show"),e(this).addClass("active"),e(t).addClass("show"),e(".designSlider--js").slick("setPosition"),!1}));var t,n=8;function i(t){return t.id&&t.element.value?e("<span>".concat(t.text,' <i class="').concat(t.element.value.toLowerCase(),'"></i></span>')):t.text}function s(e,t){var n=e.closest("tr").find(".counter--js"),i=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")}((n.data("price")*t).toFixed(2));n.find(".value").text("".concat(i," р."))}e(".filtering--js").on("click",".filtering-el",(function(){var t=e(this).data("count"),i=e(this).closest(".moreDetail--js"),s=i.find(".products__item").length;return i.find(".products__item").not(":lt("+t+")").hide(),e(".filtering--js .filtering-el").removeClass("active"),i.find(".products__item:lt("+t+")").slideDown(),"all"===t&&i.find(".products__item").slideDown(),t>=s?i.find(".showMore-body").slideUp():i.find(".showMore-body").slideDown(),n=t,e(this).addClass("active"),!1})),e(".showMore--js").click((function(){var t=e(this).closest(".moreDetail--js"),i=t.find(".products__item").length;return n=n+4<=i?n+4:i,t.find(".products__item:lt("+n+")").slideDown(),n>=i&&(e(this).parent().slideUp(),e(".filtering--js .filtering-el").removeClass("active"),e(".filtering--js .filtering-el:last-child").addClass("active")),!1})),e(".showText--js").click((function(){e(this).hide().prev().addClass("active")})),e(".tooltip--js").click((function(){return e(this).closest(".tooltipMain").find(".tooltipBody").toggleClass("active"),!1})),setTimeout((function(){e(".select-templating").select2({minimumResultsForSearch:1/0,containerCssClass:"templating",dropdownCssClass:"templating",closeOnSelect:!1,dropdownParent:".orders"}),e(".select-templating--nx").select2({minimumResultsForSearch:1/0,containerCssClass:"templating",dropdownCssClass:"templating--nx",templateResult:i,templateSelection:i})}),1e3),e(".select-templating").on("select2:opening",(function(){e(".select2-search__field").prop("readonly",!0)})),e(".select-templating").on("select2:select",(function(){var t=e(this).next().find(".select2-selection__rendered");t.children().length>1&&t.addClass("active")})),e(".select-templating").on("select2:unselect",(function(){var t=e(this).next().find(".select2-selection__rendered");t.children().length<2?t.removeClass("active"):t.addClass("active")})),e(".select-templating").on("select2:open",(function(){e(this).parent().addClass("current"),e(".select2-results").find(".selecting").remove();e(".select2-results").append("<div class='selecting'><div class='selectAll'>выбрать все</div><div class='clearAll'>очистить</div></div>")})),e(".select-templating").on("select2:close",(function(){e(this).parent().removeClass("current")})),e(document).on("click",".selectAll",(function(){var t=e(this).closest(".orders").find(".orders-el.current");console.log(t.find(".select-templating")),t.find(".select-templating > option").prop("selected","selected"),t.find(".select-templating").trigger("change"),t.find(".select-templating").select2("close"),t.find(".select2-selection__rendered").addClass("active")})),e(document).on("click",".clearAll",(function(){var t=e(this).closest(".orders").find(".orders-el.current");t.find(".select-templating").val(null).trigger("change"),t.find(".select-templating").select2("close"),t.find(".select2-selection__rendered").removeClass("active")})),e(".input__file-js").change((function(){e(".input__file-js").each((function(){var t=this.value.replace(/.*\\(.*)/,"$1");t=t.replace(/.*\/(.*)/,"$1"),e(this).parent().parent().find(".input__name-js").val(t),e(this).parent().find(".btn").text("Загружено ".concat(t))}))})),e(".input__number-js").change((function(t){var n=t.target.value;s(e(this),n)})),e(".input__quantity-js .inc").click((function(){var t=e(this).closest(".input__quantity-js").find("input"),n=t.data("th"),i=parseInt(t.val())-1;return i=i<1?1:i,t.val(n?"".concat(i," ").concat(n):i),t.change(),s(e(this),i),!1})),e(".input__quantity-js .dec").click((function(){var t=e(this).closest(".input__quantity-js").find("input"),n=t.data("th"),i=parseInt(t.val())+1;return i=i>999?1:i,t.val(n?"".concat(i," ").concat(n):i),t.change(),s(e(this),i),!1})),e(t=".input__number-js").each((function(){e(t).keydown((function(e){var t=e.charCode||e.keyCode||0;return 8==t||9==t||46==t||190==t||t>=37&&t<=40||t>=48&&t<=57||t>=96&&t<=105}))})),e(".designSlider--js").slick({slidesToScroll:1,slidesToShow:1,speed:1e3,dots:!0,arrows:!0,responsive:[{breakpoint:1100,settings:{}}]}),e(".search--js").click((function(){return e("body").addClass("fixed"),e(".searchBar").addClass("active"),e(this).hide(),e(".search--close").show(),!1})),e(".searchBar__close").click((function(){return e("body").removeClass("fixed"),e(".searchBar").removeClass("active"),e(".search--js").show(),e(".search--close").hide(),!1})),e(".range-templating").click((function(){e(this).addClass("active")})),e(".main-nav__toggle--js").click((function(){e(this).toggleClass("active"),e(".header").toggleClass("active"),e(".main-nav__collapse").toggleClass("active")}))})),e(document).mouseup((function(e){l(".searchBar.active",e),l(".range-templating.active",e),l(".tooltipBody.active",e)})),e(document).scroll((function(){e(this).scrollTop()>200?e(".header").addClass("fixed"):e(".header").removeClass("fixed")}));var c=function(){e(".mainSlider--js").slick({slidesToScroll:1,slidesToShow:1,speed:1e3,dots:!1,arrows:!0,fade:!0,infinite:!1,nextArrow:e(".slick-next--ma"),prevArrow:e(".slick-prev--ma"),responsive:[{breakpoint:1100,settings:{}}]})},d=function(){e(".catalogSlider--js").slick({slidesToScroll:1,slidesToShow:4,speed:1e3,dots:!1,arrows:!0,infinite:!1,nextArrow:e(".slick-next--ct"),prevArrow:e(".slick-prev--ct"),responsive:[{breakpoint:1250,settings:{slidesToShow:3}},{breakpoint:900,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1,variableWidth:!0}}]})},u=function(){var t=e(".clientsSlider--js"),n=e(".progress"),i=e(".slider__label");t.on("beforeChange",(function(e,t,s,a){var o=a/(t.slideCount-1)*100;n.css("background-size",o+"% 100%").attr("aria-valuenow",o),i.text(o+"% completed")})),t.slick({slidesToShow:2,slidesToScroll:1,variableWidth:!0,autoplay:!0,speed:1e3,dots:!1,arrows:!0,nextArrow:e(".slick-next--cl"),prevArrow:e(".slick-prev--cl"),responsive:[{breakpoint:500,settings:{slidesToShow:1}}]})},f=function(){e(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,nextArrow:e(".slick-next--ca"),prevArrow:e(".slick-prev--ca"),asNavFor:".slider-navi"}),e(".slider-navi").slick({slidesToShow:4,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!1,focusOnSelect:!0}),e(".linkDots").click((function(t){t.preventDefault();var n=e(this).data("slide");e(".slider-for").slick("slickGoTo",n-1)}))};e(".mainSlider--js").on("init setPosition",(function(){e(".slick-current").addClass("initSlide")})),e(".mainSlider--js").on("beforeChange",(function(){e(".slick-slide").removeClass("nextSlide"),e(".slick-slide").removeClass("nextSlide"),e(".slick-slide").removeClass("prevSlide"),e(".slick-current").addClass("prevSlide"),setTimeout((function(){e(".slick-current").addClass("nextSlide")}),300)})),e(".mainSlider--js").on("afterChange",(function(){e(".slick-slide.prevSlide").removeClass("prevSlide"),e(".slick-slide").removeClass("initSlide")})),e(window).on("resize orientationchange",(function(){e("mainSlider--js").slick("setPosition")}))}.call(this,n(0))}});