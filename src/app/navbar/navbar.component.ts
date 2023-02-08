import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() themeChanged = new EventEmitter<boolean>();
  isDayTheme: boolean = true;

  changeTheme(){
    this.isDayTheme = !this.isDayTheme;
    this.themeChanged.emit(this.isDayTheme);
  }

}
