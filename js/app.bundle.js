!function(e){function t(t){for(var o,i,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)i=s[d],a[i]&&p.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={0:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([8,1]),n()}([,,,,,,,,function(e,t,n){"use strict";var o=b(n(9)),a=b(n(10)),r=b(n(11)),i=b(n(12)),s=b(n(13)),l=b(n(14)),c=b(n(28)),u=b(n(29)),d=b(n(30)),p=b(n(31)),f=b(n(32)),h=b(n(33)),m=b(n(34)),v=b(n(35));function b(e){return e&&e.__esModule?e:{default:e}}(0,f.default)();var g=function(){(0,a.default)(),(0,u.default)(),(0,d.default)(),(0,r.default)(),(0,i.default)(),(0,s.default)(),(0,l.default)(),(0,c.default)(),Tablesaw.init(),(0,h.default)(),(0,p.default)(),(0,m.default)(),(0,v.default)(),!!window.MSInputMethodContext&&!!document.documentMode&&((0,o.default)(),jQuery("body").addClass("ie"))};void 0===window.sources&&jQuery(document).ready(function(){return g()}),document.addEventListener("ToolboxReady",function(){console.log("backstopjs_ready"),g()})},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".upload").find('input[type="file"]').each(function(){var e=$(this),t=e.next().next(".upload-preview");e.on("change",function(){var n=e[0].files,o=n[0].name;n.length>1&&(o="<ul>"+Array.from(n).map(function(e){return"<li>"+e.name+"</li>"}).join().replace(/,/g,"")+"</ul>"),t.html(o)})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".datepicker").pickadate({monthsFull:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthsShort:["Jan","Fév","Mar","Avr","Mai","Jui","Jui","Aoû","Sep","Oct","Nov","Déc"],weekdaysFull:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],weekdaysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],labelMonthNext:"Prochain mois",labelMonthPrev:"Mois précédent",labelMonthSelect:"Sélectionnez un mois",labelYearSelect:"Sélectionnez une année",format:"d mmmm yyyy",firstDay:1,today:"",clear:"",close:""})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=!1,t=!1,n=!1,o=new Date,a=new Date(o.getFullYear(),o.getMonth(),o.getDate())/1;function r(e,t){return 7===$("tbody tr:nth-child("+e+") .picker__day--outfocus",t).length}$(".datepicker-event").each(function(){var i=["Jan","Fév","Mar","Avr","Mai","Jui","Jui","Aoû","Sep","Oct","Nov","Déc"],s=$(this).parent();$(this).pickadate({monthsFull:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthsShort:i,weekdaysFull:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],weekdaysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],labelMonthNext:"Prochain mois",labelMonthPrev:"Mois précédent",labelMonthSelect:"Sélectionnez un mois",labelYearSelect:"Sélectionnez une année",format:"d mmmm yyyy",firstDay:1,today:"",clear:"",close:"",onRender:function(){$("div.picker__day--highlighted").each(function(){$(this).data("pick")!==a&&$(this).removeClass("picker__day--highlighted")}),function(e,t){if($(".nextMonthLabel",e.$holder).length>0)return!0;var n=e.component.$node.parent(),o=$(".nextMonthLabel",n),a=$(".prevMonthLabel",n),r=e.component.item.view.month+1;r===t.length&&(r=0);var i=e.component.item.view.month-1;i<0&&(i=11),o.html(t[r]),a.html(t[i]),o.clone().appendTo(".picker__box",e.$root),a.clone().appendTo(".picker__box",e.$root)}(this,i),e&&function(o){var a=1;if(n&&(a=n,n=!1),!e)return o;t&&(t=!1,a=6,r(6,o)&&(a=5)),$("tbody",o).attr("data-week",a),$(".picker__nav--next",o).on("click",function(e){a<6&&!r(a+1,o)?(e.stopPropagation(),a+=1,$("tbody",o).css("transition","left 0.4s"),$("tbody",o).attr("data-week",a)):a=1}),$(".picker__nav--prev",o).on("click",function(e){a>1?(e.stopPropagation(),a-=1,$("tbody",o).css("transition","left 0.4s"),$("tbody",o).attr("data-week",a)):t=!0}),$(".picker__day").each(function(){$(this).on("click",function(){$(this).parent().parent().parent().css("transition","left 0s")})})}(s)},onStart:function(){!function(e){e.set("select",[o.getFullYear(),o.getMonth(),o.getDate()])}(this),function(e){$(".picker__day--infocus",e).each(function(){var e=$(this).data("pick"),t=new Date(e);"2018-03-28"==t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)&&$(this).addClass("custom-highlight")})}(this);var t=$("tr:has(.picker__day--selected)",s);t.length>0&&(n=$("tr",s).index(t)),(e="block"===$(".datepicker-event+.picker table").css("display"))||function(e){$(".picker__wrap",e).append("<h2>fèv</h2>")}(s)}})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(function(){$('[data-toggle="popover"]').popover({placement:"top",html:!0,offset:-135,template:'<div class="popover" role="tooltip"><div class="popover-body"></div></div>'})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2)),a=(r(n(26)),r(n(27)),r(n(7)));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){var e=$(".gallery"),t=$(".gallery-nav");e.length>0&&e.each(function(){var e=this;(0,a.default)(this,function(){var t=$(e).find(".gallery-item");$(e).addClass("ready"),t.each(function(e){$(this).find("figcaption").append('\n            <span class="gallery-counter">'+(e+1)+"/"+t.length+"</span>\n          ")});new o.default(e,{pageDots:!1,fullscreen:!0,setGallerySize:!0,arrowShape:"M14.2,45.8L53,7.1c1.6-1.6,1.6-4.3,0-5.9s-4.3-1.6-5.9,0L1.2,47c-1.6,1.6-1.6,4.3,0,5.9c0,0,0,0,0,0l45.8,45.8c1.6,1.6,4.3,1.6,5.9,0s1.6-4.3,0-5.9L14.2,54.1h81.6c2.3,0,4.2-1.9,4.2-4.2s-1.9-4.2-4.2-4.2H14.2z"});$(".flickity-fullscreen-button-view svg path").attr("d","M32,11.9h-2.7V6.5H24V3.8h8V11.9z M24,28.2v-2.7h5.3v-5.4H32v8.2H24z M0,20.1h2.7v5.4H8v2.7H0V20.1z M8,3.8v2.7H2.7v5.4H0V3.8H8z"),$(".flickity-fullscreen-button-exit svg path").attr("d","M18.1,16l13.4,13.4c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0L16,18.1L2.6,31.6c-0.6,0.6-1.5,0.6-2.1,0c-0.6-0.6-0.6-1.5,0-2.1l0,0L13.9,16L0.4,2.6C-0.1,2-0.1,1,0.4,0.4s1.5-0.6,2.1,0L16,13.9L29.4,0.4c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1L18.1,16z");var n=$(e).find(".gallery-item.is-selected img").height();$(e).find(".flickity-prev-next-button").css("top",n/2+"px")})}),t.length>0&&t.each(function(){var e=this;(0,a.default)(this,function(){var t=$(e).data("gallery");$(e).addClass("ready");new o.default(e,{asNavFor:"#"+t,cellAlign:"left",pageDots:!1,prevNextButtons:!1,contain:!0})})})}},,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".social-share-copy").each(function(){var e=$(this),t=e.text(),n=e.data("success");new ClipboardJS(e[0],{target:function(e){return $(e).parent().prev()[0]}}).on("success",function(e){$(e.trigger).text(n),setTimeout(function(){return $(e.trigger).text(t)},2e3),e.clearSelection()})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".select-multiple").each(function(e,t){$(t).multipleSelect({placeholder:$(t).attr("data-placeholder")||"",width:"100%"})})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){$(".tag-input").selectize({plugins:["remove_button"],render:{item:function(e,t){return'<div class="tag tag-primary">'+t(e.text)+"</div>"}},create:function(e){return{value:e,text:e}}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(2)),a=r(n(7));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){if($(".card-slider").length>0){var e=$(window).width()<768;(0,a.default)(".card-slider",function(){var t=new o.default(".card-slider",{cellAlign:"left",setGallerySize:!0,pageDots:e,prevNextButtons:!1,contain:!0,groupCells:!1});$(".card-slider-cell").css("height","100%"),$("#card-slider-prev").on("click",function(){t.previous()}),$("#card-slider-next").on("click",function(){t.next()}),t.on("select",function(){$(".card-slider-btn").removeClass("disabled"),0===t.selectedIndex&&$("#card-slider-prev").addClass("disabled"),t.selectedIndex+1!==t.slides.length&&t.selectedIndex+2!==t.slides.length||$("#card-slider-next").addClass("disabled")})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=new XMLHttpRequest,t=window.svgPath||"icons/icons.svg";e.open("GET",t,!0),e.send(),e.onload=function(t){var n=document.createElement("div");n.innerHTML=e.responseText,document.body.insertBefore(n,document.body.childNodes[0])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e="current-menu-parent",t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;$("body").toggleClass("desktop-menu-open"),e>0&&$("body").hasClass("desktop-menu-open")?$(".nav-main").css("left",e):$(".nav-main").css("left","")};$(".nav-main .nav-back a").on("click",function(t){t.preventDefault();var n=$(this).parents(),o=n[2];$(o).removeClass("current-menu-ancestor").removeClass(e);var a=n[4];$(a).removeClass("current-menu-ancestor").addClass(e)}),$(".nav-main .nav-arrow").on("click",function(t){t.preventDefault();var n=$(this).parents(),o=n[0];$(o).addClass(e);var a=n[2];$(a).addClass("current-menu-ancestor").removeClass(e)}),$(".menu-toggle-mobile").on("click",function(){!function(){var t=$(".nav-main .nav-menu>.current-menu-item");if(t.length>0){var n=t.parents()[1];$(n).addClass(e)}$("body").toggleClass("mobile-menu-open")}()}),$(".nav-close").on("click",function(e){e.preventDefault(),t()}),$(".overlay").on("click",function(e){e.preventDefault(),t()}),$("#nav-toggle").on("click",function(){$(this).toggleClass("open");var e=$(this).offset().left+$(this).outerWidth(!0),n=$(this).offset().top-$(window).scrollTop();$(".nav-main").css("top",n),t(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){$(".drawer-toggle").click(function(){var e=$(this).parent(".drawer"),t=e.find(".drawer-link"),n=$(this);if(e.hasClass("open"))e.removeClass("open"),t.css({width:n.width()});else{var o="100%";$(window).width()>992&&(o=t.find(".text").outerWidth()),e.addClass("open"),t.css({width:o})}})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e&&e.__esModule?e:{default:e}}(n(36));t.default=function(){(0,o.default)()}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if($("#tour-lab").length>0){$("#tour-start").click(function(){return function(){var e=introJs();e.setOptions({buttonClass:"btn btn-secondary btn-sm mt-4",tooltipPosition:"auto",positionPrecedence:["bottom","top","right","left"],scrollTo:"tooltip",scrollToElement:!0,steps:[{intro:"This is the laboratory's homepage. <b>It serves to guide the visitors to the different sub-contents</b>. The main contents are projects and publications. Here is the hierarchical order that we are proposing."},{element:"#tour-hero",intro:'Define the <b>laboratory title</b> and a <b>cover image</b> using the <a href="#/components/hero" target="_blank">hero</a> component or only <b>a title</b>, if there is no cover, using the following step structure.'},{element:"#tour-intro",intro:"Type a <b>succinct introduction paragraph</b> wrapped inside a <code>.container-grid</code> (the title can also be added here)"},{element:"#tour-projects",intro:'\n              The main objective of a laboratory is to show the projects that are carried out there. In this section, you can use the <a href="#/components/teaser-mission" target="_blank">Teaser mission</a>  component (<b>Research project</b>) to show them. We advise you to put a <b>maximum of 3 projects</b> on the lab’s homepage and then put a link to the page that lists all the projects.\n            '},{element:"#tour-publications",intro:'\n              Laboratories also produce publications. You can list <b>up to 5</b> here with the <a href="#/components/publication" target="_blank">Publication</a> component and add a link to the page that lists all the publications.\n            '},{element:"#tour-news",intro:'\n              If you have some news about your laboratory, you can list the latest at this location. We advise you not to list too much (maximum 2) and use the component <a href="#/components/news" target="_blank">Teaser mission</a>  component (<b>Basic teaser</b>) and add a link to all news page.\n            '},{element:"#tour-partof",intro:'\n            <p>\n              This section is intended to <b>provide the context of the laboratory</b>. It is possible for a laboratory to belong to several institutes and/or faculties. If this is the case, we advise you to use a teaser that brings the visitor to a listing page, rather than putting them all on the lab’s homepage. Laboratories can have themes that categorize them. It is recommended to use component “tag” to list them.\n            </p>\n            <p>\n              For this part, you can use some of the <a href="#/components/teaser-mission" target="_blank">Teaser mission</a> components : <b>Faculty</b> and <b>Institute</b>. The themes are based on the <a href="#/content/tag" target="_blank">tag</a> component.\n            </p>\n            '},{element:"#tour-contact",intro:'\n              <b>Several people may want to contact</b> the laboratory: press, potential collaborators, people interested in your work or simply people who want to know where you are located. That’s why we recommend using the <a href="#/components/contact" target="_blank">Contact</a> component (<b>Banner</b>) that gives all this information.\n            '},{element:"#tour-team",intro:'\n              Some visitors may want to ask you questions or <b>see who composes the laboratory\'s team</b>. It is possible to link to the team page using the <a href="#/components/teaser-basic-page" target="_blank">Teaser basic page</a> component.\n            '},{element:"#tour-sponsors",intro:'\n              It is possible that you have sponsors. On a second column, you can list them thanks to the <a href="#/components/media" target="_blank">Media</a> component (<b>Sponsor</b>).\n            '}]}),e.start()}()})}}}]);