!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=t.startBtn,a=t.stopBtn,n=t.body;e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));n.style.backgroundColor=t}),1e3)})),a.addEventListener("click",(function(){a.disabled=!0,e.disabled=!1,clearInterval(o)}));var o=0}();
//# sourceMappingURL=01-color-switcher.633986c9.js.map