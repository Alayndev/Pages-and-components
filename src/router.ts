import { initPageWelcome } from "./pages/welcome/welcome";

import { initPageStepOne } from "./pages/step-1/step-1";

import { initPageThankYou } from "./pages/thank-you/thank-you";

const routes = [
  {
    path: /\/welcome/,
    page: initPageWelcome,
  },
  {
    path: /\/step-1/,
    page: initPageStepOne,
  },
  {
    path: /\/thank-you/,
    page: initPageThankYou,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(location.pathname);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.page({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
