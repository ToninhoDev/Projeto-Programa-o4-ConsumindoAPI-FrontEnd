import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-history',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-history.component.html',
  styleUrl: './search-history.component.css'
})
export class SearchHistoryComponent {

  searchTerm: string = '';

  constructor(private search: SearchService) { }

  saveSearchHistory() {
    if (this.searchTerm.trim()) {
      this.search.saveSearchHistory(this.searchTerm).subscribe(
        response => {
          console.log('Search term saved successfully:', response);
          this.searchTerm = ''; // Clear the input field after saving
        },
        error => {
          console.error('Error saving search term:', error);
        }
      );
    } else {
      console.warn('Search term cannot be empty');
    }
  }

}
