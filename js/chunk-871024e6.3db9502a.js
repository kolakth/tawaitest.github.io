(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-871024e6"],{"578a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"bodyContent"},[r("v-row",{staticClass:"text-left"},[r("v-col",{attrs:{cols:"12",md:"7"}},[r("div",{},[r("div",{staticClass:"text_title hidden-xs-only"},[e._v(" TaWai for Health "),r("div",{staticClass:"text_content mr-12 hidden-xs-only"},[e._v(" Platform และกลไกเพื่อการจัดการความปลอดภัย ด้านผลิตภัณฑ์สุขภาพและการโฆษณา เพื่อการรายงานและแจ้งเตือนข้อมูลคุณภาพ "),r("div",{attrs:{align:"center"}},[r("v-img",{staticClass:"hidden-xs-only",attrs:{transition:"scale-transition",origin:"center center",src:"http://www.tawainetwork.org/assetmaterials/regis.png",contain:"","max-height":"400","max-width":"450"}})],1)])])])]),r("v-col",{attrs:{cols:"12",md:"5"}},[r("div",{staticClass:"pa-4"},[r("span",{staticClass:"text_question"},[e._v("ลงชื่อเข้าใช้งาน")]),r("br"),r("span",{staticClass:"text_content"},[e._v("ใช้บัญชีตาไวของคุณ")]),r("div",{staticClass:"pt-8"},[r("v-text-field",{attrs:{label:"อีเมลผู้ใช้งาน",outlined:"",rounded:"","error-messages":e.emailErrors,required:""},on:{input:function(t){return e.$v.userAuth.email.$touch()},blur:function(t){return e.$v.userAuth.email.$touch()}},model:{value:e.userAuth.email,callback:function(t){e.$set(e.userAuth,"email",t)},expression:"userAuth.email"}}),r("v-text-field",{attrs:{label:"รหัสผ่าน",outlined:"",rounded:"","append-icon":e.hidePWD?"mdi-eye":"mdi-eye-off",type:e.hidePWD?"text":"password","error-messages":e.pwdErrors,required:""},on:{"click:append":function(t){e.hidePWD=!e.hidePWD},input:function(t){return e.$v.userAuth.email.$touch()},blur:function(t){return e.$v.userAuth.pwd.$touch()}},model:{value:e.userAuth.pwd,callback:function(t){e.$set(e.userAuth,"pwd",t)},expression:"userAuth.pwd"}}),r("v-btn",{staticClass:"my-6",attrs:{depressed:"",block:"",rounded:"","x-large":"",color:"#00B5F8",dark:""},on:{click:e.click_login}},[e._v(" เข้าสู่ระบบ")]),r("v-btn",{attrs:{ripple:!1,"retain-focus-on-click":!1,text:"",block:"",rounded:"",large:"",color:"#00B5F8"},on:{click:e.click_forgetPwd}},[e._v("ลืมรหัสผ่านหรือไม่")]),r("v-row",[r("v-col",{attrs:{align:"center"}},[r("span",{staticClass:"text_content"},[e._v("หากคุณยังไม่ได้เป็นสมาชิก ")]),r("router-link",{attrs:{to:"/register"}},[e._v("สมัครเลย")])],1)],1)],1)])])],1)],1)},s=[],i=(r("d3b7"),r("96cf"),r("1da1")),a=r("1dce"),o=r("b5ae"),u=r("e366"),c={mixins:[a["validationMixin"]],validations:{userAuth:{email:{required:o["required"],email:o["email"]},pwd:{required:o["required"],minLength:Object(o["minLength"])(6)}}},data:function(){return{hidePWD:!1,getAccessStatus:!0,userAuth:{email:"",pwd:""}}},computed:{emailErrors:function(){var e=[];return this.$v.userAuth.email.$dirty?(!this.$v.userAuth.email.email&&e.push("รูปแบบของอีเมลไม่ถูกต้อง"),!this.$v.userAuth.email.required&&e.push("กรุณาระบุอีเมลผู้ใช้งาน"),this.getAccessStatus||e.push("ตรวจสอบอีเมลอีกครั้ง"),e):e},pwdErrors:function(){var e=[];return this.$v.userAuth.pwd.$dirty?(!this.$v.userAuth.pwd.minLength&&e.push("กรุณาระบุรหัสผ่านอย่างน้อย 6 ตัวอักษร"),!this.$v.userAuth.pwd.required&&e.push("กรุณาระบุรหัสผ่าน"),this.getAccessStatus||e.push("ตรวจสอบรหัสผ่านอีกครั้ง"),e):e}},methods:{click_login:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$v.$touch(),!(e.userAuth.email.length>0&&e.userAuth.pwd.length>0)){t.next=4;break}return t.next=4,fetch("http://www.tawainetwork.org/webBackendPHP/login.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userEmail:e.userAuth.email,userPWD:e.userAuth.pwd})}).then((function(e){return e.json()})).then((function(t){if("success"==t[0]["status"]){localStorage.setItem("userToken",t[1]["TokenSession"]),localStorage.setItem("userID",t[1]["UserId"]),localStorage.setItem("userRole",t[1]["Role"]);var r={status:"logged_in",role:t[1]["Role"],ID:t[1]["UserId"],Token:t[1]["TokenSession"]};u["a"].$emit("userACCESS",r),e.$router.push("mainuser")}else e.getAccessStatus=!1})).catch((function(e){console.log("ERR.loginRequest: ",e)}));case 4:case"end":return t.stop()}}),t)})))()},checkUserAuth_local:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=localStorage.getItem("userToken"),!r){t.next=7;break}return n=localStorage.getItem("userID"),t.next=5,fetch("http://www.tawainetwork.org/webBackendPHP/recheckSession.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userID:n,userToken:r})}).then((function(e){return e.json()})).then((function(t){"failed"==t[0]["status"]?(localStorage.removeItem("userToken"),localStorage.removeItem("userID"),localStorage.removeItem("userRole"),e.$router.push("login")):e.$router.push("mainuser")})).catch((function(e){console.log("ERR.requestAccess.Session_login: ",e)}));case 5:t.next=8;break;case 7:e.$router.push("login");case 8:case"end":return t.stop()}}),t)})))()},click_forgetPwd:function(){}},mounted:function(){this.checkUserAuth_local()}},l=c,d=(r("7937"),r("2877")),h=r("6544"),p=r.n(h),m=r("8336"),g=r("62ad"),v=r("a523"),f=r("adda"),w=r("0fd9"),k=r("8654"),A=Object(d["a"])(l,n,s,!1,null,"0d2d4991",null);t["default"]=A.exports;p()(A,{VBtn:m["a"],VCol:g["a"],VContainer:v["a"],VImg:f["a"],VRow:w["a"],VTextField:k["a"]})},7937:function(e,t,r){"use strict";var n=r("d5c1"),s=r.n(n);s.a},d5c1:function(e,t,r){}}]);
//# sourceMappingURL=chunk-871024e6.3db9502a.js.map