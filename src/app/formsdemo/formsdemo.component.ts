import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TempledrivenformComponent } from '../templedrivenform/templedrivenform.component';
import { ReactivedrivenformComponent } from '../reactivedrivenform/reactivedrivenform.component';

@Component({
  selector: 'app-formsdemo',
  standalone: true,
  imports: [TempledrivenformComponent,ReactivedrivenformComponent],
  templateUrl: './formsdemo.component.html',
  styleUrl: './formsdemo.component.css'
})
export class FormsdemoComponent {

}
