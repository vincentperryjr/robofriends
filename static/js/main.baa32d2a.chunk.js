(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(7),c=n.n(s),a=(n(12),n(2)),o=n(3),i=n(5),h=n(4),l=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow ba bw2 shadow-5",children:[Object(l.jsx)("img",{src:"https://robohash.org/"+r+"?set=set4&size=300x300",alt:"robots"}),Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search cats",onChange:t})})},d=(n(14),function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})}),f=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"ooooops. That is not good"}):this.props.children}}]),n}(r.Component),O=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{children:"LOADING"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(j,{searchChange:this.onSearchChange}),Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(u,{robots:t})})})]})}}]),n}(r.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(15);c.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.baa32d2a.chunk.js.map