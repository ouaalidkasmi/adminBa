import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { tables } from './table-product/tab';

@Injectable({
  providedIn: 'root'
})
export class DialogProductService {

  constructor(private http :HttpClient) { }

  postProduct(data : any){
    return this.http.post("https://andaluzia-3db0f-default-rtdb.firebaseio.com/products.json", data);
  }

  getProduct() : Observable<tables[]>  {
    return this.http.get<tables[]>("https://andaluzia-3db0f-default-rtdb.firebaseio.com/products.json") ;
  }
  putProduct(data:any, ik: string){
    return this.http.put<any>('https://andaluzia-3db0f-default-rtdb.firebaseio.com/products/products'+ik+ '.json',data);
  }
  deleteProduct(ik : any){
    return this.http.delete('https://andaluzia-3db0f-default-rtdb.firebaseio.com/products/'+ik+ '.json');
  }
}
