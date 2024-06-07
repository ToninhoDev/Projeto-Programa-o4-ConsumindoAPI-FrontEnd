import { Posts } from './../model/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly URL = 'http://localhost:8080/api/nasa';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Posts[]>(this.URL).pipe(
      first(),
      tap(posts => console.log(posts))
    );
  }
}
