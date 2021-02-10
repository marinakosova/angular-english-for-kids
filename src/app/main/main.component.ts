import { Component } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public _myCards: any[];

  constructor(private categoryService: CategoryService) {
    this._myCards = [];
  }

  ngOnInit() {
    this._myCards = this.categoryService.getCategories();
  }
}


