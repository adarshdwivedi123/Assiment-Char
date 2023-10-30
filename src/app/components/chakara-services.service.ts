import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChakaraServicesService {

  constructor(private httpClient:HttpClient) { }
  baseUrl=environment.character;

  // this method is used to get all character
  getCharacter(){
    let url=this.baseUrl+ "/people/";
    return this.httpClient.get(url);
  }

  // get character by ID

  getCharacterById(id:number){
     let url=this.baseUrl+"/people/"+id;
     return this.httpClient.get(url);
  }
  // (https://swapi.dev/api/people/:id/)

  //https://swapi.dev/api/people/?page=2
  getCharacterPagination(id:number){
    let url=this.baseUrl+"?page="+id;
    return this.httpClient.get(url);
    
  }
}
