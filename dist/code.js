/* 
  * CodeJS @' + 10/27/2017, 4:56:25 PM + '
  */
!function(a){function b(a){function b(){return w&&/[\v\t ]/.test(w)}function c(){return w&&/[a-zA-Z_-]/.test(w)}function d(){return w&&/[0-9]/.test(w)}function e(){return w&&/\n/.test(w)}function f(){return-1!=="~`!@#$%^&*()-_+=[]{}\\;:'\"|,.<>/?".indexOf(w)}function i(){return-1!==t.indexOf(y)}function j(){return u.hasOwnProperty(y)}function n(){for(x=h,y=w;;){if(w=a[++A],!b()){v();break}y+=w}}function q(){for(y=w;;){if(w=a[++A],!c()&&!d())break;y+=w}}function v(){z.push([y,x]),y=x=""}var w,x,y,z=[],A=0;a=Object(a);for(var B=0;;){if(w=a[A],B++,B>1200)throw A;if(console.log(w),!w)break;if("."===w||"#"===w)c()?(q(),x=p,v()):(x=k,y=w,v(),A++);else if("."===w||"#"===w)c()?(q(),x=p,v()):(x=k,y=w,v(),A++);else if(":"===w&&":"===g[A+1])v(),A+=2;else{if(f()){x=m,y=w,v(),A++;continue}e()?(x=o,y=w,v(),A++):b()?n():c()?(q(),i()?(x=l,v()):j()?(x=r+s,v()):(x=m,v())):d()?q():(x=m,y=w,A++,v())}}return z}function c(a){function c(){return s&&/[\v\t ]/.test(s)}function e(){return s&&/[a-zA-Z_-]/.test(s)}function f(){return s&&/[0-9]/.test(s)}function g(){return s&&/\n/.test(s)}function i(){return-1!=="~`!@#$%^&*()-_+=[]{}\\;:'\"|,.<>/?".indexOf(s)}function j(){for(t=h,u=s;;){if(s=a[++x],!c()){r();break}u+=s}}function k(){for(t=p,u=s;s=a[++x];){if(!e()&&!f()){r();break}u+=s}for(;;)if(s=a[x],g())t=o,u=s,x++,r();else{if(!c())break;j()}if("="===s)if(u=s,t=m,x++,r(),c()&&j(),s=a[x],'"'===s||"'"===s){var b=s;for(t=q,u=s;s=a[++x];){if(s===b){u+=s,x++,r();break}g()?(r(),t=o,u=s,x++,r()):u+=s}}else if(s&&!g()&&">"!==s)for(t=q,u=s;;){if(s=a[++x],!s||g()||">"===s||" "===s){r();break}u+=s}}function n(c){return"script"===c&&(c="codejs"),v=a.indexOf("</"+c+">",x),-1!==v?(w="style"===c?w.concat(b(a.substring(x,v))):w.concat(d(a.substring(x,v))),x=v,1):void 0}function r(){w.push([u,t]),u=t=""}var s,t,u,v,w=[],x=0;for(a=Object(a);;){if(s=a[x],!s)break;if("<"===s){if(t=m,u=s,r(),s=a[++x],("!"===s||"?"===s||"/"===s)&&(u=s,t=m,r(),x++),s=a[x],e()){for(t=l,u=s;;){if(s=a[++x],!e()&&!f()){"codejs"===u&&(u="script"),v=u,r();break}u+=s}for(;s=a[x];){if(">"===s){u=s,t=m,x++,r();break}if(c())j();else if('"'===s||"'"===s){t=q;var y=s;for(u=s;s=a[++x];){if(s===y){u+=s,x++,r();break}u+=s}}else e()||f()?k():i()?(console.log(111),u=s,t=m,x++,r()):g()?(t=o,u=s,x++,r()):(t="error",u=s,x++,r())}}}else if(g())t=o,u=s,x++,r();else if(c())j();else{if(t=m,u=s,("script"===v||"style"===v)&&n(v))continue;for(;;){if(s=a[++x],!s||g()||"<"===s){r();break}u+=s}}}return w}function d(a){function b(){return"\n"===G||"\r"===G}function c(){return" "===G||"	"===G}function d(){return G&&/[a-zA-Z_]/.test(G)}function e(){return G&&/[0-9]/.test(G)}function f(){return G&&/[0-9A-Fa-f]/.test(G)}function g(){return-1!=="~`!@#$%^&*()-_+=[]{}\\;:'\"|,.<>/?".indexOf(G)}function t(){return-1!=="$!+-=*/%&|^<>".indexOf(G)}function u(){return-1!==["for","if","else","continue","switch","return","while","break","do","typeof","abstract","assert","extends","finally","final","implements","import","instanceof","interface","native","package","strictfp","super","synchronized","throws","transient","try","catch"].indexOf(I)}function v(){return-1!==["null","true","false","undefined"].indexOf(I)}function w(){return"var"===I||"let"===I||"const"===I}function x(){return"self"===I||"this"===I||"argument"===I}function y(){return-1!==["module","window","document","history","location","screen","console","Object","Array","Number","Boolean","String","RegExp","Math"].indexOf(I)}function z(){var c=0;if("/"===G)for(j=L;(G=a[++j])&&!b();)if("\\"===G)j++;else if("/"===G){for(j=L;;){if(G=a[--j],b()){c=1;break}if(g()){c=1;break}if(e())break;if(!G){c=1;break}}break}return c}function A(){if(H=m,I=G,"/"===G&&"*"===a[L+1])for(I="/*",L++,H=n;;){if(G=a[++L],!G){F();break}if("*"===G&&"/"===a[L+1]){I+="*/",L++,F();break}b()?(F(),I=G,H=o,F(),H=n):I+=G}else if("/"===G&&"/"===a[L+1])for(I="//",L++,H=n;;){if(G=a[++L],!G){F();break}if(b()){F(),I=G,H=o,F();break}I+=G}else if("'"===G||'"'===G)for(J=I=G;;){if(G=a[++L],!G){F();break}if("\\"===G)H=q,F(),I+=G+a[++L],H=i,F();else{if(G===J){I+=G,H=q,F();break}I+=G}}else if(t())if(J=z(),1===J)for(H=q,I="/",F();;)if(G=a[++L],"\\"===G)H=i,I=G+a[++L],F();else{if("/"===G){for(H=q,I="/",F(),J=0;(G=a[L+1])&&-1!=="gi".indexOf(G);)H=l,I+=G,J=1,L++;J&&F();break}if(t())H=l,I=G,F();else if(d()){for(H=q,I=G;(G=a[L+1])&&d();)I+=G,L++;F()}else H=q,I+=G,F()}else for(H=l,I=a[L];G=a[L+1];){if(!t()){F();break}I+=G,L++}else I=G,H=m,F()}function B(){for(H=h,I=G;;){if(G=a[++L],!c()){F();break}I+=G}}function C(){if(H=i,I=G,"0"!==G||"x"!==a[L+1]&&"X"!==a[L+1])for(;;){if(G=a[++L],!e()){F();break}I+=G}else for(I+=a[++L];;){if(G=a[++L],!f()){F();break}I+=G}}function D(){I=G,H=o,F(),L++}function E(){for(I=G;;){if(G=a[++L],!d()&&!e())break;I+=G}}function F(){K.push([I,H]),I=H=""}var G,H,I,J,K=[],L=0;for(a=Object(a);;){if(G=a[L],!G)break;if(c())B();else if(b())D();else if(e())C();else if(d())if(E(),"function"===I){if(H=r+s,F(),c()&&B(),d()&&(E(),H=p,F(),c()&&B()),"("===G)for(H=m,I=G,L++,F();;)if(G=a[L],c())B();else if(","===G)H=m,I=G,F(),L++;else{if(!d())break;E(),H=k+s,F()}}else{if(w())H=r+s;else if(u())H=l;else if(x())H=k+s;else if(y())H=r;else if(v())H=i;else if(H=m,"("===G)H=r;else if(c())for(;;){if(G=a[L+1],!c()){if("("===G){H=r;break}break}B()}F()}else g()?(A(),L++):(I=G,H="fail",F(),L++)}return K}function e(a){return/^\s*</.test(a)?c(a):d(a)}function f(b){if(!b.code){b.code=!0;var c=b.firstChild;if(c){for(var d=e(c.nodeValue.replace(/^\s+|\s+$/g,"")),f=a.createElement("ol"),g=a.createElement("li"),h=0,i=0,j=d.length;j>i;i++){var k=d[i],l=a.createElement("span");l.appendChild(a.createTextNode(k[0])),l.className=k[1],"line"===l.className?(f.appendChild(g),g=a.createElement("li"),h++):g.appendChild(l)}f.style.paddingLeft=String(h).length/2+1.3+"em",f.appendChild(g),b.replaceChild(f,c),b.style.display="block"}}}function g(b){if(b){if(!(b instanceof Node))return d(b.toString());b.setAttribute("code",""),f(b)}else for(var c=a.body.getElementsByTagName("script"),e=0,g=c.length;g>e;e++){var h=c[e];h.hasAttribute("code")&&f(h)}}var h="space",i="purple",k="gold",l="red",m="white",n="dark",o="line",p="green",q="yellow",r="ryan",s=" i",t=function(){return"a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1 - h6,head,header,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,nav,object,ol,optgroup,option,p,pre,progress,q,s,samp,script,section,select,small,span,strong,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,tr,u,ul,video".split(",")}(),u=getComputedStyle(a.createElement("div"));"undefined"!=typeof module?module.exports=g:this.code=g,a&&g()}(this.document);