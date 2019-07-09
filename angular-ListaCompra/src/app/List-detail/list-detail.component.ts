import { Component, OnInit, Input } from '@angular/core';
import { List } from '../list';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: List;
  
  constructor() { }

  ngOnInit() {
  }

}
