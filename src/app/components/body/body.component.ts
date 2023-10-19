import { Component } from '@angular/core';
import { detail } from 'src/app/model/interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  details:detail[]=[
    {id:1,name:"Barath",phone:"8925195582",email:"barath@gmail.com"},
    {id:2,name:"Dharun",phone:"9012345678",email:"dharun@gmail.com"}
  ];
  name:string="";
  phone:string="";
  email:string="";
  ref:number=0;

  // random number
getRandomNumber(max = 1000):number{
  return Math.floor(Math.random() * max);
};

// creating user id
getRandomId():string {
  for (let i = 0; i < 10000; i++) {
    const randomId = this.getRandomNumber();

    const checkingId = this.details.find((obj) => obj.id === randomId);
    if (!checkingId) {
      let id:string=randomId.toString();
      return id;
    }
  }
  return "";
};

  add(){
    if(this.ref===0){
      this.details.push({
        id:parseInt(this.getRandomId()),
        name:this.name,
        phone:this.phone,
        email:this.email
      })
    }
    else{
      let detail=this.details.find((obj:detail)=>obj.id===this.ref);
      detail!.name=this.name,
      detail!.email=this.email,
      detail!.phone=this.phone
      this.ref=0;
    }
    this.name="",
    this.phone="",
    this.email=""
  }

  edit(id:number){
    let detail=this.details.find((obj:detail)=>obj.id===id)
    this.name=detail!.name,
    this.email=detail!.email,
    this.phone=detail!.phone

    this.ref=id;
  }

  delete(id:number){
    let detail:detail[]=[];
    detail=this.details.filter((obj)=>obj.id!==id);
    this.details=detail;
  }
}
