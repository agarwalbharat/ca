/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
if ( typeof window['magnificPopup'] !== 'function' ) {
    (function(e){"use strict"; var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;r.length>a;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,T("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);
}

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
if ( typeof window['imagesLoaded'] !== 'function' ) {
    (function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
}

// Generated by CoffeeScript 1.4.0
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
if (typeof jQuery.fn.waypoint === 'undefined') {
    (function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(this,function(n,r){var i,o,l,s,f,u,a,c,h,d,p,y,v,w,g,m;i=n(r);c=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;a={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};t.data(u,this.id);a[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||c)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(c&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete a[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;r=n.extend({},n.fn[g].defaults,r);if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=t.data(w))!=null?o:[];i.push(this.id);t.data(w,i)}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=n(t).data(w);if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;if(e==null){e={}}if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=a[i.data(u)];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke(this,"disable")},enable:function(){return d._invoke(this,"enable")},destroy:function(){return d._invoke(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t,e){t.each(function(){var t;t=l.getWaypointsByElement(this);return n.each(t,function(t,n){n[e]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(a,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=a[n(t).data(u)])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=a[n(t).data(u)];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.load(function(){return n[m]("refresh")})})}).call(this);
}

// Generated by CoffeeScript 1.4.0
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){(function(t,n){if(typeof define==="function"&&define.amd){return define(["jquery","waypoints"],n)}else{return n(t.jQuery)}})(this,function(t){var n,e;n={wrapper:'<div class="sticky-wrapper" />',stuckClass:""};e=function(n,e){n.wrap(e.wrapper);n.each(function(){var n;n=t(this);n.parent().height(n.outerHeight());return true});return n.parent()};return t.waypoints("extendFn","sticky",function(r){var i,a;r=t.extend({},t.fn.waypoint.defaults,n,r);i=e(this,r);a=r.handler;r.handler=function(n){var e,i;e=t(this).children(":first");i=n==="down"||n==="right";e.toggleClass(r.stuckClass,i);if(a!=null){return a.call(this,n)}};i.waypoint(r);return this})})}).call(this);

if (typeof jQuery.event.special.debouncedresize == 'undefined') {
    /*
     * debouncedresize: special jQuery event that happens once after a window resize
     *
     * latest version and complete README available on Github:
     * https://github.com/louisremi/jquery-smartresize
     *
     * Copyright 2012 @louis_remi
     * Licensed under the MIT license.
     *
     * This saved you an hour of work?
     * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
     */
    (function($) {

        "use strict";

        var $event = $.event,
            $special,
            resizeTimeout;

        $special = $event.special.debouncedresize = {
            setup: function() {
                $( this ).on( "resize", $special.handler );
            },
            teardown: function() {
                $( this ).off( "resize", $special.handler );
            },
            handler: function( event, execAsap ) {
                // Save the context
                var context = this,
                    args = arguments,
                    dispatch = function() {
                        // set correct event type
                        event.type = "debouncedresize";
                        $event.dispatch.apply( context, args );
                    };

                if ( resizeTimeout ) {
                    clearTimeout( resizeTimeout );
                }

                execAsap ?
                    dispatch() :
                    resizeTimeout = setTimeout( dispatch, $special.threshold );
            },
            threshold: 150
        };

    })(jQuery);
}

/*!
 * Packery PACKAGED v1.2.2
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2013 Metafizzy
 */
if (typeof jQuery.fn.packery === 'undefined') {
    (function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,h=this.length;h>a;a++){var p=this[a],u=t.data(p,e);if(u)if(t.isFunction(u[o])&&"_"!==o.charAt(0)){var c=u[o].apply(u,s);if(void 0!==c)return c}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; "+"attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i(t.jQuery)})(window),function(t){function e(t){return RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i};"function"==typeof define&&define.amd?define("classie/classie",s):t.classie=s}(window),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t){function e(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=s.length;i>e;e++){var n=s[e];t[n]=0}return t}function n(t){function n(t){if("string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var n=r(t);if("none"===n.display)return i();var o={};o.width=t.offsetWidth,o.height=t.offsetHeight;for(var u=o.isBorderBox=!(!p||!n[p]||"border-box"!==n[p]),c=0,f=s.length;f>c;c++){var d=s[c],l=n[d];l=a(t,l);var y=parseFloat(l);o[d]=isNaN(y)?0:y}var g=o.paddingLeft+o.paddingRight,m=o.paddingTop+o.paddingBottom,v=o.marginLeft+o.marginRight,x=o.marginTop+o.marginBottom,b=o.borderLeftWidth+o.borderRightWidth,w=o.borderTopWidth+o.borderBottomWidth,_=u&&h,E=e(n.width);E!==!1&&(o.width=E+(_?0:g+b));var L=e(n.height);return L!==!1&&(o.height=L+(_?0:m+w)),o.innerWidth=o.width-(g+b),o.innerHeight=o.height-(m+w),o.outerWidth=o.width+v,o.outerHeight=o.height+x,o}}function a(t,e){if(o||-1===e.indexOf("%"))return e;var i=t.style,n=i.left,r=t.runtimeStyle,s=r&&r.left;return s&&(r.left=t.currentStyle.left),i.left=e,e=i.pixelLeft,i.left=n,s&&(r.left=s),e}var h,p=t("boxSizing");return function(){if(p){var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style[p]="border-box";var i=document.body||document.documentElement;i.appendChild(t);var n=r(t);h=200===e(n.width),i.removeChild(t)}}(),n}var o=t.getComputedStyle,r=o?function(t){return o(t,null)}:function(t){return t.currentStyle},s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],n):"object"==typeof exports?module.exports=n(require("get-style-property")):t.getSize=n(t.getStyleProperty)}(window),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(this),function(t){function e(t){"function"==typeof t&&(e.isReady?t():r.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==o.readyState;if(!e.isReady&&!i){e.isReady=!0;for(var n=0,s=r.length;s>n;n++){var a=r[n];a()}}}function n(n){return n.bind(o,"DOMContentLoaded",i),n.bind(o,"readystatechange",i),n.bind(t,"load",i),e}var o=t.document,r=[];e.isReady=!1,"function"==typeof define&&define.amd?(e.isReady="function"==typeof requirejs,define("doc-ready/doc-ready",["eventie/eventie"],n)):t.docReady=n(t.eventie)}(this),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t,e){function i(t,e){return t[a](e)}function n(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function o(t,e){n(t);for(var i=t.parentNode.querySelectorAll(e),o=0,r=i.length;r>o;o++)if(i[o]===t)return!0;return!1}function r(t,e){return n(t),i(t,e)}var s,a=function(){if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],i=0,n=t.length;n>i;i++){var o=t[i],r=o+"MatchesSelector";if(e[r])return r}}();if(a){var h=document.createElement("div"),p=i(h,"div");s=p?i:r}else s=o;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return s}):window.matchesSelector=s}(this,Element.prototype),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){for(var e in t)return!1;return e=null,!0}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function o(t,o,r){function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=r("transition"),p=r("transform"),u=h&&p,c=!!r("perspective"),f={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[h],d=["transform","transition","transitionDuration","transitionProperty"],l=function(){for(var t={},e=0,i=d.length;i>e;e++){var n=d[e],o=r(n);o&&o!==n&&(t[n]=o)}return t}();e(a.prototype,t.prototype),a.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.getSize=function(){this.size=o(this.element)},a.prototype.css=function(t){var e=this.element.style;for(var i in t){var n=l[i]||i;e[n]=t[i]}},a.prototype.getPosition=function(){var t=s(this.element),e=this.layout.options,i=e.isOriginLeft,n=e.isOriginTop,o=parseInt(t[i?"left":"right"],10),r=parseInt(t[n?"top":"bottom"],10);o=isNaN(o)?0:o,r=isNaN(r)?0:r;var a=this.layout.size;o-=i?a.paddingLeft:a.paddingRight,r-=n?a.paddingTop:a.paddingBottom,this.position.x=o,this.position.y=r},a.prototype.layoutPosition=function(){var t=this.layout.size,e=this.layout.options,i={};e.isOriginLeft?(i.left=this.position.x+t.paddingLeft+"px",i.right=""):(i.right=this.position.x+t.paddingRight+"px",i.left=""),e.isOriginTop?(i.top=this.position.y+t.paddingTop+"px",i.bottom=""):(i.bottom=this.position.y+t.paddingBottom+"px",i.top=""),this.css(i),this.emitEvent("layout",[this])};var y=c?function(t,e){return"translate3d("+t+"px, "+e+"px, 0)"}:function(t,e){return"translate("+t+"px, "+e+"px)"};a.prototype._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return this.layoutPosition(),void 0;var a=t-i,h=e-n,p={},u=this.layout.options;a=u.isOriginLeft?a:-a,h=u.isOriginTop?h:-h,p.transform=y(a,h),this.transition({to:p,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},a.prototype.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},a.prototype.moveTo=u?a.prototype._transitionTo:a.prototype.goTo,a.prototype.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},a.prototype._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},a.prototype._transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return this._nonTransition(t),void 0;var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var g=p&&n(p)+",opacity";a.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:g,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(f,this,!1))},a.prototype.transition=a.prototype[h?"_transition":"_nonTransition"],a.prototype.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},a.prototype.onotransitionend=function(t){this.ontransitionend(t)};var m={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};a.prototype.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=m[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},a.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(f,this,!1),this.isTransitioning=!1},a.prototype._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var v={transitionProperty:"",transitionDuration:""};return a.prototype.removeTransitionStyles=function(){this.css(v)},a.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},a.prototype.remove=function(){if(!h||!parseFloat(this.layout.options.transitionDuration))return this.removeElem(),void 0;var t=this;this.on("transitionEnd",function(){return t.removeElem(),!0}),this.hide()},a.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options;this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0})},a.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options;this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:{opacity:function(){this.isHidden&&this.css({display:"none"})}}})},a.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a}var r=document.defaultView,s=r&&r.getComputedStyle?function(t){return r.getComputedStyle(t,null)}:function(t){return t.currentStyle};"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o):(t.Outlayer={},t.Outlayer.Item=o(t.EventEmitter,t.getSize,t.getStyleProperty))}(window),function(t){function e(t,e){for(var i in e)t[i]=e[i];return t}function i(t){return"[object Array]"===c.call(t)}function n(t){var e=[];if(i(t))e=t;else if(t&&"number"==typeof t.length)for(var n=0,o=t.length;o>n;n++)e.push(t[n]);else e.push(t);return e}function o(t,e){var i=d(e,t);-1!==i&&e.splice(i,1)}function r(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}function s(i,s,c,d,l,y){function g(t,i){if("string"==typeof t&&(t=a.querySelector(t)),!t||!f(t))return h&&h.error("Bad "+this.constructor.namespace+" element: "+t),void 0;this.element=t,this.options=e({},this.options),this.option(i);var n=++v;this.element.outlayerGUID=n,x[n]=this,this._create(),this.options.isInitLayout&&this.layout()}function m(t,i){t.prototype[i]=e({},g.prototype[i])}var v=0,x={};return g.namespace="outlayer",g.Item=y,g.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e(g.prototype,c.prototype),g.prototype.option=function(t){e(this.options,t)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0,r=e.length;r>o;o++){var s=e[o],a=new i(s,this);n.push(a)}return n},g.prototype._filterFindItemElements=function(t){t=n(t);for(var e=this.options.itemSelector,i=[],o=0,r=t.length;r>o;o++){var s=t[o];if(f(s))if(e){l(s,e)&&i.push(s);for(var a=s.querySelectorAll(e),h=0,p=a.length;p>h;h++)i.push(a[h])}else i.push(s)}return i},g.prototype.getItemElements=function(){for(var t=[],e=0,i=this.items.length;i>e;e++)t.push(this.items[e].element);return t},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var t=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(t,e){var i,n=this.options[t];n?("string"==typeof n?i=this.element.querySelector(n):f(n)&&(i=n),this[t]=i?d(i)[e]:n):this[t]=0},g.prototype.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},g.prototype._getItemsForLayout=function(t){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i];o.isIgnored||e.push(o)}return e},g.prototype._layoutItems=function(t,e){function i(){n.emitEvent("layoutComplete",[n,t])}var n=this;if(!t||!t.length)return i(),void 0;this._itemsOn(t,"layout",i);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r],h=this._getItemLayoutPosition(a);h.item=a,h.isInstant=e||a.isLayoutInstant,o.push(h)}this._processLayoutQueue(o)},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];this._positionItem(n.item,n.x,n.y,n.isInstant)}},g.prototype._positionItem=function(t,e,i,n){n?t.goTo(e,i):t.moveTo(e,i)},g.prototype._postLayout=function(){var t=this._getContainerSize();t&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},g.prototype._getContainerSize=u,g.prototype._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},g.prototype._itemsOn=function(t,e,i){function n(){return o++,o===r&&i.call(s),!0}for(var o=0,r=t.length,s=this,a=0,h=t.length;h>a;a++){var p=t[a];p.on(e,n)}},g.prototype.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},g.prototype.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},g.prototype.stamp=function(t){if(t=this._find(t)){this.stamps=this.stamps.concat(t);for(var e=0,i=t.length;i>e;e++){var n=t[e];this.ignore(n)}}},g.prototype.unstamp=function(t){if(t=this._find(t))for(var e=0,i=t.length;i>e;e++){var n=t[e];o(n,this.stamps),this.unignore(n)}},g.prototype._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n(t)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var t=0,e=this.stamps.length;e>t;t++){var i=this.stamps[t];this._manageStamp(i)}}},g.prototype._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},g.prototype._manageStamp=u,g.prototype._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,n=d(t),o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},g.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},g.prototype.bindResize=function(){this.isResizeBound||(i.bind(t,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){i.unbind(t,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function t(){e.resize(),delete e.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var e=this;this.resizeTimeout=setTimeout(t,100)},g.prototype.resize=function(){var t=d(this.element),e=this.size&&t;e&&t.innerWidth===this.size.innerWidth||this.layout()},g.prototype.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},g.prototype.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},g.prototype.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},g.prototype.reveal=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.reveal()}},g.prototype.hide=function(t){var e=t&&t.length;if(e)for(var i=0;e>i;i++){var n=t[i];n.hide()}},g.prototype.getItem=function(t){for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];if(n.element===t)return n}},g.prototype.getItems=function(t){if(t&&t.length){for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],r=this.getItem(o);r&&e.push(r)}return e}},g.prototype.remove=function(t){t=n(t);var e=this.getItems(t);if(e&&e.length){this._itemsOn(e,"remove",function(){this.emitEvent("removeComplete",[this,e])});for(var i=0,r=e.length;r>i;i++){var s=e[i];s.remove(),o(s,this.items)}}},g.prototype.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="";for(var e=0,i=this.items.length;i>e;e++){var n=this.items[e];n.destroy()}this.unbindResize(),delete this.element.outlayerGUID,p&&p.removeData(this.element,this.constructor.namespace)},g.data=function(t){var e=t&&t.outlayerGUID;return e&&x[e]},g.create=function(t,i){function n(){g.apply(this,arguments)}return Object.create?n.prototype=Object.create(g.prototype):e(n.prototype,g.prototype),n.prototype.constructor=n,m(n,"options"),e(n.prototype.options,i),n.namespace=t,n.data=g.data,n.Item=function(){y.apply(this,arguments)},n.Item.prototype=new y,s(function(){for(var e=r(t),i=a.querySelectorAll(".js-"+e),o="data-"+e+"-options",s=0,u=i.length;u>s;s++){var c,f=i[s],d=f.getAttribute(o);try{c=d&&JSON.parse(d)}catch(l){h&&h.error("Error parsing "+o+" on "+f.nodeName.toLowerCase()+(f.id?"#"+f.id:"")+": "+l);continue}var y=new n(f,c);p&&p.data(f,t,y)}}),p&&p.bridget&&p.bridget(t,n),n},g.Item=y,g}var a=t.document,h=t.console,p=t.jQuery,u=function(){},c=Object.prototype.toString,f="object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName},d=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1};"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],s):t.Outlayer=s(t.eventie,t.docReady,t.EventEmitter,t.getSize,t.matchesSelector,t.Outlayer.Item)}(window),function(t){function e(){function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}return i.Rect=t,t.defaults={x:0,y:0,width:0,height:0},t.prototype.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},t.prototype.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,o=t.y+t.height;return n>this.x&&e>t.x&&o>this.y&&i>t.y},t.prototype.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,n=[],o=this.x+this.width,r=this.y+this.height,s=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),n.push(i)),o>s&&(i=new t({x:s,y:this.y,width:o-s,height:this.height}),n.push(i)),r>a&&(i=new t({x:this.x,y:a,width:this.width,height:r-a}),n.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),n.push(i)),n},t.prototype.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t}var i=t.Packery=function(){};"function"==typeof define&&define.amd?define("packery/js/rect",e):(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window),function(t){function e(t){function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}e.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=i[this.sortDirection]||i.downwardLeftToRight},e.prototype.pack=function(t){for(var e=0,i=this.spaces.length;i>e;e++){var n=this.spaces[e];if(n.canFit(t)){this.placeInSpace(t,n);break}}},e.prototype.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},e.prototype.placed=function(t){for(var i=[],n=0,o=this.spaces.length;o>n;n++){var r=this.spaces[n],s=r.getMaximalFreeRects(t);s?i.push.apply(i,s):i.push(r)}this.spaces=i,e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},e.mergeRects=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];if(n){var o=t.slice(0);o.splice(e,1);for(var r=0,s=0,a=o.length;a>s;s++){var h=o[s],p=e>s?0:1;n.contains(h)&&(t.splice(s+p-r,1),r++)}}}return t};var i={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e}if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],e);else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window),function(t){function e(t,e,i){var n=t("transform"),o=function(){e.Item.apply(this,arguments)};o.prototype=new e.Item;var r=o.prototype._create;return o.prototype._create=function(){r.call(this),this.rect=new i,this.placeRect=new i},o.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&n&&(this.element.style[n]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},o.prototype.dragMove=function(t,e){this.didDrag=!0;var i=this.layout.size;t-=i.paddingLeft,e-=i.paddingTop,this.positionPlaceRect(t,e)},o.prototype.dragStop=function(){this.getPosition();var t=this.position.x!==this.placeRect.x,e=this.position.y!==this.placeRect.y;this.needsPositioning=t||e,this.didDrag=!1},o.prototype.positionPlaceRect=function(t,e,i){this.placeRect.x=this.getPlaceRectCoord(t,!0),this.placeRect.y=this.getPlaceRectCoord(e,!1,i)},o.prototype.getPlaceRectCoord=function(t,e,i){var n=e?"Width":"Height",o=this.size["outer"+n],r=this.layout[e?"columnWidth":"rowHeight"],s=this.layout.size["inner"+n];e||(s=Math.max(s,this.layout.maxY),this.layout.rowHeight||(s-=this.layout.gutter));var a;if(r){r+=this.layout.gutter,s+=e?this.layout.gutter:0,t=Math.round(t/r);var h;h=this.layout.options.isHorizontal?e?"ceil":"floor":e?"floor":"ceil";var p=Math[h](s/r);p-=Math.ceil(o/r),a=p}else a=s-o;return t=i?t:Math.min(t,a),t*=r||1,Math.max(0,t)},o.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},o}"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],e):t.Packery.Item=e(t.getStyleProperty,t.Outlayer,t.Packery.Rect)}(window),function(t){function e(t,e,i,n,o,r){function s(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function a(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}var h=i.create("packery");return h.Item=r,h.prototype._create=function(){i.prototype._create.call(this),this.packer=new o,this.stamp(this.options.stamped);var t=this;this.handleDraggabilly={dragStart:function(e){t.itemDragStart(e.element)},dragMove:function(e){t.itemDragMove(e.element,e.position.x,e.position.y)},dragEnd:function(e){t.itemDragEnd(e.element)}},this.handleUIDraggable={start:function(e){t.itemDragStart(e.currentTarget)},drag:function(e,i){t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e){t.itemDragEnd(e.currentTarget)}}},h.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();var t=this.packer;this.options.isHorizontal?(t.width=Number.POSITIVE_INFINITY,t.height=this.size.innerHeight+this.gutter,t.sortDirection="rightwardTopToBottom"):(t.width=this.size.innerWidth+this.gutter,t.height=Number.POSITIVE_INFINITY,t.sortDirection="downwardLeftToRight"),t.reset(),this.maxY=0,this.maxX=0},h.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},h.prototype._getItemLayoutPosition=function(t){return this._packItem(t),t.rect},h.prototype._packItem=function(t){this._setRectSize(t.element,t.rect),this.packer.pack(t.rect),this._setMaxXY(t.rect)},h.prototype._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},h.prototype._setRectSize=function(t,i){var n=e(t),o=n.outerWidth,r=n.outerHeight,s=this.columnWidth+this.gutter,a=this.rowHeight+this.gutter;o=this.columnWidth?Math.ceil(o/s)*s:o+this.gutter,r=this.rowHeight?Math.ceil(r/a)*a:r+this.gutter,i.width=Math.min(o,this.packer.width),i.height=r},h.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},h.prototype._manageStamp=function(t){var e,i=this.getItem(t);if(i&&i.isPlacing)e=i.placeRect;else{var o=this._getElementOffset(t);e=new n({x:this.options.isOriginLeft?o.left:o.right,y:this.options.isOriginTop?o.top:o.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},h.prototype.sortItemsByPosition=function(){var t=this.options.isHorizontal?a:s;this.items.sort(t)},h.prototype.fit=function(t,e,i){var n=this.getItem(t);n&&(this._getMeasurements(),this.stamp(n.element),n.getSize(),n.isPlacing=!0,e=void 0===e?n.rect.x:e,i=void 0===i?n.rect.y:i,n.positionPlaceRect(e,i,!0),this._bindFitEvents(n),n.moveTo(n.placeRect.x,n.placeRect.y),this.layout(),this.unstamp(n.element),this.sortItemsByPosition(),n.isPlacing=!1,n.copyPlaceRectPosition())},h.prototype._bindFitEvents=function(t){function e(){n++,2===n&&i.emitEvent("fitComplete",[i,t])}var i=this,n=0;t.on("layout",function(){return e(),!0}),this.on("layoutComplete",function(){return e(),!0})},h.prototype.resize=function(){var t=e(this.element),i=this.size&&t,n=this.options.isHorizontal?"innerHeight":"innerWidth";i&&t[n]===this.size[n]||this.layout()},h.prototype.itemDragStart=function(t){this.stamp(t);var e=this.getItem(t);e&&e.dragStart()},h.prototype.itemDragMove=function(t,e,i){function n(){r.layout(),delete r.dragTimeout}var o=this.getItem(t);o&&o.dragMove(e,i);var r=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(n,40)},h.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},h.prototype.itemDragEnd=function(e){var i,n=this.getItem(e);if(n&&(i=n.didDrag,n.dragStop()),!n||!i&&!n.needsPositioning)return this.unstamp(e),void 0;t.add(n.element,"is-positioning-post-drag");var o=this._getDragEndLayoutComplete(e,n);n.needsPositioning?(n.on("layout",o),n.moveTo(n.placeRect.x,n.placeRect.y)):n&&n.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",o),this.layout()},h.prototype._getDragEndLayoutComplete=function(e,i){var n=i&&i.needsPositioning,o=0,r=n?2:1,s=this;return function(){return o++,o!==r?!0:(i&&(t.remove(i.element,"is-positioning-post-drag"),i.isPlacing=!1,i.copyPlaceRectPosition()),s.unstamp(e),s.sortItemsByPosition(),n&&s.emitEvent("dragItemPositioned",[s,i]),!0)}},h.prototype.bindDraggabillyEvents=function(t){t.on("dragStart",this.handleDraggabilly.dragStart),t.on("dragMove",this.handleDraggabilly.dragMove),t.on("dragEnd",this.handleDraggabilly.dragEnd)},h.prototype.bindUIDraggableEvents=function(t){t.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)
    },h.Rect=n,h.Packer=o,h}"function"==typeof define&&define.amd?define(["classie/classie","get-size/get-size","outlayer/outlayer","packery/js/rect","packery/js/packer","packery/js/item"],e):t.Packery=e(t.classie,t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window);
}

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
if ( typeof window['imagesLoaded'] !== 'function' ) {
    (function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
}

if (typeof jQuery.fn.tinyNav === 'undefined') {
    /*! http://tinynav.viljamis.com v1.2 by @viljamis */
    (function($,window,i){$.fn.tinyNav=function(options){var settings=$.extend({active:"selected",header:"",indent:"- ",label:"",place:""},options);return this.each(function(){i++;var $nav=$(this),namespace="tinynav",namespace_i=namespace+i,l_namespace_i=".l_"+namespace_i,$select=$("<select/>").attr("id",namespace_i).addClass(namespace+" "+namespace_i);if($nav.is("ul,ol")){if(settings.header!==""){$select.append($("<option/>").text(settings.header))}var options="";$nav.addClass("l_"+namespace_i).find("a").each(function(){if($.trim($(this).text())!=""){options+='<option value="'+$(this).attr("href")+'">';var j;for(j=0;j<$(this).parents("ul, ol").length-1;j++){options+=settings.indent}options+=$(this).text()+"</option>"}});$select.append(options);$select.change(function(){window.location.href=$(this).val()});settings.place.append($select)}})}})(jQuery,this,0);
}

function iv_cancelZoom() {
    "use strict";

    var d = document,
        viewport,
        content,
        maxScale = ',maximum-scale=',
        maxScaleRegex = /,*maximum\-scale\=\d*\.*\d*/;

    // this should be a focusable DOM Element
    if(!this.addEventListener || !d.querySelector) {
        return;
    }

    viewport = d.querySelector('meta[name="viewport"]');
    content = viewport.content;

    function changeViewport(event)
    {
        // http://nerd.vasilis.nl/prevent-ios-from-zooming-onfocus/
        viewport.content = content + (event.type == 'blur' ? (content.match(maxScaleRegex, '') ? '' : maxScale + 10) : maxScale + 1);
    }

    // We could use DOMFocusIn here, but it's deprecated.
    this.addEventListener('focus', changeViewport, true);
    this.addEventListener('blur', changeViewport, false);
}


jQuery.fn.cancelZoom = function() {
    return this.each(iv_cancelZoom);
};

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

/* Media Query Vars */

var _window_width = jQuery(window).width();

var iv_device_xs = false;
if( _window_width < 768 )
    iv_device_xs = true;

//console.log( iv_device_xs );

var iv_device_sm = false;
if( _window_width >= 768 && _window_width < 992 )
    iv_device_sm = true;

//console.log( iv_device_sm );

var iv_device_md = false;
if( _window_width >= 992 && _window_width < 1200 )
    iv_device_md = true;

//console.log( iv_device_md );

var iv_device_lg = false;
if( _window_width >= 1200)
    iv_device_lg = true;

/*
 *	Recalculate Sticky Wrapper Height
 */
function ivan_recalc_sticky_height() {
    "use strict";

    var _h = jQuery('.iv-layout.header').outerHeight( false );
    jQuery('.header-sticky-wrapper').css('height', _h + 'px');
}

/*!
 * Flexible Header Height
 *
 * Function used to turn header height half the actual size depending of Window Scroll
 *
 */
function ivan_fixed_header() {
    "use strict";

    if( jQuery('.header-fixed').length > 0 ) {

        var _animTopDest = '0px';

        // if( jQuery('#wpadminbar').length > 0 )
        // 	_animTopDest = '32px';

        imagesLoaded( jQuery('.header-fixed').find('.logo'), function() {

            var $headerFixed = jQuery('.header-fixed');

            var _logoHeight = $headerFixed.find('.logo img:visible').outerHeight();
            //console.log( _logoHeight );
            if(_logoHeight == 0) {
                setTimeout( function() { ivan_fixed_header(); }, 500 );
                return;
            }

            var _headerHeight = $headerFixed.outerHeight();
            //console.log( _headerHeight );

            var _class = '';
            if( $headerFixed.hasClass('light') )
                _class = 'light';

            if( $headerFixed.hasClass('dark') )
                _class = 'dark';

            var _foldHeight = -_logoHeight - 150;

            var _classFold = '';
            if( $headerFixed.hasClass('display-after-fold') ) {
                _classFold = 'display-after-fold';

                _foldHeight = -jQuery.waypoints('viewportHeight') + (_headerHeight - 1);
            }

            $headerFixed.waypoint('sticky', {
                wrapper: '<div class="sticky-wrapper header-sticky-wrapper" />',
                handler: function( direction ) {
                    if( direction == 'up' ) {

                        $headerFixed.css('top', '0px');
                        $headerFixed.addClass('not-stuck');

                        if( jQuery('.smooth-opening-holder').length > 0 ) {
                            jQuery('.smooth-opening-holder').removeClass('stuck-holder');
                        }

                        $headerFixed.find('.logo img').css({ maxHeight: 'inherit'});
                        $headerFixed.addClass( _class );
                        $headerFixed.addClass( _classFold );

                        if( $headerFixed.hasClass('hide-container') == true ) {
                            $headerFixed.find('.to-hide').css('display', 'block');
                            //ivan_recalc_sticky_height();
                        }

                        $headerFixed.parent('.sticky-wrapper').outerHeight(_headerHeight);
                        //console.log($headerFixed.parent('.sticky-wrapper').outerHeight());
                    }
                    else {

                        //$headerFixed.removeClass('not-stuck');

                        if( jQuery('.smooth-opening-holder').length > 0 ) {
                            jQuery('.smooth-opening-holder').removeClass('z-enabled');
                            jQuery('.smooth-opening-holder').addClass('stuck-holder');
                        }

                        $headerFixed.removeClass( _class );
                        $headerFixed.removeClass( _classFold );
                        //$headerFixed.css('opacity', '0');
                        $headerFixed.css('top', '-600px');

                        if( $headerFixed.hasClass('hide-container') == true ) {
                            $headerFixed.find('.to-hide').css('display', 'none');
                        }

                        if(_logoHeight > 0) {
                            $headerFixed.find('.logo img').css({ maxHeight: (_logoHeight * 0.8) + 'px'});
                        }

                        //$headerFixed.animate({ opacity: '1'}, 300);
                        $headerFixed.animate({ top: _animTopDest}, 1000);

                    }

                    ivan_fix_header_area_height();
                },
                offset: _foldHeight
            });

        }); // imagesLoaded Logic

    }

    // Or in aside menu case...
    if( jQuery('.aside-header-wrapper .fixed-height').length > 0 ) {

        var $headerFixed = jQuery('.aside-header-wrapper .fixed-height');

        $headerFixed.waypoint('sticky', {
            wrapper: '<div class="aside-sticky-wrapper aside-header-sticky-wrapper" />',
            stuckClass: 'aside-stuck'
        });

    }

}

/*!
 * Init Live Search
 *
 * Function used to enable live search effects
 *
 */
function ivan_live_search_init() {
    "use strict";
    var searchTopStyle = jQuery('.live-search.search-top-style'),
        searchfullScreen = jQuery('.live-search.search-full-screen-style'),
        searchfullScreenAlt = jQuery('.live-search.search-full-screen-alt-style'),
        formCloseBtn = jQuery('.live-search').find('.form-close-btn');

    jQuery('.live-search .trigger').click( function(e) {

        e.preventDefault();

        var _element = jQuery(this).siblings('.inner-wrapper');

        if ( jQuery(this).parents('.live-search').hasClass('search-top-style') == true ) {
            jQuery('#all-site-wrapper').css('top', jQuery(this).siblings('.inner-wrapper').outerHeight());
            if ( jQuery('.iv-layout.header.stuck').length ) {
                // jQuery('.iv-layout.header.stuck').addClass('top-search-active');
            };
        };

        _element.toggleClass('visible');

        if (!jQuery(this).parents('.iv-layout').hasClass('top-header') == true) {
            jQuery('.top-header').addClass('beneath');
        } else if (jQuery(this).parents('.iv-layout').hasClass('top-header') == true) {
            jQuery('.top-header').removeClass('beneath');
        }

        setTimeout(function(){
            _element.find('#s').focus().end()
        }, 300);

    });

    jQuery(window).on('scroll', function() {
        if ( searchTopStyle.length ) {
            if ( searchTopStyle.find('.inner-wrapper').hasClass('visible') ) {
                searchTopStyle.find('.inner-wrapper').removeClass('visible');
            };
        };
    });

    jQuery(document).mouseup( function(e) {

        var _element = jQuery('.inner-wrapper.visible');

        if (!_element.is(e.target) // if the target of the click isn't the container...
            && _element.has(e.target).length === 0 ) // ... nor a descendant of the container
        {

            if(jQuery(this).parents('.header.simple-left-right').length == 0) {
                if( _element.hasClass('visible') ) {
                    _element.removeClass('visible');
                }
            } else {
                if( _element.hasClass('visible') ) {
                    _element.removeClass('visible');
                }
            }
            if ( searchTopStyle.length ) {
                jQuery('#all-site-wrapper').css('top', 0);
                if ( jQuery('.iv-layout.header.stuck').length ) {
                    // jQuery('.iv-layout.header.stuck').animate({'padding-top': 0}, 300);
                };
            };
        }

    });

    formCloseBtn.on('click', function() {
        var _element = jQuery('.inner-wrapper.visible');
        _element.removeClass('visible');
        if ( jQuery('.iv-layout.header.stuck').length ) {
            // jQuery('.iv-layout.header.stuck').animate({'padding-top': 0}, 300);
        };
        setTimeout(function(){
            jQuery('.top-header').removeClass('beneath')
        }, 500);
    });

    if ( searchTopStyle.length ) {
        searchTopStyle.find('.form-close-btn').css('right', searchTopStyle.find('form').offset().left);
        formCloseBtn.on('click', function() {
            var _element = jQuery('.inner-wrapper.visible');
            _element.removeClass('visible');
            jQuery('#all-site-wrapper').css('top', 0);
        });
    };


    jQuery('.live-search .submit-form').click( function(e) {

        e.preventDefault();

        jQuery(this).parents('form').submit();

    });
}

/*!
 * Init Woo Cart
 *
 * Function used to enable cart effects
 *
 */
function ivan_woo_cart_init() {
    "use strict";

    if(jQuery(window).width() > 992) {

        jQuery('.woo-cart').hover( function() {

            var _element = jQuery(this).find('.inner-wrapper');

            _element.addClass('visible');

            if(jQuery(this).parents('.header.simple-left-right').length == 0) {
                _element.animate( { opacity: 1 }, 400 );
            } else {
                _element.css('opacity', '1');
            }

        }, function() {

            var _element = jQuery(this).find('.inner-wrapper');

            if(jQuery(this).parents('.header.simple-left-right').length == 0) {
                _element.animate( { opacity: 0 }, 150, function() {
                    _element.removeClass('visible');
                } );
            } else {
                _element.css('opacity', '0');
                _element.removeClass('visible');
            }

        });

    } // End window size logic

}

/*!
 * Init Woo Cart
 *
 * Function used to enable cart effects
 *
 */
function ivan_wpml_languages_dropdown_init() {
    "use strict";

//	if(jQuery(window).width() > 992) {

    jQuery('.wpml-lang-dropdown').hover( function() {

        var _element = jQuery(this).find('.inner-wrapper');

        _element.addClass('visible');

//			if(jQuery(this).parents('.header.simple-left-right').length == 0) {
//				_element.animate( { opacity: 1 }, 400 );
//			} else {
        _element.css('opacity', '1');
//			}

    }, function() {

        var _element = jQuery(this).find('.inner-wrapper');

//			if(jQuery(this).parents('.header.simple-left-right').length == 0) {
//				_element.animate( { opacity: 0 }, 150, function() {
//					_element.removeClass('visible');
//				} );
//			} else {
        _element.css('opacity', '0');
        _element.removeClass('visible');
//			}

    });

//	} // End window size logic
}

/*!
 * Init Login with AJAX
 *
 * Function used to enable live search effects
 *
 */
function ivan_login_ajax_init() {
    "use strict";

    jQuery('.login-ajax .trigger').click( function(e) {

        var _element = jQuery(this).siblings('.inner-wrapper');

        _element.addClass('visible');

        // if(jQuery(this).parents('.header.simple-left-right').length == 0) {
        // 	_element.animate( { opacity: 1 }, 400 );
        // } else {
        // 	_element.css('opacity', '1');
        // }

        _element.find('#lwa_user_login').focus();

        e.preventDefault();
    });

    jQuery(document).mouseup( function(e) {

        var _element = jQuery('.inner-wrapper.visible');

        if (!_element.is(e.target) // if the target of the click isn't the container...
            && _element.has(e.target).length === 0 ) // ... nor a descendant of the container
        {
            _element.removeClass('visible');
            // if(jQuery(this).parents('.header.simple-left-right').length == 0) {
            // 	_element.animate( { opacity: 0 }, 150, function() {
            // 		if( _element.hasClass('visible') ) {
            // 			_element.removeClass('visible');
            // 		}
            // 	} );
            // } else {
            // 	_element.css('opacity', '0');
            // 	if( _element.hasClass('visible') ) {
            // 		_element.removeClass('visible');
            // 	}
            // }
        }

    });
}

/*!
 * Init Responsive Menus
 *
 * Function used to enable responsive menus
 *
 */
function ivan_responsive_menus_init() {
    "use strict";

    setTimeout(function() {
        //var _bodyHeight = jQuery('body').outerHeight();

        jQuery('.mobile-menu-trigger').each( function() {

            var _selector = jQuery(this).attr('data-selector');
            var _id = jQuery(this).attr('data-id');
            var _menuExists = true;

            if( jQuery(_selector + ' .menu').length <= 0 ) {
                _menuExists = false;
            }

            if( _menuExists == true ) {

                _selector += ' .menu';

                jQuery('body').prepend('<div class="iv-mobile-menu-wrapper" id="' + _id + '"><div class="iv-mobile-menu-holder"><div class="iv-mobile-menu-inner"><div class="iv-mobile-menu-close"><a href="#"><i class="fa fa-times"></i></a></div><div class="modules"></div><div class="menu-wrap"></div></div></div></div>');

                jQuery('#' + _id + ' .iv-mobile-menu-inner .modules').append( jQuery( _selector ).parents('.iv-layout').find('.social-icons, .custom-text').clone().removeClass('hidden-xs hidden-sm') );

                jQuery('#' + _id + ' .iv-mobile-menu-inner .menu-wrap').append( jQuery( _selector ).clone().removeClass('mega_main_menu_ul').attr('id', '') );

                jQuery('#' + _id).find('.post_type_dropdown .mega_dropdown, .grid_dropdown .mega_dropdown, .widgets_dropdown  .mega_dropdown').remove();

                jQuery('#' + _id).find('.menu > .menu-item-has-children > .item_link').click(function(e) {

                    if(jQuery(this).hasClass('opened') == false) {
                        e.preventDefault();

                        jQuery(this).siblings('ul').slideToggle('slow')

                        jQuery(this).addClass('opened');
                    } else {
                        return true;
                    }

                });
            } else {

                //console.log('Menu False' + _selector);

                // Special code used when
                jQuery('body').prepend('<div class="iv-mobile-menu-wrapper" id="' + _id + '"><div class="iv-mobile-menu-holder"><div class="iv-mobile-menu-inner"><div class="iv-mobile-menu-close"><a href="#"><i class="fa fa-times"></i></a></div><div class="modules"></div><div class="menu-wrap"></div></div></div></div>');

                jQuery('#' + _id + ' .iv-mobile-menu-inner .modules').append( jQuery( _selector ).find('.social-icons, .custom-text').clone().removeClass('hidden-xs hidden-sm') );
            }

            jQuery(this).on('click', function(e) {

                e.preventDefault();

                jQuery('#' + _id).addClass('slideIn');

            });

        });

        jQuery('.iv-mobile-menu-close').click( function(e) {

            e.preventDefault();

            jQuery(this).parents('.iv-mobile-menu-wrapper').removeClass('slideIn');

        });

    }, 1000);
}

/*!
 * Init Responsive Menus Selects
 *
 * Function used to enable responsive menus inside a select
 *
 */
function ivan_responsive_menus_select_init() {
    "use strict";

    jQuery('.responsive-menu-select').each( function() {

        var _selector = jQuery(this).attr('data-selector');

        jQuery(_selector).tinyNav({
            active: 'dummy',
            header: ' ',
            indent: '- ',
            place: jQuery(this).find('.receptor')
        });

    });

}

/*!
 * Init FullWidth MegaMenu
 *
 * Function used to fix megamenu fullwidth sizes
 *
 */
function ivan_megamenu_init() {
    "use strict";

    if(iv_device_md == true || iv_device_lg == true) {

        if( jQuery('body').hasClass('ivan-m-l-aside') == false ) {

            if(jQuery('.header .container').length <= 0)
                return;

            var _container = jQuery('.header .container');
            var _containerWidth = _container.width();

            var _containerOffset = _container.offset().left;

            var _containerPadding = _container.css("padding-left").replace("px", "");

            //console.log( _containerPadding);

            jQuery('.header .mega_main_menu:not(.direction-vertical), .top-header .mega_main_menu').each(function() {

                jQuery(this).find('.mega_main_menu_ul > .submenu_full_width > .mega_dropdown').each( function(e) {

                    var _offWrapper = jQuery(this).offset().left;

                    //console.log( 'Offset:' + _offWrapper);

                    var _mega = jQuery(this);

                    _mega.css("width", _containerWidth + 'px');

                    //console.log( _containerWidth );

                    //var _offset = _mega.offset().left;

                    var _offset = _offWrapper - _containerOffset - _containerPadding;

                    _mega.css("left", '-' + Math.abs(_offset) + 'px');


                });

            });

        }

    }
}

/*!
* Init Negative Height
*
* Function used to add negative height header support
*
*/

var ivan_title_paddingTop = null;
var ivan_header_marginTop = 0;
var ivan_negative_header_calls = 0;
function ivan_negative_height_init() {
    "use strict";

    var ivLayoutHeader = jQuery('.iv-layout.header'),
        smoothOpeningHolder = jQuery('.smooth-opening-holder');

    //if( jQuery('.iv-layout.header').hasClass('negative-height') == true && jQuery('body').hasClass('vc_editor') == false ) {
    if( ivLayoutHeader.hasClass('negative-height') == true ) {

        var _h;

        if(ivLayoutHeader.hasClass('header-fixed')) {
            _h = jQuery('.header-sticky-wrapper').outerHeight( true );

            _h += ivan_header_marginTop;
        }
        else
            _h = jQuery('.iv-layout.header.negative-height').outerHeight( true );

        //console.log(_h);

        // Specific to when title wrapper is on
        if( jQuery('.iv-layout.title-wrapper').length > 0 ) {

            // jQuery('.negative-push').css('margin-top', '-' + _h + 'px');

            ivLayoutHeader.css('display', 'block');

            if( jQuery('.iv-layout.title-wrapper').length > 0 ) {

                if( ivLayoutHeader.hasClass('show-after-fold') == false ||
                    ivLayoutHeader.hasClass('keep-logo-before-fold') == true ) {

                    if( ivan_title_paddingTop == null )
                        ivan_title_paddingTop = parseInt( jQuery('.iv-layout.title-wrapper').css('padding-top').replace("px", "") );

                    // jQuery('.iv-layout.title-wrapper').css('padding-top', ivan_title_paddingTop + parseInt(_h) + 'px');

                }
            }

            if( smoothOpeningHolder.hasClass('smooth-opened') == false) {
                smoothOpeningHolder.addClass('smooth-opened');
            }

        } else {

            ivLayoutHeader.css('display', 'block');

            // Specific to when only fixed header is on...
            if( smoothOpeningHolder.hasClass('smooth-opened') == false) {

                /*var _offsetHolder = smoothOpeningHolder.offset();

                smoothOpeningHolder.css('top', _offsetHolder.top + 'px' );*/

                smoothOpeningHolder.addClass('smooth-opened only-fixed-header');

            }
        }

        ivLayoutHeader.find('.logo').imagesLoaded(function(){
            ivan_negative_height_init();
        });
    }
}
function headerTitleFade(){
    var topBanner = jQuery('.iv-layout.title-wrapper-large'),
        title = topBanner.find('h2'),
        titleDesc = topBanner.find('.title-description'),
        introSectionHeight = topBanner.outerHeight(),
        opacitySpeed = 1;
    var MQ = 991;

    triggerAnimation();
    jQuery(window).on('resize', function(){
        triggerAnimation();
    });
    function triggerAnimation(){
        if(jQuery(window).width()>= MQ) {
            jQuery(window).on('scroll', function(){
                window.requestAnimationFrame(animateIntro);
            });
        } else {
            jQuery(window).off('scroll');
        }
    }
    function animateIntro () {
        var scrollPercentage = (jQuery(window).scrollTop()/introSectionHeight).toFixed(5);

        if( jQuery(window).scrollTop() < introSectionHeight) {
            title.css({
                'opacity': 1 - scrollPercentage * 2
            });
            titleDesc.css({
                'opacity': 1 - scrollPercentage * 2
            });
        }
    };
    // topBanner.imagesLoaded(function(){
    // 	title.addClass('animated fadeInDown')
    // 	titleDesc.addClass('animated fadeInDown')
    // });
};


/*!
 * Post Formats init
 *
 * Function used to start carousels and lightboxes of posts
 *
 */
function ivan_post_formats_init() {
    "use strict";

    var _autoHeight = true;

    if(jQuery('.ivan-mansory-blog').length > 0)
        _autoHeight = false;

    if(jQuery('.post-gallery-carousel').length > 0) {
        jQuery('.post-gallery-carousel').owlCarousel({
            theme: "style-outline-circle",
            singleItem: true,
            autoHeight: false,
            navigation: true,
            navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            pagination: false
        });
    }

    //'.format-gallery .thumbnail .post-gallery-carousel-item a, .format-image .thumbnail a')

    jQuery('.format-gallery, .format-image, .single-post .format-standard').each(function() {
        jQuery(this).find('.thumbnail a').magnificPopup({
            type: 'image',
            gallery:{
                enabled: true
            }
        });
    });

}

/*!
 * Gallery Shortcode Improved
 *
 * Function used to start lightbox in gallery items and mansory
 *
 */
function ivan_post_wp_gallery_init() {
    "use strict";

    var container = document.querySelector('.gallery');

    if( null != container) {

        jQuery('.gallery').each(function() {

            jQuery(this).find('.gallery-item a').magnificPopup({
                type: 'image',
                image: {
                    verticalFit: false
                },
                gallery:{
                    enabled: true
                }
            });

        });

        var pckry;

        imagesLoaded( container, function() {
            pckry = new Packery( container, {
                itemSelector: '.gallery-item',
                gutter: 0
            });
        });
    }

    /* PrettyPhoto replaced by Magnific */
    jQuery('.prettyphoto').each(function() {
        jQuery(this).magnificPopup({
            type: 'image',
            image: {
                verticalFit: false
            },
            gallery:{
                enabled: true
            }
        });
    });

    /* Tiled Gallery JetPack */
    jQuery('.tiled-gallery a').magnificPopup({
        type: 'image',
        image: {
            verticalFit: false
        },
        gallery:{
            enabled: true
        }
    });

    /* PrettyPhoto replaced by Magnific */
    jQuery('.ivan-lightbox a, a.ivan-lightbox').each(function() {
        jQuery(this).magnificPopup({
            type: 'image',
            image: {
                verticalFit: false
            },
            gallery:{
                enabled: true
            }
        });
    });
}

/*!
 * Load Back to Top Button
 *
 * Function used to display and configure back to top button
 *
 */
function ivan_back_to_top_init() {
    "use strict";

    var $back_top = jQuery('#back-top');

    var $next_prev_fixed = jQuery('.post-nav-fixed');

    // When user click it, animate to top
    $back_top.click( function(e) {
        e.preventDefault();

        jQuery('body, html').animate( {scrollTop: 0}, jQuery(window).scrollTop() / 3, 'linear' );
    });

    var _windowHeight = jQuery.waypoints('viewportHeight');
    var _windowHeightPart = jQuery.waypoints('viewportHeight') * 0.5;

    // Add class on and off according to
    jQuery(window).scroll( function() {

        var _currentScroll = jQuery(this).scrollTop();

        if($back_top.length > 0 ) {
            if( _currentScroll > _windowHeight ) {
                $back_top.removeClass('off');
                $back_top.addClass('on');
            } else {
                $back_top.removeClass('on');
                $back_top.addClass('off');
            }
        }

        if($next_prev_fixed.length > 0 ) {
            if( _currentScroll > _windowHeightPart ) {
                $next_prev_fixed.removeClass('off');
                $next_prev_fixed.addClass('on');
            } else {
                $next_prev_fixed.removeClass('on');
                $next_prev_fixed.addClass('off');
            }
        }

    });

}

/*!
* Floated Contact Form
*
*/
function floatedContactForm(){
    var el = jQuery('.floated-contact-form'),
        trigger = el.find('.form-trigger');

    trigger.on('click', function(event) {
        event.preventDefault();
        if ( el.length ) {
            el.toggleClass('visible-form');
        }
    });
    jQuery(document).on('click', function(e) {

        if (!el.is(e.target) // if the target of the click isn't the container...
            && el.has(e.target).length === 0 ) // ... nor a descendant of the container
        {
            if ( el.length ) {
                el.removeClass('visible-form');
            };
        };

    });
    // Add class on and off according to
    jQuery(window).scroll( function() {

        if ( jQuery('#back-top').hasClass('on') == true ) {
            el.addClass('slideIn');
        } else if ( jQuery('#back-top').hasClass('off') == true ) {
            el.removeClass('slideIn');
        };

    });
}

/*!
 * Start Smooth Link Functionality
 *
 * Function used to go from one section to another smoothly
 *
 */
function ivan_smooth_links_init() {
    "use strict";

    var header_offset = 0;

    if( jQuery('.header-fixed').length > 0 ) {
        header_offset = jQuery('.header-fixed').outerHeight(false) * 0.57;
    }

    // Go to present hashtags
    if(window.location.hash) {

        var header_offset = 0;

        if( jQuery('.header-fixed').length > 0 ) {
            header_offset = jQuery('.header-fixed').outerHeight(false);
        }

        //console.log(window.location.hash);
        var target = jQuery(window.location.hash);

        if( target.length ) {
            if( target.offset().top < 150)
                header_offset = 0;

            jQuery(document).scrollTop( target.offset().top - header_offset );
        }

    } else {
        // Fragment doesn't exist
    }

    // Smooth scrolling to internal anchors
    jQuery('a[href*=#]:not([href=#]):not([href*=#tab]):not([href*=#comments])').click(function() {

        if( header_offset == 0 ) {
            header_offset = jQuery('.header-fixed').outerHeight(false) * 0.57;
        }

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {

                if( target.offset().top < 150)
                    header_offset = 0;

                jQuery('html,body').animate({
                    scrollTop: target.offset().top - header_offset
                }, 600);

                return false;
            }
        }
    });

}

