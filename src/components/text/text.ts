export function initTextComp() {
  class Text extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const variant = this.getAttribute("variant") || "body"; 
      
      const text = document.createElement("h3");
      text.className = variant; 
      
      const styles = document.createElement("style");
      styles.textContent = `
              .title {
                font-size: 52px;
                font-weight: bold;
                margin: 0;
              }
              
              .large {
                font-size: 22px;
                margin: 0;               
                font-weight: 500;
              }
              
              .body {
                margin: 0;
                font-size: 18px;
                font-weight: 400;
              }
        `;

      text.textContent = this.textContent; 

      shadow.appendChild(styles);
      shadow.appendChild(text);
    }
  }

  customElements.define("text-comp", Text);
}
