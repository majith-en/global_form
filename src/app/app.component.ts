import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms';

  public employeeData: any

  constructor() {}

  ngOnInit() {
      this.employeeData = {
        "employees": {
          "employee": [
            {
              "id": "1",
              "firstName": "Tom",
              "lastName": "Cruise",
          "role" : "Manager"
            },
            {
              "id": "2",
              "firstName": "Maria",
              "lastName": "Sharapova",
          "role" : "TeamLead"
            },
            {
              "id": "3",
              "firstName": "James",
              "lastName": "Bond",
          "role" : "Member"
            }
          ]
        }
      }

      console.log()
  }

}
