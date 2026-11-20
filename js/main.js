(() => {
  "use strict";
  document.querySelectorAll("a.placeholder-link[href='#']").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));
  const nav = document.getElementById("primaryNav");
  if (nav && window.bootstrap) {
    document.querySelectorAll("#primaryNav .nav-link").forEach((link) => link.addEventListener("click", () => {
      if (window.innerWidth < 992 && nav.classList.contains("show")) window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }));
  }
})();
