(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9501)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(1003),a=n(7795),i=n(4465),s=n(2692),c=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function _(e,t,n,r){if(u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:h,children:v,prefetch:y,passHref:b,replace:j,shallow:x,scroll:g,locale:E,onClick:M,onMouseEnter:C,onTouchStart:N,legacyBehavior:P=!1}=e,k=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==y,w=l.default.useContext(s.RouterContext),T=l.default.useContext(c.AppRouterContext),L=null!=w?w:T,S=!w,{href:I,as:R}=l.default.useMemo(()=>{if(!w){let e=m(a);return{href:e,as:h?m(h):e}}let[t,n]=u.resolveHref(w,a,!0);return{href:t,as:h?u.resolveHref(w,h):n||t}},[w,a,h]),H=l.default.useRef(I),A=l.default.useRef(R);P&&(r=l.default.Children.only(n));let D=P?r&&"object"==typeof r&&r.ref:t,[K,U,F]=f.useIntersection({rootMargin:"200px"}),X=l.default.useCallback(e=>{(A.current!==R||H.current!==I)&&(F(),A.current=R,H.current=I),K(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,I,F,K]);l.default.useEffect(()=>{L&&U&&O&&_(L,I,R,{locale:E})},[R,I,U,E,O,null==w?void 0:w.locale,L]);let Z={ref:X,onClick(e){P||"function"!=typeof M||M(e),P&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,a,i,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?l.default.startTransition(h):h()}(e,L,I,R,j,x,g,E,S,O)},onMouseEnter(e){P||"function"!=typeof C||C(e),P&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(O||!S)&&_(L,I,R,{locale:E,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){P||"function"!=typeof N||N(e),P&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(O||!S)&&_(L,I,R,{locale:E,priority:!0,bypassPrefetchedCheck:!0})}};if(!P||b||"a"===r.type&&!("href"in r.props)){let q=void 0!==E?E:null==w?void 0:w.locale,B=(null==w?void 0:w.isLocaleDomain)&&d.getDomainLocale(R,q,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);Z.href=B||p.addBasePath(i.addLocale(R,q,null==w?void 0:w.defaultLocale))}return P?l.default.cloneElement(r,Z):l.default.createElement("a",Object.assign({},k,Z),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,s=i||!l,[c,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!c&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let t=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!c){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,s,n,t,c]);let h=r.useCallback(()=>{f(!1)},[]);return[p,c,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9501:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),o=n(4444),l=n.n(o),u=n(1664),a=n.n(u),i=n(804),s=n.n(i);function c(){return(0,r.jsxs)("div",{className:s().menu,children:[(0,r.jsx)(a(),{href:"/an-eye-for-an-eye/",className:s().menu_item,children:"An Eye For An Eye"}),(0,r.jsx)(a(),{href:"/human-writes/",className:s().menu_item,children:"Human Writes"}),(0,r.jsx)(a(),{href:"/non-martial-arts/",className:s().menu_item,children:"Non Martial Arts"}),(0,r.jsx)(a(),{href:"/exhibitionism/",className:s().menu_item,children:"Exhibitionism"}),(0,r.jsx)(a(),{href:"/about/",className:s().menu_item,children:"Pars Pro Toto"})]})}function f(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("header",{id:"header",className:l().header,children:[(0,r.jsx)("div",{className:l().header_title,children:(0,r.jsx)(a(),{href:"/",children:"Eightyeightdays"})}),(0,r.jsx)(c,{})]})})}var d=n(9671),p=n.n(d);function h(e){let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:p().content,children:t})]})}function _(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(h,{children:(0,r.jsx)(t,{...n})})}n(7475)},804:function(e){e.exports={menu:"Menu_menu__dCpg1",menu_item:"Menu_menu_item__qdkXG"}},9671:function(e){e.exports={content:"Content_content__91Hav"}},4444:function(e){e.exports={header:"Header_header__dEyO6",header_title:"Header_header_title__1ZAJG"}},7475:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);