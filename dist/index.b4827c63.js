var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g=globalThis;function y(e){return e&&e.__esModule?e.default:e}var m={},_={},b=function(e){return e&&e.Math===Math&&e};_=b("object"==typeof globalThis&&globalThis)||b("object"==typeof window&&window)||b("object"==typeof self&&self)||b("object"==typeof g&&g)||b("object"==typeof _&&_)||function(){return this}()||Function("return this")();var w={},k={};w=!(k=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var E={},S={};S=!k(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var O=Function.prototype.call;E=S?O.bind(O):function(){return O.apply(O,arguments)};var j={}.propertyIsEnumerable,L=Object.getOwnPropertyDescriptor;n=L&&!j.call({1:2},1)?function(e){var t=L(this,e);return!!t&&t.enumerable}:j;var $={};$=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var P={},x={},M={},T=Function.prototype,N=T.call,q=S&&T.bind.bind(N,N),H={},I=(M=S?q:function(e){return function(){return N.apply(e,arguments)}})({}.toString),F=M("".slice);H=function(e){return F(I(e),8,-1)};var C=Object,A=M("".split);x=k(function(){return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===H(e)?A(e,""):C(e)}:C;var D={},R={};R=function(e){return null==e};var B=TypeError;D=function(e){if(R(e))throw new B("Can't call method on "+e);return e},P=function(e){return x(D(e))};var W={},G={},U={},z={},J="object"==typeof document&&document.all;z=void 0===J&&void 0!==J?function(e){return"function"==typeof e||e===J}:function(e){return"function"==typeof e},U=function(e){return"object"==typeof e?null!==e:z(e)};var Y={},Q={};Q=function(e,t){var r;return arguments.length<2?(r=_[e],z(r)?r:void 0):_[e]&&_[e][t]};var V={};V=M({}.isPrototypeOf);var K={},X={},Z={},ee={},et=_.navigator,er=et&&et.userAgent;ee=er?String(er):"";var en=_.process,ei=_.Deno,eo=en&&en.versions||ei&&ei.version,ea=eo&&eo.v8;ea&&(o=(i=ea.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ee&&(!(i=ee.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ee.match(/Chrome\/(\d+)/))&&(o=+i[1]),Z=o;var es=_.String;K=(X=!!Object.getOwnPropertySymbols&&!k(function(){var e=Symbol("symbol detection");return!es(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&Z&&Z<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ec=Object;Y=K?function(e){return"symbol"==typeof e}:function(e){var t=Q("Symbol");return z(t)&&V(t.prototype,ec(e))};var eu={},el={},ed={},ep=String;ed=function(e){try{return ep(e)}catch(e){return"Object"}};var ef=TypeError;el=function(e){if(z(e))return e;throw new ef(ed(e)+" is not a function")},eu=function(e,t){var r=e[t];return R(r)?void 0:el(r)};var eh={},ev=TypeError;eh=function(e,t){var r,n;if("string"===t&&z(r=e.toString)&&!U(n=E(r,e))||z(r=e.valueOf)&&!U(n=E(r,e))||"string"!==t&&z(r=e.toString)&&!U(n=E(r,e)))return n;throw new ev("Can't convert object to primitive value")};var eg={},ey={},em={};em=!1;var e_={},eb=Object.defineProperty;e_=function(e,t){try{eb(_,e,{value:t,configurable:!0,writable:!0})}catch(r){_[e]=t}return t};var ew="__core-js_shared__",ek=ey=_[ew]||e_(ew,{});(ek.versions||(ek.versions=[])).push({version:"3.38.1",mode:em?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",source:"https://github.com/zloirock/core-js"}),eg=function(e,t){return ey[e]||(ey[e]=t||{})};var eE={},eS={},eO=Object;eS=function(e){return eO(D(e))};var ej=M({}.hasOwnProperty);eE=Object.hasOwn||function(e,t){return ej(eS(e),t)};var eL={},e$=0,eP=Math.random(),ex=M(1..toString);eL=function(e){return"Symbol("+(void 0===e?"":e)+")_"+ex(++e$+eP,36)};var eM=_.Symbol,eT=eg("wks"),eN=K?eM.for||eM:eM&&eM.withoutSetter||eL,eq=TypeError,eH=(eE(eT,e="toPrimitive")||(eT[e]=X&&eE(eM,e)?eM[e]:eN("Symbol."+e)),eT[e]);G=function(e,t){if(!U(e)||Y(e))return e;var r,n=eu(e,eH);if(n){if(void 0===t&&(t="default"),r=E(n,e,t),!U(r)||Y(r))return r;throw new eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),eh(e,t)},W=function(e){var t=G(e,"string");return Y(t)?t:t+""};var eI={},eF={},eC=_.document,eA=U(eC)&&U(eC.createElement);eF=function(e){return eA?eC.createElement(e):{}},eI=!w&&!k(function(){return 7!==Object.defineProperty(eF("div"),"a",{get:function(){return 7}}).a});var eD=Object.getOwnPropertyDescriptor;r=w?eD:function(e,t){if(e=P(e),t=W(t),eI)try{return eD(e,t)}catch(e){}if(eE(e,t))return $(!E(n,e,t),e[t])};var eR={},eB={};eB=w&&k(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eG=String,eU=TypeError;eW=function(e){if(U(e))return e;throw new eU(eG(e)+" is not an object")};var ez=TypeError,eJ=Object.defineProperty,eY=Object.getOwnPropertyDescriptor,eQ="enumerable",eV="configurable",eK="writable";a=w?eB?function(e,t,r){if(eW(e),t=W(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&eK in r&&!r[eK]){var n=eY(e,t);n&&n[eK]&&(e[t]=r.value,r={configurable:eV in r?r[eV]:n[eV],enumerable:eQ in r?r[eQ]:n[eQ],writable:!1})}return eJ(e,t,r)}:eJ:function(e,t,r){if(eW(e),t=W(t),eW(r),eI)try{return eJ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new ez("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eR=w?function(e,t,r){return a(e,t,$(1,r))}:function(e,t,r){return e[t]=r,e};var eX={},eZ={},e0=Function.prototype,e1=w&&Object.getOwnPropertyDescriptor,e2=eE(e0,"name")&&(!w||w&&e1(e0,"name").configurable),e4={},e8=M(Function.toString);z(ey.inspectSource)||(ey.inspectSource=function(e){return e8(e)}),e4=ey.inspectSource;var e9={},e3={},e7=_.WeakMap;e3=z(e7)&&/native code/.test(String(e7));var e5={},e6=eg("keys");e5=function(e){return e6[e]||(e6[e]=eL(e))};var te={};te={};var tt="Object already initialized",tr=_.TypeError,tn=_.WeakMap;if(e3||ey.state){var ti=ey.state||(ey.state=new tn);ti.get=ti.get,ti.has=ti.has,ti.set=ti.set,s=function(e,t){if(ti.has(e))throw new tr(tt);return t.facade=e,ti.set(e,t),t},c=function(e){return ti.get(e)||{}},u=function(e){return ti.has(e)}}else{var to=e5("state");te[to]=!0,s=function(e,t){if(eE(e,to))throw new tr(tt);return t.facade=e,eR(e,to,t),t},c=function(e){return eE(e,to)?e[to]:{}},u=function(e){return eE(e,to)}}var ta=(e9={set:s,get:c,has:u,enforce:function(e){return u(e)?c(e):s(e,{})},getterFor:function(e){return function(t){var r;if(!U(t)||(r=c(t)).type!==e)throw new tr("Incompatible receiver, "+e+" required");return r}}}).enforce,ts=e9.get,tc=String,tu=Object.defineProperty,tl=M("".slice),td=M("".replace),tp=M([].join),tf=w&&!k(function(){return 8!==tu(function(){},"length",{value:8}).length}),th=String(String).split("String"),tv=eZ=function(e,t,r){"Symbol("===tl(tc(t),0,7)&&(t="["+td(tc(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eE(e,"name")||e2&&e.name!==t)&&(w?tu(e,"name",{value:t,configurable:!0}):e.name=t),tf&&r&&eE(r,"arity")&&e.length!==r.arity&&tu(e,"length",{value:r.arity});try{r&&eE(r,"constructor")&&r.constructor?w&&tu(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=ta(e);return eE(n,"source")||(n.source=tp(th,"string"==typeof t?t:"")),e};Function.prototype.toString=tv(function(){return z(this)&&ts(this).source||e4(this)},"toString"),eX=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(z(r)&&eZ(r,o,n),n.global)i?e[t]=r:e_(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tg={},ty={},tm={},t_={},tb={},tw={},tk=Math.ceil,tE=Math.floor;tw=Math.trunc||function(e){var t=+e;return(t>0?tE:tk)(t)},tb=function(e){var t=+e;return t!=t||0===t?0:tw(t)};var tS=Math.max,tO=Math.min;t_=function(e,t){var r=tb(e);return r<0?tS(r+t,0):tO(r,t)};var tj={},tL={},t$=Math.min;tL=function(e){var t=tb(e);return t>0?t$(t,9007199254740991):0},tj=function(e){return tL(e.length)};var tP=function(e){return function(t,r,n){var i,o=P(t),a=tj(o);if(0===a)return!e&&-1;var s=t_(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tx={includes:tP(!0),indexOf:tP(!1)}.indexOf,tM=M([].push);tm=function(e,t){var r,n=P(e),i=0,o=[];for(r in n)!eE(te,r)&&eE(n,r)&&tM(o,r);for(;t.length>i;)eE(n,r=t[i++])&&(~tx(o,r)||tM(o,r));return o};var tT=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tm(e,tT)},d=Object.getOwnPropertySymbols;var tN=M([].concat);ty=Q("Reflect","ownKeys")||function(e){var t=l(eW(e));return d?tN(t,d(e)):t},tg=function(e,t,n){for(var i=ty(t),o=0;o<i.length;o++){var s=i[o];eE(e,s)||n&&eE(n,s)||a(e,s,r(t,s))}};var tq={},tH=/#|\.prototype\./,tI=function(e,t){var r=tC[tF(e)];return r===tD||r!==tA&&(z(t)?k(t):!!t)},tF=tI.normalize=function(e){return String(e).replace(tH,".").toLowerCase()},tC=tI.data={},tA=tI.NATIVE="N",tD=tI.POLYFILL="P";tq=tI,m=function(e,t){var n,i,o,a,s,c=e.target,u=e.global,l=e.stat;if(n=u?_:l?_[c]||e_(c,{}):_[c]&&_[c].prototype)for(i in t){if(a=t[i],o=e.dontCallGetSet?(s=r(n,i))&&s.value:n[i],!tq(u?i:c+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tg(a,o)}(e.sham||o&&o.sham)&&eR(a,"sham",!0),eX(n,i,a,e)}};var tR={},tB={},tW=Function.prototype,tG=tW.apply,tU=tW.call;tB="object"==typeof Reflect&&Reflect.apply||(S?tU.bind(tG):function(){return tU.apply(tG,arguments)});var tz={},tJ={},tY=(tJ=function(e){if("Function"===H(e))return M(e)})(tJ.bind);tz=function(e,t){return el(e),void 0===t?e:S?tY(e,t):function(){return e.apply(t,arguments)}};var tQ={};tQ=Q("document","documentElement");var tV={};tV=M([].slice);var tK={},tX=TypeError;tK=function(e,t){if(e<t)throw new tX("Not enough arguments");return e};var tZ={};tZ=/(?:ipad|iphone|ipod).*applewebkit/i.test(ee);var t0={},t1={},t2=function(e){return ee.slice(0,e.length)===e};t0="NODE"==(t1=t2("Bun/")?"BUN":t2("Cloudflare-Workers")?"CLOUDFLARE":t2("Deno/")?"DENO":t2("Node.js/")?"NODE":_.Bun&&"string"==typeof Bun.version?"BUN":_.Deno&&"object"==typeof Deno.version?"DENO":"process"===H(_.process)?"NODE":_.window&&_.document?"BROWSER":"REST");var t4=_.setImmediate,t8=_.clearImmediate,t9=_.process,t3=_.Dispatch,t7=_.Function,t5=_.MessageChannel,t6=_.String,re=0,rt={},rr="onreadystatechange";k(function(){p=_.location});var rn=function(e){if(eE(rt,e)){var t=rt[e];delete rt[e],t()}},ri=function(e){return function(){rn(e)}},ro=function(e){rn(e.data)},ra=function(e){_.postMessage(t6(e),p.protocol+"//"+p.host)};t4&&t8||(t4=function(e){tK(arguments.length,1);var t=z(e)?e:t7(e),r=tV(arguments,1);return rt[++re]=function(){tB(t,void 0,r)},f(re),re},t8=function(e){delete rt[e]},t0?f=function(e){t9.nextTick(ri(e))}:t3&&t3.now?f=function(e){t3.now(ri(e))}:t5&&!tZ?(v=(h=new t5).port2,h.port1.onmessage=ro,f=tz(v.postMessage,v)):_.addEventListener&&z(_.postMessage)&&!_.importScripts&&p&&"file:"!==p.protocol&&!k(ra)?(f=ra,_.addEventListener("message",ro,!1)):f=rr in eF("script")?function(e){tQ.appendChild(eF("script"))[rr]=function(){tQ.removeChild(this),rn(e)}}:function(e){setTimeout(ri(e),0)});var rs=(tR={set:t4,clear:t8}).clear;m({global:!0,bind:!0,enumerable:!0,forced:_.clearImmediate!==rs},{clearImmediate:rs});var rc=tR.set,ru={},rl=_.Function,rd=/MSIE .\./.test(ee)||"BUN"===t1&&((t=_.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));ru=function(e,t){var r=t?2:1;return rd?function(n,i){var o=tK(arguments.length,1)>r,a=z(n)?n:rl(n),s=o?tV(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var rp=_.setImmediate?ru(rc,!1):rc;m({global:!0,bind:!0,enumerable:!0,forced:_.setImmediate!==rp},{setImmediate:rp});const rf="https://forkify-api.herokuapp.com/api/v2/recipes",rh="b7bce8d8-8a58-4e37-998f-ff84c1999c90",rv=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request Time Out !"))},5e3)})]),i=await n.json();if(!n.ok)throw Error(`${n.status} (${i.message})`);return i}catch(e){throw e}},rg={recipe:{},search:{query:"",result:[],page:1,resultsPerPage:10},bookmarks:[]},ry=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,image:t.image_url,ingredients:t.ingredients,source:t.source_url,cookingTime:t.cooking_time,servings:t.servings,...t.key&&{key:t.key}}},rm=async function(e){try{let t=await rv(`${rf}/${e}?key=${rh}`);rg.recipe=ry(t),rg.recipe.bookmarked=!!rg.bookmarks.some(t=>t.id===e)}catch(e){throw console.error(e),e}},r_=async function(e){try{rg.search.query=e;let t=await rv(`${rf}?search=${e}&key=${rh}`);console.log(t),rg.search.result=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),rg.search.page=1}catch(e){throw console.error(e),e}},rb=function(e=rg.search.page){rg.search.page=e;let t=(e-1)*rg.search.resultsPerPage,r=e*rg.search.resultsPerPage;return rg.search.result.slice(t,r)},rw=function(e){rg.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*(e/rg.recipe.servings)}),rg.recipe.servings=e},rk=function(){localStorage.setItem("Bookmarks",JSON.stringify(rg.bookmarks))},rE=function(e){rg.bookmarks.push(e),e.id===rg.recipe.id&&(rg.recipe.bookmarked=!0),rk()},rS=function(e){let t=rg.bookmarks.findIndex(t=>t.id===e);rg.bookmarks.splice(t,1),e===rg.recipe.id&&(rg.recipe.bookmarked=!1),rk()};!function(){let e=localStorage.getItem("Bookmarks");e&&(rg.bookmarks=JSON.parse(e))}();const rO=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error("Wrong Ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rv(`${rf}?key=${rh}`,r);rg.recipe=ry(n),rE(rg.recipe)}catch(e){throw e}};var rj={};rj=new URL("icons.c14567a0.svg",import.meta.url).toString();class rL{_errorMessage="Please try again !";_message="";_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("beforeend",r)}update(e){if(!e)return;this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}_clear(){this._parentElement.innerHTML=""}renderError(e=this._errorMessage){let t=`<div class="error">
          <div>
            <svg>
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("beforeend",t)}renderMessage(e=this._message){let t=`<div class="message">
          <div>
            <svg>
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-smile"></use>
            </svg>
          </div>
          <p> ${e}</p>
        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("beforeend",t)}renderSpinner(){let e=`
      <div class="spinner">
      <svg>
      <use href="${/*@__PURE__*/y(rj)}#icon-loader"></use>
      </svg>
      </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class r$ extends rL{_parentElement=document.querySelector(".recipe");addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerServing(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateTo:n}=r.dataset;0>=+n||e(+n)})}addHandlerBookmark(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&(console.log(r),e())})}_generateMarkup(){return` <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rj)}#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings-1}>
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}.svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button class="btn--tiny btn--update-servings" data-update-to=${this._data.servings+1}>
                <svg>
                  <use href="${/*@__PURE__*/y(rj)}.svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>

          <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
            <svg>
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-user"></use>
            </svg>
          </div>
          <button class="btn--round btn--bookmark">
            <svg class="">
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
            </svg>
          </button>
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">  
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
          </ul>
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.source}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rj)}.svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>
    `}_generateMarkupIngredient(e){let t=`${e.quantity}`.includes("null")?`${e.quantity}`.replace("null",""):`${+e.quantity}`;return t<=0&&(t=""),`
            <li class="recipe__ingredient">
              <svg class="recipe__icon">
                <use href="${/*@__PURE__*/y(rj)}.svg#icon-check"></use>
              </svg>
              <div class="recipe__quantity">${t}</div>
              <div class="recipe__description">
                <span class="recipe__unit">${e.unit}</span>
                ${e.description}
              </div>
            </li> `}}var rP=new r$;class rx{_parentElement=document.querySelector(".search");getQuery(){let e=this._parentElement.querySelector(".search__field").value;return this._clearInputs(),e}_clearInputs(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rM=new rx,rT=new class extends rL{_generateMarkup(){let e=window.location.hash.slice(1);return`
      <li class="preview">
        <a class="preview__link ${e===this._data.id?"preview__link--active":""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${/*@__PURE__*/y(rj)}.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
      `}};class rN extends rL{_parentElement=document.querySelector(".results");_errorMessage="Recipe Not Found ! Please try again !";_message="";_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rq=new rN;class rH extends rL{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page;console.log(this._data);let t=Math.ceil(this._data.result.length/this._data.resultsPerPage);return(console.log(t),1===e&&t>1)?this._generateMarkupNext(e):1===e&&1===t?"":e===t&&t>1?this._generateMarkupPrev(e):e<t?`${this._generateMarkupPrev(e)} ${this._generateMarkupNext(e)}`:void 0}_generateMarkupPrev(e){return`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rj)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>`}_generateMarkupNext(e){return`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rj)}#icon-arrow-right"></use>
            </svg>
        </button>`}addHandlerPagination(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}}var rI=new rH;class rF extends rL{_parentElement=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerLoad(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rT.render(e,!1)).join("")}}var rC=new rF;class rA extends rL{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");btnClose=document.querySelector(".btn--close-modal");btnOpen=document.querySelector(".nav__btn--add-recipe");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}_toggle(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this.btnOpen.addEventListener("click",this._toggle.bind(this))}_addHandlerCloseWindow(){this.btnClose.addEventListener("click",this._toggle.bind(this)),this._overlay.addEventListener("click",this._toggle.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}}var rD=new rA,rR=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new L(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function y(){}function m(){}var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b($([])));w&&w!==r&&n.call(w,a)&&(_=w);var k=m.prototype=g.prototype=Object.create(_);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rR}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rR:Function("r","regeneratorRuntime = r")(rR)}const rB=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rP.renderSpinner(),rq.update(rb()),rC.update(rg.bookmarks),await rm(e),rP.render(rg.recipe)}catch(e){console.error(e),rP.renderError()}},rW=async function(){try{rq.renderSpinner();let e=rM.getQuery();if(!e)return;await r_(e),rq.render(rb()),rI.render(rg.search)}catch(e){console.error(e)}},rG=async function(e){try{rD.renderSpinner(),await rO(e),console.log(rg.recipe),rP.render(rg.recipe),rD.renderMessage(),rC.render(rg.bookmarks),window.history.pushState(null,"",`${rg.recipe.id}`),setTimeout(function(){rD._overlay.classList.contains("hidden")||rD._toggle()},2500)}catch(e){console.error(e),rD.renderError(e.message)}};rC.addHandlerLoad(function(){rC.render(rg.bookmarks)}),rP.addHandlerRender(rB),rP.addHandlerServing(function(e){rw(e),rP.update(rg.recipe)}),rP.addHandlerBookmark(function(){rg.recipe.bookmarked?rS(rg.recipe.id):rE(rg.recipe),rP.update(rg.recipe),rC.render(rg.bookmarks)}),rM.addHandlerSearch(rW),rI.addHandlerPagination(function(e){rq.render(rb(e)),rI.render(rg.search)}),rD.addHandlerUpload(rG);
//# sourceMappingURL=index.b4827c63.js.map