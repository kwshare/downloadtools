(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1504:function(t,e,n){"use strict";var r=n(429);n.n(r).a},1505:function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".temperature_conversion .nya-input{margin-bottom:.9375rem}",""])},1571:function(t,e,n){"use strict";n.r(e);n(39);var r={name:"TemperatureConversion",head:function(){return this.$store.state.currentTool.head},data:function(){return{valC:"",valF:"",valK:"",valRa:"",valRe:""}},methods:{convert:function(t,e){if(t.length<1)this.clear();else{var n=0;switch(t=Number(t),e){case"C":n=t;break;case"F":n=(t-32)/1.8;break;case"K":n=t-273.15;break;case"Ra":n=(t-32-459.67)/1.8;break;case"Re":n=1.25*t}var r=function(i,n){return e===i?t:parseFloat(n.toFixed(2))};n=Number(n),this.valC=r("C",n),this.valF=r("F",1.8*n+32),this.valK=r("K",n+273.15),this.valRa=r("Ra",1.8*n+32+459.67),this.valRe=r("Re",.8*n)}},clear:function(){this.valC="",this.valF="",this.valK="",this.valRa="",this.valRe=""}}},l=(n(1504),n(2)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"temperature_conversion"},[n("nya-container",{attrs:{title:"温度单位转换"}},[n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"摄氏度",placeholder:"请输入摄氏度",value:t.valC,fullwidth:""},on:{input:function(e){return t.convert(e,"C")}}}),t._v(" "),n("br"),t._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"华氏度",placeholder:"请输入华氏度",value:t.valF,fullwidth:""},on:{input:function(e){return t.convert(e,"F")}}}),t._v(" "),n("br"),t._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"开氏度",placeholder:"请输入开氏度",value:t.valK,fullwidth:""},on:{input:function(e){return t.convert(e,"K")}}}),t._v(" "),n("br"),t._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"兰氏度",placeholder:"请输入兰氏度",value:t.valRa,fullwidth:""},on:{input:function(e){return t.convert(e,"Ra")}}}),t._v(" "),n("br"),t._v(" "),n("nya-input",{attrs:{type:"number",autocomplete:"off",label:"列氏度",placeholder:"请输入列氏度",value:t.valRe,fullwidth:""},on:{input:function(e){return t.convert(e,"Re")}}}),t._v(" "),n("br")],1)],1)},[],!1,null,null,null);e.default=component.exports},429:function(t,e,n){var content=n(1505);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(4).default)("39981e0d",content,!0,{sourceMap:!1})}}]);