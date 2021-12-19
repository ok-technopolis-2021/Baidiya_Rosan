export class Skill {
    private name: string;
    private ratio: number;
    private list: Element;
    private skills: Array<string>;

    constructor(name: string, ratio: number, list: Element, skills: Array<string>) {
        this.name = name
        this.ratio = ratio;
        this.list = list;
        this.skills = skills;
    }

    public addToPage() {
        this.list.insertAdjacentHTML('beforeend', this.createHTML());
        this.list.lastElementChild!.querySelector('.skill__button-delete')!.addEventListener("click", () => {
                    this.skills.splice(this.skills.indexOf(this.name), 1);
                    document.getElementById(this.name).remove();
                }
            );
        this.skills.push(this.name);
    }

    private createHTML() {
        return `
<div class="skill" id="${this.name}">
	<div class="skill__stats">
		<p class="skill__name">${this.name}</p>
		<progress class="skill__bar" max="100" value="${this.ratio}"></progress>
	</div>
	<div class="skill__button-delete"></div>
</div>`;
    }
}