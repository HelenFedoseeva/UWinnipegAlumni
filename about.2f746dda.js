!function(){var e=document.getElementById("#modal"),n=document.querySelector(".backdrop"),t=document.querySelector(".modal__form"),l=document.getElementById("#modal-close");function a(e){n.classList.add("is-hidden")}function s(e){"Escape"===e.key&&a()}function o(e){"backdrop"===e.target.classList.value&&a()}e.addEventListener("click",(function(e){n.classList.remove("is-hidden"),t.innerHTML="",l='\n    <p class="form__title">Leave Your data for more details</p>\n            <div class="form__container">\n                <label class="form__label">\n                    <span class="form__label-title">First Name</span>\n                    <input class="form__input" type="text" name="first-name" placeholder="Alex" required="required" >\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Last Name</span>\n                    <input class="form__input" type="text" name="last-name" placeholder="Smith">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">E-mail</span>\n                    <input class="form__input" type="email" name="email" placeholder="alex@gmail.com">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Occupation</span>\n                    <input class="form__input" type="text" name="occupation" placeholder="Student">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Year of graduation</span>\n                    <input class="form__input" type="number" name="Year-of-graduation" placeholder="2001">\n                </label>\n                <label class="form__label">\n                    <span class="form__label-title">Major</span>\n                    <input class="form__input" type="text" name="major" placeholder="major">\n                </label>\n            </div>\n            <div class="modal__btn-wrapper">\n                <button class="btn btn__light btn__modal-close" type="button">Close</button>\n                <button class="btn btn__light" type="submit">Submit</button>\n                \n            </div>\n  ',t.insertAdjacentHTML("afterbegin",l),document.addEventListener("keydown",s),document.addEventListener("click",o),t.addEventListener("click",(function(e){e.target.classList.contains("btn__modal-close")&&a()}));var l})),l.addEventListener("click",a),document.removeEventListener("keydown",s),document.removeEventListener("click",o);var i=document.getElementById("#email-modal-header"),c=document.getElementById("#email-modal-footer"),r=document.querySelector(".form");function m(e){var t;n.classList.remove("is-hidden"),document.getElementById("#modal-close").addEventListener("click",a),document.addEventListener("keydown",s),document.addEventListener("click",o),r.innerHTML="",t='\n    <div>\n            <p class="form__title">\n            Leave Your Email to receive news\n            </p>\n            <div class="form__container">\n                <label class="form__label">\n                <span class="form__label-title">E-mail</span>\n                <input class="form__input" type=\'text\' name=\'e-mail\' placeholder=\'Your e-mail\' required>\n                </label> \n            </div>\n        <button class="btn btn__light" type=\'submit\'>Submit</button>\n    </div>\n    ',r.insertAdjacentHTML("afterbegin",t)}i.addEventListener("click",m),c.addEventListener("click",m),document.removeEventListener("keydown",s),document.removeEventListener("click",o)}();
//# sourceMappingURL=about.2f746dda.js.map