import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieName:string;

  constructor(private router:Router) { }

  goMovies(){
    this.router.navigate(['/movies', this.movieName]);

  }
  ngOnInit(): void {
  }

  
}
