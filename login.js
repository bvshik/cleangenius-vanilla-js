document.addEventListener("click", (e) => {
  if (!e.target.matches("[login-button]")) return;
  window.location.replace("cleangenius-projzal-internal.netlify.app");
});
