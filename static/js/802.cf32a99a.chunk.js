"use strict";(self.webpackChunk_coreui_coreui_pro_react_admin_template_starter=self.webpackChunk_coreui_coreui_pro_react_admin_template_starter||[]).push([[802],{11802:function(e,r,s){s.r(r);var a=s(42982),t=s(70885),i=s(72791),n=s(77813),o=s(23177),d=s(80184);r.default=function(){var e=(0,i.useState)([]),r=(0,t.Z)(e,2),s=r[0],l=r[1],c=[{key:"name",_style:{width:"40%"},_props:{color:"primary",className:"fw-semibold"}},"registered",{key:"role",filter:!1,sorter:!1,_style:{width:"20%"}},{key:"status",_style:{width:"20%"}},{key:"show_details",label:"",_style:{width:"1%"},filter:!1,sorter:!1,_props:{color:"primary",className:"fw-semibold"}}],u=[{id:0,name:"John Doe",registered:"2018/01/01",role:"Guest",status:"Pending"},{id:1,name:"Samppa Nori",registered:"2018/01/01",role:"Member",status:"Active",_props:{color:"primary",align:"middle"}},{id:2,name:"Estavan Lykos",registered:"2018/02/01",role:"Staff",status:"Banned",_cellProps:{all:{className:"fw-semibold"},name:{color:"info"}}},{id:3,name:"Chetan Mohamed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:4,name:"Derick Maximinus",registered:"2018/03/01",role:"Member",status:"Pending"},{id:5,name:"Friderik D\xe1vid",registered:"2018/01/21",role:"Staff",status:"Active"},{id:6,name:"Yiorgos Avraamu",registered:"2018/01/01",role:"Member",status:"Active"},{id:7,name:"Avram Tarasios",registered:"2018/02/01",role:"Staff",status:"Banned",_props:{color:"warning",align:"middle"}},{id:8,name:"Quintin Ed",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:9,name:"En\xe9as Kwadwo",registered:"2018/03/01",role:"Member",status:"Pending"},{id:10,name:"Agapetus Tade\xe1\u0161",registered:"2018/01/21",role:"Staff",status:"Active"},{id:11,name:"Carwyn Fachtna",registered:"2018/01/01",role:"Member",status:"Active"},{id:12,name:"Nehemiah Tatius",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:13,name:"Ebbe Gemariah",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:14,name:"Eustorgios Amulius",registered:"2018/03/01",role:"Member",status:"Pending"},{id:15,name:"Leopold G\xe1sp\xe1r",registered:"2018/01/21",role:"Staff",status:"Active"},{id:16,name:"Pompeius Ren\xe9",registered:"2018/01/01",role:"Member",status:"Active"},{id:17,name:"Pa\u0109jo Jadon",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:18,name:"Micheal Mercurius",registered:"2018/02/01",role:"Admin",status:"Inactive"},{id:19,name:"Ganesha Dubhghall",registered:"2018/03/01",role:"Member",status:"Pending"},{id:20,name:"Hiroto \u0160imun",registered:"2018/01/21",role:"Staff",status:"Active"},{id:21,name:"Vishnu Serghei",registered:"2018/01/01",role:"Member",status:"Active"},{id:22,name:"\ub2e4\ub77c\ub9c8",registered:"2018/02/01",role:"Staff",status:"Banned"},{id:23,name:"\ub098\ub2e4\ub77c",registered:"2018/01/01",role:"Member",status:"Pending"},{id:42,name:"\uac00\ub098\ub2e4",registered:"2001/05/25",role:"Alien",status:"Don't panic!"}],m=function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:return"primary"}},g=function(e){var r=s.indexOf(e),t=s.slice();-1!==r?t.splice(r,1):t=[].concat((0,a.Z)(s),[e]),l(t)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.KB,{children:(0,d.jsxs)(n.rb,{children:[(0,d.jsxs)(n.b7,{xs:!0,children:[(0,d.jsx)(o.FR,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[40,20,12,39,10,40,39,80,40]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[50,12,28,29,7,25,12,70,60]}]}}),(0,d.jsx)(n.uE,{activePage:3,cleaner:!0,columns:c,items:u,pagination:!0,scopedColumns:{status:function(e){return(0,d.jsx)("td",{children:(0,d.jsx)(n.C_,{color:m(e.status),children:e.status})})},show_details:function(e){return(0,d.jsx)("td",{className:"py-2",children:(0,d.jsx)(n.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){g(e._id)},children:s.includes(e._id)?"Hide":"Show"})})},details:function(e){return(0,d.jsx)(n.V9,{visible:s.includes(e._id),children:(0,d.jsxs)(n.sl,{children:[(0,d.jsx)("h4",{children:e.username}),(0,d.jsxs)("p",{className:"text-muted",children:["User since: ",e.registered]}),(0,d.jsx)(n.u5,{size:"sm",color:"info",children:"User Settings"}),(0,d.jsx)(n.u5,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}},sorterValue:{column:"name",state:"asc"},tableFilter:!0,tableHeadProps:{color:"danger"},tableProps:{striped:!0,hover:!0}})]}),(0,d.jsxs)(n.b7,{xs:!0,children:[(0,d.jsx)(o.FR,{type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(220, 220, 220, 0.2)",borderColor:"rgba(220, 220, 220, 1)",pointBackgroundColor:"rgba(220, 220, 220, 1)",pointBorderColor:"#fff",data:[40,20,12,39,10,40,39,80,40]},{label:"My Second dataset",backgroundColor:"rgba(151, 187, 205, 0.2)",borderColor:"rgba(151, 187, 205, 1)",pointBackgroundColor:"rgba(151, 187, 205, 1)",pointBorderColor:"#fff",data:[50,12,28,29,7,25,12,70,60]}]}}),(0,d.jsx)(n.uE,{activePage:3,cleaner:!0,columns:c,items:u,pagination:!0,scopedColumns:{status:function(e){return(0,d.jsx)("td",{children:(0,d.jsx)(n.C_,{color:m(e.status),children:e.status})})},show_details:function(e){return(0,d.jsx)("td",{className:"py-2",children:(0,d.jsx)(n.u5,{color:"primary",variant:"outline",shape:"square",size:"sm",onClick:function(){g(e._id)},children:s.includes(e._id)?"Hide":"Show"})})},details:function(e){return(0,d.jsx)(n.V9,{visible:s.includes(e._id),children:(0,d.jsxs)(n.sl,{children:[(0,d.jsx)("h4",{children:e.username}),(0,d.jsxs)("p",{className:"text-muted",children:["User since: ",e.registered]}),(0,d.jsx)(n.u5,{size:"sm",color:"info",children:"User Settings"}),(0,d.jsx)(n.u5,{size:"sm",color:"danger",className:"ml-1",children:"Delete"})]})})}},sorterValue:{column:"name",state:"asc"},tableFilter:!0,tableHeadProps:{color:"danger"},tableProps:{striped:!0,hover:!0}})]})]})})})}}}]);
//# sourceMappingURL=802.cf32a99a.chunk.js.map