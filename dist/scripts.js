/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngb', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.ngb = {}),global.ng.core,global.ng.common,global.ng.forms,global.rxjs,global.rxjs.operators));
}(this, (function (exports,i0,i1,forms,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function toInteger(value) {
        return parseInt("" + value, 10);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function toString(value) {
        return (value !== undefined && value !== null) ? "" + value : '';
    }
    /**
     * @param {?} value
     * @param {?} max
     * @param {?=} min
     * @return {?}
     */
    function getValueInRange(value, max, min) {
        if (min === void 0) {
            min = 0;
        }
        return Math.max(Math.min(value, max), min);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isString(value) {
        return typeof value === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isNumber(value) {
        return !isNaN(toInteger(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isInteger(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function padNumber(value) {
        if (isNumber(value)) {
            return ("0" + value).slice(-2);
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    function regExpEscape(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */
    function hasClassName(element, className) {
        return element && element.className && element.className.split &&
            element.className.split(/\s+/).indexOf(className) >= 0;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbAccordion component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the accordions used in the application.
     */
    var NgbAccordionConfig = /** @class */ (function () {
        function NgbAccordionConfig() {
            this.closeOthers = false;
        }
        NgbAccordionConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbAccordionConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbAccordionConfig_Factory() { return new NgbAccordionConfig(); }, token: NgbAccordionConfig, providedIn: "root" });
        return NgbAccordionConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId = 0;
    /**
     * A directive to put on a button that toggles panel opening and closing.
     * To be used inside the `NgbPanelHeader`
     *
     * \@since 4.1.0
     */
    var NgbPanelToggle = /** @class */ (function () {
        function NgbPanelToggle(accordion, panel) {
            this.accordion = accordion;
            this.panel = panel;
        }
        Object.defineProperty(NgbPanelToggle.prototype, "ngbPanelToggle", {
            set: /**
             * @param {?} panel
             * @return {?}
             */ function (panel) {
                if (panel) {
                    this.panel = panel;
                }
            },
            enumerable: true,
            configurable: true
        });
        NgbPanelToggle.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'button[ngbPanelToggle]',
                        host: {
                            'type': 'button',
                            '[disabled]': 'panel.disabled',
                            '[class.collapsed]': '!panel.isOpen',
                            '[attr.aria-expanded]': 'panel.isOpen',
                            '[attr.aria-controls]': 'panel.id',
                            '(click)': 'accordion.toggle(panel.id)'
                        }
                    },] }
        ];
        /** @nocollapse */
        NgbPanelToggle.ctorParameters = function () {
            return [
                { type: NgbAccordion, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgbAccordion; }),] }] },
                { type: NgbPanel, decorators: [{ type: i0.Optional }, { type: i0.Host }, { type: i0.Inject, args: [i0.forwardRef(function () { return NgbPanel; }),] }] }
            ];
        };
        NgbPanelToggle.propDecorators = {
            ngbPanelToggle: [{ type: i0.Input }]
        };
        return NgbPanelToggle;
    }());
    /**
     * A directive to wrap an accordion panel header to contain any HTML markup and a toggling button with `NgbPanelToggle`
     *
     * \@since 4.1.0
     */
    var NgbPanelHeader = /** @class */ (function () {
        function NgbPanelHeader(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPanelHeader.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPanelHeader]' },] }
        ];
        /** @nocollapse */
        NgbPanelHeader.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPanelHeader;
    }());
    /**
     * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
     */
    var NgbPanelTitle = /** @class */ (function () {
        function NgbPanelTitle(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPanelTitle.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPanelTitle]' },] }
        ];
        /** @nocollapse */
        NgbPanelTitle.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPanelTitle;
    }());
    /**
     * This directive must be used to wrap accordion panel content.
     */
    var NgbPanelContent = /** @class */ (function () {
        function NgbPanelContent(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPanelContent.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPanelContent]' },] }
        ];
        /** @nocollapse */
        NgbPanelContent.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPanelContent;
    }());
    /**
     * The NgbPanel directive represents an individual panel with the title and collapsible
     * content
     */
    var NgbPanel = /** @class */ (function () {
        function NgbPanel() {
            /**
             *  A flag determining whether the panel is disabled or not.
             *  When disabled, the panel cannot be toggled.
             */
            this.disabled = false;
            /**
             *  An optional id for the panel. The id should be unique.
             *  If not provided, it will be auto-generated.
             */
            this.id = "ngb-panel-" + nextId++;
            /**
             * A flag telling if the panel is currently open
             */
            this.isOpen = false;
        }
        /**
         * @return {?}
         */
        NgbPanel.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
                // only @ContentChildren allows us to specify the {descendants: false} option.
                // Without {descendants: false} we are hitting bugs described in:
                // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
                this.titleTpl = this.titleTpls.first;
                this.headerTpl = this.headerTpls.first;
                this.contentTpl = this.contentTpls.first;
            };
        NgbPanel.decorators = [
            { type: i0.Directive, args: [{ selector: 'ngb-panel' },] }
        ];
        NgbPanel.propDecorators = {
            disabled: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            titleTpls: [{ type: i0.ContentChildren, args: [NgbPanelTitle, { descendants: false },] }],
            headerTpls: [{ type: i0.ContentChildren, args: [NgbPanelHeader, { descendants: false },] }],
            contentTpls: [{ type: i0.ContentChildren, args: [NgbPanelContent, { descendants: false },] }]
        };
        return NgbPanel;
    }());
    /**
     * The NgbAccordion directive is a collection of panels.
     * It can assure that only one panel can be opened at a time.
     */
    var NgbAccordion = /** @class */ (function () {
        function NgbAccordion(config) {
            /**
             * An array or comma separated strings of panel identifiers that should be opened
             */
            this.activeIds = [];
            /**
             * Whether the closed panels should be hidden without destroying them
             */
            this.destroyOnHide = true;
            /**
             * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
             */
            this.panelChange = new i0.EventEmitter();
            this.type = config.type;
            this.closeOtherPanels = config.closeOthers;
        }
        /**
         * Checks if a panel with a given id is expanded or not.
         */
        /**
         * Checks if a panel with a given id is expanded or not.
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype.isExpanded = /**
         * Checks if a panel with a given id is expanded or not.
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) { return this.activeIds.indexOf(panelId) > -1; };
        /**
         * Expands a panel with a given id. Has no effect if the panel is already expanded or disabled.
         */
        /**
         * Expands a panel with a given id. Has no effect if the panel is already expanded or disabled.
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype.expand = /**
         * Expands a panel with a given id. Has no effect if the panel is already expanded or disabled.
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) { this._changeOpenState(this._findPanelById(panelId), true); };
        /**
         * Expands all panels if [closeOthers]="false". For the [closeOthers]="true" case will have no effect if there is an
         * open panel, otherwise the first panel will be expanded.
         */
        /**
         * Expands all panels if [closeOthers]="false". For the [closeOthers]="true" case will have no effect if there is an
         * open panel, otherwise the first panel will be expanded.
         * @return {?}
         */
        NgbAccordion.prototype.expandAll = /**
         * Expands all panels if [closeOthers]="false". For the [closeOthers]="true" case will have no effect if there is an
         * open panel, otherwise the first panel will be expanded.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.closeOtherPanels) {
                    if (this.activeIds.length === 0 && this.panels.length) {
                        this._changeOpenState(this.panels.first, true);
                    }
                }
                else {
                    this.panels.forEach(function (panel) { return _this._changeOpenState(panel, true); });
                }
            };
        /**
         * Collapses a panel with a given id. Has no effect if the panel is already collapsed or disabled.
         */
        /**
         * Collapses a panel with a given id. Has no effect if the panel is already collapsed or disabled.
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype.collapse = /**
         * Collapses a panel with a given id. Has no effect if the panel is already collapsed or disabled.
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) { this._changeOpenState(this._findPanelById(panelId), false); };
        /**
         * Collapses all open panels.
         */
        /**
         * Collapses all open panels.
         * @return {?}
         */
        NgbAccordion.prototype.collapseAll = /**
         * Collapses all open panels.
         * @return {?}
         */
            function () {
                var _this = this;
                this.panels.forEach(function (panel) { _this._changeOpenState(panel, false); });
            };
        /**
         * Programmatically toggle a panel with a given id. Has no effect if the panel is disabled.
         */
        /**
         * Programmatically toggle a panel with a given id. Has no effect if the panel is disabled.
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype.toggle = /**
         * Programmatically toggle a panel with a given id. Has no effect if the panel is disabled.
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) {
                /** @type {?} */
                var panel = this._findPanelById(panelId);
                if (panel) {
                    this._changeOpenState(panel, !panel.isOpen);
                }
            };
        /**
         * @return {?}
         */
        NgbAccordion.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // active id updates
                if (isString(this.activeIds)) {
                    this.activeIds = this.activeIds.split(/\s*,\s*/);
                }
                // update panels open states
                this.panels.forEach(function (panel) { return panel.isOpen = !panel.disabled && _this.activeIds.indexOf(panel.id) > -1; });
                // closeOthers updates
                if (this.activeIds.length > 1 && this.closeOtherPanels) {
                    this._closeOthers(this.activeIds[0]);
                    this._updateActiveIds();
                }
            };
        /**
         * @param {?} panel
         * @param {?} nextState
         * @return {?}
         */
        NgbAccordion.prototype._changeOpenState = /**
         * @param {?} panel
         * @param {?} nextState
         * @return {?}
         */
            function (panel, nextState) {
                if (panel && !panel.disabled && panel.isOpen !== nextState) {
                    /** @type {?} */
                    var defaultPrevented_1 = false;
                    this.panelChange.emit({ panelId: panel.id, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
                    if (!defaultPrevented_1) {
                        panel.isOpen = nextState;
                        if (nextState && this.closeOtherPanels) {
                            this._closeOthers(panel.id);
                        }
                        this._updateActiveIds();
                    }
                }
            };
        /**
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype._closeOthers = /**
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) {
                this.panels.forEach(function (panel) {
                    if (panel.id !== panelId) {
                        panel.isOpen = false;
                    }
                });
            };
        /**
         * @param {?} panelId
         * @return {?}
         */
        NgbAccordion.prototype._findPanelById = /**
         * @param {?} panelId
         * @return {?}
         */
            function (panelId) { return this.panels.find(function (p) { return p.id === panelId; }); };
        /**
         * @return {?}
         */
        NgbAccordion.prototype._updateActiveIds = /**
         * @return {?}
         */
            function () {
                this.activeIds = this.panels.filter(function (panel) { return panel.isOpen && !panel.disabled; }).map(function (panel) { return panel.id; });
            };
        NgbAccordion.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-accordion',
                        exportAs: 'ngbAccordion',
                        host: { 'class': 'accordion', 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
                        template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgbAccordion.ctorParameters = function () {
            return [
                { type: NgbAccordionConfig }
            ];
        };
        NgbAccordion.propDecorators = {
            panels: [{ type: i0.ContentChildren, args: [NgbPanel,] }],
            activeIds: [{ type: i0.Input }],
            closeOtherPanels: [{ type: i0.Input, args: ['closeOthers',] }],
            destroyOnHide: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            panelChange: [{ type: i0.Output }]
        };
        return NgbAccordion;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];
    var NgbAccordionModule = /** @class */ (function () {
        function NgbAccordionModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbAccordionModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbAccordionModule }; };
        NgbAccordionModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [i1.CommonModule] },] }
        ];
        return NgbAccordionModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbAlert component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the alerts used in the application.
     */
    var NgbAlertConfig = /** @class */ (function () {
        function NgbAlertConfig() {
            this.dismissible = true;
            this.type = 'warning';
        }
        NgbAlertConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbAlertConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbAlertConfig_Factory() { return new NgbAlertConfig(); }, token: NgbAlertConfig, providedIn: "root" });
        return NgbAlertConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Alerts can be used to provide feedback messages.
     */
    var NgbAlert = /** @class */ (function () {
        function NgbAlert(config, _renderer, _element) {
            this._renderer = _renderer;
            this._element = _element;
            /**
             * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
             */
            this.close = new i0.EventEmitter();
            this.dismissible = config.dismissible;
            this.type = config.type;
        }
        /**
         * @return {?}
         */
        NgbAlert.prototype.closeHandler = /**
         * @return {?}
         */
            function () { this.close.emit(null); };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbAlert.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var typeChange = changes['type'];
                if (typeChange && !typeChange.firstChange) {
                    this._renderer.removeClass(this._element.nativeElement, "alert-" + typeChange.previousValue);
                    this._renderer.addClass(this._element.nativeElement, "alert-" + typeChange.currentValue);
                }
            };
        /**
         * @return {?}
         */
        NgbAlert.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this._renderer.addClass(this._element.nativeElement, "alert-" + this.type); };
        NgbAlert.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-alert',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: { 'role': 'alert', 'class': 'alert', '[class.alert-dismissible]': 'dismissible' },
                        template: "\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <ng-content></ng-content>\n    ",
                        styles: ["ngb-alert{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        NgbAlert.ctorParameters = function () {
            return [
                { type: NgbAlertConfig },
                { type: i0.Renderer2 },
                { type: i0.ElementRef }
            ];
        };
        NgbAlert.propDecorators = {
            dismissible: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            close: [{ type: i0.Output }]
        };
        return NgbAlert;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbAlertModule = /** @class */ (function () {
        function NgbAlertModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbAlertModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbAlertModule }; };
        NgbAlertModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbAlert], exports: [NgbAlert], imports: [i1.CommonModule], entryComponents: [NgbAlert] },] }
        ];
        return NgbAlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbButtonLabel = /** @class */ (function () {
        function NgbButtonLabel() {
        }
        NgbButtonLabel.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbButtonLabel]',
                        host: { '[class.btn]': 'true', '[class.active]': 'active', '[class.disabled]': 'disabled', '[class.focus]': 'focused' }
                    },] }
        ];
        return NgbButtonLabel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_CHECKBOX_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbCheckBox; }),
        multi: true
    };
    /**
     * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
     * specified via ngModel.
     */
    var NgbCheckBox = /** @class */ (function () {
        function NgbCheckBox(_label, _cd) {
            this._label = _label;
            this._cd = _cd;
            /**
             * A flag indicating if a given checkbox button is disabled.
             */
            this.disabled = false;
            /**
             * Value to be propagated as model when the checkbox is checked.
             */
            this.valueChecked = true;
            /**
             * Value to be propagated as model when the checkbox is unchecked.
             */
            this.valueUnChecked = false;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        Object.defineProperty(NgbCheckBox.prototype, "focused", {
            set: /**
             * @param {?} isFocused
             * @return {?}
             */ function (isFocused) {
                this._label.focused = isFocused;
                if (!isFocused) {
                    this.onTouched();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        NgbCheckBox.prototype.onInputChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
                this.onChange(modelToPropagate);
                this.onTouched();
                this.writeValue(modelToPropagate);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbCheckBox.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbCheckBox.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbCheckBox.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._label.disabled = isDisabled;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbCheckBox.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.checked = value === this.valueChecked;
                this._label.active = this.checked;
                // label won't be updated, if it is inside the OnPush component when [ngModel] changes
                this._cd.markForCheck();
            };
        NgbCheckBox.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbButton][type=checkbox]',
                        host: {
                            'autocomplete': 'off',
                            '[checked]': 'checked',
                            '[disabled]': 'disabled',
                            '(change)': 'onInputChange($event)',
                            '(focus)': 'focused = true',
                            '(blur)': 'focused = false'
                        },
                        providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        NgbCheckBox.ctorParameters = function () {
            return [
                { type: NgbButtonLabel },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbCheckBox.propDecorators = {
            disabled: [{ type: i0.Input }],
            valueChecked: [{ type: i0.Input }],
            valueUnChecked: [{ type: i0.Input }]
        };
        return NgbCheckBox;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_RADIO_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbRadioGroup; }),
        multi: true
    };
    /** @type {?} */
    var nextId$1 = 0;
    /**
     * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
     * specified via ngModel.
     */
    var NgbRadioGroup = /** @class */ (function () {
        function NgbRadioGroup() {
            this._radios = new Set();
            this._value = null;
            /**
             * The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the
             * enclosed inputs. If not specified, a name is generated automatically.
             */
            this.name = "ngb-radio-" + nextId$1++;
            this.onChange = function (_) { };
            this.onTouched = function () { };
        }
        Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} isDisabled
             * @return {?}
             */ function (isDisabled) { this.setDisabledState(isDisabled); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} radio
         * @return {?}
         */
        NgbRadioGroup.prototype.onRadioChange = /**
         * @param {?} radio
         * @return {?}
         */
            function (radio) {
                this.writeValue(radio.value);
                this.onChange(radio.value);
            };
        /**
         * @return {?}
         */
        NgbRadioGroup.prototype.onRadioValueUpdate = /**
         * @return {?}
         */
            function () { this._updateRadiosValue(); };
        /**
         * @param {?} radio
         * @return {?}
         */
        NgbRadioGroup.prototype.register = /**
         * @param {?} radio
         * @return {?}
         */
            function (radio) { this._radios.add(radio); };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbRadioGroup.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbRadioGroup.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbRadioGroup.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._disabled = isDisabled;
                this._updateRadiosDisabled();
            };
        /**
         * @param {?} radio
         * @return {?}
         */
        NgbRadioGroup.prototype.unregister = /**
         * @param {?} radio
         * @return {?}
         */
            function (radio) { this._radios.delete(radio); };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbRadioGroup.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._value = value;
                this._updateRadiosValue();
            };
        /**
         * @return {?}
         */
        NgbRadioGroup.prototype._updateRadiosValue = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
            };
        /**
         * @return {?}
         */
        NgbRadioGroup.prototype._updateRadiosDisabled = /**
         * @return {?}
         */
            function () { this._radios.forEach(function (radio) { return radio.updateDisabled(); }); };
        NgbRadioGroup.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'radiogroup' }, providers: [NGB_RADIO_VALUE_ACCESSOR] },] }
        ];
        NgbRadioGroup.propDecorators = {
            name: [{ type: i0.Input }]
        };
        return NgbRadioGroup;
    }());
    /**
     * Marks an input of type "radio" as part of the NgbRadioGroup.
     */
    var NgbRadio = /** @class */ (function () {
        function NgbRadio(_group, _label, _renderer, _element, _cd) {
            this._group = _group;
            this._label = _label;
            this._renderer = _renderer;
            this._element = _element;
            this._cd = _cd;
            this._value = null;
            this._group.register(this);
            this.updateDisabled();
        }
        Object.defineProperty(NgbRadio.prototype, "value", {
            get: /**
             * @return {?}
             */ function () { return this._value; },
            /**
             * You can specify model value of a given radio by binding to the value property.
             */
            set: /**
             * You can specify model value of a given radio by binding to the value property.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._value = value;
                /** @type {?} */
                var stringValue = value ? value.toString() : '';
                this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
                this._group.onRadioValueUpdate();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbRadio.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._group.disabled || this._disabled; },
            /**
             * A flag indicating if a given radio button is disabled.
             */
            set: /**
             * A flag indicating if a given radio button is disabled.
             * @param {?} isDisabled
             * @return {?}
             */ function (isDisabled) {
                this._disabled = isDisabled !== false;
                this.updateDisabled();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbRadio.prototype, "focused", {
            set: /**
             * @param {?} isFocused
             * @return {?}
             */ function (isFocused) {
                if (this._label) {
                    this._label.focused = isFocused;
                }
                if (!isFocused) {
                    this._group.onTouched();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbRadio.prototype, "checked", {
            get: /**
             * @return {?}
             */ function () { return this._checked; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbRadio.prototype, "nameAttr", {
            get: /**
             * @return {?}
             */ function () { return this.name || this._group.name; },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgbRadio.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { this._group.unregister(this); };
        /**
         * @return {?}
         */
        NgbRadio.prototype.onChange = /**
         * @return {?}
         */
            function () { this._group.onRadioChange(this); };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbRadio.prototype.updateValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                // label won't be updated, if it is inside the OnPush component when [ngModel] changes
                if (this.value !== value) {
                    this._cd.markForCheck();
                }
                this._checked = this.value === value;
                this._label.active = this._checked;
            };
        /**
         * @return {?}
         */
        NgbRadio.prototype.updateDisabled = /**
         * @return {?}
         */
            function () { this._label.disabled = this.disabled; };
        NgbRadio.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbButton][type=radio]',
                        host: {
                            '[checked]': 'checked',
                            '[disabled]': 'disabled',
                            '[name]': 'nameAttr',
                            '(change)': 'onChange()',
                            '(focus)': 'focused = true',
                            '(blur)': 'focused = false'
                        }
                    },] }
        ];
        /** @nocollapse */
        NgbRadio.ctorParameters = function () {
            return [
                { type: NgbRadioGroup },
                { type: NgbButtonLabel },
                { type: i0.Renderer2 },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbRadio.propDecorators = {
            name: [{ type: i0.Input }],
            value: [{ type: i0.Input, args: ['value',] }],
            disabled: [{ type: i0.Input, args: ['disabled',] }]
        };
        return NgbRadio;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];
    var NgbButtonsModule = /** @class */ (function () {
        function NgbButtonsModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbButtonsModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbButtonsModule }; };
        NgbButtonsModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES },] }
        ];
        return NgbButtonsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbCarousel component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the carousels used in the application.
     */
    var NgbCarouselConfig = /** @class */ (function () {
        function NgbCarouselConfig() {
            this.interval = 5000;
            this.wrap = true;
            this.keyboard = true;
            this.pauseOnHover = true;
            this.showNavigationArrows = true;
            this.showNavigationIndicators = true;
        }
        NgbCarouselConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbCarouselConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbCarouselConfig_Factory() { return new NgbCarouselConfig(); }, token: NgbCarouselConfig, providedIn: "root" });
        return NgbCarouselConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId$2 = 0;
    /**
     * Represents an individual slide to be used within a carousel.
     */
    var NgbSlide = /** @class */ (function () {
        function NgbSlide(tplRef) {
            this.tplRef = tplRef;
            /**
             * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
             * Will be auto-generated if not provided.
             */
            this.id = "ngb-slide-" + nextId$2++;
        }
        NgbSlide.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbSlide]' },] }
        ];
        /** @nocollapse */
        NgbSlide.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        NgbSlide.propDecorators = {
            id: [{ type: i0.Input }]
        };
        return NgbSlide;
    }());
    /**
     * Directive to easily create carousels based on Bootstrap's markup.
     */
    var NgbCarousel = /** @class */ (function () {
        function NgbCarousel(config, _platformId, _ngZone, _cd) {
            this._platformId = _platformId;
            this._ngZone = _ngZone;
            this._cd = _cd;
            this._destroy$ = new rxjs.Subject();
            this._start$ = new rxjs.Subject();
            this._stop$ = new rxjs.Subject();
            /**
             * A carousel slide event fired when the slide transition is completed.
             * See NgbSlideEvent for payload details
             */
            this.slide = new i0.EventEmitter();
            this.interval = config.interval;
            this.wrap = config.wrap;
            this.keyboard = config.keyboard;
            this.pauseOnHover = config.pauseOnHover;
            this.showNavigationArrows = config.showNavigationArrows;
            this.showNavigationIndicators = config.showNavigationIndicators;
        }
        /**
         * @return {?}
         */
        NgbCarousel.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // setInterval() doesn't play well with SSR and protractor,
                // so we should run it in the browser and outside Angular
                if (i1.isPlatformBrowser(this._platformId)) {
                    this._ngZone.runOutsideAngular(function () {
                        _this._start$
                            .pipe(operators.map(function () { return _this.interval; }), operators.filter(function (interval) { return interval > 0 && _this.slides.length > 0; }), operators.switchMap(function (interval) { return rxjs.timer(interval).pipe(operators.takeUntil(rxjs.merge(_this._stop$, _this._destroy$))); }))
                            .subscribe(function () { return _this._ngZone.run(function () { return _this.next(); }); });
                        _this._start$.next();
                    });
                }
                this.slides.changes.pipe(operators.takeUntil(this._destroy$)).subscribe(function () { return _this._cd.markForCheck(); });
            };
        /**
         * @return {?}
         */
        NgbCarousel.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var activeSlide = this._getSlideById(this.activeId);
                this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
            };
        /**
         * @return {?}
         */
        NgbCarousel.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { this._destroy$.next(); };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbCarousel.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if ('interval' in changes && !changes['interval'].isFirstChange()) {
                    this._start$.next();
                }
            };
        /**
         * Navigate to a slide with the specified identifier.
         */
        /**
         * Navigate to a slide with the specified identifier.
         * @param {?} slideId
         * @return {?}
         */
        NgbCarousel.prototype.select = /**
         * Navigate to a slide with the specified identifier.
         * @param {?} slideId
         * @return {?}
         */
            function (slideId) { this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId)); };
        /**
         * Navigate to the next slide.
         */
        /**
         * Navigate to the next slide.
         * @return {?}
         */
        NgbCarousel.prototype.prev = /**
         * Navigate to the next slide.
         * @return {?}
         */
            function () { this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT); };
        /**
         * Navigate to the next slide.
         */
        /**
         * Navigate to the next slide.
         * @return {?}
         */
        NgbCarousel.prototype.next = /**
         * Navigate to the next slide.
         * @return {?}
         */
            function () { this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT); };
        /**
         * Stops the carousel from cycling through items.
         */
        /**
         * Stops the carousel from cycling through items.
         * @return {?}
         */
        NgbCarousel.prototype.pause = /**
         * Stops the carousel from cycling through items.
         * @return {?}
         */
            function () { this._stop$.next(); };
        /**
         * Restarts cycling through the carousel slides from left to right.
         */
        /**
         * Restarts cycling through the carousel slides from left to right.
         * @return {?}
         */
        NgbCarousel.prototype.cycle = /**
         * Restarts cycling through the carousel slides from left to right.
         * @return {?}
         */
            function () { this._start$.next(); };
        /**
         * @param {?} slideIdx
         * @param {?} direction
         * @return {?}
         */
        NgbCarousel.prototype._cycleToSelected = /**
         * @param {?} slideIdx
         * @param {?} direction
         * @return {?}
         */
            function (slideIdx, direction) {
                /** @type {?} */
                var selectedSlide = this._getSlideById(slideIdx);
                if (selectedSlide && selectedSlide.id !== this.activeId) {
                    this.slide.emit({ prev: this.activeId, current: selectedSlide.id, direction: direction });
                    this._start$.next();
                    this.activeId = selectedSlide.id;
                }
                // we get here after the interval fires or any external API call like next(), prev() or select()
                this._cd.markForCheck();
            };
        /**
         * @param {?} currentActiveSlideId
         * @param {?} nextActiveSlideId
         * @return {?}
         */
        NgbCarousel.prototype._getSlideEventDirection = /**
         * @param {?} currentActiveSlideId
         * @param {?} nextActiveSlideId
         * @return {?}
         */
            function (currentActiveSlideId, nextActiveSlideId) {
                /** @type {?} */
                var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
                /** @type {?} */
                var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);
                return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
            };
        /**
         * @param {?} slideId
         * @return {?}
         */
        NgbCarousel.prototype._getSlideById = /**
         * @param {?} slideId
         * @return {?}
         */
            function (slideId) { return this.slides.find(function (slide) { return slide.id === slideId; }); };
        /**
         * @param {?} slideId
         * @return {?}
         */
        NgbCarousel.prototype._getSlideIdxById = /**
         * @param {?} slideId
         * @return {?}
         */
            function (slideId) {
                return this.slides.toArray().indexOf(this._getSlideById(slideId));
            };
        /**
         * @param {?} currentSlideId
         * @return {?}
         */
        NgbCarousel.prototype._getNextSlide = /**
         * @param {?} currentSlideId
         * @return {?}
         */
            function (currentSlideId) {
                /** @type {?} */
                var slideArr = this.slides.toArray();
                /** @type {?} */
                var currentSlideIdx = this._getSlideIdxById(currentSlideId);
                /** @type {?} */
                var isLastSlide = currentSlideIdx === slideArr.length - 1;
                return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
                    slideArr[currentSlideIdx + 1].id;
            };
        /**
         * @param {?} currentSlideId
         * @return {?}
         */
        NgbCarousel.prototype._getPrevSlide = /**
         * @param {?} currentSlideId
         * @return {?}
         */
            function (currentSlideId) {
                /** @type {?} */
                var slideArr = this.slides.toArray();
                /** @type {?} */
                var currentSlideIdx = this._getSlideIdxById(currentSlideId);
                /** @type {?} */
                var isFirstSlide = currentSlideIdx === 0;
                return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
                    slideArr[currentSlideIdx - 1].id;
            };
        NgbCarousel.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-carousel',
                        exportAs: 'ngbCarousel',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            'class': 'carousel slide',
                            '[style.display]': '"block"',
                            'tabIndex': '0',
                            '(mouseenter)': 'pauseOnHover && pause()',
                            '(mouseleave)': 'pauseOnHover && cycle()',
                            '(keydown.arrowLeft)': 'keyboard && prev()',
                            '(keydown.arrowRight)': 'keyboard && next()'
                        },
                        template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id); pauseOnHover && pause()\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev()\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next()\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgbCarousel.ctorParameters = function () {
            return [
                { type: NgbCarouselConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: i0.NgZone },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbCarousel.propDecorators = {
            slides: [{ type: i0.ContentChildren, args: [NgbSlide,] }],
            activeId: [{ type: i0.Input }],
            interval: [{ type: i0.Input }],
            wrap: [{ type: i0.Input }],
            keyboard: [{ type: i0.Input }],
            pauseOnHover: [{ type: i0.Input }],
            showNavigationArrows: [{ type: i0.Input }],
            showNavigationIndicators: [{ type: i0.Input }],
            slide: [{ type: i0.Output }]
        };
        return NgbCarousel;
    }());
    /** @enum {string} */
    var NgbSlideEventDirection = {
        LEFT: ( /** @type {?} */('left')),
        RIGHT: ( /** @type {?} */('right')),
    };
    /** @type {?} */
    var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbCarouselModule = /** @class */ (function () {
        function NgbCarouselModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbCarouselModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbCarouselModule }; };
        NgbCarouselModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: NGB_CAROUSEL_DIRECTIVES, exports: NGB_CAROUSEL_DIRECTIVES, imports: [i1.CommonModule] },] }
        ];
        return NgbCarouselModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The NgbCollapse directive provides a simple way to hide and show an element with animations.
     */
    var NgbCollapse = /** @class */ (function () {
        function NgbCollapse() {
            /**
             * A flag indicating collapsed (true) or open (false) state.
             */
            this.collapsed = false;
        }
        NgbCollapse.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbCollapse]',
                        exportAs: 'ngbCollapse',
                        host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
                    },] }
        ];
        NgbCollapse.propDecorators = {
            collapsed: [{ type: i0.Input, args: ['ngbCollapse',] }]
        };
        return NgbCollapse;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbCollapseModule = /** @class */ (function () {
        function NgbCollapseModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbCollapseModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbCollapseModule }; };
        NgbCollapseModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbCollapse], exports: [NgbCollapse] },] }
        ];
        return NgbCollapseModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Simple class used for a date representation that datepicker also uses internally
     *
     * \@since 3.0.0
     */
    var /**
     * Simple class used for a date representation that datepicker also uses internally
     *
     * \@since 3.0.0
     */ NgbDate = /** @class */ (function () {
        function NgbDate(year, month, day) {
            this.year = isInteger(year) ? year : null;
            this.month = isInteger(month) ? month : null;
            this.day = isInteger(day) ? day : null;
        }
        /**
         * Static method. Creates a new date object from the NgbDateStruct, ex. NgbDate.from({year: 2000,
         * month: 5, day: 1}). If the 'date' is already of NgbDate, the method will return the same object
         */
        /**
         * Static method. Creates a new date object from the NgbDateStruct, ex. NgbDate.from({year: 2000,
         * month: 5, day: 1}). If the 'date' is already of NgbDate, the method will return the same object
         * @param {?} date
         * @return {?}
         */
        NgbDate.from = /**
         * Static method. Creates a new date object from the NgbDateStruct, ex. NgbDate.from({year: 2000,
         * month: 5, day: 1}). If the 'date' is already of NgbDate, the method will return the same object
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (date instanceof NgbDate) {
                    return date;
                }
                return date ? new NgbDate(date.year, date.month, date.day) : null;
            };
        /**
         * Checks if current date is equal to another date
         */
        /**
         * Checks if current date is equal to another date
         * @param {?} other
         * @return {?}
         */
        NgbDate.prototype.equals = /**
         * Checks if current date is equal to another date
         * @param {?} other
         * @return {?}
         */
            function (other) {
                return other && this.year === other.year && this.month === other.month && this.day === other.day;
            };
        /**
         * Checks if current date is before another date
         */
        /**
         * Checks if current date is before another date
         * @param {?} other
         * @return {?}
         */
        NgbDate.prototype.before = /**
         * Checks if current date is before another date
         * @param {?} other
         * @return {?}
         */
            function (other) {
                if (!other) {
                    return false;
                }
                if (this.year === other.year) {
                    if (this.month === other.month) {
                        return this.day === other.day ? false : this.day < other.day;
                    }
                    else {
                        return this.month < other.month;
                    }
                }
                else {
                    return this.year < other.year;
                }
            };
        /**
         * Checks if current date is after another date
         */
        /**
         * Checks if current date is after another date
         * @param {?} other
         * @return {?}
         */
        NgbDate.prototype.after = /**
         * Checks if current date is after another date
         * @param {?} other
         * @return {?}
         */
            function (other) {
                if (!other) {
                    return false;
                }
                if (this.year === other.year) {
                    if (this.month === other.month) {
                        return this.day === other.day ? false : this.day > other.day;
                    }
                    else {
                        return this.month > other.month;
                    }
                }
                else {
                    return this.year > other.year;
                }
            };
        return NgbDate;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} jsDate
     * @return {?}
     */
    function fromJSDate(jsDate) {
        return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function toJSDate(date) {
        /** @type {?} */
        var jsDate = new Date(date.year, date.month - 1, date.day, 12);
        // this is done avoid 30 -> 1930 conversion
        if (!isNaN(jsDate.getTime())) {
            jsDate.setFullYear(date.year);
        }
        return jsDate;
    }
    /**
     * @return {?}
     */
    function NGB_DATEPICKER_CALENDAR_FACTORY() {
        return new NgbCalendarGregorian();
    }
    /**
     * Calendar used by the datepicker.
     * Default implementation uses Gregorian calendar.
     * @abstract
     */
    var NgbCalendar = /** @class */ (function () {
        function NgbCalendar() {
        }
        NgbCalendar.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_CALENDAR_FACTORY },] }
        ];
        /** @nocollapse */ NgbCalendar.ngInjectableDef = i0.defineInjectable({ factory: NGB_DATEPICKER_CALENDAR_FACTORY, token: NgbCalendar, providedIn: "root" });
        return NgbCalendar;
    }());
    var NgbCalendarGregorian = /** @class */ (function (_super) {
        __extends(NgbCalendarGregorian, _super);
        function NgbCalendarGregorian() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getDaysPerWeek = /**
         * @return {?}
         */
            function () { return 7; };
        /**
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getMonths = /**
         * @return {?}
         */
            function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
        /**
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getWeeksPerMonth = /**
         * @return {?}
         */
            function () { return 6; };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getNext = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                /** @type {?} */
                var jsDate = toJSDate(date);
                switch (period) {
                    case 'y':
                        return new NgbDate(date.year + number, 1, 1);
                    case 'm':
                        jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                        break;
                    case 'd':
                        jsDate.setDate(jsDate.getDate() + number);
                        break;
                    default:
                        return date;
                }
                return fromJSDate(jsDate);
            };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getPrev = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                return this.getNext(date, period, -number);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getWeekday = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var jsDate = toJSDate(date);
                /** @type {?} */
                var day = jsDate.getDay();
                // in JS Date Sun=0, in ISO 8601 Sun=7
                return day === 0 ? 7 : day;
            };
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getWeekNumber = /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
            function (week, firstDayOfWeek) {
                // in JS Date Sun=0, in ISO 8601 Sun=7
                if (firstDayOfWeek === 7) {
                    firstDayOfWeek = 0;
                }
                /** @type {?} */
                var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                /** @type {?} */
                var date = week[thursdayIndex];
                /** @type {?} */
                var jsDate = toJSDate(date);
                jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                // Thursday
                /** @type {?} */
                var time = jsDate.getTime();
                jsDate.setMonth(0); // Compare with Jan 1
                jsDate.setDate(1);
                return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
            };
        /**
         * @return {?}
         */
        NgbCalendarGregorian.prototype.getToday = /**
         * @return {?}
         */
            function () { return fromJSDate(new Date()); };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarGregorian.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
                    return false;
                }
                // year 0 doesn't exist in Gregorian calendar
                if (date.year === 0) {
                    return false;
                }
                /** @type {?} */
                var jsDate = toJSDate(date);
                return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month &&
                    jsDate.getDate() === date.day;
            };
        NgbCalendarGregorian.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarGregorian;
    }(NgbCalendar));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */
    function isChangedDate(prev, next) {
        return !dateComparator(prev, next);
    }
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */
    function dateComparator(prev, next) {
        return (!prev && !next) || (!!prev && !!next && prev.equals(next));
    }
    /**
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function checkMinBeforeMax(minDate, maxDate) {
        if (maxDate && minDate && maxDate.before(minDate)) {
            throw new Error("'maxDate' " + maxDate + " should be greater than 'minDate' " + minDate);
        }
    }
    /**
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function checkDateInRange(date, minDate, maxDate) {
        if (date && minDate && date.before(minDate)) {
            return minDate;
        }
        if (date && maxDate && date.after(maxDate)) {
            return maxDate;
        }
        return date;
    }
    /**
     * @param {?} date
     * @param {?} state
     * @return {?}
     */
    function isDateSelectable(date, state) {
        var minDate = state.minDate, maxDate = state.maxDate, disabled = state.disabled, markDisabled = state.markDisabled;
        // clang-format off
        return !(!isDefined(date) ||
            disabled ||
            (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
            (minDate && date.before(minDate)) ||
            (maxDate && date.after(maxDate)));
        // clang-format on
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
        if (!date) {
            return [];
        }
        /** @type {?} */
        var months = calendar.getMonths(date.year);
        if (minDate && date.year === minDate.year) {
            /** @type {?} */
            var index = months.findIndex(function (month) { return month === minDate.month; });
            months = months.slice(index);
        }
        if (maxDate && date.year === maxDate.year) {
            /** @type {?} */
            var index = months.findIndex(function (month) { return month === maxDate.month; });
            months = months.slice(0, index + 1);
        }
        return months;
    }
    /**
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function generateSelectBoxYears(date, minDate, maxDate) {
        if (!date) {
            return [];
        }
        /** @type {?} */
        var start = minDate && minDate.year || date.year - 10;
        /** @type {?} */
        var end = maxDate && maxDate.year || date.year + 10;
        return Array.from({ length: end - start + 1 }, function (e, i) { return start + i; });
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} maxDate
     * @return {?}
     */
    function nextMonthDisabled(calendar, date, maxDate) {
        return maxDate && calendar.getNext(date, 'm').after(maxDate);
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} minDate
     * @return {?}
     */
    function prevMonthDisabled(calendar, date, minDate) {
        /** @type {?} */
        var prevDate = calendar.getPrev(date, 'm');
        return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
            prevDate.year < minDate.year && minDate.month === 1);
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} state
     * @param {?} i18n
     * @param {?} force
     * @return {?}
     */
    function buildMonths(calendar, date, state, i18n, force) {
        var displayMonths = state.displayMonths, months = state.months;
        // move old months to a temporary array
        /** @type {?} */
        var monthsToReuse = months.splice(0, months.length);
        // generate new first dates, nullify or reuse months
        /** @type {?} */
        var firstDates = Array.from({ length: displayMonths }, function (_, i) {
            /** @type {?} */
            var firstDate = calendar.getNext(date, 'm', i);
            months[i] = null;
            if (!force) {
                /** @type {?} */
                var reusedIndex = monthsToReuse.findIndex(function (month) { return month.firstDate.equals(firstDate); });
                // move reused month back to months
                if (reusedIndex !== -1) {
                    months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
                }
            }
            return firstDate;
        });
        // rebuild nullified months
        firstDates.forEach(function (firstDate, i) {
            if (months[i] === null) {
                months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || ( /** @type {?} */({})));
            }
        });
        return months;
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} state
     * @param {?} i18n
     * @param {?=} month
     * @return {?}
     */
    function buildMonth(calendar, date, state, i18n, month) {
        if (month === void 0) {
            month = ( /** @type {?} */({}));
        }
        var dayTemplateData = state.dayTemplateData, minDate = state.minDate, maxDate = state.maxDate, firstDayOfWeek = state.firstDayOfWeek, markDisabled = state.markDisabled, outsideDays = state.outsideDays;
        /** @type {?} */
        var calendarToday = calendar.getToday();
        month.firstDate = null;
        month.lastDate = null;
        month.number = date.month;
        month.year = date.year;
        month.weeks = month.weeks || [];
        month.weekdays = month.weekdays || [];
        date = getFirstViewDate(calendar, date, firstDayOfWeek);
        // month has weeks
        for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
            /** @type {?} */
            var weekObject = month.weeks[week];
            if (!weekObject) {
                weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
            }
            /** @type {?} */
            var days = weekObject.days;
            // week has days
            for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
                if (week === 0) {
                    month.weekdays[day] = calendar.getWeekday(date);
                }
                /** @type {?} */
                var newDate = new NgbDate(date.year, date.month, date.day);
                /** @type {?} */
                var nextDate = calendar.getNext(newDate);
                /** @type {?} */
                var ariaLabel = i18n.getDayAriaLabel(newDate);
                // marking date as disabled
                /** @type {?} */
                var disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
                if (!disabled && markDisabled) {
                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
                }
                // today
                /** @type {?} */
                var today = newDate.equals(calendarToday);
                // adding user-provided data to the context
                /** @type {?} */
                var contextUserData = dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;
                // saving first date of the month
                if (month.firstDate === null && newDate.month === month.number) {
                    month.firstDate = newDate;
                }
                // saving last date of the month
                if (newDate.month === month.number && nextDate.month !== month.number) {
                    month.lastDate = newDate;
                }
                /** @type {?} */
                var dayObject = days[day];
                if (!dayObject) {
                    dayObject = days[day] = ( /** @type {?} */({}));
                }
                dayObject.date = newDate;
                dayObject.context = Object.assign(dayObject.context || {}, {
                    $implicit: newDate,
                    date: newDate,
                    data: contextUserData,
                    currentMonth: month.number, disabled: disabled,
                    focused: false,
                    selected: false, today: today
                });
                dayObject.tabindex = -1;
                dayObject.ariaLabel = ariaLabel;
                dayObject.hidden = false;
                date = nextDate;
            }
            weekObject.number = calendar.getWeekNumber(days.map(function (day) { return day.date; }), firstDayOfWeek);
            // marking week as collapsed
            weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
                days[days.length - 1].date.month !== month.number;
        }
        return month;
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */
    function getFirstViewDate(calendar, date, firstDayOfWeek) {
        /** @type {?} */
        var daysPerWeek = calendar.getDaysPerWeek();
        /** @type {?} */
        var firstMonthDate = new NgbDate(date.year, date.month, 1);
        /** @type {?} */
        var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
        return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} locale
     * @return {?}
     */
    function NGB_DATEPICKER_18N_FACTORY(locale) {
        return new NgbDatepickerI18nDefault(locale);
    }
    /**
     * Type of the service supplying month and weekday names to to NgbDatepicker component.
     * The default implementation of this service honors the Angular locale, and uses the registered locale data,
     * as explained in the Angular i18n guide.
     * See the i18n demo for how to extend this class and define a custom provider for i18n.
     * @abstract
     */
    var NgbDatepickerI18n = /** @class */ (function () {
        function NgbDatepickerI18n() {
        }
        /**
         * Returns the textual representation of a day that is rendered in a day cell
         *
         * @since 3.0.0
         */
        /**
         * Returns the textual representation of a day that is rendered in a day cell
         *
         * \@since 3.0.0
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerI18n.prototype.getDayNumerals = /**
         * Returns the textual representation of a day that is rendered in a day cell
         *
         * \@since 3.0.0
         * @param {?} date
         * @return {?}
         */
            function (date) { return "" + date.day; };
        /**
         * Returns the textual representation of a week number rendered by date picker
         *
         * @since 3.0.0
         */
        /**
         * Returns the textual representation of a week number rendered by date picker
         *
         * \@since 3.0.0
         * @param {?} weekNumber
         * @return {?}
         */
        NgbDatepickerI18n.prototype.getWeekNumerals = /**
         * Returns the textual representation of a week number rendered by date picker
         *
         * \@since 3.0.0
         * @param {?} weekNumber
         * @return {?}
         */
            function (weekNumber) { return "" + weekNumber; };
        /**
         * Returns the textual representation of a year that is rendered
         * in date picker year select box
         *
         * @since 3.0.0
         */
        /**
         * Returns the textual representation of a year that is rendered
         * in date picker year select box
         *
         * \@since 3.0.0
         * @param {?} year
         * @return {?}
         */
        NgbDatepickerI18n.prototype.getYearNumerals = /**
         * Returns the textual representation of a year that is rendered
         * in date picker year select box
         *
         * \@since 3.0.0
         * @param {?} year
         * @return {?}
         */
            function (year) { return "" + year; };
        NgbDatepickerI18n.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_18N_FACTORY, deps: [i0.LOCALE_ID] },] }
        ];
        /** @nocollapse */ NgbDatepickerI18n.ngInjectableDef = i0.defineInjectable({ factory: function NgbDatepickerI18n_Factory() { return NGB_DATEPICKER_18N_FACTORY(i0.inject(i0.LOCALE_ID)); }, token: NgbDatepickerI18n, providedIn: "root" });
        return NgbDatepickerI18n;
    }());
    var NgbDatepickerI18nDefault = /** @class */ (function (_super) {
        __extends(NgbDatepickerI18nDefault, _super);
        function NgbDatepickerI18nDefault(_locale) {
            var _this = _super.call(this) || this;
            _this._locale = _locale;
            /** @type {?} */
            var weekdaysStartingOnSunday = i1.getLocaleDayNames(_locale, i1.FormStyle.Standalone, i1.TranslationWidth.Short);
            _this._weekdaysShort = weekdaysStartingOnSunday.map(function (day, index) { return weekdaysStartingOnSunday[(index + 1) % 7]; });
            _this._monthsShort = i1.getLocaleMonthNames(_locale, i1.FormStyle.Standalone, i1.TranslationWidth.Abbreviated);
            _this._monthsFull = i1.getLocaleMonthNames(_locale, i1.FormStyle.Standalone, i1.TranslationWidth.Wide);
            return _this;
        }
        /**
         * @param {?} weekday
         * @return {?}
         */
        NgbDatepickerI18nDefault.prototype.getWeekdayShortName = /**
         * @param {?} weekday
         * @return {?}
         */
            function (weekday) { return this._weekdaysShort[weekday - 1]; };
        /**
         * @param {?} month
         * @return {?}
         */
        NgbDatepickerI18nDefault.prototype.getMonthShortName = /**
         * @param {?} month
         * @return {?}
         */
            function (month) { return this._monthsShort[month - 1]; };
        /**
         * @param {?} month
         * @return {?}
         */
        NgbDatepickerI18nDefault.prototype.getMonthFullName = /**
         * @param {?} month
         * @return {?}
         */
            function (month) { return this._monthsFull[month - 1]; };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerI18nDefault.prototype.getDayAriaLabel = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var jsDate = new Date(date.year, date.month - 1, date.day);
                return i1.formatDate(jsDate, 'fullDate', this._locale);
            };
        NgbDatepickerI18nDefault.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NgbDatepickerI18nDefault.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Inject, args: [i0.LOCALE_ID,] }] }
            ];
        };
        return NgbDatepickerI18nDefault;
    }(NgbDatepickerI18n));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerService = /** @class */ (function () {
        function NgbDatepickerService(_calendar, _i18n) {
            this._calendar = _calendar;
            this._i18n = _i18n;
            this._model$ = new rxjs.Subject();
            this._select$ = new rxjs.Subject();
            this._state = {
                disabled: false,
                displayMonths: 1,
                firstDayOfWeek: 1,
                focusVisible: false,
                months: [],
                navigation: 'select',
                outsideDays: 'visible',
                prevDisabled: false,
                nextDisabled: false,
                selectBoxes: { years: [], months: [] },
                selectedDate: null
            };
        }
        Object.defineProperty(NgbDatepickerService.prototype, "model$", {
            get: /**
             * @return {?}
             */ function () { return this._model$.pipe(operators.filter(function (model) { return model.months.length > 0; })); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "select$", {
            get: /**
             * @return {?}
             */ function () { return this._select$.pipe(operators.filter(function (date) { return date !== null; })); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "dayTemplateData", {
            set: /**
             * @param {?} dayTemplateData
             * @return {?}
             */ function (dayTemplateData) {
                if (this._state.dayTemplateData !== dayTemplateData) {
                    this._nextState({ dayTemplateData: dayTemplateData });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "disabled", {
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                if (this._state.disabled !== disabled) {
                    this._nextState({ disabled: disabled });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "displayMonths", {
            set: /**
             * @param {?} displayMonths
             * @return {?}
             */ function (displayMonths) {
                displayMonths = toInteger(displayMonths);
                if (isInteger(displayMonths) && displayMonths > 0 && this._state.displayMonths !== displayMonths) {
                    this._nextState({ displayMonths: displayMonths });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "firstDayOfWeek", {
            set: /**
             * @param {?} firstDayOfWeek
             * @return {?}
             */ function (firstDayOfWeek) {
                firstDayOfWeek = toInteger(firstDayOfWeek);
                if (isInteger(firstDayOfWeek) && firstDayOfWeek >= 0 && this._state.firstDayOfWeek !== firstDayOfWeek) {
                    this._nextState({ firstDayOfWeek: firstDayOfWeek });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "focusVisible", {
            set: /**
             * @param {?} focusVisible
             * @return {?}
             */ function (focusVisible) {
                if (this._state.focusVisible !== focusVisible && !this._state.disabled) {
                    this._nextState({ focusVisible: focusVisible });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "maxDate", {
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                /** @type {?} */
                var maxDate = this.toValidDate(date, null);
                if (isChangedDate(this._state.maxDate, maxDate)) {
                    this._nextState({ maxDate: maxDate });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "markDisabled", {
            set: /**
             * @param {?} markDisabled
             * @return {?}
             */ function (markDisabled) {
                if (this._state.markDisabled !== markDisabled) {
                    this._nextState({ markDisabled: markDisabled });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "minDate", {
            set: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                /** @type {?} */
                var minDate = this.toValidDate(date, null);
                if (isChangedDate(this._state.minDate, minDate)) {
                    this._nextState({ minDate: minDate });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "navigation", {
            set: /**
             * @param {?} navigation
             * @return {?}
             */ function (navigation) {
                if (this._state.navigation !== navigation) {
                    this._nextState({ navigation: navigation });
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbDatepickerService.prototype, "outsideDays", {
            set: /**
             * @param {?} outsideDays
             * @return {?}
             */ function (outsideDays) {
                if (this._state.outsideDays !== outsideDays) {
                    this._nextState({ outsideDays: outsideDays });
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerService.prototype.focus = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
                    this._nextState({ focusDate: date });
                }
            };
        /**
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbDatepickerService.prototype.focusMove = /**
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (period, number) {
                this.focus(this._calendar.getNext(this._state.focusDate, period, number));
            };
        /**
         * @return {?}
         */
        NgbDatepickerService.prototype.focusSelect = /**
         * @return {?}
         */
            function () {
                if (isDateSelectable(this._state.focusDate, this._state)) {
                    this.select(this._state.focusDate, { emitEvent: true });
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerService.prototype.open = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var firstDate = this.toValidDate(date, this._calendar.getToday());
                if (!this._state.disabled) {
                    this._nextState({ firstDate: firstDate });
                }
            };
        /**
         * @param {?} state
         * @return {?}
         */
        NgbDatepickerService.prototype.reset = /**
         * @param {?} state
         * @return {?}
         */
            function (state) { this._state = state; };
        /**
         * @param {?} date
         * @param {?=} options
         * @return {?}
         */
        NgbDatepickerService.prototype.select = /**
         * @param {?} date
         * @param {?=} options
         * @return {?}
         */
            function (date, options) {
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var selectedDate = this.toValidDate(date, null);
                if (!this._state.disabled) {
                    if (isChangedDate(this._state.selectedDate, selectedDate)) {
                        this._nextState({ selectedDate: selectedDate });
                    }
                    if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
                        this._select$.next(selectedDate);
                    }
                }
            };
        /**
         * @param {?} date
         * @param {?=} defaultValue
         * @return {?}
         */
        NgbDatepickerService.prototype.toValidDate = /**
         * @param {?} date
         * @param {?=} defaultValue
         * @return {?}
         */
            function (date, defaultValue) {
                /** @type {?} */
                var ngbDate = NgbDate.from(date);
                if (defaultValue === undefined) {
                    defaultValue = this._calendar.getToday();
                }
                return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
            };
        /**
         * @param {?} patch
         * @return {?}
         */
        NgbDatepickerService.prototype._nextState = /**
         * @param {?} patch
         * @return {?}
         */
            function (patch) {
                /** @type {?} */
                var newState = this._updateState(patch);
                this._patchContexts(newState);
                this._state = newState;
                this._model$.next(this._state);
            };
        /**
         * @param {?} state
         * @return {?}
         */
        NgbDatepickerService.prototype._patchContexts = /**
         * @param {?} state
         * @return {?}
         */
            function (state) {
                var months = state.months, displayMonths = state.displayMonths, selectedDate = state.selectedDate, focusDate = state.focusDate, focusVisible = state.focusVisible, disabled = state.disabled, outsideDays = state.outsideDays;
                state.months.forEach(function (month) {
                    month.weeks.forEach(function (week) {
                        week.days.forEach(function (day) {
                            // patch focus flag
                            if (focusDate) {
                                day.context.focused = focusDate.equals(day.date) && focusVisible;
                            }
                            // calculating tabindex
                            day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1;
                            // override context disabled
                            if (disabled === true) {
                                day.context.disabled = true;
                            }
                            // patch selection flag
                            if (selectedDate !== undefined) {
                                day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                            }
                            // visibility
                            if (month.number !== day.date.month) {
                                day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' ||
                                    (displayMonths > 1 && day.date.after(months[0].firstDate) &&
                                        day.date.before(months[displayMonths - 1].lastDate));
                            }
                        });
                    });
                });
            };
        /**
         * @param {?} patch
         * @return {?}
         */
        NgbDatepickerService.prototype._updateState = /**
         * @param {?} patch
         * @return {?}
         */
            function (patch) {
                // patching fields
                /** @type {?} */
                var state = Object.assign({}, this._state, patch);
                /** @type {?} */
                var startDate = state.firstDate;
                // min/max dates changed
                if ('minDate' in patch || 'maxDate' in patch) {
                    checkMinBeforeMax(state.minDate, state.maxDate);
                    state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
                    state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
                    startDate = state.focusDate;
                }
                // disabled
                if ('disabled' in patch) {
                    state.focusVisible = false;
                }
                // initial rebuild via 'select()'
                if ('selectedDate' in patch && this._state.months.length === 0) {
                    startDate = state.selectedDate;
                }
                // terminate early if only focus visibility was changed
                if ('focusVisible' in patch) {
                    return state;
                }
                // focus date changed
                if ('focusDate' in patch) {
                    state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
                    startDate = state.focusDate;
                    // nothing to rebuild if only focus changed and it is still visible
                    if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) &&
                        !state.focusDate.after(state.lastDate)) {
                        return state;
                    }
                }
                // first date changed
                if ('firstDate' in patch) {
                    state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
                    startDate = state.firstDate;
                }
                // rebuilding months
                if (startDate) {
                    /** @type {?} */
                    var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch ||
                        'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
                    /** @type {?} */
                    var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild);
                    // updating months and boundary dates
                    state.months = months;
                    state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
                    state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined;
                    // reset selected date if 'markDisabled' returns true
                    if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
                        state.selectedDate = null;
                    }
                    // adjusting focus after months were built
                    if ('firstDate' in patch) {
                        if (state.focusDate === undefined || state.focusDate.before(state.firstDate) ||
                            state.focusDate.after(state.lastDate)) {
                            state.focusDate = startDate;
                        }
                    }
                    // adjusting months/years for the select box navigation
                    /** @type {?} */
                    var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
                    /** @type {?} */
                    var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;
                    if (state.navigation === 'select') {
                        // years ->  boundaries (min/max were changed)
                        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                            state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
                        }
                        // months -> when current year or boundaries change
                        if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                            state.selectBoxes.months =
                                generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
                        }
                    }
                    else {
                        state.selectBoxes = { years: [], months: [] };
                    }
                    // updating navigation arrows -> boundaries change (min/max) or month/year changes
                    if ((state.navigation === 'arrows' || state.navigation === 'select') &&
                        (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
                        state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
                        state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
                    }
                }
                return state;
            };
        NgbDatepickerService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NgbDatepickerService.ctorParameters = function () {
            return [
                { type: NgbCalendar },
                { type: NgbDatepickerI18n }
            ];
        };
        return NgbDatepickerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var Key = {
        Tab: 9,
        Enter: 13,
        Escape: 27,
        Space: 32,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        ArrowLeft: 37,
        ArrowUp: 38,
        ArrowRight: 39,
        ArrowDown: 40,
    };
    Key[Key.Tab] = 'Tab';
    Key[Key.Enter] = 'Enter';
    Key[Key.Escape] = 'Escape';
    Key[Key.Space] = 'Space';
    Key[Key.PageUp] = 'PageUp';
    Key[Key.PageDown] = 'PageDown';
    Key[Key.End] = 'End';
    Key[Key.Home] = 'Home';
    Key[Key.ArrowLeft] = 'ArrowLeft';
    Key[Key.ArrowUp] = 'ArrowUp';
    Key[Key.ArrowRight] = 'ArrowRight';
    Key[Key.ArrowDown] = 'ArrowDown';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerKeyMapService = /** @class */ (function () {
        function NgbDatepickerKeyMapService(_service, _calendar) {
            var _this = this;
            this._service = _service;
            this._calendar = _calendar;
            _service.model$.subscribe(function (model) {
                _this._minDate = model.minDate;
                _this._maxDate = model.maxDate;
                _this._firstViewDate = model.firstDate;
                _this._lastViewDate = model.lastDate;
            });
        }
        /**
         * @param {?} event
         * @return {?}
         */
        NgbDatepickerKeyMapService.prototype.processKey = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // tslint:disable-next-line:deprecation
                switch (event.which) {
                    case Key.PageUp:
                        this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
                        break;
                    case Key.PageDown:
                        this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
                        break;
                    case Key.End:
                        this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
                        break;
                    case Key.Home:
                        this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
                        break;
                    case Key.ArrowLeft:
                        this._service.focusMove('d', -1);
                        break;
                    case Key.ArrowUp:
                        this._service.focusMove('d', -this._calendar.getDaysPerWeek());
                        break;
                    case Key.ArrowRight:
                        this._service.focusMove('d', 1);
                        break;
                    case Key.ArrowDown:
                        this._service.focusMove('d', this._calendar.getDaysPerWeek());
                        break;
                    case Key.Enter:
                    case Key.Space:
                        this._service.focusSelect();
                        break;
                    default:
                        return;
                }
                // note 'return' in default case
                event.preventDefault();
                event.stopPropagation();
            };
        NgbDatepickerKeyMapService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        NgbDatepickerKeyMapService.ctorParameters = function () {
            return [
                { type: NgbDatepickerService },
                { type: NgbCalendar }
            ];
        };
        return NgbDatepickerKeyMapService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var NavigationEvent = {
        PREV: 0,
        NEXT: 1,
    };
    NavigationEvent[NavigationEvent.PREV] = 'PREV';
    NavigationEvent[NavigationEvent.NEXT] = 'NEXT';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbDatepicker component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the datepickers used in the application.
     */
    var NgbDatepickerConfig = /** @class */ (function () {
        function NgbDatepickerConfig() {
            this.displayMonths = 1;
            this.firstDayOfWeek = 1;
            this.navigation = 'select';
            this.outsideDays = 'visible';
            this.showWeekdays = true;
            this.showWeekNumbers = false;
        }
        NgbDatepickerConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbDatepickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbDatepickerConfig_Factory() { return new NgbDatepickerConfig(); }, token: NgbDatepickerConfig, providedIn: "root" });
        return NgbDatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
        return new NgbDateStructAdapter();
    }
    /**
     * An abstract class used as the DI token that does conversion between the internal
     * datepicker NgbDateStruct model and any provided user date model, ex. string, native date, etc.
     *
     * Adapter is used for conversion when binding datepicker to a model with forms, ex. [(ngModel)]="userDateModel"
     *
     * Default implementation assumes NgbDateStruct for user model as well.
     * @abstract
     * @template D
     */
    var NgbDateAdapter = /** @class */ (function () {
        function NgbDateAdapter() {
        }
        NgbDateAdapter.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY },] }
        ];
        /** @nocollapse */ NgbDateAdapter.ngInjectableDef = i0.defineInjectable({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
        return NgbDateAdapter;
    }());
    var NgbDateStructAdapter = /** @class */ (function (_super) {
        __extends(NgbDateStructAdapter, _super);
        function NgbDateStructAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         */
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */
        NgbDateStructAdapter.prototype.fromModel = /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
                    { year: date.year, month: date.month, day: date.day } :
                    null;
            };
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         */
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */
        NgbDateStructAdapter.prototype.toModel = /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
                    { year: date.year, month: date.month, day: date.day } :
                    null;
            };
        NgbDateStructAdapter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDateStructAdapter;
    }(NgbDateAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbDatepicker; }),
        multi: true
    };
    /**
     * A lightweight and highly configurable datepicker directive
     */
    var NgbDatepicker = /** @class */ (function () {
        function NgbDatepicker(_keyMapService, _service, _calendar, i18n, config, _cd, _elementRef, _ngbDateAdapter, _ngZone) {
            var _this = this;
            this._keyMapService = _keyMapService;
            this._service = _service;
            this._calendar = _calendar;
            this.i18n = i18n;
            this._cd = _cd;
            this._elementRef = _elementRef;
            this._ngbDateAdapter = _ngbDateAdapter;
            this._ngZone = _ngZone;
            this._destroyed$ = new rxjs.Subject();
            /**
             * An event fired right before the navigation happens and currently displayed month changes.
             * See NgbDatepickerNavigateEvent for the payload info.
             */
            this.navigate = new i0.EventEmitter();
            /**
             * An event fired when user selects a date using keyboard or mouse.
             * The payload of the event is currently selected NgbDate.
             */
            this.select = new i0.EventEmitter();
            this.onChange = function (_) { };
            this.onTouched = function () { };
            ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
                'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
                .forEach(function (input) { return _this[input] = config[input]; });
            _service.select$.pipe(operators.takeUntil(this._destroyed$)).subscribe(function (date) { _this.select.emit(date); });
            _service.model$.pipe(operators.takeUntil(this._destroyed$)).subscribe(function (model) {
                /** @type {?} */
                var newDate = model.firstDate;
                /** @type {?} */
                var oldDate = _this.model ? _this.model.firstDate : null;
                /** @type {?} */
                var navigationPrevented = false;
                // emitting navigation event if the first month changes
                if (!newDate.equals(oldDate)) {
                    _this.navigate.emit({
                        current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
                        next: { year: newDate.year, month: newDate.month },
                        preventDefault: function () { return navigationPrevented = true; }
                    });
                    // can't prevent the very first navigation
                    if (navigationPrevented && oldDate !== null) {
                        _this._service.reset(_this.model);
                        return;
                    }
                }
                /** @type {?} */
                var newSelectedDate = model.selectedDate;
                /** @type {?} */
                var newFocusedDate = model.focusDate;
                /** @type {?} */
                var oldFocusedDate = _this.model ? _this.model.focusDate : null;
                _this.model = model;
                // handling selection change
                if (isChangedDate(newSelectedDate, _this._controlValue)) {
                    _this._controlValue = newSelectedDate;
                    _this.onTouched();
                    _this.onChange(_this._ngbDateAdapter.toModel(newSelectedDate));
                }
                // handling focus change
                if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
                    _this.focus();
                }
                _cd.markForCheck();
            });
        }
        /**
         * Manually focus the focusable day in the datepicker
         */
        /**
         * Manually focus the focusable day in the datepicker
         * @return {?}
         */
        NgbDatepicker.prototype.focus = /**
         * Manually focus the focusable day in the datepicker
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(function () {
                    /** @type {?} */
                    var elementToFocus = _this._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');
                    if (elementToFocus) {
                        elementToFocus.focus();
                    }
                });
            };
        /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         */
        /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         * @param {?=} date
         * @return {?}
         */
        NgbDatepicker.prototype.navigateTo = /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         * @param {?=} date
         * @return {?}
         */
            function (date) {
                this._service.open(NgbDate.from(date ? date.day ? ( /** @type {?} */(date)) : __assign({}, date, { day: 1 }) : null));
            };
        /**
         * @return {?}
         */
        NgbDatepicker.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._ngZone.runOutsideAngular(function () {
                    /** @type {?} */
                    var focusIns$ = rxjs.fromEvent(_this._monthsEl.nativeElement, 'focusin');
                    /** @type {?} */
                    var focusOuts$ = rxjs.fromEvent(_this._monthsEl.nativeElement, 'focusout');
                    // we're changing 'focusVisible' only when entering or leaving months view
                    // and ignoring all focus events where both 'target' and 'related' target are day cells
                    rxjs.merge(focusIns$, focusOuts$)
                        .pipe(operators.filter(function (_a) {
                        var target = _a.target, relatedTarget = _a.relatedTarget;
                        return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day'));
                    }), operators.takeUntil(_this._destroyed$))
                        .subscribe(function (_a) {
                        var type = _a.type;
                        return _this._ngZone.run(function () { return _this._service.focusVisible = type === 'focusin'; });
                    });
                });
            };
        /**
         * @return {?}
         */
        NgbDatepicker.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () { this._destroyed$.next(); };
        /**
         * @return {?}
         */
        NgbDatepicker.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.model === undefined) {
                    ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                        'outsideDays']
                        .forEach(function (input) { return _this._service[input] = _this[input]; });
                    this.navigateTo(this.startDate);
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbDatepicker.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var _this = this;
                ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
                    'outsideDays']
                    .filter(function (input) { return input in changes; })
                    .forEach(function (input) { return _this._service[input] = _this[input]; });
                if ('startDate' in changes) {
                    this.navigateTo(this.startDate);
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepicker.prototype.onDateSelect = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                this._service.focus(date);
                this._service.select(date, { emitEvent: true });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbDatepicker.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) { this._keyMapService.processKey(event); };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepicker.prototype.onNavigateDateSelect = /**
         * @param {?} date
         * @return {?}
         */
            function (date) { this._service.open(date); };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbDatepicker.prototype.onNavigateEvent = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                switch (event) {
                    case NavigationEvent.PREV:
                        this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
                        break;
                    case NavigationEvent.NEXT:
                        this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
                        break;
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbDatepicker.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbDatepicker.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbDatepicker.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { this._service.disabled = isDisabled; };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbDatepicker.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));
                this._service.select(this._controlValue);
            };
        NgbDatepicker.decorators = [
            { type: i0.Component, args: [{
                        exportAs: 'ngbDatepicker',
                        selector: 'ngb-datepicker',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header bg-light\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div #months class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name bg-light\">\n            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
                        providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService, NgbDatepickerKeyMapService],
                        styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}.ngb-dp-month{pointer-events:none}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem}ngb-datepicker-month-view{pointer-events:auto}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-month+.ngb-dp-month>.ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month>ngb-datepicker-month-view>.ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month>ngb-datepicker-month-view>.ngb-dp-week:last-child{padding-bottom:.25rem}.ngb-dp-months{display:-ms-flexbox;display:flex}"]
                    }] }
        ];
        /** @nocollapse */
        NgbDatepicker.ctorParameters = function () {
            return [
                { type: NgbDatepickerKeyMapService },
                { type: NgbDatepickerService },
                { type: NgbCalendar },
                { type: NgbDatepickerI18n },
                { type: NgbDatepickerConfig },
                { type: i0.ChangeDetectorRef },
                { type: i0.ElementRef },
                { type: NgbDateAdapter },
                { type: i0.NgZone }
            ];
        };
        NgbDatepicker.propDecorators = {
            _monthsEl: [{ type: i0.ViewChild, args: ['months',] }],
            dayTemplate: [{ type: i0.Input }],
            dayTemplateData: [{ type: i0.Input }],
            displayMonths: [{ type: i0.Input }],
            firstDayOfWeek: [{ type: i0.Input }],
            footerTemplate: [{ type: i0.Input }],
            markDisabled: [{ type: i0.Input }],
            maxDate: [{ type: i0.Input }],
            minDate: [{ type: i0.Input }],
            navigation: [{ type: i0.Input }],
            outsideDays: [{ type: i0.Input }],
            showWeekdays: [{ type: i0.Input }],
            showWeekNumbers: [{ type: i0.Input }],
            startDate: [{ type: i0.Input }],
            navigate: [{ type: i0.Output }],
            select: [{ type: i0.Output }]
        };
        return NgbDatepicker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerMonthView = /** @class */ (function () {
        function NgbDatepickerMonthView(i18n) {
            this.i18n = i18n;
            this.select = new i0.EventEmitter();
        }
        /**
         * @param {?} day
         * @return {?}
         */
        NgbDatepickerMonthView.prototype.doSelect = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                if (!day.context.disabled && !day.hidden) {
                    this.select.emit(day.date);
                }
            };
        NgbDatepickerMonthView.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-datepicker-month-view',
                        host: { 'role': 'grid' },
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
                        styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}"]
                    }] }
        ];
        /** @nocollapse */
        NgbDatepickerMonthView.ctorParameters = function () {
            return [
                { type: NgbDatepickerI18n }
            ];
        };
        NgbDatepickerMonthView.propDecorators = {
            dayTemplate: [{ type: i0.Input }],
            month: [{ type: i0.Input }],
            showWeekdays: [{ type: i0.Input }],
            showWeekNumbers: [{ type: i0.Input }],
            select: [{ type: i0.Output }]
        };
        return NgbDatepickerMonthView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerNavigation = /** @class */ (function () {
        function NgbDatepickerNavigation(i18n) {
            this.i18n = i18n;
            this.navigation = NavigationEvent;
            this.months = [];
            this.navigate = new i0.EventEmitter();
            this.select = new i0.EventEmitter();
        }
        NgbDatepickerNavigation.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-datepicker-navigation',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"navigate.emit(navigation.PREV)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"navigate.emit(navigation.NEXT)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
                        styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
                    }] }
        ];
        /** @nocollapse */
        NgbDatepickerNavigation.ctorParameters = function () {
            return [
                { type: NgbDatepickerI18n }
            ];
        };
        NgbDatepickerNavigation.propDecorators = {
            date: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            months: [{ type: i0.Input }],
            showSelect: [{ type: i0.Input }],
            prevDisabled: [{ type: i0.Input }],
            nextDisabled: [{ type: i0.Input }],
            selectBoxes: [{ type: i0.Input }],
            navigate: [{ type: i0.Output }],
            select: [{ type: i0.Output }]
        };
        return NgbDatepickerNavigation;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var isHTMLElementContainedIn = function (element, array) {
        return array ? array.some(function (item) { return item.contains(element); }) : false;
    };
    // we'll have to use 'touch' events instead of 'mouse' events on iOS and add a more significant delay
    // to avoid re-opening when handling (click) on a toggling element
    // TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID
    /** @type {?} */
    var iOS = false;
    if (typeof navigator !== 'undefined') {
        iOS = !!navigator.userAgent && /iPad|iPhone|iPod/.test(navigator.userAgent);
    }
    /**
     * @param {?} zone
     * @param {?} document
     * @param {?} type
     * @param {?} close
     * @param {?} closed$
     * @param {?} insideElements
     * @param {?=} ignoreElements
     * @return {?}
     */
    function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements) {
        // closing on ESC and outside clicks
        if (type) {
            zone.runOutsideAngular(function () {
                /** @type {?} */
                var shouldCloseOnClick = function (event) {
                    /** @type {?} */
                    var element = ( /** @type {?} */(event.target));
                    if ((event instanceof MouseEvent && event.button === 2) || isHTMLElementContainedIn(element, ignoreElements)) {
                        return false;
                    }
                    if (type === 'inside') {
                        return isHTMLElementContainedIn(element, insideElements);
                    }
                    else if (type === 'outside') {
                        return !isHTMLElementContainedIn(element, insideElements);
                    }
                    else /* if (type === true) */ {
                        return true;
                    }
                };
                /** @type {?} */
                var escapes$ = rxjs.fromEvent(document, 'keydown')
                    .pipe(operators.takeUntil(closed$), 
                // tslint:disable-next-line:deprecation
                operators.filter(function (e) { return e.which === Key.Escape; }));
                // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown/touchstart',
                // because on 'mouseup/touchend' DOM nodes might be detached
                /** @type {?} */
                var mouseDowns$ = rxjs.fromEvent(document, iOS ? 'touchstart' : 'mousedown')
                    .pipe(operators.map(shouldCloseOnClick), operators.takeUntil(closed$));
                /** @type {?} */
                var closeableClicks$ = rxjs.fromEvent(document, iOS ? 'touchend' : 'mouseup')
                    .pipe(operators.withLatestFrom(mouseDowns$), operators.filter(function (_a) {
                    var _b = __read(_a, 2), _ = _b[0], shouldClose = _b[1];
                    return shouldClose;
                }), operators.delay(iOS ? 16 : 0), operators.takeUntil(closed$));
                rxjs.race([escapes$, closeableClicks$]).subscribe(function () { return zone.run(close); });
            });
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var FOCUSABLE_ELEMENTS_SELECTOR = [
        'a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])',
        'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'
    ].join(', ');
    /**
     * Returns first and last focusable elements inside of a given element based on specific CSS selector
     * @param {?} element
     * @return {?}
     */
    function getFocusableBoundaryElements(element) {
        /** @type {?} */
        var list = Array.from(( /** @type {?} */(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR))))
            .filter(function (el) { return el.tabIndex !== -1; });
        return [list[0], list[list.length - 1]];
    }
    /**
     * Function that enforces browser focus to be trapped inside a DOM element.
     *
     * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
     *
     * \@param element The element around which focus will be trapped inside
     * \@param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
     * and free internal resources
     * \@param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
     * false)
     * @type {?}
     */
    var ngbFocusTrap = function (element, stopFocusTrap$, refocusOnClick) {
        if (refocusOnClick === void 0) {
            refocusOnClick = false;
        }
        // last focused element
        /** @type {?} */
        var lastFocusedElement$ = rxjs.fromEvent(element, 'focusin').pipe(operators.takeUntil(stopFocusTrap$), operators.map(function (e) { return e.target; }));
        // 'tab' / 'shift+tab' stream
        rxjs.fromEvent(element, 'keydown')
            .pipe(operators.takeUntil(stopFocusTrap$), 
        // tslint:disable:deprecation
        operators.filter(function (e) { return e.which === Key.Tab; }), 
        // tslint:enable:deprecation
        operators.withLatestFrom(lastFocusedElement$))
            .subscribe(function (_a) {
            var _b = __read(_a, 2), tabEvent = _b[0], focusedElement = _b[1];
            var _c = __read(getFocusableBoundaryElements(element), 2), first = _c[0], last = _c[1];
            if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
                last.focus();
                tabEvent.preventDefault();
            }
            if (focusedElement === last && !tabEvent.shiftKey) {
                first.focus();
                tabEvent.preventDefault();
            }
        });
        // inside click
        if (refocusOnClick) {
            rxjs.fromEvent(element, 'click')
                .pipe(operators.takeUntil(stopFocusTrap$), operators.withLatestFrom(lastFocusedElement$), operators.map(function (arr) { return ( /** @type {?} */(arr[1])); }))
                .subscribe(function (lastFocusedElement) { return lastFocusedElement.focus(); });
        }
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
    var 
    // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
    Positioning = /** @class */ (function () {
        function Positioning() {
        }
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.getAllStyles = /**
         * @param {?} element
         * @return {?}
         */
            function (element) { return window.getComputedStyle(element); };
        /**
         * @param {?} element
         * @param {?} prop
         * @return {?}
         */
        Positioning.prototype.getStyle = /**
         * @param {?} element
         * @param {?} prop
         * @return {?}
         */
            function (element, prop) { return this.getAllStyles(element)[prop]; };
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.isStaticPositioned = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                return (this.getStyle(element, 'position') || 'static') === 'static';
            };
        /**
         * @param {?} element
         * @return {?}
         */
        Positioning.prototype.offsetParent = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                /** @type {?} */
                var offsetParentEl = ( /** @type {?} */(element.offsetParent)) || document.documentElement;
                while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
                    offsetParentEl = ( /** @type {?} */(offsetParentEl.offsetParent));
                }
                return offsetParentEl || document.documentElement;
            };
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.position = /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
            function (element, round) {
                if (round === void 0) {
                    round = true;
                }
                /** @type {?} */
                var elPosition;
                /** @type {?} */
                var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
                if (this.getStyle(element, 'position') === 'fixed') {
                    elPosition = element.getBoundingClientRect();
                    elPosition = {
                        top: elPosition.top,
                        bottom: elPosition.bottom,
                        left: elPosition.left,
                        right: elPosition.right,
                        height: elPosition.height,
                        width: elPosition.width
                    };
                }
                else {
                    /** @type {?} */
                    var offsetParentEl = this.offsetParent(element);
                    elPosition = this.offset(element, false);
                    if (offsetParentEl !== document.documentElement) {
                        parentOffset = this.offset(offsetParentEl, false);
                    }
                    parentOffset.top += offsetParentEl.clientTop;
                    parentOffset.left += offsetParentEl.clientLeft;
                }
                elPosition.top -= parentOffset.top;
                elPosition.bottom -= parentOffset.top;
                elPosition.left -= parentOffset.left;
                elPosition.right -= parentOffset.left;
                if (round) {
                    elPosition.top = Math.round(elPosition.top);
                    elPosition.bottom = Math.round(elPosition.bottom);
                    elPosition.left = Math.round(elPosition.left);
                    elPosition.right = Math.round(elPosition.right);
                }
                return elPosition;
            };
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.offset = /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */
            function (element, round) {
                if (round === void 0) {
                    round = true;
                }
                /** @type {?} */
                var elBcr = element.getBoundingClientRect();
                /** @type {?} */
                var viewportOffset = {
                    top: window.pageYOffset - document.documentElement.clientTop,
                    left: window.pageXOffset - document.documentElement.clientLeft
                };
                /** @type {?} */
                var elOffset = {
                    height: elBcr.height || element.offsetHeight,
                    width: elBcr.width || element.offsetWidth,
                    top: elBcr.top + viewportOffset.top,
                    bottom: elBcr.bottom + viewportOffset.top,
                    left: elBcr.left + viewportOffset.left,
                    right: elBcr.right + viewportOffset.left
                };
                if (round) {
                    elOffset.height = Math.round(elOffset.height);
                    elOffset.width = Math.round(elOffset.width);
                    elOffset.top = Math.round(elOffset.top);
                    elOffset.bottom = Math.round(elOffset.bottom);
                    elOffset.left = Math.round(elOffset.left);
                    elOffset.right = Math.round(elOffset.right);
                }
                return elOffset;
            };
        /*
          Return false if the element to position is outside the viewport
        */
        /*
            Return false if the element to position is outside the viewport
          */
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} placement
         * @param {?=} appendToBody
         * @return {?}
         */
        Positioning.prototype.positionElements = /*
            Return false if the element to position is outside the viewport
          */
            /**
             * @param {?} hostElement
             * @param {?} targetElement
             * @param {?} placement
             * @param {?=} appendToBody
             * @return {?}
             */
            function (hostElement, targetElement, placement, appendToBody) {
                var _a = __read(placement.split('-'), 2), _b = _a[0], placementPrimary = _b === void 0 ? 'top' : _b, _c = _a[1], placementSecondary = _c === void 0 ? 'center' : _c;
                /** @type {?} */
                var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
                /** @type {?} */
                var targetElStyles = this.getAllStyles(targetElement);
                /** @type {?} */
                var marginTop = parseFloat(targetElStyles.marginTop);
                /** @type {?} */
                var marginBottom = parseFloat(targetElStyles.marginBottom);
                /** @type {?} */
                var marginLeft = parseFloat(targetElStyles.marginLeft);
                /** @type {?} */
                var marginRight = parseFloat(targetElStyles.marginRight);
                /** @type {?} */
                var topPosition = 0;
                /** @type {?} */
                var leftPosition = 0;
                switch (placementPrimary) {
                    case 'top':
                        topPosition = (hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom));
                        break;
                    case 'bottom':
                        topPosition = (hostElPosition.top + hostElPosition.height);
                        break;
                    case 'left':
                        leftPosition = (hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight));
                        break;
                    case 'right':
                        leftPosition = (hostElPosition.left + hostElPosition.width);
                        break;
                }
                switch (placementSecondary) {
                    case 'top':
                        topPosition = hostElPosition.top;
                        break;
                    case 'bottom':
                        topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                        break;
                    case 'left':
                        leftPosition = hostElPosition.left;
                        break;
                    case 'right':
                        leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                        break;
                    case 'center':
                        if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                            leftPosition = (hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2);
                        }
                        else {
                            topPosition = (hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2);
                        }
                        break;
                }
                /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
                // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;
                targetElement.style.transform = "translate(" + Math.round(leftPosition) + "px, " + Math.round(topPosition) + "px)";
                // Check if the targetElement is inside the viewport
                /** @type {?} */
                var targetElBCR = targetElement.getBoundingClientRect();
                /** @type {?} */
                var html = document.documentElement;
                /** @type {?} */
                var windowHeight = window.innerHeight || html.clientHeight;
                /** @type {?} */
                var windowWidth = window.innerWidth || html.clientWidth;
                return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth &&
                    targetElBCR.bottom <= windowHeight;
            };
        return Positioning;
    }());
    /** @type {?} */
    var placementSeparator = /\s+/;
    /** @type {?} */
    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} baseClass
     * @return {?}
     */
    function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
        var e_1, _a;
        /** @type {?} */
        var placementVals = Array.isArray(placement) ? placement : ( /** @type {?} */(placement.split(placementSeparator)));
        /** @type {?} */
        var allowedPlacements = [
            'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom',
            'right-top', 'right-bottom'
        ];
        /** @type {?} */
        var classList = targetElement.classList;
        /** @type {?} */
        var addClassesToTarget = function (targetPlacement) {
            var _a = __read(targetPlacement.split('-'), 2), primary = _a[0], secondary = _a[1];
            /** @type {?} */
            var classes = [];
            if (baseClass) {
                classes.push(baseClass + "-" + primary);
                if (secondary) {
                    classes.push(baseClass + "-" + primary + "-" + secondary);
                }
                classes.forEach(function (classname) { classList.add(classname); });
            }
            return classes;
        };
        // Remove old placement classes to avoid issues
        if (baseClass) {
            allowedPlacements.forEach(function (placementToRemove) { classList.remove(baseClass + "-" + placementToRemove); });
        }
        // replace auto placement with other placements
        /** @type {?} */
        var hasAuto = placementVals.findIndex(function (val) { return val === 'auto'; });
        if (hasAuto >= 0) {
            allowedPlacements.forEach(function (obj) {
                if (placementVals.find(function (val) { return val.search('^' + obj) !== -1; }) == null) {
                    placementVals.splice(hasAuto++, 1, ( /** @type {?} */(obj)));
                }
            });
        }
        // coordinates where to position
        // Required for transform:
        /** @type {?} */
        var style = targetElement.style;
        style.position = 'absolute';
        style.top = '0';
        style.left = '0';
        // The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
        // style['will-change'] = 'transform';
        /** @type {?} */
        var testPlacement;
        /** @type {?} */
        var isInViewport = false;
        try {
            for (var placementVals_1 = __values(placementVals), placementVals_1_1 = placementVals_1.next(); !placementVals_1_1.done; placementVals_1_1 = placementVals_1.next()) {
                testPlacement = placementVals_1_1.value;
                /** @type {?} */
                var addedClasses = addClassesToTarget(testPlacement);
                if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
                    isInViewport = true;
                    break;
                }
                // Remove the baseClasses for further calculation
                if (baseClass) {
                    addedClasses.forEach(function (classname) { classList.remove(classname); });
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (placementVals_1_1 && !placementVals_1_1.done && (_a = placementVals_1.return))
                    _a.call(placementVals_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        if (!isInViewport) {
            // If nothing match, the first placement is the default one
            testPlacement = placementVals[0];
            addClassesToTarget(testPlacement);
            positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
        }
        return testPlacement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
        return new NgbDateISOParserFormatter();
    }
    /**
     * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
     * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
     * to use an alternative format.
     * @abstract
     */
    var NgbDateParserFormatter = /** @class */ (function () {
        function NgbDateParserFormatter() {
        }
        NgbDateParserFormatter.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY },] }
        ];
        /** @nocollapse */ NgbDateParserFormatter.ngInjectableDef = i0.defineInjectable({ factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY, token: NgbDateParserFormatter, providedIn: "root" });
        return NgbDateParserFormatter;
    }());
    var NgbDateISOParserFormatter = /** @class */ (function (_super) {
        __extends(NgbDateISOParserFormatter, _super);
        function NgbDateISOParserFormatter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NgbDateISOParserFormatter.prototype.parse = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    /** @type {?} */
                    var dateParts = value.trim().split('-');
                    if (dateParts.length === 1 && isNumber(dateParts[0])) {
                        return { year: toInteger(dateParts[0]), month: null, day: null };
                    }
                    else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                        return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: null };
                    }
                    else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                        return { year: toInteger(dateParts[0]), month: toInteger(dateParts[1]), day: toInteger(dateParts[2]) };
                    }
                }
                return null;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateISOParserFormatter.prototype.format = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date ?
                    date.year + "-" + (isNumber(date.month) ? padNumber(date.month) : '') + "-" + (isNumber(date.day) ? padNumber(date.day) : '') :
                    '';
            };
        NgbDateISOParserFormatter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDateISOParserFormatter;
    }(NgbDateParserFormatter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbInputDatepicker; }),
        multi: true
    };
    /** @type {?} */
    var NGB_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        useExisting: i0.forwardRef(function () { return NgbInputDatepicker; }),
        multi: true
    };
    /**
     * A directive that makes it possible to have datepickers on input fields.
     * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
     */
    var NgbInputDatepicker = /** @class */ (function () {
        function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _service, _calendar, _dateAdapter, _document, _changeDetector) {
            var _this = this;
            this._parserFormatter = _parserFormatter;
            this._elRef = _elRef;
            this._vcRef = _vcRef;
            this._renderer = _renderer;
            this._cfr = _cfr;
            this._ngZone = _ngZone;
            this._service = _service;
            this._calendar = _calendar;
            this._dateAdapter = _dateAdapter;
            this._document = _document;
            this._changeDetector = _changeDetector;
            this._closed$ = new rxjs.Subject();
            this._cRef = null;
            this._disabled = false;
            /**
             * Indicates whether the datepicker popup should be closed automatically after date selection / outside click or not.
             *
             * By default the popup will close on both date selection and outside click. If the value is 'false' the popup has to
             * be closed manually via '.close()' or '.toggle()' methods. If the value is set to 'inside' the popup will close on
             * date selection only. For the 'outside' the popup will close only on the outside click.
             *
             * \@since 3.0.0
             */
            this.autoClose = true;
            /**
             * Placement of a datepicker popup accepts:
             *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
             *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
             *  array or a space separated string of above values
             */
            this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
            /**
             * An event fired when user selects a date using keyboard or mouse.
             * The payload of the event is currently selected NgbDate.
             *
             * \@since 1.1.1
             */
            this.dateSelect = new i0.EventEmitter();
            /**
             * An event fired when navigation happens and currently displayed month changes.
             * See NgbDatepickerNavigateEvent for the payload info.
             */
            this.navigate = new i0.EventEmitter();
            this._onChange = function (_) { };
            this._onTouched = function () { };
            this._validatorChange = function () { };
            this._zoneSubscription = _ngZone.onStable.subscribe(function () {
                if (_this._cRef) {
                    positionElements(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement, _this.container === 'body');
                }
            });
        }
        Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = value === '' || (value && value !== 'false');
                if (this.isOpen()) {
                    this._cRef.instance.setDisabledState(this._disabled);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbInputDatepicker.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this._onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbInputDatepicker.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this._onTouched = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbInputDatepicker.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this._validatorChange = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbInputDatepicker.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { this.disabled = isDisabled; };
        /**
         * @param {?} c
         * @return {?}
         */
        NgbInputDatepicker.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                /** @type {?} */
                var value = c.value;
                if (value === null || value === undefined) {
                    return null;
                }
                /** @type {?} */
                var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));
                if (!this._calendar.isValid(ngbDate)) {
                    return { 'ngbDate': { invalid: c.value } };
                }
                if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
                    return { 'ngbDate': { requiredBefore: this.minDate } };
                }
                if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
                    return { 'ngbDate': { requiredAfter: this.maxDate } };
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbInputDatepicker.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));
                this._writeModelValue(this._model);
            };
        /**
         * @param {?} value
         * @param {?=} updateView
         * @return {?}
         */
        NgbInputDatepicker.prototype.manualDateChange = /**
         * @param {?} value
         * @param {?=} updateView
         * @return {?}
         */
            function (value, updateView) {
                if (updateView === void 0) {
                    updateView = false;
                }
                /** @type {?} */
                var inputValueChanged = value !== this._inputValue;
                if (inputValueChanged) {
                    this._inputValue = value;
                    this._model = this._fromDateStruct(this._parserFormatter.parse(value));
                }
                if (inputValueChanged || !updateView) {
                    this._onChange(this._model ? this._dateAdapter.toModel(this._model) : (value === '' ? null : value));
                }
                if (updateView && this._model) {
                    this._writeModelValue(this._model);
                }
            };
        /**
         * @return {?}
         */
        NgbInputDatepicker.prototype.isOpen = /**
         * @return {?}
         */
            function () { return !!this._cRef; };
        /**
         * Opens the datepicker with the selected date indicated by the ngModel value.
         */
        /**
         * Opens the datepicker with the selected date indicated by the ngModel value.
         * @return {?}
         */
        NgbInputDatepicker.prototype.open = /**
         * Opens the datepicker with the selected date indicated by the ngModel value.
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isOpen()) {
                    /** @type {?} */
                    var cf = this._cfr.resolveComponentFactory(NgbDatepicker);
                    this._cRef = this._vcRef.createComponent(cf);
                    this._applyPopupStyling(this._cRef.location.nativeElement);
                    this._applyDatepickerInputs(this._cRef.instance);
                    this._subscribeForDatepickerOutputs(this._cRef.instance);
                    this._cRef.instance.ngOnInit();
                    this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model));
                    // date selection event handling
                    this._cRef.instance.registerOnChange(function (selectedDate) {
                        _this.writeValue(selectedDate);
                        _this._onChange(selectedDate);
                        _this._onTouched();
                    });
                    this._cRef.changeDetectorRef.detectChanges();
                    this._cRef.instance.setDisabledState(this.disabled);
                    if (this.container === 'body') {
                        window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
                    }
                    // focus handling
                    ngbFocusTrap(this._cRef.location.nativeElement, this._closed$, true);
                    this._cRef.instance.focus();
                    ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this._closed$, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
                }
            };
        /**
         * Closes the datepicker popup.
         */
        /**
         * Closes the datepicker popup.
         * @return {?}
         */
        NgbInputDatepicker.prototype.close = /**
         * Closes the datepicker popup.
         * @return {?}
         */
            function () {
                if (this.isOpen()) {
                    this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
                    this._cRef = null;
                    this._closed$.next();
                    this._changeDetector.markForCheck();
                }
            };
        /**
         * Toggles the datepicker popup (opens when closed and closes when opened).
         */
        /**
         * Toggles the datepicker popup (opens when closed and closes when opened).
         * @return {?}
         */
        NgbInputDatepicker.prototype.toggle = /**
         * Toggles the datepicker popup (opens when closed and closes when opened).
         * @return {?}
         */
            function () {
                if (this.isOpen()) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         */
        /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         * @param {?=} date
         * @return {?}
         */
        NgbInputDatepicker.prototype.navigateTo = /**
         * Navigates current view to provided date.
         * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         * Use 'startDate' input as an alternative
         * @param {?=} date
         * @return {?}
         */
            function (date) {
                if (this.isOpen()) {
                    this._cRef.instance.navigateTo(date);
                }
            };
        /**
         * @return {?}
         */
        NgbInputDatepicker.prototype.onBlur = /**
         * @return {?}
         */
            function () { this._onTouched(); };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbInputDatepicker.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['minDate'] || changes['maxDate']) {
                    this._validatorChange();
                }
            };
        /**
         * @return {?}
         */
        NgbInputDatepicker.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.close();
                this._zoneSubscription.unsubscribe();
            };
        /**
         * @param {?} datepickerInstance
         * @return {?}
         */
        NgbInputDatepicker.prototype._applyDatepickerInputs = /**
         * @param {?} datepickerInstance
         * @return {?}
         */
            function (datepickerInstance) {
                var _this = this;
                ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
                    'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
                    .forEach(function (optionName) {
                    if (_this[optionName] !== undefined) {
                        datepickerInstance[optionName] = _this[optionName];
                    }
                });
                datepickerInstance.startDate = this.startDate || this._model;
            };
        /**
         * @param {?} nativeElement
         * @return {?}
         */
        NgbInputDatepicker.prototype._applyPopupStyling = /**
         * @param {?} nativeElement
         * @return {?}
         */
            function (nativeElement) {
                this._renderer.addClass(nativeElement, 'dropdown-menu');
                this._renderer.setStyle(nativeElement, 'padding', '0');
                this._renderer.addClass(nativeElement, 'show');
            };
        /**
         * @param {?} datepickerInstance
         * @return {?}
         */
        NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = /**
         * @param {?} datepickerInstance
         * @return {?}
         */
            function (datepickerInstance) {
                var _this = this;
                datepickerInstance.navigate.subscribe(function (navigateEvent) { return _this.navigate.emit(navigateEvent); });
                datepickerInstance.select.subscribe(function (date) {
                    _this.dateSelect.emit(date);
                    if (_this.autoClose === true || _this.autoClose === 'inside') {
                        _this.close();
                    }
                });
            };
        /**
         * @param {?} model
         * @return {?}
         */
        NgbInputDatepicker.prototype._writeModelValue = /**
         * @param {?} model
         * @return {?}
         */
            function (model) {
                /** @type {?} */
                var value = this._parserFormatter.format(model);
                this._inputValue = value;
                this._renderer.setProperty(this._elRef.nativeElement, 'value', value);
                if (this.isOpen()) {
                    this._cRef.instance.writeValue(this._dateAdapter.toModel(model));
                    this._onTouched();
                }
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbInputDatepicker.prototype._fromDateStruct = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
                return this._calendar.isValid(ngbDate) ? ngbDate : null;
            };
        NgbInputDatepicker.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'input[ngbDatepicker]',
                        exportAs: 'ngbDatepicker',
                        host: {
                            '(input)': 'manualDateChange($event.target.value)',
                            '(change)': 'manualDateChange($event.target.value, true)',
                            '(blur)': 'onBlur()',
                            '[disabled]': 'disabled'
                        },
                        providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, NgbDatepickerService]
                    },] }
        ];
        /** @nocollapse */
        NgbInputDatepicker.ctorParameters = function () {
            return [
                { type: NgbDateParserFormatter },
                { type: i0.ElementRef },
                { type: i0.ViewContainerRef },
                { type: i0.Renderer2 },
                { type: i0.ComponentFactoryResolver },
                { type: i0.NgZone },
                { type: NgbDatepickerService },
                { type: NgbCalendar },
                { type: NgbDateAdapter },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbInputDatepicker.propDecorators = {
            autoClose: [{ type: i0.Input }],
            dayTemplate: [{ type: i0.Input }],
            dayTemplateData: [{ type: i0.Input }],
            displayMonths: [{ type: i0.Input }],
            firstDayOfWeek: [{ type: i0.Input }],
            footerTemplate: [{ type: i0.Input }],
            markDisabled: [{ type: i0.Input }],
            minDate: [{ type: i0.Input }],
            maxDate: [{ type: i0.Input }],
            navigation: [{ type: i0.Input }],
            outsideDays: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            showWeekdays: [{ type: i0.Input }],
            showWeekNumbers: [{ type: i0.Input }],
            startDate: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            dateSelect: [{ type: i0.Output }],
            navigate: [{ type: i0.Output }],
            disabled: [{ type: i0.Input }]
        };
        return NgbInputDatepicker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerDayView = /** @class */ (function () {
        function NgbDatepickerDayView(i18n) {
            this.i18n = i18n;
        }
        /**
         * @return {?}
         */
        NgbDatepickerDayView.prototype.isMuted = /**
         * @return {?}
         */
            function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
        NgbDatepickerDayView.decorators = [
            { type: i0.Component, args: [{
                        selector: '[ngbDatepickerDayView]',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: {
                            'class': 'btn-light',
                            '[class.bg-primary]': 'selected',
                            '[class.text-white]': 'selected',
                            '[class.text-muted]': 'isMuted()',
                            '[class.outside]': 'isMuted()',
                            '[class.active]': 'focused'
                        },
                        template: "{{ i18n.getDayNumerals(date) }}",
                        styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
                    }] }
        ];
        /** @nocollapse */
        NgbDatepickerDayView.ctorParameters = function () {
            return [
                { type: NgbDatepickerI18n }
            ];
        };
        NgbDatepickerDayView.propDecorators = {
            currentMonth: [{ type: i0.Input }],
            date: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            focused: [{ type: i0.Input }],
            selected: [{ type: i0.Input }]
        };
        return NgbDatepickerDayView;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerNavigationSelect = /** @class */ (function () {
        function NgbDatepickerNavigationSelect(i18n) {
            this.i18n = i18n;
            this.select = new i0.EventEmitter();
        }
        /**
         * @param {?} month
         * @return {?}
         */
        NgbDatepickerNavigationSelect.prototype.changeMonth = /**
         * @param {?} month
         * @return {?}
         */
            function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
        /**
         * @param {?} year
         * @return {?}
         */
        NgbDatepickerNavigationSelect.prototype.changeYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
        NgbDatepickerNavigationSelect.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-datepicker-navigation-select',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
                        styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}"]
                    }] }
        ];
        /** @nocollapse */
        NgbDatepickerNavigationSelect.ctorParameters = function () {
            return [
                { type: NgbDatepickerI18n }
            ];
        };
        NgbDatepickerNavigationSelect.propDecorators = {
            date: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            months: [{ type: i0.Input }],
            years: [{ type: i0.Input }],
            select: [{ type: i0.Output }]
        };
        return NgbDatepickerNavigationSelect;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var NgbCalendarHijri = /** @class */ (function (_super) {
        __extends(NgbCalendarHijri, _super);
        function NgbCalendarHijri() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NgbCalendarHijri.prototype.getDaysPerWeek = /**
         * @return {?}
         */
            function () { return 7; };
        /**
         * @return {?}
         */
        NgbCalendarHijri.prototype.getMonths = /**
         * @return {?}
         */
            function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
        /**
         * @return {?}
         */
        NgbCalendarHijri.prototype.getWeeksPerMonth = /**
         * @return {?}
         */
            function () { return 6; };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarHijri.prototype.getNext = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                date = new NgbDate(date.year, date.month, date.day);
                switch (period) {
                    case 'y':
                        date = this._setYear(date, date.year + number);
                        date.month = 1;
                        date.day = 1;
                        return date;
                    case 'm':
                        date = this._setMonth(date, date.month + number);
                        date.day = 1;
                        return date;
                    case 'd':
                        return this._setDay(date, date.day + number);
                    default:
                        return date;
                }
            };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarHijri.prototype.getPrev = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                return this.getNext(date, period, -number);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHijri.prototype.getWeekday = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var day = this.toGregorian(date).getDay();
                // in JS Date Sun=0, in ISO 8601 Sun=7
                return day === 0 ? 7 : day;
            };
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        NgbCalendarHijri.prototype.getWeekNumber = /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
            function (week, firstDayOfWeek) {
                // in JS Date Sun=0, in ISO 8601 Sun=7
                if (firstDayOfWeek === 7) {
                    firstDayOfWeek = 0;
                }
                /** @type {?} */
                var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                /** @type {?} */
                var date = week[thursdayIndex];
                /** @type {?} */
                var jsDate = this.toGregorian(date);
                jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                // Thursday
                /** @type {?} */
                var time = jsDate.getTime();
                /** @type {?} */
                var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
                return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
            };
        /**
         * @return {?}
         */
        NgbCalendarHijri.prototype.getToday = /**
         * @return {?}
         */
            function () { return this.fromGregorian(new Date()); };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHijri.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
                    !isNaN(this.toGregorian(date).getTime());
            };
        /**
         * @param {?} date
         * @param {?} day
         * @return {?}
         */
        NgbCalendarHijri.prototype._setDay = /**
         * @param {?} date
         * @param {?} day
         * @return {?}
         */
            function (date, day) {
                day = +day;
                /** @type {?} */
                var mDays = this.getDaysPerMonth(date.month, date.year);
                if (day <= 0) {
                    while (day <= 0) {
                        date = this._setMonth(date, date.month - 1);
                        mDays = this.getDaysPerMonth(date.month, date.year);
                        day += mDays;
                    }
                }
                else if (day > mDays) {
                    while (day > mDays) {
                        day -= mDays;
                        date = this._setMonth(date, date.month + 1);
                        mDays = this.getDaysPerMonth(date.month, date.year);
                    }
                }
                date.day = day;
                return date;
            };
        /**
         * @param {?} date
         * @param {?} month
         * @return {?}
         */
        NgbCalendarHijri.prototype._setMonth = /**
         * @param {?} date
         * @param {?} month
         * @return {?}
         */
            function (date, month) {
                month = +month;
                date.year = date.year + Math.floor((month - 1) / 12);
                date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
                return date;
            };
        /**
         * @param {?} date
         * @param {?} year
         * @return {?}
         */
        NgbCalendarHijri.prototype._setYear = /**
         * @param {?} date
         * @param {?} year
         * @return {?}
         */
            function (date, year) {
                date.year = +year;
                return date;
            };
        NgbCalendarHijri.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarHijri;
    }(NgbCalendar));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Checks if islamic year is a leap year
     * @param {?} hYear
     * @return {?}
     */
    function isIslamicLeapYear(hYear) {
        return (14 + 11 * hYear) % 30 < 11;
    }
    /**
     * Checks if gregorian years is a leap year
     * @param {?} gDate
     * @return {?}
     */
    function isGregorianLeapYear(gDate) {
        /** @type {?} */
        var year = gDate.getFullYear();
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * Returns the start of Hijri Month.
     * `hMonth` is 0 for Muharram, 1 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hYear
     * @param {?} hMonth
     * @return {?}
     */
    function getIslamicMonthStart(hYear, hMonth) {
        return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
    }
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     * @param {?} year
     * @return {?}
     */
    function getIslamicYearStart(year) {
        return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function mod(a, b) {
        return a - b * Math.floor(a / b);
    }
    /**
     * The civil calendar is one type of Hijri calendars used in islamic countries.
     * Uses a fixed cycle of alternating 29- and 30-day months,
     * with a leap day added to the last month of 11 out of every 30 years.
     * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
     * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
     * Dershowitz.
     * @type {?}
     */
    var GREGORIAN_EPOCH = 1721425.5;
    /** @type {?} */
    var ISLAMIC_EPOCH = 1948439.5;
    var NgbCalendarIslamicCivil = /** @class */ (function (_super) {
        __extends(NgbCalendarIslamicCivil, _super);
        function NgbCalendarIslamicCivil() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
         * `gDate` is a JS Date to be converted to Hijri.
         */
        /**
         * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
         * `gDate` is a JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
        NgbCalendarIslamicCivil.prototype.fromGregorian = /**
         * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
         * `gDate` is a JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
            function (gDate) {
                /** @type {?} */
                var gYear = gDate.getFullYear();
                /** @type {?} */
                var gMonth = gDate.getMonth();
                /** @type {?} */
                var gDay = gDate.getDate();
                /** @type {?} */
                var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) +
                    -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
                    Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
                julianDay = Math.floor(julianDay) + 0.5;
                /** @type {?} */
                var days = julianDay - ISLAMIC_EPOCH;
                /** @type {?} */
                var hYear = Math.floor((30 * days + 10646) / 10631.0);
                /** @type {?} */
                var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
                hMonth = Math.min(hMonth, 11);
                /** @type {?} */
                var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
                return new NgbDate(hYear, hMonth + 1, hDay);
            };
        /**
         * Returns the equivalent JS date value for a give input islamic(civil) date.
         * `hDate` is an islamic(civil) date to be converted to Gregorian.
         */
        /**
         * Returns the equivalent JS date value for a give input islamic(civil) date.
         * `hDate` is an islamic(civil) date to be converted to Gregorian.
         * @param {?} hDate
         * @return {?}
         */
        NgbCalendarIslamicCivil.prototype.toGregorian = /**
         * Returns the equivalent JS date value for a give input islamic(civil) date.
         * `hDate` is an islamic(civil) date to be converted to Gregorian.
         * @param {?} hDate
         * @return {?}
         */
            function (hDate) {
                /** @type {?} */
                var hYear = hDate.year;
                /** @type {?} */
                var hMonth = hDate.month - 1;
                /** @type {?} */
                var hDay = hDate.day;
                /** @type {?} */
                var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
                /** @type {?} */
                var wjd = Math.floor(julianDay - 0.5) + 0.5;
                /** @type {?} */
                var depoch = wjd - GREGORIAN_EPOCH;
                /** @type {?} */
                var quadricent = Math.floor(depoch / 146097);
                /** @type {?} */
                var dqc = mod(depoch, 146097);
                /** @type {?} */
                var cent = Math.floor(dqc / 36524);
                /** @type {?} */
                var dcent = mod(dqc, 36524);
                /** @type {?} */
                var quad = Math.floor(dcent / 1461);
                /** @type {?} */
                var dquad = mod(dcent, 1461);
                /** @type {?} */
                var yindex = Math.floor(dquad / 365);
                /** @type {?} */
                var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
                if (!(cent === 4 || yindex === 4)) {
                    year++;
                }
                /** @type {?} */
                var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                    Math.floor((year - 1) / 400);
                /** @type {?} */
                var yearday = wjd - gYearStart;
                /** @type {?} */
                var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                    Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
                /** @type {?} */
                var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
                /** @type {?} */
                var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
                /** @type {?} */
                var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) +
                    Math.floor((year - 1) / 400) +
                    Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) +
                        1);
                /** @type {?} */
                var day = wjd - tjd2 + 1;
                return new Date(year, month - 1, day);
            };
        /**
         * Returns the number of days in a specific Hijri month.
         * `month` is 1 for Muharram, 2 for Safar, etc.
         * `year` is any Hijri year.
         */
        /**
         * Returns the number of days in a specific Hijri month.
         * `month` is 1 for Muharram, 2 for Safar, etc.
         * `year` is any Hijri year.
         * @param {?} month
         * @param {?} year
         * @return {?}
         */
        NgbCalendarIslamicCivil.prototype.getDaysPerMonth = /**
         * Returns the number of days in a specific Hijri month.
         * `month` is 1 for Muharram, 2 for Safar, etc.
         * `year` is any Hijri year.
         * @param {?} month
         * @param {?} year
         * @return {?}
         */
            function (month, year) {
                year = year + Math.floor(month / 13);
                month = ((month - 1) % 12) + 1;
                /** @type {?} */
                var length = 29 + month % 2;
                if (month === 12 && isIslamicLeapYear(year)) {
                    length++;
                }
                return length;
            };
        NgbCalendarIslamicCivil.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarIslamicCivil;
    }(NgbCalendarHijri));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Umalqura calendar is one type of Hijri calendars used in islamic countries.
     * This Calendar is used by Saudi Arabia for administrative purpose.
     * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
     * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
     * @type {?}
     */
    var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
    /** @type {?} */
    var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
    /** @type {?} */
    var HIJRI_BEGIN = 1300;
    /** @type {?} */
    var HIJRI_END = 1600;
    /** @type {?} */
    var ONE_DAY = 1000 * 60 * 60 * 24;
    /** @type {?} */
    var MONTH_LENGTH = [
        // 1300-1304
        '101010101010', '110101010100', '111011001001', '011011010100', '011011101010',
        // 1305-1309
        '001101101100', '101010101101', '010101010101', '011010101001', '011110010010',
        // 1310-1314
        '101110101001', '010111010100', '101011011010', '010101011100', '110100101101',
        // 1315-1319
        '011010010101', '011101001010', '101101010100', '101101101010', '010110101101',
        // 1320-1324
        '010010101110', '101001001111', '010100010111', '011010001011', '011010100101',
        // 1325-1329
        '101011010101', '001011010110', '100101011011', '010010011101', '101001001101',
        // 1330-1334
        '110100100110', '110110010101', '010110101100', '100110110110', '001010111010',
        // 1335-1339
        '101001011011', '010100101011', '101010010101', '011011001010', '101011101001',
        // 1340-1344
        '001011110100', '100101110110', '001010110110', '100101010110', '101011001010',
        // 1345-1349
        '101110100100', '101111010010', '010111011001', '001011011100', '100101101101',
        // 1350-1354
        '010101001101', '101010100101', '101101010010', '101110100101', '010110110100',
        // 1355-1359
        '100110110110', '010101010111', '001010010111', '010101001011', '011010100011',
        // 1360-1364
        '011101010010', '101101100101', '010101101010', '101010101011', '010100101011',
        // 1365-1369
        '110010010101', '110101001010', '110110100101', '010111001010', '101011010110',
        // 1370-1374
        '100101010111', '010010101011', '100101001011', '101010100101', '101101010010',
        // 1375-1379
        '101101101010', '010101110101', '001001110110', '100010110111', '010001011011',
        // 1380-1384
        '010101010101', '010110101001', '010110110100', '100111011010', '010011011101',
        // 1385-1389
        '001001101110', '100100110110', '101010101010', '110101010100', '110110110010',
        // 1390-1394
        '010111010101', '001011011010', '100101011011', '010010101011', '101001010101',
        // 1395-1399
        '101101001001', '101101100100', '101101110001', '010110110100', '101010110101',
        // 1400-1404
        '101001010101', '110100100101', '111010010010', '111011001001', '011011010100',
        // 1405-1409
        '101011101001', '100101101011', '010010101011', '101010010011', '110101001001',
        // 1410-1414
        '110110100100', '110110110010', '101010111001', '010010111010', '101001011011',
        // 1415-1419
        '010100101011', '101010010101', '101100101010', '101101010101', '010101011100',
        // 1420-1424
        '010010111101', '001000111101', '100100011101', '101010010101', '101101001010',
        // 1425-1429
        '101101011010', '010101101101', '001010110110', '100100111011', '010010011011',
        // 1430-1434
        '011001010101', '011010101001', '011101010100', '101101101010', '010101101100',
        // 1435-1439
        '101010101101', '010101010101', '101100101001', '101110010010', '101110101001',
        // 1440-1444
        '010111010100', '101011011010', '010101011010', '101010101011', '010110010101',
        // 1445-1449
        '011101001001', '011101100100', '101110101010', '010110110101', '001010110110',
        // 1450-1454
        '101001010110', '111001001101', '101100100101', '101101010010', '101101101010',
        // 1455-1459
        '010110101101', '001010101110', '100100101111', '010010010111', '011001001011',
        // 1460-1464
        '011010100101', '011010101100', '101011010110', '010101011101', '010010011101',
        // 1465-1469
        '101001001101', '110100010110', '110110010101', '010110101010', '010110110101',
        // 1470-1474
        '001011011010', '100101011011', '010010101101', '010110010101', '011011001010',
        // 1475-1479
        '011011100100', '101011101010', '010011110101', '001010110110', '100101010110',
        // 1480-1484
        '101010101010', '101101010100', '101111010010', '010111011001', '001011101010',
        // 1485-1489
        '100101101101', '010010101101', '101010010101', '101101001010', '101110100101',
        // 1490-1494
        '010110110010', '100110110101', '010011010110', '101010010111', '010101000111',
        // 1495-1499
        '011010010011', '011101001001', '101101010101', '010101101010', '101001101011',
        // 1500-1504
        '010100101011', '101010001011', '110101000110', '110110100011', '010111001010',
        // 1505-1509
        '101011010110', '010011011011', '001001101011', '100101001011', '101010100101',
        // 1510-1514
        '101101010010', '101101101001', '010101110101', '000101110110', '100010110111',
        // 1515-1519
        '001001011011', '010100101011', '010101100101', '010110110100', '100111011010',
        // 1520-1524
        '010011101101', '000101101101', '100010110110', '101010100110', '110101010010',
        // 1525-1529
        '110110101001', '010111010100', '101011011010', '100101011011', '010010101011',
        // 1530-1534
        '011001010011', '011100101001', '011101100010', '101110101001', '010110110010',
        // 1535-1539
        '101010110101', '010101010101', '101100100101', '110110010010', '111011001001',
        // 1540-1544
        '011011010010', '101011101001', '010101101011', '010010101011', '101001010101',
        // 1545-1549
        '110100101001', '110101010100', '110110101010', '100110110101', '010010111010',
        // 1550-1554
        '101000111011', '010010011011', '101001001101', '101010101010', '101011010101',
        // 1555-1559
        '001011011010', '100101011101', '010001011110', '101000101110', '110010011010',
        // 1560-1564
        '110101010101', '011010110010', '011010111001', '010010111010', '101001011101',
        // 1565-1569
        '010100101101', '101010010101', '101101010010', '101110101000', '101110110100',
        // 1570-1574
        '010110111001', '001011011010', '100101011010', '101101001010', '110110100100',
        // 1575-1579
        '111011010001', '011011101000', '101101101010', '010101101101', '010100110101',
        // 1580-1584
        '011010010101', '110101001010', '110110101000', '110111010100', '011011011010',
        // 1585-1589
        '010101011011', '001010011101', '011000101011', '101100010101', '101101001010',
        // 1590-1594
        '101110010101', '010110101010', '101010101110', '100100101110', '110010001111',
        // 1595-1599
        '010100100111', '011010010101', '011010101010', '101011010110', '010101011101',
        // 1600
        '001010011101'
    ];
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function getDaysDiff(date1, date2) {
        /** @type {?} */
        var diff = Math.abs(date1.getTime() - date2.getTime());
        return Math.round(diff / ONE_DAY);
    }
    var NgbCalendarIslamicUmalqura = /** @class */ (function (_super) {
        __extends(NgbCalendarIslamicUmalqura, _super);
        function NgbCalendarIslamicUmalqura() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
        * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
        * `gdate` is s JS Date to be converted to Hijri.
        */
        /**
         * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
         * `gdate` is s JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
        NgbCalendarIslamicUmalqura.prototype.fromGregorian = /**
         * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
         * `gdate` is s JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
            function (gDate) {
                /** @type {?} */
                var hDay = 1;
                /** @type {?} */
                var hMonth = 0;
                /** @type {?} */
                var hYear = 1300;
                /** @type {?} */
                var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);
                if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
                    /** @type {?} */
                    var year = 1300;
                    for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
                        for (var j = 0; j < 12; j++) {
                            /** @type {?} */
                            var numOfDays = +MONTH_LENGTH[i][j] + 29;
                            if (daysDiff <= numOfDays) {
                                hDay = daysDiff + 1;
                                if (hDay > numOfDays) {
                                    hDay = 1;
                                    j++;
                                }
                                if (j > 11) {
                                    j = 0;
                                    year++;
                                }
                                hMonth = j;
                                hYear = year;
                                return new NgbDate(hYear, hMonth + 1, hDay);
                            }
                            daysDiff = daysDiff - numOfDays;
                        }
                    }
                }
                else {
                    return _super.prototype.fromGregorian.call(this, gDate);
                }
            };
        /**
        * Converts the current Hijri date to Gregorian.
        */
        /**
         * Converts the current Hijri date to Gregorian.
         * @param {?} hDate
         * @return {?}
         */
        NgbCalendarIslamicUmalqura.prototype.toGregorian = /**
         * Converts the current Hijri date to Gregorian.
         * @param {?} hDate
         * @return {?}
         */
            function (hDate) {
                /** @type {?} */
                var hYear = hDate.year;
                /** @type {?} */
                var hMonth = hDate.month - 1;
                /** @type {?} */
                var hDay = hDate.day;
                /** @type {?} */
                var gDate = new Date(GREGORIAN_FIRST_DATE);
                /** @type {?} */
                var dayDiff = hDay - 1;
                if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
                    for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
                        for (var m = 0; m < 12; m++) {
                            dayDiff += +MONTH_LENGTH[y][m] + 29;
                        }
                    }
                    for (var m = 0; m < hMonth; m++) {
                        dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][m] + 29;
                    }
                    gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
                }
                else {
                    gDate = _super.prototype.toGregorian.call(this, hDate);
                }
                return gDate;
            };
        /**
        * Returns the number of days in a specific Hijri hMonth.
        * `hMonth` is 1 for Muharram, 2 for Safar, etc.
        * `hYear` is any Hijri hYear.
        */
        /**
         * Returns the number of days in a specific Hijri hMonth.
         * `hMonth` is 1 for Muharram, 2 for Safar, etc.
         * `hYear` is any Hijri hYear.
         * @param {?} hMonth
         * @param {?} hYear
         * @return {?}
         */
        NgbCalendarIslamicUmalqura.prototype.getDaysPerMonth = /**
         * Returns the number of days in a specific Hijri hMonth.
         * `hMonth` is 1 for Muharram, 2 for Safar, etc.
         * `hYear` is any Hijri hYear.
         * @param {?} hMonth
         * @param {?} hYear
         * @return {?}
         */
            function (hMonth, hYear) {
                if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
                    /** @type {?} */
                    var pos = hYear - HIJRI_BEGIN;
                    return +MONTH_LENGTH[pos][hMonth - 1] + 29;
                }
                return _super.prototype.getDaysPerMonth.call(this, hMonth, hYear);
            };
        NgbCalendarIslamicUmalqura.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarIslamicUmalqura;
    }(NgbCalendarIslamicCivil));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Returns the equivalent JS date value for a give input Jalali date.
     * `jalaliDate` is an Jalali date to be converted to Gregorian.
     * @param {?} jalaliDate
     * @return {?}
     */
    function toGregorian(jalaliDate) {
        /** @type {?} */
        var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
        /** @type {?} */
        var date = julianToGregorian(jdn);
        date.setHours(6, 30, 3, 200);
        return date;
    }
    /**
     * Returns the equivalent jalali date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to jalali.
     * utc to local
     * @param {?} gdate
     * @return {?}
     */
    function fromGregorian(gdate) {
        /** @type {?} */
        var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
        return julianToJalali(g2d);
    }
    /**
     * @param {?} date
     * @param {?} yearValue
     * @return {?}
     */
    function setJalaliYear(date, yearValue) {
        date.year = +yearValue;
        return date;
    }
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */
    function setJalaliMonth(date, month) {
        month = +month;
        date.year = date.year + Math.floor((month - 1) / 12);
        date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
        return date;
    }
    /**
     * @param {?} date
     * @param {?} day
     * @return {?}
     */
    function setJalaliDay(date, day) {
        /** @type {?} */
        var mDays = getDaysPerMonth(date.month, date.year);
        if (day <= 0) {
            while (day <= 0) {
                date = setJalaliMonth(date, date.month - 1);
                mDays = getDaysPerMonth(date.month, date.year);
                day += mDays;
            }
        }
        else if (day > mDays) {
            while (day > mDays) {
                day -= mDays;
                date = setJalaliMonth(date, date.month + 1);
                mDays = getDaysPerMonth(date.month, date.year);
            }
        }
        date.day = day;
        return date;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function mod$1(a, b) {
        return a - b * Math.floor(a / b);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    function div(a, b) {
        return Math.trunc(a / b);
    }
    /*
     This function determines if the Jalali (Persian) year is
     leap (366-day long) or is the common year (365 days), and
     finds the day in March (Gregorian calendar) of the first
     day of the Jalali year (jalaliYear).
     @param jalaliYear Jalali calendar year (-61 to 3177)
     @return
     leap: number of years since the last leap year (0 to 4)
     gYear: Gregorian year of the beginning of Jalali year
     march: the March day of Farvardin the 1st (1st day of jalaliYear)
     @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
     @see: http://www.fourmilab.ch/documents/calendar/
     */
    /**
     * @param {?} jalaliYear
     * @return {?}
     */
    function jalCal(jalaliYear) {
        // Jalali years starting the 33-year rule.
        /** @type {?} */
        var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
        /** @type {?} */
        var breaksLength = breaks.length;
        /** @type {?} */
        var gYear = jalaliYear + 621;
        /** @type {?} */
        var leapJ = -14;
        /** @type {?} */
        var jp = breaks[0];
        if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
            throw new Error('Invalid Jalali year ' + jalaliYear);
        }
        // Find the limiting years for the Jalali year jalaliYear.
        /** @type {?} */
        var jump;
        for (var i = 1; i < breaksLength; i += 1) {
            /** @type {?} */
            var jm = breaks[i];
            jump = jm - jp;
            if (jalaliYear < jm) {
                break;
            }
            leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
            jp = jm;
        }
        /** @type {?} */
        var n = jalaliYear - jp;
        // Find the number of leap years from AD 621 to the beginning
        // of the current Jalali year in the Persian calendar.
        leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);
        if (mod$1(jump, 33) === 4 && jump - n === 4) {
            leapJ += 1;
        }
        // And the same in the Gregorian calendar (until the year gYear).
        /** @type {?} */
        var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150;
        // Determine the Gregorian date of Farvardin the 1st.
        /** @type {?} */
        var march = 20 + leapJ - leapG;
        // Find how many years have passed since the last leap year.
        if (jump - n < 6) {
            n = n - jump + div(jump + 4, 33) * 33;
        }
        /** @type {?} */
        var leap = mod$1(mod$1(n + 1, 33) - 1, 4);
        if (leap === -1) {
            leap = 4;
        }
        return { leap: leap, gy: gYear, march: march };
    }
    /*
     Calculates Gregorian and Julian calendar dates from the Julian Day number
     (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
     calendars) to some millions years ahead of the present.
     @param jdn Julian Day number
     @return
     gYear: Calendar year (years BC numbered 0, -1, -2, ...)
     gMonth: Calendar month (1 to 12)
     gDay: Calendar day of the month M (1 to 28/29/30/31)
     */
    /**
     * @param {?} julianDayNumber
     * @return {?}
     */
    function julianToGregorian(julianDayNumber) {
        /** @type {?} */
        var j = 4 * julianDayNumber + 139361631;
        j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
        /** @type {?} */
        var i = div(mod$1(j, 1461), 4) * 5 + 308;
        /** @type {?} */
        var gDay = div(mod$1(i, 153), 5) + 1;
        /** @type {?} */
        var gMonth = mod$1(div(i, 153), 12) + 1;
        /** @type {?} */
        var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
        return new Date(gYear, gMonth - 1, gDay);
    }
    /*
     Converts a date of the Jalali calendar to the Julian Day number.
     @param jy Jalali year (1 to 3100)
     @param jm Jalali month (1 to 12)
     @param jd Jalali day (1 to 29/31)
     @return Julian Day number
     */
    /**
     * @param {?} gy
     * @param {?} gm
     * @param {?} gd
     * @return {?}
     */
    function gregorianToJulian(gy, gm, gd) {
        /** @type {?} */
        var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
        d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
        return d;
    }
    /*
     Converts the Julian Day number to a date in the Jalali calendar.
     @param julianDayNumber Julian Day number
     @return
     jalaliYear: Jalali year (1 to 3100)
     jalaliMonth: Jalali month (1 to 12)
     jalaliDay: Jalali day (1 to 29/31)
     */
    /**
     * @param {?} julianDayNumber
     * @return {?}
     */
    function julianToJalali(julianDayNumber) {
        /** @type {?} */
        var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
        ;
        /** @type {?} */
        var jalaliYear = gy - 621;
        /** @type {?} */
        var r = jalCal(jalaliYear);
        /** @type {?} */
        var gregorianDay = gregorianToJulian(gy, 3, r.march);
        /** @type {?} */
        var jalaliDay;
        /** @type {?} */
        var jalaliMonth;
        /** @type {?} */
        var numberOfDays;
        // Find number of days that passed since 1 Farvardin.
        numberOfDays = julianDayNumber - gregorianDay;
        if (numberOfDays >= 0) {
            if (numberOfDays <= 185) {
                // The first 6 months.
                jalaliMonth = 1 + div(numberOfDays, 31);
                jalaliDay = mod$1(numberOfDays, 31) + 1;
                return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
            }
            else {
                // The remaining months.
                numberOfDays -= 186;
            }
        }
        else {
            // Previous Jalali year.
            jalaliYear -= 1;
            numberOfDays += 179;
            if (r.leap === 1) {
                numberOfDays += 1;
            }
        }
        jalaliMonth = 7 + div(numberOfDays, 30);
        jalaliDay = mod$1(numberOfDays, 30) + 1;
        return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    }
    /*
     Converts a date of the Jalali calendar to the Julian Day number.
     @param jYear Jalali year (1 to 3100)
     @param jMonth Jalali month (1 to 12)
     @param jDay Jalali day (1 to 29/31)
     @return Julian Day number
     */
    /**
     * @param {?} jYear
     * @param {?} jMonth
     * @param {?} jDay
     * @return {?}
     */
    function jalaliToJulian(jYear, jMonth, jDay) {
        /** @type {?} */
        var r = jalCal(jYear);
        return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
    }
    /**
     * Returns the number of days in a specific jalali month.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function getDaysPerMonth(month, year) {
        if (month <= 6) {
            return 31;
        }
        if (month <= 11) {
            return 30;
        }
        if (jalCal(year).leap === 0) {
            return 30;
        }
        return 29;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbCalendarPersian = /** @class */ (function (_super) {
        __extends(NgbCalendarPersian, _super);
        function NgbCalendarPersian() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NgbCalendarPersian.prototype.getDaysPerWeek = /**
         * @return {?}
         */
            function () { return 7; };
        /**
         * @return {?}
         */
        NgbCalendarPersian.prototype.getMonths = /**
         * @return {?}
         */
            function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
        /**
         * @return {?}
         */
        NgbCalendarPersian.prototype.getWeeksPerMonth = /**
         * @return {?}
         */
            function () { return 6; };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarPersian.prototype.getNext = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                date = new NgbDate(date.year, date.month, date.day);
                switch (period) {
                    case 'y':
                        date = setJalaliYear(date, date.year + number);
                        date.month = 1;
                        date.day = 1;
                        return date;
                    case 'm':
                        date = setJalaliMonth(date, date.month + number);
                        date.day = 1;
                        return date;
                    case 'd':
                        return setJalaliDay(date, date.day + number);
                    default:
                        return date;
                }
            };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarPersian.prototype.getPrev = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                return this.getNext(date, period, -number);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarPersian.prototype.getWeekday = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var day = toGregorian(date).getDay();
                // in JS Date Sun=0, in ISO 8601 Sun=7
                return day === 0 ? 7 : day;
            };
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        NgbCalendarPersian.prototype.getWeekNumber = /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
            function (week, firstDayOfWeek) {
                // in JS Date Sun=0, in ISO 8601 Sun=7
                if (firstDayOfWeek === 7) {
                    firstDayOfWeek = 0;
                }
                /** @type {?} */
                var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
                /** @type {?} */
                var date = week[thursdayIndex];
                /** @type {?} */
                var jsDate = toGregorian(date);
                jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
                // Thursday
                /** @type {?} */
                var time = jsDate.getTime();
                /** @type {?} */
                var startDate = toGregorian(new NgbDate(date.year, 1, 1));
                return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
            };
        /**
         * @return {?}
         */
        NgbCalendarPersian.prototype.getToday = /**
         * @return {?}
         */
            function () { return fromGregorian(new Date()); };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarPersian.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) &&
                    !isNaN(toGregorian(date).getTime());
            };
        NgbCalendarPersian.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarPersian;
    }(NgbCalendar));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PARTS_PER_HOUR = 1080;
    /** @type {?} */
    var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
    /** @type {?} */
    var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
    /** @type {?} */
    var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
    /** @type {?} */
    var BAHARAD = 11 * PARTS_PER_HOUR + 204;
    /** @type {?} */
    var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
    /** @type {?} */
    var GREGORIAN_EPOCH$1 = 1721425.5;
    /**
     * @param {?} year
     * @return {?}
     */
    function isGregorianLeapYear$1(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function numberOfFirstDayInYear(year) {
        /** @type {?} */
        var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
        /** @type {?} */
        var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
        /** @type {?} */
        var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
        /** @type {?} */
        var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
        /** @type {?} */
        var dayOfWeek = dayNumber % 7;
        if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
            dayNumber++;
            dayOfWeek = dayNumber % 7;
        }
        if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
            dayNumber += 2;
        }
        else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
            dayNumber++;
        }
        return dayNumber;
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function getDaysInGregorianMonth(month, year) {
        /** @type {?} */
        var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (isGregorianLeapYear$1(year)) {
            days[1]++;
        }
        return days[month - 1];
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function getHebrewMonths(year) {
        return isHebrewLeapYear(year) ? 13 : 12;
    }
    /**
     * Returns the number of days in a specific Hebrew year.
     * `year` is any Hebrew year.
     * @param {?} year
     * @return {?}
     */
    function getDaysInHebrewYear(year) {
        return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    function isHebrewLeapYear(year) {
        /** @type {?} */
        var b = (year * 12 + 17) % 19;
        return b >= ((b < 0) ? -7 : 12);
    }
    /**
     * Returns the number of days in a specific Hebrew month.
     * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
     * `year` is any Hebrew year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */
    function getDaysInHebrewMonth(month, year) {
        /** @type {?} */
        var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
        /** @type {?} */
        var yearType = (yearLength <= 380 ? yearLength : (yearLength - 30)) - 353;
        /** @type {?} */
        var leapYear = isHebrewLeapYear(year);
        /** @type {?} */
        var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] :
            [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];
        if (yearType > 0) {
            daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
        }
        if (yearType > 1) {
            daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
        }
        return daysInMonth[month - 1];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    function getDayNumberInHebrewYear(date) {
        /** @type {?} */
        var numberOfDay = 0;
        for (var i = 1; i < date.month; i++) {
            numberOfDay += getDaysInHebrewMonth(i, date.year);
        }
        return numberOfDay + date.day;
    }
    /**
     * @param {?} date
     * @param {?} val
     * @return {?}
     */
    function setHebrewMonth(date, val) {
        /** @type {?} */
        var after = val >= 0;
        if (!after) {
            val = -val;
        }
        while (val > 0) {
            if (after) {
                if (val > getHebrewMonths(date.year) - date.month) {
                    val -= getHebrewMonths(date.year) - date.month + 1;
                    date.year++;
                    date.month = 1;
                }
                else {
                    date.month += val;
                    val = 0;
                }
            }
            else {
                if (val >= date.month) {
                    date.year--;
                    val -= date.month;
                    date.month = getHebrewMonths(date.year);
                }
                else {
                    date.month -= val;
                    val = 0;
                }
            }
        }
        return date;
    }
    /**
     * @param {?} date
     * @param {?} val
     * @return {?}
     */
    function setHebrewDay(date, val) {
        /** @type {?} */
        var after = val >= 0;
        if (!after) {
            val = -val;
        }
        while (val > 0) {
            if (after) {
                if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
                    val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
                    date.year++;
                    date.month = 1;
                    date.day = 1;
                }
                else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
                    val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
                    date.month++;
                    date.day = 1;
                }
                else {
                    date.day += val;
                    val = 0;
                }
            }
            else {
                if (val >= date.day) {
                    val -= date.day;
                    date.month--;
                    if (date.month === 0) {
                        date.year--;
                        date.month = getHebrewMonths(date.year);
                    }
                    date.day = getDaysInHebrewMonth(date.month, date.year);
                }
                else {
                    date.day -= val;
                    val = 0;
                }
            }
        }
        return date;
    }
    /**
     * Returns the equivalent Hebrew date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hebrew date.
     * @param {?} gdate
     * @return {?}
     */
    function fromGregorian$1(gdate) {
        /** @type {?} */
        var date = new Date(gdate);
        /** @type {?} */
        var gYear = date.getFullYear();
        /** @type {?} */
        var gMonth = date.getMonth();
        /** @type {?} */
        var gDay = date.getDate();
        /** @type {?} */
        var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) -
            Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) +
            Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
        julianDay = Math.floor(julianDay + 0.5);
        /** @type {?} */
        var daysSinceHebEpoch = julianDay - 347997;
        /** @type {?} */
        var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
        /** @type {?} */
        var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
        /** @type {?} */
        var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
        /** @type {?} */
        var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
        while (dayOfYear < 1) {
            hYear--;
            firstDayOfThisYear = numberOfFirstDayInYear(hYear);
            dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
        }
        /** @type {?} */
        var hMonth = 1;
        /** @type {?} */
        var hDay = dayOfYear;
        while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
            hDay -= getDaysInHebrewMonth(hMonth, hYear);
            hMonth++;
        }
        return new NgbDate(hYear, hMonth, hDay);
    }
    /**
     * Returns the equivalent JS date value for a given Hebrew date.
     * `hebrewDate` is an Hebrew date to be converted to Gregorian.
     * @param {?} hebrewDate
     * @return {?}
     */
    function toGregorian$1(hebrewDate) {
        /** @type {?} */
        var hYear = hebrewDate.year;
        /** @type {?} */
        var hMonth = hebrewDate.month;
        /** @type {?} */
        var hDay = hebrewDate.day;
        /** @type {?} */
        var days = numberOfFirstDayInYear(hYear);
        for (var i = 1; i < hMonth; i++) {
            days += getDaysInHebrewMonth(i, hYear);
        }
        days += hDay;
        /** @type {?} */
        var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
        /** @type {?} */
        var after = diffDays >= 0;
        if (!after) {
            diffDays = -diffDays;
        }
        /** @type {?} */
        var gYear = 1970;
        /** @type {?} */
        var gMonth = 1;
        /** @type {?} */
        var gDay = 1;
        while (diffDays > 0) {
            if (after) {
                if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
                    diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
                    gYear++;
                }
                else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                    diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                    gMonth++;
                }
                else {
                    gDay += diffDays;
                    diffDays = 0;
                }
            }
            else {
                if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
                    diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
                    gYear--;
                }
                else {
                    if (gMonth > 1) {
                        gMonth--;
                    }
                    else {
                        gMonth = 12;
                        gYear--;
                    }
                    if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
                        diffDays -= getDaysInGregorianMonth(gMonth, gYear);
                    }
                    else {
                        gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
                        diffDays = 0;
                    }
                }
            }
        }
        return new Date(gYear, gMonth - 1, gDay);
    }
    /**
     * @param {?} numerals
     * @return {?}
     */
    function hebrewNumerals(numerals) {
        if (!numerals) {
            return '';
        }
        /** @type {?} */
        var hArray0_9 = ['', '\u05d0', '\u05d1', '\u05d2', '\u05d3', '\u05d4', '\u05d5', '\u05d6', '\u05d7', '\u05d8'];
        /** @type {?} */
        var hArray10_19 = [
            '\u05d9', '\u05d9\u05d0', '\u05d9\u05d1', '\u05d9\u05d2', '\u05d9\u05d3', '\u05d8\u05d5', '\u05d8\u05d6',
            '\u05d9\u05d6', '\u05d9\u05d7', '\u05d9\u05d8'
        ];
        /** @type {?} */
        var hArray20_90 = ['', '', '\u05db', '\u05dc', '\u05de', '\u05e0', '\u05e1', '\u05e2', '\u05e4', '\u05e6'];
        /** @type {?} */
        var hArray100_900 = [
            '', '\u05e7', '\u05e8', '\u05e9', '\u05ea', '\u05ea\u05e7', '\u05ea\u05e8', '\u05ea\u05e9', '\u05ea\u05ea',
            '\u05ea\u05ea\u05e7'
        ];
        /** @type {?} */
        var hArray1000_9000 = [
            '', '\u05d0', '\u05d1', '\u05d1\u05d0', '\u05d1\u05d1', '\u05d4', '\u05d4\u05d0', '\u05d4\u05d1',
            '\u05d4\u05d1\u05d0', '\u05d4\u05d1\u05d1'
        ];
        /** @type {?} */
        var geresh = '\u05f3';
        /** @type {?} */
        var gershaim = '\u05f4';
        /** @type {?} */
        var mem = 0;
        /** @type {?} */
        var result = [];
        /** @type {?} */
        var step = 0;
        while (numerals > 0) {
            /** @type {?} */
            var m = numerals % 10;
            if (step === 0) {
                mem = m;
            }
            else if (step === 1) {
                if (m !== 1) {
                    result.unshift(hArray20_90[m], hArray0_9[mem]);
                }
                else {
                    result.unshift(hArray10_19[mem]);
                }
            }
            else if (step === 2) {
                result.unshift(hArray100_900[m]);
            }
            else {
                if (m !== 5) {
                    result.unshift(hArray1000_9000[m], geresh, ' ');
                }
                break;
            }
            numerals = Math.floor(numerals / 10);
            if (step === 0 && numerals === 0) {
                result.unshift(hArray0_9[m]);
            }
            step++;
        }
        result = result.join('').split('');
        if (result.length === 1) {
            result.push(geresh);
        }
        else if (result.length > 1) {
            result.splice(result.length - 1, 0, gershaim);
        }
        return result.join('');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * \@since 3.2.0
     */
    var NgbCalendarHebrew = /** @class */ (function (_super) {
        __extends(NgbCalendarHebrew, _super);
        function NgbCalendarHebrew() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getDaysPerWeek = /**
         * @return {?}
         */
            function () { return 7; };
        /**
         * @param {?=} year
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getMonths = /**
         * @param {?=} year
         * @return {?}
         */
            function (year) {
                if (year && isHebrewLeapYear(year)) {
                    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                }
                else {
                    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                }
            };
        /**
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getWeeksPerMonth = /**
         * @return {?}
         */
            function () { return 6; };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHebrew.prototype.isValid = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
                b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
                b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
                return b && !isNaN(toGregorian$1(date).getTime());
            };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getNext = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                date = new NgbDate(date.year, date.month, date.day);
                switch (period) {
                    case 'y':
                        date.year += number;
                        date.month = 1;
                        date.day = 1;
                        return date;
                    case 'm':
                        date = setHebrewMonth(date, number);
                        date.day = 1;
                        return date;
                    case 'd':
                        return setHebrewDay(date, number);
                    default:
                        return date;
                }
            };
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getPrev = /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */
            function (date, period, number) {
                if (period === void 0) {
                    period = 'd';
                }
                if (number === void 0) {
                    number = 1;
                }
                return this.getNext(date, period, -number);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getWeekday = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var day = toGregorian$1(date).getDay();
                // in JS Date Sun=0, in ISO 8601 Sun=7
                return day === 0 ? 7 : day;
            };
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getWeekNumber = /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */
            function (week, firstDayOfWeek) {
                /** @type {?} */
                var date = week[week.length - 1];
                return Math.ceil(getDayNumberInHebrewYear(date) / 7);
            };
        /**
         * @return {?}
         */
        NgbCalendarHebrew.prototype.getToday = /**
         * @return {?}
         */
            function () { return fromGregorian$1(new Date()); };
        /**
         * @since 3.4.0
         */
        /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHebrew.prototype.toGregorian = /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */
            function (date) { return fromJSDate(toGregorian$1(date)); };
        /**
         * @since 3.4.0
         */
        /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */
        NgbCalendarHebrew.prototype.fromGregorian = /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */
            function (date) { return fromGregorian$1(toJSDate(date)); };
        NgbCalendarHebrew.decorators = [
            { type: i0.Injectable }
        ];
        return NgbCalendarHebrew;
    }(NgbCalendar));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
    /** @type {?} */
    var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    /** @type {?} */
    var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    /**
     * \@since 3.2.0
     */
    var NgbDatepickerI18nHebrew = /** @class */ (function (_super) {
        __extends(NgbDatepickerI18nHebrew, _super);
        function NgbDatepickerI18nHebrew() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getMonthShortName = /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */
            function (month, year) { return this.getMonthFullName(month, year); };
        /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getMonthFullName = /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */
            function (month, year) {
                return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
            };
        /**
         * @param {?} weekday
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getWeekdayShortName = /**
         * @param {?} weekday
         * @return {?}
         */
            function (weekday) { return WEEKDAYS[weekday - 1]; };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getDayAriaLabel = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return hebrewNumerals(date.day) + " " + this.getMonthFullName(date.month, date.year) + " " + hebrewNumerals(date.year);
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getDayNumerals = /**
         * @param {?} date
         * @return {?}
         */
            function (date) { return hebrewNumerals(date.day); };
        /**
         * @param {?} weekNumber
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getWeekNumerals = /**
         * @param {?} weekNumber
         * @return {?}
         */
            function (weekNumber) { return hebrewNumerals(weekNumber); };
        /**
         * @param {?} year
         * @return {?}
         */
        NgbDatepickerI18nHebrew.prototype.getYearNumerals = /**
         * @param {?} year
         * @return {?}
         */
            function (year) { return hebrewNumerals(year); };
        NgbDatepickerI18nHebrew.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDatepickerI18nHebrew;
    }(NgbDatepickerI18n));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * NgbDateAdapter implementation that allows using native javascript date as a user date model.
     */
    var NgbDateNativeAdapter = /** @class */ (function (_super) {
        __extends(NgbDateNativeAdapter, _super);
        function NgbDateNativeAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Converts native date to a NgbDateStruct
         */
        /**
         * Converts native date to a NgbDateStruct
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.fromModel = /**
         * Converts native date to a NgbDateStruct
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
            };
        /**
         * Converts a NgbDateStruct to a native date
         */
        /**
         * Converts a NgbDateStruct to a native date
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype.toModel = /**
         * Converts a NgbDateStruct to a native date
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
                    null;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype._fromNativeDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeAdapter.prototype._toNativeDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var jsDate = new Date(date.year, date.month - 1, date.day, 12);
                // avoid 30 -> 1930 conversion
                jsDate.setFullYear(date.year);
                return jsDate;
            };
        NgbDateNativeAdapter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDateNativeAdapter;
    }(NgbDateAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * NgbDateAdapter implementation that allows using native javascript UTC date as a user date model.
     * Same as NgbDateNativeAdapter, but uses UTC dates.
     *
     * \@since 3.2.0
     */
    var NgbDateNativeUTCAdapter = /** @class */ (function (_super) {
        __extends(NgbDateNativeUTCAdapter, _super);
        function NgbDateNativeUTCAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeUTCAdapter.prototype._fromNativeDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        NgbDateNativeUTCAdapter.prototype._toNativeDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                /** @type {?} */
                var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
                // avoid 30 -> 1930 conversion
                jsDate.setUTCFullYear(date.year);
                return jsDate;
            };
        NgbDateNativeUTCAdapter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbDateNativeUTCAdapter;
    }(NgbDateNativeAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbDatepickerModule = /** @class */ (function () {
        function NgbDatepickerModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbDatepickerModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbDatepickerModule }; };
        NgbDatepickerModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView,
                            NgbInputDatepicker
                        ],
                        exports: [NgbDatepicker, NgbInputDatepicker],
                        imports: [i1.CommonModule, forms.FormsModule],
                        entryComponents: [NgbDatepicker]
                    },] }
        ];
        return NgbDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbDropdown directive.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the dropdowns used in the application.
     */
    var NgbDropdownConfig = /** @class */ (function () {
        function NgbDropdownConfig() {
            this.autoClose = true;
            this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        NgbDropdownConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbDropdownConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbDropdownConfig_Factory() { return new NgbDropdownConfig(); }, token: NgbDropdownConfig, providedIn: "root" });
        return NgbDropdownConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A directive you should put put on a dropdown item to enable keyboard navigation.
     * Keyboard navigation using arrow keys will move focus between items marked with this directive.
     *
     * \@since 4.1.0
     */
    var NgbDropdownItem = /** @class */ (function () {
        function NgbDropdownItem(elementRef) {
            this.elementRef = elementRef;
            this._disabled = false;
        }
        Object.defineProperty(NgbDropdownItem.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = ( /** @type {?} */(value)) === '' || value === true; // accept an empty attribute as true
            },
            enumerable: true,
            configurable: true
        });
        NgbDropdownItem.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngbDropdownItem]', host: { 'class': 'dropdown-item', '[class.disabled]': 'disabled' } },] }
        ];
        /** @nocollapse */
        NgbDropdownItem.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgbDropdownItem.propDecorators = {
            disabled: [{ type: i0.Input }]
        };
        return NgbDropdownItem;
    }());
    /**
     *
     */
    var NgbDropdownMenu = /** @class */ (function () {
        function NgbDropdownMenu(dropdown) {
            this.dropdown = dropdown;
            this.placement = 'bottom';
            this.isOpen = false;
        }
        NgbDropdownMenu.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbDropdownMenu]',
                        host: {
                            '[class.dropdown-menu]': 'true',
                            '[class.show]': 'dropdown.isOpen()',
                            '[attr.x-placement]': 'placement',
                            '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                            '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                            '(keydown.Home)': 'dropdown.onKeyDown($event)',
                            '(keydown.End)': 'dropdown.onKeyDown($event)'
                        }
                    },] }
        ];
        /** @nocollapse */
        NgbDropdownMenu.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgbDropdown; }),] }] }
            ];
        };
        NgbDropdownMenu.propDecorators = {
            menuItems: [{ type: i0.ContentChildren, args: [NgbDropdownItem,] }]
        };
        return NgbDropdownMenu;
    }());
    /**
     * Marks an element to which dropdown menu will be anchored. This is a simple version
     * of the NgbDropdownToggle directive. It plays the same role as NgbDropdownToggle but
     * doesn't listen to click events to toggle dropdown menu thus enabling support for
     * events other than click.
     *
     * \@since 1.1.0
     */
    var NgbDropdownAnchor = /** @class */ (function () {
        function NgbDropdownAnchor(dropdown, _elementRef) {
            this.dropdown = dropdown;
            this._elementRef = _elementRef;
            this.anchorEl = _elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        NgbDropdownAnchor.prototype.getNativeElement = /**
         * @return {?}
         */
            function () { return this._elementRef.nativeElement; };
        NgbDropdownAnchor.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbDropdownAnchor]',
                        host: { 'class': 'dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()' }
                    },] }
        ];
        /** @nocollapse */
        NgbDropdownAnchor.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgbDropdown; }),] }] },
                { type: i0.ElementRef }
            ];
        };
        return NgbDropdownAnchor;
    }());
    /**
     * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
     * alternative.
     */
    var NgbDropdownToggle = /** @class */ (function (_super) {
        __extends(NgbDropdownToggle, _super);
        function NgbDropdownToggle(dropdown, elementRef) {
            return _super.call(this, dropdown, elementRef) || this;
        }
        /**
         * @return {?}
         */
        NgbDropdownToggle.prototype.toggleOpen = /**
         * @return {?}
         */
            function () { this.dropdown.toggle(); };
        NgbDropdownToggle.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngbDropdownToggle]',
                        host: {
                            'class': 'dropdown-toggle',
                            'aria-haspopup': 'true',
                            '[attr.aria-expanded]': 'dropdown.isOpen()',
                            '(click)': 'toggleOpen()',
                            '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
                            '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
                            '(keydown.Home)': 'dropdown.onKeyDown($event)',
                            '(keydown.End)': 'dropdown.onKeyDown($event)'
                        },
                        providers: [{ provide: NgbDropdownAnchor, useExisting: i0.forwardRef(function () { return NgbDropdownToggle; }) }]
                    },] }
        ];
        /** @nocollapse */
        NgbDropdownToggle.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i0.forwardRef(function () { return NgbDropdown; }),] }] },
                { type: i0.ElementRef }
            ];
        };
        return NgbDropdownToggle;
    }(NgbDropdownAnchor));
    /**
     * Transforms a node into a dropdown.
     */
    var NgbDropdown = /** @class */ (function () {
        function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer) {
            var _this = this;
            this._changeDetector = _changeDetector;
            this._document = _document;
            this._ngZone = _ngZone;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._closed$ = new rxjs.Subject();
            /**
             *  Defines whether or not the dropdown-menu is open initially.
             */
            this._open = false;
            /**
             *  An event fired when the dropdown is opened or closed.
             *  Event's payload equals whether dropdown is open.
             */
            this.openChange = new i0.EventEmitter();
            this.placement = config.placement;
            this.container = config.container;
            this.autoClose = config.autoClose;
            this._zoneSubscription = _ngZone.onStable.subscribe(function () { _this._positionMenu(); });
        }
        /**
         * @return {?}
         */
        NgbDropdown.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._applyPlacementClasses();
                if (this._open) {
                    this._setCloseHandlers();
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbDropdown.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.container && this._open) {
                    this._applyContainer(this.container);
                }
                if (changes.placement && !changes.placement.isFirstChange) {
                    this._applyPlacementClasses();
                }
            };
        /**
         * Checks if the dropdown menu is open or not.
         */
        /**
         * Checks if the dropdown menu is open or not.
         * @return {?}
         */
        NgbDropdown.prototype.isOpen = /**
         * Checks if the dropdown menu is open or not.
         * @return {?}
         */
            function () { return this._open; };
        /**
         * Opens the dropdown menu of a given navbar or tabbed navigation.
         */
        /**
         * Opens the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
        NgbDropdown.prototype.open = /**
         * Opens the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
            function () {
                if (!this._open) {
                    this._open = true;
                    this._applyContainer(this.container);
                    this.openChange.emit(true);
                    this._setCloseHandlers();
                }
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype._setCloseHandlers = /**
         * @return {?}
         */
            function () {
                var _this = this;
                ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this._closed$, this._menu ? [this._menuElement.nativeElement] : [], this._anchor ? [this._anchor.getNativeElement()] : []);
            };
        /**
         * Closes the dropdown menu of a given navbar or tabbed navigation.
         */
        /**
         * Closes the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
        NgbDropdown.prototype.close = /**
         * Closes the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
            function () {
                if (this._open) {
                    this._open = false;
                    this._resetContainer();
                    this._closed$.next();
                    this.openChange.emit(false);
                    this._changeDetector.markForCheck();
                }
            };
        /**
         * Toggles the dropdown menu of a given navbar or tabbed navigation.
         */
        /**
         * Toggles the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
        NgbDropdown.prototype.toggle = /**
         * Toggles the dropdown menu of a given navbar or tabbed navigation.
         * @return {?}
         */
            function () {
                if (this.isOpen()) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._resetContainer();
                this._closed$.next();
                this._zoneSubscription.unsubscribe();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbDropdown.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                /** @type {?} */
                var itemElements = this._getMenuElements();
                /** @type {?} */
                var position = -1;
                /** @type {?} */
                var isEventFromItems = false;
                /** @type {?} */
                var isEventFromToggle = this._isEventFromToggle(event);
                if (!isEventFromToggle) {
                    itemElements.forEach(function (itemElement, index) {
                        if (itemElement.contains(( /** @type {?} */(event.target)))) {
                            isEventFromItems = true;
                        }
                        if (itemElement === _this._document.activeElement) {
                            position = index;
                        }
                    });
                }
                if (isEventFromToggle || isEventFromItems) {
                    if (!this.isOpen()) {
                        this.open();
                    }
                    // tslint:disable-next-line:deprecation
                    switch (event.which) {
                        case Key.ArrowDown:
                            position = Math.min(position + 1, itemElements.length - 1);
                            break;
                        case Key.ArrowUp:
                            if (this._isDropup() && position === -1) {
                                position = itemElements.length - 1;
                                break;
                            }
                            position = Math.max(position - 1, 0);
                            break;
                        case Key.Home:
                            position = 0;
                            break;
                        case Key.End:
                            position = itemElements.length - 1;
                            break;
                    }
                    itemElements[position].focus();
                    event.preventDefault();
                }
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype._isDropup = /**
         * @return {?}
         */
            function () { return this._elementRef.nativeElement.classList.contains('dropup'); };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbDropdown.prototype._isEventFromToggle = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return this._anchor.getNativeElement().contains(( /** @type {?} */(event.target)));
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype._getMenuElements = /**
         * @return {?}
         */
            function () {
                if (this._menu == null) {
                    return [];
                }
                return this._menu.menuItems.filter(function (item) { return !item.disabled; }).map(function (item) { return item.elementRef.nativeElement; });
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype._positionMenu = /**
         * @return {?}
         */
            function () {
                if (this.isOpen() && this._menu) {
                    this._applyPlacementClasses(positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body'));
                }
            };
        /**
         * @return {?}
         */
        NgbDropdown.prototype._resetContainer = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var renderer = this._renderer;
                if (this._menuElement) {
                    /** @type {?} */
                    var dropdownElement = this._elementRef.nativeElement;
                    /** @type {?} */
                    var dropdownMenuElement = this._menuElement.nativeElement;
                    renderer.appendChild(dropdownElement, dropdownMenuElement);
                    renderer.removeStyle(dropdownMenuElement, 'position');
                    renderer.removeStyle(dropdownMenuElement, 'transform');
                }
                if (this._bodyContainer) {
                    renderer.removeChild(this._document.body, this._bodyContainer);
                    this._bodyContainer = null;
                }
            };
        /**
         * @param {?=} container
         * @return {?}
         */
        NgbDropdown.prototype._applyContainer = /**
         * @param {?=} container
         * @return {?}
         */
            function (container) {
                if (container === void 0) {
                    container = null;
                }
                this._resetContainer();
                if (container === 'body') {
                    /** @type {?} */
                    var renderer = this._renderer;
                    /** @type {?} */
                    var dropdownMenuElement = this._menuElement.nativeElement;
                    /** @type {?} */
                    var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');
                    // Override some styles to have the positionning working
                    renderer.setStyle(bodyContainer, 'position', 'absolute');
                    renderer.setStyle(dropdownMenuElement, 'position', 'static');
                    renderer.appendChild(bodyContainer, dropdownMenuElement);
                    renderer.appendChild(this._document.body, bodyContainer);
                }
            };
        /**
         * @param {?=} placement
         * @return {?}
         */
        NgbDropdown.prototype._applyPlacementClasses = /**
         * @param {?=} placement
         * @return {?}
         */
            function (placement) {
                if (this._menu) {
                    if (!placement) {
                        placement = Array.isArray(this.placement) ? this.placement[0] : ( /** @type {?} */(this.placement.split(' ')[0]));
                    }
                    /** @type {?} */
                    var renderer = this._renderer;
                    /** @type {?} */
                    var dropdownElement = this._elementRef.nativeElement;
                    // remove the current placement classes
                    renderer.removeClass(dropdownElement, 'dropup');
                    renderer.removeClass(dropdownElement, 'dropdown');
                    this._menu.placement = placement;
                    /*
                          * apply the new placement
                          * in case of top use up-arrow or down-arrow otherwise
                          */
                    /** @type {?} */
                    var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
                    renderer.addClass(dropdownElement, dropdownClass);
                    /** @type {?} */
                    var bodyContainer = this._bodyContainer;
                    if (bodyContainer) {
                        renderer.removeClass(bodyContainer, 'dropup');
                        renderer.removeClass(bodyContainer, 'dropdown');
                        renderer.addClass(bodyContainer, dropdownClass);
                    }
                }
            };
        NgbDropdown.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngbDropdown]', exportAs: 'ngbDropdown', host: { '[class.show]': 'isOpen()' } },] }
        ];
        /** @nocollapse */
        NgbDropdown.ctorParameters = function () {
            return [
                { type: i0.ChangeDetectorRef },
                { type: NgbDropdownConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone },
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        NgbDropdown.propDecorators = {
            _menu: [{ type: i0.ContentChild, args: [NgbDropdownMenu,] }],
            _menuElement: [{ type: i0.ContentChild, args: [NgbDropdownMenu, { read: i0.ElementRef },] }],
            _anchor: [{ type: i0.ContentChild, args: [NgbDropdownAnchor,] }],
            autoClose: [{ type: i0.Input }],
            _open: [{ type: i0.Input, args: ['open',] }],
            placement: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            openChange: [{ type: i0.Output }]
        };
        return NgbDropdown;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem];
    var NgbDropdownModule = /** @class */ (function () {
        function NgbDropdownModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbDropdownModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbDropdownModule }; };
        NgbDropdownModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES },] }
        ];
        return NgbDropdownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration object token for the NgbModal service.
     * You can provide this configuration, typically in your root module in order to provide default option values for every
     * modal.
     *
     * \@since 3.1.0
     */
    var NgbModalConfig = /** @class */ (function () {
        function NgbModalConfig() {
            this.backdrop = true;
            this.keyboard = true;
        }
        NgbModalConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbModalConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbModalConfig_Factory() { return new NgbModalConfig(); }, token: NgbModalConfig, providedIn: "root" });
        return NgbModalConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ContentRef = /** @class */ (function () {
        function ContentRef(nodes, viewRef, componentRef) {
            this.nodes = nodes;
            this.viewRef = viewRef;
            this.componentRef = componentRef;
        }
        return ContentRef;
    }());
    /**
     * @template T
     */
    var /**
     * @template T
     */ PopupService = /** @class */ (function () {
        function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver) {
            this._type = _type;
            this._injector = _injector;
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._componentFactoryResolver = _componentFactoryResolver;
        }
        /**
         * @param {?=} content
         * @param {?=} context
         * @return {?}
         */
        PopupService.prototype.open = /**
         * @param {?=} content
         * @param {?=} context
         * @return {?}
         */
            function (content, context) {
                if (!this._windowRef) {
                    this._contentRef = this._getContentRef(content, context);
                    this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
                }
                return this._windowRef;
            };
        /**
         * @return {?}
         */
        PopupService.prototype.close = /**
         * @return {?}
         */
            function () {
                if (this._windowRef) {
                    this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
                    this._windowRef = null;
                    if (this._contentRef.viewRef) {
                        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                        this._contentRef = null;
                    }
                }
            };
        /**
         * @param {?} content
         * @param {?=} context
         * @return {?}
         */
        PopupService.prototype._getContentRef = /**
         * @param {?} content
         * @param {?=} context
         * @return {?}
         */
            function (content, context) {
                if (!content) {
                    return new ContentRef([]);
                }
                else if (content instanceof i0.TemplateRef) {
                    /** @type {?} */
                    var viewRef = this._viewContainerRef.createEmbeddedView(( /** @type {?} */(content)), context);
                    return new ContentRef([viewRef.rootNodes], viewRef);
                }
                else {
                    return new ContentRef([[this._renderer.createText("" + content)]]);
                }
            };
        return PopupService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var noop = function () { };
    /**
     * Utility to handle the scrollbar.
     *
     * It allows to compensate the lack of a vertical scrollbar by adding an
     * equivalent padding on the right of the body, and to remove this compensation.
     */
    var ScrollBar = /** @class */ (function () {
        function ScrollBar(_document) {
            this._document = _document;
        }
        /**
         * Detects if a scrollbar is present and if yes, already compensates for its
         * removal by adding an equivalent padding on the right of the body.
         *
         * @return a callback used to revert the compensation (noop if there was none,
         * otherwise a function removing the padding)
         */
        /**
         * Detects if a scrollbar is present and if yes, already compensates for its
         * removal by adding an equivalent padding on the right of the body.
         *
         * @return {?} a callback used to revert the compensation (noop if there was none,
         * otherwise a function removing the padding)
         */
        ScrollBar.prototype.compensate = /**
         * Detects if a scrollbar is present and if yes, already compensates for its
         * removal by adding an equivalent padding on the right of the body.
         *
         * @return {?} a callback used to revert the compensation (noop if there was none,
         * otherwise a function removing the padding)
         */
            function () { return !this._isPresent() ? noop : this._adjustBody(this._getWidth()); };
        /**
         * Adds a padding of the given width on the right of the body.
         *
         * @return a callback used to revert the padding to its previous value
         */
        /**
         * Adds a padding of the given width on the right of the body.
         *
         * @param {?} width
         * @return {?} a callback used to revert the padding to its previous value
         */
        ScrollBar.prototype._adjustBody = /**
         * Adds a padding of the given width on the right of the body.
         *
         * @param {?} width
         * @return {?} a callback used to revert the padding to its previous value
         */
            function (width) {
                /** @type {?} */
                var body = this._document.body;
                /** @type {?} */
                var userSetPadding = body.style.paddingRight;
                /** @type {?} */
                var paddingAmount = parseFloat(window.getComputedStyle(body)['padding-right']);
                body.style['padding-right'] = paddingAmount + width + "px";
                return function () { return body.style['padding-right'] = userSetPadding; };
            };
        /**
         * Tells whether a scrollbar is currently present on the body.
         *
         * @return true if scrollbar is present, false otherwise
         */
        /**
         * Tells whether a scrollbar is currently present on the body.
         *
         * @return {?} true if scrollbar is present, false otherwise
         */
        ScrollBar.prototype._isPresent = /**
         * Tells whether a scrollbar is currently present on the body.
         *
         * @return {?} true if scrollbar is present, false otherwise
         */
            function () {
                /** @type {?} */
                var rect = this._document.body.getBoundingClientRect();
                return rect.left + rect.right < window.innerWidth;
            };
        /**
         * Calculates and returns the width of a scrollbar.
         *
         * @return the width of a scrollbar on this page
         */
        /**
         * Calculates and returns the width of a scrollbar.
         *
         * @return {?} the width of a scrollbar on this page
         */
        ScrollBar.prototype._getWidth = /**
         * Calculates and returns the width of a scrollbar.
         *
         * @return {?} the width of a scrollbar on this page
         */
            function () {
                /** @type {?} */
                var measurer = this._document.createElement('div');
                measurer.className = 'modal-scrollbar-measure';
                /** @type {?} */
                var body = this._document.body;
                body.appendChild(measurer);
                /** @type {?} */
                var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
                body.removeChild(measurer);
                return width;
            };
        ScrollBar.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        ScrollBar.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] }
            ];
        };
        /** @nocollapse */ ScrollBar.ngInjectableDef = i0.defineInjectable({ factory: function ScrollBar_Factory() { return new ScrollBar(i0.inject(i1.DOCUMENT)); }, token: ScrollBar, providedIn: "root" });
        return ScrollBar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbModalBackdrop = /** @class */ (function () {
        function NgbModalBackdrop() {
        }
        NgbModalBackdrop.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-modal-backdrop',
                        template: '',
                        host: { '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")', 'style': 'z-index: 1050' }
                    }] }
        ];
        NgbModalBackdrop.propDecorators = {
            backdropClass: [{ type: i0.Input }]
        };
        return NgbModalBackdrop;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A reference to an active (currently opened) modal. Instances of this class
     * can be injected into components passed as modal content.
     */
    var /**
     * A reference to an active (currently opened) modal. Instances of this class
     * can be injected into components passed as modal content.
     */ NgbActiveModal = /** @class */ (function () {
        function NgbActiveModal() {
        }
        /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         */
        /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         * @param {?=} result
         * @return {?}
         */
        NgbActiveModal.prototype.close = /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         * @param {?=} result
         * @return {?}
         */
            function (result) { };
        /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         */
        /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         * @param {?=} reason
         * @return {?}
         */
        NgbActiveModal.prototype.dismiss = /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         * @param {?=} reason
         * @return {?}
         */
            function (reason) { };
        return NgbActiveModal;
    }());
    /**
     * A reference to a newly opened modal returned by the 'NgbModal.open()' method.
     */
    var /**
     * A reference to a newly opened modal returned by the 'NgbModal.open()' method.
     */ NgbModalRef = /** @class */ (function () {
        function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
            var _this = this;
            this._windowCmptRef = _windowCmptRef;
            this._contentRef = _contentRef;
            this._backdropCmptRef = _backdropCmptRef;
            this._beforeDismiss = _beforeDismiss;
            _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
            this.result = new Promise(function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            });
            this.result.then(null, function () { });
        }
        Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
            /**
             * The instance of component used as modal's content.
             * Undefined when a TemplateRef is used as modal's content.
             */
            get: /**
             * The instance of component used as modal's content.
             * Undefined when a TemplateRef is used as modal's content.
             * @return {?}
             */ function () {
                if (this._contentRef.componentRef) {
                    return this._contentRef.componentRef.instance;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         */
        /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         * @param {?=} result
         * @return {?}
         */
        NgbModalRef.prototype.close = /**
         * Closes the modal with an optional 'result' value.
         * The 'NgbMobalRef.result' promise will be resolved with provided value.
         * @param {?=} result
         * @return {?}
         */
            function (result) {
                if (this._windowCmptRef) {
                    this._resolve(result);
                    this._removeModalElements();
                }
            };
        /**
         * @param {?=} reason
         * @return {?}
         */
        NgbModalRef.prototype._dismiss = /**
         * @param {?=} reason
         * @return {?}
         */
            function (reason) {
                this._reject(reason);
                this._removeModalElements();
            };
        /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         */
        /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         * @param {?=} reason
         * @return {?}
         */
        NgbModalRef.prototype.dismiss = /**
         * Dismisses the modal with an optional 'reason' value.
         * The 'NgbModalRef.result' promise will be rejected with provided value.
         * @param {?=} reason
         * @return {?}
         */
            function (reason) {
                var _this = this;
                if (this._windowCmptRef) {
                    if (!this._beforeDismiss) {
                        this._dismiss(reason);
                    }
                    else {
                        /** @type {?} */
                        var dismiss = this._beforeDismiss();
                        if (dismiss && dismiss.then) {
                            dismiss.then(function (result) {
                                if (result !== false) {
                                    _this._dismiss(reason);
                                }
                            }, function () { });
                        }
                        else if (dismiss !== false) {
                            this._dismiss(reason);
                        }
                    }
                }
            };
        /**
         * @return {?}
         */
        NgbModalRef.prototype._removeModalElements = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var windowNativeEl = this._windowCmptRef.location.nativeElement;
                windowNativeEl.parentNode.removeChild(windowNativeEl);
                this._windowCmptRef.destroy();
                if (this._backdropCmptRef) {
                    /** @type {?} */
                    var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
                    backdropNativeEl.parentNode.removeChild(backdropNativeEl);
                    this._backdropCmptRef.destroy();
                }
                if (this._contentRef && this._contentRef.viewRef) {
                    this._contentRef.viewRef.destroy();
                }
                this._windowCmptRef = null;
                this._backdropCmptRef = null;
                this._contentRef = null;
            };
        return NgbModalRef;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ModalDismissReasons = {
        BACKDROP_CLICK: 0,
        ESC: 1,
    };
    ModalDismissReasons[ModalDismissReasons.BACKDROP_CLICK] = 'BACKDROP_CLICK';
    ModalDismissReasons[ModalDismissReasons.ESC] = 'ESC';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbModalWindow = /** @class */ (function () {
        function NgbModalWindow(_document, _elRef) {
            this._document = _document;
            this._elRef = _elRef;
            this.backdrop = true;
            this.keyboard = true;
            this.dismissEvent = new i0.EventEmitter();
        }
        /**
         * @param {?} $event
         * @return {?}
         */
        NgbModalWindow.prototype.backdropClick = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
                    this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgbModalWindow.prototype.escKey = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.keyboard && !$event.defaultPrevented) {
                    this.dismiss(ModalDismissReasons.ESC);
                }
            };
        /**
         * @param {?} reason
         * @return {?}
         */
        NgbModalWindow.prototype.dismiss = /**
         * @param {?} reason
         * @return {?}
         */
            function (reason) { this.dismissEvent.emit(reason); };
        /**
         * @return {?}
         */
        NgbModalWindow.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this._elWithFocus = this._document.activeElement; };
        /**
         * @return {?}
         */
        NgbModalWindow.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (!this._elRef.nativeElement.contains(document.activeElement)) {
                    /** @type {?} */
                    var autoFocusable = ( /** @type {?} */(this._elRef.nativeElement.querySelector("[ngbAutofocus]")));
                    /** @type {?} */
                    var firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];
                    /** @type {?} */
                    var elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
                    elementToFocus.focus();
                }
            };
        /**
         * @return {?}
         */
        NgbModalWindow.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var body = this._document.body;
                /** @type {?} */
                var elWithFocus = this._elWithFocus;
                /** @type {?} */
                var elementToFocus;
                if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
                    elementToFocus = elWithFocus;
                }
                else {
                    elementToFocus = body;
                }
                elementToFocus.focus();
                this._elWithFocus = null;
            };
        NgbModalWindow.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-modal-window',
                        host: {
                            '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
                            'role': 'dialog',
                            'tabindex': '-1',
                            '(keyup.esc)': 'escKey($event)',
                            '(click)': 'backdropClick($event)',
                            '[attr.aria-modal]': 'true',
                            '[attr.aria-labelledby]': 'ariaLabelledBy',
                        },
                        template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
                    }] }
        ];
        /** @nocollapse */
        NgbModalWindow.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.ElementRef }
            ];
        };
        NgbModalWindow.propDecorators = {
            ariaLabelledBy: [{ type: i0.Input }],
            backdrop: [{ type: i0.Input }],
            centered: [{ type: i0.Input }],
            keyboard: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            windowClass: [{ type: i0.Input }],
            dismissEvent: [{ type: i0.Output, args: ['dismiss',] }]
        };
        return NgbModalWindow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbModalStack = /** @class */ (function () {
        function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory) {
            var _this = this;
            this._applicationRef = _applicationRef;
            this._injector = _injector;
            this._document = _document;
            this._scrollBar = _scrollBar;
            this._rendererFactory = _rendererFactory;
            this._activeWindowCmptHasChanged = new rxjs.Subject();
            this._ariaHiddenValues = new Map();
            this._backdropAttributes = ['backdropClass'];
            this._modalRefs = [];
            this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'size', 'windowClass'];
            this._windowCmpts = [];
            // Trap focus on active WindowCmpt
            this._activeWindowCmptHasChanged.subscribe(function () {
                if (_this._windowCmpts.length) {
                    /** @type {?} */
                    var activeWindowCmpt = _this._windowCmpts[_this._windowCmpts.length - 1];
                    ngbFocusTrap(activeWindowCmpt.location.nativeElement, _this._activeWindowCmptHasChanged);
                    _this._revertAriaHidden();
                    _this._setAriaHidden(activeWindowCmpt.location.nativeElement);
                }
            });
        }
        /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} options
         * @return {?}
         */
        NgbModalStack.prototype.open = /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} options
         * @return {?}
         */
            function (moduleCFR, contentInjector, content, options) {
                var _this = this;
                /** @type {?} */
                var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
                /** @type {?} */
                var renderer = this._rendererFactory.createRenderer(null, null);
                /** @type {?} */
                var revertPaddingForScrollBar = this._scrollBar.compensate();
                /** @type {?} */
                var removeBodyClass = function () {
                    if (!_this._modalRefs.length) {
                        renderer.removeClass(_this._document.body, 'modal-open');
                        _this._revertAriaHidden();
                    }
                };
                if (!containerEl) {
                    throw new Error("The specified modal container \"" + (options.container || 'body') + "\" was not found in the DOM.");
                }
                /** @type {?} */
                var activeModal = new NgbActiveModal();
                /** @type {?} */
                var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
                /** @type {?} */
                var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
                /** @type {?} */
                var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
                /** @type {?} */
                var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
                this._registerModalRef(ngbModalRef);
                this._registerWindowCmpt(windowCmptRef);
                ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
                ngbModalRef.result.then(removeBodyClass, removeBodyClass);
                activeModal.close = function (result) { ngbModalRef.close(result); };
                activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
                this._applyWindowOptions(windowCmptRef.instance, options);
                if (this._modalRefs.length === 1) {
                    renderer.addClass(this._document.body, 'modal-open');
                }
                if (backdropCmptRef && backdropCmptRef.instance) {
                    this._applyBackdropOptions(backdropCmptRef.instance, options);
                }
                return ngbModalRef;
            };
        /**
         * @param {?=} reason
         * @return {?}
         */
        NgbModalStack.prototype.dismissAll = /**
         * @param {?=} reason
         * @return {?}
         */
            function (reason) { this._modalRefs.forEach(function (ngbModalRef) { return ngbModalRef.dismiss(reason); }); };
        /**
         * @return {?}
         */
        NgbModalStack.prototype.hasOpenModals = /**
         * @return {?}
         */
            function () { return this._modalRefs.length > 0; };
        /**
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @return {?}
         */
        NgbModalStack.prototype._attachBackdrop = /**
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @return {?}
         */
            function (moduleCFR, containerEl) {
                /** @type {?} */
                var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
                /** @type {?} */
                var backdropCmptRef = backdropFactory.create(this._injector);
                this._applicationRef.attachView(backdropCmptRef.hostView);
                containerEl.appendChild(backdropCmptRef.location.nativeElement);
                return backdropCmptRef;
            };
        /**
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @param {?} contentRef
         * @return {?}
         */
        NgbModalStack.prototype._attachWindowComponent = /**
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @param {?} contentRef
         * @return {?}
         */
            function (moduleCFR, containerEl, contentRef) {
                /** @type {?} */
                var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
                /** @type {?} */
                var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);
                this._applicationRef.attachView(windowCmptRef.hostView);
                containerEl.appendChild(windowCmptRef.location.nativeElement);
                return windowCmptRef;
            };
        /**
         * @param {?} windowInstance
         * @param {?} options
         * @return {?}
         */
        NgbModalStack.prototype._applyWindowOptions = /**
         * @param {?} windowInstance
         * @param {?} options
         * @return {?}
         */
            function (windowInstance, options) {
                this._windowAttributes.forEach(function (optionName) {
                    if (isDefined(options[optionName])) {
                        windowInstance[optionName] = options[optionName];
                    }
                });
            };
        /**
         * @param {?} backdropInstance
         * @param {?} options
         * @return {?}
         */
        NgbModalStack.prototype._applyBackdropOptions = /**
         * @param {?} backdropInstance
         * @param {?} options
         * @return {?}
         */
            function (backdropInstance, options) {
                this._backdropAttributes.forEach(function (optionName) {
                    if (isDefined(options[optionName])) {
                        backdropInstance[optionName] = options[optionName];
                    }
                });
            };
        /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} activeModal
         * @return {?}
         */
        NgbModalStack.prototype._getContentRef = /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} activeModal
         * @return {?}
         */
            function (moduleCFR, contentInjector, content, activeModal) {
                if (!content) {
                    return new ContentRef([]);
                }
                else if (content instanceof i0.TemplateRef) {
                    return this._createFromTemplateRef(content, activeModal);
                }
                else if (isString(content)) {
                    return this._createFromString(content);
                }
                else {
                    return this._createFromComponent(moduleCFR, contentInjector, content, activeModal);
                }
            };
        /**
         * @param {?} content
         * @param {?} activeModal
         * @return {?}
         */
        NgbModalStack.prototype._createFromTemplateRef = /**
         * @param {?} content
         * @param {?} activeModal
         * @return {?}
         */
            function (content, activeModal) {
                /** @type {?} */
                var context = {
                    $implicit: activeModal,
                    close: /**
                     * @param {?} result
                     * @return {?}
                     */ function (result) { activeModal.close(result); },
                    dismiss: /**
                     * @param {?} reason
                     * @return {?}
                     */ function (reason) { activeModal.dismiss(reason); }
                };
                /** @type {?} */
                var viewRef = content.createEmbeddedView(context);
                this._applicationRef.attachView(viewRef);
                return new ContentRef([viewRef.rootNodes], viewRef);
            };
        /**
         * @param {?} content
         * @return {?}
         */
        NgbModalStack.prototype._createFromString = /**
         * @param {?} content
         * @return {?}
         */
            function (content) {
                /** @type {?} */
                var component = this._document.createTextNode("" + content);
                return new ContentRef([[component]]);
            };
        /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} context
         * @return {?}
         */
        NgbModalStack.prototype._createFromComponent = /**
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} context
         * @return {?}
         */
            function (moduleCFR, contentInjector, content, context) {
                /** @type {?} */
                var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
                /** @type {?} */
                var modalContentInjector = i0.Injector.create({ providers: [{ provide: NgbActiveModal, useValue: context }], parent: contentInjector });
                /** @type {?} */
                var componentRef = contentCmptFactory.create(modalContentInjector);
                this._applicationRef.attachView(componentRef.hostView);
                return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
            };
        /**
         * @param {?} element
         * @return {?}
         */
        NgbModalStack.prototype._setAriaHidden = /**
         * @param {?} element
         * @return {?}
         */
            function (element) {
                var _this = this;
                /** @type {?} */
                var parent = element.parentElement;
                if (parent && element !== this._document.body) {
                    Array.from(parent.children).forEach(function (sibling) {
                        if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                            _this._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));
                            sibling.setAttribute('aria-hidden', 'true');
                        }
                    });
                    this._setAriaHidden(parent);
                }
            };
        /**
         * @return {?}
         */
        NgbModalStack.prototype._revertAriaHidden = /**
         * @return {?}
         */
            function () {
                this._ariaHiddenValues.forEach(function (value, element) {
                    if (value) {
                        element.setAttribute('aria-hidden', value);
                    }
                    else {
                        element.removeAttribute('aria-hidden');
                    }
                });
                this._ariaHiddenValues.clear();
            };
        /**
         * @param {?} ngbModalRef
         * @return {?}
         */
        NgbModalStack.prototype._registerModalRef = /**
         * @param {?} ngbModalRef
         * @return {?}
         */
            function (ngbModalRef) {
                var _this = this;
                /** @type {?} */
                var unregisterModalRef = function () {
                    /** @type {?} */
                    var index = _this._modalRefs.indexOf(ngbModalRef);
                    if (index > -1) {
                        _this._modalRefs.splice(index, 1);
                    }
                };
                this._modalRefs.push(ngbModalRef);
                ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
            };
        /**
         * @param {?} ngbWindowCmpt
         * @return {?}
         */
        NgbModalStack.prototype._registerWindowCmpt = /**
         * @param {?} ngbWindowCmpt
         * @return {?}
         */
            function (ngbWindowCmpt) {
                var _this = this;
                this._windowCmpts.push(ngbWindowCmpt);
                this._activeWindowCmptHasChanged.next();
                ngbWindowCmpt.onDestroy(function () {
                    /** @type {?} */
                    var index = _this._windowCmpts.indexOf(ngbWindowCmpt);
                    if (index > -1) {
                        _this._windowCmpts.splice(index, 1);
                        _this._activeWindowCmptHasChanged.next();
                    }
                });
            };
        NgbModalStack.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        NgbModalStack.ctorParameters = function () {
            return [
                { type: i0.ApplicationRef },
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: ScrollBar },
                { type: i0.RendererFactory2 }
            ];
        };
        /** @nocollapse */ NgbModalStack.ngInjectableDef = i0.defineInjectable({ factory: function NgbModalStack_Factory() { return new NgbModalStack(i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR), i0.inject(i1.DOCUMENT), i0.inject(ScrollBar), i0.inject(i0.RendererFactory2)); }, token: NgbModalStack, providedIn: "root" });
        return NgbModalStack;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
     * the "open" method!
     */
    var NgbModal = /** @class */ (function () {
        function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
            this._moduleCFR = _moduleCFR;
            this._injector = _injector;
            this._modalStack = _modalStack;
            this._config = _config;
        }
        /**
         * Opens a new modal window with the specified content and using supplied options. Content can be provided
         * as a TemplateRef or a component type. If you pass a component type as content, then instances of those
         * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
         * NgbActiveModal class to close / dismiss modals from "inside" of a component.
         */
        /**
         * Opens a new modal window with the specified content and using supplied options. Content can be provided
         * as a TemplateRef or a component type. If you pass a component type as content, then instances of those
         * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
         * NgbActiveModal class to close / dismiss modals from "inside" of a component.
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
        NgbModal.prototype.open = /**
         * Opens a new modal window with the specified content and using supplied options. Content can be provided
         * as a TemplateRef or a component type. If you pass a component type as content, then instances of those
         * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
         * NgbActiveModal class to close / dismiss modals from "inside" of a component.
         * @param {?} content
         * @param {?=} options
         * @return {?}
         */
            function (content, options) {
                if (options === void 0) {
                    options = {};
                }
                /** @type {?} */
                var combinedOptions = Object.assign({}, this._config, options);
                return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
            };
        /**
         * Dismiss all currently displayed modal windows with the supplied reason.
         *
         * @since 3.1.0
         */
        /**
         * Dismiss all currently displayed modal windows with the supplied reason.
         *
         * \@since 3.1.0
         * @param {?=} reason
         * @return {?}
         */
        NgbModal.prototype.dismissAll = /**
         * Dismiss all currently displayed modal windows with the supplied reason.
         *
         * \@since 3.1.0
         * @param {?=} reason
         * @return {?}
         */
            function (reason) { this._modalStack.dismissAll(reason); };
        /**
         * Indicates if there are currently any open modal windows in the application.
         *
         * @since 3.3.0
         */
        /**
         * Indicates if there are currently any open modal windows in the application.
         *
         * \@since 3.3.0
         * @return {?}
         */
        NgbModal.prototype.hasOpenModals = /**
         * Indicates if there are currently any open modal windows in the application.
         *
         * \@since 3.3.0
         * @return {?}
         */
            function () { return this._modalStack.hasOpenModals(); };
        NgbModal.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        NgbModal.ctorParameters = function () {
            return [
                { type: i0.ComponentFactoryResolver },
                { type: i0.Injector },
                { type: NgbModalStack },
                { type: NgbModalConfig }
            ];
        };
        /** @nocollapse */ NgbModal.ngInjectableDef = i0.defineInjectable({ factory: function NgbModal_Factory() { return new NgbModal(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.INJECTOR), i0.inject(NgbModalStack), i0.inject(NgbModalConfig)); }, token: NgbModal, providedIn: "root" });
        return NgbModal;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbModalModule = /** @class */ (function () {
        function NgbModalModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbModalModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbModalModule }; };
        NgbModalModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgbModalBackdrop, NgbModalWindow],
                        entryComponents: [NgbModalBackdrop, NgbModalWindow],
                        providers: [NgbModal]
                    },] }
        ];
        return NgbModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbPagination component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the paginations used in the application.
     */
    var NgbPaginationConfig = /** @class */ (function () {
        function NgbPaginationConfig() {
            this.disabled = false;
            this.boundaryLinks = false;
            this.directionLinks = true;
            this.ellipses = true;
            this.maxSize = 0;
            this.pageSize = 10;
            this.rotate = false;
        }
        NgbPaginationConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbPaginationConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbPaginationConfig_Factory() { return new NgbPaginationConfig(); }, token: NgbPaginationConfig, providedIn: "root" });
        return NgbPaginationConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * The directive to match the 'ellipsis' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationEllipsis = /** @class */ (function () {
        function NgbPaginationEllipsis(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationEllipsis.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationEllipsis]' },] }
        ];
        /** @nocollapse */
        NgbPaginationEllipsis.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationEllipsis;
    }());
    /**
     * The directive to match the 'first' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationFirst = /** @class */ (function () {
        function NgbPaginationFirst(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationFirst.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationFirst]' },] }
        ];
        /** @nocollapse */
        NgbPaginationFirst.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationFirst;
    }());
    /**
     * The directive to match the 'last' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationLast = /** @class */ (function () {
        function NgbPaginationLast(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationLast.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationLast]' },] }
        ];
        /** @nocollapse */
        NgbPaginationLast.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationLast;
    }());
    /**
     * The directive to match the 'next' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationNext = /** @class */ (function () {
        function NgbPaginationNext(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationNext.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationNext]' },] }
        ];
        /** @nocollapse */
        NgbPaginationNext.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationNext;
    }());
    /**
     * The directive to match the page 'number' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationNumber = /** @class */ (function () {
        function NgbPaginationNumber(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationNumber.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationNumber]' },] }
        ];
        /** @nocollapse */
        NgbPaginationNumber.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationNumber;
    }());
    /**
     * The directive to match the 'previous' cell template
     *
     * \@since 4.1.0
     */
    var NgbPaginationPrevious = /** @class */ (function () {
        function NgbPaginationPrevious(templateRef) {
            this.templateRef = templateRef;
        }
        NgbPaginationPrevious.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbPaginationPrevious]' },] }
        ];
        /** @nocollapse */
        NgbPaginationPrevious.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbPaginationPrevious;
    }());
    /**
     * A component that displays page numbers and allows to customize them in several ways
     */
    var NgbPagination = /** @class */ (function () {
        function NgbPagination(config) {
            this.pageCount = 0;
            this.pages = [];
            /**
             *  Current page. Page numbers start with 1
             */
            this.page = 1;
            /**
             *  An event fired when the page is changed.
             *  Event's payload equals to the newly selected page.
             *  Will fire only if collection size is set and all values are valid.
             *  Page numbers start with 1
             */
            this.pageChange = new i0.EventEmitter(true);
            this.disabled = config.disabled;
            this.boundaryLinks = config.boundaryLinks;
            this.directionLinks = config.directionLinks;
            this.ellipses = config.ellipses;
            this.maxSize = config.maxSize;
            this.pageSize = config.pageSize;
            this.rotate = config.rotate;
            this.size = config.size;
        }
        /**
         * @return {?}
         */
        NgbPagination.prototype.hasPrevious = /**
         * @return {?}
         */
            function () { return this.page > 1; };
        /**
         * @return {?}
         */
        NgbPagination.prototype.hasNext = /**
         * @return {?}
         */
            function () { return this.page < this.pageCount; };
        /**
         * @return {?}
         */
        NgbPagination.prototype.nextDisabled = /**
         * @return {?}
         */
            function () { return !this.hasNext() || this.disabled; };
        /**
         * @return {?}
         */
        NgbPagination.prototype.previousDisabled = /**
         * @return {?}
         */
            function () { return !this.hasPrevious() || this.disabled; };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        NgbPagination.prototype.selectPage = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) { this._updatePages(pageNumber); };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbPagination.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) { this._updatePages(this.page); };
        /**
         * @param {?} pageNumber
         * @return {?}
         */
        NgbPagination.prototype.isEllipsis = /**
         * @param {?} pageNumber
         * @return {?}
         */
            function (pageNumber) { return pageNumber === -1; };
        /**
         * Appends ellipses and first/last page number to the displayed pages
         */
        /**
         * Appends ellipses and first/last page number to the displayed pages
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
        NgbPagination.prototype._applyEllipses = /**
         * Appends ellipses and first/last page number to the displayed pages
         * @param {?} start
         * @param {?} end
         * @return {?}
         */
            function (start, end) {
                if (this.ellipses) {
                    if (start > 0) {
                        if (start > 1) {
                            this.pages.unshift(-1);
                        }
                        this.pages.unshift(1);
                    }
                    if (end < this.pageCount) {
                        if (end < (this.pageCount - 1)) {
                            this.pages.push(-1);
                        }
                        this.pages.push(this.pageCount);
                    }
                }
            };
        /**
         * Rotates page numbers based on maxSize items visible.
         * Currently selected page stays in the middle:
         *
         * Ex. for selected page = 6:
         * [5,*6*,7] for maxSize = 3
         * [4,5,*6*,7] for maxSize = 4
         */
        /**
         * Rotates page numbers based on maxSize items visible.
         * Currently selected page stays in the middle:
         *
         * Ex. for selected page = 6:
         * [5,*6*,7] for maxSize = 3
         * [4,5,*6*,7] for maxSize = 4
         * @return {?}
         */
        NgbPagination.prototype._applyRotation = /**
         * Rotates page numbers based on maxSize items visible.
         * Currently selected page stays in the middle:
         *
         * Ex. for selected page = 6:
         * [5,*6*,7] for maxSize = 3
         * [4,5,*6*,7] for maxSize = 4
         * @return {?}
         */
            function () {
                /** @type {?} */
                var start = 0;
                /** @type {?} */
                var end = this.pageCount;
                /** @type {?} */
                var leftOffset = Math.floor(this.maxSize / 2);
                /** @type {?} */
                var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
                if (this.page <= leftOffset) {
                    // very beginning, no rotation -> [0..maxSize]
                    end = this.maxSize;
                }
                else if (this.pageCount - this.page < leftOffset) {
                    // very end, no rotation -> [len-maxSize..len]
                    start = this.pageCount - this.maxSize;
                }
                else {
                    // rotate
                    start = this.page - leftOffset - 1;
                    end = this.page + rightOffset;
                }
                return [start, end];
            };
        /**
         * Paginates page numbers based on maxSize items per page
         */
        /**
         * Paginates page numbers based on maxSize items per page
         * @return {?}
         */
        NgbPagination.prototype._applyPagination = /**
         * Paginates page numbers based on maxSize items per page
         * @return {?}
         */
            function () {
                /** @type {?} */
                var page = Math.ceil(this.page / this.maxSize) - 1;
                /** @type {?} */
                var start = page * this.maxSize;
                /** @type {?} */
                var end = start + this.maxSize;
                return [start, end];
            };
        /**
         * @param {?} newPageNo
         * @return {?}
         */
        NgbPagination.prototype._setPageInRange = /**
         * @param {?} newPageNo
         * @return {?}
         */
            function (newPageNo) {
                /** @type {?} */
                var prevPageNo = this.page;
                this.page = getValueInRange(newPageNo, this.pageCount, 1);
                if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
                    this.pageChange.emit(this.page);
                }
            };
        /**
         * @param {?} newPage
         * @return {?}
         */
        NgbPagination.prototype._updatePages = /**
         * @param {?} newPage
         * @return {?}
         */
            function (newPage) {
                var _a, _b;
                this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
                if (!isNumber(this.pageCount)) {
                    this.pageCount = 0;
                }
                // fill-in model needed to render pages
                this.pages.length = 0;
                for (var i = 1; i <= this.pageCount; i++) {
                    this.pages.push(i);
                }
                // set page within 1..max range
                this._setPageInRange(newPage);
                // apply maxSize if necessary
                if (this.maxSize > 0 && this.pageCount > this.maxSize) {
                    /** @type {?} */
                    var start = 0;
                    /** @type {?} */
                    var end = this.pageCount;
                    // either paginating or rotating page numbers
                    if (this.rotate) {
                        _a = __read(this._applyRotation(), 2), start = _a[0], end = _a[1];
                    }
                    else {
                        _b = __read(this._applyPagination(), 2), start = _b[0], end = _b[1];
                    }
                    this.pages = this.pages.slice(start, end);
                    // adding ellipses
                    this._applyEllipses(start, end);
                }
            };
        NgbPagination.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-pagination',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: { 'role': 'navigation' },
                        template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"(hasPrevious() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"(hasNext() ? null : '-1')\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgbPagination.ctorParameters = function () {
            return [
                { type: NgbPaginationConfig }
            ];
        };
        NgbPagination.propDecorators = {
            tplEllipsis: [{ type: i0.ContentChild, args: [NgbPaginationEllipsis,] }],
            tplFirst: [{ type: i0.ContentChild, args: [NgbPaginationFirst,] }],
            tplLast: [{ type: i0.ContentChild, args: [NgbPaginationLast,] }],
            tplNext: [{ type: i0.ContentChild, args: [NgbPaginationNext,] }],
            tplNumber: [{ type: i0.ContentChild, args: [NgbPaginationNumber,] }],
            tplPrevious: [{ type: i0.ContentChild, args: [NgbPaginationPrevious,] }],
            disabled: [{ type: i0.Input }],
            boundaryLinks: [{ type: i0.Input }],
            directionLinks: [{ type: i0.Input }],
            ellipses: [{ type: i0.Input }],
            rotate: [{ type: i0.Input }],
            collectionSize: [{ type: i0.Input }],
            maxSize: [{ type: i0.Input }],
            page: [{ type: i0.Input }],
            pageSize: [{ type: i0.Input }],
            pageChange: [{ type: i0.Output }],
            size: [{ type: i0.Input }]
        };
        return NgbPagination;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DIRECTIVES = [
        NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber,
        NgbPaginationPrevious
    ];
    var NgbPaginationModule = /** @class */ (function () {
        function NgbPaginationModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbPaginationModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbPaginationModule }; };
        NgbPaginationModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: DIRECTIVES, exports: DIRECTIVES, imports: [i1.CommonModule] },] }
        ];
        return NgbPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var Trigger = /** @class */ (function () {
        function Trigger(open, close) {
            this.open = open;
            this.close = close;
            if (!close) {
                this.close = open;
            }
        }
        /**
         * @return {?}
         */
        Trigger.prototype.isManual = /**
         * @return {?}
         */
            function () { return this.open === 'manual' || this.close === 'manual'; };
        return Trigger;
    }());
    /** @type {?} */
    var DEFAULT_ALIASES = {
        'hover': ['mouseenter', 'mouseleave'],
        'focus': ['focusin', 'focusout'],
    };
    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */
    function parseTriggers(triggers, aliases) {
        if (aliases === void 0) {
            aliases = DEFAULT_ALIASES;
        }
        /** @type {?} */
        var trimmedTriggers = (triggers || '').trim();
        if (trimmedTriggers.length === 0) {
            return [];
        }
        /** @type {?} */
        var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
            /** @type {?} */
            var alias = aliases[triggerPair[0]] || triggerPair;
            return new Trigger(alias[0], alias[1]);
        });
        /** @type {?} */
        var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
        if (manualTriggers.length > 1) {
            throw 'Triggers parse error: only one manual trigger is allowed';
        }
        if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
            throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
        }
        return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} nativeElement
     * @param {?} triggers
     * @param {?} isOpenedFn
     * @return {?}
     */
    function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
        return new rxjs.Observable(function (subscriber) {
            /** @type {?} */
            var listeners = [];
            /** @type {?} */
            var openFn = function () { return subscriber.next(true); };
            /** @type {?} */
            var closeFn = function () { return subscriber.next(false); };
            /** @type {?} */
            var toggleFn = function () { return subscriber.next(!isOpenedFn()); };
            triggers.forEach(function (trigger) {
                if (trigger.open === trigger.close) {
                    listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
                }
                else {
                    listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
                }
            });
            return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
        });
    }
    /** @type {?} */
    var delayOrNoop = function (time) { return time > 0 ? operators.delay(time) : function (a) { return a; }; };
    /**
     * @param {?} openDelay
     * @param {?} closeDelay
     * @param {?} isOpenedFn
     * @return {?}
     */
    function triggerDelay(openDelay, closeDelay, isOpenedFn) {
        return function (input$) {
            /** @type {?} */
            var pending = null;
            /** @type {?} */
            var filteredInput$ = input$.pipe(operators.map(function (open) { return ({ open: open }); }), operators.filter(function (event) {
                /** @type {?} */
                var currentlyOpen = isOpenedFn();
                if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
                    pending = event;
                    return true;
                }
                if (pending && pending.open !== event.open) {
                    pending = null;
                }
                return false;
            }), operators.share());
            /** @type {?} */
            var delayedOpen$ = filteredInput$.pipe(operators.filter(function (event) { return event.open; }), delayOrNoop(openDelay));
            /** @type {?} */
            var delayedClose$ = filteredInput$.pipe(operators.filter(function (event) { return !event.open; }), delayOrNoop(closeDelay));
            return rxjs.merge(delayedOpen$, delayedClose$)
                .pipe(operators.filter(function (event) {
                if (event === pending) {
                    pending = null;
                    return event.open !== isOpenedFn();
                }
                return false;
            }), operators.map(function (event) { return event.open; }));
        };
    }
    /**
     * @param {?} renderer
     * @param {?} nativeElement
     * @param {?} triggers
     * @param {?} isOpenedFn
     * @param {?} openFn
     * @param {?} closeFn
     * @param {?=} openDelay
     * @param {?=} closeDelay
     * @return {?}
     */
    function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn, openDelay, closeDelay) {
        if (openDelay === void 0) {
            openDelay = 0;
        }
        if (closeDelay === void 0) {
            closeDelay = 0;
        }
        /** @type {?} */
        var parsedTriggers = parseTriggers(triggers);
        if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
            return function () { };
        }
        /** @type {?} */
        var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn)
            .pipe(triggerDelay(openDelay, closeDelay, isOpenedFn))
            .subscribe(function (open) { return (open ? openFn() : closeFn()); });
        return function () { return subscription.unsubscribe(); };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbPopover directive.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the popovers used in the application.
     */
    var NgbPopoverConfig = /** @class */ (function () {
        function NgbPopoverConfig() {
            this.autoClose = true;
            this.placement = 'auto';
            this.triggers = 'click';
            this.disablePopover = false;
            this.openDelay = 0;
            this.closeDelay = 0;
        }
        NgbPopoverConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbPopoverConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbPopoverConfig_Factory() { return new NgbPopoverConfig(); }, token: NgbPopoverConfig, providedIn: "root" });
        return NgbPopoverConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId$3 = 0;
    var NgbPopoverWindow = /** @class */ (function () {
        function NgbPopoverWindow() {
        }
        /**
         * @return {?}
         */
        NgbPopoverWindow.prototype.isTitleTemplate = /**
         * @return {?}
         */
            function () { return this.title instanceof i0.TemplateRef; };
        NgbPopoverWindow.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-popover-window',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: { '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")', 'role': 'tooltip', '[id]': 'id' },
                        template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? title : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
                        styles: ["ngb-popover-window.bs-popover-bottom .arrow,ngb-popover-window.bs-popover-top .arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left .arrow,ngb-popover-window.bs-popover-top-left .arrow{left:2em}ngb-popover-window.bs-popover-bottom-right .arrow,ngb-popover-window.bs-popover-top-right .arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left .arrow,ngb-popover-window.bs-popover-right .arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top .arrow,ngb-popover-window.bs-popover-right-top .arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom .arrow,ngb-popover-window.bs-popover-right-bottom .arrow{top:auto;bottom:.7em}"]
                    }] }
        ];
        NgbPopoverWindow.propDecorators = {
            title: [{ type: i0.Input }],
            id: [{ type: i0.Input }],
            popoverClass: [{ type: i0.Input }],
            context: [{ type: i0.Input }]
        };
        return NgbPopoverWindow;
    }());
    /**
     * A lightweight, extensible directive for fancy popover creation.
     */
    var NgbPopover = /** @class */ (function () {
        function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector) {
            var _this = this;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._ngZone = _ngZone;
            this._document = _document;
            this._changeDetector = _changeDetector;
            /**
             * Emits an event when the popover is shown
             */
            this.shown = new i0.EventEmitter();
            /**
             * Emits an event when the popover is hidden
             */
            this.hidden = new i0.EventEmitter();
            this._ngbPopoverWindowId = "ngb-popover-" + nextId$3++;
            this.autoClose = config.autoClose;
            this.placement = config.placement;
            this.triggers = config.triggers;
            this.container = config.container;
            this.disablePopover = config.disablePopover;
            this.popoverClass = config.popoverClass;
            this.openDelay = config.openDelay;
            this.closeDelay = config.closeDelay;
            this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
            this._zoneSubscription = _ngZone.onStable.subscribe(function () {
                if (_this._windowRef) {
                    positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-popover');
                }
            });
        }
        /**
         * @return {?}
         */
        NgbPopover.prototype._isDisabled = /**
         * @return {?}
         */
            function () {
                if (this.disablePopover) {
                    return true;
                }
                if (!this.ngbPopover && !this.popoverTitle) {
                    return true;
                }
                return false;
            };
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of the popover.
         * The context is an optional value to be injected into the popover template when it is created.
         */
        /**
         * Opens an element’s popover. This is considered a “manual” triggering of the popover.
         * The context is an optional value to be injected into the popover template when it is created.
         * @param {?=} context
         * @return {?}
         */
        NgbPopover.prototype.open = /**
         * Opens an element’s popover. This is considered a “manual” triggering of the popover.
         * The context is an optional value to be injected into the popover template when it is created.
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                var _this = this;
                if (!this._windowRef && !this._isDisabled()) {
                    this._windowRef = this._popupService.open(this.ngbPopover, context);
                    this._windowRef.instance.title = this.popoverTitle;
                    this._windowRef.instance.context = context;
                    this._windowRef.instance.popoverClass = this.popoverClass;
                    this._windowRef.instance.id = this._ngbPopoverWindowId;
                    this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
                    if (this.container === 'body') {
                        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                    }
                    // apply styling to set basic css-classes on target element, before going for positioning
                    this._windowRef.changeDetectorRef.markForCheck();
                    ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this.hidden, [this._windowRef.location.nativeElement]);
                    this.shown.emit();
                }
            };
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of the popover.
         */
        /**
         * Closes an element’s popover. This is considered a “manual” triggering of the popover.
         * @return {?}
         */
        NgbPopover.prototype.close = /**
         * Closes an element’s popover. This is considered a “manual” triggering of the popover.
         * @return {?}
         */
            function () {
                if (this._windowRef) {
                    this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
                    this._popupService.close();
                    this._windowRef = null;
                    this.hidden.emit();
                    this._changeDetector.markForCheck();
                }
            };
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
         */
        /**
         * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
         * @return {?}
         */
        NgbPopover.prototype.toggle = /**
         * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
         * @return {?}
         */
            function () {
                if (this._windowRef) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * Returns whether or not the popover is currently being shown
         */
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        NgbPopover.prototype.isOpen = /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
            function () { return this._windowRef != null; };
        /**
         * @return {?}
         */
        NgbPopover.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbPopover.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                // close popover if title and content become empty, or disablePopover set to true
                if ((changes['ngbPopover'] || changes['popoverTitle'] || changes['disablePopover']) && this._isDisabled()) {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgbPopover.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.close();
                // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
                // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
                if (this._unregisterListenersFn) {
                    this._unregisterListenersFn();
                }
                this._zoneSubscription.unsubscribe();
            };
        NgbPopover.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' },] }
        ];
        /** @nocollapse */
        NgbPopover.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef },
                { type: NgbPopoverConfig },
                { type: i0.NgZone },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbPopover.propDecorators = {
            autoClose: [{ type: i0.Input }],
            ngbPopover: [{ type: i0.Input }],
            popoverTitle: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            triggers: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            disablePopover: [{ type: i0.Input }],
            popoverClass: [{ type: i0.Input }],
            openDelay: [{ type: i0.Input }],
            closeDelay: [{ type: i0.Input }],
            shown: [{ type: i0.Output }],
            hidden: [{ type: i0.Output }]
        };
        return NgbPopover;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbPopoverModule = /** @class */ (function () {
        function NgbPopoverModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbPopoverModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbPopoverModule }; };
        NgbPopoverModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgbPopover, NgbPopoverWindow],
                        exports: [NgbPopover],
                        imports: [i1.CommonModule],
                        entryComponents: [NgbPopoverWindow]
                    },] }
        ];
        return NgbPopoverModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbProgressbar component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the progress bars used in the application.
     */
    var NgbProgressbarConfig = /** @class */ (function () {
        function NgbProgressbarConfig() {
            this.max = 100;
            this.animated = false;
            this.striped = false;
            this.showValue = false;
        }
        NgbProgressbarConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbProgressbarConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbProgressbarConfig_Factory() { return new NgbProgressbarConfig(); }, token: NgbProgressbarConfig, providedIn: "root" });
        return NgbProgressbarConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Directive that can be used to provide feedback on the progress of a workflow or an action.
     */
    var NgbProgressbar = /** @class */ (function () {
        function NgbProgressbar(config) {
            /**
             * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
             */
            this.value = 0;
            this.max = config.max;
            this.animated = config.animated;
            this.striped = config.striped;
            this.type = config.type;
            this.showValue = config.showValue;
            this.height = config.height;
        }
        /**
         * @return {?}
         */
        NgbProgressbar.prototype.getValue = /**
         * @return {?}
         */
            function () { return getValueInRange(this.value, this.max); };
        /**
         * @return {?}
         */
        NgbProgressbar.prototype.getPercentValue = /**
         * @return {?}
         */
            function () { return 100 * this.getValue() / this.max; };
        NgbProgressbar.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-progressbar',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgbProgressbar.ctorParameters = function () {
            return [
                { type: NgbProgressbarConfig }
            ];
        };
        NgbProgressbar.propDecorators = {
            max: [{ type: i0.Input }],
            animated: [{ type: i0.Input }],
            striped: [{ type: i0.Input }],
            showValue: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            height: [{ type: i0.Input }]
        };
        return NgbProgressbar;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbProgressbarModule = /** @class */ (function () {
        function NgbProgressbarModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbProgressbarModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbProgressbarModule }; };
        NgbProgressbarModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbProgressbar], exports: [NgbProgressbar], imports: [i1.CommonModule] },] }
        ];
        return NgbProgressbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbRating component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the ratings used in the application.
     */
    var NgbRatingConfig = /** @class */ (function () {
        function NgbRatingConfig() {
            this.max = 10;
            this.readonly = false;
            this.resettable = false;
        }
        NgbRatingConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbRatingConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbRatingConfig_Factory() { return new NgbRatingConfig(); }, token: NgbRatingConfig, providedIn: "root" });
        return NgbRatingConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_RATING_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbRating; }),
        multi: true
    };
    /**
     * Rating directive that will take care of visualising a star rating bar.
     */
    var NgbRating = /** @class */ (function () {
        function NgbRating(config, _changeDetectorRef) {
            this._changeDetectorRef = _changeDetectorRef;
            this.contexts = [];
            this.disabled = false;
            /**
             * An event fired when a user is hovering over a given rating.
             * Event's payload equals to the rating being hovered over.
             */
            this.hover = new i0.EventEmitter();
            /**
             * An event fired when a user stops hovering over a given rating.
             * Event's payload equals to the rating of the last item being hovered over.
             */
            this.leave = new i0.EventEmitter();
            /**
             * An event fired when a user selects a new rating.
             * Event's payload equals to the newly selected rating.
             */
            this.rateChange = new i0.EventEmitter(true);
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this.max = config.max;
            this.readonly = config.readonly;
        }
        /**
         * @return {?}
         */
        NgbRating.prototype.ariaValueText = /**
         * @return {?}
         */
            function () { return this.nextRate + " out of " + this.max; };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbRating.prototype.enter = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.readonly && !this.disabled) {
                    this._updateState(value);
                }
                this.hover.emit(value);
            };
        /**
         * @return {?}
         */
        NgbRating.prototype.handleBlur = /**
         * @return {?}
         */
            function () { this.onTouched(); };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbRating.prototype.handleClick = /**
         * @param {?} value
         * @return {?}
         */
            function (value) { this.update(this.resettable && this.rate === value ? 0 : value); };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbRating.prototype.handleKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                // tslint:disable-next-line:deprecation
                switch (event.which) {
                    case Key.ArrowDown:
                    case Key.ArrowLeft:
                        this.update(this.rate - 1);
                        break;
                    case Key.ArrowUp:
                    case Key.ArrowRight:
                        this.update(this.rate + 1);
                        break;
                    case Key.Home:
                        this.update(0);
                        break;
                    case Key.End:
                        this.update(this.max);
                        break;
                    default:
                        return;
                }
                // note 'return' in default case
                event.preventDefault();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbRating.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['rate']) {
                    this.update(this.rate);
                }
            };
        /**
         * @return {?}
         */
        NgbRating.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.contexts = Array.from({ length: this.max }, function (v, k) { return ({ fill: 0, index: k }); });
                this._updateState(this.rate);
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbRating.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbRating.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @return {?}
         */
        NgbRating.prototype.reset = /**
         * @return {?}
         */
            function () {
                this.leave.emit(this.nextRate);
                this._updateState(this.rate);
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbRating.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { this.disabled = isDisabled; };
        /**
         * @param {?} value
         * @param {?=} internalChange
         * @return {?}
         */
        NgbRating.prototype.update = /**
         * @param {?} value
         * @param {?=} internalChange
         * @return {?}
         */
            function (value, internalChange) {
                if (internalChange === void 0) {
                    internalChange = true;
                }
                /** @type {?} */
                var newRate = getValueInRange(value, this.max, 0);
                if (!this.readonly && !this.disabled && this.rate !== newRate) {
                    this.rate = newRate;
                    this.rateChange.emit(this.rate);
                }
                if (internalChange) {
                    this.onChange(this.rate);
                    this.onTouched();
                }
                this._updateState(this.rate);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbRating.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.update(value, false);
                this._changeDetectorRef.markForCheck();
            };
        /**
         * @param {?} index
         * @return {?}
         */
        NgbRating.prototype._getFillValue = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                /** @type {?} */
                var diff = this.nextRate - index;
                if (diff >= 1) {
                    return 100;
                }
                if (diff < 1 && diff > 0) {
                    return parseInt((diff * 100).toFixed(2), 10);
                }
                return 0;
            };
        /**
         * @param {?} nextValue
         * @return {?}
         */
        NgbRating.prototype._updateState = /**
         * @param {?} nextValue
         * @return {?}
         */
            function (nextValue) {
                var _this = this;
                this.nextRate = nextValue;
                this.contexts.forEach(function (context, index) { return context.fill = _this._getFillValue(index); });
            };
        NgbRating.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-rating',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            'class': 'd-inline-flex',
                            'tabindex': '0',
                            'role': 'slider',
                            'aria-valuemin': '0',
                            '[attr.aria-valuemax]': 'max',
                            '[attr.aria-valuenow]': 'nextRate',
                            '[attr.aria-valuetext]': 'ariaValueText()',
                            '[attr.aria-disabled]': 'readonly ? true : null',
                            '(blur)': 'handleBlur()',
                            '(keydown)': 'handleKeyDown($event)',
                            '(mouseleave)': 'reset()'
                        },
                        template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
                        providers: [NGB_RATING_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        NgbRating.ctorParameters = function () {
            return [
                { type: NgbRatingConfig },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbRating.propDecorators = {
            max: [{ type: i0.Input }],
            rate: [{ type: i0.Input }],
            readonly: [{ type: i0.Input }],
            resettable: [{ type: i0.Input }],
            starTemplate: [{ type: i0.Input }],
            starTemplateFromContent: [{ type: i0.ContentChild, args: [i0.TemplateRef,] }],
            hover: [{ type: i0.Output }],
            leave: [{ type: i0.Output }],
            rateChange: [{ type: i0.Output }]
        };
        return NgbRating;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbRatingModule = /** @class */ (function () {
        function NgbRatingModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbRatingModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbRatingModule }; };
        NgbRatingModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbRating], exports: [NgbRating], imports: [i1.CommonModule] },] }
        ];
        return NgbRatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbTabset component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the tabsets used in the application.
     */
    var NgbTabsetConfig = /** @class */ (function () {
        function NgbTabsetConfig() {
            this.justify = 'start';
            this.orientation = 'horizontal';
            this.type = 'tabs';
        }
        NgbTabsetConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbTabsetConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbTabsetConfig_Factory() { return new NgbTabsetConfig(); }, token: NgbTabsetConfig, providedIn: "root" });
        return NgbTabsetConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId$4 = 0;
    /**
     * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
     */
    var NgbTabTitle = /** @class */ (function () {
        function NgbTabTitle(templateRef) {
            this.templateRef = templateRef;
        }
        NgbTabTitle.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbTabTitle]' },] }
        ];
        /** @nocollapse */
        NgbTabTitle.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbTabTitle;
    }());
    /**
     * This directive must be used to wrap content to be displayed in a tab.
     */
    var NgbTabContent = /** @class */ (function () {
        function NgbTabContent(templateRef) {
            this.templateRef = templateRef;
        }
        NgbTabContent.decorators = [
            { type: i0.Directive, args: [{ selector: 'ng-template[ngbTabContent]' },] }
        ];
        /** @nocollapse */
        NgbTabContent.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgbTabContent;
    }());
    /**
     * A directive representing an individual tab.
     */
    var NgbTab = /** @class */ (function () {
        function NgbTab() {
            /**
             * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
             */
            this.id = "ngb-tab-" + nextId$4++;
            /**
             * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
             */
            this.disabled = false;
        }
        /**
         * @return {?}
         */
        NgbTab.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
                // only @ContentChildren allows us to specify the {descendants: false} option.
                // Without {descendants: false} we are hitting bugs described in:
                // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
                this.titleTpl = this.titleTpls.first;
                this.contentTpl = this.contentTpls.first;
            };
        NgbTab.decorators = [
            { type: i0.Directive, args: [{ selector: 'ngb-tab' },] }
        ];
        NgbTab.propDecorators = {
            id: [{ type: i0.Input }],
            title: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            titleTpls: [{ type: i0.ContentChildren, args: [NgbTabTitle, { descendants: false },] }],
            contentTpls: [{ type: i0.ContentChildren, args: [NgbTabContent, { descendants: false },] }]
        };
        return NgbTab;
    }());
    /**
     * A component that makes it easy to create tabbed interface.
     */
    var NgbTabset = /** @class */ (function () {
        function NgbTabset(config) {
            /**
             * Whether the closed tabs should be hidden without destroying them
             */
            this.destroyOnHide = true;
            /**
             * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
             */
            this.tabChange = new i0.EventEmitter();
            this.type = config.type;
            this.justify = config.justify;
            this.orientation = config.orientation;
        }
        Object.defineProperty(NgbTabset.prototype, "justify", {
            /**
             * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
             * 'justified'
             * The default value is 'start'.
             */
            set: /**
             * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
             * 'justified'
             * The default value is 'start'.
             * @param {?} className
             * @return {?}
             */ function (className) {
                if (className === 'fill' || className === 'justified') {
                    this.justifyClass = "nav-" + className;
                }
                else {
                    this.justifyClass = "justify-content-" + className;
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Selects the tab with the given id and shows its associated pane.
         * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
         */
        /**
         * Selects the tab with the given id and shows its associated pane.
         * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
         * @param {?} tabId
         * @return {?}
         */
        NgbTabset.prototype.select = /**
         * Selects the tab with the given id and shows its associated pane.
         * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
         * @param {?} tabId
         * @return {?}
         */
            function (tabId) {
                /** @type {?} */
                var selectedTab = this._getTabById(tabId);
                if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
                    /** @type {?} */
                    var defaultPrevented_1 = false;
                    this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
                    if (!defaultPrevented_1) {
                        this.activeId = selectedTab.id;
                    }
                }
            };
        /**
         * @return {?}
         */
        NgbTabset.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                // auto-correct activeId that might have been set incorrectly as input
                /** @type {?} */
                var activeTab = this._getTabById(this.activeId);
                this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
            };
        /**
         * @param {?} id
         * @return {?}
         */
        NgbTabset.prototype._getTabById = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                /** @type {?} */
                var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
                return tabsWithId.length ? tabsWithId[0] : null;
            };
        NgbTabset.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-tabset',
                        exportAs: 'ngbTabset',
                        template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgbTabset.ctorParameters = function () {
            return [
                { type: NgbTabsetConfig }
            ];
        };
        NgbTabset.propDecorators = {
            tabs: [{ type: i0.ContentChildren, args: [NgbTab,] }],
            activeId: [{ type: i0.Input }],
            destroyOnHide: [{ type: i0.Input }],
            justify: [{ type: i0.Input }],
            orientation: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            tabChange: [{ type: i0.Output }]
        };
        return NgbTabset;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];
    var NgbTabsetModule = /** @class */ (function () {
        function NgbTabsetModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbTabsetModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbTabsetModule }; };
        NgbTabsetModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [i1.CommonModule] },] }
        ];
        return NgbTabsetModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbTime = /** @class */ (function () {
        function NgbTime(hour, minute, second) {
            this.hour = toInteger(hour);
            this.minute = toInteger(minute);
            this.second = toInteger(second);
        }
        /**
         * @param {?=} step
         * @return {?}
         */
        NgbTime.prototype.changeHour = /**
         * @param {?=} step
         * @return {?}
         */
            function (step) {
                if (step === void 0) {
                    step = 1;
                }
                this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
            };
        /**
         * @param {?} hour
         * @return {?}
         */
        NgbTime.prototype.updateHour = /**
         * @param {?} hour
         * @return {?}
         */
            function (hour) {
                if (isNumber(hour)) {
                    this.hour = (hour < 0 ? 24 + hour : hour) % 24;
                }
                else {
                    this.hour = NaN;
                }
            };
        /**
         * @param {?=} step
         * @return {?}
         */
        NgbTime.prototype.changeMinute = /**
         * @param {?=} step
         * @return {?}
         */
            function (step) {
                if (step === void 0) {
                    step = 1;
                }
                this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
            };
        /**
         * @param {?} minute
         * @return {?}
         */
        NgbTime.prototype.updateMinute = /**
         * @param {?} minute
         * @return {?}
         */
            function (minute) {
                if (isNumber(minute)) {
                    this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
                    this.changeHour(Math.floor(minute / 60));
                }
                else {
                    this.minute = NaN;
                }
            };
        /**
         * @param {?=} step
         * @return {?}
         */
        NgbTime.prototype.changeSecond = /**
         * @param {?=} step
         * @return {?}
         */
            function (step) {
                if (step === void 0) {
                    step = 1;
                }
                this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
            };
        /**
         * @param {?} second
         * @return {?}
         */
        NgbTime.prototype.updateSecond = /**
         * @param {?} second
         * @return {?}
         */
            function (second) {
                if (isNumber(second)) {
                    this.second = second < 0 ? 60 + second % 60 : second % 60;
                    this.changeMinute(Math.floor(second / 60));
                }
                else {
                    this.second = NaN;
                }
            };
        /**
         * @param {?=} checkSecs
         * @return {?}
         */
        NgbTime.prototype.isValid = /**
         * @param {?=} checkSecs
         * @return {?}
         */
            function (checkSecs) {
                if (checkSecs === void 0) {
                    checkSecs = true;
                }
                return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
            };
        /**
         * @return {?}
         */
        NgbTime.prototype.toString = /**
         * @return {?}
         */
            function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
        return NgbTime;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbTimepicker component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the timepickers used in the application.
     */
    var NgbTimepickerConfig = /** @class */ (function () {
        function NgbTimepickerConfig() {
            this.meridian = false;
            this.spinners = true;
            this.seconds = false;
            this.hourStep = 1;
            this.minuteStep = 1;
            this.secondStep = 1;
            this.disabled = false;
            this.readonlyInputs = false;
            this.size = 'medium';
        }
        NgbTimepickerConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbTimepickerConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbTimepickerConfig_Factory() { return new NgbTimepickerConfig(); }, token: NgbTimepickerConfig, providedIn: "root" });
        return NgbTimepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
        return new NgbTimeStructAdapter();
    }
    /**
     * Abstract type serving as a DI token for the service converting from your application Time model to internal
     * NgbTimeStruct model.
     * A default implementation converting from and to NgbTimeStruct is provided for retro-compatibility,
     * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
     *
     * \@since 2.2.0
     * @abstract
     * @template T
     */
    var NgbTimeAdapter = /** @class */ (function () {
        function NgbTimeAdapter() {
        }
        NgbTimeAdapter.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root', useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY },] }
        ];
        /** @nocollapse */ NgbTimeAdapter.ngInjectableDef = i0.defineInjectable({ factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY, token: NgbTimeAdapter, providedIn: "root" });
        return NgbTimeAdapter;
    }());
    var NgbTimeStructAdapter = /** @class */ (function (_super) {
        __extends(NgbTimeStructAdapter, _super);
        function NgbTimeStructAdapter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         */
        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */
        NgbTimeStructAdapter.prototype.fromModel = /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */
            function (time) {
                return (time && isInteger(time.hour) && isInteger(time.minute)) ?
                    { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
                    null;
            };
        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         */
        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */
        NgbTimeStructAdapter.prototype.toModel = /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */
            function (time) {
                return (time && isInteger(time.hour) && isInteger(time.minute)) ?
                    { hour: time.hour, minute: time.minute, second: isInteger(time.second) ? time.second : null } :
                    null;
            };
        NgbTimeStructAdapter.decorators = [
            { type: i0.Injectable }
        ];
        return NgbTimeStructAdapter;
    }(NgbTimeAdapter));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_TIMEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbTimepicker; }),
        multi: true
    };
    /**
     * A lightweight & configurable timepicker directive.
     */
    var NgbTimepicker = /** @class */ (function () {
        function NgbTimepicker(_config, _ngbTimeAdapter, _cd) {
            this._config = _config;
            this._ngbTimeAdapter = _ngbTimeAdapter;
            this._cd = _cd;
            this.onChange = function (_) { };
            this.onTouched = function () { };
            this.meridian = _config.meridian;
            this.spinners = _config.spinners;
            this.seconds = _config.seconds;
            this.hourStep = _config.hourStep;
            this.minuteStep = _config.minuteStep;
            this.secondStep = _config.secondStep;
            this.disabled = _config.disabled;
            this.readonlyInputs = _config.readonlyInputs;
            this.size = _config.size;
        }
        Object.defineProperty(NgbTimepicker.prototype, "hourStep", {
            get: /**
             * @return {?}
             */ function () { return this._hourStep; },
            /**
             * Number of hours to increase or decrease when using a button.
             */
            set: /**
             * Number of hours to increase or decrease when using a button.
             * @param {?} step
             * @return {?}
             */ function (step) {
                this._hourStep = isInteger(step) ? step : this._config.hourStep;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbTimepicker.prototype, "minuteStep", {
            get: /**
             * @return {?}
             */ function () { return this._minuteStep; },
            /**
             * Number of minutes to increase or decrease when using a button.
             */
            set: /**
             * Number of minutes to increase or decrease when using a button.
             * @param {?} step
             * @return {?}
             */ function (step) {
                this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbTimepicker.prototype, "secondStep", {
            get: /**
             * @return {?}
             */ function () { return this._secondStep; },
            /**
             * Number of seconds to increase or decrease when using a button.
             */
            set: /**
             * Number of seconds to increase or decrease when using a button.
             * @param {?} step
             * @return {?}
             */ function (step) {
                this._secondStep = isInteger(step) ? step : this._config.secondStep;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} value
         * @return {?}
         */
        NgbTimepicker.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                /** @type {?} */
                var structValue = this._ngbTimeAdapter.fromModel(value);
                this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();
                if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
                    this.model.second = 0;
                }
                this._cd.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbTimepicker.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbTimepicker.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this.onTouched = fn; };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbTimepicker.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) { this.disabled = isDisabled; };
        /**
         * @param {?} step
         * @return {?}
         */
        NgbTimepicker.prototype.changeHour = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                this.model.changeHour(step);
                this.propagateModelChange();
            };
        /**
         * @param {?} step
         * @return {?}
         */
        NgbTimepicker.prototype.changeMinute = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                this.model.changeMinute(step);
                this.propagateModelChange();
            };
        /**
         * @param {?} step
         * @return {?}
         */
        NgbTimepicker.prototype.changeSecond = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                this.model.changeSecond(step);
                this.propagateModelChange();
            };
        /**
         * @param {?} newVal
         * @return {?}
         */
        NgbTimepicker.prototype.updateHour = /**
         * @param {?} newVal
         * @return {?}
         */
            function (newVal) {
                /** @type {?} */
                var isPM = this.model.hour >= 12;
                /** @type {?} */
                var enteredHour = toInteger(newVal);
                if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
                    this.model.updateHour(enteredHour + 12);
                }
                else {
                    this.model.updateHour(enteredHour);
                }
                this.propagateModelChange();
            };
        /**
         * @param {?} newVal
         * @return {?}
         */
        NgbTimepicker.prototype.updateMinute = /**
         * @param {?} newVal
         * @return {?}
         */
            function (newVal) {
                this.model.updateMinute(toInteger(newVal));
                this.propagateModelChange();
            };
        /**
         * @param {?} newVal
         * @return {?}
         */
        NgbTimepicker.prototype.updateSecond = /**
         * @param {?} newVal
         * @return {?}
         */
            function (newVal) {
                this.model.updateSecond(toInteger(newVal));
                this.propagateModelChange();
            };
        /**
         * @return {?}
         */
        NgbTimepicker.prototype.toggleMeridian = /**
         * @return {?}
         */
            function () {
                if (this.meridian) {
                    this.changeHour(12);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbTimepicker.prototype.formatHour = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (isNumber(value)) {
                    if (this.meridian) {
                        return padNumber(value % 12 === 0 ? 12 : value % 12);
                    }
                    else {
                        return padNumber(value % 24);
                    }
                }
                else {
                    return padNumber(NaN);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbTimepicker.prototype.formatMinSec = /**
         * @param {?} value
         * @return {?}
         */
            function (value) { return padNumber(value); };
        Object.defineProperty(NgbTimepicker.prototype, "isSmallSize", {
            get: /**
             * @return {?}
             */ function () { return this.size === 'small'; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgbTimepicker.prototype, "isLargeSize", {
            get: /**
             * @return {?}
             */ function () { return this.size === 'large'; },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbTimepicker.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
                    this.model.second = 0;
                    this.propagateModelChange(false);
                }
            };
        /**
         * @param {?=} touched
         * @return {?}
         */
        NgbTimepicker.prototype.propagateModelChange = /**
         * @param {?=} touched
         * @return {?}
         */
            function (touched) {
                if (touched === void 0) {
                    touched = true;
                }
                if (touched) {
                    this.onTouched();
                }
                if (this.model.isValid(this.seconds)) {
                    this.onChange(this._ngbTimeAdapter.toModel({ hour: this.model.hour, minute: this.model.minute, second: this.model.second }));
                }
                else {
                    this.onChange(this._ngbTimeAdapter.toModel(null));
                }
            };
        NgbTimepicker.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-timepicker',
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (keydown.ArrowUp)=\"changeHour(hourStep)\" (keydown.ArrowDown)=\"changeHour(-hourStep)\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep)\" (keydown.ArrowDown)=\"changeMinute(-minuteStep)\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readonly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep)\" (keydown.ArrowDown)=\"changeSecond(-secondStep)\">\n          <button *ngIf=\"spinners\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model?.hour >= 12; else am\" i18n=\"@@ngb.timepicker.PM\">PM</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">AM</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
                        providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
                        styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:'';display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        NgbTimepicker.ctorParameters = function () {
            return [
                { type: NgbTimepickerConfig },
                { type: NgbTimeAdapter },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbTimepicker.propDecorators = {
            meridian: [{ type: i0.Input }],
            spinners: [{ type: i0.Input }],
            seconds: [{ type: i0.Input }],
            hourStep: [{ type: i0.Input }],
            minuteStep: [{ type: i0.Input }],
            secondStep: [{ type: i0.Input }],
            readonlyInputs: [{ type: i0.Input }],
            size: [{ type: i0.Input }]
        };
        return NgbTimepicker;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbTimepickerModule = /** @class */ (function () {
        function NgbTimepickerModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbTimepickerModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbTimepickerModule }; };
        NgbTimepickerModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbTimepicker], exports: [NgbTimepicker], imports: [i1.CommonModule] },] }
        ];
        return NgbTimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbTooltip directive.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the tooltips used in the application.
     */
    var NgbTooltipConfig = /** @class */ (function () {
        function NgbTooltipConfig() {
            this.autoClose = true;
            this.placement = 'auto';
            this.triggers = 'hover focus';
            this.disableTooltip = false;
            this.openDelay = 0;
            this.closeDelay = 0;
        }
        NgbTooltipConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbTooltipConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbTooltipConfig_Factory() { return new NgbTooltipConfig(); }, token: NgbTooltipConfig, providedIn: "root" });
        return NgbTooltipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var nextId$5 = 0;
    var NgbTooltipWindow = /** @class */ (function () {
        function NgbTooltipWindow() {
        }
        NgbTooltipWindow.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-tooltip-window',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        host: { '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")', 'role': 'tooltip', '[id]': 'id' },
                        template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
                        styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
                    }] }
        ];
        NgbTooltipWindow.propDecorators = {
            id: [{ type: i0.Input }],
            tooltipClass: [{ type: i0.Input }]
        };
        return NgbTooltipWindow;
    }());
    /**
     * A lightweight, extensible directive for fancy tooltip creation.
     */
    var NgbTooltip = /** @class */ (function () {
        function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector) {
            var _this = this;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._ngZone = _ngZone;
            this._document = _document;
            this._changeDetector = _changeDetector;
            /**
             * Emits an event when the tooltip is shown
             */
            this.shown = new i0.EventEmitter();
            /**
             * Emits an event when the tooltip is hidden
             */
            this.hidden = new i0.EventEmitter();
            this._ngbTooltipWindowId = "ngb-tooltip-" + nextId$5++;
            this.autoClose = config.autoClose;
            this.placement = config.placement;
            this.triggers = config.triggers;
            this.container = config.container;
            this.disableTooltip = config.disableTooltip;
            this.tooltipClass = config.tooltipClass;
            this.openDelay = config.openDelay;
            this.closeDelay = config.closeDelay;
            this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
            this._zoneSubscription = _ngZone.onStable.subscribe(function () {
                if (_this._windowRef) {
                    positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body', 'bs-tooltip');
                }
            });
        }
        Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
            get: /**
             * @return {?}
             */ function () { return this._ngbTooltip; },
            /**
             * Content to be displayed as tooltip. If falsy, the tooltip won't open.
             */
            set: /**
             * Content to be displayed as tooltip. If falsy, the tooltip won't open.
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._ngbTooltip = value;
                if (!value && this._windowRef) {
                    this.close();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * The context is an optional value to be injected into the tooltip template when it is created.
         */
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * The context is an optional value to be injected into the tooltip template when it is created.
         * @param {?=} context
         * @return {?}
         */
        NgbTooltip.prototype.open = /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * The context is an optional value to be injected into the tooltip template when it is created.
         * @param {?=} context
         * @return {?}
         */
            function (context) {
                var _this = this;
                if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
                    this._windowRef = this._popupService.open(this._ngbTooltip, context);
                    this._windowRef.instance.tooltipClass = this.tooltipClass;
                    this._windowRef.instance.id = this._ngbTooltipWindowId;
                    this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
                    if (this.container === 'body') {
                        this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                    }
                    // apply styling to set basic css-classes on target element, before going for positioning
                    this._windowRef.changeDetectorRef.markForCheck();
                    ngbAutoClose(this._ngZone, this._document, this.autoClose, function () { return _this.close(); }, this.hidden, [this._windowRef.location.nativeElement]);
                    this.shown.emit();
                }
            };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         */
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * @return {?}
         */
        NgbTooltip.prototype.close = /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * @return {?}
         */
            function () {
                if (this._windowRef != null) {
                    this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
                    this._popupService.close();
                    this._windowRef = null;
                    this.hidden.emit();
                    this._changeDetector.markForCheck();
                }
            };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         */
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * @return {?}
         */
        NgbTooltip.prototype.toggle = /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
         * @return {?}
         */
            function () {
                if (this._windowRef) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        NgbTooltip.prototype.isOpen = /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
            function () { return this._windowRef != null; };
        /**
         * @return {?}
         */
        NgbTooltip.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
            };
        /**
         * @return {?}
         */
        NgbTooltip.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.close();
                // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
                // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199
                if (this._unregisterListenersFn) {
                    this._unregisterListenersFn();
                }
                this._zoneSubscription.unsubscribe();
            };
        NgbTooltip.decorators = [
            { type: i0.Directive, args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' },] }
        ];
        /** @nocollapse */
        NgbTooltip.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 },
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef },
                { type: NgbTooltipConfig },
                { type: i0.NgZone },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbTooltip.propDecorators = {
            autoClose: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            triggers: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            disableTooltip: [{ type: i0.Input }],
            tooltipClass: [{ type: i0.Input }],
            openDelay: [{ type: i0.Input }],
            closeDelay: [{ type: i0.Input }],
            shown: [{ type: i0.Output }],
            hidden: [{ type: i0.Output }],
            ngbTooltip: [{ type: i0.Input }]
        };
        return NgbTooltip;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbTooltipModule = /** @class */ (function () {
        function NgbTooltipModule() {
        }
        /**
         * No need in forRoot anymore with tree-shakeable services
         *
         * @deprecated 3.0.0
         */
        /**
         * No need in forRoot anymore with tree-shakeable services
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbTooltipModule.forRoot = /**
         * No need in forRoot anymore with tree-shakeable services
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbTooltipModule }; };
        NgbTooltipModule.decorators = [
            { type: i0.NgModule, args: [{ declarations: [NgbTooltip, NgbTooltipWindow], exports: [NgbTooltip], entryComponents: [NgbTooltipWindow] },] }
        ];
        return NgbTooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * A component that can be used inside a custom result template in order to highlight the term inside the text of the
     * result
     */
    var NgbHighlight = /** @class */ (function () {
        function NgbHighlight() {
            /**
             * The CSS class of the span elements wrapping the term inside the result
             */
            this.highlightClass = 'ngb-highlight';
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NgbHighlight.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                /** @type {?} */
                var resultStr = toString(this.result);
                /** @type {?} */
                var resultLC = resultStr.toLowerCase();
                /** @type {?} */
                var termLC = toString(this.term).toLowerCase();
                /** @type {?} */
                var currentIdx = 0;
                if (termLC.length > 0) {
                    this.parts = resultLC.split(new RegExp("(" + regExpEscape(termLC) + ")")).map(function (part) {
                        /** @type {?} */
                        var originalPart = resultStr.substr(currentIdx, part.length);
                        currentIdx += part.length;
                        return originalPart;
                    });
                }
                else {
                    this.parts = [resultStr];
                }
            };
        NgbHighlight.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-highlight',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
                            "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" +
                            "</ng-template>",
                        styles: [".ngb-highlight{font-weight:700}"]
                    }] }
        ];
        NgbHighlight.propDecorators = {
            highlightClass: [{ type: i0.Input }],
            result: [{ type: i0.Input }],
            term: [{ type: i0.Input }]
        };
        return NgbHighlight;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbTypeaheadWindow = /** @class */ (function () {
        function NgbTypeaheadWindow() {
            this.activeIdx = 0;
            /**
             * Flag indicating if the first row should be active initially
             */
            this.focusFirst = true;
            /**
             * A function used to format a given result before display. This function should return a formatted string without any
             * HTML markup
             */
            this.formatter = toString;
            /**
             * Event raised when user selects a particular result row
             */
            this.selectEvent = new i0.EventEmitter();
            this.activeChangeEvent = new i0.EventEmitter();
        }
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.hasActive = /**
         * @return {?}
         */
            function () { return this.activeIdx > -1 && this.activeIdx < this.results.length; };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.getActive = /**
         * @return {?}
         */
            function () { return this.results[this.activeIdx]; };
        /**
         * @param {?} activeIdx
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.markActive = /**
         * @param {?} activeIdx
         * @return {?}
         */
            function (activeIdx) {
                this.activeIdx = activeIdx;
                this._activeChanged();
            };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.next = /**
         * @return {?}
         */
            function () {
                if (this.activeIdx === this.results.length - 1) {
                    this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
                }
                else {
                    this.activeIdx++;
                }
                this._activeChanged();
            };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.prev = /**
         * @return {?}
         */
            function () {
                if (this.activeIdx < 0) {
                    this.activeIdx = this.results.length - 1;
                }
                else if (this.activeIdx === 0) {
                    this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
                }
                else {
                    this.activeIdx--;
                }
                this._activeChanged();
            };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.resetActive = /**
         * @return {?}
         */
            function () {
                this.activeIdx = this.focusFirst ? 0 : -1;
                this._activeChanged();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) { this.selectEvent.emit(item); };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this.resetActive(); };
        /**
         * @return {?}
         */
        NgbTypeaheadWindow.prototype._activeChanged = /**
         * @return {?}
         */
            function () {
                this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
            };
        NgbTypeaheadWindow.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngb-typeahead-window',
                        exportAs: 'ngbTypeaheadWindow',
                        host: { '(mousedown)': '$event.preventDefault()', 'class': 'dropdown-menu show', 'role': 'listbox', '[id]': 'id' },
                        template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
                    }] }
        ];
        NgbTypeaheadWindow.propDecorators = {
            id: [{ type: i0.Input }],
            focusFirst: [{ type: i0.Input }],
            results: [{ type: i0.Input }],
            term: [{ type: i0.Input }],
            formatter: [{ type: i0.Input }],
            resultTemplate: [{ type: i0.Input }],
            selectEvent: [{ type: i0.Output, args: ['select',] }],
            activeChangeEvent: [{ type: i0.Output, args: ['activeChange',] }]
        };
        return NgbTypeaheadWindow;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ARIA_LIVE_DELAY = new i0.InjectionToken('live announcer delay', { providedIn: 'root', factory: ARIA_LIVE_DELAY_FACTORY });
    /**
     * @return {?}
     */
    function ARIA_LIVE_DELAY_FACTORY() {
        return 100;
    }
    /**
     * @param {?} document
     * @param {?=} lazyCreate
     * @return {?}
     */
    function getLiveElement(document, lazyCreate) {
        if (lazyCreate === void 0) {
            lazyCreate = false;
        }
        /** @type {?} */
        var element = ( /** @type {?} */(document.body.querySelector('#ngb-live')));
        if (element == null && lazyCreate) {
            element = document.createElement('div');
            element.setAttribute('id', 'ngb-live');
            element.setAttribute('aria-live', 'polite');
            element.setAttribute('aria-atomic', 'true');
            element.classList.add('sr-only');
            document.body.appendChild(element);
        }
        return element;
    }
    var Live = /** @class */ (function () {
        function Live(_document, _delay) {
            this._document = _document;
            this._delay = _delay;
        }
        /**
         * @return {?}
         */
        Live.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var element = getLiveElement(this._document);
                if (element) {
                    element.parentElement.removeChild(element);
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        Live.prototype.say = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                /** @type {?} */
                var element = getLiveElement(this._document, true);
                /** @type {?} */
                var delay = this._delay;
                element.textContent = '';
                /** @type {?} */
                var setText = function () { return element.textContent = message; };
                if (delay === null) {
                    setText();
                }
                else {
                    setTimeout(setText, delay);
                }
            };
        Live.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */
        Live.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: [ARIA_LIVE_DELAY,] }] }
            ];
        };
        /** @nocollapse */ Live.ngInjectableDef = i0.defineInjectable({ factory: function Live_Factory() { return new Live(i0.inject(i1.DOCUMENT), i0.inject(ARIA_LIVE_DELAY)); }, token: Live, providedIn: "root" });
        return Live;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * Configuration service for the NgbTypeahead component.
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the typeaheads used in the application.
     */
    var NgbTypeaheadConfig = /** @class */ (function () {
        function NgbTypeaheadConfig() {
            this.editable = true;
            this.focusFirst = true;
            this.showHint = false;
            this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        }
        NgbTypeaheadConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgbTypeaheadConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgbTypeaheadConfig_Factory() { return new NgbTypeaheadConfig(); }, token: NgbTypeaheadConfig, providedIn: "root" });
        return NgbTypeaheadConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return NgbTypeahead; }),
        multi: true
    };
    /** @type {?} */
    var nextWindowId = 0;
    /**
     * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
     */
    var NgbTypeahead = /** @class */ (function () {
        function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector) {
            var _this = this;
            this._elementRef = _elementRef;
            this._viewContainerRef = _viewContainerRef;
            this._renderer = _renderer;
            this._injector = _injector;
            this._live = _live;
            this._document = _document;
            this._ngZone = _ngZone;
            this._changeDetector = _changeDetector;
            this._closed$ = new rxjs.Subject();
            /**
             * Value for the configurable autocomplete attribute.
             * Defaults to 'off' to disable the native browser autocomplete, but this standard value does not seem
             * to be always correctly taken into account.
             *
             * \@since 2.1.0
             */
            this.autocomplete = 'off';
            /**
             * Placement of a typeahead accepts:
             *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
             *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
             *  array or a space separated string of above values
             */
            this.placement = 'bottom-left';
            /**
             * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
             */
            this.selectItem = new i0.EventEmitter();
            this.popupId = "ngb-typeahead-" + nextWindowId++;
            this._onTouched = function () { };
            this._onChange = function (_) { };
            this.container = config.container;
            this.editable = config.editable;
            this.focusFirst = config.focusFirst;
            this.showHint = config.showHint;
            this.placement = config.placement;
            this._valueChanges = rxjs.fromEvent(_elementRef.nativeElement, 'input')
                .pipe(operators.map(function ($event) { return (( /** @type {?} */($event.target))).value; }));
            this._resubscribeTypeahead = new rxjs.BehaviorSubject(null);
            this._popupService = new PopupService(NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
            this._zoneSubscription = ngZone.onStable.subscribe(function () {
                if (_this.isPopupOpen()) {
                    positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
                }
            });
        }
        /**
         * @return {?}
         */
        NgbTypeahead.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var inputValues$ = this._valueChanges.pipe(operators.tap(function (value) {
                    _this._inputValueBackup = _this.showHint ? value : null;
                    if (_this.editable) {
                        _this._onChange(value);
                    }
                }));
                /** @type {?} */
                var results$ = inputValues$.pipe(this.ngbTypeahead);
                /** @type {?} */
                var processedResults$ = results$.pipe(operators.tap(function () {
                    if (!_this.editable) {
                        _this._onChange(undefined);
                    }
                }));
                /** @type {?} */
                var userInput$ = this._resubscribeTypeahead.pipe(operators.switchMap(function () { return processedResults$; }));
                this._subscription = this._subscribeToUserInput(userInput$);
            };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._closePopup();
                this._unsubscribeFromUserInput();
                this._zoneSubscription.unsubscribe();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbTypeahead.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this._onChange = fn; };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgbTypeahead.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) { this._onTouched = fn; };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbTypeahead.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._writeInputValue(this._formatItemForInput(value));
                if (this.showHint) {
                    this._inputValueBackup = value;
                }
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgbTypeahead.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
            };
        /**
         * Dismisses typeahead popup window
         */
        /**
         * Dismisses typeahead popup window
         * @return {?}
         */
        NgbTypeahead.prototype.dismissPopup = /**
         * Dismisses typeahead popup window
         * @return {?}
         */
            function () {
                if (this.isPopupOpen()) {
                    this._resubscribeTypeahead.next(null);
                    this._closePopup();
                    if (this.showHint && this._inputValueBackup !== null) {
                        this._writeInputValue(this._inputValueBackup);
                    }
                    this._changeDetector.markForCheck();
                }
            };
        /**
         * Returns true if the typeahead popup window is displayed
         */
        /**
         * Returns true if the typeahead popup window is displayed
         * @return {?}
         */
        NgbTypeahead.prototype.isPopupOpen = /**
         * Returns true if the typeahead popup window is displayed
         * @return {?}
         */
            function () { return this._windowRef != null; };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype.handleBlur = /**
         * @return {?}
         */
            function () {
                this._resubscribeTypeahead.next(null);
                this._onTouched();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NgbTypeahead.prototype.handleKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (!this.isPopupOpen()) {
                    return;
                }
                // tslint:disable-next-line:deprecation
                switch (event.which) {
                    case Key.ArrowDown:
                        event.preventDefault();
                        this._windowRef.instance.next();
                        this._showHint();
                        break;
                    case Key.ArrowUp:
                        event.preventDefault();
                        this._windowRef.instance.prev();
                        this._showHint();
                        break;
                    case Key.Enter:
                    case Key.Tab:
                        /** @type {?} */
                        var result = this._windowRef.instance.getActive();
                        if (isDefined(result)) {
                            event.preventDefault();
                            event.stopPropagation();
                            this._selectResult(result);
                        }
                        this._closePopup();
                        break;
                }
            };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype._openPopup = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.isPopupOpen()) {
                    this._inputValueBackup = this._elementRef.nativeElement.value;
                    this._windowRef = this._popupService.open();
                    this._windowRef.instance.id = this.popupId;
                    this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
                    this._windowRef.instance.activeChangeEvent.subscribe(function (activeId) { return _this.activeDescendant = activeId; });
                    if (this.container === 'body') {
                        window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
                    }
                    this._changeDetector.markForCheck();
                    ngbAutoClose(this._ngZone, this._document, 'outside', function () { return _this.dismissPopup(); }, this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
                }
            };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype._closePopup = /**
         * @return {?}
         */
            function () {
                this._closed$.next();
                this._popupService.close();
                this._windowRef = null;
                this.activeDescendant = undefined;
            };
        /**
         * @param {?} result
         * @return {?}
         */
        NgbTypeahead.prototype._selectResult = /**
         * @param {?} result
         * @return {?}
         */
            function (result) {
                /** @type {?} */
                var defaultPrevented = false;
                this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
                this._resubscribeTypeahead.next(null);
                if (!defaultPrevented) {
                    this.writeValue(result);
                    this._onChange(result);
                }
            };
        /**
         * @param {?} result
         * @return {?}
         */
        NgbTypeahead.prototype._selectResultClosePopup = /**
         * @param {?} result
         * @return {?}
         */
            function (result) {
                this._selectResult(result);
                this._closePopup();
            };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype._showHint = /**
         * @return {?}
         */
            function () {
                if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
                    /** @type {?} */
                    var userInputLowerCase = this._inputValueBackup.toLowerCase();
                    /** @type {?} */
                    var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
                    if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
                        this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));
                        this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
                    }
                    else {
                        this._writeInputValue(formattedVal);
                    }
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgbTypeahead.prototype._formatItemForInput = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgbTypeahead.prototype._writeInputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
            };
        /**
         * @param {?} userInput$
         * @return {?}
         */
        NgbTypeahead.prototype._subscribeToUserInput = /**
         * @param {?} userInput$
         * @return {?}
         */
            function (userInput$) {
                var _this = this;
                return userInput$.subscribe(function (results) {
                    if (!results || results.length === 0) {
                        _this._closePopup();
                    }
                    else {
                        _this._openPopup();
                        _this._windowRef.instance.focusFirst = _this.focusFirst;
                        _this._windowRef.instance.results = results;
                        _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
                        if (_this.resultFormatter) {
                            _this._windowRef.instance.formatter = _this.resultFormatter;
                        }
                        if (_this.resultTemplate) {
                            _this._windowRef.instance.resultTemplate = _this.resultTemplate;
                        }
                        _this._windowRef.instance.resetActive();
                        // The observable stream we are subscribing to might have async steps
                        // and if a component containing typeahead is using the OnPush strategy
                        // the change detection turn wouldn't be invoked automatically.
                        _this._windowRef.changeDetectorRef.detectChanges();
                        _this._showHint();
                    }
                    // live announcer
                    /** @type {?} */
                    var count = results ? results.length : 0;
                    _this._live.say(count === 0 ? 'No results available' : count + " result" + (count === 1 ? '' : 's') + " available");
                });
            };
        /**
         * @return {?}
         */
        NgbTypeahead.prototype._unsubscribeFromUserInput = /**
         * @return {?}
         */
            function () {
                if (this._subscription) {
                    this._subscription.unsubscribe();
                }
                this._subscription = null;
            };
        NgbTypeahead.decorators = [
            { type: i0.Directive, args: [{
                        selector: 'input[ngbTypeahead]',
                        exportAs: 'ngbTypeahead',
                        host: {
                            '(blur)': 'handleBlur()',
                            '[class.open]': 'isPopupOpen()',
                            '(keydown)': 'handleKeyDown($event)',
                            '[autocomplete]': 'autocomplete',
                            'autocapitalize': 'off',
                            'autocorrect': 'off',
                            'role': 'combobox',
                            'aria-multiline': 'false',
                            '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
                            '[attr.aria-activedescendant]': 'activeDescendant',
                            '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
                            '[attr.aria-expanded]': 'isPopupOpen()'
                        },
                        providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        NgbTypeahead.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.ViewContainerRef },
                { type: i0.Renderer2 },
                { type: i0.Injector },
                { type: i0.ComponentFactoryResolver },
                { type: NgbTypeaheadConfig },
                { type: i0.NgZone },
                { type: Live },
                { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
                { type: i0.NgZone },
                { type: i0.ChangeDetectorRef }
            ];
        };
        NgbTypeahead.propDecorators = {
            autocomplete: [{ type: i0.Input }],
            container: [{ type: i0.Input }],
            editable: [{ type: i0.Input }],
            focusFirst: [{ type: i0.Input }],
            inputFormatter: [{ type: i0.Input }],
            ngbTypeahead: [{ type: i0.Input }],
            resultFormatter: [{ type: i0.Input }],
            resultTemplate: [{ type: i0.Input }],
            showHint: [{ type: i0.Input }],
            placement: [{ type: i0.Input }],
            selectItem: [{ type: i0.Output }]
        };
        return NgbTypeahead;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgbTypeaheadModule = /** @class */ (function () {
        function NgbTypeaheadModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbTypeaheadModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbTypeaheadModule }; };
        NgbTypeaheadModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
                        exports: [NgbTypeahead, NgbHighlight],
                        imports: [i1.CommonModule],
                        entryComponents: [NgbTypeaheadWindow]
                    },] }
        ];
        return NgbTypeaheadModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var NGB_MODULES = [
        NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
        NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
        NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
    ];
    var NgbModule = /** @class */ (function () {
        function NgbModule() {
        }
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         */
        /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
        NgbModule.forRoot = /**
         * Importing with '.forRoot()' is no longer necessary, you can simply import the module.
         * Will be removed in 4.0.0.
         *
         * @deprecated 3.0.0
         * @return {?}
         */
            function () { return { ngModule: NgbModule }; };
        NgbModule.decorators = [
            { type: i0.NgModule, args: [{ imports: NGB_MODULES, exports: NGB_MODULES },] }
        ];
        return NgbModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgbAccordionModule = NgbAccordionModule;
    exports.NgbAccordionConfig = NgbAccordionConfig;
    exports.NgbAccordion = NgbAccordion;
    exports.NgbPanel = NgbPanel;
    exports.NgbPanelTitle = NgbPanelTitle;
    exports.NgbPanelContent = NgbPanelContent;
    exports.NgbPanelHeader = NgbPanelHeader;
    exports.NgbPanelToggle = NgbPanelToggle;
    exports.NgbAlertModule = NgbAlertModule;
    exports.NgbAlertConfig = NgbAlertConfig;
    exports.NgbAlert = NgbAlert;
    exports.NgbButtonsModule = NgbButtonsModule;
    exports.NgbButtonLabel = NgbButtonLabel;
    exports.NgbCheckBox = NgbCheckBox;
    exports.NgbRadio = NgbRadio;
    exports.NgbRadioGroup = NgbRadioGroup;
    exports.NgbCarouselModule = NgbCarouselModule;
    exports.NgbCarouselConfig = NgbCarouselConfig;
    exports.NgbCarousel = NgbCarousel;
    exports.NgbSlide = NgbSlide;
    exports.NgbCollapseModule = NgbCollapseModule;
    exports.NgbCollapse = NgbCollapse;
    exports.NgbCalendar = NgbCalendar;
    exports.NgbCalendarGregorian = NgbCalendarGregorian;
    exports.NgbCalendarIslamicCivil = NgbCalendarIslamicCivil;
    exports.NgbCalendarIslamicUmalqura = NgbCalendarIslamicUmalqura;
    exports.NgbCalendarHebrew = NgbCalendarHebrew;
    exports.NgbCalendarPersian = NgbCalendarPersian;
    exports.NgbDatepickerModule = NgbDatepickerModule;
    exports.NgbDatepickerI18n = NgbDatepickerI18n;
    exports.NgbDatepickerI18nHebrew = NgbDatepickerI18nHebrew;
    exports.NgbDatepickerConfig = NgbDatepickerConfig;
    exports.NgbDate = NgbDate;
    exports.NgbDateParserFormatter = NgbDateParserFormatter;
    exports.NgbDateAdapter = NgbDateAdapter;
    exports.NgbDateNativeAdapter = NgbDateNativeAdapter;
    exports.NgbDateNativeUTCAdapter = NgbDateNativeUTCAdapter;
    exports.NgbDatepicker = NgbDatepicker;
    exports.NgbInputDatepicker = NgbInputDatepicker;
    exports.NgbDropdownModule = NgbDropdownModule;
    exports.NgbDropdownAnchor = NgbDropdownAnchor;
    exports.NgbDropdownConfig = NgbDropdownConfig;
    exports.NgbDropdownItem = NgbDropdownItem;
    exports.NgbDropdownMenu = NgbDropdownMenu;
    exports.NgbDropdownToggle = NgbDropdownToggle;
    exports.NgbDropdown = NgbDropdown;
    exports.NgbModalModule = NgbModalModule;
    exports.NgbModal = NgbModal;
    exports.NgbModalConfig = NgbModalConfig;
    exports.NgbActiveModal = NgbActiveModal;
    exports.NgbModalRef = NgbModalRef;
    exports.ModalDismissReasons = ModalDismissReasons;
    exports.NgbPaginationModule = NgbPaginationModule;
    exports.NgbPaginationConfig = NgbPaginationConfig;
    exports.NgbPagination = NgbPagination;
    exports.NgbPaginationEllipsis = NgbPaginationEllipsis;
    exports.NgbPaginationFirst = NgbPaginationFirst;
    exports.NgbPaginationLast = NgbPaginationLast;
    exports.NgbPaginationNext = NgbPaginationNext;
    exports.NgbPaginationNumber = NgbPaginationNumber;
    exports.NgbPaginationPrevious = NgbPaginationPrevious;
    exports.NgbPopoverModule = NgbPopoverModule;
    exports.NgbPopoverConfig = NgbPopoverConfig;
    exports.NgbPopover = NgbPopover;
    exports.NgbProgressbarModule = NgbProgressbarModule;
    exports.NgbProgressbarConfig = NgbProgressbarConfig;
    exports.NgbProgressbar = NgbProgressbar;
    exports.NgbRatingModule = NgbRatingModule;
    exports.NgbRatingConfig = NgbRatingConfig;
    exports.NgbRating = NgbRating;
    exports.NgbTabsetModule = NgbTabsetModule;
    exports.NgbTabsetConfig = NgbTabsetConfig;
    exports.NgbTabset = NgbTabset;
    exports.NgbTab = NgbTab;
    exports.NgbTabContent = NgbTabContent;
    exports.NgbTabTitle = NgbTabTitle;
    exports.NgbTimepickerModule = NgbTimepickerModule;
    exports.NgbTimepickerConfig = NgbTimepickerConfig;
    exports.NgbTimepicker = NgbTimepicker;
    exports.NgbTimeAdapter = NgbTimeAdapter;
    exports.NgbTooltipModule = NgbTooltipModule;
    exports.NgbTooltipConfig = NgbTooltipConfig;
    exports.NgbTooltip = NgbTooltip;
    exports.NgbHighlight = NgbHighlight;
    exports.NgbTypeaheadModule = NgbTypeaheadModule;
    exports.NgbTypeaheadConfig = NgbTypeaheadConfig;
    exports.NgbTypeahead = NgbTypeahead;
    exports.NgbModule = NgbModule;
    exports.ɵa = NGB_CAROUSEL_DIRECTIVES;
    exports.ɵi = NGB_DATEPICKER_DATE_ADAPTER_FACTORY;
    exports.ɵj = NgbDateStructAdapter;
    exports.ɵd = NgbDatepickerDayView;
    exports.ɵg = NGB_DATEPICKER_18N_FACTORY;
    exports.ɵh = NgbDatepickerI18nDefault;
    exports.ɵs = NgbDatepickerKeyMapService;
    exports.ɵc = NgbDatepickerMonthView;
    exports.ɵe = NgbDatepickerNavigation;
    exports.ɵf = NgbDatepickerNavigationSelect;
    exports.ɵr = NgbDatepickerService;
    exports.ɵba = NgbCalendarHijri;
    exports.ɵb = NGB_DATEPICKER_CALENDAR_FACTORY;
    exports.ɵk = NGB_DATEPICKER_PARSER_FORMATTER_FACTORY;
    exports.ɵl = NgbDateISOParserFormatter;
    exports.ɵt = NgbModalBackdrop;
    exports.ɵv = NgbModalStack;
    exports.ɵu = NgbModalWindow;
    exports.ɵm = NgbPopoverWindow;
    exports.ɵn = NGB_DATEPICKER_TIME_ADAPTER_FACTORY;
    exports.ɵo = NgbTimeStructAdapter;
    exports.ɵp = NgbTooltipWindow;
    exports.ɵq = NgbTypeaheadWindow;
    exports.ɵx = ARIA_LIVE_DELAY;
    exports.ɵy = ARIA_LIVE_DELAY_FACTORY;
    exports.ɵz = Live;
    exports.ɵbb = ContentRef;
    exports.ɵw = ScrollBar;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

;
//# sourceMappingURL=scripts.js.map