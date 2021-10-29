import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/Person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  displaySpinner: boolean = false;
  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  findAllPerson() {
    this.persons = [];
    this.displaySpinner = true;
    this.personService.findAll().subscribe(
      (persons) => {
        this.displaySpinner = false;
        this.persons = persons;
      },
      (error) => {
        this.displaySpinner = false;
        console.log(error);
      },
      () => console.log("I am complete !")
    );
    
  }

}
