import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username: string;
  visible:boolean = false;

  constructor() {}

  ngOnInit() {}

  submitForm() {
    const message = `Username is ${this.username}`;
    alert(message);
  }

  onClick() {
   this.visible = !this.visible
  }
}
