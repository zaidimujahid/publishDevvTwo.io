import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myimage:string = "/src/image/Final logo.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
