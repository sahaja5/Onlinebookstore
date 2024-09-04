import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  standalone: true,
  imports: [],
  templateUrl: './databind.component.html',
  styleUrl: './databind.component.css'
})
export class DatabindComponent {
  name="sahaja";
  abc(){
    console.log("hello");
  }
  username(myuser:string){
    console.log("my name is:"+myuser);
  }
  total=0;
  emi=0;
  cal(p:any,t:any,r:any){
    this.total=(p*t*r)/100;
    this.emi=this.total/t;

  }
  roi=0;
  myloan(value:any){
    console.log(value.target.value);
    if(value.target.value=="car"){
      this.roi=10;

    }
    if(value.target.value=="home"){
      this.roi=102;
      
    }
  }

}
