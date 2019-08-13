import { Component } from '@angular/core';
import { RatingProviderService, MovieInfo } from './rating-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Rating Viewer';
  movieTitle = '';
  searchHistory = null;
  movieInfo = null;

  constructor(private ratingService: RatingProviderService) { }

  search() {
    this.getMovieInfo(this.movieTitle);
  }
  getMovieInfo(movieTitle: string) {
    const formattedMovieTitle = this.titleCase(movieTitle);
    this.ratingService.getMovieInfo(formattedMovieTitle).subscribe(
      response => {
        if (response.Response === 'True') {
          this.movieInfo = response;
          if (!this.searchHistory) {
            this.searchHistory = [];
          }
          this.searchHistory = this.searchHistory.filter((x, y, z) => x !== formattedMovieTitle);
          this.searchHistory.push(formattedMovieTitle);
        } else {
          this.movieInfo = null;
          alert('Movie with title : ' + formattedMovieTitle + ' not found');
        }
      }
    );
  }

  goto(title: string) {
    this.getMovieInfo(title);
  }

  titleCase(str): string {
    str = str.toLowerCase().split(' ');
    const final = [];
    for (const word of str) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return final.join(' ');
  }
}
