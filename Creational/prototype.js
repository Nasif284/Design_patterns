class User{
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getInfo() {
        console.log(this)
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)),this)
    }
}

let u1 = new User("nasif",12)
u1.getInfo()
let u2 = u1.clone()
u2.name = "jhlk"
u2.getInfo()