
export class Renderer {
    renderPerson(persons) {
    
        console.log(persons)
        const postHtml = document.getElementById("containerB");
        postHtml.innerHTML = "";
        let per1 = persons[0];
        console.log(per1)
        let newPreson = persons.filter(per => per != per1)
        newPreson.forEach(element => {
              console.log(element['name.first'])
        });
}

}



