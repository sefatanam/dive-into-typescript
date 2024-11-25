/**
 * Advance polymorphism and prototype
 */

function Event(name, location, date) {
  this.name = name;
  this.location = location;
  this.date = date;

  //this.getDetails = function(){
  //  return `Event ${this.name} is happening at ${this.location} on ${this.date}`;
  //}
}

Event.prototype.getDetails = function() {
  return `Event ${this.name} is happening at ${this.location} on ${this.date}`;
}

Event.prototype.cancelEvent = function() {
  return `Event ${this.name} is cancelled`;
}

const env = new Event('React Conference', 'Bangalore', '2021-12-12');
console.log(env.getDetails());

function Concert(name, location, date, artist) {
  Event.call(this, name, location, date);
  this.artist = artist;
}

Concert.prototype = Object.create(Event.prototype);
Concert.prototype.constructor = Concert;

// Here we are calling the event prototype method and then adding the artist details to it.
// This is called as polymorphism.
Concert.prototype.getDetails = function() {
  const basicReturns = Event.prototype.getDetails.call(this);
  return `${basicReturns} and artist is ${this.artist}`;
}

const concert = new Concert('Sunburn', 'Goa', '2021-12-12', 'DJ Snake');
console.info(concert.getDetails());


