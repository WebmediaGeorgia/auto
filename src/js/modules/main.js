export function addMainScript() {
  const form_all = document.querySelectorAll(" form");

  form_all.forEach((item) => {
    item.addEventListener("submit", sendForm);
  });

  function sendForm(e) {
    e.preventDefault();
    e.target.reset();
    lookPopapSuccess();
  }
  // popap
  const popap = document.querySelector(".popup-for-successful");
  let closePopap = document.querySelector(".popup-for-successful .popup_close");
  let backPopap = document.querySelector(".popup-for-successful .back-to-main");

  function lookPopapSuccess() {
    popap.classList.add("open");
    closePopap.addEventListener("click", function (e) {
      popap.classList.remove("open");
      e.preventDefault();
    });
    backPopap.addEventListener("click", function (e) {
      popap.classList.remove("open");
      e.preventDefault();
    });
  }
}
