var Skill = /** @class */ (function () {
    function Skill(name, ratio, list, skills) {
        this.name = name;
        this.ratio = ratio;
        this.list = list;
        this.skills = skills;
    }
    Skill.prototype.addToPage = function () {
        var _this = this;
        this.list.insertAdjacentHTML('beforeend', this.createHTML());
        this.list.lastElementChild.querySelector('.skill__button-delete')
            .addEventListener("click", function () {
            _this.skills.splice(_this.skills.indexOf(_this.name), 1);
            document.getElementById(_this.name).remove();
        });
        this.skills.push(this.name);
    };
    Skill.prototype.createHTML = function () {
        return "\n<div class=\"skill\" id=\"".concat(this.name, "\">\n\t<div class=\"skill__stats\">\n\t\t<p class=\"skill__name\">").concat(this.name, "</p>\n\t\t<progress class=\"skill__bar\" max=\"100\" value=\"").concat(this.ratio, "\"></progress>\n\t</div>\n\t<div class=\"skill__button-delete\"></div>\n</div>");
    };
    return Skill;
}());

function resolve(str) {
    return str.replace(new RegExp('<', 'g'), '&lt').replace(new RegExp('>', 'g'), '&gt');
}
var addForm = document.querySelector('.skills-adder__form');
var skillsList = document.querySelector('.skills-list');
var addedSkillsNames = [];
var errorBlock = addForm.querySelector('.error-block');
function addSkill(Event) {
    event.preventDefault();
    if (errorBlock.textContent) {
        errorBlock.textContent = "";
    }
    var name = resolve(document.querySelector('.skills-adder__input-name').value);
    var ratio = parseInt(document.querySelector('.skills-adder__input-ratio').value);
    if (ratio < 0) {
        ratio = 0;
    }
    if (ratio > 100) {
        ratio = 100;
    }
    if (!name || !ratio) {
        errorBlock.textContent = "Вы ввели пустое значение!";
        return;
    }
    if (addedSkillsNames.indexOf(name) != -1) {
        errorBlock.textContent = "Такой уже есть!";
        return;
    }
    var skill = new Skill(name, ratio, skillsList, addedSkillsNames);
    skill.addToPage();
}
document.querySelector('.skills-adder__button').addEventListener("click", addSkill);
addForm.addEventListener("submit", addSkill);
