!function(){var e=document.getElementById("#modal"),n=document.querySelector(".backdrop"),l=document.querySelector(".modal__form"),a=document.getElementById("#modal-close"),t=document.querySelector(".modal");function i(e){n.classList.add("is-hidden"),document.removeEventListener("keydown",o),document.removeEventListener("click",s)}function o(e){"Escape"===e.key&&(i(),document.removeEventListener("keydown",o),document.removeEventListener("click",s))}function s(e){"backdrop"===e.target.classList.value&&i()}e.addEventListener("click",(function(e){n.classList.remove("is-hidden"),l.innerHTML="",a='\n    <p class="form__title">Leave Your data for more details</p>\n            <div class="form__container">\n                <label class="form__label">\n                    <span class="form__label-title">First Name</span>\n                    <input id="name-input" class="field form__input" type="text" name="first-name" placeholder="Alex" required="required" >\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Last Name</span>\n                    <input id="last-name-input" class="field form__input" type="text" name="last-name" placeholder="Smith">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">E-mail</span>\n                    <input id="email-input" class="field form__input" type="email" name="email" placeholder="alex@gmail.com">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Occupation</span>\n                    <input id="occupation-input" class="field form__input" type="text" name="occupation" placeholder="Student">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Year of graduation</span>\n                    <input id="graduation-input" class="field form__input" type="number" name="Year-of-graduation" placeholder="2001">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Major</span>\n                    <input id="major-input" class="field form__input" type="text" name="major" placeholder="major">\n                </label>\n            </div>\n  ',l.insertAdjacentHTML("afterbegin",a),document.addEventListener("keydown",o),document.addEventListener("click",s),t.addEventListener("click",(function(e){e.target.classList.contains("btn__modal-close")&&i()}));var a})),a.addEventListener("click",i);var c=document.getElementById("#email-modal-header"),r=document.getElementById("#email-modal-footer"),d=document.querySelector(".form");function m(e){var l;n.classList.remove("is-hidden"),document.getElementById("#modal-close").addEventListener("click",i),document.addEventListener("keydown",o),document.addEventListener("click",s),d.innerHTML="",l='\n    <div>\n            <p class="form__title">\n            Leave Your Email to receive news\n            </p>\n            <div class="form__container">\n                <label class="form__label">\n                <span class="form__label-title">E-mail</span>\n                <input class="field form__input" type=\'text\' name=\'e-mail\' placeholder=\'Your e-mail\' required>\n                </label> \n            </div>\n    </div>\n    ',d.insertAdjacentHTML("afterbegin",l),t.addEventListener("click",(function(e){e.target.classList.contains("btn__modal-close")&&i()}))}c.addEventListener("click",m),r.addEventListener("click",m);var u=document.getElementById("form-submit");console.log(u),u.addEventListener("click",(function(e){e.preventDefault();for(var n={},a=l.querySelectorAll(".field"),t=0;t<a.length;t++){var i=a[t];""===i.value&&alert("The field cannot be empty"),n[i.name]=i.value,console.log(n),i.value=""}}))}();
//# sourceMappingURL=about.cdd04238.js.map
