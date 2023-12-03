// write your code here
document.addEventListener("DOMContentLoaded",function(){function e(e,n){var t=document.createElement("div");t.textContent=e,t.classList.add("message",n),document.body.appendChild(t)}new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(){e("Promise 1 was resolved!")})}).then(function(){e("Promise was resolved!","message")}).catch(function(){e("Promise was rejected!","error-message")}),new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)}).then(function(){}).catch(function(n){e(n.message,"error-message")})});//# sourceMappingURL=index.c92977d9.js.map

//# sourceMappingURL=index.c92977d9.js.map
