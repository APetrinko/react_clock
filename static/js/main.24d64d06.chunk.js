(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),a=n(2),o=n(3),l=n(5),s=n(4),r=n(1),d=(n(12),n(0)),u=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={date:new Date},e.timerId=0,e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({date:new Date}),console.info(e.state.date.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.date.toUTCString().slice(-12,-4),t=this.props.clockName;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t}),Object(d.jsx)("span",{children:" time is "}),Object(d.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(r.Component);function m(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var h=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),o=0;o<c;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={isClockVisible:!0,clockName:"Clock-0"},e.timerId=0,e.handleLeftClick=function(){e.setState({isClockVisible:!0})},e.handleRightClick=function(t){t.preventDefault(),e.setState({isClockVisible:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){e.setState({clockName:m()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleLeftClick),document.removeEventListener("click",this.handleLeftClick)}},{key:"render",value:function(){var e=this.state,t=e.isClockVisible,n=e.clockName;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Time in Greenwich, London, UK"}),t&&Object(d.jsx)(u,{clockName:n})]})}}]),n}(r.Component);i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.24d64d06.chunk.js.map