/**
 * Floating Contact Form
 * @returns
 */
function ivan_floating_contact_form_init() {
    "use strict";

    var $ff = jQuery('#floating-contact-form');
    var $ff_submited = false;

    if ($ff.length < 1) {
        return;
    }

    $ff.submit(function (e) {

        e.preventDefault();

        if ($ff_submited == true) {
            jQuery('#ff-notice').html(ivan_lang.form_already_submitted);
            return false;
        }

        jQuery('#ff-submit').val(ivan_lang.sending);
        $ff_submited = true;

        jQuery.ajax({
            url: ivan_theme_scripts.ajaxurl,
            data: {
                name: jQuery('#ff-name').val(),
                email: jQuery('#ff-email').val(),
                message: jQuery('#ff-message').val(),
                action: 'ff_submit',
                nonce: jQuery('#ff-nonce').val(),
                recaptcha_response: jQuery('#g-recaptcha-response').val()
            },
            type: 'POST',
            dataType: 'JSON',
            success: function (data) {

//				console.dir(data);
//				$ff_submited = false;
//				return;

                //configuration error
                if (data.error == 3) {

                    jQuery('#ff-submit').val(ivan_lang.send);
                    jQuery('#ff-notice').html(ivan_lang.failed_config_error);
                    $ff_submited = false;

                    //server error, wp_mail failed
                } else if (data.error == 2) {

                    jQuery('#ff-submit').val(ivan_lang.send);
                    jQuery('#ff-notice').html(ivan_lang.failed_server_error);
                    $ff_submited = false;

                    //form error
                } else if (data.error == 1) {

                    if (data.errors.name == 1) {
                        jQuery('#ff-name').css('border','1px solid #FF0000');
                    } else {
                        jQuery('#ff-name').removeAttr( 'style' );
                    }

                    if (data.errors.email == 1) {
                        jQuery('#ff-email').css('border','1px solid #FF0000');
                    } else {
                        jQuery('#ff-email').removeAttr( 'style' );
                    }

                    if (data.errors.message == 1) {
                        jQuery('#ff-message').css('border','1px solid #FF0000');
                    } else {
                        jQuery('#ff-message').removeAttr( 'style' );
                    }

                    if (data.errors.recaptcha == 1) {
                        jQuery('.g-recaptcha').find('iframe').css('border','1px solid #FF0000');
                    } else {
                        jQuery('.g-recaptcha').find('iframe').removeAttr( 'style' );;
                    }

                    jQuery('#ff-submit').val(ivan_lang.send);
                    jQuery('#ff-notice').html(ivan_lang.fill_all_required_fields);
                    $ff_submited = false;
                    //email sent
                } else {
                    jQuery('#ff-name').removeAttr( 'style' );
                    jQuery('#ff-email').removeAttr( 'style' );
                    jQuery('#ff-message').removeAttr( 'style' );
                    jQuery('.g-recaptcha').find('iframe').removeAttr( 'style' );;

                    jQuery('#ff-notice').html(ivan_lang.thank_you);
                    jQuery('#ff-submit').val(ivan_lang.sent);
                    $ff_submited = true;
                }
            }
        })

    });
}

