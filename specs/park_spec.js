const assert = require('assert');
const Dinosaur = require('../models/dinosaur.js');
const Park = require('../models/park.js');

describe('Park', function() {
  let tRex;
  let triceratops;
  let stegosaurus;
  let oviraptor;
  let coelophysis;
  let jurassicPark;
  let dinoland;

  beforeEach(function () {

    tRex        = new Dinosaur('t-rex',       'carnivore', 50);
    triceratops = new Dinosaur('triceratops', 'herbivore', 50);
    stegosaurus = new Dinosaur('stegosaurus', 'herbivore', 50);
    oviraptor   = new Dinosaur('oviraptor',    'omnivore', 50);
    coelophysis = new Dinosaur('coelophysis', 'carnivore', 50);
    jurassicPark = new Park("Jurassic Park", 5, [tRex, triceratops, oviraptor, stegosaurus,coelophysis])
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
    dinoland.addDino(tRex)
    const actual = dinoland.dinosaurs;
    assert.strictEqual(actual.length ,4)
    assert.deepStrictEqual(actual,[triceratops, oviraptor, stegosaurus, tRex])
    ;
  })


  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
