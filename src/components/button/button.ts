export function initButtonComp() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      const button = document.createElement("button");
      button.textContent = this.textContent; // (19 - 22) Mostramos el contenido ingresado en cada página/escena. Si el contenido se ingresa desde la page, hay que mostrarlo de este modo (si se ingresa desde el componente no, como en el header)
      button.classList.add("button");

      const styles = document.createElement("style");
      styles.textContent = `
            .button {
                height: 55px;
                width: 100%;
                font-size: 22px;
                background-color: #9CBBE9;
                border-style: none;
            }
      `;

      const type = this.getAttribute("type"); // Yo. Selecciono el type y por ende le doy su estilo, en vez de hacer dos componentes para los botones.

      if (type == "outlined") {
        styles.textContent = `
        .button {
            height: 55px;
            width: 100%;
            font-size: 22px;
            background-color: white;
            border: solid 2px black;
        }
        `;
      }

      shadow.appendChild(styles);
      shadow.appendChild(button);
    }
  }

  customElements.define("button-comp", Button);
}
