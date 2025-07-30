
import { Person } from './model.js';
import { Renderer } from './render.js';


addEventListener("DOMContentLoaded", () => {
    const person = new Person();
    const renderer = new Renderer();
    const btn = document.getElementById("btn");
    btn.addEventListener("click", async (e) => {
        const peopleArray = await person.data();
        renderer.renderPerson(peopleArray);
    })
})


