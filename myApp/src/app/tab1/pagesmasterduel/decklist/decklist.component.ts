import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decklist',
  templateUrl: './decklist.component.html',
  styleUrls: ['./decklist.component.scss'],
})
export class DecklistComponent implements OnInit {

  showMonsterFilterBlock = false;
  public buttonName = 'Show';

  constructor() { }

  ngOnInit() {}

  addNewDeck() {
    this.showMonsterFilterBlock = !this.showMonsterFilterBlock;
    if (this.showMonsterFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

}
