import{a as S,S as v,i}from"./assets/vendor-DQvd0HNi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const x="https://pixabay.com/api/",q="55065656-85ede50aef63e79db30190b1f",M=15;async function h(n,o){const t={key:q,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:M};return(await S.get(x,{params:t})).data}const f=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const o=n.map(({webformatURL:t,largeImageURL:s,tags:e,likes:r,views:l,comments:P,downloads:E})=>`
        <li class="gallery-item">
          <a href="${s}">
            <img src="${t}" alt="${e}" loading="lazy" />
          </a>
          <ul class="info">
            <li>
              <span>Likes</span>
              <span>${r}</span>
            </li>
            <li>
              <span>Views</span>
              <span>${l}</span>
            </li>
            <li>
              <span>Comments</span>
              <span>${P}</span>
            </li>
            <li>
              <span>Downloads</span>
              <span>${E}</span>
            </li>
          </ul>
        </li>`).join("");f.insertAdjacentHTML("beforeend",o),R.refresh()}function $(){f.innerHTML=""}function L(){c.textContent="Loading images, please wait...",c.classList.add("visible")}function u(){c.classList.remove("visible"),c.textContent=""}function B(){g.classList.remove("is-hidden")}function d(){g.classList.add("is-hidden")}const b=document.querySelector(".form"),W=b.elements["search-text"],A=document.querySelector(".load-more-btn");let p="",a=1,m=0;const w=15;b.addEventListener("submit",O);A.addEventListener("click",_);async function O(n){n.preventDefault();const o=W.value.trim();if(!o){i.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}p=o,a=1,$(),d(),L();try{const t=await h(p,a);if(u(),!t.hits||t.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:432});return}m=t.totalHits,y(t.hits);const s=Math.ceil(m/w);a<s?B():(d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:432}))}catch(t){u(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:432}),console.error(t)}}async function _(){a+=1,L();try{const n=await h(p,a);u(),y(n.hits);const o=document.querySelector(".gallery-item");if(o){const{height:s}=o.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}const t=Math.ceil(m/w);a>=t&&(d(),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight",maxWidth:432}))}catch(n){u(),i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",maxWidth:432}),console.error(n)}}
//# sourceMappingURL=index.js.map
