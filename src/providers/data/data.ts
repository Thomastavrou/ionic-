import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  url = 'http://com2go.co/moec_api/api/post/read.php';
  constructor(public http: HttpClient) {
      // this.url;
  }


getData(){
  return this.http.get(this.url);
}


}
