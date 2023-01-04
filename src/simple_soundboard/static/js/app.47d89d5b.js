(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&f.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],i=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},n={app:0},s=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("85ec"),n=r.n(i);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("p",{staticClass:"top-buffer"}),r("div",{staticClass:"container"},[r("main",[r("router-view")],1)])])},s=[],a={name:"app",data:function(){return{}},methods:{},created:function(){this.$store.dispatch("workout/getConfig")},computed:{}},o=a,c=(r("034f"),r("2877")),u=Object(c["a"])(o,n,s,!1,null,null,null),l=u.exports,d=r("8c4f"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card"},[0==t.isRunning?r("div",{staticClass:"card-body"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[t._v(" Seconds per exercice"),r("b-input",{attrs:{type:"number",placeholder:"Nbr"},model:{value:t.exercice_time,callback:function(e){t.exercice_time=t._n(e)},expression:"exercice_time"}})],1),r("div",{staticClass:"col-md-3"},[t._v(" Seconds between exercices"),r("b-input",{attrs:{type:"number",placeholder:"Nbr"},model:{value:t.time_between_exercices,callback:function(e){t.time_between_exercices=t._n(e)},expression:"time_between_exercices"}})],1),r("div",{staticClass:"col-md-3"},[t._v(" Series of"),r("b-input",{attrs:{type:"number",placeholder:"Nbr"},model:{value:t.series_of,callback:function(e){t.series_of=t._n(e)},expression:"series_of"}})],1),r("div",{staticClass:"col-md-3"},[t._v(" Seconds between series"),r("b-input",{attrs:{type:"number",placeholder:"Time"},model:{value:t.time_between_series,callback:function(e){t.time_between_series=t._n(e)},expression:"time_between_series"}})],1)]),r("p"),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.startExercice()}}},[t._v("Start Exercice")])],1)])]):r("div",[r("div",{staticClass:"card-body",staticStyle:{height:"70vh"}},[r("div",{staticClass:"display-4 text-center font-weight-bold"},[r("font",{attrs:{size:"12"}},[t._v(t._s(t.current_workout))])],1),r("div",{staticClass:"text-center font-weight-bolder super-huge"},[t._v(" "+t._s(t.time-this.time_between_exercices)+" ")]),this.current_list.length>0?r("div",{staticClass:"display-4 text-center"},[r("font",{attrs:{size:"5"}},[t._v("Next")]),r("br"),r("font",{attrs:{size:"7"}},[t._v(t._s(this.generated_workout[0]["name"]))])],1):t._e()]),r("div",{staticStyle:{height:"25vh"}},[0==t.paused?r("div",{staticClass:"col-md-12 paddit"},[r("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.pauseExercice()}}},[t._v("Pause Exercice")])],1):r("div",{staticClass:"col-md-12 paddit"},[r("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.resumeExercice()}}},[t._v("Resume Exercice")])],1),r("div",{staticClass:"col-md-12 paddit"},[r("b-button",{attrs:{block:"",variant:"warning"},on:{click:function(e){return t.skipExercice()}}},[t._v("Skip Exercice")])],1),r("div",{staticClass:"col-md-12 paddit"},[r("b-button",{attrs:{block:"",variant:"danger"},on:{click:function(e){return t.stopExercice()}}},[t._v("Stop Exercice")])],1)])])])])]),r("p"),0==t.isRunning?r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-4",staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t._v(" Add to current workout ")]),r("div",{staticClass:"card-body"},t._l(t.available_workouts,(function(e){return r("div",{key:e.id,staticClass:"paddit"},[r("b-button",{staticClass:"btn btn-primary btn-sm",attrs:{block:"",varient:"small"},on:{click:function(r){return t.addToWorkout(e)}}},[t._v(t._s(e.name))])],1)})),0)])]),r("div",{staticClass:"col-md-8",staticStyle:{"margin-top":"20px"}},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[t._v(" Current Workout "),r("div",{staticClass:"float-right"},[r("b-button",{staticClass:"btn-sm",attrs:{variant:"primary"},on:{click:function(e){return t.shuffle()}}},[r("b-icon",{attrs:{icon:"shuffle"}})],1),t._v(" "),r("b-button",{staticClass:"btn-sm",attrs:{variant:"danger"},on:{click:function(e){return t.removeAll()}}},[r("b-icon",{attrs:{icon:"trash"}})],1)],1)]),r("div",{staticClass:"card-body",staticStyle:{width:"95%"}},[r("draggable",{model:{value:t.current_list,callback:function(e){t.current_list=e},expression:"current_list"}},t._l(t.current_list,(function(e,i){return r("div",{key:i},[r("div",{staticClass:"small-alert"},[t._v(" "+t._s(e.name)+" "),r("b-button",{staticClass:"float-right btn-danger btn-sm",on:{click:function(e){return t.remove(i)}}},[r("b-icon",{attrs:{icon:"trash"}})],1),r("hr")],1)])})),0)],1)]),r("p",{staticClass:"bottom-buffer"})])]):t._e()])},p=[],m=(r("a434"),r("b0c0"),r("310e")),v=r.n(m),_=r("9757"),b=r.n(_),h={components:{draggable:v.a},name:"Home",data:function(){return{add_number:null,time:0,time_between_exercices:3,exercice_time:45,series_of:2,time_between_series:15,isRunning:!1,generated_workout:[],current_workout:"",timer:null,current_serie:0,paused:!1,audio:new Audio("http://soundbible.com/mp3/Bleep-SoundBible.com-1927126940.mp3"),noSleep:new b.a}},props:{},computed:{available_workouts:{get:function(){return this.$store.getters["workout/getConfig"]["workouts"]}},current_list:{get:function(){return this.$store.getters["workout/getCurrentWorkout"]},set:function(t){this.$store.commit("workout/updateCurrentWorkout",t)}}},methods:{shuffle:function(){this.current_list.sort((function(){return Math.random()>.5?-1:1}))},addToWorkout:function(t){for(var e in t.activities)this.current_list.push({name:t.activities[e]})},addAll:function(){for(var t=0;t<this.available_workouts.length;t++)this.current_list.push(this.available_workouts[t])},removeAll:function(){this.current_list.splice(0,this.current_list.length)},remove:function(t){this.current_list.splice(t,1)},addQty:function(t){for(var e=0;e<t;e++){var r=Math.floor(Math.random()*Math.floor(this.available_workouts.length));this.current_list.push(this.available_workouts[r])}},startExercice:function(){var t=this;this.noSleep.enable(),this.isRunning=!0,this.current_workout="Get Ready!",this.time=3+this.time_between_exercices,this.audio.volume=.2,this.audio.play(),this.generated_workout=[];var e=0;for(var r in this.current_list)this.generated_workout.push({name:this.current_list[r]["name"],time:this.exercice_time+this.time_between_exercices}),e+=1,0!=e&&e%this.series_of==0&&this.generated_workout.push({name:"Pause",time:this.time_between_series+this.time_between_exercices});this.timer||(this.timer=setInterval((function(){if(!t.paused&&0!=t.isRunning){t.time>0?t.time--:t.generated_workout.length>0?(t.current_workout=t.generated_workout[0]["name"],t.time=t.generated_workout[0]["time"],t.generated_workout.shift()):(t.current_workout="Workout Over!",clearInterval(t.timer),t.reset());var e=t.time-t.time_between_exercices;3!=e&&2!=e&&1!=e&&0!=e&&0!=t.time||(t.audio.play(),t.audio.currentTime=0)}}),1e3))},stopExercice:function(){this.noSleep.disable(),this.isRunning=!1,clearInterval(this.timer),this.timer=null,this.paused=!1,this.time=0},pauseExercice:function(){this.paused=!0},skipExercice:function(){this.time=0},resumeExercice:function(){this.paused=!1}}},g=h,w=(r("8c77"),Object(c["a"])(g,f,p,!1,null,null,null)),k=w.exports;i["default"].use(d["a"]);var x=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",components:{default:k}}]}),C=r("2f62"),y=r("bc3a"),S=r.n(y),E={namespaced:!0,state:{current_workout:[],config:{}},mutations:{getConfig:function(t,e){t.config=e},updateCurrentWorkout:function(t,e){t.current_workout=e}},actions:{getConfig:function(t){var e=t.commit;S.a.get("/api/get_config").then((function(t){return e("getConfig",t.data)})).catch(console.error)}},getters:{getConfig:function(t){return t.config},getCurrentWorkout:function(t){return t.current_workout}}};i["default"].use(C["a"]);var O=new C["a"].Store({state:{},modules:{workout:E},getters:{}}),j=r("5f5b"),P=r("b1e0");r("f9e3"),r("2dd8");i["default"].config.productionTip=!1,i["default"].use(j["a"]),i["default"].use(P["a"]),new i["default"]({render:function(t){return t(l)},router:x,store:O}).$mount("#app")},"85ec":function(t,e,r){},"8c77":function(t,e,r){"use strict";var i=r("f8eb"),n=r.n(i);n.a},f8eb:function(t,e,r){}});
//# sourceMappingURL=app.47d89d5b.js.map