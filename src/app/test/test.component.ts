import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  orgData =
  {
    name: 'Alam',
    company: 'StackAvenue',
    reportees: [
      {
        name: 'Akshay',
        company: 'StackAvenue',
        reportees: [
          {
            name: 'Amol',
            company: 'StackAvenue',
          },
          {
            name: 'Rohit',
            company: 'StackAvenue',
          }
        ]
      },
      {
        name: 'Arpit',
        company: 'StackAvenue',
      }
    ]
  }


  ngOnInit(): void {
  }

}
