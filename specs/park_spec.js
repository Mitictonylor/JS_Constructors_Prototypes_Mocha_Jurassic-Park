const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require('../models/park.js');

describe('Park', function() {
  let tRex;
  let tRex2;
  let triceratops;
  let stegosaurus;
  let oviraptor;
  let oviraptor2;
  let coelophysis;
  let jurassicPark;
  let dinoland;

  beforeEach(function () {

    tRex        = new Dinosaur('t-rex',       'carnivore', 50);
    tRex2        = new Dinosaur('t-rex',       'carnivore', 20);
    triceratops = new Dinosaur('triceratops', 'herbivore', 40);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 30);
    oviraptor   = new Dinosaur('oviraptor',    'omnivore', 20);
    oviraptor2   = new Dinosaur('oviraptor',    'omnivore', 30);
    coelophysis = new Dinosaur('coelophysis', 'carnivore', 10);
    jurassicPark = new Park("Jurassic Park", 5, [triceratops, oviraptor, stegosaurus,coelophysis, tRex])
    dinoland     = new Park("Dinoland", 3.5, [triceratops, oviraptor, stegosaurus])
  });

  it('should have a name', function(){
    const actual = dinoland.name;
    assert.strictEqual(actual, "Dinoland");
  });

  it('should have a ticket price', function(){
    const actual = dinoland.ticket;
    assert.strictEqual(actual, 3.5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = dinoland.dinosaurs;
    assert.strictEqual(actual.length ,3)
    assert.deepStrictEqual(actual,[triceratops, oviraptor, stegosaurus])
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinoland.addDino(tRex);
    const actual = dinoland.dinosaurs;
    assert.strictEqual(actual.length ,4)
    assert.deepStrictEqual(actual,[triceratops, oviraptor, stegosaurus, tRex])
    ;
  })


  it('should be able to remove a dinosaur from its collection',function(){
    jurassicPark.removeDino();
    const actual = jurassicPark.dinosaurs;
    assert.strictEqual(actual.length, 4)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = jurassicPark.mostFamousDino();
    const actualDinoland = dinoland.mostFamousDino();
    assert.strictEqual(actual, tRex)
    assert.strictEqual(actualDinoland, triceratops)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    jurassicPark.addDino(tRex2);
    dinoland.addDino(oviraptor2)
    const actual = jurassicPark.findBySpecies('t-rex');
    const actualDinoland = dinoland.findBySpecies("oviraptor");
    assert.strictEqual(actual.length, 2)
    assert.strictEqual(actualDinoland.length, 2)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
