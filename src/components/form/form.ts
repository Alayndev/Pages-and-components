export function initFormComp() {
  class Form extends HTMLElement {
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
            <input type="text" class="input">
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

  customElements.define("form-comp", Form);
}
