(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,i){t.exports=i(37)},21:function(t,e,i){},23:function(t,e,i){},26:function(t,e,i){},28:function(t,e,i){},31:function(t,e,i){},37:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),s=i(12),r=i.n(s),o=(i(21),i(2)),c=i(3),l=i(6),h=i(5),u=i(7),d=i(40),p=i(39),m=(i(23),i(26),i(13)),f=i.n(m),v=window.anime;function O(t,e,i){var n;return function(){var a=this,s=arguments,r=i&&!n;clearTimeout(n),n=setTimeout(function(){n=null,i||t.apply(a,s)},e),r&&t.apply(a,s)}}function b(t,e,i){return"undefined"==typeof i&&(i=2),parseFloat(Math.min(t+Math.random()*(e-t),e).toFixed(i))}var g={width:window.innerWidth,height:window.innerHeight},y=function(){function t(e,i,n){Object(o.a)(this,t),this.DOM={},this.options={shapeTypes:["circle","rect","polygon"],shapeColors:["#e07272","#0805b5","#49c6ff","#8bc34a","#1e1e21","#e24e81","#e0cd24"],shapeFill:!0,shapeStrokeWidth:1},Object.assign(this.options,n),this.type=e||this.options.shapeTypes[0],("random"===this.type||this.options.types.includes(this.type))&&("random"===this.type&&(this.type=this.options.shapeTypes[b(0,this.options.shapeTypes.length-1,0)]),this.letterRect=i,this.init())}return Object(c.a)(t,[{key:"init",value:function(){this.DOM.el=document.createElementNS("http://www.w3.org/2000/svg",this.type),this.DOM.el.style.opacity=0,this.configureShapeType(),this.options.shapeFill?this.DOM.el.setAttribute("fill",this.options.shapeColors[b(0,this.options.shapeColors.length-1,0)]):(this.DOM.el.setAttribute("fill","none"),this.DOM.el.setAttribute("stroke-width",this.options.shapeStrokeWidth),this.DOM.el.setAttribute("stroke",this.options.shapeColors[b(0,this.options.shapeColors.length-1,0)]))}},{key:"configureShapeType",value:function(){if(this.DOM.el.style.transformOrigin="".concat(this.letterRect.left+this.letterRect.width/2,"px ").concat(this.letterRect.top+this.letterRect.height/2,"px"),"circle"===this.type){var t=.5*this.letterRect.width;this.DOM.el.setAttribute("r",t),this.DOM.el.setAttribute("cx",this.letterRect.left+this.letterRect.width/2),this.DOM.el.setAttribute("cy",this.letterRect.top+this.letterRect.height/2)}else if("rect"===this.type){var e=b(.05,.5,3)*this.letterRect.width,i=b(.05,.5,3)*this.letterRect.height;this.DOM.el.setAttribute("width",e),this.DOM.el.setAttribute("height",i),this.DOM.el.setAttribute("x",this.letterRect.left+(this.letterRect.width-e)/2),this.DOM.el.setAttribute("y",this.letterRect.top+(this.letterRect.height-i)/2)}else"polygon"===this.type&&this.DOM.el.setAttribute("points","".concat(this.letterRect.left," ").concat(this.letterRect.top+this.letterRect.height,", ").concat(this.letterRect.left+this.letterRect.width/2," ").concat(this.letterRect.bottom-this.letterRect.width,", ").concat(this.letterRect.left+this.letterRect.width," ").concat(this.letterRect.top+this.letterRect.height))}},{key:"onResize",value:function(t){this.letterRect=t,this.configureShapeType()}}]),t}(),w=function(){function t(e,i,n){Object(o.a)(this,t),this.DOM={},this.DOM.el=e,this.DOM.svg=i,this.options={totalShapes:10},Object.assign(this.options,n),this.rect=this.DOM.el.getBoundingClientRect(),this.totalShapes=this.options.totalShapes,this.init(),this.initEvents()}return Object(c.a)(t,[{key:"init",value:function(){this.shapes=[];for(var t=0;t<=this.totalShapes-1;++t){var e=new y("random",this.rect,this.options);this.shapes.push(e),this.DOM.svg.appendChild(e.DOM.el)}}},{key:"initEvents",value:function(){var t=this;window.addEventListener("resize",O(function(){t.rect=t.DOM.el.getBoundingClientRect();for(var e=0;e<=t.totalShapes-1;++e){t.shapes[e].onResize(t.rect)}},20))}}]),t}(),E=function(){function t(e,i){Object(o.a)(this,t),this.DOM={},this.DOM.el=e,this.options={shapesOnTop:!1},Object.assign(this.options,i),this.init(),this.initEvents()}return Object(c.a)(t,[{key:"init",value:function(){var t=this;this.createSVG(),f()(this.DOM.el),this.letters=[],Array.from(this.DOM.el.querySelectorAll("span")).forEach(function(e){return t.letters.push(new w(e,t.DOM.svg,t.options))})}},{key:"initEvents",value:function(){var t=this;window.addEventListener("resize",O(function(){g={width:window.innerWidth,height:window.innerHeight},t.DOM.svg.setAttribute("width","".concat(g.width,"px")),t.DOM.svg.setAttribute("height","".concat(g.width,"px")),t.DOM.svg.setAttribute("viewbox","0 0 ".concat(g.width," ").concat(g.height))},20))}},{key:"createSVG",value:function(){this.DOM.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.DOM.svg.setAttribute("class","shapes"),this.DOM.svg.setAttribute("width","".concat(g.width,"px")),this.DOM.svg.setAttribute("height","".concat(g.width,"px")),this.DOM.svg.setAttribute("viewbox","0 0 ".concat(g.width," ").concat(g.height)),this.options.shapesOnTop?this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el.nextSibling):this.DOM.el.parentNode.insertBefore(this.DOM.svg,this.DOM.el)}},{key:"show",value:function(t){return this.toggle("show",t)}},{key:"hide",value:function(t){return this.toggle("hide",t)}},{key:"toggle",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"show",i=arguments.length>1?arguments[1]:void 0;return new Promise(function(n,a){var s=function(){for(var i=0,a=t.letters.length;i<=a-1;++i)t.letters[i].DOM.el.style.opacity="show"===e?1:0;n()};if(i&&0!==Object.keys(i).length){if(i.shapesAnimationOpts)for(var r=0,o=t.letters.length;r<=o-1;++r){var c=t.letters[r];setTimeout(function(t){return function(){i.shapesAnimationOpts.targets=t.shapes.map(function(t){return t.DOM.el}),v.remove(i.shapesAnimationOpts.targets),v(i.shapesAnimationOpts)}}(c),i.lettersAnimationOpts&&i.lettersAnimationOpts.delay?i.lettersAnimationOpts.delay(c.DOM.el,r):0)}i.lettersAnimationOpts?(i.lettersAnimationOpts.targets=t.letters.map(function(t){return t.DOM.el}),i.lettersAnimationOpts.complete=function(){if("hide"===e)for(var t=0,a=i.lettersAnimationOpts.targets.length;t<=a-1;++t)i.lettersAnimationOpts.targets[t].style.transform="none";n()},v(i.lettersAnimationOpts)):s()}else s()})}}]),t}(),M=window.anime,k=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{class:"header"},a.a.createElement("div",{class:"text"},a.a.createElement("h2",{class:"word word--6"},"Maik Rantetasik"),a.a.createElement("span",{class:"title"},"Full Stack Developer")))}},{key:"componentDidMount",value:function(){var t=document.querySelector(".word"),e=document.querySelector(".title"),i=new E(t,{shapeColors:["#fff","#6b7a8f","#f7882f","#f7c331","#dcc7aa"],totalShapes:7});new E(e,{}).show({lettersAnimationOpts:{duration:500,delay:function(t,e){return 1200},easing:"easeOutExpo",opacity:[0,1],translateX:["-600%","0%"]}}),i.show({lettersAnimationOpts:{duration:500,delay:function(t,e){return 60*e},easing:"easeOutExpo",opacity:{value:[0,1],duration:50,delay:function(t,e){return 60*e},easing:"linear"},translateY:function(t,e){return e%2?[M.random(-350,-300),0]:[M.random(300,350),0]}},shapesAnimationOpts:{duration:function(){return M.random(1e3,4e3)},delay:function(t,e){return 20*e},easing:[.2,1,.3,1],translateX:function(t){var e=M.random(-window.innerWidth/2+50,window.innerWidth/2-50);return t.dataset.tx=e,[0,e]},translateY:function(t){var e=M.random(-window.innerHeight/2,.75*window.innerHeight);return t.dataset.ty=e,[0,e]},scale:function(t){var e,i,n,a=(e=.2,i=.6,"undefined"==typeof n&&(n=2),parseFloat(Math.min(e+Math.random()*(i-e),i).toFixed(n)));return t.dataset.s=a,[a,a]},rotate:function(){return M.random(-90,90)},opacity:{value:.6,duration:1e3,easing:"linear"}}})}}]),e}(n.Component),j=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",{className:"page-title"},"About"))}}]),e}(n.Component),D=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",{className:"page-title"},"Contact"))}}]),e}(n.Component),A=(i(28),function(t){function e(t){var i;return Object(o.a)(this,e),(i=Object(l.a)(this,Object(h.a)(e).call(this,t))).state={expanded:!1,displayText:null},i}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this.props;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("div",{className:"project"},a.a.createElement("div",{className:"preview project-container"},a.a.createElement("img",{className:"thumbnail",src:t.thumbnailurl,alt:"thumbnail",width:"100px",height:"100px"}),a.a.createElement("div",{className:"right"},a.a.createElement("h3",{className:"project-title"},t.title),a.a.createElement("div",{className:"technologies"},this.tech(t.techs)),a.a.createElement("div",{className:"desc"},t.shortdesc))),a.a.createElement("div",{className:"project-container"},this.state.displayText),this.readMoreLessButton()))}},{key:"tech",value:function(t){return t.map(function(t){return a.a.createElement("span",null,t," ")})}},{key:"readMoreLessButton",value:function(){return a.a.createElement("div",{className:"readMoreLess",onClick:this.state.expanded?this.readLess.bind(this):this.readMore.bind(this)},this.state.expanded?"Read Less":"Read More")}},{key:"readMore",value:function(){this.setState({expanded:!0}),this.setState({displayText:this.props.long})}},{key:"readLess",value:function(){this.setState({expanded:!1}),this.setState({displayText:null})}}]),e}(n.Component)),R=[];R.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[".NET","Java","JavaScript"],long:a.a.createElement("div",null,a.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))}),R.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at.",techs:[".NET","Java","JavaScript"],long:a.a.createElement("div",null,a.a.createElement("div",{class:"desc"},"Lorem ipsum dolor sit amet, nam cu erroribus assueverit, usu facilis delicatissimi et. Eos quem case ne. Vis at eripuit propriae, vis dolore necessitatibus in. Pro id corrumpit complectitur, te eam inermis deserunt similique. Nam ne fugit vidisse appareat, te admodum adipiscing mea. Malorum forensibus ne nec, in quo dolorem fuisset intellegebat, ad quo dicit decore eruditi. Id errem detraxit vis, utamur blandit concludaturque cum at."))}),R.push({title:"Wiki Translate Bot",thumbnailurl:"https://cdn2.iconfinder.com/data/icons/dog-2/32/husky-512.png",shortdesc:"description asdfasdfasdfa asdf asdf asdf asfd a",techs:[".NET","Java","JavaScript"],long:a.a.createElement("div",null,a.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),a.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "),a.a.createElement("div",{class:"desc"},"So here i di d tihsl and blah "))});var x=R,S=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"renderProjects",value:function(){return x.map(function(t){return a.a.createElement(A,t)})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",{className:"page-title"},"Projects"),this.renderProjects())}}]),e}(n.Component),N=i(38),C=(i(31),function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"nav"},a.a.createElement("div",{className:"nav-btn"},a.a.createElement("label",{for:"nav-check"},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))),a.a.createElement("input",{type:"checkbox",id:"nav-check"}),a.a.createElement("div",{className:"nav-links"},a.a.createElement(N.a,{onClick:this.dismiss,to:"/"},"About"),a.a.createElement(N.a,{onClick:this.dismiss,to:"/projects"},"Projects"),a.a.createElement(N.a,{onClick:this.dismiss,to:"/contact",className:"brand"},"Maik"),a.a.createElement(N.a,{onClick:this.dismiss,to:"/contact"},"Resume"),a.a.createElement(N.a,{onClick:this.dismiss,to:"/contact"},"Contact")))}},{key:"dismiss",value:function(){document.getElementById("nav-check").checked=!1}}]),e}(n.Component)),T=d.a,q=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(k,null),a.a.createElement(T,null,a.a.createElement("div",{className:"bleh"},a.a.createElement(C,null),a.a.createElement("div",{className:"content"},a.a.createElement(p.a,{exact:!0,path:"/",component:j}),a.a.createElement(p.a,{path:"/projects",component:S}),a.a.createElement(p.a,{path:"/contact",component:D})))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.4f83590c.chunk.js.map