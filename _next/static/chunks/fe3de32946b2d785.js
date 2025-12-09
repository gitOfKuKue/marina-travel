(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33235,e=>{"use strict";var t=e.i(43476);let a={src:e.i(90597).default,width:750,height:500,blurWidth:0,blurHeight:0};var r=e.i(22016),s=e.i(97053);let o=s.default.div`
  .container-button {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "bt-1 bt-2 bt-3"
      "bt-4 bt-5 bt-6";
    position: relative;
    perspective: 800;
    padding: 0;
    width: 250px;
    height: 47px;
    transition: all 0.3s ease-in-out;
  }

  .container-button:active {
    transform: scale(0.95);
  }

  .hover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
  }

  .bt-1 {
    grid-area: bt-1;
  }

  .bt-2 {
    grid-area: bt-2;
  }

  .bt-3 {
    grid-area: bt-3;
  }

  .bt-4 {
    grid-area: bt-4;
  }

  .bt-5 {
    grid-area: bt-5;
  }

  .bt-6 {
    grid-area: bt-6;
  }

  .bt-1:hover ~ button {
    transform: rotateX(15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px -2px #18181888;
  }

  .bt-1:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px -2px #18181888;
  }

  .bt-3:hover ~ button {
    transform: rotateX(15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px -2px #18181888;
  }

  .bt-3:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px -2px #18181888;
  }

  .bt-4:hover ~ button {
    transform: rotateX(-15deg) rotateY(-15deg) rotateZ(0deg);
    box-shadow: -2px 2px #18181888;
  }

  .bt-4:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: -2px 2px #18181888;
  }

  .bt-6:hover ~ button {
    transform: rotateX(-15deg) rotateY(15deg) rotateZ(0deg);
    box-shadow: 2px 2px #18181888;
  }

  .bt-6:hover ~ button::after {
    animation: shake 0.5s ease-in-out 0.3s;
    text-shadow: 2px 2px #18181888;
  }

  .hover:hover ~ button::before {
    background: transparent;
  }

  .hover:hover ~ button::after {
    content: "Ready!!";
    top: -150%;
    transform: translate(-50%, 0);
    font-size: 34px;
    color: var(--color-primary);
  }

  button {
    position: absolute;
    padding: 0;
    width: 250px;
    height: 47px;
    background: transparent;
    font-size: 17px;
    font-weight: 900;
    border: 3px solid var(--color-primary);
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
  }

  button::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 47px;
    background-color: var(--color-primary);
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }

  button::after {
    content: "Book Now";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    height: 47px;
    background-color: transparent;
    font-size: 17px;
    font-weight: 900;
    line-height: 47px;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 2;
  }

  @keyframes shake {
    0% {
      left: 45%;
    }

    25% {
      left: 54%;
    }

    50% {
      left: 48%;
    }

    75% {
      left: 52%;
    }

    100% {
      left: 50%;
    }
  }
`,i=({href:e="#"})=>(0,t.jsx)(r.default,{href:e,children:(0,t.jsx)(o,{children:(0,t.jsxs)("div",{className:"container-button",children:[(0,t.jsx)("div",{className:"hover bt-1"}),(0,t.jsx)("div",{className:"hover bt-2"}),(0,t.jsx)("div",{className:"hover bt-3"}),(0,t.jsx)("div",{className:"hover bt-4"}),(0,t.jsx)("div",{className:"hover bt-5"}),(0,t.jsx)("div",{className:"hover bt-6"}),(0,t.jsx)("button",{})]})})});var l=e.i(57688);let n={src:e.i(55035).default,width:750,height:500,blurWidth:0,blurHeight:0},d={src:e.i(58276).default,width:500,height:300,blurWidth:0,blurHeight:0};var c=e.i(49350);let x=s.default.div`
  .fancy {
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    float: right;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
  }

  .fancy::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: black;
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    color: white;
    background: black;
  }

  .fancy:hover::before {
    width: 0.9375rem;
    background: white;
  }

  .fancy:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  .fancy:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .fancy:hover .bottom-key-1,
  .fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }
`,m=({text:e,href:a="#"})=>(0,t.jsx)(x,{children:(0,t.jsxs)(r.default,{className:"fancy",href:a,children:[(0,t.jsx)("span",{className:"top-key"}),(0,t.jsx)("span",{className:"text",children:e}),(0,t.jsx)("span",{className:"bottom-key-1"}),(0,t.jsx)("span",{className:"bottom-key-2"})]})});var h=e.i(51135),u=e.i(69345);let f=()=>(0,t.jsxs)(c.default,{className:"relative flex flex-col md:flex-row items-center justify-between gap-10",children:[(0,t.jsx)("div",{className:"relative bg-no-repeat w-full h-80 md:h-120 bg-contain bg-center md:bg-left",id:"content-div",style:{backgroundImage:`url(${d.src})`},children:(0,t.jsxs)("div",{className:"relative md:absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10",children:[(0,t.jsx)("h1",{className:"text-center text-5xl md:text-8xl font-bold text-primary-font mb-4",children:"Explore The World"}),(0,t.jsx)("p",{className:"text-center text-lg md:text-xl font-medium mb-8",children:"Get 20% off on your first adventure!"}),(0,t.jsx)(m,{text:"Start your adventure",href:"/mini-game"})]})}),(0,t.jsx)("div",{className:"relative",children:(0,t.jsx)(l.default,{src:n.src,alt:"Traveling pic",className:"w-60 md:w-80 lg:w-200 md:rotate-15",width:200,height:200})}),(0,t.jsx)("div",{className:"absolute w-40 md:w-60 lg:w-100 -bottom-40 md:-bottom-20 lg:-bottom-50 left-0",children:(0,t.jsx)(u.default,{animationData:h.default,loop:!0,autoplay:!0})})]}),p={src:e.i(47277).default,width:500,height:500,blurWidth:0,blurHeight:0},b={src:e.i(16302).default,width:500,height:500,blurWidth:0,blurHeight:0},g={src:e.i(68687).default,width:500,height:500,blurWidth:0,blurHeight:0},v=({benefit:e})=>(0,t.jsxs)("div",{className:"flex flex-col items-center",children:[(0,t.jsx)(l.default,{src:e.image,alt:e.title,className:"w-40 mx-auto mb-5"}),(0,t.jsx)("p",{className:"text-center font-bold text-2xl md:text-3xl mb-5",children:e.title}),(0,t.jsx)("p",{className:"text-center text-secondary-font max-w-xs mx-auto",children:e.description})]}),w=()=>(0,t.jsxs)(c.default,{children:[(0,t.jsx)("h1",{className:"text-center font-bold text-4xl md:text-5xl",children:"Why Choose Us?"}),(0,t.jsx)("p",{className:"text-center text-secondary-font mt-5 max-w-2xl mx-auto mb-10 md:mb-20",children:"Discover why hundreds of travelers choose us for their next adventure. For expert guides to exclusive deals, we make your journey unforgettable. Join us and experience the difference."}),(0,t.jsx)("div",{className:"flex flex-col md:flex-row items-center justify-evenly gap-10",children:[{title:"Effortless Planning",description:"Our team of experts will help you plan your next adventure with ease. We will help you choose the best destination.",image:p},{title:"Exclusive Savings",description:"Enjoy exclusive deals and discounts on flights, hotels, and activities. We are committed to making travel accessible and affordable.",image:b},{title:"24/7 Support",description:"Our dedicated support team is here for you 24/7. From last-minute changes to emergency assistance, we ensure you act with confidence.",image:g}].map(e=>(0,t.jsx)(v,{benefit:e},e.title))})]});var y=e.i(71645);let j=s.default.div`
  button {
    font-family: inherit;
    font-size: 20px;
    background: #ff6d1f;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 50px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`,N=()=>(0,t.jsx)(j,{children:(0,t.jsxs)("button",{className:"absolute right-2 top-2 bottom-2",children:[(0,t.jsx)("div",{className:"svg-wrapper-1",children:(0,t.jsx)("div",{className:"svg-wrapper",children:(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:24,height:24,children:[(0,t.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,t.jsx)("path",{fill:"currentColor",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})]})})}),(0,t.jsx)("span",{children:"Send"})]})});var k=e.i(48711),z=e.i(59771);let S=()=>{let{setAlertText:e,setAlertStatus:a,setIsAlert:r}=(0,z.default)(),[s,o]=(0,y.useState)("");return(0,t.jsxs)(c.default,{className:"flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-5 my-10 lg:my-16",children:[(0,t.jsx)("div",{children:(0,t.jsx)(u.default,{animationData:k.default,loop:!0,autoPlay:!0,className:"w-80 md:w-150"})}),(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-6 lg:gap-8 w-full max-w-lg",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsxs)("h2",{className:"text-3xl md:text-4xl font-extrabold text-primary mb-3 tracking-tight",children:["Subscribe to our"," ",(0,t.jsx)("span",{className:"italic text-secondary",children:"Newsletter"})]}),(0,t.jsx)("p",{className:"text-secondary-font text-base md:text-lg font-medium px-4",children:"Unlock exclusive travel deals & tips directly in your inbox."})]}),(0,t.jsx)("div",{className:"w-full",children:(0,t.jsxs)("form",{className:"relative w-full flex items-center group",onSubmit:t=>{t.preventDefault(),a(200),e("Email sent successfully"),r(!0),o("")},children:[(0,t.jsx)("input",{type:"email",placeholder:"Enter your email address",value:s,onChange:e=>o(e.target.value),className:"w-full pl-6 md:pl-8 pr-28 md:pr-32 py-3 md:py-4 rounded-full border border-gray-200 bg-white focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all shadow-sm text-primary-font text-base md:text-lg placeholder:text-gray-400"}),(0,t.jsx)(N,{})]})})]})]})};var W=e.i(49721),T=e.i(91589);let D=({subService:e,convertTitleToLink:a})=>(0,t.jsxs)("div",{className:"w-full h-full flex flex-col bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary transition-all duration-300 group",children:[(0,t.jsx)(W.FontAwesomeIcon,{icon:e.icon,className:"text-5xl md:text-6xl mb-4 group-hover:text-background transition-all duration-300"}),(0,t.jsx)("h1",{className:"text-xl md:text-2xl font-bold group-hover:text-background transition-all duration-300 mb-2",children:e.title}),(0,t.jsx)("p",{className:"text-base md:text-lg text-secondary-font group-hover:text-background transition-all duration-300 mb-6 grow",children:e.description}),(0,t.jsx)(r.default,{href:`/services/${a(e.title)}`,className:"text-primary font-bold group-hover:text-secondary transition-all duration-300 mt-auto inline-block hover:translate-x-1",children:"Read More"})]}),H=()=>{let{services:e,convertTitleToLink:a}=(0,T.default)();return(0,t.jsxs)(c.default,{children:[(0,t.jsxs)("div",{className:"mb-10 md:mb-20",children:[(0,t.jsx)("h1",{className:"text-center font-bold text-4xl md:text-5xl mb-6",children:"Services"}),(0,t.jsx)("p",{className:"text-center text-lg text-secondary-font max-w-3xl mx-auto leading-relaxed",children:"Discover a world of seamless travel possibilities. From crafting personalized itineraries and securing exclusive deals to providing 24/7 in-trip support and managing complex logistics, our expert agents are dedicated to making your journey unforgettable. We handle the details so you can focus on the adventure."})]}),(0,t.jsx)("div",{children:e.map(e=>(0,t.jsxs)("div",{className:"mb-20",children:[(0,t.jsx)("h1",{className:"text-2xl md:text-3xl font-bold mb-6 md:mb-10",children:e.title}),(0,t.jsx)("p",{className:"text-secondary-font mb-10",children:e.description}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:e.subServices.map(e=>(0,t.jsx)(D,{subService:e,convertTitleToLink:a},e.title))})]},e.title))})]})};e.s(["default",0,()=>(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{className:"relative flex items-center justify-center bg-no-repeat bg-cover h-screen px-4",style:{backgroundImage:`url(${a.src})`},children:(0,t.jsxs)("div",{className:"z-10 text-center max-w-4xl mx-auto pt-20",children:[(0,t.jsxs)("h1",{className:"text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6",children:[(0,t.jsx)("span",{className:"text-secondary italic leading-tight",children:"Let's Go"})," ",(0,t.jsx)("br",{})," ",(0,t.jsx)("span",{className:"uppercase text-primary",children:"Travel "})]}),(0,t.jsx)("p",{className:"text-lg md:text-xl text-secondary-font max-w-2xl mx-auto mb-10 md:mb-20 leading-relaxed bg-white/50 backdrop-blur-xs p-4 rounded-xl md:bg-transparent md:backdrop-blur-none",children:"Discover the world with us. Dive into new adventures, explore hidden gems, and create unforgettable memories that will last a lifetime. Join our community of explorers today and start writing your own unique travel story."}),(0,t.jsx)("div",{className:"w-fit mx-auto",children:(0,t.jsx)(i,{href:"/booking"})})]})}),(0,t.jsx)("section",{className:"py-30",children:(0,t.jsx)(w,{})}),(0,t.jsx)("section",{className:"py-30 bg-linear-to-r from-primary to-[#94B4C1]",children:(0,t.jsx)(f,{})}),(0,t.jsx)("section",{className:"pt-30 pb-10",id:"services",children:(0,t.jsx)(H,{})}),(0,t.jsx)("section",{className:"pt-10 pb-30",children:(0,t.jsx)(S,{})})]})],33235)}]);