import { inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profile } from '../interfaces/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

http: HttpClient = inject(HttpClient)

// https://jsonplaceholder.typicode.com/users/
baseApiUrl = 'https://icherniakov.ru/yt-course/'
  constructor() { }

  getTestAccounts () {
   return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`)
  }
}
