import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }
  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }
}
