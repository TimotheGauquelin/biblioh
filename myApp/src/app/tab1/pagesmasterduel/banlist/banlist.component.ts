import { Component, OnInit } from '@angular/core';
import { CardDescription } from '../../models/cardDescription';

@Component({
  selector: 'app-banlist',
  templateUrl: './banlist.component.html',
  styleUrls: ['./banlist.component.scss'],
})
export class BanlistComponent implements OnInit {

  public carddesc: CardDescription = undefined;
  public cardDescriptions: CardDescription[] = [];

  constructor() { }

  ngOnInit() {}

}
