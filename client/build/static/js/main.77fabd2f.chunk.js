(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){},38:function(e,t,a){e.exports=a(82)},43:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),s=a.n(l),c=(a(43),a(15),a(44),a(14)),i=a(3),o=a(10),m=a(11),u=a(13),d=a(12),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={showSearchBar:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"header"},r.a.createElement("div",{id:"logo-area",className:"logo-area"},r.a.createElement("h1",{className:"logo"},"COVID DASH")),r.a.createElement("div",{id:"user-menu",className:"menu"},r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,"Home"),r.a.createElement("li",null,"About"),r.a.createElement("li",null,"Tweets"))))}}]),a}(n.Component),f=(a(45),a(20)),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={news_stories:[{id:1,img:"../news1.png",title:"Can convalescent plasma treat coronavirus?",description:"Phlebotomist Jenee Wilson carries COVID-19 convalescent plasma from a donor at Bloodworks ... press to encourage people who survived Covid-19 to donate plasma to help those who are sick."},{id:2,img:"../news2.jpg",title:"How to Protect Yourself & Others | CDC",description:"Here are some tips to protect tips"}]},n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"latest-news"},r.a.createElement("h1",{className:"latest-news-title"},"Latest News"),r.a.createElement(f.a,null,this.state.news_stories.map((function(e){return r.a.createElement(f.a.Item,{key:e.id},r.a.createElement("img",{className:"d-block news-img",src:"".concat(e.img),alt:"First slide"}),r.a.createElement(f.a.Caption,null,r.a.createElement("div",{className:"news-info"},r.a.createElement("h3",{className:"news-title transparent-bkgnd"},e.title),r.a.createElement("p",{className:"latestnews-description transparent-bkgnd"},e.description))))}))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"helpful-info"},r.a.createElement("h1",null,"Helpful Info"),r.a.createElement("div",{className:"helpful-info-items"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:""},"Cleaning tips")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Stats")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Safety")))))}}]),a}(n.Component),E=a(17),v=a(19),b=a.n(v),g=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={tweets:[{id:1,username:"Twitter API",screename:"TwitterAPI",profile_pic:"../profile_pic.jpg",test_img:"https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",body:"Sample tweet",date:"4:19 PM \xb7 Oct 10, 2018"},{id:2,username:"Twitter API",screename:"TwitterAPI",profile_pic:"../profile_pic.jpg",test_img:"https://pbs.twimg.com/profile_images/942858479592554497/BbazLO9L_normal.jpg",body:"Sample tweet",date:"4:19 PM \xb7 Oct 10, 2018"}],tweet_news:[]},n.renderTweets=n.renderTweets.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/news").then((function(t){console.log(t.data),e.setState({tweet_news:t.data})}))}},{key:"renderTweets",value:function(){return this.state.tweet_news.map((function(e){return r.a.createElement("div",{className:"tweet",key:e.id},r.a.createElement("div",{className:"tweet-profile"},r.a.createElement("img",{className:"tweet-profile_pic",src:"".concat(e.user.profile_image_url_https)}),r.a.createElement("div",{className:"tweet-wrapper"},r.a.createElement("span",{className:"tweet-username"},e.user.name,r.a.createElement("span",{className:"tweet-screename"},"@",e.user.name)))),r.a.createElement("div",{className:"tweet-body"},e.text),r.a.createElement("div",{className:"tweet-date"},e.created_at))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"latest-tweets"},r.a.createElement("h1",null,"Latest Tweets"),r.a.createElement("div",{className:""},this.renderTweets()))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={local_news:[{id:1,title:"Scientists See Signs of Lasting Immunity to Covid-19, Even After Mild Infections",blurb:"New research indicates that human immune system cells are storing information about the coronavirus so they can fight it off again."},{id:2,title:"New York Is Positioned to Reopen Schools Safely, Health Experts Say",blurb:"Transmission, even in New York City, is well below thresholds experts say are safe, but issues like adequate ventilation to combat aerosol spread of the virus remain."}]},n.getData=n.getData.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"getData",value:function(){var e=this;b.a.get("https://cors-anywhere.herokuapp.com/https://coviddash-api.herokuapp.com/api/v1/test").then((function(t){console.log(t),e.setState({othernews:t.data.message})}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"local-news"},r.a.createElement("h1",null,"Local News"),this.state.local_news.map((function(e){return r.a.createElement("div",{className:"news-item",key:e.id},r.a.createElement("h3",{className:"localnews-title transparent-bkgnd"},e.title),r.a.createElement("p",{className:"localnews-description transparent-bkgnd"},e.blurb))})))}}]),a}(n.Component),N=function(){return r.a.createElement("div",{className:"relevant-info"},r.a.createElement(w,null),r.a.createElement(g,null),r.a.createElement(O,null))},j=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(N,null))},k=function(){return r.a.createElement("div",{className:"footer"},"\xa9 COVID DASH")},y=function(){return r.a.createElement(c.a,null,r.a.createElement(p,null),r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(k,null))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.77fabd2f.chunk.js.map