import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../../src/app/movies';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  //get all movies
  getMovies(movieName): Observable<Movies[]> {
    return this.http.get<Movies[]>('https://api.themoviedb.org/3/search/movie',{params:{
      api_key: '3ea150464035bc92e08e1ecfd93b9557',
      query:movieName
      
    }})
   
  }

//get one movie
  getMovie(id:number): Observable<Movies[]> {
    return this.http.get<Movies[]>('https://api.themoviedb.org/3/movie/' +id,{params:{
      api_key: '3ea150464035bc92e08e1ecfd93b9557',
      query:'fight club'
    }})
}
}
