import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';


import { Router } from '@angular/router';
import { ApisdemoComponent } from './apisdemo/apisdemo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ApisdemoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Facebook';
  
  }
