import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = 'http://localhost:8080/search-history'

  constructor(private http: HttpClient) { }

  saveSearchHistory(term: string): Observable<any> {
    return this.http.post(this.url, term, { responseType: 'text' });
  }
}
