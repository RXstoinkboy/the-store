(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(n,e,t){"use strict";t.d(e,"d",function(){return p}),t.d(e,"f",function(){return h}),t.d(e,"a",function(){return g}),t.d(e,"e",function(){return x}),t.d(e,"b",function(){return v}),t.d(e,"c",function(){return w});var i=t(3),r=t(4),a=t(10);function o(){var n=Object(i.a)(["\n    grid-row: 2/3;\n    font-size: 2.5rem;\n    margin: 0;\n    text-transform: capitalize;\n    text-align: center;\n    color: white;\n    text-shadow: 0 0 15px hsla(0, 0%, 60%, 1);\n    font-family: 'PT Sans Narrow', sans-serif;\n\n    @media all and (max-width: 850px){\n        grid-row: 1/-1;\n        grid-column: 2/3;\n    }\n\n    @media all and (max-width: 500px){\n        grid-row: 2/3;\n        grid-column: 1/-1;\n        font-size: 1.7rem;\n    }\n"]);return o=function(){return n},n}function l(){var n=Object(i.a)(["\n    grid-row: 1/2;\n    max-height: 70%;\n    max-width: 80%;\n\n    @media all and (max-width: 850px){\n        grid-row: 1/-1;\n        grid-column: 1/2;\n    }\n\n    @media all and (max-width: 500px){\n        grid-row: 1/2;\n        grid-column: 1/-1;\n    }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(["\n    color: white;\n    text-shadow: 0 0 20px hsla(0, 0%, 60%, 1);\n    padding: 0 0 0 5vw;\n    height: 10vh;\n    font-size: 8vh;\n    text-align: center;\n    text-transform: capitalize;\n    margin: 0;\n    z-index: 20;\n    font-family: 'Kaushan Script', cursive;\n    \n    @media all and (max-width: 450px){\n        font-size: 6vh;\n    }\n"]);return s=function(){return n},n}function c(){var n=Object(i.a)(["\n    height: ",";\n    background: ",";\n    box-shadow: inset 0 0 70px hsla(0deg, 0%, 50%, .3);\n    display: grid;\n    grid-template-rows: 4fr 1fr;\n    align-items: center;\n    justify-items: center;\n    cursor: pointer;\n\n    @media all and (max-width: 850px){\n        height: 30vh;\n        grid-template-rows: 1fr;\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media all and (max-width: 500px){\n        height: 30vh;\n        grid-template-rows: 4fr 1fr;\n        grid-template-columns: 1fr;\n    }\n"]);return c=function(){return n},n}function u(){var n=Object(i.a)(["\n    padding-left: 5vw;\n    width: 100%;\n    height: 90vh;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n\n    @media all and (min-width: 1200px){\n        grid-template-columns: 1fr 1fr;\n    }\n\n    @media all and (max-width: 450px){\n        grid-template-columns: 1fr;\n    }\n"]);return u=function(){return n},n}function d(){var n=Object(i.a)(["\n    background: linear-gradient(135deg, hsla(222, 50%, 80%, .3), hsla(100, 50%, 80%, .4));\n    overflow: hidden;\n\n    @media all and (max-width: 850px){\n        overflow: visible;\n    }\n"]);return d=function(){return n},n}var m=a.b.div({enter:{opacity:1,staggerChildren:50},exit:{opacity:0}}),p=Object(r.a)(m)(d()),h=r.a.div(u()),f=a.b.div({hoverable:!0,init:{filter:"brightness(1)"},hover:{filter:"brightness(1.15)"},enter:{x:0},exit:{x:200}}),g=Object(r.a)(f)(c(),function(n){return n.height},function(n){return n.color}),x=r.a.h1(s()),v=r.a.img(l()),w=r.a.h3(o())},105:function(n,e,t){n.exports=t.p+"static/media/shoppingCart.15a04861.png"},106:function(n,e,t){n.exports=t.p+"static/media/location.7768d5b7.png"},120:function(n,e,t){"use strict";t.r(e);var i=t(19),r=t(20),a=t(22),o=t(21),l=t(23),s=t(0),c=t.n(s),u=t(102),d=t(3),m=t(4);function p(){var n=Object(d.a)(["\n    width: 100px;\n    height: 100px;\n    object-fit: contain;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n    border-radius: 50%;\n    transition: all .4s ease-out;\n    overflow: visible;\n    transform: translate(-50%, -50%);\n    background: ",";\n    \n    ",":hover > & {\n        opacity: 1;\n        width: 100vh;\n        height: 100vh;\n    }\n"]);return p=function(){return n},n}function h(){var n=Object(d.a)(["\n    opacity: 0;\n    width: 100px;\n    height: 100px;\n    object-fit: contain;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 30;\n    overflow: visible;\n    transform: translate(-50%, -50%);\n    transition: all .4s ease-out;\n    \n    ",":hover > & {\n        opacity: 1;\n    }\n"]);return h=function(){return n},n}function f(){var n=Object(d.a)(["\n    width: 90%;\n    position: absolute;\n    font-size: 1.8rem;\n    font-family: 'Lato';\n    text-align: center;\n    color: transparent;\n    user-select: none;\n    transition: all .3s ease-out;\n\n    ",":hover > & {\n        color: white;\n    }\n\n    &::after{\n        content: '';\n        width: 100px;\n        height: 100px;\n        background: ",";\n        position: absolute;\n        border-radius: 50%;\n        top: 50%;\n        left: 50%;\n        z-index: -1;\n        transform: translate(-50%, -50%);\n        transition: all .4s ease-out;\n\n        ",":hover > & {\n            width: 100vh;\n            height: 100vh;\n        }\n    }\n    @media all and (max-width: 850px){\n        font-size: .8rem;\n    }\n\n"]);return f=function(){return n},n}function g(){var n=Object(d.a)(["\n    font-size: 3rem;\n    padding: 0;\n    height: auto;\n    z-index: 5;\n    user-select: none;\n    transition: all .3s ease-out;\n\n    ",":hover > &{\n        color: transparent;\n        text-shadow: none;\n    }\n\n    @media all and (max-width: 850px){\n        font-size: 2rem;\n    }\n"]);return g=function(){return n},n}function x(){var n=Object(d.a)(["\n    border-radius: 3px;\n    box-shadow: 0px 0px 3px lightgrey;\n    position: relative;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    cursor: pointer;\n    overflow: hidden;\n    z-index:3;\n    transform: translateY(0) scale(1);\n    transition: all .2s ease-out;\n\n    &:hover{\n        box-shadow: 0px 0px 7px grey;\n        transform: translateY(-1px) scale(1.002);\n    }\n\n    &:focus{\n        background: none;\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n    background: linear-gradient(-34deg, var(--mainGreen), var(--mainYellow));\n    min-height: 90vh;\n    width: 100%;\n    padding: 10px 10px 10px 6vw;\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n    overflow: hidden;\n\n    @media all and (max-width: 850px){\n        overflow: visible;\n    }\n\n    @media all and (max-width: 500px){\n        padding: 10px 10px 10px 11vw;\n        grid-template-columns: 1fr;\n        grid-template-rows: repeat(4, minmax(250px, 1fr));\n    }\n"]);return v=function(){return n},n}var w=m.a.div(v()),b=m.a.div(x()),j=Object(m.a)(u.e)(g(),b),y=m.a.p(f(),b,function(n){return n.color},b),O=m.a.img(h(),b),E=m.a.div(p(),function(n){return n.color},b),z=t(105),k=t.n(z),q=t(106),L=t.n(q),C=t(99),Y=function(n){return c.a.createElement(w,null,n.texts.map(function(e,t){return"Let's go!"===n.titles[t]?c.a.createElement(C.a,{to:"/shop",key:t},c.a.createElement(b,null,c.a.createElement(j,null,n.titles[t]),c.a.createElement(O,{src:k.a}),c.a.createElement(E,{color:n.colors[t]}))):"where we are?"===n.titles[t]?c.a.createElement(C.a,{to:"/contact",key:t},c.a.createElement(b,null,c.a.createElement(j,null,n.titles[t]),c.a.createElement(O,{src:L.a}),c.a.createElement(E,{color:n.colors[t]}))):c.a.createElement(b,{key:t},c.a.createElement(j,null,n.titles[t]),c.a.createElement(y,{color:n.colors[t]},e))}))},A=function(n){function e(){return Object(i.a)(this,e),Object(a.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,n),Object(r.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"100%",height:"100%"}},c.a.createElement(u.e,null,"about"),c.a.createElement(Y,{colors:["var(--mainWhite)","var(--mainBlue)","var(--mainPink)","hsl(120, 50%, 75%)"],texts:["Hic, error voluptas quis necessitatibus, sint delectus corrupti voluptates minima quam sequi vel labore accusamus, totam consequatur! Molestiae error consequuntur porro amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. ","Optio vel nisi voluptatem, similique possimus assumenda modi iure cum, adipisci facilis, ducimus accusamus voluptates impedit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad inventore eos nulla at ratione omnis.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius voluptatem eveniet ullam, ut culpa minima blanditiis dignissimos molestias cumque libero esse."],titles:["who we are?","what we do?","where we are?","Let's go!"]}))}}]),e}(s.Component);e.default=A}}]);
//# sourceMappingURL=4.b6dff4b2.chunk.js.map