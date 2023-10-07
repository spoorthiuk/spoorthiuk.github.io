(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(10),c=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),i=Object(c.a)(n,2),r=i[0],o=i[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://spoorthiuk.github.io/portfolio",j="About Me",h="Spoorthi Uday Karakaraddi",b="Software Engineer \u2022 Data Scientist \u2022 Machine Learning Engineer",d="Student at Arizona State University pursuing Master of Science in Computer Science with Big Data concentration. AI and ML entusiast, eager to explore the transformative potential of AI in building cutting edge software solutions.",u="https://drive.google.com/file/d/1GaHBzZjBhgtmFVtIWRGo5fW601aMiiGB/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/spoorthiuk2703/",github:"https://github.com/spoorthiuk/"},p=[{name:"Image Describer with CNN and LSTM",description:"This project helps visually impaired people perceive images",stack:["Python","LSTM","CNN"],sourceCode:"https://github.com/spoorthiuk/Image-Describer",livePreview:"https://github.com/spoorthiuk/Image-Describer",Blog:"https://spoorthiuday27.medium.com/seeing-beyond-pixels-building-an-image-describer-with-cnn-and-lstm-ab565fe5e33e"},{name:"Data Processor - Analyze, Process and visualize data",description:"This project helps visually impaired people perceive images",stack:["Python","Flask","Data Preprocessing"],sourceCode:"https://github.com/spoorthiuk/Image-Describer",livePreview:"https://github.com"},{name:"GPS Position Prediction and Correction using Kalman Filter",description:"Reducing the error in GPS measurements using Kalman Filter and an IMU",stack:["Python","Embedded C","Raspberry Pi"],sourceCode:"https://github.com/spoorthiuk/GPS-position-prediction-and-correction-using-Kalman-Filter",Blog:"https://github.com/spoorthiuk/GPS-position-prediction-and-correction-using-Kalman-Filter"}],O=["Python","R","SQL","C/ C++","Matlab","HTML","Flask","Go","Java","JavaScript","Bash"],x=["Python","R","SQL","C/ C++","Matlab","HTML","Flask","Go","Java","JavaScript","Bash"],g="spoorthiudayk@gmail.com",f=n(18),k=n.n(f),v=n(17),N=n.n(v),_=n(20),w=n.n(_),C=n(19),S=n.n(C),y=n(8),P=n.n(y),B=n(14),M=n.n(B),F=(n(30),n(15),function(){var e=Object(s.useContext)(l),t=Object(c.a)(e,1)[0],n=t.themeName,i=t.toggleTheme,r=Object(s.useState)(!1),o=Object(c.a)(r,2),j=o[0],h=o[1],b=m,d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,O.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,g?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null,b.github&&Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsxs)("a",{href:b.github,"aria-label":"github",className:"link link--icon",children:[Object(a.jsx)(a.Fragment,{children:"   "}),Object(a.jsx)(P.a,{}),Object(a.jsx)(a.Fragment,{})]})}),b.linkedin&&Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsxs)("a",{href:b.linkedin,"aria-label":"linkedin",className:"link link--icon",children:[Object(a.jsx)(a.Fragment,{}),Object(a.jsx)(M.a,{}),Object(a.jsx)(a.Fragment,{})]})})]}),Object(a.jsx)("button",{type:"button",onClick:i,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(N.a,{}):Object(a.jsx)(k.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(w.a,{})})]})}),L=(n(34),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(F,{})]})}),E=function(){var e=h,t=b,n=d,i=u;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsx)("h1",{children:Object(a.jsx)("span",{className:"about__name",children:e})}),t&&Object(a.jsx)("h2",{className:"about__role",children:t}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsx)("div",{className:"center",children:i&&Object(a.jsx)("a",{href:i,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})})})]})},I=n(4),D=n.n(I),G=n(21),T=n.n(G),J=n(22),K=n.n(J),R=(n(36),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},D()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(T.a,{})}),t.Blog&&Object(a.jsx)("a",{href:t.Blog,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(K.a,{})})]})}),z=(n(37),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(R,{project:e},D()())}))})]}):null}),A=(n(38),function(){return O.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:O.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))}),Object(a.jsx)("ul",{className:"skills__list",children:"---"}),Object(a.jsx)("h2",{className:"section__title",children:"DataBases"}),Object(a.jsx)("ul",{className:"skills__list",children:x.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},D()())}))})]}):null}),U=(n(39),n(23)),H=n.n(U),Q=(n(40),function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?i(!0):i(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(H.a,{fontSize:"large"})})}):null}),W=(n(41),function(){return g?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(g),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),V=(n(42),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/spoorthiuk/",className:"link footer__link",children:"Created By Spoorthi Uday Karakaraddi"})})}),Y=(n(43),function(){var e=Object(s.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(L,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(z,{}),Object(a.jsx)(A,{}),Object(a.jsx)(W,{})]}),Object(a.jsx)(Q,{}),Object(a.jsx)(V,{})]})});n(44);Object(i.render)(Object(a.jsx)(r,{children:Object(a.jsx)(Y,{})}),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.32b0a2d1.chunk.js.map