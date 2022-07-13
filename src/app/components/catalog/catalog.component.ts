import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  val!: number;
  rangeValues: number[] = [20, 80];

  selectedAuthors: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
