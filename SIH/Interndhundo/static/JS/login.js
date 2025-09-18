(function () {
  function go(path) {
    try {
      if (window.parent) {
        window.parent.postMessage({ type: "navigate-to", path }, "*");
      }
    } catch {}
    // Fallback: navigate within static export
    window.location.href = path;
  }

  const backBtn = document.getElementById("login-back");
  if (backBtn) backBtn.addEventListener("click", () => go("../index.html"));

  const cancelBtn = document.getElementById("login-cancel");
  if (cancelBtn) cancelBtn.addEventListener("click", () => go("../index.html"));

  const brand = document.getElementById("nav-home");
  if (brand) brand.addEventListener("click", () => go("../index.html"));

  const form = document.getElementById("login-form");
  const msg = document.getElementById("login-msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = (document.getElementById("email") || {}).value || "";
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        if (msg) msg.textContent = "Please enter a valid email address.";
        return;
      }
      if (msg) msg.textContent = "";
      // Demo: redirect to home after a short delay
      setTimeout(() => go("./dashboard.html"), 900);
    });
  }
})();