import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { SuggestionsService } from '../suggestions.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  selectedText = "";
  items =[];
  showLoader = false;
 
  @ViewChild('search') search: ElementRef;
  @HostListener('document:click', ['$event'])
  
  onDocumentClick(event) {
    if((this.search.nativeElement as HTMLElement).contains(event.target)) {

    }else {
      this.items = [];
    }
  }

  constructor(private suggestionsService : SuggestionsService) {
  }

  getRepos(query) {
    if(query) {
      console.log('inside query');
      this.showLoader = this.items.length ? false : true;
      this.suggestionsService.getRepos(query).subscribe((data)=> {
        this.items = query !== '' ? data.items : [];
        this.showLoader = false;
      });
    }else if(query == '') {
      console.log('inside emplty paaret');
      this.items = [];
    }
  }

  ngOnInit() {    
  }

  setValue(item) {
    this.showLoader = false;
    this.items = [];
    this.selectedText = item.name;
  }

}
