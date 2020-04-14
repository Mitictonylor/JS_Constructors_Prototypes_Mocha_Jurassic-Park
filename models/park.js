const Park = function(name, ticket, dinosaurs = []){
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
}

module.exports = Park;
