(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{188:function(t,e,n){var content=n(197);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("ddc04780",content,!0,{sourceMap:!1})},189:function(t,e,n){var content=n(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("36a18e40",content,!0,{sourceMap:!1})},190:function(t,e,n){var content=n(201);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("28f1127f",content,!0,{sourceMap:!1})},191:function(t,e,n){"use strict";n.r(e);var o={en:{EARLY_MORNING:"Hello early bird",MORNING:"Good morning",AFTERNOON:"Good afternoon",EVENING:"Good evening"},pt:{EARLY_MORNING:"Bom dia",MORNING:"Bom dia",AFTERNOON:"Boa tarde",EVENING:"Boa noite"},pl:{EARLY_MORNING:"Dzień dobry",MORNING:"Dzień dobry",AFTERNOON:"Dzień dobry",EVENING:"Dobry wieczór"},de:{EARLY_MORNING:"Guten Morgen",MORNING:"Guten Morgen",AFTERNOON:"Guten Tag",EVENING:"Guten Abend"},es:{EARLY_MORNING:"Buenos días",MORNING:"Buenos días",AFTERNOON:"Buenas tardes",EVENING:"Buena noches"},fr:{EARLY_MORNING:"Bonjour",MORNING:"Bonjour",AFTERNOON:"Bonne après-midi",EVENING:"Bonsoir"},it:{EARLY_MORNING:"Buongiorno",MORNING:"Buongiorno",AFTERNOON:"Buon pomeriggio",EVENING:"Buonasera"},de_CH:{EARLY_MORNING:"Guete Morge",MORNING:"Guete Morge",AFTERNOON:"Guete Nami",EVENING:"Guete Abe"},ja:{EARLY_MORNING:"おはようございます",MORNING:"おはようございます",AFTERNOON:"こんにちは",EVENING:"こんばんは"},zh:{EARLY_MORNING:"早上好",MORNING:"早上好",AFTERNOON:"下午好",EVENING:"晚上好"},ru:{EARLY_MORNING:"доброе утро",MORNING:"доброе утро",AFTERNOON:"Добрый день",EVENING:"Добрый вечер"},el:{EARLY_MORNING:"Καλημέρα",MORNING:"Καλημέρα",AFTERNOON:"καλό απόγευμα",EVENING:"Καλό απόγευμα"},ko:{EARLY_MORNING:"좋은 아침",MORNING:"좋은 아침",AFTERNOON:"안녕하세요",EVENING:"안녕하세요"},ar:{EARLY_MORNING:"sabah alkhyr",MORNING:"sabah alkhyr",AFTERNOON:"masa' alkhayr",EVENING:"masa' alkhayr"}},r={props:{dayTime:{type:String,default:"MORNING"},language:{type:String,default:"en"}},computed:{greeting:function(){try{return o[this.language][this.dayTime]}catch(t){return o.en[this.dayTime]}},isDefault:function(){return"MORNING"===this.dayTime}}},l=(n(198),n(29)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{mode:"out-in",name:"slide"}},[this.isDefault?e("span",{key:"1",staticClass:"slide"},[this._v("\n    "+this._s(this.greeting)+"\n  ")]):e("span",{key:"2",staticClass:"slide"},[this._v("\n    "+this._s(this.greeting)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,n){"use strict";var o=n(188);n.n(o).a},197:function(t,e,n){(e=n(35)(!1)).push([t.i,".link{position:relative;text-decoration:none;display:inline-block;font-weight:700;cursor:pointer;color:#444a51;color:var(--body-color,#444a51)}.content{z-index:10;color:var(--title-color);text-shadow:0 3px #fff,-2px 1px #fff,2px 1px #fff;text-shadow:0 3px var(--bg-color,#fff),-2px 1px var(--bg-color,#fff),2px 1px var(--bg-color,#fff)}.underline{transition:all .2s ease;position:absolute;bottom:-1px;display:block;width:100%;border-radius:10px;height:5px;background:#38c172;background:var(--link-color,#38c172);opacity:.5;z-index:-1}.link:hover .underline{opacity:1}",""]),t.exports=e},198:function(t,e,n){"use strict";var o=n(189);n.n(o).a},199:function(t,e,n){(e=n(35)(!1)).push([t.i,".greeting{transition:width .2s}.slide{display:inline-block;transition:all .4s ease}.slide-enter{opacity:0;transform:translateY(30px)}.slide-leave-to{opacity:0;transform:translateY(-30px)}",""]),t.exports=e},200:function(t,e,n){"use strict";var o=n(190);n.n(o).a},201:function(t,e,n){(e=n(35)(!1)).push([t.i,'.container{min-height:calc(100vh - 100px);display:flex;margin:0 auto;flex-direction:column;justify-content:center}.container a:hover{opacity:1}.title{font-size:1.8rem;font-weight:700;margin-bottom:30px}.subtitle{font-size:1.4rem;font-weight:300;margin-bottom:20px;margin-top:0;line-height:2.25rem;max-width:550px}.paragraph{font-family:"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:1.1rem;margin-bottom:20px;max-width:750px}@media only screen and (min-width:600px){.container{min-height:calc(100vh - 200px)}.title{font-size:2.4rem}.subtitle{font-size:1.8rem;margin-bottom:30px;margin-top:0;line-height:2.4rem}.paragraph{font-size:1.4rem;margin-bottom:30px}.paragraph-small{font-size:.8rem}}a.mail-link{display:inline-block;text-decoration:none;color:#444a51;color:var(--body-color,#444a51)}.resize-enter-active,.resize-leave-active{transition:max-height .5s,opacity .4s;max-height:600px}.resize-enter,.resize-leave-to{max-height:0;opacity:0}',""]),t.exports=e},202:function(t,e,n){"use strict";n.r(e);n(78),n(79);var o={props:{to:{type:String,default:"/"}},computed:{isLocal:function(){return!this.to.includes("https://")}}},r=(n(196),n(29)),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this.isLocal?e("nuxt-link",{staticClass:"link",attrs:{to:this.to}},[e("span",{staticClass:"content"},[this._t("default")],2),this._v(" "),e("span",{staticClass:"underline"})]):e("a",{staticClass:"link",attrs:{href:this.to,target:"_blank"}},[e("span",{staticClass:"content"},[this._t("default")],2),this._v(" "),e("span",{staticClass:"underline"})])],1)}),[],!1,null,null,null).exports,c=n(191);function d(){var t=new Date(Date.now()).getHours();switch(!0){case t>=5&&t<7:return"EARLY_MORNING";case t>=12&&t<17:return"AFTERNOON";case t>=17||t<5:return"EVENING";default:return"MORNING"}}!function(){function t(t){window.__theme=t,e=t,document.body.setAttribute("data-theme",t),window.__onThemeChange(t)}var e;window.__onThemeChange=function(){};try{e=localStorage.getItem("theme")}catch(t){}e||(e="EVENING"===d()?"dark":"light"),window.__setPreferredTheme=function(e){t(e);try{localStorage.setItem("theme",e)}catch(t){}};var n=window.matchMedia("(prefers-color-scheme: dark)");n.addListener((function(t){window.__setPreferredTheme(t.matches?"dark":"light")})),t(e||(n.matches?"dark":"light"))}();var N={components:{SpecialLink:l,Greeting:c.default},metaInfo:{title:"About",meta:[{name:"description",content:"Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things."},{key:"og:title",name:"og:title",content:"Diogo Condêço"},{key:"twitter:title",name:"twitter:title",content:"Diogo Condêço"},{key:"og:url",name:"og:url",content:"https://diogobcondeco.com/"},{key:"twitter:card",name:"twitter:card",content:"summary"},{key:"twitter:creator",name:"twitter:creator",content:"@diogobcondeco"},{key:"og:description",name:"og:description",content:"Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things."},{key:"twitter:description",name:"twitter:description",content:"Hi, I’m Diogo and I’m a Junior Front End Developer that loves to build things."}]},data:function(){return{dayTime:"MORNING",language:navigator.language.substr(0,2)}},beforeCreate:function(){var t=this;setTimeout((function(){t.dayTime=d(),t.language=navigator.language.substr(0,2)}),2e3)}},h=(n(200),Object(r.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container content-box"},[n("NuxtChild",{attrs:{"show-footer":!1}}),t._v(" "),n("h1",{staticClass:"title"},[n("Greeting",{attrs:{"day-time":t.dayTime,language:t.language}})],1),t._v(" "),n("h2",{staticClass:"subtitle"},[t._v("\n    I’m Diogo, a Front End Developer that loves to "),n("SpecialLink",{attrs:{to:"https://github.com/diogobcondeco"}},[t._v("build")]),t._v(" things."),n("br")],1),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n    Passionate about "),n("SpecialLink",{attrs:{to:"https://vuejs.org/"}},[t._v("Vue")]),t._v(" & "),n("SpecialLink",{attrs:{to:"https://reactjs.org/"}},[t._v("React")]),t._v(".\n  ")],1),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n    Goals of mastering "),n("SpecialLink",{attrs:{to:"https://vuejs.org/"}},[t._v("Vue")]),t._v(" & contributing to it.\n  ")],1),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n    Dreaming about traveling the 🌍 while 💻 remotely.\n  ")]),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n    Lover of 🍣🍔🍕✈🚐.\n  ")]),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n    You can follow me on "),n("SpecialLink",{attrs:{to:"https://twitter.com/diogobcondeco"}},[t._v("Twitter")]),t._v(", "),n("SpecialLink",{attrs:{to:"https://github.com/diogobcondeco"}},[t._v("GitHub")]),t._v(" & "),n("SpecialLink",{attrs:{to:"https://www.linkedin.com/in/diogobcondeco/"}},[t._v("LinkedIn")]),t._v(".\n  ")],1),t._v(" "),n("a",{staticClass:"paragraph mail-link",attrs:{href:"mailto:diogobcondeco@gmail.com"}},[t._v("\n    ↳ Talk to me.\n  ")])],1)}),[],!1,null,null,null));e.default=h.exports;installComponents(h,{Greeting:n(191).default})}}]);