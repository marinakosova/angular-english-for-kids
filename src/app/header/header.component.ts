import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() displayWidth: string = '';
  @Input() categoryId: number = 0;

  openNav() {
    this.displayWidth = this.displayWidth = '250px';
  }

  closeNav() {
    this.displayWidth = this.displayWidth = '0';
  }

  constructor() { }

  ngOnInit(): void {

  }

}

