class Spiderman{

    constructor(name, edad, actor, peliculas, cine){
        //la etiqueta que se le pone, debe ser igual al que se use en test.js
        this.name = name
        this.edad = edad
        this.actor = actor
        this.peliculas = peliculas
        this.cine = cine
    }
    getInfo(){
        return `Hey, I'm ${this.actor} from ${this.cine}` 
    }
}


module.exports = Spiderman