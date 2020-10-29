import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

// App Config
import { appConfig } from "../../../app.config";

// Models
import { searchResult } from "../../custom-types/search-result";

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  mainSelector = '.result-row';

  searchResults: searchResult[] = [];

  constructor() { }

  performForm(searchTerm: string): Observable<searchResult> {
    return new Observable(observer => {
      $.get(`${appConfig.searchPrefix}${searchTerm}${appConfig.searchSufix}`)
        .done((data) => {
          $(data).find(this.mainSelector).each(function() {
            observer.next({
              name: $(this).find('.result-heading a').text(),
              price: $(this).find('a .result-price').text()
            });
          });

          observer.complete();
        });
    })
    .pipe(
      tap((result: searchResult) => this.searchResults.push(result))
    );
  }
}
