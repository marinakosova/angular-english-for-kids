import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-main',
  templateUrl: './training-main.component.html',
  styleUrls: ['./training-main.component.scss']
})
export class TrainingMainComponent implements OnInit {
  public _myInnerCards: any[];

  constructor(private categoryService: CategoryService, private actRoute: ActivatedRoute) {
    this._myInnerCards = [];
  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(routeParams => {
      console.log(routeParams)
      //const categoryId = routeParams.paramMap.get('categoryId');
      const categoryId = routeParams.categoryId;
      console.log(categoryId);

      this._myInnerCards = (categoryId !== null && categoryId != undefined)
        ? this.categoryService.getInnerCategory(+categoryId)
        : [];
    });

  }
}

