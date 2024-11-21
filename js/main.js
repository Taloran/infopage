document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("games");
  const moreBtn = document.querySelector(".more");
  const closeBtn = document.querySelector(".close");
  const themeBtn = document.getElementById("theme-btn");
  const moonIcon = themeBtn.querySelector("i");

  const theme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", theme);
  updateIcon(theme);

  moreBtn.onclick = () => {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  closeBtn.onclick = () => {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  };

  popup.onclick = (e) => {
    if (e.target === popup) {
      popup.classList.remove("show");
      document.body.style.overflow = "";
    }
  };

  document.onkeydown = (e) => {
    if (e.key === "Escape" && popup.classList.contains("show")) {
      popup.classList.remove("show");
      document.body.style.overflow = "";
    }
  };

  themeBtn.onclick = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon(next);
  };

  function updateIcon(theme) {
    if (theme === "dark") {
      moonIcon.classList.remove("fa-moon");
      moonIcon.classList.add("fa-sun");
    } else {
      moonIcon.classList.remove("fa-sun");
      moonIcon.classList.add("fa-moon");
    }
  }
});
