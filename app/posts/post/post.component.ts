import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Posts } from '../model/posts';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PostService } from '../serices/post.service';
import { Observable, catchError, of } from 'rxjs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatTableModule, MatProgressSpinnerModule, CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  posts$: Observable<Posts[]>;

  displayedColumns = ['date', 'title', 'url', 'media_type'];

  constructor(private postService: PostService){
    this.posts$ = this.postService.list().
    pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  ngOnInit(): void {

  }

}
