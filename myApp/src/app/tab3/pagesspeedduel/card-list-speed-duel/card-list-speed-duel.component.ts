import { CardDescriptionSpeedDuel } from './../../models/cardDescriptionSpeedDuel';
import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CardDescriptionSpeedDuelService } from '../../services/card-description-speed-duel.service';

@Component({
  selector: 'app-card-list-speed-duel',
  templateUrl: './card-list-speed-duel.component.html',
  styleUrls: ['./card-list-speed-duel.component.scss'],
})
export class CardListSpeedDuelComponent {

  public carddesc: CardDescriptionSpeedDuel = undefined;
  public cardDescriptions: CardDescriptionSpeedDuel[] = [];
  public currentPage = 1;
  public showCardFilterBlock = false;
  public showMonsterFilterBlock = false;
  public showSpellFilterBlock = false;
  public showTrapFilterBlock = false;
  public buttonName = 'Show';

  constructor(
    private router: Router, route: ActivatedRoute,
    private cardService: CardDescriptionSpeedDuelService ,
   ) {
    this.loadCurrentPage();
      }

  public goToNextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.loadCurrentPage();
  }

  public goToPreviousPage(): void {
    this.currentPage = this.currentPage - 1;
    this.loadCurrentPage();
  }

  private loadCurrentPage(): void {
    this.cardService.getAllCardsSpeedDuel(this.currentPage)
      .subscribe((cardInfosResponse: CardDescriptionSpeedDuel[]) => {
        this.cardDescriptions = cardInfosResponse;
      });

  }

   // AFFICHER MON FILTRE A CARTE

   displayFilterBlock() {
    this.showCardFilterBlock = !this.showCardFilterBlock;
    if (this.showCardFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
  }

  displayFilterMonster() {
    this.showMonsterFilterBlock = !this.showMonsterFilterBlock;
    if (this.showMonsterFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    if (this.displayFilterMonster.call) {this.showSpellFilterBlock = false; }
    if (this.displayFilterMonster.call) {this.showTrapFilterBlock = false; }

  }

  displayFilterSpell() {
    this.showSpellFilterBlock = !this.showSpellFilterBlock;
    if (this.showSpellFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    if (this.displayFilterSpell.call) {this.showMonsterFilterBlock = false; }
    if (this.displayFilterSpell.call) {this.showTrapFilterBlock = false; }
  }

  displayFilterTrap() {
    this.showTrapFilterBlock = !this.showTrapFilterBlock;
    if (this.showTrapFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    if (this.displayFilterTrap.call) {this.showMonsterFilterBlock = false; }
    if (this.displayFilterTrap.call) {this.showSpellFilterBlock = false; }
  }
}
