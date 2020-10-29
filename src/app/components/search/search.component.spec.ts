import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";

// Components
import { SearchComponent } from './search.component';

// Services
import { SearchService } from "../../shared/services/search/search.service";

class stub {
  group: () => {}
}

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
        { provide: FormBuilder, useClass: stub },
        { provide: SearchService, useClass: stub },
        { provide: Router, useClass: stub }
      ]
    });

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
