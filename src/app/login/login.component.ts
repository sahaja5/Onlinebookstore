import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string='';
  password:string='';
  errorMessage:string='';
  private validUsername:string="admin";
  private validPassword:string="pass@123";
  constructor(private router:Router){}


  onLogin():void
{
  if(this.username===this.validUsername && this.password===this.validPassword){
      console.log('login succesful');
      this.router.navigate(['apisdemo','books']);
    }else{
      this.errorMessage="invalid"
    }
  }
}
