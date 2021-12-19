import {Skill} from "./skill";

function resolve(str: string) {
    return /[\<\>\&\"\|]/.test(str);
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

    const name = (document.querySelector('.skills-adder__input-name') as HTMLInputElement).value;
    let ratio = parseInt((document.querySelector('.skills-adder__input-ratio') as HTMLInputElement).value);

    if (ratio > 100) {
        ratio = 100;
    }

    if (ratio < 0 || !ratio) {
        ratio = 0;
    }

    if (resolve(name)) {
        errorBlock!.textContent = "Недопустимые символы";
        return;
    }

    if (!name) {
        errorBlock!.textContent = "Пустое название навыка";
        return;
    }

    if (addedSkillsNames.indexOf(name) != -1) {
        errorBlock!.textContent = "Уже существующий навык";
        return;
    }

    const skill = new Skill(name, ratio, skillsList, addedSkillsNames);
    skill.addToPage();
}

document.querySelector('.skills-adder__button')!.addEventListener("click", addSkill);
addForm!.addEventListener("submit", addSkill);