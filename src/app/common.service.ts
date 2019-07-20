import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  adduser(obj){
    return this._http.post('http://localhost:3000/accountuser',obj)
  }
  getuser(){
    return this._http.get('http://localhost:3000/accountuser')
  }
  update(obj){
    return this._http.put('http://localhost:3000/accountuser/'+obj.id,obj)
  }
  deleteuser(obj2){
    let headers={
      "Content-Type":"application/json"
    }
    return this._http.delete('http://localhost:3000/accountuser/'+obj2.id,{headers:headers})
  }
}
