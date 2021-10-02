export function initPageStepOne(params) {
  const div = document.createElement("div");

  div.innerHTML = `
      <header-comp></header-comp>
      
      <div class="upper-container-step-one">
      
        <div class="step-one-title">
          <text-comp variant="title">Necesitamos algunos datos más</text-comp>
        </div>

        <div class="step-one-form">
          <form-comp label="Email"></form-comp>
          <form-comp label="Comida favorita"></form-comp>
          <div>
            <select-comp label="Alguna de estas tres opciones"><select-comp>
          </div>
        </div>
        
        <div class="step-one-button-section">
          <button-comp class="start-button">Continuar</button-comp>
          <button-comp class="back-to-welcome" type="outlined">Volver</button-comp>
        </div>
        
      </div>
        

      <footer-comp></footer-comp>
  `;

  const buttonEl = div.querySelector(".start-button");
  buttonEl.addEventListener("click", () => {
    params.goTo("/thank-you");
  });

  const buttonBackEl = div.querySelector(".back-to-welcome");
  buttonBackEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
