import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { SuggestionsService } from "./suggestions.service";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subject } from 'rxjs/Subject';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { ObserveOnOperator } from 'rxjs/operators/observeOn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }


  ngOnInit() {
  
  }

}
