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










  module.exports = Park;