/**
 * Portfolio modern init
 * @returns
 */
function ivan_portfolio_modern_init() {
    "use strict";

    var $portfolio_container = jQuery("#portfolio");
    var	$portfolio_items = jQuery("#portfolio .item");
    var	$active_filter = jQuery(".ivan-vc-filters a.current");

    if ($portfolio_container.length > 0) {

        jQuery('body').append('<div id="portfolio-responsive"><div id="portfolio-responsive-2"></div><div id="portfolio-responsive-1"></div></div>');
        var $pr1 = jQuery("#portfolio-responsive-1");
        var $pr2 = jQuery("#portfolio-responsive-2");

        $portfolio_container.imagesLoaded(function() {
            var column_width = ivan_get_portfolio_column_width();

            $portfolio_items.each(function() {
                jQuery(this).width(column_width * jQuery(this).data("factor"))
            });
            $portfolio_container.isotope({
                itemSelector: ".item",
                masonry: {
                    columnWidth: column_width
                },
                isResizeBound: false
            });

            jQuery(window).resize(function() {
                var column_width = ivan_get_portfolio_column_width();
                var elems = $portfolio_container.isotope("getItemElements");
                for (var i = 0; i < elems.length; i++) jQuery(elems[i]).width(column_width * jQuery(elems[i]).data("factor"));
                $portfolio_container.isotope({
                    masonry: {
                        columnWidth: column_width
                    }
                })
            }).trigger("resize")
        });

        jQuery(".ivan-vc-filters").find("a").click(function(e) {

            $active_filter.removeClass("current");
            $active_filter = jQuery(this);
            $active_filter.addClass("current");
            var f = jQuery(this).data("filter");

            $portfolio_container.isotope({
                filter: f
            });
            e.preventDefault()
        });
    }
    if (window.addEventListener) window.addEventListener("orientationchange", function() {
        setTimeout(function() {
            jQuery(window).trigger("resize")
        }, 500)
    }, false);

    function ivan_get_portfolio_column_width() {
        var colWidth = 0;

        var container_width = $portfolio_container.closest('.wpb_wrapper').width();
        if ($pr1.css("display") == "block") {
            return container_width;
        } else if ($pr2.css("display") == "block") {
            return (container_width / 2 - 1);
        } else {
            return (container_width / 3 - 1);
        }
    }
}

