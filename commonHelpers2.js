import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:""};function s(e){localStorage.setItem("feedback-form-state",JSON.stringify(e))}function o(){const e=localStorage.getItem("feedback-form-state");return e?JSON.parse(e):null}const t=document.querySelector(".feedback-form"),l=t.elements.email,m=t.elements.message;t.addEventListener("input",e=>{a[e.target.name]=e.target.value,s(a)});document.addEventListener("DOMContentLoaded",()=>{const e=o();e&&(a.email=e.email,a.message=e.message,l.value=e.email,m.value=e.message)});t.addEventListener("submit",e=>{if(e.preventDefault(),a.email===""||a.message===""){alert("Fill please all fields");return}console.log(a),localStorage.removeItem("feedback-form-state"),a.email="",a.message="",t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
