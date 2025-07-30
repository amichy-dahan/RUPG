
export class Renderer {


    renderPerson(persons , text) {
        console.log(persons)
        const postHtml = document.getElementById("dadContainer");
        const childeContainerA = document.createElement("div");
        const childeContainerB = document.createElement("div");
        postHtml.innerHTML = "";

        const per1 = persons[0];
        let newPresons = persons.filter(per => per != per1)

        this.firstPersonRandom(per1, postHtml, childeContainerA);
        this.otherPresonFriends(newPresons, postHtml, childeContainerB)
    }

    firstPersonRandom(per1, postHtml, childeContainerA) {
        childeContainerA.id = "childeContainerA"
        childeContainerA.innerHTML = ""

        const texts = document.createElement("div")
        const text1 = document.createElement("p")
        const text2 = document.createElement("p")
        const picFirstPerson = document.createElement("img")

        text1.innerHTML = per1.name.first + " " + per1.name.last
        text2.innerHTML = per1.location.city + " , " + per1.location.state

        picFirstPerson.setAttribute("src", per1.picture.large)

        postHtml.appendChild(childeContainerA)
        childeContainerA.appendChild(picFirstPerson)
        childeContainerA.appendChild(texts)
        texts.appendChild(text1)
        texts.appendChild(text2)

        texts.id = "texts"
        text1.id = "text1"
        text2.id = "text2"
        picFirstPerson.id = "pic"
    }
    otherPresonFriends(newPresons, postHtml, childeContainerB) {
        
        const title = document.createElement("div");
        const friends = document.createElement("div");

        title.innerHTML = "friends"

        childeContainerB.id = "childeContainerB"
        title.id = "friendsTitle"
        friends.id ="friends"


        postHtml.appendChild(childeContainerB)
        childeContainerB.appendChild(title)
        childeContainerB.appendChild(friends)


        newPresons.forEach(per=> {
            const newFriend = document.createElement("p");
            newFriend.id ="textFriend";
            newFriend.innerHTML = per.name.first + " " + per.name.last
            friends.appendChild(newFriend);
        });

    }

}



