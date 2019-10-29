import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydecklist',
  templateUrl: './mydecklist.component.html',
  styleUrls: ['./mydecklist.component.scss'],
})
export class MydecklistComponent implements OnInit {


  showMonsterFilterBlock = false;
  public buttonName = 'Show';

  constructor() { }

  ngOnInit() {}

}
