export class Participation {
  id: number;
  year: number;
  city: string;
  medalsCount: number;
  athleteCount: number;

  constructor(
    id: number,
    year: number,
    city: string,
    medalsCount: number,
    athleteCount: number
  ) {
    this.id = id;
    this.year = year;
    this.city = city;
    this.medalsCount = medalsCount;
    this.athleteCount = athleteCount;
  }
}
