import { Component, OnInit,Input ,Attribute} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-stars',
  templateUrl: 'stars.component.html',
  styleUrls: ['stars.component.css']
})
export class StarsComponent implements OnInit {

@Input() rating:number;
// @Attribute("checked") checked;
  constructor() {}

  ngOnInit() {
  }

}
