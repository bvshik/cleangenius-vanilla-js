document.addEventListener("click", (e) => {
  if (e.target.matches(".contactButton")) {
    window.location.replace("contact.html");
    return;
  }

  if (e.target.matches(".serviceButton")) {
    window.location.replace("services.html");
    return;
  }

  if (e.target.matches(".aboutusButton")) {
    window.location.replace("aboutus.html");
    return;
  }
});