/*!
 * Init Mansory Styled Blog
 *
 * Function used to display blog in styled way
 *
 */
function ivan_init_mansory_style_blog() {
    "use strict";

    var container = document.querySelector('.ivan-mansory-blog');

    if( null != container) {

        var pckry;

        imagesLoaded( container, function() {
            pckry = new Packery( container, {
                itemSelector: '.post-wrapper'
                /*gutter: container.querySelector('.gutter-spacer')*/
            });

            setTimeout(function() {
                if(jQuery('body').hasClass("ivan-m-l-aside")) {
                    jQuery('.ivan-mansory-blog').packery();
                }
            }, 1500);

        });

    }

}

/*!
 * Calculate Correct Header Area Sizes
 *
 * Function used to fix height that should be used
 *
 */
function ivan_fix_header_area_height() {
    "use strict";

    if( jQuery('.header').length > 0 ) {
        jQuery('.calc-height-area').each( function() {

            jQuery(this).outerHeight( jQuery('.header-center-area').outerHeight() );

        } );
    }
}

// Update properly the layout after added by AJAX
function ivan_update_mansory_style_blog() {
    "use strict";

    jQuery('.ivan-mansory-blog').packery();
    jQuery('.ivan-mansory-blog').packery('reloadItems');

}

/**********************************************************
 ***********************************************************
 ***********************************************************/

