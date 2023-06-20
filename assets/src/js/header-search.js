(() => {
  let radioInputs = document.querySelectorAll(
    "#header-search-form input[type=radio]"
  );

  let form = document.querySelector("#header-search-form");
  let searchInput = document.querySelector("#header-search-input");

  for (let radioInput of radioInputs) {
    let label = document.querySelector('label[for="' + radioInput.id + '"]');

    label.addEventListener("click", function () {
      updateFormAndInput(radioInput);
    });

    radioInput.addEventListener("change", function () {
      if (radioInput.checked) {
        updateFormAndInput(radioInput);
      }
    });
  }

  function updateFormAndInput(radioInput) {
    form.action = radioInput.dataset.action;
    searchInput.placeholder = radioInput.dataset.placeholder;
  }
})();
