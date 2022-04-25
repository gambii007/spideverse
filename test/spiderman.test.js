const Spiderman = require("./../app/spiderman")

describe("Unit Test for Spiderman class", () => {
    test('1) Create an spiderman object', () => {
      //Codigo que necesitemos
      //Instanciar un objeto Spiderman con esta informacion
      const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")

      //Validadores para que corra segun lo que queremos
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.edad).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.peliculas).toBe(2)
      expect(andrewGarfield.cine).toBe("Sony")
    });
    test('2) Use the method getInfo', () =>{
        const tomholland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel Studio")
        expect(tomholland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studio")
    });
  })