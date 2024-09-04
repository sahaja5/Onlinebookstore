import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templedrivenform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './templedrivenform.component.html',
  styleUrl: './templedrivenform.component.css'
})
export class TempledrivenformComponent {
  userdeatils(userform:any){
    console.log(userform)
  }
}
