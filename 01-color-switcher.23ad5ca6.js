!function(){var t,e={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};e.stop.disabled=!0,e.start.addEventListener("click",(function(){e.start.disabled=!0,e.stop.disabled=!1,t=setInterval((function(){e.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.stop.addEventListener("click",(function(){e.start.disabled=!1,e.stop.disabled=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.23ad5ca6.js.map