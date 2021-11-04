import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsphService {

  constructor(private http:HttpClient) { }
  getalbum(){
return this.http.get<any>('https://jsonplaceholder.typicode.com/albums');

  }
}
