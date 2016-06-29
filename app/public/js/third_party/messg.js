/*
See: https://github.com/andrepolischuk/messg

NOTE: Unfortunately, this has been modified to play wel with Pusher()
LM: 2016-02-15

 */
;(function(b){"object"==typeof exports?module.exports=b("1"):"function"==typeof define&&(define.amd||define.cmd)?define(function(){return b("1")}):this.messg=b("1")})(function a(b,c,d){function f(a,d){if(c[a])
return c[a].exports;if(b[a])
return g(a,f);throw Error('cannot find module "'+a+'"')}
function g(e,f){var g={exports:{}},h=b[e],i=h[2],j=h[0];return j.call(g.exports,function(a){var c=b[e][1][a];return f(c||a)},g,g.exports,a,b,c,d),c[e]=g,i&&(c[i]=c[e]),c[e].exports}
var e=function(){return this}
();for(var h in d)
d[h]?e[d[h]]=f(h):f(h);return f.duo=!0,f.cache=c,f.modules=b,f}
({1:[function(a,b,c){function r(a,b,c){if(!a)
return;if(!(this instanceof r))
return new r(a,b,c);this.id=g(j),this.delay=typeof b=="number"?b:c,this.type=typeof b=="string"?b:h[0],this.text=a.replace(/(<script.*>.*<\/script>)/gim,""),this.exist=!1,this.element=document.createElement("div"),this.element.innerHTML=k,this.element=this.element.children[0],this.element.style.display=p,this.element.style.opacity=n,this.element.style.transition="all "+r.speed/1e3+"s ease-in-out",this.element.className+=" "+j+"-"+this.type,this.element.id=this.id,this.element.setAttribute("role",this.type),this.buttons=this.element.children[0],this.content=this.element.children[1],this.content.innerHTML=this.text,document.getElementsByTagName("body")[0].appendChild(this.element),r.flow||f(l,function(a){a.hide()}),l[this.id]=this,this.show();var e=this;setTimeout(function(){e.buttons.children.length||d.bind(e.element,"click",function(){e.hide()})},r.speed)}
function s(){var a=m;f.reverse(l,function(b){b.exist&&(b.element.style[r.position]=a+"px",a+=b.element.offsetHeight+m)})}"use strict";try{var d=a("event")}catch(e){var d=a("component-event")}
var f=a("ea"),g=a("uniquid"),h=["default","success","info","warning","error"],i=document.getElementsByTagName("body")[0],j="messg",k='<div class="'+j+'">'+'<div class="'+j+'-buttons"></div>'+'<div class="'+j+'-text"></div>'+"</div>",l={},m=10,n="0.0",o="1.0",p="none",q="block";b.exports=r,r.speed=250,r.position="top",r.flow=!0,b.exports.set=function(a,b){typeof a=="object"?f(a,function(a,b){r[b]=a}):b&&(r[a]=b)},f(h,function(a){b.exports[a]=function(b,c){if(!b)
return;return new r(b,a,c)}}),r.prototype.show=function(){this.exist=!0,this.element.style.display=q,s();var a=this;return setTimeout(function(){a.element.style.opacity=o},50),this.delay&&setTimeout(function(){a.hide()},a.delay+r.speed),this},r.prototype.hide=function(a){if(typeof a=="function")
return this.fn=a,this;this.exist=!1,this.element.style.opacity=n,this.fn&&this.fn(),s();var b=this;setTimeout(function(){b.element.style.display=p,document.getElementsByTagName("body")[0].removeChild(b.element),delete l[b.id]},r.speed)},r.prototype.button=function(a,b){var c=document.createElement("button");c.innerHTML=a,this.buttons.appendChild(c),s();var e=this;return d.bind(c,"click",function(){typeof b=="function"&&b(a.toLowerCase()),e.hide()}),this}},{event:2,"component-event":2,ea:3,uniquid:4}],2:[function(a,b,c){var d=window.addEventListener?"addEventListener":"attachEvent",e=window.removeEventListener?"removeEventListener":"detachEvent",f=d!=="addEventListener"?"on":"";c.bind=function(a,b,c,e){return a[d](f+b,c,e||!1),c},c.unbind=function(a,b,c,d){return a[e](f+b,c,d||!1),c}},{}],3:[function(a,b,c){function g(a,b,c){if(typeof b=="function")
switch(d(a)){case"array":return(h[c]||h)(a,b);case"object":if(d(a.length)==="number")
return(h[c]||h)(a,b);return(i[c]||i)(a,b);case"string":return(j[c]||j)(a,b)}}
function h(a,b){for(var c=0;c<a.length;c++)
b(a[c],c)}
function i(a,b){for(var c in a)
f.call(a,c)&&b(a[c],c)}
function j(a,b){for(var c=0;c<a.length;c++)
b(a.charAt(c),c)}"use strict";try{var d=a("type")}catch(e){var d=a("component-type")}
var f=Object.prototype.hasOwnProperty;b.exports=g,b.exports.reverse=function(a,b){return g(a,b,"reverse")},h.reverse=function(a,b){for(var c=a.length-1;c>=0;c--)
b(a[c],c)},i.reverse=function(a,b){var c=[];for(var d in a)
f.call(a,d)&&c.push(d);for(var e=c.length-1;e>=0;e--)
b(a[c[e]],c[e])},j.reverse=function(a,b){for(var c=a.length-1;c>=0;c--)
b(a.charAt(c),c)}},{type:5,"component-type":5}],5:[function(a,b,c){var d=Object.prototype.toString;b.exports=function(a){switch(d.call(a)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}
return a===null?"null":a===undefined?"undefined":a!==a?"nan":a&&a.nodeType===1?"element":(a=a.valueOf?a.valueOf():Object.prototype.valueOf.apply(a),typeof a)}},{}],4:[function(a,b,c){"use strict",b.exports=function(a){var b=parseInt([(new Date).valueOf(),(Math.random()*1e6).toFixed()].join("")).toString(36);return[a||"",b].join("")}},{}]},{},{1:""}))