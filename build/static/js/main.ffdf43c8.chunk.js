(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(13),i=a.n(c),s=(a(25),a(2)),o=a(4),l=a(3),m=a(11),u=[{id:1,title:"model 1",image:"images/1.jpg",price:1e4,count:1,isInterest:!1,category:"TV Stand"},{id:2,title:"Unique TV Console",image:"images/2.jpg",price:13e3,count:1,isInterest:!1,category:"TV Stand"},{id:3,title:"Simple Stand",image:"images/3.jpg",price:15e3,count:1,isInterest:!1,category:"TV Stand"},{id:4,title:"Farmhouse TV",image:"images/4.jpg",price:12500,count:1,isInterest:!1,category:"TV Stand"},{id:5,title:"Large Stand",image:"images/5.jpg",price:8500,count:1,isInterest:!1,category:"TV Stand"},{id:7,title:"White Simple Stand",image:"images/7.jpg",price:12e3,count:1,isInterest:!1,category:"TV Stand"},{id:8,title:"Modern Stand",image:"images/8.jpg",price:8e3,count:1,isInterest:!1,category:"TV Stand"},{id:9,title:"Fabric Accent Chair",image:"images/9.jpg",price:4e3,count:1,isInterest:!1,category:"Seats"},{id:12,title:"Twin Accents",image:"images/12.jpg",price:18e3,count:1,isInterest:!1,category:"Seats"},{id:13,title:"Yellow Accent",image:"images/13.jpg",price:2e4,count:1,isInterest:!1,category:"Seats"},{id:14,title:"Soft back bed",image:"images/14.jpg",price:8e3,count:1,isInterest:!1,category:"Beds"},{id:15,title:"Wrought Iron",image:"images/15.jpg",price:25e3,count:1,isInterest:!1,category:"Beds"},{id:16,title:"Lux Bed 6*6",image:"images/16.jpg",price:47e3,count:1,isInterest:!1,category:"Beds"},{id:18,title:"Letz Sofa",image:"images/18.jpg",price:25500,count:1,isInterest:!1,category:"Seats"},{id:19,title:"Luxy 5*6",image:"images/19.jpg",price:55e3,count:1,isInterest:!1,category:"Beds"},{id:21,title:"Storage Bed",image:"images/21.jpg",price:45e3,count:1,isInterest:!1,category:"Beds"},{id:22,title:"Purple 6*6",image:"images/22.jpg",price:15e4,count:1,isInterest:!1,category:"Beds"},{id:26,title:"Yellow Fabric",image:"images/26.jpg",price:6e4,count:1,isInterest:!1,category:"Seats"},{id:27,title:"Lounge seat",image:"images/27.jpg",price:55e3,count:1,isInterest:!1,category:"Seats"},{id:28,title:"Lux 3-2-1",image:"images/28.jpg",price:3e4,count:1,isInterest:!1,category:"Seats"},{id:29,title:"Chunky White",image:"images/29.jpg",price:2e4,count:1,isInterest:!1,category:"Coffee Table"},{id:30,title:"Metal Stand",image:"images/30.jpg",price:17e3,count:1,isInterest:!1,category:"Coffee Table"},{id:32,title:"Glass Frame",image:"images/32.jpg",price:24e3,count:1,isInterest:!1,category:"Coffee Table"}],d={filteredItems:Object(m.a)(u),searchKey:""},p=function(e){return{filteredItems:u.filter(function(t){return t.category===e})}},f=function(e,t){switch(t.type){case"SEARCH_KEYWORD":return e.searchKey=t.payload,Object(l.a)({},e);case"ALL":return e.filteredItems=Object(m.a)(u),Object(l.a)({},e);case"Coffee Table":return Object(l.a)({},p("Coffee Table"));case"Beds":return Object(l.a)({},p("Beds"));case"Seats":return Object(l.a)({},p("Seats"));case"TV Stand":return Object(l.a)({},p("TV Stand"));default:return e}},g=Object(n.createContext)(),b=Object(n.createContext)();function E(e){var t=e.children,a=Object(n.useReducer)(f,d),c=Object(o.a)(a,2),i=c[0],s=c[1];return r.a.createElement(g.Provider,{value:{state:i}},r.a.createElement(b.Provider,{value:{dispath:s}},t))}var v={code:"ABCD",disCount:20},y={allProducts:u,favorites:[],basket:[],totalPrice:0,totalPriceAfterOffer:0,offerPrice:0,totalPriceFinal:0,isFavorite:!1,isEnterOfferCode:!1,offerMessage:""},_=function(e,t){var a=e.reduce(function(e,t){return e+t.price*t.count},0);if(t){var n=a*v.disCount/100,r=a-n;return Object(l.a)({totalPrice:a,offerPrice:n,totalPriceAfterOffer:r},O(a,n))}return Object(l.a)({totalPrice:a},O(a))},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{totalPriceFinal:e-t<=1e5?e+1e4-t:e-t}},h=function(e,t){switch(t.type){case"ADD_FAVORITE":return e.allProducts.forEach(function(a){a.id===t.payload&&(a.isInterest=!a.isInterest,e.favorites=u.filter(function(e){return e.isInterest}),e.isFavorite=!0)}),Object(l.a)({},e);case"REMOVE_ALL_FAVORITE":return e.favorites=[],e.allProducts.forEach(function(e){e.isInterest=!1}),Object(l.a)({},e);case"ADD_TO_BASKET":if(!e.basket.some(function(e){return e.id===t.payload})){var a=e.allProducts.find(function(e){return e.id===t.payload});e.basket.push(a)}return Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));case"REMOVE_FROM_BASKET":var n=e.basket.findIndex(function(e){return e.id===t.payload});return e.basket[n].count=1,e.basket=e.basket.filter(function(e){return e.id!==t.payload}),Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));case"INCREASE":var r=e.basket.findIndex(function(e){return e.id===t.payload});return e.basket[r].count++,Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));case"DECREASE":var c=e.basket.findIndex(function(e){return e.id===t.payload});return e.basket[c].count>1&&e.basket[c].count--,Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));case"EMPTY_BASKET":return e.basket=e.basket.forEach(function(e){return e.count=1}),e.basket=[],Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));case"REMOVE_CLASS":return e.isFavorite=!1,Object(l.a)({},e);case"OFFER_CODE":return v.code===t.payload?(e.isEnterOfferCode=!0,e.offerMessage="Discount Applied"):e.offerMessage="The entered code is not valid",Object(l.a)({},e,_(e.basket,e.isEnterOfferCode));default:return e}},j=Object(n.createContext)(),N=Object(n.createContext)();function x(e){var t=e.children,a=Object(n.useReducer)(h,y),c=Object(o.a)(a,2),i=c[0],s=c[1];return r.a.createElement(j.Provider,{value:{state:i}},r.a.createElement(N.Provider,{value:{dispath:s}},t))}var C=a(9),k=(a(26),a(10)),S=a(14);a(27);function I(e){var t=Object(n.useContext)(N).dispath,a=Object(n.useContext)(j).state,c=e.id,i=a.basket.find(function(e){return e.id===c});return r.a.createElement("div",{className:"basket_buttons"},r.a.createElement("span",{onClick:function(){return t({type:"INCREASE",payload:c})},className:"basket_plus"},r.a.createElement(k.b,null)),r.a.createElement("span",{className:"counter_number"},e.count),1===i.count?r.a.createElement("span",{onClick:function(){return t({type:"REMOVE_FROM_BASKET",payload:c})},className:"basket_minus"},r.a.createElement(S.a,null)):r.a.createElement("span",{onClick:function(){return t({type:"DECREASE",payload:c})},className:"basket_minus"},r.a.createElement(k.a,null)))}function A(){var e=Object(s.e)(),t=Object(n.useContext)(j).state,a=Object(n.useContext)(N).dispath,c=Object(s.f)(),i=t.allProducts.find(function(e){return e.id===c.id}),o=t.basket.some(function(e){return e.id===c.id});return r.a.createElement("div",{className:"details_container"},r.a.createElement("div",{className:"details_linkBar"},r.a.createElement("span",{onClick:function(){return e(-1)},className:"details_backLink"},r.a.createElement(C.a,null),"BACK")),r.a.createElement("div",{className:"datails_card"},r.a.createElement("div",{className:"image_box"},r.a.createElement("img",{className:"card_image",src:i.image,alt:"card_image"}),r.a.createElement("img",{src:"images/kg.png",alt:"",className:"kg_image"})),r.a.createElement("div",{className:"main_content_box"},r.a.createElement("span",{className:"card_category"},i.category),r.a.createElement("div",{className:"card_content"},r.a.createElement("span",{className:"card_title"},i.title),r.a.createElement("span",{style:{color:"#8fc700"}},"|"),r.a.createElement("span",{className:"card_price"},i.price.toLocaleString()," Kes")),o&&r.a.createElement(I,i),r.a.createElement("button",{onClick:function(){return a({type:"ADD_TO_BASKET",payload:i.id})},className:"card_buy"},"add to cart"))))}a(28);var T=a(6);function w(e){var t=Object(n.useContext)(N).dispath;return r.a.createElement("div",{key:e.id,className:"favorite_card"},r.a.createElement(T.b,{to:"/".concat(e.id)},r.a.createElement("img",{className:"favorite_img",src:e.image,alt:"favorite_image"}),r.a.createElement("div",{className:"favorite_content"},r.a.createElement("div",{className:"favorite_title"},r.a.createElement("span",null,e.title)))),r.a.createElement("button",{onClick:function(){return t({type:"ADD_FAVORITE",payload:e.id})},className:"favorite_button"},"Delete"))}function P(){var e=Object(n.useContext)(j).state,t=Object(n.useContext)(N).dispath;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"favorite_container_linkBar"},r.a.createElement("div",{className:"favorite_linkBar"},r.a.createElement("span",null,"My Favourites"),r.a.createElement(T.b,{className:"favorite_backLink",to:"/"},r.a.createElement(C.a,null),"Products Page"))),r.a.createElement("div",{className:"favorite-wrapper"},e.favorites.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t({type:"REMOVE_ALL_FAVORITE"})},className:"favorite_removeAll"},"Delete All")),r.a.createElement("div",{className:"favorite_container"},e.favorites.map(function(e){return r.a.createElement(w,Object.assign({key:e.id},e))}))):r.a.createElement("div",{className:"favorite_empty"},r.a.createElement("img",{className:"favorite_empty_img",src:"images/empty_favorite.svg",alt:""}),r.a.createElement("span",{className:"favorite_empty_title"},"My Favourites"))))}a(29);var F=a(7);var B=function(){var e=Object(n.useContext)(j).state,t=Object(n.useContext)(N).dispath,a=Object(n.useRef)(!1);return Object(n.useEffect)(function(){a.current?setTimeout(function(){t({type:"REMOVE_CLASS"})},1e3):a.current=!0},[t,e.favorites]),r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"nav"},r.a.createElement(T.b,{to:"/",className:"logo"},"3LA Store"),r.a.createElement("div",{className:"icon_Sopping_box"},r.a.createElement(T.b,{to:"/favorite",className:"mark_icon_box ".concat(e.isFavorite?"tada":"")},r.a.createElement(F.a,{className:"mark_icon"}),e.favorites.length>0&&r.a.createElement("span",{className:"badge_mark"},e.favorites.length)),r.a.createElement(T.c,{className:"signup",to:"/signup"},"Sign Up"))))};a(30),a(31);function L(){var e=Object(n.useContext)(b).dispath;return r.a.createElement("div",{className:"filter_container"},r.a.createElement("div",{className:"filter_btnBox"},r.a.createElement("button",{onClick:function(){return e({type:"ALL"})},className:"filter_btn"},"All"),r.a.createElement("button",{onClick:function(){return e({type:"Beds"})},className:"filter_btn"},"Beds"),r.a.createElement("button",{onClick:function(){return e({type:"TV Stand"})},className:"filter_btn"},"TV Stand"),r.a.createElement("button",{onClick:function(){return e({type:"Coffee Table"})},className:"filter_btn"},"Coffee Table"),r.a.createElement("button",{onClick:function(){return e({type:"Seats"})},className:"filter_btn"},"Seats")))}var D=a(15);function R(e){var t=Object(n.useContext)(j).state,a=Object(n.useContext)(N).dispath,c=t.allProducts.find(function(t){return t.id===e.id});return r.a.createElement("div",{onClick:function(){return a({type:"ADD_FAVORITE",payload:e.id})},className:"Interest"},c.isInterest?r.a.createElement(F.c,{className:"heart_Fill"}):r.a.createElement(F.b,{className:"heart"}))}function V(e){var t=Object(n.useContext)(N).dispath,a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],s=c[1];return r.a.createElement("div",{key:e.id,className:"box"},r.a.createElement(T.b,{to:"/".concat(e.id)},r.a.createElement("img",{className:"product_img",src:e.image,alt:"product"}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"title"},r.a.createElement("span",null,e.title)),r.a.createElement("div",{className:"price"},r.a.createElement("span",null,e.price.toLocaleString()," Kes")))),r.a.createElement("button",{onClick:function(){t({type:"ADD_TO_BASKET",payload:e.id}),s(!0),setTimeout(function(){s(!1)},3e3)},className:"products_button ".concat(i?"add_button":"buy_button")},i?"added":"Buy",r.a.createElement(D.a,{className:"buy_icon"})),r.a.createElement(R,{interest:e.isInterest,id:e.id}))}function M(){var e=Object(n.useContext)(g).state,t=e.filteredItems.filter(function(t){return t.title.includes(e.searchKey)||!e.searchKey});return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,null),r.a.createElement("div",{className:"product_container"},t.length>0?t.map(function(e){return r.a.createElement(V,Object.assign({key:e.id},e))}):r.a.createElement("div",{className:"not_products"},r.a.createElement("img",{className:"products_empty_img",src:"images/bare-tree.png",alt:""}))))}var K=function(){var e=Object(s.e)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),u=m[0],d=m[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),g=f[0],b=f[1];return Object(n.useEffect)(function(){fetch("https://store-3la-server.herokuapp.com/users").then(function(e){return e.json()}).then(function(e){i(e)})},[]),r.a.createElement("div",{className:"pt-28"},r.a.createElement("form",{className:"border-solid  mx-auto p-4 h-50 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center",type:"submit",onSubmit:function(t){t.preventDefault(),c.filter(function(t){return t.email===u&&t.password===g&&(alert("Welcome ".concat(t.first_name," ").concat(t.last_name)),e("/")),t})}},r.a.createElement("h2",{className:"text-2xl mx-auto text-center"},"Log in to account"),r.a.createElement("input",{type:"email",className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",placeholder:"Email",required:!0,value:u,onChange:function(e){d(e.target.value)}}),r.a.createElement("input",{type:"password",className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",placeholder:"Password",required:!0,value:g,onChange:function(e){b(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Log in")),r.a.createElement("p",{className:"border-solid mt-3 text-1xl mx-auto p-2 h-12 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center"},"Don't have an account?",r.a.createElement("button",{className:"border-solid rounded-md items-center text-xl px-3 mx-2 mx-auto bg-cyan-500"},"Sign Up")))},q=a(8);var W=function(){var e=Object(s.e)(),t=Object(n.useState)({first_name:"",last_name:"",email:"",password:"",password_confirmation:""}),a=Object(o.a)(t,2),c=a[0],i=a[1];function m(e){i(Object(l.a)({},c,Object(q.a)({},e.target.name,e.target.value)))}return r.a.createElement("div",{className:"pt-24"},r.a.createElement("form",{className:"border-solid mx-auto p-4 h-80 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center",onSubmit:function(t){t.preventDefault();var a={first_name:c.first_name,last_name:c.last_name,email:c.email,password:c.password,password_confirmation:c.password_confirmation};a.password!==a.password_confirmation?alert("Passwords do not match!"):a.password.length<8?alert("Password must be a minimum of 8 characters"):fetch("https://store-3la-server.herokuapp.com/users",{method:"POST",body:JSON.stringify({signupFormData:a}),headers:{"Content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e("/login"),alert("Welcome ".concat(a.first_name," ").concat(a.last_name))}).catch(function(e){return console.log(e)})}},r.a.createElement("h2",{className:"text-2xl mx-auto text-center"},"Create Account"),r.a.createElement("input",{className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",name:"first_name",onChange:m,type:"text",value:c.first_name,placeholder:"First Name",required:!0}),r.a.createElement("input",{className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",name:"last_name",onChange:m,type:"text",value:c.last_name,placeholder:"Last Name",required:!0}),r.a.createElement("input",{className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",name:"email",onChange:m,type:"email",value:c.email,placeholder:"Email",required:!0}),r.a.createElement("input",{className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",name:"password",onChange:m,type:"password",value:c.password,placeholder:"Password",required:!0}),r.a.createElement("input",{className:"border-solid mt-2 mx-auto p-1 h-9 border-2 rounded-md border-gray-300 text-lg outline-none",name:"password_confirmation",onChange:m,type:"password",value:c.password_confirmation,placeholder:"Confirm Password",required:!0}),r.a.createElement("button",{className:"border-solid rounded-md items-center text-xl p-1 px-14 h-9 w-78 my-2 mx-auto bg-cyan-500",type:"submit"},"Sign Up")),r.a.createElement("p",{className:"border-solid mt-3 text-xl mx-auto p-2 h-12 w-80 border-2 rounded-lg border-gray-300 bg-gray-300 text-center"},"Have an account?",r.a.createElement("button",{className:"border-solid rounded-md items-center text-xl px-3 mx-2 mx-auto bg-cyan-500"},"Login")))};var U=function(){var e=Object(s.h)([{path:"/",element:r.a.createElement(M,null)},{path:"/:id",element:r.a.createElement(A,null)},{path:"/favorite",element:r.a.createElement(P,null)},{path:"*",element:r.a.createElement(s.a,{to:"/"})},{path:"/login",element:r.a.createElement(K,null)},{path:"/signup",element:r.a.createElement(W,null)}]);return r.a.createElement(x,null,r.a.createElement(E,null,r.a.createElement(B,null),e))};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(T.a,null,r.a.createElement(U,null)))}],[[16,1,2]]]);
//# sourceMappingURL=main.ffdf43c8.chunk.js.map