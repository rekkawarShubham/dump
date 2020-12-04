import { Component } from '@angular/core';

@Component({
  selector: 'my-nav',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.css' ]
})
export class NavAppComponent  {
  isCollapsed = true;
}
