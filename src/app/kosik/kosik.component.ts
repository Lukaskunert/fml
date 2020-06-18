import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kosik',
  templateUrl: './kosik.component.html',
  styleUrls: ['./kosik.component.scss']
})
export class KosikComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem("kosik"))
  }

}
