function $(id){
  return document.getElementById(id)
}

function hide(id){
 $(id).style.display = "none";
  
}
function show(id) {
  $(id).style.display = "block";
}

function showHomePage() {
  hide("skills-page");
  hide("education-page");
  hide("languages-page");
  hide("experience-page")
  hide("occupation-page")
  show("home-page");
}



function showSkillsPage() {
  hide("home-page");
  hide("education-page");
  hide("languages-page");
  hide("experience-page");
  hide("occupation-page");
  show("skills-page");
}
function showEducationPage() {
  hide("home-page");
  hide("skills-page");
  hide("languages-page");
  hide("occupation-page");
  hide("experience-page");
  show("education-page");

}
function showExperiencePage() {
  hide("home-page");
  hide("skills-page");
  hide("languages-page");
  hide("occupation-page");
  hide("education-page");
  show("experience-page");
}
function showOccupationPage() {
  hide("home-page");
  hide("skills-page");
  hide("languages-page");
  hide("experience-page");
  hide("education-page");
  show("occupation-page");
}
function showLanguagesPage() {
  hide("home-page");
  hide("skills-page");
  hide("education-page");
  hide("experience-page");
  hide("occupation-page");
  show("languages-page");
}

$("home-menu").onclick = showHomePage;
$("skills-menu").onclick = showSkillsPage;
$("education-menu").onclick = showEducationPage;
$("experience-menu").onclick = showExperiencePage;
$("occupation-menu").onclick = showOccupationPage;
$("languages-menu").onclick = showLanguagesPage;









// function hideAllpages(){
//   var pages = document.querySelectorAll(".page-block");
//   for( var i=0 ; i < pages.length ; i++ ){
//    pages[i].style.display = 'none';
//   }

// }
// var links = document.querySelectorAll("#top-menu-bar a");
// for( var i=0 ; i < links.length ; i++ ){
//   links[i].onclick = function(){
//     console.warn('hide all page');
//     hideAllpages();
//     var page = this.getAttribute('data-page')
//     console.info('show page',page );
//     show(page+"-page");

//   };

// }