(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{145:function(e,t,i){"use strict";i.r(t);i(164),i(73),i(51),i(176),i(203);var n=i(0),o=i.n(n),s=i(205),a=(i(175),i(180)),r=i(170),l=i(272),c=i.n(l),u=i(177),d=i(173),p=i.n(d),h=i(172),f=i.n(h),v=i(174);t.default=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(f.a,{title:"Ansatte i Scelto AS",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"icon",href:p.a}]}),o.a.createElement(r.a,null),o.a.createElement(a.a,{image:c.a,title:"Det er de ansatte som utgjør Scelto",subtitle:"Menneskene i Scelto kjennetegnes ved mer enn bare sin faglig styrke og senior erfaring. En Sceltoer er også fremoverlent, nysgjerrig og aldri redd for å bidra med sin synsvinkel.",link:"#ansatte"}),o.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"center",margin:"100px 50px 0"}},Object.keys(u.a).sort().map(function(e){var t=u.a[e],i=t.image,n=t.name,a=t.title;return o.a.createElement(s.a,{style:{},image:i,name:n,title:a,to:"/ansatte/"+e})})),o.a.createElement(v.a,null))}},163:function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,o=t.right,s=t.up,a=t.down,l=t.top,c=t.bottom,u=t.big,p=t.mirror,h=t.opposite,f=(i?i.toString():0)+((n?1:0)|(o?2:0)|(l||a?4:0)|(c||s?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(u?128:0));if(d.hasOwnProperty(f))return d[f];var v=n||o||s||a||l||c,m=void 0,g=void 0;if(v){if(!p!=!(e&&h)){var y=[o,n,c,l,a,s];n=y[0],o=y[1],l=y[2],c=y[3],s=y[4],a=y[5]}var b=i||(u?"2000px":"100%");m=n?"-"+b:o?b:"0",g=a||l?"-"+b:s||c?b:"0"}return d[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+m+", "+g+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),d[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,o=(e.out,e.forever),s=e.timeout,a=e.duration,l=void 0===a?r.defaults.duration:a,u=e.delay,d=void 0===u?r.defaults.delay:u,p=e.count,h=void 0===p?r.defaults.count:p,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:n,duration:void 0===s?l:s,delay:d,forever:o,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,v,v,i):v}Object.defineProperty(t,"__esModule",{value:!0});var s,a=i(4),r=i(188),l=i(199),c=(s=l)&&s.__esModule?s:{default:s},u={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},d={};o.propTypes=u,t.default=o,e.exports=t.default},180:function(e,t,i){"use strict";i(181);var n=i(0),o=i.n(n),s=i(4),a=i.n(s),r=i(171),l=i.n(r),c=i(183),u=i.n(c),d=(i(184),function(e){var t=e.image,i=e.title,n=e.subtitle,s=e.link,a=e.contactMeHref,r=e.children;return o.a.createElement("div",{className:"full-page-image-with-header",style:{background:"linear-gradient(rgba(40, 55, 57, 0.6), rgba(40, 55, 57, 0.6)), url("+t+") center",backgroundSize:"cover"}},o.a.createElement("h1",{className:"full-page-image-with-header__title"},i),n&&o.a.createElement("h3",{className:"full-page-image-with-header__subtitle"},n),r,!!a&&o.a.createElement("h5",{className:"contact-form-link"},o.a.createElement("a",{href:a,className:"sc-link"},"Ønsker du å bli kontaktet av oss?")),s&&o.a.createElement(l.a,{to:s},o.a.createElement("img",{style:{position:"absolute",bottom:"40px",margin:"auto",transform:"translateX(-50%)"},src:u.a,width:"40px",height:"40px"})))});d.propTypes={image:a.a.object,title:a.a.string,subtitle:a.a.string,link:a.a.bool,contactMeHref:a.a.string},t.a=d},181:function(e,t,i){"use strict";i(182)("link",function(e){return function(t){return e(this,"a","href",t)}})},182:function(e,t,i){var n=i(11),o=i(16),s=i(17),a=/"/g,r=function(e,t,i,n){var o=String(s(e)),r="<"+t;return""!==i&&(r+=" "+i+'="'+String(n).replace(a,"&quot;")+'"'),r+">"+o+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(r),n(n.P+n.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",i)}},183:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItOTkyMyAtOTE0IDQyIDQyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMywgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTEgewogICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbGlwLVNjZWx0b19pY29uLWFycm93LWRvd24tZGFyay1iZyk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlOiAjYzVkMjAwOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogbm9uZTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1TY2VsdG9faWNvbi1hcnJvdy1kb3duLWRhcmstYmciPgogICAgICA8cmVjdCB4PSItOTkyMyIgeT0iLTkxNCIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iU2NlbHRvX2ljb24tYXJyb3ctZG93bi1kYXJrLWJnIiBkYXRhLW5hbWU9IlNjZWx0b+KAk2ljb24tYXJyb3ctZG93bi1kYXJrLWJnIiBjbGFzcz0iY2xzLTEiPgogICAgPGcgaWQ9Imdyb3VwLTM4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNTg1IC0xNTgxKSI+CiAgICAgIDxnIGlkPSJyZWN0YW5nbGUtMTIiIGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYzIDY2OCkiPgogICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtNCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIi8+CiAgICAgICAgPHJlY3QgY2xhc3M9ImNscy01IiB4PSIyIiB5PSIyIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBpZD0icGF0aC0xIiBjbGFzcz0iY2xzLTMiIGQ9Ik0tNTI2OC4wMTYsNTc5LjVsMTAuNDUzLDEwLjQ1NCwxMC40NTQtMTAuNDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTQwLjQyMyAxMDMuMTg3KSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},184:function(e,t,i){},185:function(e,t,i){"use strict";var n=i(0),o=i.n(n),s=i(4),a=i.n(s),r=i(179),l=(i(186),function(e){var t=e.to,i=e.children;return o.a.createElement(r.Link,{to:t,className:"sc-link"},i)});l.propTypes={text:a.a.string.isRequired,to:a.a.string.isRequired},t.a=l},186:function(e,t,i){},188:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function o(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",o,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",o,!0),window.document.removeEventListener("visibilitychange",o))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,o){var s=Math.log(n),a=(Math.log(o)-s)/(i-t);return Math.exp(s+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+p)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=p,""+v+p++)},t.hideAll=o,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=a=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),d=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,v=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(c,1500),r||(t.collapseend=d=document.createEvent("Event"),d.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",o,!0),window.addEventListener("orientationchange",o,!0),window.document.addEventListener("visibilitychange",o))}},199:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,function(n){return s.default.createElement(a.default,o({},e,{inEffect:t,outEffect:i,children:n}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(0)),a=n(i(200));e.exports=t.default},200:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,o=!1,s=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){o=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(o)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),c=(n=l)&&n.__esModule?n:{default:n},u=i(4),d=i(188),p=(0,u.shape)({make:u.func,duration:u.number.isRequired,delay:u.number.isRequired,forever:u.bool,count:u.number.isRequired,style:u.object.isRequired,reverse:u.bool}),h={collapse:u.bool,collapseEl:u.element,cascade:u.bool,wait:u.number,force:u.bool,disabled:u.bool,appear:u.bool,enter:u.bool,exit:u.bool,fraction:u.number,refProp:u.string,innerRef:u.func,onReveal:u.func,unmountOnExit:u.bool,mountOnEnter:u.bool,inEffect:p.isRequired,outEffect:(0,u.oneOfType)([p,(0,u.oneOf)([!1])]).isRequired,ssrReveal:u.bool,collapseOnly:u.bool,ssrFadeout:u.bool},f={transitionGroup:u.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,d.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!d.observerMode&&this.props.collapse&&window.document.dispatchEvent(d.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,o=i.forever,s=i.count,a=i.delay,r=i.duration;if(!o){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},a+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,s=void 0,a=void 0;if(t.collapseOnly)s=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;s=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:o,transition:"height "+s+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),d.ssr&&(0,d.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&d.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];d.globalHide||(0,d.hideAll)(),this&&this.el&&(e||(e=this.props),d.ssr&&(0,d.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):d.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||d.ssr&&!d.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):d.ssr&&(d.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=i.length,u=2*s;this.props.collapse&&(u=parseInt(this.state.style.animationDuration,10),s=u/2);var p=r?l:0;return i.map(function(e){return"object"===(void 0===e?"undefined":o(e))&&e?c.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,d.cascade)(r?p--:p++,0,l,s,u))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===o(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,o=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?d.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,u=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),u=a({},o,{opacity:1})):u=this.props.disabled?o:a({},o,this.state.style);var p=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:u},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,d.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(d.globalHide?e.fraction:0);return n>o-window.innerHeight&&n<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){d.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!d.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},203:function(e,t,i){"use strict";var n=i(11),o=i(28),s=i(25),a=i(16),r=[].sort,l=[1,2,3];n(n.P+n.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!i(204)(r)),"Array",{sort:function(e){return void 0===e?r.call(s(this)):r.call(s(this),o(e))}})},204:function(e,t,i){"use strict";var n=i(16);e.exports=function(e,t){return!!e&&n(function(){t?e.call(null,function(){},1):e.call(null)})}},205:function(e,t,i){"use strict";i(164);var n=i(0),o=i.n(n),s=(i(206),i(179)),a=i(185);t.a=function(e){var t=e.name,i=e.title,n=e.image,r=e.to;e.style;return o.a.createElement(s.Link,{className:"employee-image-link",to:r},o.a.createElement("div",{className:"image"},o.a.createElement("img",{src:n,width:"100%",height:"100%"})),o.a.createElement("div",{className:"employee-image-link__text-container"},o.a.createElement("h5",null,o.a.createElement(a.a,{to:r},t)),o.a.createElement("p",null,i)))}},206:function(e,t,i){},272:function(e,t,i){e.exports=i.p+"static/smart-people-b7da50be3d5402ab7c08078ca6c9a39b.jpg"}}]);
//# sourceMappingURL=component---src-pages-ansatte-index-jsx-9c3fdae0b5787e45a858.js.map