import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.sass']
})
export class MainformComponent implements OnInit {
  close:any;
  editclose:any;
data;
editedobj;
  constructor(private commonService:CommonService) { }
add(){
  this.close=true;
}
close1(){
  this.close=false;
}
  ngOnInit() {
    this.getdata()
  }
  submit(myForm){
    this.commonService.adduser(myForm).subscribe((res)=>{
      console.log(res);
      this.getdata()
      this.close=false
})
  }
  getdata(){
    this.commonService.getuser().subscribe((res)=>{
      this.data=res;
    })
  }
  updateUser(edituser){
    this.editclose=false
    this.commonService.update(edituser).subscribe((res)=>{
this.getdata()
    })
    this.editclose=false;
  }
  edit(obj){
this.editedobj=obj;
console.log(this.editedobj)
this.editclose=true;
  }
  delete(obj,i){
this.commonService.deleteuser(obj).subscribe((res)=>{
  this.getdata()
})
  }
}
