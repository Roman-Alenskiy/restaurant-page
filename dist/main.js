!function(n){var i={};function e(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=i,e.d=function(n,i,t){e.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,i){if(1&i&&(n=e(n)),8&i)return n;if(4&i&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var r in n)e.d(t,r,function(i){return n[i]}.bind(null,r));return t},e.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(i,"a",i),i},e.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},e.p="",e(e.s=2)}([function(n,i,e){},function(n,i,e){},function(n,i,e){"use strict";e.r(i);e(0),e(1);const t=function(){return'\n        <div class="tab" id="about-tab">\n            <h1>Kentucky Fried Chicken</h1>\n            <div class="about-us">\n                <div class="about-us-description">\n                    <img src="img/fried-chicken.svg" alt="Chicken" class="about-us-icon">\n                    <h2>100% Chicken</h2>\n                    <p>Labore sit dolor aliquip sunt do ea voluptate excepteur Lorem fugiat cillum ad ut anim. Cupidatat veniam ipsum enim laboris occaecat sint ex reprehenderit pariatur ullamco voluptate et eiusmod.</p>\n                </div>\n                <div class="about-us-description">\n                    <img src="img/pepper.svg" alt="Spices" class="about-us-icon">\n                    <h2>11 Herbs and Spices</h2>\n                    <p>Aliqua sit nulla ipsum anim mollit duis incididunt ex ullamco deserunt dolore laborum officia. Esse cillum proident aliquip consectetur sunt est aliqua tempor.</p>\n                </div>\n                <div class="about-us-description">\n                    <img src="img/maps-and-flags.svg" class="about-us-icon" alt="Worldwide company">\n                    <h2>A Company with a Worldwide Reputation</h2>\n                    <p>Commodo nostrud pariatur Lorem ut eu irure commodo exercitation mollit ullamco enim ad. Ex incididunt deserunt nulla aliqua aute pariatur non aliquip consequat et dolor.</p>\n                </div>\n            </div>\n        </div>\n    '},r=function(){return'\n        <div class="tab" id="menu-tab">\n            <h1>Select food</h1>\n            <div class="product">\n                <div class="product-image" id="chefburger"></div>\n                <h2 class="product-name">Chefburger</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="darkryeburger"></div>\n                    <h2 class="product-name">The dark rye burger</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="cheeseburger"></div>\n                    <h2 class="product-name">Cheeseburger</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="boxmasteroriginal"></div>\n                    <h2 class="product-name">Boxmaster original</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="twisteroriginal"></div>\n                    <h2 class="product-name">Twister original</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="hot-dog"></div>\n                    <h2 class="product-name">Hot-dog</h2>\n            </div>\n            <div class="product">\n                    <div class="product-image" id="hotwingsbucket-25"></div>\n                    <h2 class="product-name">25 hot wings bucket</h2>\n            </div>\n            <div class="product">\n                <div class="product-image" id="teriyakibites"></div>\n                <h2 class="product-name">Teriyaki bites</h2>\n            </div>\n            <div class="product">\n                <div class="product-image" id="lunchbox-5-300"></div>\n                <h2 class="product-name">Lunchbox 5 for 300</h2>\n            </div>\n        </div>\n    '},a=function(){return'\n        <div class="tab" id="find-us">\n            <h1>Restaurants</h1>\n            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d65624.19650208417!2d30.3026907581113!3d59.879758598052526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKFC!5e0!3m2!1sru!2sru!4v1540215389676" id="restaurants-map" frameborder="0" allowfullscreen></iframe>                \n        </div>\n    '};document.querySelector(".tabs-navigation").addEventListener("mousedown",function(n){const i={about:t(),menu:r(),"find-us":a()}[n.target.getAttribute("data-tab")];document.querySelector(".tabs-content").innerHTML=i})}]);