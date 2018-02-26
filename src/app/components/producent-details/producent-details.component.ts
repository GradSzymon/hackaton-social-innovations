import { Component, OnInit, Input } from '@angular/core';
import { Producent } from '../../models/producent';

@Component({
  selector: 'app-producent-details',
  templateUrl: './producent-details.component.html',
  styleUrls: ['./producent-details.component.css']
})
export class ProducentDetailsComponent implements OnInit {
  @Input() producent: Producent;

  constructor() { }

  ngOnInit() {
  }

}
