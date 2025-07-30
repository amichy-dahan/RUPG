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
                return text;
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }
    }




}

