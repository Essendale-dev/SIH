// Minimal interactions for the static export.
// Change these targets if you host under a different router.
const NAV_HOME = "./index.html";
const AUTH = "Pages/login.html";
const DASHBOARD = "Pages/dashboard.html";
// Helpers
function go(path) {
// If used inside the SPA, try client-side. Otherwise fallback to direct nav.
try {
if (window.parent) {
window.parent.postMessage({ type: "navigate-to", path }, "*");
}
} catch {}
window.location.href = path;
}
// Brand click -> home
const brand = document.getElementById("nav-home");
if (brand) brand.addEventListener("click", () => go(NAV_HOME));
// CTA buttons -> auth (cannot know auth state in static)
["ctaTop", "ctaHero", "ctaStudents", "ctaCompanies", "ctaBottom"].forEach((id) => {
const el = document.getElementById(id);
if (el) el.addEventListener("click", () => go(AUTH));
});
// Apply buttons in jobs -> auth
document.querySelectorAll(".job__apply").forEach((btn) => {
btn.addEventListener("click", () => go(AUTH));
});