import { Injectable } from '@angular/core';
import { Title } from './models/title';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TitleService {

  readonly titleAPIUrl = "https://localhost:44395/api";

  constructor(private http:HttpClient) { }

  getAllTitles():Observable<Title[]> {
    return this.http.get<any>(this.titleAPIUrl + '/titles');
  }

  getTitleById(id: number):Observable<Title> {
    return this.http.get<any>(this.titleAPIUrl + `/Titles/${id}`);
  }

  addTitle(data:any) {
    return this.http.post(this.titleAPIUrl + '/titles', data);
  }

  updateTitle(id:number|string, data:any) {
    return this.http.put(this.titleAPIUrl + `/titles/${id}`, data);
  }

  deleteTitle(id:number|string) {
    return this.http.delete(this.titleAPIUrl + `/titles/${id}`);
  }
}
