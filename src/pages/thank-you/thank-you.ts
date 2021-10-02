export function initPageThankYou(params) {
  const div = document.createElement("div");

  div.innerHTML = `
        <header-comp></header-comp>
        
        <div class="upper-container-thank-you">
        
          <div class="thank-you-title">
            <text-comp variant="title">Gracias</text-comp>
          </div>

          <div class="thank-you-large">
            <text-comp variant="large">Toda la información que nos brindaste es muy importante</text-comp>
          </div>


          <button-comp class="start-button">De nada (/welcome)</button-comp>
        </div>

        <footer-comp></footer-comp>
  `;

  const buttonEl = div.querySelector(".start-button");
  buttonEl.addEventListener("click", () => {
    params.goTo("/welcome");
  });

  return div;
}
