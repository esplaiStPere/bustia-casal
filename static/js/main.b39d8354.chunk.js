(this["webpackJsonpbustia-esplai"]=this["webpackJsonpbustia-esplai"]||[]).push([[0],{22:function(e,a,t){e.exports=t(32)},27:function(e,a,t){},28:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(8),l=t.n(o),i=(t(27),t(28),t(14)),c=t(6),m=t(13),u=t(11),s=t(10),d=t(20),E=t(21);function g(){var e=Object(r.useState)(!1),a=Object(i.a)(e,2),t=a[0],o=a[1],l=Object(r.useState)(!1),g=Object(i.a)(l,2),v=g[0],p=g[1],f=Object(r.useState)(!1),h=Object(i.a)(f,2),b=h[0],y=h[1],w=[{nom:"Tots els monitors i monitores",correu:"notetesstpere@gmail.com",id:0},{nom:"Aina",correu:"ainaamora21@gmail.com",id:1},{nom:"Alba",correu:"carrilloamat@gmail.com",id:2},{nom:"Ari",correu:"ariadnablanes12@gmail.com",id:3},{nom:"Carla",correu:"carlafluri@hotmail.com",id:4},{nom:"Clara",correu:"clara@garrit.cat",id:5},{nom:"Eli",correu:"2000elicm@gmail.com",id:6},{nom:"Enric",correu:"Enrixcid@gmail.com",id:7},{nom:"Eric",correu:"ericrodatrifol@gmail.com",id:8},{nom:"Gigi",correu:"georginaverdaguer97@gmail.com",id:9},{nom:"Isi",correu:"i.puigferrat@gmail.com",id:10},{nom:"JP",correu:"joanpaucm28@gmail.com",id:11},{nom:"Laia",correu:"laiadf777@gmail.com",id:12},{nom:"Laura",correu:"lauralardies15@gmail.com",id:13},{nom:"Marc",correu:"maliguer@alumni.unav.es",id:14},{nom:"Maria",correu:"mariamoller10@gmail.com",id:15},{nom:"Mimi",correu:"mimigomez4@gmail.com",id:16},{nom:"Nati",correu:"nmolleribas@gmail.com",id:17},{nom:"Oriol Mora",correu:"oriol_mora@hotmail.com",id:18},{nom:"Oriol Serra",correu:"uri.serra26@gmail.com",id:19},{nom:"Santi",correu:"santi.claret@outlook.com",id:20},{nom:"Tere",correu:"teresa.puigferrat@gmail.com",id:21},{nom:"Zalaya",correu:"mynameisvzalaya@gmail.com",id:22}],N=w.map((function(e){return n.a.createElement("option",{value:e.id,key:e.id},e.nom)}));return n.a.createElement("div",{className:"MainForm"},n.a.createElement(c.a,{id:"form",onSubmit:function(e){y(!0);var a=document.getElementById("NomInfant"),t=document.getElementById("monisSelect"),r=document.getElementById("noteta"),n=document.getElementById("replyEmail"),l={from_name:a.value,to_name:w[t.value].nom,message_html:r.value,send_to:w[t.value].correu,reply_to:n.value};console.log(l),e.preventDefault(),window.emailjs.send("gmail","template_NzzwThX7",l).then((function(e){console.log("Missatge enviat!"),y(!1),o(!0)})).catch((function(e){console.log("Missatge no enviat!"),y(!1),p(!0)}))}},n.a.createElement(u.a,{controlId:"NomInfant"},n.a.createElement(c.a.Label,null,"Escriu aqu\xed el teu nom"),n.a.createElement(c.a.Control,{required:!0,type:"text",placeholder:"El teu nom"})),n.a.createElement(c.a.Group,{controlId:"monisSelect"},n.a.createElement(c.a.Label,null,"A quin monitor/a li vols enviar la noteta?"),n.a.createElement(c.a.Control,{as:"select",defaultChecked:"Tots els monitors i monitores"},N)),n.a.createElement(c.a.Group,{required:!0,controlId:"noteta"},n.a.createElement(c.a.Label,null,"Escriu aqu\xed la noteta"),n.a.createElement(c.a.Control,{as:"textarea",rows:"5"})),n.a.createElement(c.a.Group,{controlId:"replyEmail"},n.a.createElement(c.a.Label,null,"Si vols que el monitor/a et respongui, escriu el teu correu aqu\xed!"),n.a.createElement(c.a.Control,{type:"email",placeholder:"Escriu el teu correu aqu\xed"}),n.a.createElement(c.a.Text,{className:"text-muted"},"Assegura't que l'escrius b\xe9!")),n.a.createElement(s.a,{show:t,variant:"success"},n.a.createElement(s.a.Heading,null,"Missatge enviat correctament!"),n.a.createElement("p",null,"Ara ja pots esborrar la noteta o alg\xfa altre la podr\xe0 llegir!"),n.a.createElement("hr",null),n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement(m.a,{onClick:function(){return window.location.reload(!1)},variant:"outline-success"},"Esborra la noteta!"))),n.a.createElement(s.a,{show:v,variant:"danger"},n.a.createElement(s.a.Heading,null,"Hi ha hagut un error a l'enviar la nota!"),n.a.createElement("p",null,"Prova a refrescar la p\xe0gina i tornar a escriure la nota"),n.a.createElement("hr",null),n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement(m.a,{onClick:function(){return window.location.reload(!1)},variant:"outline-danger"},"Refresca la p\xe0gina"))),n.a.createElement(d.a,null,n.a.createElement(E.a,{className:"loadButton"},n.a.createElement(m.a,{variant:"primary",type:"submit",id:"enviar"},n.a.createElement("span",{className:"buttonText"},"Enviar noteta"),b?n.a.createElement("div",{className:"loaderContainer"}," ",n.a.createElement("div",{className:"loader"})," "):null)))))}function v(){return n.a.createElement("div",{className:"headerStyle"},n.a.createElement("h1",{className:"mainTitle"},"B\xfastia"))}var p=function(){return n.a.createElement("div",{className:"left"},n.a.createElement(v,null))};var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null),n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.b39d8354.chunk.js.map