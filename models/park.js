const Park = function(name, ticket, dinosaurs = []){
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function (dinosaur_name){
  this.dinosaurs.push(dinosaur_name);
};

Park.prototype.removeDino = function(){
  this.dinosaurs.pop();
};

Park.prototype.remove = function(dino){
  const index = this.dinosaurs.indexOf(dino);
  this.dinosaurs.splice(index,1);
}

Park.prototype.mostFamousDino = function(){
  var famousDino = this.dinosaurs.reduce(function (prev, current) {
     if (prev.guestsAttractedPerDay > current.guestsAttractedPerDay){
       return prev;
     } else {
       return current
     }
  });
  return famousDino
  }

Park.prototype.findMostAttractiveDinosaurs = function () {
  //set the most attractive dino to one of the dinosaurs[0]
  let mostAttractiveDino = this.dinosaurs[0]
  // loop over all the dinos
  for (const dino of this.dinosaurs){
    //if the dino guestsAttractedPerDay > the previous dino
    if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay){
      //then set the most attractive dino to that dino
      mostAttractiveDino = dino;
    }
  }
  //return the most attractive dino
  return mostAttractiveDino
};
Park.prototype.findBySpecies = function (species) {
  let dinosaurWithCertainSpecies = []
    for (let dinosaur of this.dinosaurs){
      if (dinosaur.species === species){
        dinosaurWithCertainSpecies.push(dinosaur);
      }
    }
  return dinosaurWithCertainSpecies;
};


Park.prototype.totalVisitors = function () {
  let totalVisitor = 0
    for (let dinosaur of this.dinosaurs){
      totalVisitor += dinosaur.guestsAttractedPerDay;
    }
  return totalVisitor;
};


Park.prototype.totalVisitorsByYear = function () {
  let visitorsByDay = this.totalVisitors();
  return visitorsByDay * 365;
};


Park.prototype.revenueByYear = function () {
  let visitorsByYear = this.totalVisitorsByYear();
  return visitorsByYear * this.ticket;
};

Park.prototype.deleteBySpecies = function (species) {
    for( let i = 0; i < this.dinosaurs.length; i++){
      if ( this.dinosaurs[i].species === species) {
         this.dinosaurs.splice(i, 1)
         i--;
        }
       }
};

Park.prototype.countByDiets = function () {
  const diets = this.dinosaurs.map(dino => dino.diet)
  let counts = {};
  diets.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  return counts
};


Park.prototype.numberOfDinosaursByDiet = function() {
  const objectDinoDiet = {};
  for(const dinosaur of this.dinosaurs){
    if (objectDinoDiet[dinosaur.diet]){
      objectDinoDiet[dinosaur.diet] += 1;
    }else{
      objectDinoDiet[dinosaur.diet] = 1;
    }
  }return objectDinoDiet;
};
  module.exports = Park;
