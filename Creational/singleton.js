class Db{
    static instance;
    constructor() {
        if (Db.instance) {
            return Db.instance
        }
        Db.instance = this
    }
}

let d = new Db()
let d2 = new Db()
console.log(d == d2)