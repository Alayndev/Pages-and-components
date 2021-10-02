export function initHeaderComp() {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const headerEl = document.createElement("header");
      headerEl.classList.add("header");
      headerEl.textContent = "Header";

      const styles = document.createElement("style");
      styles.textContent = `
            .header {
                font-size: 22px;
                font-weight: 500;
                width: 100%;
                height: 60px;
                background-color: hsla(0, 100%, 75%, 1);
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            @media (min-width: 769px) {
                .header {
                  height: 80px;
                }
              }          
          `;

      shadow.appendChild(styles);
      shadow.appendChild(headerEl);
    }
  }

  customElements.define("header-comp", Header);
}
