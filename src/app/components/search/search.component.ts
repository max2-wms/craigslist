import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

declare var jQuery: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  searchPath = '/search/sss?query=cars&sort=rel';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitSearch() {
    const searchTerm = encodeURI(this.searchForm.controls['searchTerm'].value);

    jQuery.get(`/search/sss?query=${searchTerm}&sort=rel`, ( data ) => {
      console.log( data );
    });
  }

}
