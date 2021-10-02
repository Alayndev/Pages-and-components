export function initfooterComp() {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      const footer = document.createElement("footer");
      footer.classList.add("footer");
      footer.textContent = "Footer";

      const styles = document.createElement("style");
      styles.textContent = `
          .footer {
              height: 233px;
              width: 100%;
              background-color: hsla(313, 100%, 81%, 1);
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 22px;
              font-weight: 500;
          }
          `;

      shadow.appendChild(styles);
      shadow.appendChild(footer);
    }
  }

  customElements.define("footer-comp", Footer);
}
