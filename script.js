
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

// Saytning hozirgi yilini ko'rsatish
year.textContent = new Date().getFullYear();

// Dark va light mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "🌙" : "☀️";
  themeBtn.setAttribute(
    "aria-label",
    isLight ? "Qorong'i rejimga o'tish" : "Yorug' rejimga o'tish"
  );
});

// Telefonda navigatsiya menyusi
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Menyudan bo'lim tanlanganda menyuni yopish
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});
