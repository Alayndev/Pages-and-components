export function initSelectComp() {
  class Select extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");

      const div = document.createElement("div");
      div.innerHTML = `
          <label class="label">
            <text-comp variant="body">
              ${label}
            </text-comp>
           <select class="input">
                <option value="1">Piedra</option>
                <option value="2">Papel</option>
                <option value="3">Tijera</option>
            </select>

          </label>
        `;

      const styles = document.createElement("style");
      styles.textContent = `
          * {
          box-sizing: border-box;
          }
      
          .label {
              font-size: 18px;
              display: block;
          }
  
          .input {
              width: 100%;
              font-size: 18px;
              padding: 15px;
              border: solid 2px black;
              border-radius: 4px;          
          }
        `;

      shadow.appendChild(styles);
      shadow.appendChild(div);
    }
  }

  customElements.define("select-comp", Select);
}
