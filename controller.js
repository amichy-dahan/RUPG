
import { Person } from './model.js';
import { Renderer } from './render.js';




addEventListener("DOMContentLoaded", async () => {

    const person = new Person();
    const renderer = new Renderer();

    const peopleArray = await person.data();
    console.log(peopleArray);

   const btn = document.getElementById("btn");
    btn.addEventListener("click", (e) => {
        
    })


    
  
})


