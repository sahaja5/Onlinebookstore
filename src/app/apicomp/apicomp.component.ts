import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-apicomp',
  standalone: true,
  imports: [],
  templateUrl: './apicomp.component.html',
  styleUrl: './apicomp.component.css'
})
export class ApicompComponent implements OnInit{
  constructor(private _service:ApiservService) {}
 
    _productlist:any=[];
  ngOnInit() {
    return this._service.getAllBooks().subscribe(
      data=>{
        console.log("responce recived ",data)
        this._productlist=data;
    },
      error=>console.log("exception recoved ")
    )
  }
}

