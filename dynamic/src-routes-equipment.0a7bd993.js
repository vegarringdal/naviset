__fuse.bundle({9:function(e,t,n){var a=e(13);t.__esModule=!0;var i=e(12),o=e(14),r=e(15),s=e(16),l=e(17),c=e(18);let x=class extends HTMLElement{constructor(){super(...arguments),this.textarea=""}render(){return i.html`<section class="flex flex-col items-center text-gray-200"><ol class=text-center><li>Copy columns from excel</li><li>Need 2 columns: <b>workpack</b> & <b>tag</b></li><li>It will skip row 1</li></ol><label class="mt-2 text-xs italic">Paste you data here:</label> <textarea class="m-1 wpx-500 w-full hpx-500 p-1 bg-gray-200 text-gray-800" .value=${this.textarea} @change=${this.textUpdate}>
                </textarea><div class="wpx-500 w-full flex flex-col m-1"><button class="p-2 bg-indigo-700 m-1" @click=${this.generate}>Generate equipment search set ✨</button> <button class="p-2 bg-red-700 m-1" @click=${this.clear}>Clear</button></div><div class=text-red-800>${this.errorMsg}</div></section>`}clear(){this.textarea=""}textUpdate(e){this.textarea=e.target.value,e.target.scrollTop=0}generate(){try{if(!this.textarea)throw"missing data, please read before you click";let e=this.textarea.split("\n"),t=[],n=[],a="";if(e.length<2)throw"missing data, paste in more then 1 row";e.shift(),e.forEach(e=>{const i=e.split("\t");if(i.length<1)throw"missing data, need 2 columns, workpack and tag";a!==i[0]?(a&&n.push(r.createSelectionSet(a,t.join(""))),a=i[0],t=[]):t.push(c.createCondition("/"+i[1]))});let i=new Date,o=i.getDate().toString();o=2===o.toString().length?o:`0${o}`;let x=i.getMonth().toString()+1;x=2===x.toString().length?x:`0${x}`;let d=i.getFullYear();l.makefile(`Navi-${d}_${x}_${o}__${i.getTime()}`,s.generateXml(n.join("")))}catch(e){this.errorMsg=e}}};a.d([o.property(),a.m("design:type",String)],x.prototype,"textarea",void 0),a.d([o.property(),a.m("design:type",String)],x.prototype,"errorMsg",void 0),x=a.d([o.customElement("equipment-route")],x),t.default=x},41:function(e,t,n){t.uuidv4=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}},15:function(e,t,n){t.__esModule=!0;var a=e(41);t.createSelectionSet=function(e,t){return`\n    <selectionset name="${e}" guid="${a.uuidv4()}">\n        <findspec mode="all" disjoint="0">\n            <conditions>${t}\n            </conditions>\n            <locator>/</locator>\n        </findspec>\n    </selectionset>\n`}},16:function(e,t,n){t.generateXml=function(e){return`<?xml version="1.0" encoding="UTF-8" ?>\n<exchange xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://download.autodesk.com/us/navisworks/schemas/nw-exchange-12.0.xsd" units="m">\n    <selectionsets>${e}\n    </selectionsets>\n</exchange>`}},17:function(e,t,n){t.makefile=function(e,t){var n=new Blob([t],{type:"application/xml"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(n,e);else{var a=window.document.createElement("a");a.href=window.URL.createObjectURL(n),a.download=e,document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},18:function(e,t,n){t.createCondition=function(e="/T-82EL201",t="Name",n="LcOaSceneBaseUserName",a="equals",i=74){return`\n                <condition test="${a}" flags="${i}">\n                    <property>\n                        <name internal="${n}">${t}</name>\n                    </property>\n                    <value>\n                        <data type="wstring">${e}</data>\n                    </value>\n                </condition>`}}});