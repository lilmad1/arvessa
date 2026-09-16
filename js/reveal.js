/* Scroll-reveal for Arvessa. Adds .in as elements enter the viewport.
   Skips entirely for reduced-motion users. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -36px 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
