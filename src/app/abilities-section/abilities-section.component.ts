import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities-section',
  templateUrl: './abilities-section.component.html',
  styleUrls: ['./abilities-section.component.sass']
})
export class AbilitiesSectionComponent implements OnInit {
  abilitiesOne: String[] = ["Java", "JavaScript", "Spring Boot", "Angular", "MySQL", "HTML/CSS"];
  abilitiesTwo: String[] = ["BootStrap", "Hibernate", "Git", "AWS EBS", "AWS RDS", "360 Hook Kick"];
  constructor() { }

  ngOnInit() {
  }

  
}


