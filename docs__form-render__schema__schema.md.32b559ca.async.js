(window.webpackJsonp=window.webpackJsonp||[]).push([[42,10],{"0zqC":function(In,gn,e){"use strict";e.r(gn);var x=e("tJVT"),n=e("q1tI"),f=e.n(n),L=e("wx14"),ce=e("rePB"),W=e("ODXe"),tn=e("U8pU"),Be=e("Ff2n"),me=e("VTBJ"),at=e("TSYQ"),Ae=e.n(at),Mn=e("Zm9Q"),Tn=e("5Z9U"),Fn=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),Ln=e("t23M");function wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function E(){for(var C=arguments.length,y=new Array(C),F=0;F<C;F++)y[F]=arguments[F];c.current||(Qe.a.cancel(i.current),i.current=Object(Qe.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Qe.a.cancel(i.current)}},[]),E}function On(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),E=Object(W.a)(c,2),C=E[1],y=Object(n.useRef)(typeof t=="function"?t():t),F=wn(function(){var K=y.current;i.current.forEach(function($){K=$(K)}),i.current=[],y.current=K,C({})});function R(K){i.current.push(K),F()}return[y.current,R]}var we=e("4IlW");function kn(t,i){var c,E=t.prefixCls,C=t.id,y=t.active,F=t.rtl,R=t.tab,K=R.key,$=R.tab,V=R.disabled,G=R.closeIcon,J=t.tabBarGutter,ue=t.tabPosition,X=t.closable,Q=t.renderWrapper,le=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Y=t.onFocus,se="".concat(E,"-tab");n.useEffect(function(){return ae},[]);var k={};ue==="top"||ue==="bottom"?k[F?"marginLeft":"marginRight"]=J:k.marginBottom=J;var Ee=U&&X!==!1&&!V;function ne(re){V||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:K,event:re})}var fe=n.createElement("div",{key:K,ref:i,className:Ae()(se,(c={},Object(ce.a)(c,"".concat(se,"-with-remove"),Ee),Object(ce.a)(c,"".concat(se,"-active"),y),Object(ce.a)(c,"".concat(se,"-disabled"),V),c)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(K),className:"".concat(se,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(K),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Y},$),Ee&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Q&&(fe=Q(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function j(t,i,c){return Object(n.useMemo)(function(){for(var E,C=new Map,y=i.get((E=t[0])===null||E===void 0?void 0:E.key)||rt,F=y.left+y.width,R=0;R<t.length;R+=1){var K=t[R].key,$=i.get(K);if(!$){var V;$=i.get((V=t[R-1])===null||V===void 0?void 0:V.key)||rt}var G=C.get(K)||Object(me.a)({},$);G.right=F-G.left-G.width,C.set(K,G)}return C},[t.map(function(E){return E.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function A(t,i,c,E,C){var y=C.tabs,F=C.tabPosition,R=C.rtl,K,$,V;["top","bottom"].includes(F)?(K="width",$=R?"right":"left",V=Math.abs(i.left)):(K="height",$="top",V=-i.top);var G=i[K],J=c[K],ue=E[K],X=G;return J+ue>G&&(X=G-ue),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var Q=y.length,le=Q,U=0;U<Q;U+=1){var q=t.get(y[U].key)||D;if(q[$]+q[K]>V+X){le=U-1;break}}for(var ae=0,Y=Q-1;Y>=0;Y-=1){var se=t.get(y[Y].key)||D;if(se[$]<V){ae=Y+1;break}}return[ae,le]},[t,V,X,F,y.map(function(Q){return Q.key}).join("_"),R])}var d=e("Gytx"),s=e.n(d),v=e("Kwbf");function b(t,i){var c=t.prefixCls,E=t.invalidate,C=t.item,y=t.renderItem,F=t.responsive,R=t.registerSize,K=t.itemKey,$=t.className,V=t.style,G=t.children,J=t.display,ue=t.order,X=t.component,Q=X===void 0?"div":X,le=Object(Be.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=F&&!J;function q(Ee){R(K,Ee)}n.useEffect(function(){return function(){q(null)}},[]);var ae=y&&C!==void 0?y(C):G,Y;E||(Y={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:F?ue:void 0,pointerEvents:U?"none":void 0});var se={};U&&(se["aria-hidden"]=!0);var k=n.createElement(Q,Object(L.a)({className:Ae()(!E&&c,$),style:Object(me.a)(Object(me.a)({},Y),V)},se,le,{ref:i}),ae);return F&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var O=n.forwardRef(b);O.displayName="Item";var a=O;function l(){var t=Object(n.useState)({}),i=Object(W.a)(t,2),c=i[1],E=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,F=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function R(K){var $=y;y+=1,E.current.length<$+1&&(E.current[$]=K);var V=E.current[$];function G(J){E.current[$]=typeof J=="function"?J(E.current[$]):J,Qe.a.cancel(F),F=Object(Qe.a)(function(){C.current||c({})})}return[V,G]}return R}var u=function(i,c){var E=n.useContext(S);if(!E){var C=i.component,y=C===void 0?"div":C,F=Object(Be.a)(i,["component"]);return n.createElement(y,Object(L.a)({},F,{ref:c}))}var R=E.className,K=Object(Be.a)(E,["className"]),$=i.className,V=Object(Be.a)(i,["className"]);return n.createElement(S.Provider,{value:null},n.createElement(a,Object(L.a)({ref:c,className:Ae()(R,$)},K,V)))},N=n.forwardRef(u);N.displayName="RawItem";var M=N,S=n.createContext(null),o="responsive",T="invalidate";function m(t){return"+ ".concat(t.length," ...")}function r(t,i){var c=t.prefixCls,E=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,F=t.renderItem,R=t.renderRawItem,K=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,G=t.ssr,J=t.style,ue=t.className,X=t.maxCount,Q=t.renderRest,le=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Y=t.itemComponent,se=t.onVisibleChange,k=Object(Be.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ee=l(),ne=G==="full",de=Ee(null),fe=Object(W.a)(de,2),re=fe[0],H=fe[1],oe=re||0,ye=Ee(new Map),he=Object(W.a)(ye,2),Oe=he[0],Ke=he[1],be=Ee(0),Fe=Object(W.a)(be,2),Me=Fe[0],Ne=Fe[1],je=Ee(0),De=Object(W.a)(je,2),$e=De[0],qe=De[1],Ve=Ee(0),Ue=Object(W.a)(Ve,2),Xe=Ue[0],Le=Ue[1],Sn=Object(n.useState)(null),an=Object(W.a)(Sn,2),Ye=an[0],ln=an[1],yn=Object(n.useState)(null),En=Object(W.a)(yn,2),Pe=En[0],Ge=En[1],_e=n.useMemo(function(){return Pe===null&&ne?Number.MAX_SAFE_INTEGER:Pe||0},[Pe,re]),Ze=Object(n.useState)(!1),Wn=Object(W.a)(Ze,2),Un=Wn[0],Kn=Wn[1],rn="".concat(E,"-item"),Dn=Math.max(Me,$e),on=y.length&&X===o,jn=X===T,en=on||typeof X=="number"&&y.length>X,un=Object(n.useMemo)(function(){var ve=y;return on?re===null&&ne?ve=y:ve=y.slice(0,Math.min(y.length,oe/V)):typeof X=="number"&&(ve=y.slice(0,X)),ve},[y,V,re,X,on]),An=Object(n.useMemo)(function(){return on?y.slice(_e+1):y.slice(un.length)},[y,un,on,_e]),cn=Object(n.useCallback)(function(ve,Re){var Te;return typeof K=="function"?K(ve):(Te=K&&(ve==null?void 0:ve[K]))!==null&&Te!==void 0?Te:Re},[K]),ke=Object(n.useCallback)(F||function(ve){return ve},[F]);function He(ve,Re){Ge(ve),Re||(Kn(ve<y.length-1),se==null||se(ve))}function Jn(ve,Re){H(Re.clientWidth)}function xn(ve,Re){Ke(function(Te){var nn=new Map(Te);return Re===null?nn.delete(ve):nn.set(ve,Re),nn})}function et(ve,Re){qe(Re),Ne($e)}function bn(ve,Re){Le(Re)}function hn(ve){return Oe.get(cn(un[ve],ve))}n.useLayoutEffect(function(){if(oe&&Dn&&un){var ve=Xe,Re=un.length,Te=Re-1;if(!Re){He(0),ln(null);return}for(var nn=0;nn<Re;nn+=1){var Qn=hn(nn);if(Qn===void 0){He(nn-1,!0);break}if(ve+=Qn,nn===Te-1&&ve+hn(Te)<=oe){He(Te),ln(null);break}else if(ve+Dn>oe){He(nn-1),ln(ve-Qn-Xe+$e);break}else if(nn===Te){He(Te),ln(ve-Xe);break}}U&&hn(0)+Xe>oe&&ln(null)}},[oe,Oe,$e,Xe,cn,un]);var Gn=Un&&!!An.length,Cn={};Ye!==null&&on&&(Cn={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:on,component:Y,invalidate:jn},Hn=R?function(ve,Re){var Te=cn(ve,Re);return n.createElement(S.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Re,item:ve,itemKey:Te,registerSize:xn,display:Re<=_e})},R(ve,Re))}:function(ve,Re){var Te=cn(ve,Re);return n.createElement(a,Object(L.a)({},mn,{order:Re,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:xn,display:Re<=_e}))},Pn,Xn={order:Gn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Gn};if(le)le&&(Pn=n.createElement(S.Provider,{value:Object(me.a)(Object(me.a)({},mn),Xn)},le(An)));else{var dn=Q||m;Pn=n.createElement(a,Object(L.a)({},mn,Xn),typeof dn=="function"?dn(An):dn)}var Bn=n.createElement(ae,Object(L.a)({className:Ae()(!jn&&E,ue),style:J,ref:i},k),un.map(Hn),en?Pn:null,U&&n.createElement(a,Object(L.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:bn,display:!0,style:Cn}),U));return on&&(Bn=n.createElement(Ln.default,{onResize:Jn},Bn)),Bn}var g=n.forwardRef(r);g.displayName="Overflow",g.Item=M,g.RESPONSIVE=o,g.INVALIDATE=T;var h=g,P=h,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Ie(t,i){var c=Object(me.a)({},t);return Object.keys(i).forEach(function(E){var C=i[E];C!==void 0&&(c[E]=C)}),c}function Rn(t){var i=t.children,c=t.locked,E=Object(Be.a)(t,["children","locked"]),C=n.useContext(We),y=Object(pn.a)(function(){return Ie(C,E)},[C,E],function(F,R){return!c&&(F[0]!==R[0]||!s()(F[1],R[1]))});return n.createElement(We.Provider,{value:y},i)}function it(t,i,c,E){var C=n.useContext(We),y=C.activeKey,F=C.onActive,R=C.onInactive,K={active:y===t};return i||(K.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),F(t)},K.onMouseLeave=function($){E==null||E({key:t,domEvent:$}),R(t)}),K}function qn(t){var i=t.item,c=Object(Be.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(v.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function p(t){var i=t.icon,c=t.props,E=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(me.a)({},c)):C=i,C||E||null}function B(t){var i=n.useContext(We),c=i.mode,E=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return E?{paddingRight:y*C}:{paddingLeft:y*C}}var I=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var Se=n.createContext(I);function ze(t){var i=n.useContext(Se);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var xe=n.createContext(null),Ut=n.createContext(null);function Jt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function xt(t){var i=n.useContext(Ut);return Jt(i,t)}var Ea=function(t){Object(_.a)(c,t);var i=Object(ie.a)(c);function c(){return Object(w.a)(this,c),i.apply(this,arguments)}return Object(z.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,F=C.attribute,R=C.elementRef,K=Object(Be.a)(C,["title","attribute","elementRef"]),$=Object(ge.a)(K,["eventKey"]);return Object(v.a)(!F,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(P.Item,Object(L.a)({},F,{title:typeof y=="string"?y:void 0},$,{ref:R}))}}]),c}(n.Component),ba=function(i){var c,E=i.style,C=i.className,y=i.eventKey,F=i.disabled,R=i.itemIcon,K=i.children,$=i.role,V=i.onMouseEnter,G=i.onMouseLeave,J=i.onClick,ue=i.onKeyDown,X=i.onFocus,Q=Object(Be.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=xt(y),U=n.useContext(We),q=U.prefixCls,ae=U.onItemClick,Y=U.disabled,se=U.overflowDisabled,k=U.itemIcon,Ee=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),H=Y||F,oe=ze(y),ye=function(Ve){return{key:y,keyPath:oe,item:fe.current,domEvent:Ve}},he=R||k,Oe=it(y,H,V,G),Ke=Oe.active,be=Object(Be.a)(Oe,["active"]),Fe=Ee.includes(y),Me=B(oe.length),Ne=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},je=function(Ve){if(ue==null||ue(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},De=function(Ve){ne(y),X==null||X(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Fe),n.createElement(Ea,Object(L.a)({ref:fe,elementRef:re,role:$===null?"none":$||"menuitem",tabIndex:F?null:-1,"data-menu-id":se&&le?null:le},Q,be,$e,{component:"li","aria-disabled":F,style:Object(me.a)(Object(me.a)({},Me),E),className:Ae()(de,(c={},Object(ce.a)(c,"".concat(de,"-active"),Ke),Object(ce.a)(c,"".concat(de,"-selected"),Fe),Object(ce.a)(c,"".concat(de,"-disabled"),H),c),C),onClick:Ne,onKeyDown:je,onFocus:De}),K,n.createElement(p,{props:Object(me.a)(Object(me.a)({},i),{},{isSelected:Fe}),icon:he}))};function Ca(t){var i=t.eventKey,c=ee(),E=ze(i);return n.useEffect(function(){if(c)return c.registerPath(i,E),function(){c.unregisterPath(i,E)}},[E]),c?null:n.createElement(ba,t)}var Dt=Ca;function jt(t,i){return Object(Mn.a)(t).map(function(c,E){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(i),[E]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function _n(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var E,C=arguments.length,y=new Array(C),F=0;F<C;F++)y[F]=arguments[F];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(y))},[]);return t?c:void 0}var Fa=function(i,c){var E=i.className,C=i.children,y=Object(Be.a)(i,["className","children"]),F=n.useContext(We),R=F.prefixCls,K=F.mode;return n.createElement("ul",Object(L.a)({className:Ae()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(K==="inline"?"inline":"vertical"),E)},y,{"data-menu-list":!0,ref:c}),C)},Gt=n.forwardRef(Fa);Gt.displayName="SubMenuList";var Ht=Gt,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Qt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var i=t.prefixCls,c=t.visible,E=t.children,C=t.popup,y=t.popupClassName,F=t.popupOffset,R=t.disabled,K=t.mode,$=t.onVisibleChange,V=n.useContext(We),G=V.getPopupContainer,J=V.rtl,ue=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Q=V.builtinPlacements,le=V.triggerSubMenuAction,U=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Y=n.useState(!1),se=Object(W.a)(Y,2),k=se[0],Ee=se[1],ne=J?Object(me.a)(Object(me.a)({},Ra),Q):Object(me.a)(Object(me.a)({},Xt),Q),de=Sa[K],fe=Qt(K,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){Ee(c)}),function(){Qe.a.cancel(H.current)}},[c]),n.createElement(Oa.a,{prefixCls:i,popupClassName:Ae()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),y),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:C,popupAlign:F&&{offset:F},action:R?[]:[le],mouseEnterDelay:ue,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:U,popupMotion:re},E)}var ja=e("8XRh");function Aa(t){var i=t.id,c=t.open,E=t.keyPath,C=t.children,y="inline",F=n.useContext(We),R=F.prefixCls,K=F.forceSubMenuRender,$=F.motion,V=F.defaultMotions,G=F.mode,J=n.useRef(!1);J.current=G===y;var ue=n.useState(!J.current),X=Object(W.a)(ue,2),Q=X[0],le=X[1],U=J.current?c:!1;n.useEffect(function(){J.current&&le(!1)},[G]);var q=Object(me.a)({},Qt(y,$,V));E.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),ae==null?void 0:ae(Y)},Q?null:n.createElement(Rn,{mode:y,locked:!J.current},n.createElement(ja.default,Object(L.a)({visible:U},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Y){var se=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:se,style:k},C)}))}var Pa=function(i){var c,E=i.style,C=i.className,y=i.title,F=i.eventKey,R=i.disabled,K=i.internalPopupClose,$=i.children,V=i.itemIcon,G=i.expandIcon,J=i.popupClassName,ue=i.popupOffset,X=i.onClick,Q=i.onMouseEnter,le=i.onMouseLeave,U=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Y=Object(Be.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=xt(F),k=n.useContext(We),Ee=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,Ke=k.onOpenChange,be=k.onActive,Fe=n.useContext(xe),Me=Fe.isSubPathKey,Ne=ze(),je="".concat(Ee,"-submenu"),De=fe||R,$e=n.useRef(),qe=n.useRef(),Ve=V||ye,Ue=G||he,Xe=de.includes(F),Le=!re&&Xe,Sn=Me(oe,F),an=it(F,De,q,ae),Ye=an.active,ln=Object(Be.a)(an,["active"]),yn=n.useState(!1),En=Object(W.a)(yn,2),Pe=En[0],Ge=En[1],_e=function(He){De||Ge(He)},Ze=function(He){_e(!0),Q==null||Q({key:F,domEvent:He})},Wn=function(He){_e(!1),le==null||le({key:F,domEvent:He})},Un=n.useMemo(function(){return Ye||(ne!=="inline"?Pe||Me([H],F):!1)},[ne,Ye,H,Pe,F,Me]),Kn=B(Ne.length),rn=function(He){De||(U==null||U({key:F,domEvent:He}),ne==="inline"&&Ke(F,!Xe))},Dn=_n(function(ke){X==null||X(qn(ke)),Oe(ke)}),on=function(He){ne!=="inline"&&Ke(F,He)},jn=function(){be(F)},en=se&&"".concat(se,"-popup"),un=n.createElement("div",Object(L.a)({role:"menuitem",style:Kn,className:"".concat(je,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":re&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:jn},ln),y,n.createElement(p,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(je,"-arrow")}))),An=n.useRef(ne);if(ne!=="inline"&&(An.current=Ne.length>1?"vertical":ne),!re){var cn=An.current;un=n.createElement(Da,{mode:cn,prefixCls:je,visible:!K&&Le&&ne!=="inline",popupClassName:J,popupOffset:ue,popup:n.createElement(Rn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},$)),disabled:De,onVisibleChange:on},un)}return n.createElement(Rn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(P.Item,Object(L.a)({role:"none"},Y,{component:"li",style:E,className:Ae()(je,"".concat(je,"-").concat(ne),C,(c={},Object(ce.a)(c,"".concat(je,"-open"),Le),Object(ce.a)(c,"".concat(je,"-active"),Un),Object(ce.a)(c,"".concat(je,"-selected"),Sn),Object(ce.a)(c,"".concat(je,"-disabled"),De),c)),onMouseEnter:Ze,onMouseLeave:Wn}),un,!re&&n.createElement(Aa,{id:en,open:Le,keyPath:Ne},$)))};function Yt(t){var i=t.eventKey,c=t.children,E=ze(i),C=jt(c,E),y=ee();n.useEffect(function(){if(y)return y.registerPath(i,E),function(){y.unregisterPath(i,E)}},[E]);var F;return y?F=C:F=n.createElement(Pa,t,C),n.createElement(Se.Provider,{value:E},F)}var Ba=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var c=t.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),F=null;return C&&!Number.isNaN(y)?F=y:E&&F===null&&(F=0),E&&t.disabled&&(F=null),F!==null&&(F>=0||i&&F<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(E){return Zt(E,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),E=c[i.shiftKey?0:c.length-1],C=E===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var At=we.a.LEFT,Pt=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,At,Pt];function Na(t,i,c,E){var C,y,F,R,K="prev",$="next",V="children",G="parent";if(t==="inline"&&E===pt)return{inlineTrigger:!0};var J=(C={},Object(ce.a)(C,Bt,K),Object(ce.a)(C,ft,$),C),ue=(y={},Object(ce.a)(y,At,c?$:K),Object(ce.a)(y,Pt,c?K:$),Object(ce.a)(y,ft,V),Object(ce.a)(y,pt,V),y),X=(F={},Object(ce.a)(F,Bt,K),Object(ce.a)(F,ft,$),Object(ce.a)(F,pt,V),Object(ce.a)(F,qt,G),Object(ce.a)(F,At,c?V:G),Object(ce.a)(F,Pt,c?G:V),F),Q={inline:J,horizontal:ue,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},le=(R=Q["".concat(t).concat(i?"":"Sub")])===null||R===void 0?void 0:R[E];switch(le){case K:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ia(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ma(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ta(t,i){var c=kt(t,!0);return c.filter(function(E){return i.has(E)})}function ea(t,i,c){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ta(t,i),y=C.length,F=C.findIndex(function(R){return c===R});return E<0?F===-1?F=y-1:F-=1:E>0&&(F+=1),F=(F+y)%y,C[F]}function wa(t,i,c,E,C,y,F,R,K,$){var V=n.useRef(),G=n.useRef();G.current=i;var J=function(){Qe.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(ue){var X=ue.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,le,U,q=function(){Q=new Set,le=new Map,U=new Map;var ye=y();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Jt(E,he),"']"));Oe&&(Q.add(Oe),U.set(Oe,he),le.set(he,Oe))}),Q};q();var ae=le.get(i),Y=Ma(ae,Q),se=U.get(Y),k=Na(t,F(se,!0).length===1,c,X);if(!k)return;_t.includes(X)&&ue.preventDefault();var Ee=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var Ke=U.get(ye);R(Ke),J(),V.current=Object(Qe.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Y){var ne;!Y||t==="inline"?ne=C.current:ne=Ia(Y);var de=ea(ne,Q,Y,k.offset);Ee(de)}else if(k.inlineTrigger)K(se);else if(k.offset>0)K(se,!0),J(),V.current=Object(Qe.a)(function(){q();var oe=Y.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Q);Ee(he)},5);else if(k.offset<0){var fe=F(se,!0),re=fe[fe.length-2],H=le.get(re);K(re,!1),Ee(H)}}$==null||$(ue)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var i=Object(Fn.a)(t,{value:t}),c=Object(W.a)(i,2),E=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(Wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),E}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},$a=function(i){return i.split(Nt)},It="rc-menu-more";function Va(){var t=n.useState({}),i=Object(W.a)(t,2),c=i[1],E=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),F=Object(W.a)(y,2),R=F[0],K=F[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,q){var ae=ta(q);C.current.set(ae,U),E.current.set(U,ae),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),G=Object(n.useCallback)(function(U,q){var ae=ta(q);C.current.delete(ae),E.current.delete(U)},[]),J=Object(n.useCallback)(function(U){K(U)},[]),ue=Object(n.useCallback)(function(U,q){var ae=E.current.get(U)||"",Y=$a(ae);return q&&R.includes(Y[0])&&Y.unshift(It),Y},[R]),X=Object(n.useCallback)(function(U,q){return U.some(function(ae){var Y=ue(ae,!0);return Y.includes(q)})},[ue]),Q=function(){var q=Object(fn.a)(E.current.keys());return R.length&&q.push(It),q},le=Object(n.useCallback)(function(U){var q="".concat(E.current.get(U)).concat(Nt),ae=new Set;return Object(fn.a)(C.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(C.current.get(Y))}),ae},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:ue,getKeys:Q,getSubPathKeys:le}}var vt=[],za=function(i){var c,E,C=i.prefixCls,y=C===void 0?"rc-menu":C,F=i.style,R=i.className,K=i.tabIndex,$=K===void 0?0:K,V=i.children,G=i.direction,J=i.id,ue=i.mode,X=ue===void 0?"vertical":ue,Q=i.inlineCollapsed,le=i.disabled,U=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Y=i.subMenuCloseDelay,se=Y===void 0?.1:Y,k=i.forceSubMenuRender,Ee=i.defaultOpenKeys,ne=i.openKeys,de=i.activeKey,fe=i.defaultActiveFirst,re=i.selectable,H=re===void 0?!0:re,oe=i.multiple,ye=oe===void 0?!1:oe,he=i.defaultSelectedKeys,Oe=i.selectedKeys,Ke=i.onSelect,be=i.onDeselect,Fe=i.inlineIndent,Me=Fe===void 0?24:Fe,Ne=i.motion,je=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=i.builtinPlacements,Ve=i.itemIcon,Ue=i.expandIcon,Xe=i.overflowedIndicator,Le=Xe===void 0?"...":Xe,Sn=i.getPopupContainer,an=i.onClick,Ye=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,En=i.openTransitionName,Pe=Object(Be.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=jt(V,vt),_e=n.useState(!1),Ze=Object(W.a)(_e,2),Wn=Ze[0],Un=Ze[1],Kn=n.useRef(),rn=Ka(J),Dn=G==="rtl",on=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),jn=Object(W.a)(on,2),en=jn[0],un=jn[1],An=n.useState(0),cn=Object(W.a)(An,2),ke=cn[0],He=cn[1],Jn=ke>=Ge.length-1||en!=="horizontal"||U,xn=Object(Fn.a)(Ee,{value:ne,postState:function(Z){return Z||vt}}),et=Object(W.a)(xn,2),bn=et[0],hn=et[1],Gn=n.useState(bn),Cn=Object(W.a)(Gn,2),mn=Cn[0],Hn=Cn[1],Pn=en==="inline",Xn=n.useRef(!1);n.useEffect(function(){Pn&&Hn(bn)},[bn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Pn)hn(mn);else{var te=[];hn(te),Ye==null||Ye(te)}},[Pn]);var dn=Va(),Bn=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Qn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Bn,unregisterPath:ve}},[Bn,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Re(Jn?vt:Ge.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Fn.a)(de||fe&&((c=Ge[0])===null||c===void 0?void 0:c.key),{value:de}),nt=Object(W.a)(Lt,2),yt=nt[0],st=nt[1],Et=_n(function(te){st(te)}),$t=_n(function(){st(void 0)}),bt=Object(Fn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(W.a)(bt,2),tt=Ct[0],Nn=Ct[1],Ft=function(Z){if(!!H){var Ce=Z.key,Je=tt.includes(Ce),sn;Je?sn=tt.filter(function(Zn){return Zn!==Ce}):ye?sn=[].concat(Object(fn.a)(tt),[Ce]):sn=[Ce],Nn(sn);var zn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:sn});Je?be==null||be(zn):Ke==null||Ke(zn)}},Ot=_n(function(te){an==null||an(qn(te)),Ft(te)}),lt=_n(function(te,Z){var Ce=bn.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}s()(bn,Ce)||(hn(Ce),Ye==null||Ye(Ce))}),Yn=_n(Sn),ot=function(Z,Ce){var Je=Ce!=null?Ce:!bn.includes(Z);lt(Z,Je)},dt=wa(en,yt,Dn,rn,Kn,Qn,nn,st,ot,ln);n.useEffect(function(){Un(!0)},[]);var Rt=en!=="horizontal"||U?Ge:Ge.map(function(te,Z){return n.createElement(Rn,{key:te.key,overflowDisabled:Z>ke},te)}),St=n.createElement(P,Object(L.a)({id:J,ref:Kn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Ae()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),R,(E={},Object(ce.a)(E,"".concat(y,"-inline-collapsed"),un),Object(ce.a)(E,"".concat(y,"-rtl"),Dn),E)),dir:G,style:F,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?Ge.slice(-Ce):null;return n.createElement(Yt,{eventKey:It,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?P.INVALIDATE:P.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:dt},Pe));return n.createElement(Ut.Provider,{value:rn},n.createElement(Rn,{prefixCls:y,mode:en,openKeys:bn,rtl:Dn,disabled:le,motion:Wn?Ne:null,defaultMotions:Wn?je:null,activeKey:yt,onActive:Et,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Yn,itemIcon:Ve,expandIcon:Ue,onItemClick:Ot,onOpenChange:lt},n.createElement(xe.Provider,{value:Kt},St),n.createElement(pe.Provider,{value:Wt},Ge)))},Ua=za,Ja=function(i){var c=i.className,E=i.title,C=i.eventKey,y=i.children,F=Object(Be.a)(i,["className","title","eventKey","children"]),R=n.useContext(We),K=R.prefixCls,$="".concat(K,"-item-group");return n.createElement("li",Object(L.a)({},F,{onClick:function(G){return G.stopPropagation()},className:Ae()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},y))};function xa(t){var i=t.children,c=Object(Be.a)(t,["children"]),E=ze(c.eventKey),C=jt(i,E),y=ee();return y?C:n.createElement(Ja,c,C)}function Ga(t){var i=t.className,c=t.style,E=n.useContext(We),C=E.prefixCls,y=ee();return y?null:n.createElement("li",{className:Ae()("".concat(C,"-item-divider"),i),style:c})}var ut=Ua;ut.Item=Dt,ut.SubMenu=Yt,ut.ItemGroup=xa,ut.Divider=Ga;var Ha=ut,Xa=e("eDIo");function Qa(t,i){var c=t.prefixCls,E=t.editable,C=t.locale,y=t.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Qa);function Ya(t,i){var c=t.prefixCls,E=t.id,C=t.tabs,y=t.locale,F=t.mobile,R=t.moreIcon,K=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,G=t.className,J=t.editable,ue=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,le=Object(n.useState)(!1),U=Object(W.a)(le,2),q=U[0],ae=U[1],Y=Object(n.useState)(null),se=Object(W.a)(Y,2),k=se[0],Ee=se[1],ne="".concat(E,"-more-popup"),de="".concat(c,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Fe){var Me=Fe.key,Ne=Fe.domEvent;Q(Me,Ne),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},C.map(function(be){return n.createElement(Dt,{key:be.key,id:"".concat(ne,"-").concat(be.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function oe(be){for(var Fe=C.filter(function($e){return!$e.disabled}),Me=Fe.findIndex(function($e){return $e.key===k})||0,Ne=Fe.length,je=0;je<Ne;je+=1){Me=(Me+be+Ne)%Ne;var De=Fe[Me];if(!De.disabled){Ee(De.key);return}}}function ye(be){var Fe=be.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(ae(!0),be.preventDefault());return}switch(Fe){case we.a.UP:oe(-1),be.preventDefault();break;case we.a.DOWN:oe(1),be.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,be);break}}Object(n.useEffect)(function(){var be=document.getElementById(fe);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||Ee(null)},[q]);var he=Object(ce.a)({},X?"marginLeft":"marginRight",ue);C.length||(he.visibility="hidden",he.order=1);var Oe=Ae()(Object(ce.a)({},"".concat(de,"-rtl"),X)),Ke=F?null:n.createElement(Xa.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:ye},K));return n.createElement("div",{className:Ae()("".concat(c,"-nav-operations"),G),style:V,ref:i},Ke,n.createElement(aa,{prefixCls:c,locale:y,editable:J}))}var Za=n.forwardRef(Ya),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),E=Object(W.a)(c,2),C=E[0],y=E[1],F=Object(n.useState)(0),R=Object(W.a)(F,2),K=R[0],$=R[1],V=Object(n.useState)(0),G=Object(W.a)(V,2),J=G[0],ue=G[1],X=Object(n.useState)(),Q=Object(W.a)(X,2),le=Q[0],U=Q[1],q=Object(n.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,H=fe.screenY;y({x:re,y:H}),window.clearInterval(q.current)}function Y(de){if(!!C){de.preventDefault();var fe=de.touches[0],re=fe.screenX,H=fe.screenY;y({x:re,y:H});var oe=re-C.x,ye=H-C.y;i(oe,ye);var he=Date.now();$(he),ue(he-K),U({x:oe,y:ye})}}function se(){if(!!C&&(y(null),U(null),le)){var de=le.x/J,fe=le.y/J,re=Math.abs(de),H=Math.abs(fe);if(Math.max(re,H)<ka)return;var oe=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ia,ye*=ia,i(oe*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function Ee(de){var fe=de.deltaX,re=de.deltaY,H=0,oe=Math.abs(fe),ye=Math.abs(re);oe===ye?H=k.current==="x"?fe:re:oe>ye?(H=fe,k.current="x"):(H=re,k.current="y"),i(-H,-H)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:se,onWheel:Ee},n.useEffect(function(){function de(oe){ne.current.onTouchStart(oe)}function fe(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function H(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(E){return t.current.has(E)||t.current.set(E,n.createRef()),t.current.get(E)}function c(E){t.current.delete(E)}return[i,c]}function ua(t,i){var c=n.useRef(t),E=n.useState({}),C=Object(W.a)(E,2),y=C[1];function F(R){var K=typeof R=="function"?R(c.current):R;K!==c.current&&i(K,c.current),c.current=K,y({})}return[c.current,F]}var sa=function(i){var c=i.position,E=i.prefixCls,C=i.extra;if(!C)return null;var y,F=C;return c==="right"&&(y=F.right||!F.left&&F||null),c==="left"&&(y=F.left||null),y?n.createElement("div",{className:"".concat(E,"-extra-content")},y):null};function er(t,i){var c,E=n.useContext(Mt),C=E.prefixCls,y=E.tabs,F=t.className,R=t.style,K=t.id,$=t.animated,V=t.activeKey,G=t.rtl,J=t.extra,ue=t.editable,X=t.locale,Q=t.tabPosition,le=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Y=Object(n.useRef)(),se=Object(n.useRef)(),k=Object(n.useRef)(),Ee=Object(n.useRef)(),ne=_a(),de=Object(W.a)(ne,2),fe=de[0],re=de[1],H=Q==="top"||Q==="bottom",oe=ua(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(W.a)(oe,2),he=ye[0],Oe=ye[1],Ke=ua(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),be=Object(W.a)(Ke,2),Fe=be[0],Me=be[1],Ne=Object(n.useState)(0),je=Object(W.a)(Ne,2),De=je[0],$e=je[1],qe=Object(n.useState)(0),Ve=Object(W.a)(qe,2),Ue=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Sn=Object(W.a)(Le,2),an=Sn[0],Ye=Sn[1],ln=Object(n.useState)(0),yn=Object(W.a)(ln,2),En=yn[0],Pe=yn[1],Ge=Object(n.useState)(null),_e=Object(W.a)(Ge,2),Ze=_e[0],Wn=_e[1],Un=Object(n.useState)(null),Kn=Object(W.a)(Un,2),rn=Kn[0],Dn=Kn[1],on=Object(n.useState)(0),jn=Object(W.a)(on,2),en=jn[0],un=jn[1],An=Object(n.useState)(0),cn=Object(W.a)(An,2),ke=cn[0],He=cn[1],Jn=On(new Map),xn=Object(W.a)(Jn,2),et=xn[0],bn=xn[1],hn=j(y,et,De),Gn="".concat(C,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,De-Ze)):(Cn=Math.min(0,Ze-De),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Hn(te){return te<Cn?Cn:te>mn?mn:te}var Pn=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(W.a)(Xn,2),Bn=dn[0],ve=dn[1];function Re(){ve(Date.now())}function Te(){window.clearTimeout(Pn.current)}qa(Y,function(te,Z){function Ce(Je,sn){Je(function(zn){var Zn=Hn(zn+sn);return Zn})}if(H){if(Ze>=De)return!1;Ce(Oe,te)}else{if(rn>=Ue)return!1;Ce(Me,Z)}return Te(),Re(),!0}),Object(n.useEffect)(function(){return Te(),Bn&&(Pn.current=window.setTimeout(function(){ve(0)},100)),Te},[Bn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Me(0),Oe(Hn(Ce))}else{var Je=Fe;Z.top<-Fe?Je=-Z.top:Z.top+Z.height>-Fe+rn&&(Je=-(Z.top+Z.height-rn)),Oe(0),Me(Hn(Je))}}var Qn=A(hn,{width:Ze,height:rn,left:he,top:Fe},{width:an,height:En},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:y})),gt=Object(W.a)(Qn,2),Wt=gt[0],Kt=gt[1],Lt=y.map(function(te){var Z=te.key;return n.createElement($n,{id:K,prefixCls:C,key:Z,rtl:G,tab:te,closable:te.closable,editable:ue,active:Z===V,tabPosition:Q,tabBarGutter:le,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Re(),G||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Je,sn,zn,Zn,Vt,zt,lr=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=Ee.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=Ee.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(lr),Dn(or),un(ma),He(fa);var pa=(((Zn=se.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Gn);Ye(pa-(ha?0:dr)),Pe(va-(ha?0:cr)),bn(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=y.slice(0,Wt),st=y.slice(Kt+1),Et=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),bt=Object(W.a)($t,2),Ct=bt[0],tt=bt[1],Nn=hn.get(V),Ft=Object(n.useRef)();function Ot(){Qe.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return Nn&&(H?(G?te.right=Nn.right:te.left=Nn.left,te.width=Nn.width):(te.top=Nn.top,te.height=Nn.height)),Ot(),Ft.current=Object(Qe.a)(function(){tt(te)}),Ot},[Nn,H,G]),Object(n.useEffect)(function(){nn()},[V,Nn,hn,H]),Object(n.useEffect)(function(){nt()},[G,le,V,y.map(function(te){return te.key}).join("_")]);var lt=!!Et.length,Yn="".concat(C,"-nav-wrap"),ot,dt,Rt,St;return H?G?(dt=he>0,ot=he+Ze<De):(ot=he<0,dt=-he+Ze<De):(Rt=Fe<0,St=-Fe+rn<Ue),n.createElement("div",{ref:i,role:"tablist",className:Ae()("".concat(C,"-nav"),F),style:R,onKeyDown:function(){Re()}},n.createElement(sa,{position:"left",extra:J,prefixCls:C}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:Ae()(Yn,(c={},Object(ce.a)(c,"".concat(Yn,"-ping-left"),ot),Object(ce.a)(c,"".concat(Yn,"-ping-right"),dt),Object(ce.a)(c,"".concat(Yn,"-ping-top"),Rt),Object(ce.a)(c,"".concat(Yn,"-ping-bottom"),St),c)),ref:Y},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:se,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Bn?"none":void 0}},Lt,n.createElement(aa,{ref:Ee,prefixCls:C,locale:X,editable:ue,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ae()("".concat(C,"-ink-bar"),Object(ce.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},t,{ref:k,prefixCls:C,tabs:Et,className:!lt&&Gn})),n.createElement(sa,{position:"right",extra:J,prefixCls:C}))}var la=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,E=t.animated,C=t.tabPosition,y=t.rtl,F=t.destroyInactiveTabPane,R=n.useContext(Mt),K=R.prefixCls,$=R.tabs,V=E.tabPane,G=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Ae()("".concat(K,"-content-holder"))},n.createElement("div",{className:Ae()("".concat(K,"-content"),"".concat(K,"-content-").concat(C),Object(ce.a)({},"".concat(K,"-content-animated"),V)),style:G&&V?Object(ce.a)({},y?"marginRight":"marginLeft","-".concat(G,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:K,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:F})})))}function oa(t){var i=t.prefixCls,c=t.forceRender,E=t.className,C=t.style,y=t.id,F=t.active,R=t.animated,K=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,G=n.useState(c),J=Object(W.a)(G,2),ue=J[0],X=J[1];n.useEffect(function(){F?X(!0):K&&X(!1)},[F,K]);var Q={};return F||(R?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:F?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!F,style:Object(me.a)(Object(me.a)({},Q),C),className:Ae()("".concat(i,"-tabpane"),F&&"".concat(i,"-tabpane-active"),E)},(F||ue||c)&&V)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(me.a)(Object(me.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,E=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,F=t.className,R=t.children,K=t.direction,$=t.activeKey,V=t.defaultActiveKey,G=t.editable,J=t.animated,ue=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Q=X===void 0?"top":X,le=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Y=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,Ee=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Be.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),oe=K==="rtl",ye;ue===!1?ye={inkBar:!1,tabPane:!1}:ue===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(ue)==="object"?ue:{});var he=Object(n.useState)(!1),Oe=Object(W.a)(he,2),Ke=Oe[0],be=Oe[1];Object(n.useEffect)(function(){be(Object(Tn.a)())},[]);var Fe=Object(Fn.a)(function(){var Pe;return(Pe=H[0])===null||Pe===void 0?void 0:Pe.key},{value:$,defaultValue:V}),Me=Object(W.a)(Fe,2),Ne=Me[0],je=Me[1],De=Object(n.useState)(function(){return H.findIndex(function(Pe){return Pe.key===Ne})}),$e=Object(W.a)(De,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Pe=H.findIndex(function(_e){return _e.key===Ne});if(Pe===-1){var Ge;Pe=Math.max(0,Math.min(qe,H.length-1)),je((Ge=H[Pe])===null||Ge===void 0?void 0:Ge.key)}Ve(Pe)},[H.map(function(Pe){return Pe.key}).join("_"),Ne,qe]);var Ue=Object(Fn.a)(null,{value:E}),Xe=Object(W.a)(Ue,2),Le=Xe[0],Sn=Xe[1],an=Q;Ke&&!["left","right"].includes(Q)&&(an="top"),Object(n.useEffect)(function(){E||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Ye(Pe,Ge){de==null||de(Pe,Ge),je(Pe),ne==null||ne(Pe)}var ln={id:Le,activeKey:Ne,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},yn,En=Object(me.a)(Object(me.a)({},ln),{},{editable:G,locale:ae,moreIcon:Y,moreTransitionName:se,tabBarGutter:le,onTabClick:Ye,onTabScroll:fe,extra:q,style:U,panes:R});return Ee?yn=Ee(En,la):yn=n.createElement(la,En),n.createElement(Mt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(L.a)({ref:i,id:E,className:Ae()(y,"".concat(y,"-").concat(an),(c={},Object(ce.a)(c,"".concat(y,"-mobile"),Ke),Object(ce.a)(c,"".concat(y,"-editable"),G),Object(ce.a)(c,"".concat(y,"-rtl"),oe),c),F)},re),yn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,Tt=e("MZF8"),vn=e("dEAq"),ur=e("ZpkN"),Er=e("TIsu");function wt(t,i){var c,E=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return E||(E=i.tsx?"tsx":"jsx"),E}var sr=t=>{var i,c,E,C=Object(n.useRef)(),y=Object(n.useContext)(vn.context),F=y.locale,R=Object(vn.useLocaleProps)(F,t),K=Object(vn.useDemoUrl)(R.identifier),$=R.demoUrl||K,V=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),ue=Object(vn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),X=Object(vn.useMotions)(R.motions||[],C.current),Q=Object(x.default)(X,2),le=Q[0],U=Q[1],q=Object(vn.useCopy)(),ae=Object(x.default)(q,2),Y=ae[0],se=ae[1],k=Object(n.useState)("_"),Ee=Object(x.default)(k,2),ne=Ee[0],de=Ee[1],fe=Object(n.useState)(wt(ne,R.sources[ne])),re=Object(x.default)(fe,2),H=re[0],oe=re[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(x.default)(ye,2),Oe=he[0],Ke=he[1],be=Object(n.useState)(Math.random()),Fe=Object(x.default)(be,2),Me=Fe[0],Ne=Fe[1],je=R.sources[ne][H]||R.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(F,je),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(x.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ne(Math.random())},[Ue]);function Xe(Le){de(Le),oe(wt(Le,R.sources[Le]))}return f.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&f.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),f.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?f.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):R.children),f.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&f.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&f.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),f.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&f.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),ue&&f.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ue}),R.motions&&f.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),R.iframe&&f.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&f.a.createElement(vn.Link,{target:"_blank",to:$},f.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),f.a.createElement("span",null),f.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Y(je)}),H==="tsx"&&Oe&&f.a.createElement(vn.Link,{target:"_blank",to:De},f.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),f.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Oe)})),Oe&&f.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&f.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(R.sources).map(Le=>f.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),f.a.createElement("div",{className:"__dumi-default-previewer-source"},f.a.createElement(ur.a,{code:je,lang:H,showCopy:!1}))))},br=gn.default=sr},"80pN":function(In,gn,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),f=e("q1tI"),L=e("i8i4"),ce=e("QCnb");function W(p){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+p,I=1;I<arguments.length;I++)B+="&args[]="+encodeURIComponent(arguments[I]);return"Minified React error #"+p+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Be(p){var B=p,I=p;if(p.alternate)for(;B.return;)B=B.return;else{p=B;do B=p,(B.effectTag&1026)!=0&&(I=B.return),p=B.return;while(p)}return B.tag===3?I:null}function me(p){if(Be(p)!==p)throw Error(W(188))}function at(p){var B=p.alternate;if(!B){if(B=Be(p),B===null)throw Error(W(188));return B!==p?null:p}for(var I=p,pe=B;;){var ee=I.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(pe=ee.return,pe!==null){I=pe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===I)return me(ee),p;if(Se===pe)return me(ee),B;Se=Se.sibling}throw Error(W(188))}if(I.return!==pe.return)I=ee,pe=Se;else{for(var ze=!1,xe=ee.child;xe;){if(xe===I){ze=!0,I=ee,pe=Se;break}if(xe===pe){ze=!0,pe=ee,I=Se;break}xe=xe.sibling}if(!ze){for(xe=Se.child;xe;){if(xe===I){ze=!0,I=Se,pe=ee;break}if(xe===pe){ze=!0,pe=Se,I=ee;break}xe=xe.sibling}if(!ze)throw Error(W(189))}}if(I.alternate!==pe)throw Error(W(190))}if(I.tag!==3)throw Error(W(188));return I.stateNode.current===I?p:B}function Ae(){return!0}function Mn(){return!1}function Tn(p,B,I,pe){this.dispatchConfig=p,this._targetInst=B,this.nativeEvent=I,p=this.constructor.Interface;for(var ee in p)p.hasOwnProperty(ee)&&((B=p[ee])?this[ee]=B(I):ee==="target"?this.target=pe:this[ee]=I[ee]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?Ae:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=Ae)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=Ae)},persist:function(){this.isPersistent=Ae},isPersistent:Mn,destructor:function(){var p=this.constructor.Interface,B;for(B in p)this[B]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(p){return p.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(p){function B(){}function I(){return pe.apply(this,arguments)}var pe=this;B.prototype=pe.prototype;var ee=new B;return n(ee,I.prototype),I.prototype=ee,I.prototype.constructor=I,I.Interface=n({},pe.Interface,p),I.extend=pe.extend,Qe(I),I},Qe(Tn);function Fn(p,B,I,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,p,B,I,pe),ee}return new this(p,B,I,pe)}function fn(p){if(!(p instanceof this))throw Error(W(279));p.destructor(),10>this.eventPool.length&&this.eventPool.push(p)}function Qe(p){p.eventPool=[],p.getPooled=Fn,p.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(p,B){var I={};return I[p.toLowerCase()]=B.toLowerCase(),I["Webkit"+p]="webkit"+B,I["Moz"+p]="moz"+B,I}var On={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $n(p){if(we[p])return we[p];if(!On[p])return p;var B=On[p],I;for(I in B)if(B.hasOwnProperty(I)&&I in kn)return we[p]=B[I];return p}var rt=$n("animationend"),j=$n("animationiteration"),D=$n("animationstart"),A=$n("transitionend"),d=null;function s(p){if(d===null)try{var B=("require"+Math.random()).slice(0,7);d=(x&&x[B])("timers").setImmediate}catch(I){d=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return d(p)}var v=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,b=v[11],O=v[12],a=L.unstable_batchedUpdates,l=tn.IsSomeRendererActing,u=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var p=!1;b();)p=!0;return p};function M(p){try{N(),s(function(){N()?M(p):p()})}catch(B){p(B)}}var S=0,o=!1,T=L.findDOMNode,m=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=m[0],g=m[4],h=m[5],P=m[6],w=m[7],z=m[8],_=m[9],ie=m[10];function ge(){}function pn(p,B){if(!p)return[];if(p=at(p),!p)return[];for(var I=p,pe=[];;){if(I.tag===5||I.tag===6||I.tag===1||I.tag===0){var ee=I.stateNode;B(ee)&&pe.push(ee)}if(I.child)I.child.return=I,I=I.child;else{if(I===p)return pe;for(;!I.sibling;){if(!I.return||I.return===p)return pe;I=I.return}I.sibling.return=I.return,I=I.sibling}}}function We(p,B){if(p&&!p._reactInternalFiber){var I=""+p;throw p=Array.isArray(p)?"an array":p&&p.nodeType===1&&p.tagName?"a DOM node":I==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":I,Error(W(286,B,p))}}var Ie={renderIntoDocument:function(p){var B=document.createElement("div");return L.render(p,B)},isElement:function(p){return f.isValidElement(p)},isElementOfType:function(p,B){return f.isValidElement(p)&&p.type===B},isDOMComponent:function(p){return!(!p||p.nodeType!==1||!p.tagName)},isDOMComponentElement:function(p){return!!(p&&f.isValidElement(p)&&p.tagName)},isCompositeComponent:function(p){return Ie.isDOMComponent(p)?!1:p!=null&&typeof p.render=="function"&&typeof p.setState=="function"},isCompositeComponentWithType:function(p,B){return Ie.isCompositeComponent(p)?p._reactInternalFiber.type===B:!1},findAllInRenderedTree:function(p,B){return We(p,"findAllInRenderedTree"),p?pn(p._reactInternalFiber,B):[]},scryRenderedDOMComponentsWithClass:function(p,B){return We(p,"scryRenderedDOMComponentsWithClass"),Ie.findAllInRenderedTree(p,function(I){if(Ie.isDOMComponent(I)){var pe=I.className;typeof pe!="string"&&(pe=I.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(B)){if(B===void 0)throw Error(W(11));B=B.split(/\s+/)}return B.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(p,B){if(We(p,"findRenderedDOMComponentWithClass"),p=Ie.scryRenderedDOMComponentsWithClass(p,B),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for class:"+B);return p[0]},scryRenderedDOMComponentsWithTag:function(p,B){return We(p,"scryRenderedDOMComponentsWithTag"),Ie.findAllInRenderedTree(p,function(I){return Ie.isDOMComponent(I)&&I.tagName.toUpperCase()===B.toUpperCase()})},findRenderedDOMComponentWithTag:function(p,B){if(We(p,"findRenderedDOMComponentWithTag"),p=Ie.scryRenderedDOMComponentsWithTag(p,B),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for tag:"+B);return p[0]},scryRenderedComponentsWithType:function(p,B){return We(p,"scryRenderedComponentsWithType"),Ie.findAllInRenderedTree(p,function(I){return Ie.isCompositeComponentWithType(I,B)})},findRenderedComponentWithType:function(p,B){if(We(p,"findRenderedComponentWithType"),p=Ie.scryRenderedComponentsWithType(p,B),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for componentType:"+B);return p[0]},mockComponent:function(p,B){return B=B||p.mockTagName||"div",p.prototype.render.mockImplementation(function(){return f.createElement(B,null,this.props.children)}),this},nativeTouchData:function(p,B){return{touches:[{pageX:p,pageY:B}]}},Simulate:null,SimulateNative:{},act:function(p){function B(){S--,l.current=I,O.current=pe}o===!1&&(o=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),S++;var I=l.current,pe=O.current;l.current=!0,O.current=!0;try{var ee=a(p)}catch(Se){throw B(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,ze){ee.then(function(){1<S||u===!0&&I===!0?(B(),Se()):M(function(xe){B(),xe?ze(xe):Se()})},function(xe){B(),ze(xe)})}};try{S!==1||u!==!1&&I!==!1||N(),B()}catch(Se){throw B(),Se}return{then:function(Se){Se()}}}};function Rn(p){return function(B,I){if(f.isValidElement(B))throw Error(W(228));if(Ie.isCompositeComponent(B))throw Error(W(229));var pe=g[p],ee=new ge;ee.target=B,ee.type=p.toLowerCase();var Se=r(B),ze=new Tn(pe,Se,ee,B);ze.persist(),n(ze,I),pe.phasedRegistrationNames?h(ze):P(ze),L.unstable_batchedUpdates(function(){w(B),ie(ze)}),z()}}Ie.Simulate={};for(var it in g)Ie.Simulate[it]=Rn(it);function qn(p,B){return function(I,pe){var ee=new ge(p);n(ee,pe),Ie.isDOMComponent(I)?(I=T(I),ee.target=I,_(B,1,document,ee)):I.tagName&&(ee.target=I,_(B,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[j,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[A,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(p){var B=p[1];Ie.SimulateNative[B]=qn(B,p[0])}),x.exports=Ie.default||Ie}).call(this,e("hOG+")(In))},JjdP:function(In,gn,e){"use strict";e.r(gn);var x=e("9og8"),n=e("WmNS"),f=e.n(n),L=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,W=`import React from 'react';
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
};`,Be=`import React from 'react';
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

export default Root;`,Ae=`import React, { useState, useEffect } from 'react';
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

export default SearchInput;`,Fn=`import React from 'react';
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
}`,Qe=`.markdown p {
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

export default Demo;`,On=`import React, { useState, useRef } from 'react';
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
}`,rt=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(S,o){if(!o&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=O(o);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in S)if(g!=="default"&&Object.prototype.hasOwnProperty.call(S,g)){var h=r?Object.getOwnPropertyDescriptor(S,g):null;h&&(h.get||h.set)?Object.defineProperty(m,g,h):m[g]=S[g]}return m.default=S,T&&T.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(O=function(r){return r?T:o})(S)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,v=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,l=function(){var S=(0,v.useState)("Line"),o=(0,s.default)(S,2),T=o[0],m=o[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[T];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,M,S){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},N),s.default.createElement("p",null,JSON.stringify(M)),s.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(S,o){if(!o&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=O(o);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in S)if(g!=="default"&&Object.prototype.hasOwnProperty.call(S,g)){var h=r?Object.getOwnPropertyDescriptor(S,g):null;h&&(h.get||h.set)?Object.defineProperty(m,g,h):m[g]=S[g]}return m.default=S,T&&T.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var o=new WeakMap,T=new WeakMap;return(O=function(r){return r?T:o})(S)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,v=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,l=function(){var S=(0,v.useState)(!1),o=(0,s.default)(S,2),T=o[0],m=o[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return m(!T)}})),v.default.createElement(b.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o,T,m;return f.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return S=function(P,w){if(!w&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var z=M(w);if(z&&z.has(P))return z.get(P);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in P)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(P,ge)){var pn=ie?Object.getOwnPropertyDescriptor(P,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=P[ge]}return _.default=P,z&&z.set(P,_),_},M=function(P){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(M=function(ie){return ie?z:w})(P)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,s=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(63).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(64).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,O=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(60).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,l=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return u=g.sent,g.t12=S,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,N=(0,g.t12)(g.t13),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(h){(0,O.default)(w,h);var P=(0,a.default)(w);function w(){return(0,v.default)(this,w),P.apply(this,arguments)}return(0,b.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(N.default,{form:_,schema:o}),l.default.createElement(s.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),m=(0,N.connectForm)(T),g.abrupt("return",m);case 47:case"end":return g.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=P?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(h,w,z):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(P){return P?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,O=(0,o.t4)(o.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var m=(0,O.useForm)();return v.default.createElement("div",null,v.default.createElement(O.default,{form:m,schema:u}),v.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=P?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(h,w,z):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(P){return P?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,O=(0,o.t4)(o.t5),u={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var m=(0,O.useForm)(),r=function(h,P){P.length>0?alert("errors:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(h,null,2))};return v.default.createElement("div",null,v.default.createElement(O.default,{form:m,schema:u,onFinish:r}),v.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u;return f.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return l=function(){var o=(0,v.useForm)(),T=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return s.default.createElement("div",null,s.default.createElement(v.default,{form:o,schema:a,onFinish:T}),s.default.createElement("button",{onClick:o.submit},"\u63D0\u4EA4"))},O=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var P=g?Object.getOwnPropertyDescriptor(o,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,s=(0,M.t0)(M.t1),M.t2=O,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},u=l,M.abrupt("return",u);case 17:case"end":return M.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(v.default,{schema:b("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(v.default,{schema:b("column")}))},l.abrupt("return",O);case 14:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return s.default.createElement(v.default,{schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(v.default,{readOnly:!0,schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(v.default,{labelWidth:"200",schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o,T;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return S=function(h,P){if(!P&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=M(P);if(w&&w.has(h))return w.get(h);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in h)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(h,ie)){var ge=_?Object.getOwnPropertyDescriptor(h,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=h[ie]}return z.default=h,w&&w.set(h,z),z},M=function(h){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:P})(h)},d=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.t8=S,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=S,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,u=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=r.sent,o=function(){var h=(0,u.useForm)(),P=(0,a.useState)({}),w=(0,O.default)(P,2),z=w[0],_=w[1],ie=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){h.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ie){Ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ie.map(function(Rn){return Rn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Rn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(u.default,{form:h,schema:z,onFinish:ge}),a.default.createElement(s.default,null,a.default.createElement(v.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 48:case"end":return r.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o,T;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(h,P){if(!P&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=N(P);if(w&&w.has(h))return w.get(h);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in h)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(h,ie)){var ge=_?Object.getOwnPropertyDescriptor(h,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=h[ie]}return z.default=h,w&&w.set(h,z),z},N=function(h){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:P})(h)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return u=r.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},o=function(){var h=(0,l.useForm)(),P=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,u.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,v.default)(_,["data","errors","schema"]);return(0,u.fakeApi)("xxx/validation").then(function(Ie){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:h,schema:S,beforeFinish:w,onFinish:P}),O.default.createElement(s.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=o,r.abrupt("return",T);case 42:case"end":return r.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o,T;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(h,P){if(!P&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=N(P);if(w&&w.has(h))return w.get(h);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in h)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(h,ie)){var ge=_?Object.getOwnPropertyDescriptor(h,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=h[ie]}return z.default=h,w&&w.set(h,z),z},N=function(h){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:P})(h)},d=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=M,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return u=r.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},o=function(){var h=(0,l.useForm)(),P=function(_,ie){ie.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,u.fakeApi)("xxx/submit",_).then(function(ge){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,u.fakeApi)("xxx/getForm").then(function(_){h.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:h,schema:S,onFinish:P}),O.default.createElement(s.default,null,O.default.createElement(v.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(v.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=o,r.abrupt("return",T);case 44:case"end":return r.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o;return f.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return N=function(g,h){if(!h&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var P=u(h);if(P&&P.has(g))return P.get(g);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in g)if(_!=="default"&&Object.prototype.hasOwnProperty.call(g,_)){var ie=z?Object.getOwnPropertyDescriptor(g,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=g[_]}return w.default=g,P&&P.set(g,w),w},u=function(g){if(typeof WeakMap!="function")return null;var h=new WeakMap,P=new WeakMap;return(u=function(z){return z?P:h})(g)},d=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=d,m.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,s=(0,m.t0)(m.t1),m.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=d,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,v=(0,m.t2)(m.t3),m.t4=N,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return O=m.sent,m.t6=N,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,a=(0,m.t6)(m.t7),m.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var g=(0,a.useForm)(),h=function(){g.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},P=function(z,_){_.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):v.default.info(JSON.stringify(z))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:g,schema:M,onMount:h,onFinish:P}),b.default.createElement(s.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},o=S,m.abrupt("return",o);case 37:case"end":return m.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u;return f.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var P=g?Object.getOwnPropertyDescriptor(o,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,s=(0,M.t0)(M.t1),M.t2=O,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var o=(0,v.useForm)();return s.default.createElement(v.default,{form:o,schema:a})},u=l,M.abrupt("return",u);case 17:case"end":return M.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return b=l.sent,O=function(){return s.default.createElement(v.default,{schema:b.expression})},l.abrupt("return",O);case 16:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N;return f.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return O=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var r=b(m);if(r&&r.has(T))return r.get(T);var g={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in T)if(P!=="default"&&Object.prototype.hasOwnProperty.call(T,P)){var w=h?Object.getOwnPropertyDescriptor(T,P):null;w&&(w.get||w.set)?Object.defineProperty(g,P,w):g[P]=T[P]}return g.default=T,r&&r.set(T,g),g},b=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(b=function(h){return h?r:m})(T)},S.t0=O,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,d=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=S.sent,S.t2=O,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,v=(0,S.t2)(S.t3),a=function(T){return new Promise(function(m){return setTimeout(m,T)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},u=function(){var T=(0,v.useForm)(),m=function(){T.setValues({input1:"hello world"}),a(3e3).then(function(g){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:T,schema:l,onMount:m})},N=u,S.abrupt("return",N);case 20:case"end":return S.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),window.hello=function(N){var M=N.value;console.log(M)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,u.abrupt("return",a);case 16:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u;return f.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=function(o,T){if(!T&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var m=b(T);if(m&&m.has(o))return m.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var P=g?Object.getOwnPropertyDescriptor(o,h):null;P&&(P.get||P.set)?Object.defineProperty(r,h,P):r[h]=o[h]}return r.default=o,m&&m.set(o,r),r},b=function(o){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(b=function(g){return g?m:T})(o)},M.t0=O,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,d=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=M.sent,M.t2=O,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,v=(0,M.t2)(M.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var o=(0,v.useForm)(),T={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){o.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:o,schema:a,watch:T})},u=l,M.abrupt("return",u);case 19:case"end":return M.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return l=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var g=a(r);if(g&&g.has(m))return g.get(m);var h={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in m)if(w!=="default"&&Object.prototype.hasOwnProperty.call(m,w)){var z=P?Object.getOwnPropertyDescriptor(m,w):null;z&&(z.get||z.set)?Object.defineProperty(h,w,z):h[w]=m[w]}return h.default=m,g&&g.set(m,h),h},a=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(P){return P?g:r})(m)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=l,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=o.sent,o.t4=l,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,O=(0,o.t4)(o.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var m=(0,O.useForm)(),r=function(P,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(P,null,2))},g={input1:function(P){P.length>2?m.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(O.default,{form:m,schema:u,onFinish:r,watch:g}),v.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=N,o.abrupt("return",M);case 27:case"end":return o.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N,M,S,o,T;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return N=function(h,P){if(!P&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var w=u(P);if(w&&w.has(h))return w.get(h);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in h)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(h,ie)){var ge=_?Object.getOwnPropertyDescriptor(h,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=h[ie]}return z.default=h,w&&w.set(h,z),z},u=function(h){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(u=function(_){return _?w:P})(h)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(61)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(59),e.e(62)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(65).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=N,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=N,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(h){return O.default.createElement(v.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},h))},o=function(){var h=(0,l.useForm)(),P=function(){};return O.default.createElement("div",null,O.default.createElement(l.default,{form:h,schema:M,widgets:{site:S},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),O.default.createElement(s.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=o,r.abrupt("return",T);case 40:case"end":return r.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return b=l.sent,O=function(){return s.default.createElement(v.default,{schema:b.basic})},l.abrupt("return",O);case 16:case"end":return l.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.3"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:Ae},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Fn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.3"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a,l,u,N;return f.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return d=e("K+nK"),S.t0=d,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,s=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(58)]).then(e.bind(null,"P2DI"));case 8:for(v=S.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(T,m){return s.default.createElement("a",{onClick:function(){return alert(T.title)}},"\u7F16\u8F91")}}],u=function(){var T=function(){return{rows:b,total:b.length}};return s.default.createElement(v.TableProvider,null,s.default.createElement(v.Search,{schema:a,api:T}),s.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},N=u,S.abrupt("return",N);case 16:case"end":return S.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){var d,s,v,b,O,a;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"nYSz"));case 9:return u.t3=u.sent,v=(0,u.t2)(u.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(v.default,{defaultValue:b}))},a=O,u.abrupt("return",a);case 15:case"end":return u.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:On}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(x.a)(f.a.mark(function A(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},A)}));function D(){return j.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(In,gn,e){},Zs1V:function(In){In.exports=JSON.parse("{}")},dKoY:function(In,gn,e){"use strict";e.r(gn);var x=e("q1tI"),n=e.n(x),f=e("dEAq"),L=e.n(f),ce=e("0zqC"),W=e("ZpkN"),tn=e("JjdP"),Be=n.a.memo(tn.default["schema-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&f.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u4E66\u5199\u89C4\u8303"},n.a.createElement(f.AnchorLink,{to:"#\u4E66\u5199\u89C4\u8303","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E66\u5199\u89C4\u8303"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(f.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(f.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(f.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},n.a.createElement(f.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),n.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(f.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(W.a,{code:`export const basic = {
  displayType: 'row',
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
};`,lang:"js"})),n.a.createElement(ce.default,tn.default["schema-demo"].previewerProps,n.a.createElement(Be,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"title"},n.a.createElement(f.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("h3",{id:"description"},n.a.createElement(f.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h3",{id:"type"},n.a.createElement(f.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),n.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),n.a.createElement(W.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),n.a.createElement(W.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h3",{id:"format"},n.a.createElement(f.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(W.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),n.a.createElement("h3",{id:"default"},n.a.createElement(f.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(W.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),n.a.createElement("h3",{id:"required"},n.a.createElement(f.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement(W.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),n.a.createElement("h3",{id:"placeholder"},n.a.createElement(f.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),n.a.createElement(W.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),n.a.createElement("h3",{id:"bind"},n.a.createElement(f.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},n.a.createElement(f.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",n.a.createElement("code",null,"min"),",",n.a.createElement("code",null,"minItem")," \u548C ",n.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"min"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},n.a.createElement(f.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",n.a.createElement("code",null,"max"),",",n.a.createElement("code",null,"maxItem")," \u548C ",n.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"max"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(f.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(f.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(f.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(f.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(f.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(f.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},n.a.createElement(f.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:className"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),n.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",n.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",n.a.createElement("code",null,"my-className")),n.a.createElement(W.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),n.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),n.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(f.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),n.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",n.a.createElement(f.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",n.a.createElement(f.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),n.a.createElement("h3",{id:"readonlywidget"},n.a.createElement(f.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnlyWidget"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3")),n.a.createElement("p",null,"readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3"),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "widget": "myWidget", // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
  "readOnlyWidget": "myReadOnlyWidget" // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
}`,lang:"json"}),n.a.createElement("h3",{id:"properties"},n.a.createElement(f.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"properties"),n.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"items"},n.a.createElement(f.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"items"),n.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "list0",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"enum--enumnames"},n.a.createElement(f.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),n.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),n.a.createElement(W.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement("h3",{id:"rules"},n.a.createElement(f.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),n.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},n.a.createElement(f.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:options"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",n.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",n.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",n.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(W.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("p",null,"\u8BE6\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303"))))))},p8sG:function(In,gn,e){"use strict";In.exports=e("80pN")}}]);
