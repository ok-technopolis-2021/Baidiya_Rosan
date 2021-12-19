import {Skill} from "./skill";

function resolve(str: string) {
    return str.replace(new RegExp('<', 'g'), '&lt').replace(new RegExp('>', 'g'), '&gt');
}

const addForm = document.querySelector('.skills-adder__form') as HTMLElement;
const skillsList = document.querySelector('.skills-list');
let addedSkillsNames: Array<string> = [];
const errorBlock = addForm!.querySelector('.error-block');

function addSkill(Event: event) {
    event.preventDefault();
    if (errorBlock!.textContent) {
        errorBlock!.textContent = "";
    }

    const name = resolve((document.querySelector('.skills-adder__input-name') as HTMLInputElement).value);
    let ratio = parseInt((document.querySelector('.skills-adder__input-ratio') as HTMLInputElement).value);

    if (ratio < 0) {
        ratio = 0;
    }
    if (ratio > 100) {
        ratio = 100;
    }


    if (!name || !ratio) {
        errorBlock!.textContent = "Вы ввели пустое значение!";
        return;
    }

    if (addedSkillsNames.indexOf(name) != -1) {
        errorBlock!.textContent = "Такой уже есть!";
        return;
    }

    const skill = new Skill(name, ratio, skillsList, addedSkillsNames);
    skill.addToPage();
}

document.querySelector('.skills-adder__button')!.addEventListener("click", addSkill);
addForm!.addEventListener("submit", addSkill);