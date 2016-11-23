{  var link = document.querySelector(".btn-feedback-form");
  var popup = document.querySelector(".modal-content");
  var overlay = document.querySelector(".overlay");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var ffname = popup.querySelector("[name=feedback-form-name]");
  var ffemail = popup.querySelector("[name=feedback-form-email]");
  var ffcontent = popup.querySelector("[name=feedback-form-content]");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("overlay-show");
    ffname.focus();
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("overlay-show");
  });

  form.addEventListener("submit", function(event) {
    if (!ffname.value || !ffemail.value || !ffcontent.value) {
      event.preventDefault();
      console.log("Нужно ввести имя,почту и сообщение");
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("overlay-show");
      }
    }
  });
}
