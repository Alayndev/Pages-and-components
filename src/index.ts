import { initRouter } from "./router";

import { initHeaderComp } from "./components/header/header";

import { initTextComp } from "./components/text/text";

import { initFormComp } from "./components/form/form";

import { initSelectComp } from "./components/form/select";

import { initButtonComp } from "./components/button/button";

import { initfooterComp } from "./components/footer/footer";

function main() {
  initHeaderComp();
  initTextComp();
  initFormComp();
  initSelectComp();
  initButtonComp();
  initfooterComp();

  const container = document.querySelector(".main-container");
  initRouter(container);
}

main();
