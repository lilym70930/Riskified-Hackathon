import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any;
  id:number;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpService) { 
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
  });
  }

  ngOnInit(){
    console.log(this.id);
    this.http.getMovie(this.id).subscribe( data => {
      this.movie = data;
  });
  }

}
