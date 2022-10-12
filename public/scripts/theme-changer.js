
// const themeChanger = document.querySelector('.theme-toggle--button').addEventListener('click', (isClicked) =>{
//   if (isClicked){
//     document.body.classList.toggle('white-theme')
//   } else {
//     document.body.classList.remove('white-theme')
//   }
// })

const btn = document.querySelector(".theme-toggle--button");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "white") {
  document.body.classList.add("white-theme");
}

btn.addEventListener("click", function() {
  document.body.classList.toggle("white-theme");

  let theme = "dark";

  if (document.body.classList.contains("white-theme")) {
    theme = "white";
  }

  localStorage.setItem("theme", theme);
});