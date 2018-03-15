import { Injectable } from '@angular/core';
import { Quote } from '../../models/quote.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuotesService {

  constructor(private http: HttpClient) { }
  
  getQuote(id: number): Observable<Quote> {
    return this.http.get<Quote>(`http://localhost:3001/api/quotes/${id}`);
  }

  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('http://localhost:3001/api/quotes');
  }

  getWeeklyQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('http://localhost:3001/api/quotes/weekly');
  }

  getTrendingQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>('http://localhost:3001/api/quotes/trending');
  }

  addQuote(quote: Quote): void {
    this.http.post<Quote>(`http://localhost:3001/api/quotes`, quote).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured');
      }
    );
  }

  upvote(id: number) {
    this.http.get<Quote>(`http://localhost:3001/api/quotes/${id}/upvote`);
  }

  downvote(id: number) {
    this.http.get<Quote>(`http://localhost:3001/api/quotes/${id}/downvote`);
  }
}
