document.addEventListener("DOMContentLoaded", () => {
    "use strict";
  
    const modal = () => {
      const cardDetailsButtonBuy = document.querySelector(
        ".header_btn"
      );
      const close = document.querySelector(".modal-close-btn");
      const modal = document.querySelector(".modal");
      const cardDetailsTitle = document.querySelector(".card-details__title");
      const modalTitle = modal.querySelector(".modal__title");
      const modalSubTitle = modal.querySelector(".modal__subtitle");
      const modalTitleSubmit = modal.querySelector(".modal__title-submit");
  
      const openModal = (e) => {
        const target = e.target;
        modal.classList.add("open");
        document.addEventListener("keydown", escapeHandler);
        modalTitle.textContent = cardDetailsTitle.textContent;
        modalTitleSubmit.value = cardDetailsTitle.textContent;
        modalSubTitle.textContent = target.dataset.buttonBuy;
      };
  
      const closeModal = () => {
        modal.classList.remove("open");
        document.removeEventListener("keydown", escapeHandler);
      };
  
      const escapeHandler = (event) => {
        if (event.code === "Escape") {
          closeModal();
        }
      };
  
      modal.addEventListener("click", (e) => {
        const target = e.target;
        if (
          target.classList.contains("modal__close") ||
          !target.closest(".modal__block")
        ) {
          closeModal();
        }
      });
  
      cardDetailsButtonBuy.addEventListener("click", openModal);
      close.addEventListener("click", closeModal);
    };
  
    
  
    modal();
  });
  