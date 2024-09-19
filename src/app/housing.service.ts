import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  // root means it can be used thought out the application
  providedIn: 'root'
})
export class HousingService {
  // removing this since using the db.json
  // protected housingLocationList: HousingLocation[] = [];
  url = 'http://localhost:3000/locations';

  constructor() { }

  async getAllHousingLocations() : Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  //  ": HousingLocation | undefined"  -and it return a union type of a HousingLocation or undefined 
  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
    // the find function will return the first matched in the array
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id); 
    const data = await fetch(`${this.url}/${id}`)
    return await data.json() ?? {};

  }
 
submitApp(firstName: string, lastName: string, email: string) {
  console.log(firstName, lastName, email);
  
}

}


