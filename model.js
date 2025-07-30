export class Person {

    constructor() {
        this.person = []
    }

    async data() {
        this.person = [];
        try {
            for (let index = 0; index < 7; index++) {
                const newPreson = await axios.get(`https://randomuser.me/api/`)
                const csvData = newPreson.data.results[0]
                this.person.push(csvData)
            }
            return this.person
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }
    }

    async kenya() {

        try {
            const text = await axios.get(`https://api.kanye.rest`)
            return text.data.quote;
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }
    }


    async getRandomPokemon() {

        try {
            const randomId = Math.floor(Math.random() * 1025) + 1;
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            const name = res.data.name;
            const image = res.data.sprites.front_default;
            return { name, image };
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }

    }



    async getAboutMe() {
        try {

            const res = await axios.get(`https://baconipsum.com/api/?type=meat-and-filler`);
            return res.data[0]
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }

    }


}

