(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1215:function(t,e,n){"use strict";n.r(e);n(11),n(32),n(21),n(26),n(38),n(39);var l=n(9),o=(n(168),n(55)),main=n(107),c=n(65),r=n(105),d=n(106);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=new Date,h=f.getFullYear(),y=f.getMonth(),C=(f.getDate(),{name:"big-calendar",layout:"DashboardLayout",components:{Modal:o.a,FullCalendar:main.a},data:function(){var t=y+1>10?y+1:"0".concat(y+1),e="".concat(h,"-").concat(t);return{calendarOptions:{plugins:[c.b,r.a,d.a],initialView:"dayGridMonth",contentHeight:"auto",headerToolbar:!1,selectable:!0,selectHelper:!0,dateClick:this.onDateClick,eventClick:this.onEventClick,editable:!0,events:[{title:"Call with Dave",start:"".concat(e,"-18"),end:"".concat(e,"-18"),className:"bg-red",allDay:!0},{title:"Lunch meeting",start:"".concat(e,"-21"),end:"".concat(e,"-22"),className:"bg-orange",allDay:!0},{title:"All day conference",start:"".concat(e,"-29"),end:"".concat(e,"-29"),className:"bg-green",allDay:!0},{title:"Meeting with Mary",start:"".concat(e,"-01"),end:"".concat(e,"-01"),className:"bg-blue",allDay:!0},{title:"Winter Hackaton",start:"".concat(e,"-03"),end:"".concat(e,"-03"),className:"bg-red",allDay:!0},{title:"Digital event",start:"".concat(e,"-07"),end:"".concat(e,"-09"),className:"bg-orange",allDay:!0},{title:"Marketing event",start:"".concat(e,"-10"),end:"".concat(e,"-10"),className:"bg-purple",allDay:!0},{title:"Dinner with Family",start:"".concat(e,"-19"),end:"".concat(e,"-19"),className:"bg-red",allDay:!0},{title:"Black Friday",start:"".concat(e,"-23"),end:"".concat(e,"-23"),className:"bg-blue",allDay:!0},{title:"Cyber Week",start:"".concat(e,"-02"),end:"".concat(e,"-02"),className:"bg-yellow",allDay:!0}]},defaultView:"",showAddModal:!1,showEditModal:!1,model:{title:"",className:"bg-default",description:"Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",start:"",end:""},eventColors:["bg-info","bg-orange","bg-red","bg-green","bg-default","bg-blue","bg-purple","bg-yellow"]}},methods:{calendarApi:function(){return console.log(this.$refs.fullCalendar.getApi()),this.$refs.fullCalendar.getApi()},changeView:function(t){this.defaultView=t,this.calendarApi().changeView(t)},next:function(){this.calendarApi().next()},prev:function(){this.calendarApi().prev()},onDateClick:function(t){var e=t.date;this.showAddModal=!0,this.model.start=e,this.model.end=e},onEventClick:function(t){t.el;var e=t.event;this.model={title:e.title,className:e.classNames?e.classNames.join(" "):"",start:e.start,end:e.end,description:"Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."},this.showEditModal=!0},saveEvent:function(){if(this.model.title){var t=m(m({},this.model),{},{allDay:!0});this.calendarOptions.events.push(JSON.parse(JSON.stringify(t))),this.model={title:"",eventColor:"bg-danger",start:"",end:""}}this.showAddModal=!1},editEvent:function(){var t=this,e=this.calendarOptions.events.findIndex((function(e){return e.title===t.model.title}));1!==e&&this.calendarOptions.events.splice(e,1,this.model),this.showEditModal=!1},deleteEvent:function(){var t=this,e=this.calendarOptions.events.findIndex((function(e){return e.title===t.model.title}));-1!==e&&this.calendarOptions.events.splice(e,1),this.showEditModal=!1}}}),w=n(7),component=Object(w.a)(C,(function(){var t=this,e=t._self._c;return e("div",[e("base-header",{staticClass:"pb-6 content__title content__title--calendar"},[e("div",{staticClass:"row align-items-center py-4"},[e("div",{staticClass:"col-lg-6 col-7"},[e("h6",{staticClass:"h2 text-white d-inline-block mb-0"},[t._v(t._s(t.$route.name))]),t._v(" "),e("nav",{staticClass:"d-none d-md-inline-block ml-md-4",attrs:{"aria-label":"breadcrumb"}},[e("route-breadcrumb")],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 mt-3 mt-lg-0 text-lg-right"},[e("a",{staticClass:"fullcalendar-btn-prev btn btn-sm btn-default",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.prev.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-angle-left"})]),t._v(" "),e("a",{staticClass:"fullcalendar-btn-next btn btn-sm btn-default",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.next.apply(null,arguments)}}},[e("i",{staticClass:"fas fa-angle-right"})]),t._v(" "),e("base-button",{staticClass:"btn btn-sm btn-default",class:{active:"dayGridMonth"===t.defaultView},on:{click:function(e){return t.changeView("dayGridMonth")}}},[t._v("\n          Month\n        ")])],1)])]),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card card-calendar"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body p-0 card-calendar-body"},[e("full-calendar",{ref:"fullCalendar",attrs:{options:t.calendarOptions}})],1)])])])]),t._v(" "),e("modal",{attrs:{show:t.showAddModal,"modal-classes":"modal-secondary"},on:{"update:show":function(e){t.showAddModal=e}}},[e("form",{staticClass:"new-event--form",on:{submit:function(e){return e.preventDefault(),t.saveEvent.apply(null,arguments)}}},[e("base-input",{attrs:{label:"Event title",placeholder:"Event Title","input-classes":"form-control-alternative new-event--title"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}}),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label d-block mb-3"},[t._v("Status color")]),t._v(" "),e("div",{staticClass:"btn-group btn-group-toggle btn-group-colors event-tag"},t._l(t.eventColors,(function(n){return e("label",{key:n,staticClass:"btn",class:[n,{"active focused":t.model.className===n}]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.className,expression:"model.className"}],attrs:{type:"radio",name:"event-tag",autocomplete:"off"},domProps:{value:n,checked:t._q(t.model.className,n)},on:{change:function(e){return t.$set(t.model,"className",n)}}})])})),0)]),t._v(" "),e("input",{staticClass:"new-event--start",attrs:{type:"hidden"}}),t._v(" "),e("input",{staticClass:"new-event--end",attrs:{type:"hidden"}})],1),t._v(" "),e("template",{slot:"footer"},[e("button",{staticClass:"btn btn-primary new-event--add",attrs:{type:"submit"},on:{click:t.saveEvent}},[t._v("Add event")]),t._v(" "),e("button",{staticClass:"btn btn-link ml-auto",attrs:{type:"button"},on:{click:function(e){t.showAddModal=!1}}},[t._v("Close")])])],2),t._v(" "),e("modal",{attrs:{show:t.showEditModal,"modal-classes":"modal-secondary"},on:{"update:show":function(e){t.showEditModal=e}}},[e("form",{staticClass:"edit-event--form",on:{submit:function(e){return e.preventDefault(),t.editEvent.apply(null,arguments)}}},[e("base-input",{attrs:{label:"Event title",placeholder:"Event Title","input-classes":"form-control-alternative new-event--title"},model:{value:t.model.title,callback:function(e){t.$set(t.model,"title",e)},expression:"model.title"}}),t._v(" "),e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label d-block mb-3"},[t._v("Status color")]),t._v(" "),e("div",{staticClass:"btn-group btn-group-toggle btn-group-colors event-tag"},t._l(t.eventColors,(function(n){return e("label",{key:n,staticClass:"btn",class:[n,{"active focused":t.model.className===n}]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.model.className,expression:"model.className"}],attrs:{type:"radio",name:"event-tag",autocomplete:"off"},domProps:{value:n,checked:t._q(t.model.className,n)},on:{change:function(e){return t.$set(t.model,"className",n)}}})])})),0)]),t._v(" "),e("base-input",{attrs:{label:"Description"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.model.description,expression:"model.description"}],staticClass:"form-control form-control-alternative edit-event--description textarea-autosize",attrs:{placeholder:"Event Desctiption"},domProps:{value:t.model.description},on:{input:function(e){e.target.composing||t.$set(t.model,"description",e.target.value)}}}),t._v(" "),e("i",{staticClass:"form-group--bar"})]),t._v(" "),e("input",{staticClass:"new-event--start",attrs:{type:"hidden"}}),t._v(" "),e("input",{staticClass:"new-event--end",attrs:{type:"hidden"}})],1),t._v(" "),e("template",{slot:"footer"},[e("base-button",{staticClass:"new-event--add",attrs:{"native-type":"submit",type:"primary"},on:{click:t.editEvent}},[t._v("Update")]),t._v(" "),e("base-button",{attrs:{type:"danger"},on:{click:t.deleteEvent}},[t._v("Delete")]),t._v(" "),e("base-button",{staticClass:"ml-auto",attrs:{type:"link"},on:{click:function(e){t.showEditModal=!1}}},[t._v("Close")])],1)],2)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Calendar")])])}],!1,null,null,null);e.default=component.exports}}]);