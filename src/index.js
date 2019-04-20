import "./scss/main.scss";

document.addEventListener("DOMContentLoaded", () => {
  const moreInfoButton = document.getElementById("more-product-info");
  const modal = document.getElementById("modal");
  const modalCloseButton = document.getElementById("modal-close");
  const moreInfoContaner = document.querySelector(".product__more-info");

  moreInfoButton.addEventListener("click", () => {
    if (modal.classList.contains("modal-hidden")) {
      modal.classList.remove("modal-hidden");
      moreInfoButton.classList.add("hidden");
    }
  });

  modalCloseButton.addEventListener("click", () => {
    if (moreInfoButton.classList.contains("hidden")) {
      moreInfoButton.classList.remove("hidden");
      modal.classList.add("modal-hidden");
    }
  });

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    if (!resizeTimeout) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        handleResize();
      }, 66);
    }
  }

  function handleResize() {
    const additionalInfo = document.querySelector(".product__more-info #modal");
    if (window.innerWidth < 768) {
      if (additionalInfo) return;

      moreInfoContaner.appendChild(modal);
    } else {
      if (!additionalInfo) return;

      document.body.appendChild(additionalInfo);
    }
  }

  handleResize();
});
