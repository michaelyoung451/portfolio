import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Michael\'s Portfolio';
  name: string = 'Michael Young'
  public slides = [
    {src: "..\\assets\\images\\fight-profile.png"},
    {src: "..\\assets\\images\\Clinic-Logo.png"},
    {src: "..\\assets\\images\\fight-profile.png"},
    {src: "..\\assets\\images\\Clinic-Logo.png"}
  ];
  
}