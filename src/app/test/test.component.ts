import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  test = {
    display: true,
    name: "mohamed",
    age: 12,
    image: "data:image/jpeg;base64,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"

  }

  arrays = [
    'mohamed',
    'mohamed',
    'ali'
  ];
  color = 'read'
  constructor() { }

  ngOnInit(): void {
  }

}
