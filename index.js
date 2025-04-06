import{S as f,a as m,i as p}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=document.querySelector(".gallery"),l=document.querySelector(".loader");function h(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:u})=>`<li class="gallery-item"><a href="${s}">
            <img class="gallery-image" src="${a}" alt="${e}" />
            <div class='item-footer'>
            <p><b>likes</b> ${t}</p>
            <p><b>views</b> ${i}</p>
            <p><b>comments</b> ${d}</p>
            <p><b>downloads</b> ${u}</p>
            </div>
        </a>
       
        </li>`).join("");y.innerHTML=r,L.refresh()}function g(){l.classList.remove("hidden-loader")}function b(){l.classList.add("hidden-loader")}const L=new f(".gallery a",{}),$="49602919-aeba24ff5374aa13ccf20c3b1",P="https://pixabay.com/api/",n={image_type:"photo",orientation:"horizontal",safesearch:!0};function A(o){return m.get(`${P}?key=${$}&q=${o}&image_type=${n.image_type}&orientation=${n.orientation}&safesearch=${n.safesearch}`).then(r=>(r.data.hits.length===0&&p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",timeout:3e3}),r.data)).catch(r=>{console.error("Error fetching data from Pixabay:",r)}).finally(()=>{b()})}const c=document.querySelector(".form");c.addEventListener("submit",o=>{o.preventDefault(),g();const r=c.elements["search-text"].value;A(r).then(a=>{h(a.hits)}),c.reset()});
//# sourceMappingURL=index.js.map
