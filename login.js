document.addEventListener("click", (e) => {
  if (!e.target.matches("[login-button]")) return;
  window.location.replace("https://cleangenius-projzal-internal.netlify.app");
});