// Visual Composer Container Size
function ivan_vc_full_width_container() {
    "use strict";

    var _w = jQuery(window).width();

    jQuery('.entry-content > .wpb_row').each( function() {

        var _rowW = jQuery(this).width();

        var _diff = (_w - _rowW) / 2 + 15;

        jQuery(this).css({
            marginLeft: '-' + _diff + 'px',
            paddingLeft: _diff + 'px',
            marginRight: '-' + _diff + 'px',
            paddingRight: _diff + 'px',
        });

    });
}


/**********************************************************
 ***********************************************************
 ***********************************************************/

// Fix Menu Areas that can't be fixed
ivan_fix_header_area_height();

/*
 * Window Load Event
 */
jQuery(window).load( function() {
    "use strict";

    // Fix Menu Areas that can't be fixed
    ivan_fix_header_area_height();

    ivan_vc_full_width_container();

});
jQuery(window).on('resize', function() {

    if ( jQuery('.live-search.search-top-style').length ) {
        jQuery('.form-close-btn').css('right', jQuery('.live-search').find('form').offset().left);
    };

    if ( jQuery(window).width() <= 991 ) {
        jQuery('.inner-wrapper.visible').removeClass('visible');
        jQuery('#all-site-wrapper').css('top', 0);
    };

});

