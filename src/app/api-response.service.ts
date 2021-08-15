import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ApiResponseService {

  constructor(private _http: HttpClient) { }


  public fakeApiResponse(){
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
