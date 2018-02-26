import { Component, OnInit, Input } from '@angular/core';
import { Type } from '../../models/type';

@Component({
  selector: 'app-type-details',
  templateUrl: './type-details.component.html',
  styleUrls: ['./type-details.component.css']
})
export class TypeDetailsComponent implements OnInit {
  @Input() type: Type;

  constructor() { }

  ngOnInit() {
  }

}
