const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}
triceratops = new Dinosaur('triceratops', 'herbivore', 40);
console.log(triceratops)
module.exports = Dinosaur;
