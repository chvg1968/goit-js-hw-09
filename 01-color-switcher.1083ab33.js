let t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),a.addEventListener("click",(function(){e.disabled=!1,clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.1083ab33.js.map
