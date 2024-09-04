import { Component, OnInit } from '@angular/core';
import { ApiservService } from '../apiserv.service';
import { CommonModule } from '@angular/common';
import { ApisdemoComponent } from '../apisdemo/apisdemo.component';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,ApisdemoComponent,FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit{
  books= new Book();
  constructor(private _service:ApiservService ){ }

  ngOnInit() :void{}
  deleteuser(uid:any){
    this._service.deleteuserserv(uid).subscribe(
      uid=>{
        console.log("user deleted  ",uid);
    },
      error=>console.log("error")
    )
  }
}
