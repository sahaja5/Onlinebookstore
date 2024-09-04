import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apisdemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apisdemo.component.html',
  styleUrl: './apisdemo.component.css'
})
export class ApisdemoComponent implements OnInit{
  constructor(private myserv:ApiservService){}
  books:any=[]
  ngOnInit() {
    return  this.myserv.getAllBooks().subscribe(res=>{
      console.log(res)
        this.books=res;
    },err=>{})
  }

}
