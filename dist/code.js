!function(e){function i(e,i){for(var t=0,r=i.length;t<r;t++)if(i[t]===e)return 1}function t(){F.push([X,B])}function r(){return $&&/[\v\t ]/.test($)}function o(){return"\n"===$||"\r"===$}function a(){return $&&/[0-9A-Fa-f]/.test($)}function n(){return $&&/[0-9]/.test($)}function s(){return-1!=="~`!@#$%^&*()-_+=[]{}\\;:'\"|,.<>/?".indexOf($)}function l(){return $&&/[a-zA-Z_]/.test($)}function b(){return l()||"-"===$}function c(){return-1!=="$!+-=*%&|^<>".indexOf($)}function f(){return i(X,P)}function d(){return i(X,["null","true","false","undefined"])}function u(){return i(X,Q)}function p(){return i(X,U)}function k(){return i(X,W)}function m(){for(B=D,X=$;;){if($=source[++_],!a())break;X+=$}}function g(){for(X=$;;){if($=source[++_],!n()){if("."===$){for(X+=$;;){if($=source[++_],!n())break;X+=$}break}break}X+=$}}function w(){for(X=$;;){if($=source[++_],!l()&&!n())break;X+=$}}function h(){for(X=$;;){if($=source[++_],!b()&&!n())break;X+=$}}function x(){return i(X,ee)}function y(){return i(X.replace(/^-(webkit|moz|ms|o)-/,""),ie)}function v(){return i(X.replace(/^-(webkit|moz|ms|o)-/,""),te)}function z(e){F.push([$,e]),_++}function j(){for(B=L,X=$;;){if($=source[++_],!r()){t();break}X+=$}}function q(){for(B=D,X=$;;){if($=source[++_],!n()){t();break}X+=$}}function C(){for(;;){if(!($=source[_]))break;if("/"===$&&"*"===source[_+1])for(X="/*",_+=2;;){if(!($=source[_])){X&&t();break}if("*"===$&&"/"===source[_+1]){X+="*/",t(),_+=2;break}o()?(B=R,X&&t(),z(M),X=""):(X+=$,_++)}else if("."===$||"#"===$)Z=$,_++,$=source[_],b()?(h(),B=I,X=Z+X,t()):(B=Y,X=Z,t());else if("["===$)for(z(Y);;){if(!($=source[_])||o())break;if("]"===$){z(Y);break}if(b())h(),B=I,t();else if(r())j();else if("="===$)for(z(H);;){if(!($=source[_])||o()||"]"===$)break;if(r())j();else if('"'===$||"'"===$)for(Z=X=$,B=J,_++;;){if(!($=source[_])||o()){X&&t();break}if($===Z){X+=$,t(),_++;break}X+=$,_++}else b()?(h(),B=J,t()):z(Y)}else X=$,B=Y,t(),_++}else if(o())z(M);else if(":"===$)for(z(Y);;){if(!($=source[_]))break;if(r())j();else{if(o()){z(M);break}if(n()||"."===$)g(),B=D,t(),"%"===$?z(H):"s"===$?z(H):"p"===$&&"x"===source[_+1]?(X="px",B=H,t(),_+=2):"e"===$&&"m"===source[_+1]?(X="em",B=H,t(),_+=2):"c"===$&&"m"===source[_+1]&&(X="cm",B=H,t(),_+=2);else if(b()){if("-"===$){if($=source[_+1],n()||"."===$){$="-",z(D);continue}$="-"}h(),v()?(B=K,t()):"important"===X?(B=H,t()):(B=Y,t())}else{if(";"===$){z(Y);break}"#"===$?(X=Z=$,_++,$=source[_],a()?(m(),X=Z+X,B=D,t()):(B=Y,t(),_++)):"#"===$?(X=Z=$,_++,$=source[_],a()?(m(),X=Z+X,B=D,t()):(B=Y,t(),_++)):z("!"===$?H:Y)}}}else if(r())j();else if(b())h(),x()?(B=H,t()):y()?(B=K+V,t()):(B=Y,t());else if("*"===$)z(H);else if("-"===$)z(D);else if("@"===$)for(X=$,B=H,_++;;){if(!($=source[_])||o()){X&&t();break}if("{"===$){t();break}X+=$,_++}else z(Y)}return F}function E(){for(var e="",i=0;;){if(!($=source[_]))break;if("<"===$){if("!"===source[_+1]&&"-"===source[_+2]&&"-"===source[_+3]){for(X="\x3c!--",B=R,_+=4;;)if($=source[_]){if("-"===$&&"-"===source[_+1]&&">"===source[_+2]){X+="--\x3e",t(),_+=3;break}o()?(X&&t(),z(M),X=""):(X+=$,_++)}else X&&t();continue}if(z(Y),"!"===($=source[_])||"?"===$?z(Y):"/"===$?(z(Y),i=1):i=0,$=source[_],b())for(h(),e=i?"":X,B=H,t();$=source[_];){if(">"===$){z(Y),"script"!==e&&"style"!==e||function(){var i=source.indexOf("</"+e+">",_);if(-1!==i&&i>_){var t=source;source=source.substring(_,i),_=0,"style"===e?C():N(),source=t,_=i}}();break}if(r())j();else if('"'===$||"'"===$)for(B=J,X=Z=$;$=source[++_];){if($===Z){X+=$,_++,t();break}X+=$}else b()||n()?function(){for(B=I,X=$;$=source[++_];){if(!b()&&!n()){t();break}X+=$}for(;;)if($=source[_],o())z(M);else{if(!r())break;j()}if("="===$)if(X=$,B=Y,_++,t(),r()&&j(),'"'===($=source[_])||"'"===$)for(B=J,Z=X=$;$=source[++_];){if($===Z){X+=$,t(),_++;break}o()?(t(),B=M,X=$,_++,t()):X+=$}else if($&&!o()&&">"!==$)for(B=J,X=$;;){if(!($=source[++_])||o()||">"===$||" "===$){t();break}X+=$}}():z(s()?Y:o()?M:"fail")}}else if(o())z(M);else if(r())j();else for(B=Y,X=$;;){if(!($=source[++_])||o()||"<"===$){t();break}X+=$}}return F}function N(){function e(){var e;if("/"===$)for(e=_;;)if($=source[--e],!r()){if("="===$||":"===$||"("===$||"|"===$||"?"===$||o()||!$){for(e=_;($=source[++e])&&!o()&&$;)if("\\"!==$){if("/"===$)return 1}else e++;break}break}}for(;;){if(!($=source[_]))break;if(r())j();else if(o())z(M);else if(n())!function(){if(B=D,X=$,"0"!==$||"x"!==source[_+1]&&"X"!==source[_+1])q();else for(X+=source[++_];;){if($=source[++_],!a()){t();break}X+=$}}();else if(l())if(w(),"function"===X){if(function(){var e=F.length-1;e>-1&&($=F[e][0][0],r()&&($=F[--e][0][0]),":"!==$&&"="!==$||($=F[--e][0][0],r()&&($=F[--e][0][0]),l()&&(F[e][1]="green"))),$=source[_],X="function",B=K+V,t()}(),r()&&j(),l()&&(w(),B=I,t(),r()&&j()),"("===$)for(z(Y);;)if($=source[_],r())j();else if(","===$)z(Y);else{if(!l())break;w(),B=G+V,t()}}else{if(u())B=K+V;else if(f())B=H;else if(p())B=G+V;else if(k())B=K;else if(d())B=D;else if(B=Y,"("===$)B=K;else if(r())for(;;){if($=source[_+1],!r()){if("("===$){B=K;break}break}j()}t()}else s()?function(){if("/"===$&&"*"===source[_+1])for(X="/*",_+=2;;){if(!($=source[_])){X&&t();break}if("*"===$&&"/"===source[_+1]){X+="*/",t(),_+=2;break}o()?(B=R,X&&t(),z(M),X=""):(X+=$,_++)}else if("/"===$&&"/"===source[_+1]){for(X="//",_++,B=R;;){if(!($=source[++_])){t();break}if(o()){t(),X=$,B=M,t();break}X+=$}_++}else if("'"===$||'"'===$){for(Z=X=$;;){if(!($=source[++_])||o()){X&&t();break}if("\\"===$)B=J,t(),X=$+source[++_],B=D,t(),X="";else{if($===Z){X+=$,B=J,t();break}X+=$}}_++}else if("/"===$||c())if(1===(Z=e()))for(X="/",B="yellow hehe",t(),_++;;)if(!($=source[_])||o())X&&t();else if("\\"===$)B=D,X=$+source[++_],t(),_++;else{if("/"===$){for(B=J,X=$,t(),_++,X="";($=source[_])&&-1!=="gi".indexOf($);)B=H,_++,(X+=$)&&t();break}c()?z(H):l()?(B=J,w(),t(),X=""):z(J)}else for(B=H,X=source[_];$=source[++_];){if(!c()){t();break}X+=$}else z(Y)}():z("fail")}return F}function A(e){return source=e,_=0,F=[],/^\s*</.test(e)?E():N()}function O(i){if(!i.coded){i.coded=!0;var t=i.firstChild;if(t){for(var r=A(t.nodeValue.replace(/^\s+|\s+$/g,"")),o=e.createElement("ol"),a=e.createElement("li"),n=0,s=0,l=r.length;s<l;s++){var b=r[s],c=e.createElement("span");c.appendChild(e.createTextNode(b[0])),c.className=b[1],"line"===c.className?(o.appendChild(a),a=e.createElement("li"),n++):a.appendChild(c)}o.style.paddingLeft=String(n).length/2+1.3+"em",o.appendChild(a),i.replaceChild(o,t),i.style.display="block"}}}function S(i){for(var t=e.getElementsByTagName(i),r=0,o=t.length;r<o;r++){var a=t[r];a.hasAttribute("code")&&O(a)}}function T(e){if(e){if(!(e instanceof Node))return A(e.toString());e.setAttribute("code",""),O(e)}else S("xmp"),S("script")}var $,B,X,Z,_,F,L="space",M="line",R="dark",V=" i",Y="white",D="purple",G="gold",H="red",I="green",J="yellow",K="ryan",P="break,case,catch,const,continue,debugger,default,delete,do,else,extends,finally,for,if,import,in,instanceof,let,new,return,super,switch,throw,try,typeof,var,void,while,with".split(","),Q=["var","let","const"],U=["self","this","argument"],W=["prototype","module","window","document","history","location","screen","console","Object","Array","Number","Boolean","String","RegExp","Math"],ee="a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,nav,object,ol,optgroup,option,p,pre,progress,q,s,samp,script,section,select,small,span,strong,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,tr,u,ul,video".split(","),ie="align-content,align-items,align-self,alignment-baseline,all,animation,animation-delay,animation-direction,animation-duration,animation-fill-mode,animation-iteration-count,animation-name,animation-play-state,animation-timing-function,backface-visibility,background,background-attachment,background-blend-mode,background-clip,background-color,background-image,background-origin,background-position,background-position-x,background-position-y,background-repeat,background-repeat-x,background-repeat-y,background-size,baseline-shift,border,border-bottom,border-bottom-color,border-bottom-left-radius,border-bottom-right-radius,border-bottom-style,border-bottom-width,border-collapse,border-color,border-image,border-image-outset,border-image-repeat,border-image-slice,border-image-source,border-image-width,border-left,border-left-color,border-left-style,border-left-width,border-radius,border-right,border-right-color,border-right-style,border-right-width,border-spacing,border-style,border-top,border-top-color,border-top-left-radius,border-top-right-radius,border-top-style,border-top-width,border-width,bottom,box-shadow,box-sizing,break-after,break-before,break-inside,buffered-rendering,caption-side,clear,clip,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-rendering,column-count,column-fill,column-gap,column-rule,column-rule-color,column-rule-style,column-rule-width,column-span,column-width,columns,contain,content,counter-increment,counter-reset,cursor,cx,cy,d,direction,display,dominant-baseline,empty-cells,fill,fill-opacity,fill-rule,filter,flex,flex-basis,flex-direction,flex-flow,flex-grow,flex-shrink,flex-wrap,float,flood-color,flood-opacity,font,font-family,font-feature-settings,font-kerning,font-size,font-stretch,font-style,font-variant,font-variant-caps,font-variant-ligatures,font-variant-numeric,font-weight,height,hyphens,image-rendering,isolation,justify-content,left,letter-spacing,lighting-color,line-height,list-style,list-style-image,list-style-position,list-style-type,margin,margin-bottom,margin-left,margin-right,margin-top,marker,marker-end,marker-mid,marker-start,mask,mask-type,max-height,max-width,max-zoom,min-height,min-width,min-zoom,mix-blend-mode,motion,object-fit,object-position,offset,offset-distance,offset-path,offset-rotation,opacity,order,orientation,orphans,outline,outline-color,outline-offset,outline-style,outline-width,overflow,overflow-wrap,overflow-x,overflow-y,padding,padding-bottom,padding-left,padding-right,padding-top,page,page-break-after,page-break-before,page-break-inside,paint-order,perspective,perspective-origin,pointer-events,position,quotes,r,resize,right,rx,ry,shape-image-threshold,shape-margin,shape-outside,shape-rendering,size,speak,src,stop-color,stop-opacity,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,tab-size,table-layout,text-align,text-align-last,text-anchor,text-combine-upright,text-decoration,text-indent,text-orientation,text-overflow,text-rendering,text-shadow,text-size-adjust,text-transform,top,touch-action,transform,transform-origin,transform-style,transition,transition-delay,transition-duration,transition-property,transition-timing-function,unicode-bidi,unicode-range,user-select,user-zoom,vector-effect,vertical-align,visibility,webkit-app-region,webkit-appearance,webkit-background-clip,webkit-background-origin,webkit-border-after,webkit-border-after-color,webkit-border-after-style,webkit-border-after-width,webkit-border-before,webkit-border-before-color,webkit-border-before-style,webkit-border-before-width,webkit-border-end,webkit-border-end-color,webkit-border-end-style,webkit-border-end-width,webkit-border-horizontal-spacing,webkit-border-image,webkit-border-start,webkit-border-start-color,webkit-border-start-style,webkit-border-start-width,webkit-border-vertical-spacing,webkit-box-align,webkit-box-decoration-break,webkit-box-direction,webkit-box-flex,webkit-box-flex-group,webkit-box-lines,webkit-box-ordinal-group,webkit-box-orient,webkit-box-pack,webkit-box-reflect,webkit-column-break-after,webkit-column-break-before,webkit-column-break-inside,webkit-font-size-delta,webkit-font-smoothing,webkit-highlight,webkit-hyphenate-character,webkit-line-break,webkit-line-clamp,webkit-locale,webkit-logical-height,webkit-logical-width,webkit-margin-after,webkit-margin-after-collapse,webkit-margin-before,webkit-margin-before-collapse,webkit-margin-bottom-collapse,webkit-margin-collapse,webkit-margin-end,webkit-margin-start,webkit-margin-top-collapse,webkit-mask,webkit-mask-box-image,webkit-mask-box-image-outset,webkit-mask-box-image-repeat,webkit-mask-box-image-slice,webkit-mask-box-image-source,webkit-mask-box-image-width,webkit-mask-clip,webkit-mask-composite,webkit-mask-image,webkit-mask-origin,webkit-mask-position,webkit-mask-position-x,webkit-mask-position-y,webkit-mask-repeat,webkit-mask-repeat-x,webkit-mask-repeat-y,webkit-mask-size,webkit-max-logical-height,webkit-max-logical-width,webkit-min-logical-height,webkit-min-logical-width,webkit-padding-after,webkit-padding-before,webkit-padding-end,webkit-padding-start,webkit-perspective-origin-x,webkit-perspective-origin-y,webkit-print-color-adjust,webkit-rtl-ordering,webkit-ruby-position,webkit-tap-highlight-color,webkit-text-combine,webkit-text-decorations-in-effect,webkit-text-emphasis,webkit-text-emphasis-color,webkit-text-emphasis-position,webkit-text-emphasis-style,webkit-text-fill-color,webkit-text-orientation,webkit-text-security,webkit-text-stroke,webkit-text-stroke-color,webkit-text-stroke-width,webkit-transform-origin-x,webkit-transform-origin-y,webkit-transform-origin-z,webkit-user-drag,webkit-user-modify,webkit-writing-mode,white-space,widows,width,will-change,word-break,word-spacing,word-wrap,writing-mode,x,y,z-index,zoom".split(","),te="red,blue,yellow,green,lime,content-box,border-box,translateX,translateY,translateZ,url,rgba,rgb,whitespace,wait,w-resize,visible,vertical-text,vertical-ideographic,uppercase,upper-roman,upper-alpha,underline,transparent,top,thin,thick,text,text-top,text-bottom,tb-rl,table-header-group,table-footer-group,sw-resize,super,strict,static,square,solid,small-caps,separate,se-resize,scroll,s-resize,rtl,row-resize,ridge,right,repeat,repeat-y,repeat-x,relative,progress,pointer,overline,outside,outset,oblique,nowrap,not-allowed,normal,none,nw-resize,no-repeat,no-drop,newspaper,ne-resize,n-resize,move,middle,medium,ltr,lr-tb,lowercase,lower-roman,lower-alpha,loose,list-item,line,line-through,line-edge,lighter,left,keep-all,justify,italic,inter-word,inter-ideograph,inside,inset,inline,inline-block,inherit,inactive,ideograph-space,ideograph-parenthesis,ideogwhitespace,wait,w-resize,visible,vertical-text,vertical-ideographic,uppercase,upper-roman,upper-alpha,underline,transparent,top,thin,thick,text,text-top,text-bottom,tb-rl,table-header-group,table-footer-group,sw-resize,super,strict,static,square,solid,small-caps,separate,se-resize,scroll,s-resize,rtl,row-resize,ridge,right,repeat,repeat-y,repeat-x,relative,progress,pointer,overline,outside,outset,oblique,nowrap,not-allowed,normal,none,nw-resize,no-repeat,no-drop,newspaper,ne-resize,n-resize,move,middle,medium,ltr,lr-tb,lowercase,lower-roman,lower-alpha,loose,list-item,line,line-through,line-edge,lighter,left,keep-all,justify,italic,inter-word,inter-ideograph,inside,inset,inline,inline-block,inherit,inactive,ideograph-space,ideograph-parenthesis,ideograph-numeric,ideograph-alpha,horizontal,hidden,help,hand,groove,fixed,ellipsis,e-resize,double,dotted,distribute,distribute-space,distribute-letter,distribute-all-lines,disc,disabled,default,decimal,dashed,crosshair,collapse,col-resize,circle,char,center,capitalize,break-word,break-all,bottom,both,bolder,bold,block,bidi-override,below,baseline,auto,always,all-scroll,absolute,table,table-cell-all,bottom,both,bolder,bold,block,bidi-override,below,baseline,auto,always,all-scroll,absolute,table,table-cell,table-row".split(",");"undefined"!=typeof module?module.exports=T:this.code=T,e&&setTimeout(T,222)}(this.document);