const f="modulepreload",h=function(i){return"/"+i},c={},E=function(a,s,v){let l=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const e=document.querySelector("meta[property=csp-nonce]"),n=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));l=Promise.all(s.map(t=>{if(t=h(t),t in c)return;c[t]=!0;const o=t.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${u}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":f,o||(r.as="script"),r.crossOrigin="",r.href=t,n&&r.setAttribute("nonce",n),document.head.appendChild(r),o)return new Promise((d,m)=>{r.addEventListener("load",d),r.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return l.then(()=>a()).catch(e=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=e,window.dispatchEvent(n),!n.defaultPrevented)throw e})};export{E as _};
