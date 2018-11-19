console.info(18);
var motto, favorite, links;
motto = document.getElementById("motto");
console.log(motto);

var nume = "Ungur";
var prenume = "Ionel";
var owner = "Ungur 'I";
var msg1;

function showHomePage() {
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("home-page").style.display = "block";
}
function showSkillsPage() {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("languages-page").style.display = "none";
  document.getElementById("skills-page").style.display = "block";
}
function showLanguagesPage() {
  document.getElementById("home-page").style.display = "none";
  document.getElementById("skills-page").style.display = "none";
  document.getElementById("languages-page").style.display = "block";
}

document.getElementById("home-menu").onclick = showHomePage;
document.getElementById("skills-menu").onclick = showSkillsPage;
document.getElementById("languages-menu").onclick = showLanguagesPage;