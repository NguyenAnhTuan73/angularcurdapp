import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
// get Data form database
  getData(){
    return this.http.get<Data[]>('http://localhost:3000/Datahub');
  }
  // Create Data
  createData(data:Data){
    return this.http.post<Data>('http://localhost:3000/Datahub', data)
  }
  getDataById( id:number){
    return this.http.get<Data>(`http://localhost:3000/Datahub/${id}`)
  }

  updateDataById( data:Data){
    return this.http.put<Data>(`http://localhost:3000/Datahub/${data.id}`,data)
  }
}
