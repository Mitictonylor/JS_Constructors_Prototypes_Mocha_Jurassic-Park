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

module.exports = Park;
