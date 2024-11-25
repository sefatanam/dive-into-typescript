
/**
 * Advance polymorphism and prototype
 */

class Event {
  constructor(name, location, date) {
    this.name = name;
    this.location = location;
    this.date = date;
  }
  getDetails() {
    return `Event ${this.name} is happening at ${this.location} on ${this.date}`;
  }
}

//const env = new Event('React Conference', 'Bangalore', '2021-12-12');
//console.log(env.getDetails());

class Concert extends Event {
  constructor(name, location, date, artist) {
    super(name, location, date);
    this.artist = artist;
  }
  getDetails() {
    const basicReturns = super.getDetails();
    return `${basicReturns} and artist is ${this.artist}`;
  }
}

const concert = new Concert('Sunburn', 'Goa', '2021-12-12', 'DJ Snake');
console.info(concert.getDetails());
