(window.webpackJsonp=window.webpackJsonp||[]).push([[28,10],{"0zqC":function(Bn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),n=e("q1tI"),g=e.n(n),L=e("wx14"),ce=e("rePB"),K=e("ODXe"),tn=e("U8pU"),Ie=e("Ff2n"),me=e("VTBJ"),at=e("TSYQ"),je=e.n(at),Mn=e("Zm9Q"),Tn=e("5Z9U"),On=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function b(){for(var C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),b}function Rn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),b=Object(K.a)(c,2),C=b[1],y=Object(n.useRef)(typeof t=="function"?t():t),O=wn(function(){var W=y.current;i.current.forEach(function($){W=$(W)}),i.current=[],y.current=W,C({})});function F(W){i.current.push(W),O()}return[y.current,F]}var we=e("4IlW");function kn(t,i){var c,b=t.prefixCls,C=t.id,y=t.active,O=t.rtl,F=t.tab,W=F.key,$=F.tab,V=F.disabled,H=F.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,Y=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Z=t.onFocus,le="".concat(b,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&Q!==!1&&!V;function ne(re){V||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:W,event:re})}var fe=n.createElement("div",{key:W,ref:i,className:je()(le,(c={},Object(ce.a)(c,"".concat(le,"-with-remove"),be),Object(ce.a)(c,"".concat(le,"-active"),y),Object(ce.a)(c,"".concat(le,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(W),className:"".concat(le,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(W),"aria-disabled":V,tabIndex:V?null:0,onClick:function(X){X.stopPropagation(),ne(X)},onKeyDown:function(X){[we.a.SPACE,we.a.ENTER].includes(X.which)&&(X.preventDefault(),ne(X))},onFocus:Z},$),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(X){X.stopPropagation(),de(X)}},H||U.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function P(t,i,c){return Object(n.useMemo)(function(){for(var b,C=new Map,y=i.get((b=t[0])===null||b===void 0?void 0:b.key)||rt,O=y.left+y.width,F=0;F<t.length;F+=1){var W=t[F].key,$=i.get(W);if(!$){var V;$=i.get((V=t[F-1])===null||V===void 0?void 0:V.key)||rt}var H=C.get(W)||Object(me.a)({},$);H.right=O-H.left-H.width,C.set(W,H)}return C},[t.map(function(b){return b.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function j(t,i,c,b,C){var y=C.tabs,O=C.tabPosition,F=C.rtl,W,$,V;["top","bottom"].includes(O)?(W="width",$=F?"right":"left",V=Math.abs(i.left)):(W="height",$="top",V=-i.top);var H=i[W],J=c[W],se=b[W],Q=H;return J+se>H&&(Q=H-se),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var Y=y.length,ue=Y,U=0;U<Y;U+=1){var q=t.get(y[U].key)||D;if(q[$]+q[W]>V+Q){ue=U-1;break}}for(var ae=0,Z=Y-1;Z>=0;Z-=1){var le=t.get(y[Z].key)||D;if(le[$]<V){ae=Z+1;break}}return[ae,ue]},[t,V,Q,O,y.map(function(Y){return Y.key}).join("_"),F])}var d=e("Gytx"),l=e.n(d),p=e("Kwbf");function E(t,i){var c=t.prefixCls,b=t.invalidate,C=t.item,y=t.renderItem,O=t.responsive,F=t.registerSize,W=t.itemKey,$=t.className,V=t.style,H=t.children,J=t.display,se=t.order,Q=t.component,Y=Q===void 0?"div":Q,ue=Object(Ie.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function q(be){F(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=y&&C!==void 0?y(C):H,Z;b||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?se:void 0,pointerEvents:U?"none":void 0});var le={};U&&(le["aria-hidden"]=!0);var k=n.createElement(Y,Object(L.a)({className:je()(!b&&c,$),style:Object(me.a)(Object(me.a)({},Z),V)},le,ue,{ref:i}),ae);return O&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var R=n.forwardRef(E);R.displayName="Item";var a=R;function u(){var t=Object(n.useState)({}),i=Object(K.a)(t,2),c=i[1],b=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,O=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function F(W){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=W);var V=b.current[$];function H(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,Ye.a.cancel(O),O=Object(Ye.a)(function(){C.current||c({})})}return[V,H]}return F}var s=function(i,c){var b=n.useContext(S);if(!b){var C=i.component,y=C===void 0?"div":C,O=Object(Ie.a)(i,["component"]);return n.createElement(y,Object(L.a)({},O,{ref:c}))}var F=b.className,W=Object(Ie.a)(b,["className"]),$=i.className,V=Object(Ie.a)(i,["className"]);return n.createElement(S.Provider,{value:null},n.createElement(a,Object(L.a)({ref:c,className:je()(F,$)},W,V)))},N=n.forwardRef(s);N.displayName="RawItem";var M=N,S=n.createContext(null),o="responsive",T="invalidate";function m(t){return"+ ".concat(t.length," ...")}function r(t,i){var c=t.prefixCls,b=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,O=t.renderItem,F=t.renderRawItem,W=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,H=t.ssr,J=t.style,se=t.className,Q=t.maxCount,Y=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Z=t.itemComponent,le=t.onVisibleChange,k=Object(Ie.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=u(),ne=H==="full",de=be(null),fe=Object(K.a)(de,2),re=fe[0],X=fe[1],oe=re||0,ye=be(new Map),he=Object(K.a)(ye,2),Re=he[0],Ke=he[1],Ee=be(0),Oe=Object(K.a)(Ee,2),Me=Oe[0],Ne=Oe[1],Pe=be(0),De=Object(K.a)(Pe,2),$e=De[0],qe=De[1],Ve=be(0),Ue=Object(K.a)(Ve,2),Qe=Ue[0],Le=Ue[1],Sn=Object(n.useState)(null),an=Object(K.a)(Sn,2),Ze=an[0],un=an[1],yn=Object(n.useState)(null),bn=Object(K.a)(yn,2),Ae=bn[0],He=bn[1],_e=n.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,re]),xe=Object(n.useState)(!1),Wn=Object(K.a)(xe,2),Un=Wn[0],Kn=Wn[1],rn="".concat(b,"-item"),Dn=Math.max(Me,$e),on=y.length&&Q===o,Pn=Q===T,en=on||typeof Q=="number"&&y.length>Q,sn=Object(n.useMemo)(function(){var ve=y;return on?re===null&&ne?ve=y:ve=y.slice(0,Math.min(y.length,oe/V)):typeof Q=="number"&&(ve=y.slice(0,Q)),ve},[y,V,re,Q,on]),jn=Object(n.useMemo)(function(){return on?y.slice(_e+1):y.slice(sn.length)},[y,sn,on,_e]),cn=Object(n.useCallback)(function(ve,Fe){var Te;return typeof W=="function"?W(ve):(Te=W&&(ve==null?void 0:ve[W]))!==null&&Te!==void 0?Te:Fe},[W]),ke=Object(n.useCallback)(O||function(ve){return ve},[O]);function Xe(ve,Fe){He(ve),Fe||(Kn(ve<y.length-1),le==null||le(ve))}function Jn(ve,Fe){X(Fe.clientWidth)}function Gn(ve,Fe){Ke(function(Te){var nn=new Map(Te);return Fe===null?nn.delete(ve):nn.set(ve,Fe),nn})}function et(ve,Fe){qe(Fe),Ne($e)}function En(ve,Fe){Le(Fe)}function hn(ve){return Re.get(cn(sn[ve],ve))}n.useLayoutEffect(function(){if(oe&&Dn&&sn){var ve=Qe,Fe=sn.length,Te=Fe-1;if(!Fe){Xe(0),un(null);return}for(var nn=0;nn<Fe;nn+=1){var Yn=hn(nn);if(Yn===void 0){Xe(nn-1,!0);break}if(ve+=Yn,nn===Te-1&&ve+hn(Te)<=oe){Xe(Te),un(null);break}else if(ve+Dn>oe){Xe(nn-1),un(ve-Yn-Qe+$e);break}else if(nn===Te){Xe(Te),un(ve-Qe);break}}U&&hn(0)+Qe>oe&&un(null)}},[oe,Re,$e,Qe,cn,sn]);var Hn=Un&&!!jn.length,Cn={};Ze!==null&&on&&(Cn={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:on,component:Z,invalidate:Pn},Xn=F?function(ve,Fe){var Te=cn(ve,Fe);return n.createElement(S.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Fe,item:ve,itemKey:Te,registerSize:Gn,display:Fe<=_e})},F(ve,Fe))}:function(ve,Fe){var Te=cn(ve,Fe);return n.createElement(a,Object(L.a)({},mn,{order:Fe,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:Gn,display:Fe<=_e}))},An,Qn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(ue)ue&&(An=n.createElement(S.Provider,{value:Object(me.a)(Object(me.a)({},mn),Qn)},ue(jn)));else{var dn=Y||m;An=n.createElement(a,Object(L.a)({},mn,Qn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(ae,Object(L.a)({className:je()(!Pn&&b,se),style:J,ref:i},k),sn.map(Xn),en?An:null,U&&n.createElement(a,Object(L.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return on&&(In=n.createElement(Ln.default,{onResize:Jn},In)),In}var h=n.forwardRef(r);h.displayName="Overflow",h.Item=M,h.RESPONSIVE=o,h.INVALIDATE=T;var v=h,A=v,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Be(t,i){var c=Object(me.a)({},t);return Object.keys(i).forEach(function(b){var C=i[b];C!==void 0&&(c[b]=C)}),c}function Fn(t){var i=t.children,c=t.locked,b=Object(Ie.a)(t,["children","locked"]),C=n.useContext(We),y=Object(pn.a)(function(){return Be(C,b)},[C,b],function(O,F){return!c&&(O[0]!==F[0]||!l()(O[1],F[1]))});return n.createElement(We.Provider,{value:y},i)}function it(t,i,c,b){var C=n.useContext(We),y=C.activeKey,O=C.onActive,F=C.onInactive,W={active:y===t};return i||(W.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),O(t)},W.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),F(t)}),W}function qn(t){var i=t.item,c=Object(Ie.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(p.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function f(t){var i=t.icon,c=t.props,b=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(me.a)({},c)):C=i,C||b||null}function I(t){var i=n.useContext(We),c=i.mode,b=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return b?{paddingRight:y*C}:{paddingLeft:y*C}}var B=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var Se=n.createContext(B);function ze(t){var i=n.useContext(Se);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(Ut);return Jt(i,t)}var ba=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(w.a)(this,c),i.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,O=C.attribute,F=C.elementRef,W=Object(Ie.a)(C,["title","attribute","elementRef"]),$=Object(ge.a)(W,["eventKey"]);return Object(p.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(A.Item,Object(L.a)({},O,{title:typeof y=="string"?y:void 0},$,{ref:F}))}}]),c}(n.Component),Ea=function(i){var c,b=i.style,C=i.className,y=i.eventKey,O=i.disabled,F=i.itemIcon,W=i.children,$=i.role,V=i.onMouseEnter,H=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,Y=Object(Ie.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(y),U=n.useContext(We),q=U.prefixCls,ae=U.onItemClick,Z=U.disabled,le=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),X=Z||O,oe=ze(y),ye=function(Ve){return{key:y,keyPath:oe,item:fe.current,domEvent:Ve}},he=F||k,Re=it(y,X,V,H),Ke=Re.active,Ee=Object(Ie.a)(Re,["active"]),Oe=be.includes(y),Me=I(oe.length),Ne=function(Ve){if(!X){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},Pe=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},De=function(Ve){ne(y),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:fe,elementRef:re,role:$===null?"none":$||"menuitem",tabIndex:O?null:-1,"data-menu-id":le&&ue?null:ue},Y,Ee,$e,{component:"li","aria-disabled":O,style:Object(me.a)(Object(me.a)({},Me),b),className:je()(de,(c={},Object(ce.a)(c,"".concat(de,"-active"),Ke),Object(ce.a)(c,"".concat(de,"-selected"),Oe),Object(ce.a)(c,"".concat(de,"-disabled"),X),c),C),onClick:Ne,onKeyDown:Pe,onFocus:De}),W,n.createElement(f,{props:Object(me.a)(Object(me.a)({},i),{},{isSelected:Oe}),icon:he}))};function Ca(t){var i=t.eventKey,c=ee(),b=ze(i);return n.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:n.createElement(Ea,t)}var Dt=Ca;function Pt(t,i){return Object(Mn.a)(t).map(function(c,b){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(i),[b]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function _n(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var b,C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(y))},[]);return t?c:void 0}var Oa=function(i,c){var b=i.className,C=i.children,y=Object(Ie.a)(i,["className","children"]),O=n.useContext(We),F=O.prefixCls,W=O.mode;return n.createElement("ul",Object(L.a)({className:je()(F,"".concat(F,"-sub"),"".concat(F,"-").concat(W==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:c}),C)},Ht=n.forwardRef(Oa);Ht.displayName="SubMenuList";var Xt=Ht,Ra=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Qt;function Yt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var i=t.prefixCls,c=t.visible,b=t.children,C=t.popup,y=t.popupClassName,O=t.popupOffset,F=t.disabled,W=t.mode,$=t.onVisibleChange,V=n.useContext(We),H=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,Y=V.builtinPlacements,ue=V.triggerSubMenuAction,U=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Z=n.useState(!1),le=Object(K.a)(Z,2),k=le[0],be=le[1],ne=J?Object(me.a)(Object(me.a)({},Fa),Y):Object(me.a)(Object(me.a)({},Qt),Y),de=Sa[W],fe=Yt(W,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=n.useRef();return n.useEffect(function(){return X.current=Object(Ye.a)(function(){be(c)}),function(){Ye.a.cancel(X.current)}},[c]),n.createElement(Ra.a,{prefixCls:i,popupClassName:je()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),y),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:C,popupAlign:O&&{offset:O},action:F?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:U,popupMotion:re},b)}var Pa=e("8XRh");function ja(t){var i=t.id,c=t.open,b=t.keyPath,C=t.children,y="inline",O=n.useContext(We),F=O.prefixCls,W=O.forceSubMenuRender,$=O.motion,V=O.defaultMotions,H=O.mode,J=n.useRef(!1);J.current=H===y;var se=n.useState(!J.current),Q=Object(K.a)(se,2),Y=Q[0],ue=Q[1],U=J.current?c:!1;n.useEffect(function(){J.current&&ue(!1)},[H]);var q=Object(me.a)({},Yt(y,$,V));b.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&ue(!0),ae==null?void 0:ae(Z)},Y?null:n.createElement(Fn,{mode:y,locked:!J.current},n.createElement(Pa.default,Object(L.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(F,"-hidden")}),function(Z){var le=Z.className,k=Z.style;return n.createElement(Xt,{id:i,className:le,style:k},C)}))}var Aa=function(i){var c,b=i.style,C=i.className,y=i.title,O=i.eventKey,F=i.disabled,W=i.internalPopupClose,$=i.children,V=i.itemIcon,H=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,Y=i.onMouseEnter,ue=i.onMouseLeave,U=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Z=Object(Ie.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=Gt(O),k=n.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,X=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Ge),Me=Oe.isSubPathKey,Ne=ze(),Pe="".concat(be,"-submenu"),De=fe||F,$e=n.useRef(),qe=n.useRef(),Ve=V||ye,Ue=H||he,Qe=de.includes(O),Le=!re&&Qe,Sn=Me(oe,O),an=it(O,De,q,ae),Ze=an.active,un=Object(Ie.a)(an,["active"]),yn=n.useState(!1),bn=Object(K.a)(yn,2),Ae=bn[0],He=bn[1],_e=function(Xe){De||He(Xe)},xe=function(Xe){_e(!0),Y==null||Y({key:O,domEvent:Xe})},Wn=function(Xe){_e(!1),ue==null||ue({key:O,domEvent:Xe})},Un=n.useMemo(function(){return Ze||(ne!=="inline"?Ae||Me([X],O):!1)},[ne,Ze,X,Ae,O,Me]),Kn=I(Ne.length),rn=function(Xe){De||(U==null||U({key:O,domEvent:Xe}),ne==="inline"&&Ke(O,!Qe))},Dn=_n(function(ke){Q==null||Q(qn(ke)),Re(ke)}),on=function(Xe){ne!=="inline"&&Ke(O,Xe)},Pn=function(){Ee(O)},en=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:Kn,className:"".concat(Pe,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":re&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:Pn},un),y,n.createElement(f,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),jn=n.useRef(ne);if(ne!=="inline"&&(jn.current=Ne.length>1?"vertical":ne),!re){var cn=jn.current;sn=n.createElement(Da,{mode:cn,prefixCls:Pe,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Fn,{mode:cn},n.createElement(Xt,{id:en,ref:qe},$)),disabled:De,onVisibleChange:on},sn)}return n.createElement(Fn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(A.Item,Object(L.a)({role:"none"},Z,{component:"li",style:b,className:je()(Pe,"".concat(Pe,"-").concat(ne),C,(c={},Object(ce.a)(c,"".concat(Pe,"-open"),Le),Object(ce.a)(c,"".concat(Pe,"-active"),Un),Object(ce.a)(c,"".concat(Pe,"-selected"),Sn),Object(ce.a)(c,"".concat(Pe,"-disabled"),De),c)),onMouseEnter:xe,onMouseLeave:Wn}),sn,!re&&n.createElement(ja,{id:en,open:Le,keyPath:Ne},$)))};function Zt(t){var i=t.eventKey,c=t.children,b=ze(i),C=Pt(c,b),y=ee();n.useEffect(function(){if(y)return y.registerPath(i,b),function(){y.unregisterPath(i,b)}},[b]);var O;return y?O=C:O=n.createElement(Aa,t,C),n.createElement(Se.Provider,{value:b},O)}var Ia=e("x/xZ");function xt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(t)){var c=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),O=null;return C&&!Number.isNaN(y)?O=y:b&&O===null&&(O=0),b&&t.disabled&&(O=null),O!==null&&(O>=0||i&&O<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(b){return xt(b,i)});return xt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),b=c[i.shiftKey?0:c.length-1],C=b===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,jt,At];function Na(t,i,c,b){var C,y,O,F,W="prev",$="next",V="children",H="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var J=(C={},Object(ce.a)(C,It,W),Object(ce.a)(C,ft,$),C),se=(y={},Object(ce.a)(y,jt,c?$:W),Object(ce.a)(y,At,c?W:$),Object(ce.a)(y,ft,V),Object(ce.a)(y,pt,V),y),Q=(O={},Object(ce.a)(O,It,W),Object(ce.a)(O,ft,$),Object(ce.a)(O,pt,V),Object(ce.a)(O,qt,H),Object(ce.a)(O,jt,c?V:H),Object(ce.a)(O,At,c?H:V),O),Y={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},ue=(F=Y["".concat(t).concat(i?"":"Sub")])===null||F===void 0?void 0:F[b];switch(ue){case W:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ba(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ma(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ta(t,i){var c=kt(t,!0);return c.filter(function(b){return i.has(b)})}function ea(t,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ta(t,i),y=C.length,O=C.findIndex(function(F){return c===F});return b<0?O===-1?O=y-1:O-=1:b>0&&(O+=1),O=(O+y)%y,C[O]}function wa(t,i,c,b,C,y,O,F,W,$){var V=n.useRef(),H=n.useRef();H.current=i;var J=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var Y,ue,U,q=function(){Y=new Set,ue=new Map,U=new Map;var ye=y();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(b,he),"']"));Re&&(Y.add(Re),U.set(Re,he),ue.set(he,Re))}),Y};q();var ae=ue.get(i),Z=Ma(ae,Y),le=U.get(Z),k=Na(t,O(le,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);F(Ke),J(),V.current=Object(Ye.a)(function(){H.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=C.current:ne=Ba(Z);var de=ea(ne,Y,Z,k.offset);be(de)}else if(k.inlineTrigger)W(le);else if(k.offset>0)W(le,!0),J(),V.current=Object(Ye.a)(function(){q();var oe=Z.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Y);be(he)},5);else if(k.offset<0){var fe=O(le,!0),re=fe[fe.length-2],X=ue.get(re);W(re,!1),be(X)}}$==null||$(se)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var i=Object(On.a)(t,{value:t}),c=Object(K.a)(i,2),b=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(Wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),b}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},$a=function(i){return i.split(Nt)},Bt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(K.a)(t,2),c=i[1],b=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),O=Object(K.a)(y,2),F=O[0],W=O[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,q){var ae=ta(q);C.current.set(ae,U),b.current.set(U,ae),$.current+=1;var Z=$.current;La(function(){Z===$.current&&c({})})},[]),H=Object(n.useCallback)(function(U,q){var ae=ta(q);C.current.delete(ae),b.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var ae=b.current.get(U)||"",Z=$a(ae);return q&&F.includes(Z[0])&&Z.unshift(Bt),Z},[F]),Q=Object(n.useCallback)(function(U,q){return U.some(function(ae){var Z=se(ae,!0);return Z.includes(q)})},[se]),Y=function(){var q=Object(fn.a)(b.current.keys());return F.length&&q.push(Bt),q},ue=Object(n.useCallback)(function(U){var q="".concat(b.current.get(U)).concat(Nt),ae=new Set;return Object(fn.a)(C.current.keys()).forEach(function(Z){Z.startsWith(q)&&ae.add(C.current.get(Z))}),ae},[]);return{registerPath:V,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:Y,getSubPathKeys:ue}}var vt=[],za=function(i){var c,b,C=i.prefixCls,y=C===void 0?"rc-menu":C,O=i.style,F=i.className,W=i.tabIndex,$=W===void 0?0:W,V=i.children,H=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,Y=i.inlineCollapsed,ue=i.disabled,U=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Z=i.subMenuCloseDelay,le=Z===void 0?.1:Z,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ne=i.openKeys,de=i.activeKey,fe=i.defaultActiveFirst,re=i.selectable,X=re===void 0?!0:re,oe=i.multiple,ye=oe===void 0?!1:oe,he=i.defaultSelectedKeys,Re=i.selectedKeys,Ke=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,Me=Oe===void 0?24:Oe,Ne=i.motion,Pe=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,Sn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,un=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ae=Object(Ie.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt(V,vt),_e=n.useState(!1),xe=Object(K.a)(_e,2),Wn=xe[0],Un=xe[1],Kn=n.useRef(),rn=Ka(J),Dn=H==="rtl",on=n.useMemo(function(){return Q==="inline"&&Y?["vertical",Y]:[Q,!1]},[Q,Y]),Pn=Object(K.a)(on,2),en=Pn[0],sn=Pn[1],jn=n.useState(0),cn=Object(K.a)(jn,2),ke=cn[0],Xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(On.a)(be,{value:ne,postState:function(x){return x||vt}}),et=Object(K.a)(Gn,2),En=et[0],hn=et[1],Hn=n.useState(En),Cn=Object(K.a)(Hn,2),mn=Cn[0],Xn=Cn[1],An=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){An&&Xn(En)},[En]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Ze==null||Ze(te)}},[An]);var dn=Va(),In=dn.registerPath,ve=dn.unregisterPath,Fe=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Fe(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(On.a)(de||fe&&((c=He[0])===null||c===void 0?void 0:c.key),{value:de}),nt=Object(K.a)(Lt,2),yt=nt[0],lt=nt[1],bt=_n(function(te){lt(te)}),$t=_n(function(){lt(void 0)}),Et=Object(On.a)(he||[],{value:Re,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(K.a)(Et,2),tt=Ct[0],Nn=Ct[1],Ot=function(x){if(!!X){var Ce=x.key,Je=tt.includes(Ce),ln;Je?ln=tt.filter(function(xn){return xn!==Ce}):ye?ln=[].concat(Object(fn.a)(tt),[Ce]):ln=[Ce],Nn(ln);var zn=Object(me.a)(Object(me.a)({},x),{},{selectedKeys:ln});Je?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Rt=_n(function(te){an==null||an(qn(te)),Ot(te)}),ut=_n(function(te,x){var Ce=En.filter(function(ln){return ln!==te});if(x)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(ln){return!Je.has(ln)})}l()(En,Ce)||(hn(Ce),Ze==null||Ze(Ce))}),Zn=_n(Sn),ot=function(x,Ce){var Je=Ce!=null?Ce:!En.includes(x);ut(x,Je)},dt=wa(en,yt,Dn,rn,Kn,Yn,nn,lt,ot,un);n.useEffect(function(){Un(!0)},[]);var Ft=en!=="horizontal"||U?He:He.map(function(te,x){return n.createElement(Fn,{key:te.key,overflowDisabled:x>ke},te)}),St=n.createElement(A,Object(L.a)({id:J,ref:Kn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:je()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),F,(b={},Object(ce.a)(b,"".concat(y,"-inline-collapsed"),sn),Object(ce.a)(b,"".concat(y,"-rtl"),Dn),b)),dir:H,style:O,role:"menu",tabIndex:$,data:Ft,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Zt,{eventKey:Bt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?A.INVALIDATE:A.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Ae));return n.createElement(Ut.Provider,{value:rn},n.createElement(Fn,{prefixCls:y,mode:en,openKeys:En,rtl:Dn,disabled:ue,motion:Wn?Ne:null,defaultMotions:Wn?Pe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:le,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:ut},n.createElement(Ge.Provider,{value:Kt},St),n.createElement(pe.Provider,{value:Wt},He)))},Ua=za,Ja=function(i){var c=i.className,b=i.title,C=i.eventKey,y=i.children,O=Object(Ie.a)(i,["className","title","eventKey","children"]),F=n.useContext(We),W=F.prefixCls,$="".concat(W,"-item-group");return n.createElement("li",Object(L.a)({},O,{onClick:function(H){return H.stopPropagation()},className:je()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ga(t){var i=t.children,c=Object(Ie.a)(t,["children"]),b=ze(c.eventKey),C=Pt(i,b),y=ee();return y?C:n.createElement(Ja,c,C)}function Ha(t){var i=t.className,c=t.style,b=n.useContext(We),C=b.prefixCls,y=ee();return y?null:n.createElement("li",{className:je()("".concat(C,"-item-divider"),i),style:c})}var st=Ua;st.Item=Dt,st.SubMenu=Zt,st.ItemGroup=Ga,st.Divider=Ha;var Xa=st,Qa=e("eDIo");function Ya(t,i){var c=t.prefixCls,b=t.editable,C=t.locale,y=t.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(F){b.onEdit("add",{event:F})}},b.addIcon||"+")}var aa=n.forwardRef(Ya);function Za(t,i){var c=t.prefixCls,b=t.id,C=t.tabs,y=t.locale,O=t.mobile,F=t.moreIcon,W=F===void 0?"More":F,$=t.moreTransitionName,V=t.style,H=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,Y=t.onTabClick,ue=Object(n.useState)(!1),U=Object(K.a)(ue,2),q=U[0],ae=U[1],Z=Object(n.useState)(null),le=Object(K.a)(Z,2),k=le[0],be=le[1],ne="".concat(b,"-more-popup"),de="".concat(c,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=y==null?void 0:y.dropdownAriaLabel,X=n.createElement(Xa,{onClick:function(Oe){var Me=Oe.key,Ne=Oe.domEvent;Y(Me,Ne),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},C.map(function(Ee){return n.createElement(Dt,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function oe(Ee){for(var Oe=C.filter(function($e){return!$e.disabled}),Me=Oe.findIndex(function($e){return $e.key===k})||0,Ne=Oe.length,Pe=0;Pe<Ne;Pe+=1){Me=(Me+Ee+Ne)%Ne;var De=Oe[Me];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(ae(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:oe(-1),Ee.preventDefault();break;case we.a.DOWN:oe(1),Ee.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(ce.a)({},Q?"marginLeft":"marginRight",se);C.length||(he.visibility="hidden",he.order=1);var Re=je()(Object(ce.a)({},"".concat(de,"-rtl"),Q)),Ke=O?null:n.createElement(Qa.default,{prefixCls:de,overlay:X,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(b,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:je()("".concat(c,"-nav-operations"),H),style:V,ref:i},Ke,n.createElement(aa,{prefixCls:c,locale:y,editable:J}))}var xa=n.forwardRef(Za),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),b=Object(K.a)(c,2),C=b[0],y=b[1],O=Object(n.useState)(0),F=Object(K.a)(O,2),W=F[0],$=F[1],V=Object(n.useState)(0),H=Object(K.a)(V,2),J=H[0],se=H[1],Q=Object(n.useState)(),Y=Object(K.a)(Q,2),ue=Y[0],U=Y[1],q=Object(n.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,X=fe.screenY;y({x:re,y:X}),window.clearInterval(q.current)}function Z(de){if(!!C){de.preventDefault();var fe=de.touches[0],re=fe.screenX,X=fe.screenY;y({x:re,y:X});var oe=re-C.x,ye=X-C.y;i(oe,ye);var he=Date.now();$(he),se(he-W),U({x:oe,y:ye})}}function le(){if(!!C&&(y(null),U(null),ue)){var de=ue.x/J,fe=ue.y/J,re=Math.abs(de),X=Math.abs(fe);if(Math.max(re,X)<ka)return;var oe=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ia,ye*=ia,i(oe*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(de){var fe=de.deltaX,re=de.deltaY,X=0,oe=Math.abs(fe),ye=Math.abs(re);oe===ye?X=k.current==="x"?fe:re:oe>ye?(X=fe,k.current="x"):(X=re,k.current="y"),i(-X,-X)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Z,onTouchEnd:le,onWheel:be},n.useEffect(function(){function de(oe){ne.current.onTouchStart(oe)}function fe(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function X(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",X),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(b){return t.current.has(b)||t.current.set(b,n.createRef()),t.current.get(b)}function c(b){t.current.delete(b)}return[i,c]}function sa(t,i){var c=n.useRef(t),b=n.useState({}),C=Object(K.a)(b,2),y=C[1];function O(F){var W=typeof F=="function"?F(c.current):F;W!==c.current&&i(W,c.current),c.current=W,y({})}return[c.current,O]}var la=function(i){var c=i.position,b=i.prefixCls,C=i.extra;if(!C)return null;var y,O=C;return c==="right"&&(y=O.right||!O.left&&O||null),c==="left"&&(y=O.left||null),y?n.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function er(t,i){var c,b=n.useContext(Mt),C=b.prefixCls,y=b.tabs,O=t.className,F=t.style,W=t.id,$=t.animated,V=t.activeKey,H=t.rtl,J=t.extra,se=t.editable,Q=t.locale,Y=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Z=Object(n.useRef)(),le=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),de=Object(K.a)(ne,2),fe=de[0],re=de[1],X=Y==="top"||Y==="bottom",oe=sa(0,function(te,x){X&&ae&&ae({direction:te>x?"left":"right"})}),ye=Object(K.a)(oe,2),he=ye[0],Re=ye[1],Ke=sa(0,function(te,x){!X&&ae&&ae({direction:te>x?"top":"bottom"})}),Ee=Object(K.a)(Ke,2),Oe=Ee[0],Me=Ee[1],Ne=Object(n.useState)(0),Pe=Object(K.a)(Ne,2),De=Pe[0],$e=Pe[1],qe=Object(n.useState)(0),Ve=Object(K.a)(qe,2),Ue=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),Sn=Object(K.a)(Le,2),an=Sn[0],Ze=Sn[1],un=Object(n.useState)(0),yn=Object(K.a)(un,2),bn=yn[0],Ae=yn[1],He=Object(n.useState)(null),_e=Object(K.a)(He,2),xe=_e[0],Wn=_e[1],Un=Object(n.useState)(null),Kn=Object(K.a)(Un,2),rn=Kn[0],Dn=Kn[1],on=Object(n.useState)(0),Pn=Object(K.a)(on,2),en=Pn[0],sn=Pn[1],jn=Object(n.useState)(0),cn=Object(K.a)(jn,2),ke=cn[0],Xe=cn[1],Jn=Rn(new Map),Gn=Object(K.a)(Jn,2),et=Gn[0],En=Gn[1],hn=P(y,et,De),Hn="".concat(C,"-nav-operations-hidden"),Cn=0,mn=0;X?H?(Cn=0,mn=Math.max(0,De-xe)):(Cn=Math.min(0,xe-De),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Xn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(K.a)(Qn,2),In=dn[0],ve=dn[1];function Fe(){ve(Date.now())}function Te(){window.clearTimeout(An.current)}qa(Z,function(te,x){function Ce(Je,ln){Je(function(zn){var xn=Xn(zn+ln);return xn})}if(X){if(xe>=De)return!1;Ce(Re,te)}else{if(rn>=Ue)return!1;Ce(Me,x)}return Te(),Fe(),!0}),Object(n.useEffect)(function(){return Te(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),Te},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(X){var Ce=he;H?x.right<he?Ce=x.right:x.right+x.width>he+xe&&(Ce=x.right+x.width-xe):x.left<-he?Ce=-x.left:x.left+x.width>-he+xe&&(Ce=-(x.left+x.width-xe)),Me(0),Re(Xn(Ce))}else{var Je=Oe;x.top<-Oe?Je=-x.top:x.top+x.height>-Oe+rn&&(Je=-(x.top+x.height-rn)),Re(0),Me(Xn(Je))}}var Yn=j(hn,{width:xe,height:rn,left:he,top:Oe},{width:an,height:bn},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:y})),gt=Object(K.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=y.map(function(te){var x=te.key;return n.createElement($n,{id:W,prefixCls:C,key:x,rtl:H,tab:te,closable:te.closable,editable:se,active:x===V,tabPosition:Y,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:fe(x),onClick:function(Je){q(x,Je)},onRemove:function(){re(x)},onFocus:function(){nn(x),Fe(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),nt=wn(function(){var te,x,Ce,Je,ln,zn,xn,Vt,zt,ur=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((ln=k.current)===null||ln===void 0?void 0:ln.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(ur),Dn(or),sn(ma),Xe(fa);var pa=(((xn=le.current)===null||xn===void 0?void 0:xn.offsetWidth)||0)-ma,va=(((Vt=le.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Qe(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Ze(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),En(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=y.slice(0,Wt),lt=y.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(lt)),$t=Object(n.useState)(),Et=Object(K.a)($t,2),Ct=Et[0],tt=Et[1],Nn=hn.get(V),Ot=Object(n.useRef)();function Rt(){Ye.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return Nn&&(X?(H?te.right=Nn.right:te.left=Nn.left,te.width=Nn.width):(te.top=Nn.top,te.height=Nn.height)),Rt(),Ot.current=Object(Ye.a)(function(){tt(te)}),Rt},[Nn,X,H]),Object(n.useEffect)(function(){nn()},[V,Nn,hn,X]),Object(n.useEffect)(function(){nt()},[H,ue,V,y.map(function(te){return te.key}).join("_")]);var ut=!!bt.length,Zn="".concat(C,"-nav-wrap"),ot,dt,Ft,St;return X?H?(dt=he>0,ot=he+xe<De):(ot=he<0,dt=-he+xe<De):(Ft=Oe<0,St=-Oe+rn<Ue),n.createElement("div",{ref:i,role:"tablist",className:je()("".concat(C,"-nav"),O),style:F,onKeyDown:function(){Fe()}},n.createElement(la,{position:"left",extra:J,prefixCls:C}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:je()(Zn,(c={},Object(ce.a)(c,"".concat(Zn,"-ping-left"),ot),Object(ce.a)(c,"".concat(Zn,"-ping-right"),dt),Object(ce.a)(c,"".concat(Zn,"-ping-top"),Ft),Object(ce.a)(c,"".concat(Zn,"-ping-bottom"),St),c)),ref:Z},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:le,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:C,locale:Q,editable:se,style:{visibility:ut?"hidden":null}}),n.createElement("div",{className:je()("".concat(C,"-ink-bar"),Object(ce.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(xa,Object(L.a)({},t,{ref:k,prefixCls:C,tabs:bt,className:!ut&&Hn})),n.createElement(la,{position:"right",extra:J,prefixCls:C}))}var ua=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,b=t.animated,C=t.tabPosition,y=t.rtl,O=t.destroyInactiveTabPane,F=n.useContext(Mt),W=F.prefixCls,$=F.tabs,V=b.tabPane,H=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:je()("".concat(W,"-content-holder"))},n.createElement("div",{className:je()("".concat(W,"-content"),"".concat(W,"-content-").concat(C),Object(ce.a)({},"".concat(W,"-content-animated"),V)),style:H&&V?Object(ce.a)({},y?"marginRight":"marginLeft","-".concat(H,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:O})})))}function oa(t){var i=t.prefixCls,c=t.forceRender,b=t.className,C=t.style,y=t.id,O=t.active,F=t.animated,W=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,H=n.useState(c),J=Object(K.a)(H,2),se=J[0],Q=J[1];n.useEffect(function(){O?Q(!0):W&&Q(!1)},[O,W]);var Y={};return O||(F?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!O,style:Object(me.a)(Object(me.a)({},Y),C),className:je()("".concat(i,"-tabpane"),O&&"".concat(i,"-tabpane-active"),b)},(O||se||c)&&V)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(me.a)(Object(me.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,b=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,O=t.className,F=t.children,W=t.direction,$=t.activeKey,V=t.defaultActiveKey,H=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,Y=Q===void 0?"top":Q,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Z=t.moreIcon,le=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Ie.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),X=tr(F),oe=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Re=Object(K.a)(he,2),Ke=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=X[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Me=Object(K.a)(Oe,2),Ne=Me[0],Pe=Me[1],De=Object(n.useState)(function(){return X.findIndex(function(Ae){return Ae.key===Ne})}),$e=Object(K.a)(De,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=X.findIndex(function(_e){return _e.key===Ne});if(Ae===-1){var He;Ae=Math.max(0,Math.min(qe,X.length-1)),Pe((He=X[Ae])===null||He===void 0?void 0:He.key)}Ve(Ae)},[X.map(function(Ae){return Ae.key}).join("_"),Ne,qe]);var Ue=Object(On.a)(null,{value:b}),Qe=Object(K.a)(Ue,2),Le=Qe[0],Sn=Qe[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){b||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ae,He){de==null||de(Ae,He),Pe(Ae),ne==null||ne(Ae)}var un={id:Le,activeKey:Ne,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},yn,bn=Object(me.a)(Object(me.a)({},un),{},{editable:H,locale:ae,moreIcon:Z,moreTransitionName:le,tabBarGutter:ue,onTabClick:Ze,onTabScroll:fe,extra:q,style:U,panes:F});return be?yn=be(bn,ua):yn=n.createElement(ua,bn),n.createElement(Mt.Provider,{value:{tabs:X,prefixCls:y}},n.createElement("div",Object(L.a)({ref:i,id:b,className:je()(y,"".concat(y,"-").concat(an),(c={},Object(ce.a)(c,"".concat(y,"-mobile"),Ke),Object(ce.a)(c,"".concat(y,"-editable"),H),Object(ce.a)(c,"".concat(y,"-rtl"),oe),c),O)},re),yn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:k},un,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,Tt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function wt(t,i){var c,b=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var lr=t=>{var i,c,b,C=Object(n.useRef)(),y=Object(n.useContext)(vn.context),O=y.locale,F=Object(vn.useLocaleProps)(O,t),W=Object(vn.useDemoUrl)(F.identifier),$=F.demoUrl||W,V=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(F.identifier),H=Object.keys(F.sources).length===1,J=Object(vn.useCodeSandbox)((i=F.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:F),se=Object(vn.useRiddle)((c=F.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:F),Q=Object(vn.useMotions)(F.motions||[],C.current),Y=Object(G.default)(Q,2),ue=Y[0],U=Y[1],q=Object(vn.useCopy)(),ae=Object(G.default)(q,2),Z=ae[0],le=ae[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ne=be[0],de=be[1],fe=Object(n.useState)(wt(ne,F.sources[ne])),re=Object(G.default)(fe,2),X=re[0],oe=re[1],ye=Object(n.useState)(Boolean(F.defaultShowCode)),he=Object(G.default)(ye,2),Re=he[0],Ke=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(G.default)(Ee,2),Me=Oe[0],Ne=Oe[1],Pe=F.sources[ne][X]||F.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(O,Pe),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(G.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ne(Math.random())},[Ue]);function Qe(Le){de(Le),oe(wt(Le,F.sources[Le]))}return g.a.createElement("div",{style:F.style,className:[F.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:F.identifier,"data-debug":F.debug||void 0,"data-iframe":F.iframe||void 0},F.iframe&&g.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),g.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:F.transform?"translate(0, 0)":void 0,padding:F.compact||F.iframe&&F.compact!==!1?"0":void 0,background:F.background}},F.iframe?g.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(F.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):F.children),g.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":F.title},F.title&&g.a.createElement(vn.AnchorLink,{to:"#".concat(F.identifier)},F.title),F.description&&g.a.createElement("div",{dangerouslySetInnerHTML:{__html:F.description}})),g.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&g.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&g.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),F.motions&&g.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),F.iframe&&g.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((b=F.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&g.a.createElement(vn.Link,{target:"_blank",to:$},g.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),g.a.createElement("span",null),g.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>Z(Pe)}),X==="tsx"&&Re&&g.a.createElement(vn.Link,{target:"_blank",to:De},g.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),g.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&g.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&g.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(F.sources).map(Le=>g.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,F.sources[Le])):Le,key:Le}))),g.a.createElement("div",{className:"__dumi-default-previewer-source"},g.a.createElement(sr.a,{code:Pe,lang:X,showCopy:!1}))))},Er=gn.default=lr},"2XY2":function(Bn,gn,e){"use strict";e.r(gn);var G=e("q1tI"),n=e.n(G),g=e("dEAq"),L=e.n(g),ce=e("0zqC"),K=e("ZpkN"),tn=e("JjdP"),Ie=n.a.memo(tn.default["chart-render-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&g.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"ChartRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(g.Link,{to:"https://www.npmjs.com/package/chart-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/chart-render.svg?style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/chart-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u56FE\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u56FE\u8868\u5C55\u793A\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(g.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u53EA\u9700\u8981\u5173\u5FC3\u4F60\u7684\u6570\u636E\uFF0C\u4F20\u5165 ",n.a.createElement("code",null,"meta"),"\u3001",n.a.createElement("code",null,"data")," \u5373\u53EF\u51FA\u56FE\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u5F00\u53D1\u4F53\u9A8C\u8212\u9002"),"\uFF1A\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u56FE\u8868\u7528 Ant Design Charts \u6765\u63D0\u4F9B\uFF0C\u81EA\u5B9A\u4E49\u7684\u6837\u5F0F\u652F\u6301\u53C2\u6570\u900F\u4F20\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9700\u8981\u9488\u5BF9\u4E00\u5806\u6570\u636E\u5FEB\u901F\u5EFA\u7ACB\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5E76\u4E14\u9700\u8981 ",n.a.createElement("strong",null,"\u6298\u7EBF\u56FE/\u67F1\u72B6\u56FE/\u4EA4\u53C9\u8868")," \u9891\u7E41\u5207\u6362\u67E5\u770B\u3002"),n.a.createElement("li",null,"\u524D\u7AEF\u5C0F\u767D\uFF0C\u53EA\u5173\u5FC3\u624B\u91CC\u7684\u6570\u636E\uFF0C\u4E0D\u60F3\u770B\u957F\u7BC7\u5927\u8BBA\u4E86\u89E3\u90A3\u4E9B\u56FE\u8868\u5E93\u8BE5\u600E\u4E48\u4F7F\u7528\uFF0C\u53EA\u60F3\u642D\u4E2A\u56FE\u8868\u770B\u3002"),n.a.createElement("li",null,"\u63D0\u4F9B\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u4EA4\u53C9\u8868\u4E09\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u56FE\u8868\u7ED8\u5236\uFF1A",n.a.createElement("ul",null,n.a.createElement("li",null,"\u6298\u7EBF\u56FE\uFF1A\u5E38\u7528\u6765\u89C2\u5BDF\u8D44\u6599\u5728\u4E00\u6BB5\u7EF4\u5EA6\u4E4B\u5185\u7684\u53D8\u5316\uFF0C\u5982\u679C X \u8F74\u4E3A\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6298\u7EBF\u56FE\u53C8\u79F0\u4E3A\u8D8B\u52BF\u56FE\u3002"),n.a.createElement("li",null,"\u67F1\u72B6\u56FE\uFF1A\u63CF\u8FF0\u7684\u662F\u5206\u7C7B\u6570\u636E\uFF0C\u5E38\u7528\u6765\u56DE\u7B54\u7684\u662F\u6BCF\u4E00\u4E2A\u5206\u7C7B\u4E2D\u300C\u6709\u591A\u5C11\uFF1F\u300D\u8FD9\u4E2A\u95EE\u9898\u3002"),n.a.createElement("li",null,"\u4EA4\u53C9\u8868\uFF1A\u662F\u4E00\u79CD\u77E9\u9635\u5F62\u5F0F\u7684\u8868\u683C\uFF0C\u62E5\u6709\u6700\u5F3A\u5927\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C55\u793A\u65E0\u9650\u6307\u6807\u548C\u65E0\u9650\u7EF4\u5EA6\u95F4\u7684\u5173\u7CFB\u3002")))),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(g.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"chart-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(K.a,{code:"$ npm install chart-render --save",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(g.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(ce.default,tn.default["chart-render-demo"].previewerProps,n.a.createElement(Ie,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(g.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"\u901A\u7528\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#\u901A\u7528\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u53C2\u6570"),n.a.createElement("p",null,"\u6240\u6709\u7684\u56FE\u8868\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B 4 \u4E2A\u5165\u53C2\uFF08",n.a.createElement("strong",null,n.a.createElement("code",null,"data")," \u548C ",n.a.createElement("code",null,"meta")," \u662F\u5FC5\u4F20\u7684\u53C2\u6570"),"\uFF0C\u8BF7\u52A1\u5FC5\u6CE8\u610F\uFF09\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE81")),n.a.createElement("td",null,n.a.createElement("code",null,"IDataItem[]")),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE82")),n.a.createElement("td",null,n.a.createElement("code",null,"IMetaItem[]")),n.a.createElement("td",null,"\u662F")))),n.a.createElement("h5",{id:"\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 1\uFF1A\u901A\u7528\u53C2\u6570 - data \u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u662F\u666E\u901A\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(K.a,{code:`[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
];`,lang:"js"}),n.a.createElement("h5",{id:"\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 2\uFF1A\u901A\u7528\u53C2\u6570 - meta \u5143\u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u7528\u6765\u63CF\u8FF0 data \u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u4E1C\u897F\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(K.a,{code:`/**
 * id: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u540D
 * name: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u7684\u63CF\u8FF0
 * isDim: \u662F\u5426\u662F\u7EF4\u5EA6\uFF0C\`true\`-\u7EF4\u5EA6\uFF0C\`false\`-\u6307\u6807
 * isRate: \u662F\u5426\u662F\u767E\u5206\u6570\uFF0C\u4EC5\u9650\u6307\u6807\u4F7F\u7528\uFF0C\u542F\u7528\u540E\uFF0C\u6570\u503C \`0.5\` \u4F1A\u4EE5 \`50%\` \u6765\u8F93\u51FA\u6E32\u67D3
 */
[
  { id: 'date', name: '\u65E5\u671F', isDim: true, isRate: false },
  { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false, isRate: false },
  { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false, isRate: false },
];`,lang:"js"}),n.a.createElement("h3",{id:"line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Line \u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"withArea"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u9762\u79EF\u56FE\u5C55\u793A",n.a.createElement("br",null)," - \u6CE8\u610F\u9762\u79EF\u56FE\u9ED8\u8BA4\u5806\u53E0\u5C55\u793A\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u4EE5\u4F20\u5165 ",n.a.createElement("code",null,"isStack=","{","false","}")," \u8986\u76D6",n.a.createElement("br",null)," - \u5F00\u542F\u9762\u79EF\u56FE\u540E\u65B9\u53EF\u4F7F\u7528 ",n.a.createElement("code",null,"areaStyle")," ",n.a.createElement("code",null,"startOnZero")," ",n.a.createElement("code",null,"isPercent")," \u5C5E\u6027"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u70B9\u3001\u7EBF\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/line?type=api"},"\u6298\u7EBF\u56FE\u53C2\u6570\u8868")," ",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/area?type=api"},"\u9762\u79EF\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"inverted"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u6761\u5F62\u56FE\u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u989C\u8272\u3001\u67F1\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/column?type=api"},"\u67F1\u72B6\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662F\u5426\u5C55\u793A\u603B\u8BA1\u5C0F\u8BA1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u603B\u8BA1\u5C0F\u8BA1\u7684\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string]")),n.a.createElement("td",null,n.a.createElement("code",null,"['\u603B\u8BA1', '\u5C0F\u8BA1']")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5C55\u793A\u4F4D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"'left' | 'top'")),n.a.createElement("td",null,n.a.createElement("code",null,"'top'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683C\u5C3A\u5BF8"),n.a.createElement("td",null,n.a.createElement("code",null,"'small' | 'middle' | 'large'")),n.a.createElement("td",null,n.a.createElement("code",null,"'middle'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u653E\u591A\u5C11\u4E2A\uFF0C\u8D85\u51FA\u7684\u7EF4\u5EA6\u4F1A\u653E\u5230\u8868\u683C\u9876\u90E8"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftExpandable"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"topExpandable"),n.a.createElement("td",null,"\u9876\u90E8\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683C\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u89C1",n.a.createElement(g.AnchorLink,{to:"./demo/pivot-table#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%95%E5%85%83%E6%A0%BC%E6%B8%B2%E6%9F%93"},"\u4EA4\u53C9\u8868\u6848\u4F8B - \u9AD8\u7EA7\u6848\u4F8B - \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement("td",null,n.a.createElement("code",null,"(value: any, dimRecord: IDataItem, indId: string ) => React.ReactNode")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426"))))))))},"80pN":function(Bn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),g=e("q1tI"),L=e("i8i4"),ce=e("QCnb");function K(f){for(var I="https://reactjs.org/docs/error-decoder.html?invariant="+f,B=1;B<arguments.length;B++)I+="&args[]="+encodeURIComponent(arguments[B]);return"Minified React error #"+f+"; visit "+I+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ie(f){var I=f,B=f;if(f.alternate)for(;I.return;)I=I.return;else{f=I;do I=f,(I.effectTag&1026)!=0&&(B=I.return),f=I.return;while(f)}return I.tag===3?B:null}function me(f){if(Ie(f)!==f)throw Error(K(188))}function at(f){var I=f.alternate;if(!I){if(I=Ie(f),I===null)throw Error(K(188));return I!==f?null:f}for(var B=f,pe=I;;){var ee=B.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(pe=ee.return,pe!==null){B=pe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===B)return me(ee),f;if(Se===pe)return me(ee),I;Se=Se.sibling}throw Error(K(188))}if(B.return!==pe.return)B=ee,pe=Se;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===B){ze=!0,B=ee,pe=Se;break}if(Ge===pe){ze=!0,pe=ee,B=Se;break}Ge=Ge.sibling}if(!ze){for(Ge=Se.child;Ge;){if(Ge===B){ze=!0,B=Se,pe=ee;break}if(Ge===pe){ze=!0,pe=Se,B=ee;break}Ge=Ge.sibling}if(!ze)throw Error(K(189))}}if(B.alternate!==pe)throw Error(K(190))}if(B.tag!==3)throw Error(K(188));return B.stateNode.current===B?f:I}function je(){return!0}function Mn(){return!1}function Tn(f,I,B,pe){this.dispatchConfig=f,this._targetInst=I,this.nativeEvent=B,f=this.constructor.Interface;for(var ee in f)f.hasOwnProperty(ee)&&((I=f[ee])?this[ee]=I(B):ee==="target"?this.target=pe:this[ee]=B[ee]);return this.isDefaultPrevented=(B.defaultPrevented!=null?B.defaultPrevented:B.returnValue===!1)?je:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:Mn,destructor:function(){var f=this.constructor.Interface,I;for(I in f)this[I]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(f){function I(){}function B(){return pe.apply(this,arguments)}var pe=this;I.prototype=pe.prototype;var ee=new I;return n(ee,B.prototype),B.prototype=ee,B.prototype.constructor=B,B.Interface=n({},pe.Interface,f),B.extend=pe.extend,Ye(B),B},Ye(Tn);function On(f,I,B,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,f,I,B,pe),ee}return new this(f,I,B,pe)}function fn(f){if(!(f instanceof this))throw Error(K(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ye(f){f.eventPool=[],f.getPooled=On,f.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(f,I){var B={};return B[f.toLowerCase()]=I.toLowerCase(),B["Webkit"+f]="webkit"+I,B["Moz"+f]="moz"+I,B}var Rn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function $n(f){if(we[f])return we[f];if(!Rn[f])return f;var I=Rn[f],B;for(B in I)if(I.hasOwnProperty(B)&&B in kn)return we[f]=I[B];return f}var rt=$n("animationend"),P=$n("animationiteration"),D=$n("animationstart"),j=$n("transitionend"),d=null;function l(f){if(d===null)try{var I=("require"+Math.random()).slice(0,7);d=(G&&G[I])("timers").setImmediate}catch(B){d=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return d(f)}var p=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,E=p[11],R=p[12],a=L.unstable_batchedUpdates,u=tn.IsSomeRendererActing,s=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var f=!1;E();)f=!0;return f};function M(f){try{N(),l(function(){N()?M(f):f()})}catch(I){f(I)}}var S=0,o=!1,T=L.findDOMNode,m=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=m[0],h=m[4],v=m[5],A=m[6],w=m[7],z=m[8],_=m[9],ie=m[10];function ge(){}function pn(f,I){if(!f)return[];if(f=at(f),!f)return[];for(var B=f,pe=[];;){if(B.tag===5||B.tag===6||B.tag===1||B.tag===0){var ee=B.stateNode;I(ee)&&pe.push(ee)}if(B.child)B.child.return=B,B=B.child;else{if(B===f)return pe;for(;!B.sibling;){if(!B.return||B.return===f)return pe;B=B.return}B.sibling.return=B.return,B=B.sibling}}}function We(f,I){if(f&&!f._reactInternalFiber){var B=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":B==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":B,Error(K(286,I,f))}}var Be={renderIntoDocument:function(f){var I=document.createElement("div");return L.render(f,I)},isElement:function(f){return g.isValidElement(f)},isElementOfType:function(f,I){return g.isValidElement(f)&&f.type===I},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&g.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Be.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,I){return Be.isCompositeComponent(f)?f._reactInternalFiber.type===I:!1},findAllInRenderedTree:function(f,I){return We(f,"findAllInRenderedTree"),f?pn(f._reactInternalFiber,I):[]},scryRenderedDOMComponentsWithClass:function(f,I){return We(f,"scryRenderedDOMComponentsWithClass"),Be.findAllInRenderedTree(f,function(B){if(Be.isDOMComponent(B)){var pe=B.className;typeof pe!="string"&&(pe=B.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(I)){if(I===void 0)throw Error(K(11));I=I.split(/\s+/)}return I.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,I){if(We(f,"findRenderedDOMComponentWithClass"),f=Be.scryRenderedDOMComponentsWithClass(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+I);return f[0]},scryRenderedDOMComponentsWithTag:function(f,I){return We(f,"scryRenderedDOMComponentsWithTag"),Be.findAllInRenderedTree(f,function(B){return Be.isDOMComponent(B)&&B.tagName.toUpperCase()===I.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,I){if(We(f,"findRenderedDOMComponentWithTag"),f=Be.scryRenderedDOMComponentsWithTag(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+I);return f[0]},scryRenderedComponentsWithType:function(f,I){return We(f,"scryRenderedComponentsWithType"),Be.findAllInRenderedTree(f,function(B){return Be.isCompositeComponentWithType(B,I)})},findRenderedComponentWithType:function(f,I){if(We(f,"findRenderedComponentWithType"),f=Be.scryRenderedComponentsWithType(f,I),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+I);return f[0]},mockComponent:function(f,I){return I=I||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return g.createElement(I,null,this.props.children)}),this},nativeTouchData:function(f,I){return{touches:[{pageX:f,pageY:I}]}},Simulate:null,SimulateNative:{},act:function(f){function I(){S--,u.current=B,R.current=pe}o===!1&&(o=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),S++;var B=u.current,pe=R.current;u.current=!0,R.current=!0;try{var ee=a(f)}catch(Se){throw I(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,ze){ee.then(function(){1<S||s===!0&&B===!0?(I(),Se()):M(function(Ge){I(),Ge?ze(Ge):Se()})},function(Ge){I(),ze(Ge)})}};try{S!==1||s!==!1&&B!==!1||N(),I()}catch(Se){throw I(),Se}return{then:function(Se){Se()}}}};function Fn(f){return function(I,B){if(g.isValidElement(I))throw Error(K(228));if(Be.isCompositeComponent(I))throw Error(K(229));var pe=h[f],ee=new ge;ee.target=I,ee.type=f.toLowerCase();var Se=r(I),ze=new Tn(pe,Se,ee,I);ze.persist(),n(ze,B),pe.phasedRegistrationNames?v(ze):A(ze),L.unstable_batchedUpdates(function(){w(I),ie(ze)}),z()}}Be.Simulate={};for(var it in h)Be.Simulate[it]=Fn(it);function qn(f,I){return function(B,pe){var ee=new ge(f);n(ee,pe),Be.isDOMComponent(B)?(B=T(B),ee.target=B,_(I,1,document,ee)):B.tagName&&(ee.target=B,_(I,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[P,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[j,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var I=f[1];Be.SimulateNative[I]=qn(I,f[0])}),G.exports=Be.default||Be}).call(this,e("hOG+")(Bn))},JjdP:function(Bn,gn,e){"use strict";e.r(gn);var G=e("9og8"),n=e("WmNS"),g=e.n(n),L=e("LtsZ"),ce=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,K=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,tn=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ie=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,me=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};`,at=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,je=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,Mn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Tn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,On=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,fn=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,Ye=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Ln=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      'ui:width': '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,wn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Rn=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,we=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,kn=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,$n=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,rt=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(S,o){if(!o&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=R(o);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in S)if(h!=="default"&&Object.prototype.hasOwnProperty.call(S,h)){var v=r?Object.getOwnPropertyDescriptor(S,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=S[h]}return m.default=S,T&&T.set(S,m),m},R=function(S){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(R=function(r){return r?T:o})(S)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,l=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,p=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=N.sent,u=function(){var S=(0,p.useState)("Line"),o=(0,l.default)(S,2),T=o[0],m=o[1],r={Line:E.Line,Column:E.Column,PivotTable:E.PivotTable}[T];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",u);case 18:case"end":return N.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,E=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,M,S){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},N),l.default.createElement("p",null,JSON.stringify(M)),l.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(S,o){if(!o&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=R(o);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in S)if(h!=="default"&&Object.prototype.hasOwnProperty.call(S,h)){var v=r?Object.getOwnPropertyDescriptor(S,h):null;v&&(v.get||v.set)?Object.defineProperty(m,h,v):m[h]=S[h]}return m.default=S,T&&T.set(S,m),m},R=function(S){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(R=function(r){return r?T:o})(S)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,l=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,p=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=N.sent,u=function(){var S=(0,p.useState)(!1),o=(0,l.default)(S,2),T=o[0],m=o[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return m(!T)}})),p.default.createElement(E.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",u);case 18:case"end":return N.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o,T,m;return g.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return S=function(A,w){if(!w&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var z=M(w);if(z&&z.has(A))return z.get(A);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in A)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(A,ge)){var pn=ie?Object.getOwnPropertyDescriptor(A,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=A[ge]}return _.default=A,z&&z.set(A,_),_},M=function(A){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(M=function(ie){return ie?z:w})(A)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,E=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,a=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,u=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=S,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,N=(0,h.t12)(h.t13),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(v){(0,R.default)(w,v);var A=(0,a.default)(w);function w(){return(0,p.default)(this,w),A.apply(this,arguments)}return(0,E.default)(w,[{key:"render",value:function(){var _=this.props.form;return u.default.createElement("div",null,u.default.createElement(N.default,{form:_,schema:o}),u.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(u.default.Component),m=(0,N.connectForm)(T),h.abrupt("return",m);case 47:case"end":return h.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=A?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,R=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var m=(0,R.useForm)();return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=A?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,R=(0,o.t4)(o.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var m=(0,R.useForm)(),r=function(v,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(v,null,2))};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:r}),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s;return g.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return u=function(){var o=(0,p.useForm)(),T=function(r,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(r))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:o,schema:a,onFinish:T}),l.default.createElement("button",{onClick:o.submit},"\u63D0\u4EA4"))},R=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=E(T);if(m&&m.has(o))return m.get(o);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var A=h?Object.getOwnPropertyDescriptor(o,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=o[v]}return r.default=o,m&&m.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(E=function(h){return h?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=R,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,p=(0,M.t2)(M.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=u,M.abrupt("return",s);case 17:case"end":return M.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),E=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:E("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:E("column")}))},u.abrupt("return",R);case 14:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),E={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return l.default.createElement(p.default,{schema:E})},u.abrupt("return",R);case 14:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{readOnly:!0,schema:E})},u.abrupt("return",R);case 14:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:E})},u.abrupt("return",R);case 14:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o,T;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return S=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=M(A);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},M=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:A})(v)},d=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.t8=S,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return u=r.sent,r.t10=S,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=r.sent,o=function(){var v=(0,s.useForm)(),A=(0,a.useState)({}),w=(0,R.default)(A,2),z=w[0],_=w[1],ie=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){v.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Be){Be.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Be.map(function(Fn){return Fn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Fn){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:v,schema:z,onFinish:ge}),a.default.createElement(l.default,null,a.default.createElement(p.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 48:case"end":return r.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o,T;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=N(A);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},N=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:A})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},o=function(){var v=(0,u.useForm)(),A=function(_,ie){ie.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,p.default)(_,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(Be){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(u.default,{form:v,schema:S,beforeFinish:w,onFinish:A}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=o,r.abrupt("return",T);case 42:case"end":return r.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o,T;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=N(A);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},N=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:A})(v)},d=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=M,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},o=function(){var v=(0,u.useForm)(),A=function(_,ie){ie.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,s.fakeApi)("xxx/submit",_).then(function(ge){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(_){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(u.default,{form:v,schema:S,onFinish:A}),R.default.createElement(l.default,null,R.default.createElement(p.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(p.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 44:case"end":return r.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o;return g.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return N=function(h,v){if(!v&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var A=s(v);if(A&&A.has(h))return A.get(h);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in h)if(_!=="default"&&Object.prototype.hasOwnProperty.call(h,_)){var ie=z?Object.getOwnPropertyDescriptor(h,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=h[_]}return w.default=h,A&&A.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var v=new WeakMap,A=new WeakMap;return(s=function(z){return z?A:v})(h)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,l=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,p=(0,m.t2)(m.t3),m.t4=N,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,E=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=m.sent,m.t6=N,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var h=(0,a.useForm)(),v=function(){h.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(z,_){_.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):p.default.info(JSON.stringify(z))};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(a.default,{form:h,schema:M,onMount:v,onFinish:A}),E.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},o=S,m.abrupt("return",o);case 37:case"end":return m.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['nouth', 'south', 'east', 'west'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s;return g.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return R=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=E(T);if(m&&m.has(o))return m.get(o);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var A=h?Object.getOwnPropertyDescriptor(o,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=o[v]}return r.default=o,m&&m.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(E=function(h){return h?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,l=(0,M.t0)(M.t1),M.t2=R,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var o=(0,p.useForm)();return l.default.createElement(p.default,{form:o,schema:a})},s=u,M.abrupt("return",s);case 17:case"end":return M.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return E=u.sent,R=function(){return l.default.createElement(p.default,{schema:E.expression})},u.abrupt("return",R);case 16:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return R=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var r=E(m);if(r&&r.has(T))return r.get(T);var h={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in T)if(A!=="default"&&Object.prototype.hasOwnProperty.call(T,A)){var w=v?Object.getOwnPropertyDescriptor(T,A):null;w&&(w.get||w.set)?Object.defineProperty(h,A,w):h[A]=T[A]}return h.default=T,r&&r.set(T,h),h},E=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(E=function(v){return v?r:m})(T)},S.t0=R,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,d=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=S.sent,S.t2=R,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,p=(0,S.t2)(S.t3),a=function(T){return new Promise(function(m){return setTimeout(m,T)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var T=(0,p.useForm)(),m=function(){T.setValues({input1:"hello world"}),a(3e3).then(function(h){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:T,schema:u,onMount:m})},N=s,S.abrupt("return",N);case 20:case"end":return S.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(N){var M=N.value;console.log(M)},E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(p.default,{schema:E})},a=R,s.abrupt("return",a);case 16:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s;return g.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return R=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=E(T);if(m&&m.has(o))return m.get(o);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var A=h?Object.getOwnPropertyDescriptor(o,v):null;A&&(A.get||A.set)?Object.defineProperty(r,v,A):r[v]=o[v]}return r.default=o,m&&m.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(E=function(h){return h?m:T})(o)},M.t0=R,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=M.sent,M.t2=R,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,p=(0,M.t2)(M.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var o=(0,p.useForm)(),T={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){o.setValueByPath("input2",r)}};return d.default.createElement(p.default,{form:o,schema:a,watch:T})},s=u,M.abrupt("return",s);case 19:case"end":return M.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var h=a(r);if(h&&h.has(m))return h.get(m);var v={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=A?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(v,w,z):v[w]=m[w]}return v.default=m,h&&h.set(m,v),v},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=u,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,R=(0,o.t4)(o.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var m=(0,R.useForm)(),r=function(A,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(A,null,2))},h={input1:function(A){A.length>2?m.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(R.default,{form:m,schema:s,onFinish:r,watch:h}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N,M,S,o,T;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return N=function(v,A){if(!A&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var w=s(A);if(w&&w.has(v))return w.get(v);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in v)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(v,ie)){var ge=_?Object.getOwnPropertyDescriptor(v,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=v[ie]}return z.default=v,w&&w.set(v,z),z},s=function(v){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(s=function(_){return _?w:A})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,p=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=N,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=N,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(v){return R.default.createElement(p.default,(0,E.default)({addonBefore:"http://",addonAfter:".com"},v))},o=function(){var v=(0,u.useForm)(),A=function(){};return R.default.createElement("div",null,R.default.createElement(u.default,{form:v,schema:M,widgets:{site:S},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),R.default.createElement(l.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},T=o,r.abrupt("return",T);case 40:case"end":return r.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return E=u.sent,R=function(){return l.default.createElement(p.default,{schema:E.basic})},u.abrupt("return",R);case 16:case"end":return u.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:On},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.3"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a,u,s,N;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return d=e("K+nK"),S.t0=d,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,l=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(p=S.sent,E=[],R=0;R<6;R++)E.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(T,m){return l.default.createElement("a",{onClick:function(){return alert(T.title)}},"\u7F16\u8F91")}}],s=function(){var T=function(){return{rows:E,total:E.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:a,api:T}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},N=s,S.abrupt("return",N);case 16:case"end":return S.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){var d,l,p,E,R,a;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),E={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:E}))},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(G.a)(g.a.mark(function j(){return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},j)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Bn,gn,e){},Zs1V:function(Bn){Bn.exports=JSON.parse("{}")},p8sG:function(Bn,gn,e){"use strict";Bn.exports=e("80pN")}}]);
