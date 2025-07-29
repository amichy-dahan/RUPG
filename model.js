export class Person {

    constructor() {
        this.person = []
    }



    async data() {
        try {
            for (let index = 0; index < 7; index++) {
                const newPreson = await axios.get(`https://randomuser.me/api/?format=csv`)
                const csvData = newPreson.data;
                const results = Papa.parse(csvData, { header: true, });
                this.person.push(results.data[0])
            }
            return this.person
        } catch (err) {
            console.error("Error fetching data:", err);
            throw err;
        }
    }
}

