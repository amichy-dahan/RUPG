export class Person {

    constructor() {
        this.person = []
    }

    async data() {
        this.person = [];
            for (let index = 0; index < 7; index++) {
                const res =await this.axiosCall(`https://randomuser.me/api/`)
                const Data = res.data.results[0]
                this.person.push(Data)
            }
            return this.person
    }

    async kenya() {
            const res =await this.axiosCall(`https://api.kanye.rest`)
            return res.data.quote;
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
            const res =await this.axiosCall(`https://baconipsum.com/api/?type=meat-and-filler`)
            return res.data[0]
    }


    async axiosCall(url){
      
       try {
            const res = await axios.get(url);
            return res
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }
    }


}

