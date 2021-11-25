class OtherModal {
  modalContainer = document.createElement("div");
  displayContainer = document.querySelector(".main");
  CLOSE_BTN = "modal_close-btn";
  static CHANGE_DISPLAY = Date.now();

  constructor(display) {
    this.modalContainer.classList.add("modal-container");
    this.modalContainer.innerHTML = `<div class="modal-shade"><div class="modal"><div class="modal-content"></div><button class="${this.CLOSE_BTN}">❌</button></div></div>`;
    const modalContent = this.modalContainer.querySelector(".modal-content");

    modalContent.innerHTML = display;

    this.displayContainer.appendChild(this.modalContainer);

    this.show();

    const closeBtn = this.modalContainer.querySelector(`.${this.CLOSE_BTN}`);
    closeBtn.addEventListener("click", this.hide.bind(this));
  }

  show() {
    this.modalContainer.style.display = "block";
  }

  hide() {
    this.modalContainer.style.display = "none";
  }

  setEvent(eventName, identifier, funcName, data = null) {
    const target = this.modalContainer.querySelector(`.${identifier}`);
    console.log(target);
    switch (funcName) {
      case OtherModal.CHANGE_DISPLAY:
        target.addEventListener(eventName, () => {
          console.log(123);
          console.log(data);
          this.changeDisplay(data);
        });
        break;
    }
  }

  changeDisplay(data) {
    console.log("hihihi");
    const modalContent = this.modalContainer.querySelector(".modal-content");
    if (data) {
      modalContent.innerHTML = "<h1>asdasd</h1>";
    }
  }

  changeDisplay() {}
}

export default OtherModal;