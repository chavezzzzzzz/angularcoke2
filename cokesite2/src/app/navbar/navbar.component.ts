import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  isListVisible: boolean = false;

  toggleListDisplay() {
    this.isListVisible = !this.isListVisible;
  }
  
  isRed: boolean = false;

  toggleColor() {
    this.isRed = !this.isRed;
  }
}

