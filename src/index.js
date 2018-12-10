
function $(id) {
  return document.getElementById(id);
}
function hide(id) {
  $(id).style.display = "none";
}
function show(id) {
  $(id).style.display = "block";
}

function hideElement(el) {
  el.style.display = 'none';
}

function hideAllPages() {
  var pages = document.querySelectorAll(".page-block");
  pages.forEach(hideElement);
}

function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for(var i = 0; i < links.length; i++) {
    links[i].onclick = function(){
      hideAllPages();
      var page = this.getAttribute('data-page');
      show(page + "-page");
    };
  }
}

function initSkillsPage() {
  var skills = [
    {name: 'js', endorsments: 7, endorsedBy: 'Andrei'},
    {name: 'HTML', endorsments: 6, endorsedBy: ''},
    {name: 'engineering', endorsments: 3, endorsedBy: ''},
    {name: 'electronics', endorsments: 7, endorsedBy: 'Gheorghe'},
    {name: 'css', endorsments: 2, endorsedBy: ''}
  ];
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function(skill) {
    var endorsedBy = ' - Endorsed by';
    if (skill.endorsedBy == "") {
      endorsedBy = "";
    }
    var name = skill.name.toUpperCase();
    return `<li>${name}
      <span style="color: gray">- ${skill.endorsments} ${endorsedBy}</span> 
      ${skill.endorsedBy}
      </li>`;
  });
  resultList.innerHTML = listItems.join('');
}

initMenu();
show('skills-page');
initSkillsPage();
