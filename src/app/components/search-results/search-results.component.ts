import { Component } from '@angular/core';

// Services
import { SearchService } from "../../shared/services/search/search.service";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {

  constructor(public searchService: SearchService) { }

}
