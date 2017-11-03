webpackJsonp([1],[,function(t,e,a){var o=a(0)(a(32),a(80),null,null,null);t.exports=o.exports},,,,,,,,,,,,,,function(t,e,a){function o(t){a(69)}var n=a(0)(a(30),a(84),o,null,null);t.exports=n.exports},,function(t,e,a){"use strict";var o=a(37),n=a.n(o),i=a(38),s=a.n(i),l=a(73),r=a.n(l),d=a(14),c=a.n(d),u=function(){function t(){n()(this,t),this._ready=!1,this._readyCallbacks=[],this._idbAdapter=new c.a,this._db=new r.a("iplan-data.db",{autoload:!0,autoloadCallback:this.initializeDB.bind(this),autosave:!0,autosaveInterval:4e3,adapter:this._idbAdapter}),this.whenReady=this.whenReady.bind(this)}return s()(t,[{key:"initializeDB",value:function(){var t=this;(this._todos=this._db.getCollection("todos"))||(this._todos=this._db.addCollection("todos")),(this._goals=this._db.getCollection("goals"))||(this._goals=this._db.addCollection("goals")),this._ready=!0,this._readyCallbacks.reduce(function(e,a){return a(t)},0)}},{key:"isReady",value:function(){return this._ready}},{key:"whenReady",value:function(t){this.isReady()?t(this):this._readyCallbacks.push(t)}},{key:"getDB",value:function(){return this._db}},{key:"getTodos",value:function(){return this._todos}},{key:"getGoals",value:function(){return this._goals}},{key:"getGoalsArray",value:function(){return this._goals.find({})}},{key:"getGoal",value:function(t){var e=this._goals.find({_id:t});return e?e[0]:null}},{key:"addGoal",value:function(t,e,a,o){this._goals||o(!0,null);var n={_id:btoa((new Date).toISOString()),name:t,dueDate:e,todo_ids:a};this._goals.insert(n)?o(!1,n._id):o(!0,null)}},{key:"updateGoal",value:function(t){this._goals.update(t)}},{key:"deleteGoal",value:function(t){this._goals.remove(t)}},{key:"addToDo",value:function(t,e,a,o){if(!this._todos)return void o(!0,null);var n={_id:btoa((new Date).toISOString()),name:t,dueDate:e,dueTime:a,done:!1};this._todos.insert(n)?o(!1,n._id):o(!0,n._id)}},{key:"getToDo",value:function(t){var e=this._todos.find({_id:t});return e?e[0]:null}},{key:"updateToDo",value:function(t){this._todos.update(t)}},{key:"deleteToDo",value:function(t){this._todos.remove(t)}}]),t}(),v=new u;e.a=v},function(t,e,a){"use strict";var o=a(7),n=a(88),i=a(79),s=a.n(i),l=a(76),r=a.n(l),d=a(77),c=a.n(d),u=a(1),v=a.n(u),m=a(75),f=a.n(m),h=a(78),p=a.n(h),_=a(15),b=a.n(_);o.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"dashboard",component:s.a},{path:"/todos",name:"todos",component:v.a},{path:"/goals",name:"goals",component:b.a},{path:"/goal/:id",name:"goal",component:p.a},{path:"/create/todo",name:"createtodo",component:r.a},{path:"/create/goal",name:"creategoal",component:f.a},{path:"/edit/todo/:id",name:"edittodo",component:c.a}]})},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function o(t){a(70)}var n=a(0)(a(25),a(86),o,null,null);t.exports=n.exports},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{pages:[{name:"Dashboard",url:"/",icon:"dashboard"},{name:"Goals",url:"/goals",icon:"view_agenda"},{name:"ToDos",url:"/todos",icon:"list"}],drawer:!1}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(34),n=a.n(o),i=a(1),s=a.n(i);e.default={name:"createGoal",created:function(){this.ids=JSON.parse(n()(this.$route.params.ids))},data:function(){return{dueDate:null,name:null,menu:!1,modalTime:!1,modal:!1,ids:[]}},methods:{createGoal:function(){var t=this;if(this.name&&this.ids&&0!=this.ids.length){var e=this;this.$root.$data.database.whenReady(function(){return t.$root.$data.database.addGoal(t.name,t.dueDate,t.ids,function(t,a){t||e.$router.push({name:"goal",params:{id:a}})})})}},goBack:function(){this.$router.go(-1)}},components:{ToDos:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"createToDo",data:function(){return{dueDate:null,dueTime:null,name:null,menuTime:!1,menu:!1,modalTime:!1,modal:!1}},methods:{createToDo:function(){var t=this;this.name&&(this.$root.$data.debug&&console.log(this.name,this.dueDate,this.dueTime),this.$root.$data.database.whenReady(function(){t.$root.$data.database.addToDo(t.name,t.dueDate,t.dueTime,function(e,a){if(t.$root.$data.debug&&console.log(t.$route.params.goalId),t.$route.params.goalId){var o=t.$root.$data.database.getGoal(t.$route.params.goalId);t.$root.$data.debug&&console.log("Goal: "+o),o.todo_ids.push(a),t.$root.$data.database.updateGoal(o),t.$router.push({name:"goal",params:{id:t.$route.params.goalId}})}else t.$router.push({name:"todos"})})}))},goBack:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(39),n=a.n(o);e.default={name:"editToDo",created:function(){var t=this;this.$root.$data.database.isReady()?this.buildData():this.$root.$data.database.whenReady(function(){t.buildData()})},data:function(){return{todo:null,menuTime:!1,menu:!1,modalTime:!1,modal:!1}},methods:{buildData:function(){this.todo=n()({},this.$root.$data.database.getToDo(this.$route.params.id))},editToDo:function(){this.todo.name&&(this.$root.$data.database.updateToDo(this.todo),this.$router.push("/"))},goBack:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1),n=a.n(o);e.default={name:"goal",created:function(){this.$root.$data.database.whenReady(this.buildData)},data:function(){return{goal:null,notFound:!1}},methods:{buildData:function(t){this.goal=t.getGoal(this.$route.params.id),this.goal||(this.notFound=!0)},goBack:function(){this.$router.go(-1)}},components:{ToDos:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1),n=a.n(o);e.default={name:"goals",props:["ids"],created:function(){var t=this;this.ids?(this.goals=[],this.ids.split(",").forEach(function(e){return t.goals.push(t.$root.$data.database.getGoal(e))})):this.$root.$data.database.whenReady(function(){return t.goals=t.$root.$data.database.getGoalsArray()})},data:function(){return{goals:[]}},methods:{viewGoal:function(t){this.$router.push({name:"goal",params:{id:t}})},deleteGoal:function(t){this.goals=this.goals.filter(function(e){return e!=t}),this.$root.$data.database.deleteGoal(t)}},components:{ToDos:n.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(1),n=a.n(o),i=a(15),s=a.n(i);e.default={name:"startPage",created:function(){var t=this;this.$root.$data.database.whenReady(function(){if(t.noTodos=t.$root.$data.database.getTodos().count()<1,t.noGoals=t.$root.$data.database.getGoals().count()<1,t.ready=!0,!t.noTodos){var e=t.$root.$data.database.getTodos().chain().find({dueDate:{$ne:null},done:{$ne:!0}}).simplesort("dueDate").limit(5).data();t.$root.$data.debug&&console.log(e);var a=[];e.forEach(function(t,e){return a.push(t._id)}),t.upcomingTodos=a.join(",");var o=t.$root.$data.database.getGoals().chain().find({dueDate:{$ne:null}}).simplesort("dueDate").limit(5).data();t.$root.$data.debug&&console.log(o);var n=[];o.forEach(function(t,e){return n.push(t._id)}),t.upcomingGoals=n.join(",")}})},data:function(){return{ready:!1,noTodos:!1,upcomingTodos:"",upcomingGoals:""}},methods:{},components:{ToDos:n.a,Goals:s.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"todos",props:["goal","ids","hideAddButton"],created:function(){var t=this;if(this.$root.$data.database.isReady()){if(this.noTodos=this.$root.$data.database.getTodos().count()<1,this.noTodos)return this.ready=!0,void this.$router.push({name:"dashboard"});this.buildData()}else this.$root.$data.database.whenReady(function(){if(t.noTodos=t.$root.$data.database.getTodos().count()<1,t.noTodos)return t.ready=!0,void t.$router.push({name:"dashboard"});t.buildData()})},data:function(){return{actions:[{text:"Delete",action:"delete",icon:"delete"}],actionSelected:"",selected:[],className:{},ready:!1,noTodos:!1,headers:[{text:"Name",value:"name"},{text:"Due Date",value:"dueDate"},{text:"Due Time",value:"dueTime"},{text:"Done",value:"done"},{text:"Actions",value:"actions"}],items:[]}},methods:{buildData:function(){var t=this;if(this.goal){this.ready=!0,this.items=[],this.actives={};for(var e=0;e<this.goal.todo_ids.length;e++){var a=null;(a=this.$root.$data.database.getToDo(this.goal.todo_ids[e]))&&(this.items.push(a),this.actives[a.name]=!1)}}else if(this.ids){this.ready=!0,this.items=[],this.actives={};for(var o="string"==typeof this.ids?this.ids.split(","):this.ids,n=0;n<o.length;n++){var i=null;(i=this.$root.$data.database.getToDo(o[n]))&&(this.items.push(i),this.actives[i.name]=!1)}}else{var s=this.$root.$data.database.getTodos().find({});if(this.$root.$data.debug&&console.log(s),0==s.length)return this.noTodos=!0,void this.$router.push({name:"dashboard"});this.ready=!0,this.actives={},this.items=s;for(var l=0;l<this.items.length;l++)this.actives[this.items[l].name]=!1;this.actions.push({text:"Make into Goal",action:"makegoal",icon:"done_all"})}this.$root.$data.selected=this.selected,this.$root.$data.actions=this.actions,this.$root.$data.handler=function(e){t.actionSelected=e,t.doTheThings()}},createtodo:function(){this.goal?this.$router.push({name:"createtodo",params:{goalId:this.goal._id}}):this.$router.push({name:"createtodo"})},updateToDo:function(t){t.done=!t.done,this.$root.$data.database.updateToDo(t),this.buildData()},deleteToDo:function(t){this.$root.$data.debug&&console.log(t),this.goal&&(this.goal.todo_ids=this.goal.todo_ids.filter(function(e){return e!=t._id}),this.$root.$data.database.updateGoal(this.goal)),this.$root.$data.database.deleteToDo(t),this.buildData()},editTodo:function(t){this.$root.$data.debug&&console.log(t),this.$router.push({name:"edittodo",params:{id:t._id}})},doTheThings:function(){var t=this;if(this.$root.$data.debug&&console.log(this.actionSelected,this.selected),this.actionSelected&&"delete"==this.actionSelected.action){for(var e=0;e<this.$root.$data.selected.length;e++){var a=this.$root.$data.selected[e];this.$root.$data.debug&&console.log(a),this.goal&&(this.goal.todo_ids=this.goal.todo_ids.filter(function(t,e){return t!=a._id}),this.$root.$data.database.whenReady(function(e){return e.updateGoal(t.goal)})),this.$root.$data.database.deleteToDo(a)}this.$root.$data.selected=[],this.buildData()}else if(this.actionSelected&&"makegoal"==this.actionSelected.action){for(var o=[],e=0;e<this.$root.$data.selected.length;e++)o.push(this.$root.$data.selected[e]._id);this.$root.$data.selected=[],this.$router.push({name:"creategoal",params:{ids:o}})}},select:function(t,e){this.$root.$data.debug&&console.log(document.getElementById(t._id)),this.$root.$data.selected.indexOf(t)>=0?(document.getElementsByName(t._id).forEach(function(t){return t.classList.remove("grey")}),this.$root.$data.selected=this.$root.$data.selected.filter(function(e){return e!=t}),this.$root.$data.debug&&console.log("de-selected: "+t)):(document.getElementsByName(t._id).forEach(function(t){return t.classList.add("grey")}),this.$root.$data.selected.push(t),this.$root.$data.debug&&console.log("selected: "+t))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(7),n=a(24),i=a.n(n),s=a(23),l=a.n(s),r=a(21),d=(a.n(r),a(19)),c=(a.n(d),a(20)),u=(a.n(c),a(18)),v=a(22),m=a.n(v),f=a(17);o.a.config.productionTip=!1,o.a.use(i.a),o.a.use(l.a,{name:"v-touch"}),window.vueApp=new o.a({el:"#app",router:u.a,template:"<App/>",components:{App:m.a},data:{database:f.a,selected:[],actions:[],handler:null,debug:!0}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){var o=a(0)(a(26),a(83),null,null,null);t.exports=o.exports},function(t,e,a){var o=a(0)(a(27),a(85),null,null,null);t.exports=o.exports},function(t,e,a){var o=a(0)(a(28),a(82),null,null,null);t.exports=o.exports},function(t,e,a){function o(t){a(71)}var n=a(0)(a(29),a(87),o,null,null);t.exports=n.exports},function(t,e,a){function o(t){a(68)}var n=a(0)(a(31),a(81),o,"data-v-28f88d55",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[t.ready?t._e():a("v-flex",{attrs:{xs1:"","offset-sm12":""}},[a("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:""}})],1),t._v(" "),a("v-slide-y-transition",[a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.ready&&!t.noTodos,expression:"ready && !noTodos"}],attrs:{xs12:""}},[a("v-card",{staticClass:"hidden-sm-and-down",attrs:{flat:!(!t.ids&&!t.goal)}},[a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-actions":"","selected-key":"_id","select-all":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[a("v-checkbox",{attrs:{primary:"","hide-details":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"props.selected"}})],1),t._v(" "),a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dueDate||"Never"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dueTime||"Never"))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[a("v-checkbox",{attrs:{primary:"","hide-details":"","input-value":e.item.done},nativeOn:{click:function(a){t.updateToDo(e.item)}}})],1),t._v(" "),a("td",{staticClass:"text-xs-right center"},[a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.deleteToDo(e.item)}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.editTodo(e.item)}}},[a("v-icon",[t._v("create")])],1)],1)]}}]),model:{value:t.$root.$data.selected,callback:function(e){t.$root.$data.selected=e},expression:"$root.$data.selected"}})],1)],1),t._v(" "),a("v-card",{staticClass:"hidden-sm-and-up",staticStyle:{padding:"0px"},attrs:{flat:!(!t.ids&&!t.goal)}},[a("v-list",t._l(t.items,function(e){return a("v-list-group",{key:e.name,attrs:{value:t.actives[e.name]},on:{contextmenu:function(t){t.stopPropagation(),t.preventDefault()}}},[a("v-touch",{on:{press:function(a){t.select(e)}},slot:"item"},[a("v-list-tile",{attrs:{name:e._id}},[a("v-checkbox",{staticStyle:{display:"inline"},attrs:{primary:"","hide-details":"","input-value":e.done},nativeOn:{click:function(a){a.stopPropagation(),t.updateToDo(e)}}}),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.dueDate,expression:"item.dueDate"}]},[t._v("event")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dueDate,expression:"item.dueDate"}]},[t._v(t._s(e.dueDate))]),t._v(" "),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.dueTime,expression:"item.dueTime"}]},[t._v("alarm")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dueTime,expression:"item.dueTime"}]},[t._v(t._s(e.dueTime))])],1)],1)],1)],1),t._v(" "),a("v-list-tile",{on:{click:function(t){}}},[a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.deleteToDo(e)}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.editTodo(e)}}},[a("v-icon",[t._v("create")])],1)],1)],1)}))],1),t._v(" "),a("v-card",{staticClass:"hidden-xs-only hidden-md-and-up",staticStyle:{padding:"0px"},attrs:{flat:!(!t.ids&&!t.goal)}},[a("v-list",{attrs:{"two-line":""}},[t._l(t.items,function(e){return[a("v-touch",{key:e.name,on:{press:function(a){t.select(e)}}},[a("v-list-tile",{attrs:{name:e._id},on:{contextmenu:function(t){t.stopPropagation(),t.preventDefault()}}},[a("v-checkbox",{staticStyle:{display:"inline"},attrs:{primary:"","hide-details":"","input-value":e.done},nativeOn:{click:function(a){t.updateToDo(e)}}}),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.dueDate,expression:"item.dueDate"}]},[t._v("event")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dueDate,expression:"item.dueDate"}]},[t._v(t._s(e.dueDate))]),t._v(" "),a("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.dueTime,expression:"item.dueTime"}]},[t._v("alarm")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.dueTime,expression:"item.dueTime"}]},[t._v(t._s(e.dueTime))])],1)],1),t._v(" "),a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.deleteToDo(e)}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-btn",{staticClass:"xs1 sm1",attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.editTodo(e)}}},[a("v-icon",[t._v("create")])],1)],1)],1)]})],2)],1)],1)],1),t._v(" "),a("v-fab-transition",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.ready&&!t.hideAddButton,expression:"ready && !hideAddButton"}],staticClass:"pink",staticStyle:{"margin-bottom":"3rem"},attrs:{absolute:"",fixed:"",dark:"",fab:"",bottom:"",right:""},nativeOn:{click:function(e){t.createtodo(e)}}},[a("v-icon",[t._v("add")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"content"}},[a("v-layout",{attrs:{row:""}},[a("v-fab-transition",[t.ready?a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[t.noTodos?a("v-card",{staticClass:"primary white"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("SO BLENK")])]),t._v(" "),a("v-card-text",[t._v("You have yet to create any ToDo, Ser User.")]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{flat:"",to:"/create/todo"}},[t._v("Create")])],1)],1):t._e()],1):t._e()],1),t._v(" "),t.ready?t._e():a("v-flex",{attrs:{"offset-sm6":""}},[a("v-progress-circular",{staticClass:"primary--text",attrs:{indeterminate:""}})],1)],1),t._v(" "),a("v-container",{attrs:{fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",[t.noTodos?t._e():a("v-card",{staticClass:"primary white"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("Upcoming ToDos")])]),t._v(" "),a("v-card-text",[""!=t.upcomingTodos?a("ToDos",{attrs:{ids:t.upcomingTodos,hideAddButton:!0}}):a("span",[t._v("Nothing left to do!")])],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{flat:"",to:"/todos"}},[t._v("View All")]),t._v(" "),a("v-btn",{staticClass:"pink--text",attrs:{flat:"",to:"/create/todo"}},[t._v("Create One")])],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",[t.noGoals?t._e():a("v-card",{staticClass:"primary white"},[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"headline mb-0"},[t._v("Upcoming Goals")])]),t._v(" "),a("v-card-text",[""!=t.upcomingGoals?a("Goals",{attrs:{ids:t.upcomingGoals}}):a("span",[t._v("No goals in the near future!")])],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{flat:"",to:"/goals"}},[t._v("View All")]),t._v(" "),a("v-btn",{staticClass:"pink--text",attrs:{flat:"",to:"/create/goal"}},[t._v("Create One")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-x-transition",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-toolbar",{staticClass:"purple",attrs:{flat:"",dark:""}},[a("v-toolbar-title",[t._v("Edit ToDo")])],1),t._v(" "),a("v-card",{staticClass:"primary white"},[a("v-card-text",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"create",required:""},model:{value:t.todo.name,callback:function(e){t.todo.name=e},expression:"todo.name"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.todo.dueDate,callback:function(e){t.todo.dueDate=e},expression:"todo.dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.todo.dueDate,callback:function(e){t.todo.dueDate=e},expression:"todo.dueDate"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.todo.dueDate,callback:function(e){t.todo.dueDate=e},expression:"todo.dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.todo.dueDate,callback:function(e){t.todo.dueDate=e},expression:"todo.dueDate"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menuTime,callback:function(e){t.menuTime=e},expression:"menuTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.todo.dueTime,callback:function(e){t.todo.dueTime=e},expression:"todo.dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.todo.dueTime,callback:function(e){t.todo.dueTime=e},expression:"todo.dueTime"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modalTime,callback:function(e){t.modalTime=e},expression:"modalTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.todo.dueTime,callback:function(e){t.todo.dueTime=e},expression:"todo.dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.todo.dueTime,callback:function(e){t.todo.dueTime=e},expression:"todo.dueTime"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-checkbox",{attrs:{primary:"","hide-details":"","input-value":t.todo.done,label:"Done"},nativeOn:{click:function(e){t.todo.done=!t.todo.done}}})],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{primary:"",flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.editToDo(e)}}},[t._v("Update")]),t._v(" "),a("v-btn",{staticClass:"red--text",attrs:{flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.goBack(e)}}},[t._v("Cancel")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-reverse-transition",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[a("v-toolbar",{staticClass:"purple",attrs:{flat:"",dark:""}},[a("v-toolbar-title",[t._v("New Goal")])],1),t._v(" "),a("v-card",{staticClass:"primary white"},[a("v-card-text",[a("form",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"create",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{label:"Date when Goal is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{label:"Date when Goal is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1)],1)],1)],1),t._v(" "),a("ToDos",{attrs:{ids:t.ids,hideAddButton:!0}})],1),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{primary:"",flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.createGoal(e)}}},[t._v("Create")]),t._v(" "),a("v-btn",{staticClass:"red--text",attrs:{flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.goBack(e)}}},[t._v("Cancel")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{flat:!!t.ids}},[a("v-list",{attrs:{"two-line":""}},[t._l(t.goals,function(e){return[a("v-list-tile",{key:e.name},[a("v-list-tile-content",[a("v-list-tile-title",{domProps:{innerHTML:t._s(e.name)}}),t._v(" "),a("v-list-tile-sub-title",{directives:[{name:"show",rawName:"v-show",value:e.dueDate,expression:"goal.dueDate"}]},[a("v-icon",[t._v("event")]),t._v(" "),a("span",[t._v(t._s(e.dueDate))])],1)],1),t._v(" "),a("v-btn",{attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.deleteGoal(e)}}},[a("v-icon",[t._v("delete")])],1),t._v(" "),a("v-btn",{attrs:{flat:"",icon:""},nativeOn:{click:function(a){t.viewGoal(e._id)}}},[a("v-icon",[t._v("keyboard_arrow_right")])],1)],1)]})],2)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-slide-y-reverse-transition",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-toolbar",{staticClass:"purple",attrs:{flat:"",dark:""}},[a("v-toolbar-title",[t._v("New ToDo")])],1),t._v(" "),a("v-card",{staticClass:"primary white"},[a("v-card-text",[a("form",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name","prepend-icon":"create",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{label:"Date when ToDo is due","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}}),t._v(" "),a("v-date-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueDate,callback:function(e){t.dueDate=e},expression:"dueDate"}})],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-menu",{staticClass:"hidden-xs-only",attrs:{lazy:"","close-on-content-click":!1,transition:"scale-transition","offset-y":"","full-width":"","nudge-left":40,"max-width":"290px"},model:{value:t.menuTime,callback:function(e){t.menuTime=e},expression:"menuTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}})],1),t._v(" "),a("v-dialog",{staticClass:"hidden-sm-and-up",attrs:{persistent:"",lazy:"","full-width":""},model:{value:t.modalTime,callback:function(e){t.modalTime=e},expression:"modalTime"}},[a("v-text-field",{attrs:{label:"Time when ToDo is due","prepend-icon":"alarm",readonly:""},slot:"activator",model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}}),t._v(" "),a("v-time-picker",{attrs:{scrollable:"",actions:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.save,n=e.cancel;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){n()}}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(t){o()}}},[t._v("Save")])],1)]}}]),model:{value:t.dueTime,callback:function(e){t.dueTime=e},expression:"dueTime"}})],1)],1)],1)],1)]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"blue--text",attrs:{primary:"",flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.createToDo(e)}}},[t._v("Create")]),t._v(" "),a("v-btn",{staticClass:"red--text",attrs:{flat:""},nativeOn:{click:function(e){e.stopPropagation(),t.goBack(e)}}},[t._v("Cancel")])],1)],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{temporary:"",light:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-toolbar",{staticClass:"transparent",attrs:{flat:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v("iPlan")])],1)],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-list",{staticClass:"pt-0",attrs:{dense:""}},t._l(t.pages,function(e){return a("v-list-tile",{key:e.name,attrs:{to:e.url}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)}))],1),t._v(" "),a("v-toolbar",{staticClass:"blue",attrs:{fixed:"",id:"main-toolbar",dark:"",dense:""}},[a("v-toolbar-side-icon",{nativeOn:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",[t._v("iPlan")]),t._v(" "),a("v-spacer"),t._v(" "),t._l(t.$root.$data.actions,function(e){return[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.$root.$data.selected.length>0,expression:"$root.$data.selected.length > 0"}],key:e.action,attrs:{icon:""},on:{click:function(a){t.$root.$data.handler?t.$root.$data.handler(e):t.console.log("No defined handler")}}},[a("v-icon",[t._v(t._s(e.icon))])],1)]})],2),t._v(" "),a("main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",[a("v-flex",{attrs:{xs12:"",sm10:"","offset-sm1":""}},[this.notFound?t._e():a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v(t._s(t.goal.name))])]),t._v(" "),a("v-card-text",[a("span",{directives:[{name:"show",rawName:"v-show",value:t.goal.dueDate,expression:"goal.dueDate"}]},[a("v-icon",[t._v("event")]),t._v(" "),a("span",[t._v(t._s(t.goal.dueDate))])],1),t._v(" "),a("ToDos",{attrs:{goal:t.goal}})],1)],1),t._v(" "),this.notFound?a("v-card",[a("v-card-title",[a("div",{staticClass:"headline"},[t._v("Goal Not Found")])]),t._v(" "),a("v-card-text",[t._v("There exists no goal with the specified ID")]),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:"",primary:""},nativeOn:{click:function(e){e.stopPropagation(),t.goBack()}}},[t._v("Back")])],1)],1):t._e()],1)],1)},staticRenderFns:[]}}],[33]);
//# sourceMappingURL=app.73ba7fb80796db31e814.js.map