import{h as e,w as a,g as o,o as s,f as l,j as t,m as i,e as r,s as n,n as c,l as d,T as u}from"./vendor.a8ae3ece.js";import{o as v}from"./DuplicateIcon.ac259e36.js";const p={name:"TwDropdown",props:{origin:{type:String,default:"left",validator:e=>["left","right"].includes(e)},bodyClass:{type:[String,Array,Object],default:""},hideOnClick:{type:Boolean},trigger:{type:String,default:"click",validator:e=>["click","hover"].includes(e)}},emits:["show","hide"],setup(s,{emit:l}){const t=e(!1);a(t,(e=>{l("show",e.value),l("hide",!e.value)}));const i=o((()=>[`origin-top-${s.origin}`,`${s.origin}-0`,s.bodyClass])),r="click"===s.trigger,n=!r,c=e(null);return v(c,(()=>t.value=!1)),{open:t,extraBodyClass:i,click:()=>{r&&(t.value=!t.value)},hover:()=>{n&&(t.value=!0)},leave:()=>{n&&(t.value=!1)},bodyClick:()=>{s.hideOnClick&&(t.value=!1)},dropdownRef:c}}};p.render=function(e,a,o,v,p,y){return s(),l("div",{ref:"dropdownRef",class:"relative inline-block",onMouseleave:a[3]||(a[3]=e=>v.leave())},[t("span",{onClick:a[0]||(a[0]=(...e)=>v.click&&v.click(...e)),onMouseover:a[1]||(a[1]=e=>v.hover())},[i(e.$slots,"default")],32),r(u,{"enter-from-class":"opacity-0 scale-75","enter-active-class":"transition duration-75 ease-out-quad","enter-to-class":"opacity-100 scale-100","leave-from-class":"opacity-100 scale-100","leave-active-class":"transition duration-150 ease-in-quad","leave-to-class":"opacity-0 scale-75"},{default:n((()=>[v.open?(s(),l("div",{key:0,class:c(["transform w-52 py-2 absolute z-10 bg-white border border-gray-200 rounded-md",v.extraBodyClass]),onClick:a[2]||(a[2]=e=>v.bodyClick())},[i(e.$slots,"body")],2)):d("",!0)])),_:3})],544)};export{p as _};
