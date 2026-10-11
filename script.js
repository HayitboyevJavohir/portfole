
const skills = ["html", "css", "js", "python", "git", "vercel"];

skills.forEach((name) => {
  const slider = document.getElementById(`${name}-range`);
  const value = document.getElementById(`${name}-value`);
  const bar = document.getElementById(`${name}-bar`);

  if (!slider || !value || !bar) return;

  let saved = null;

  try {
    saved = localStorage.getItem(`javohir-skill-${name}`);
  } catch {}

  if (saved !== null && saved !== "" && Number.isFinite(Number(saved))) {
    slider.value = Math.max(0, Math.min(100, Number(saved)));
  }

  function updateSkill() {
    const percent = Number(slider.value);

    value.textContent = `${percent}%`;
    bar.style.width = `${percent}%`;

    try {
      localStorage.setItem(`javohir-skill-${name}`, percent);
    } catch {}
  }

  slider.addEventListener("input", updateSkill);
  updateSkill();
});

// Dark / Light mode
const themeButton = document.getElementById("theme-toggle");

let savedTheme = null;

try {
  savedTheme = localStorage.getItem("javohir-theme");
} catch {}

if (savedTheme === "light") {
  document.body.classList.add("light");
}

function updateThemeButton() {
  themeButton.textContent =
    document.body.classList.contains("light") ? "🌙" : "☀️";
}

updateThemeButton();

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const theme = document.body.classList.contains("light")
    ? "light"
    : "dark";

  try {
    localStorage.setItem("javohir-theme", theme);
  } catch {}

  updateThemeButton();
});

// Current year
document.getElementById("year").textContent = new Date().getFullYear();
