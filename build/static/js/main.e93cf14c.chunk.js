(this["webpackJsonplearn-game"]=this["webpackJsonplearn-game"]||[]).push([[0],{11:function(e,n,a){e.exports=a.p+"static/media/10coins1.477b5e60.mp3"},17:function(e,n,a){e.exports=a.p+"static/media/coinlose.7ec381ed.mp3"},28:function(e,n,a){e.exports=a(44)},33:function(e,n,a){},34:function(e,n,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},35:function(e,n,a){},44:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),s=a(7),o=a.n(s),i=(a(33),a(34),a(35),a(36),a(9)),l=a(10),u=a(13),c=a(12),h=a(19),g=a(24),m={questions:[{id:1,img:["IMG_20200813_161122","IMG_20200813_161124_hor"],answers:["The Cross","Das Kreuz","Het Kruis"]},{id:2,img:["IMG_20200813_154127","IMG_20200813_154130_hor"],answers:["The Scooter","Der Roller","De Step"]},{id:3,img:["IMG_20200813_154119","IMG_20200813_154121_hor"],answers:["The Statue","Die Statue","Het Standbeeld"]},{id:4,img:["IMG_20200813_154055","IMG_20200813_154058_hor"],answers:["The bicycle","Das Fahrrad","De Fiets"]},{id:5,img:["IMG_20200812_152026","IMG_20200812_152024_hor"],answers:["The Pigeon","Die Taube","De Duif"]},{id:6,img:["IMG_20200812_150527","IMG_20200812_150530_hor"],answers:["The Tree","Der Baum","De Boom"]},{id:7,img:["IMG_20200812_150337_1","IMG_20200812_150341_hor"],answers:["The Flags","Die Flaggen","De Vlaggen"]},{id:9,img:["IMG_20200812_150141","IMG_20200812_150145_hor"],answers:["The Pawn","Die Pion","De Pion"]},{id:10,img:["IMG_20200812_150008","IMG_20200812_150011_hor"],answers:["The Security Camera","Die \xdcberwachungskamera","De Beveiligingscamera"]},{id:11,img:["IMG_20200812_150205","IMG_20200812_150208_hor"],answers:["The Trash Can","Der M\xfclleimer","De Vuilnisbak"]},{id:12,img:["IMG_20200812_145907","IMG_20200812_145911_hor"],answers:["The Palm Tree","Die Palme","De Palmboom"]},{id:13,img:["IMG_20200812_145741","IMG_20200812_145750_hor"],answers:["The Slide","Die Rutsche","De Glijbaan"]},{id:14,img:["IMG_20200812_145648","IMG_20200812_145654_hor"],answers:["The Swing","Die Schaukel","De Schommel"]},{id:15,img:["IMG_20200817_173155","IMG_20200817_173159_hor"],answers:["The Stairs","Die Treppe","De Trap"]},{id:16,img:["IMG_20200817_172340","IMG_20200817_172401_hor"],answers:["The Chessboard","Das Schachbrett","Het Schaakbord"]},{id:17,img:["IMG_20200817_170501","IMG_20200817_170504_hor"],answers:["The Handbag","Die Handtasche","De Tas"]},{id:18,img:["IMG_20200817_170049","IMG_20200817_170053_hor"],answers:["The Zebra crossing","Der Zebrastreifen","De Zebrapad"]},{id:19,img:["IMG_20200817_165901","IMG_20200817_165906_hor"],answers:["The Yellow Car","Das Gelbe Auto","De Gele Auto"]},{id:20,img:["IMG_20200817_165749","IMG_20200817_165754_hor"],answers:["The telephone booth","Die Telefonzelle","De telefooncel"]},{id:21,img:["IMG_20200817_100849","IMG_20200817_100852_hor"],answers:["The Water Bottle","Die Wasserflasche","De Waterfles"]},{id:22,img:["IMG_20200817_100818","IMG_20200817_100815_hor"],answers:["The Slipper","Der Pantoffel","De Slipper"]},{id:23,img:["IMG_20200817_100807","IMG_20200817_100802_hor"],answers:["The Walking Shoe","De Wanderschuh","Der Wandelschoen"]},{id:24,img:["IMG_20200817_100849","IMG_20200817_100852_hor"],answers:["The Water Bottle","Die Wasserflasche","De Waterfles"]},{id:25,img:["IMG_20200818_162845","IMG_20200818_162850_hor"],answers:["The Chair","Der Stuhl","De Stoel"]},{id:26,img:["IMG_20200818_162819","IMG_20200818_162824_hor"],answers:["The Pool Table","Der Stuhl","De Pooltafel"]}]},d=a(15),_=a(8),w=(a(45),a(39),a(42),a(26)),f=a(25),D=(a(27),a(16),a(11)),p=a.n(D),M=a(17),I=a.n(M);var G=function(e){Object(u.a)(t,e);var n=Object(c.a)(t);function t(e){var s;return Object(i.a)(this,t),(s=n.call(this,e)).onLoad=function(){s.setState({imageLoaded:!0})},s.compareAnswer=function(e,n){if(-1==s.state.rightAnswer&&s.state.imageLoaded){var a=s.state.questionNumber+1;if(e==s.state.currentQuestion.answers[s.state.languageToLearn])new Audio(p.a).play(),s.setState({questionNumber:a,rightAnswer:n,clickedAnswer:n,answered:!0,goodAnswers:s.state.goodAnswers+1});else new Audio(I.a).play(),s.setState({questionNumber:a,rightAnswer:-2,clickedAnswer:n,answered:!0});setTimeout((function(){s.nextQuestion()}),1e3)}else console.log("already clicked")},s.nextQuestion=function(){s.questionsData.length;s.state.questionNumber<10?(console.log("next question..."),s.setState({currentQuestion:s.questionsData[s.state.questionNumber],rightAnswer:-1,clickedAnswer:-1,imageLoaded:!1})):s.setState({gameState:1})},s.playAgain=function(){s.questionsData=m.questions.sort((function(e,n){return.5-Math.random()})),s.setState((function(e){return{questionNumber:0,currentQuestion:s.questionsData[0],rightAnswer:-1,clickedAnswer:-1,answered:!1,gameState:0,goodAnswers:0,imageLoaded:!1}}))},s.chooseLanguageToLearn=function(){var e=a(43);return console.log(e()),r.a.createElement(d.a,null,r.a.createElement("button",null,r.a.createElement(_.a,{onClick:function(){return s.changeLanguage(0)},key:"0",src:"images/flags/united-kingdom-flag-small.jpg",fluid:!0})),r.a.createElement("button",null,r.a.createElement(_.a,{onClick:function(){return s.changeLanguage(1)},key:"1",src:"images/flags/germany-flag-small.jpg",fluid:!0})),r.a.createElement("button",null,r.a.createElement(_.a,{onClick:function(){return s.changeLanguage(2)},key:"2",src:"images/flags//netherlands-flag-small.jpg",fluid:!0})))},s.questionsData=m.questions.sort((function(e,n){return.5-Math.random()})),s.state={languageToLearn:-1,questionNumber:0,currentQuestion:s.questionsData[0],rightAnswer:-1,clickedAnswer:-1,answered:!1,gameState:0,goodAnswers:0,imageLoaded:!1},s.newAnswers=[],s.newAnswers=s.generateAnswers(),s}return Object(l.a)(t,[{key:"generateAnswers",value:function(){var e=this,n=this.state.currentQuestion,a=this.questionsData.map((function(n){return n.answers[e.state.languageToLearn]})),t=n.answers[this.state.languageToLearn];return a=this.removeItemOnce(a,t),(a=this.getRandom(a,3)).push(t),a.sort((function(e,n){return.5-Math.random()})),a}},{key:"componentDidMount",value:function(){console.log("componentDidMount")}},{key:"componentDidUpdate",value:function(){console.log("componentDidUpdate")}},{key:"getRandom",value:function(e,n){var a=new Array(n),t=e.length,r=new Array(t);if(n>t)throw new RangeError("getRandom: more elements taken than available");for(;n--;){var s=Math.floor(Math.random()*t);a[n]=e[s in r?r[s]:s],r[s]=--t in r?r[t]:t}return a}},{key:"removeItemOnce",value:function(e,n){var a=e.indexOf(n);return a>-1&&e.splice(a,1),e}},{key:"removeItemAll",value:function(e,n){for(var a=0;a<e.length;)e[a]===n?e.splice(a,1):++a;return e}},{key:"shouldComponentUpdate",value:function(){return console.log("shouldComponentUpdate"),!0}},{key:"handleClick",value:function(e){e&&e.preventDefault()}},{key:"chooseAnswerState",value:function(){var e=this,n="Select the Correct Word";1==this.state.languageToLearn&&(n="W\xe4hlen Sie das richtige Wort"),2==this.state.languageToLearn&&(n="Selecteer het juiste woord");var a=this.state.imageLoaded?{}:{visibility:"hidden",display:"none"},t=this.state.imageLoaded?{visibility:"hidden",display:"none"}:{};return r.a.createElement(d.a,null,r.a.createElement("h1",null,n),r.a.createElement("p",null,r.a.createElement(_.a,{style:a,onLoad:this.onLoad,src:"images/quiz/".concat(this.state.currentQuestion.img[1],".jpg"),fluid:!0}),r.a.createElement(_.a,{style:t,src:"images/quiz/loading.jpg",fluid:!0})),this.newAnswers.map((function(n,a){return r.a.createElement(h.a,{key:a,onClick:function(){e.compareAnswer(n,a)},onMouseDown:e.handleClick,onKeyUp:function(n){13!==n.keyCode&&32!==n.keyCode||e.handleClick()},variant:e.state.rightAnswer==a?"success":e.state.clickedAnswer==a?"danger":"outline-primary",size:"lg",block:!0},n)})))}},{key:"changeLanguage",value:function(e){this.setState({languageToLearn:e})}},{key:"render",value:function(){return-1==this.state.rightAnswer&&this.state.imageLoaded&&(this.newAnswers=this.generateAnswers(),console.log("check")),r.a.createElement(g.a,{fluid:!0},-1==this.state.languageToLearn?this.chooseLanguageToLearn():0==this.state.gameState?this.chooseAnswerState():1==this.state.gameState?r.a.createElement(d.a,null,r.a.createElement("h1",null,"Results"),r.a.createElement(w.a,{variant:"secondary"},r.a.createElement("h2",null,"Answered ",r.a.createElement(f.a,{variant:"success"},this.state.goodAnswers)," good out of ",this.state.questionNumber)),r.a.createElement(h.a,{onClick:this.playAgain,variant:"outline-primary",size:"lg",block:!0},"Play Again")):null)}}]),t}(t.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement("div",null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.e93cf14c.chunk.js.map