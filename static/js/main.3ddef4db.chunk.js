(window["webpackJsonpjoshjab.com"]=window["webpackJsonpjoshjab.com"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(15),n(4)),i=n(5),s=n(8),m=n(6),u=n(1),h=n(9),d=n(7),p=n.n(d),b=(n(16),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={name:"",greeting:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({name:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),fetch("/api/greeting?name=".concat(encodeURIComponent(this.state.name))).then(function(e){return e.json()}).then(function(e){return t.setState(e)})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Blah ",o.a.createElement("code",null,"src/App.js")," and test to reload."),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"name"},"Enter your name: "),o.a.createElement("input",{id:"name",type:"text",value:this.state.name,onChange:this.handleChange}),o.a.createElement("button",{type:"submit"},"Submit")),o.a.createElement("p",null,this.state.greeting),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.3ddef4db.chunk.js.map