function ivan_theme_script_load() {
    "use strict";

    // Fix Menu Areas that can't be fixed
    ivan_fix_header_area_height();

    ivan_vc_full_width_container();
}

/*
 * Document Ready Event
 */
jQuery(document).ready( function() {
    "use strict";

    ivan_theme_script_ready();

    headerTitleFade();

});

function ivan_theme_script_ready() {
    "use strict";

    var ivLayoutHeader = jQuery('.iv-layout.header');

    /* Small fix to empty p in content */
    jQuery('.entry-content > p:empty').remove();

    /* Init Smooth Links */
    ivan_smooth_links_init();

    /* Init Back to Top Button */
    ivan_back_to_top_init();

    floatedContactForm();

    /* Calls Negative Height init script */
    if(ivLayoutHeader.hasClass('negative-height'))
        ivan_header_marginTop = parseInt( jQuery('.iv-layout.header.negative-height').css("marginTop").replace('px', '') );

    ivLayoutHeader.find('.logo').imagesLoaded(function(){
        ivan_negative_height_init();
    });

    /* Calls Live Search init script */
    ivan_live_search_init();

    /* Calls Woo Cart init script */
    ivan_woo_cart_init();

    /* Calls WPMLLanguages dropdown init script */
    ivan_wpml_languages_dropdown_init();

    /* Calls Login AJAX init script */
    ivan_login_ajax_init();

    /* Calls Responsive Menu init script */
    ivan_responsive_menus_init();

    /* Calls Responsive Menu Select init script */
    ivan_responsive_menus_select_init();

    /* Calls MegaMenu init script */
    setTimeout(function() { ivan_megamenu_init(); }, 1000);

    /* Call init function to post formats */
    ivan_post_formats_init();

    /* Init Mansory Blog */
    ivan_init_mansory_style_blog();

    /* Init default WP Gallery shortcode lightbox and mansory layout */
    ivan_post_wp_gallery_init();

    /* Flexible Header */
    ivan_fixed_header();

    /* Flexible Header */
    ivan_portfolio_modern_init();

    /* Flexible Header */
    ivan_floating_contact_form_init();

    /* Fix iOS Zoom problems */
    jQuery('input:text,select,textarea').cancelZoom();

    // Try to fix/ensure wrong title wrapper calcs
    //setTimeout(function() { ivan_recalc_dimensions(); }, 1000);
}

