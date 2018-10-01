import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  constructor() { }

  @Input() selectedText: String;
  @Output() searchText = new EventEmitter();
  @ViewChild('search') search: ElementRef;

  ngOnInit() {
    Observable.fromEvent(this.search.nativeElement, 'keyup')
      // get value
      .map((evt: any) => evt.target.value)
      .debounceTime(500)        
      // emit only if data changes since the last emit       
      .distinctUntilChanged()
      // subscription
      .subscribe((text: string) => {
        console.log('inside ', text);
        this.searchText.emit(text);
      });
  }

}
