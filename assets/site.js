(function () {
  "use strict";

  function closeAllLangSwitches(except) {
    document.querySelectorAll(".lang-switch.open").forEach(function (el) {
      if (el !== except) el.classList.remove("open");
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-switch__btn");
    if (btn) {
      var wrap = btn.closest(".lang-switch");
      var isOpen = wrap.classList.contains("open");
      closeAllLangSwitches(wrap);
      wrap.classList.toggle("open", !isOpen);
      return;
    }
    var burger = e.target.closest(".nav-burger");
    if (burger) {
      var panel = document.querySelector(".nav-mobile-panel");
      if (panel) panel.classList.toggle("open");
      return;
    }
    if (!e.target.closest(".lang-switch")) {
      closeAllLangSwitches(null);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAllLangSwitches(null);
  });
})();
