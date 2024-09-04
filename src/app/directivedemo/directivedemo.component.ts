import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directivedemo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directivedemo.component.html',
  styleUrl: './directivedemo.component.css'
})
export class DirectivedemoComponent {
  xyz=true;
  emp:any=["sahaja","sanjana","tapas"];
  fruits=["apple","mango","orange"];
  addFruit(insertfruit:any){
    this.fruits.push(insertfruit);

  }
  eyemp=[
    {
      "UID":12,
      "NAME":"srujana"
    },
    {
      "UID":13,
      "NAME":"mythri"
    }
  ]

}
