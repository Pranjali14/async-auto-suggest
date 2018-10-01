import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SuggestionsService {

  constructor(private http: HttpClient) {   }

  getRepos(query): Observable<any> {
    const configUrl = "https://api.github.com/search/repositories?q="+query;
    
    // return this.http.get(configUrl)
    // .map(res => {
    //   let result = res.items && res.items.map( item=> item.name);
    //   console.log(result);
    //   return result;
    // });
    return this.http.get(configUrl);
  }

}
