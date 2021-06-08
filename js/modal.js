document.addEventListener("DOMContentLoaded", () => {
    "use strict";
  
    const modal = () => {
      const cardDetailsButtonBuy = document.querySelectorAll(
        ".header_btn"
      );
      const close = document.querySelector(".modal-close-btn");
      const modal = document.querySelector(".modal");
  
      const openModal = () => {
        modal.classList.add("open");
        document.addEventListener("keydown", escapeHandler);
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
  
      cardDetailsButtonBuy.forEach(el => {
        el.addEventListener("click", openModal);
      })
      close.addEventListener("click", closeModal);
    };
  
    
  
    modal();
  });
  