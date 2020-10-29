import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// Services
import { SearchService } from "../../shared/services/search/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    })
  }

  submitSearch() {
    this.searchService.performForm(encodeURI(this.searchForm.controls['searchTerm'].value))
      .subscribe(() => this.router.navigate(['/search-results']));
  }

}
