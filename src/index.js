
function $(id) {
  return document.getElementById(id)
}

function hide(id) {
  $(id).style.display = "none";

}
function show(id) {
  $(id).style.display = "block";
}

function hideAllpages() {
  var pages = document.querySelectorAll(".page-block");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

}

function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
}
var links = document.querySelectorAll("#top-menu-bar a");
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    hideAllpages();
    var page = this.getAttribute('data-page');
    console.info('show page', page);
    show(page + "-page");
  };

}

function initSkillsPage() {
  var skills = ['js', 'html', 'css'];
  var resultList = document.querySelector('#skills-page ul');

  var listItems=skills.map(function (skill) {
    return `<li>${skill.toUpperCase()}</li>`;

  })

  resultList.innerHTML = listItems.join('');
}

initMenu();
show('skills-page');
initSkillsPage();



