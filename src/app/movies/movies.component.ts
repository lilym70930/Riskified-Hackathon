import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../http.service';
import { Movies } from '../../app/movies'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy  {
  private sub: any;
  movies: any;
  title: any;
  overview:any;
  release_date:any;
  id:number;

  constructor(private http: HttpService, private route:ActivatedRoute) { }

  ngOnInit(){
    this.sub =  this.route.params.subscribe(params => {
      const name = params['name'];
      this.http.getMovies(name).subscribe((data: Movies[]) => {
        this.movies = data;
        console.log(name);
        console.log(data);
        
      });
      });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  }


