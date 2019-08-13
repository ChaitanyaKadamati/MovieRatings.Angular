import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class RatingProviderService {
  apiKey: string = 'a4bb0b03';
  movieDBUrl: string = 'http://www.omdbapi.com/?t=';
  apiKeyString: string = '&apikey=';
  constructor(private httpHandle: HttpClient) { }
  getMovieInfo(movieTitle: string) {
    const url = this.movieDBUrl + movieTitle + this.apiKeyString + this.apiKey;
    return this.httpHandle.get<MovieInfo>(url);
  }
}
export class MovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Response: string;
}