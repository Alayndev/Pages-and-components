export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.classList.add("welcome");

  div.innerHTML = `
        <header-comp></header-comp>

        <div class="upper-container-welcome">

          <div class="container-title">
            <text-comp variant="title">Te damos la bienvenida a esta página</text-comp>
          </div>

          <div class="container-body">
            <text-comp variant="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</text-comp>
          </div>

          <div class="container-large">
            <text-comp variant="large">Para continuar ingresá tu nombre</text-comp>
          </div>

          <div class="container-form">
            <form-comp label="Nombre"></form-comp>
          </div>

          <div class="container-button">
            <button-comp class="start-button">Comenzar</button-comp>
          </div>
  
        </div>

        <footer-comp></footer-comp>
  `;

  const buttonEl = div.querySelector(".start-button");
  buttonEl.addEventListener("click", () => {
    params.goTo("/step-1");
  });

  return div;
}

