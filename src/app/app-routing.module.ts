import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from '../app/movies/movies.component'
import { MovieComponent} from '../app/movie/movie.component';
import { from } from 'rxjs';
import {HomeComponent} from '../app/home/home.component';

const routes: Routes = [

  {path: 'movies/:name', component: MoviesComponent},
  {path: 'Movie/:id', component: MovieComponent},
  {path: '', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
