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
  // var famousDino = this.dinosaurs.reduce(function (prev, current) {
  //    return (prev.guestsAttractedPerDay > current.guestsAttractedPerDay) ? prev : current
  // });


module.exports = Park;
