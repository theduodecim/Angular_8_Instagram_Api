import { Injectable } from '@angular/core';
import { CONFIG } from './instaConfigExample';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstaApiService {
  private userId: string = CONFIG.USER_ID;
  private accessToken: string = CONFIG.ACCESS_TOKEN;
  // tslint:disable-next-line:max-line-length
  private instaURL: string = 'https://www.instagram.com/graphql/query/?query_hash=472f257a40c653c64c666ce877d59d2b&variables={"id":"25514834504","first":12,"after":""}';

  constructor(private http: HttpClient) { }


  // For now i will get from the api, the post with no type
  public getPosts(): Observable<any> {
    return this.http.get<any>(`${this.instaURL}`);
  }
}