// Infinite Scroll
jQuery( document.body ).on( 'post-load', function () {
    "use strict";


    imagesLoaded( jQuery('#post-list'), function() {

        ivan_post_formats_init();

        ivan_update_mansory_style_blog();

        setTimeout(function() { ivan_update_mansory_style_blog(); }, 1000);

    });

});

/*if(ivan_theme_scripts.preload) {
	/*
	 * Fade In/Out Effect
	 */
/*jQuery(window).bind("load", function() {
    "use strict";

    jQuery('#page-loader').fadeOut();
});

jQuery(window).bind('beforeunload', function(e){
    "use strict";

    jQuery('#page-loader').fadeIn();
});
}*/

/*
 * Debounced Resize Event
 */
jQuery(window).on('debouncedresize', function( event ) {

    ivan_recalc_dimensions();

});

function ivan_recalc_dimensions() {
    "use strict";

    ivan_negative_height_init();

    ivan_recalc_sticky_height();

    ivan_vc_full_width_container();
}

/*!
 * Like Post Script
 *
 * Adds like post capabilities
 *
*/

jQuery(document).ready(function() {
    "use strict";

    jQuery('body').on('click','.jm-post-like',function(event){
        event.preventDefault();
        var heart = jQuery(this);
        var post_id = heart.data("post_id");
        heart.html("<i class='fa fa-heart'></i>&nbsp;<i class='fa fa-cog fa-spin'></i>");
        jQuery.ajax({
            type: "post",
            url: ivan_theme_scripts.ajaxurl,
            data: "action=jm-post-like&nonce="+ivan_theme_scripts.nonce+"&jm_post_like=&post_id="+post_id,
            success: function(count){
                if( count.indexOf( "already" ) !== -1 )
                {
                    var lecount = count.replace("already","");
                    if (lecount == 0)
                    {
                        lecount = "";
                    }
                    heart.prop('title', '+1');
                    heart.removeClass("liked");
                    heart.html("<i class='fa fa-heart-o'></i>&nbsp;"+lecount);
                }
                else
                {
                    heart.prop('title', '-1');
                    heart.addClass("liked");
                    heart.html("<i class='fa fa-heart'></i>&nbsp;"+count);
                }
            }
        });
    });

    enableInstagramFeed();
});


/*!
* Skip Input Focus Fix
*
* Fix odd focus behavior in mobile devices
*
*/
( function() {

    "use strict";

    var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
        is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
        is_ie	 = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

    if ( ( is_webkit || is_opera || is_ie ) && 'undefined' !== typeof( document.getElementById ) ) {
        var eventMethod = ( window.addEventListener ) ? 'addEventListener' : 'attachEvent';
        window[ eventMethod ]( 'hashchange', function() {
            var element = document.getElementById( location.hash.substring( 1 ) );

            if ( element ) {
                if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
                    element.tabIndex = -1;

                element.focus();
            }
        }, false );
    }
})();


/* Instagram Feed */
function enableInstagramFeed(){

    jQuery('[id*="instagram-feed"]').each(function(){
        var el = jQuery(this),
            domId = el.attr('id'),
            limit = parseInt(el.data('limit')),
            clientId = el.data('clientid');

        var instagram_feed = new Instafeed({
            get: 'popular',
            clientId: clientId,
            target: domId,
            template: '<li><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></li>',
            resolution: 'low_resolution',
            limit: limit
        });
        instagram_feed.run();
    });

}