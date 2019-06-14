import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quote } from '../model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private API_PATH = "https://api.kanye.rest/"
  constructor(private http: HttpClient) { }

  getKanyeQuote(): Observable<Quote> {
    return this.http.get<Quote>(this.API_PATH);
  }
}
