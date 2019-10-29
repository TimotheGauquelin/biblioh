import { CardDescription } from 'src/app/tab1/models/cardDescription';
import { CardDescriptionService } from 'src/app/tab1/services/card-description-service.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mycardlist',
  templateUrl: './mycardlist.component.html',
  styleUrls: ['./mycardlist.component.scss']
})
export class MycardlistComponent {
  public carddesc: CardDescription = undefined;
  public cardDescriptions: CardDescription[] = [];
  public currentPage = 1;
  public showCardFilterBlock = false;
  public showMonsterFilterBlock = false;
  public showSpellFilterBlock = false;
  public showTrapFilterBlock = false;
  public buttonName = 'Show';
  public callSpellCard = false;

  // CONSTRUCTEUR

  constructor(
    private router: Router,
    route: ActivatedRoute,
    private cardService: CardDescriptionService
  ) {
    this.loadCurrentPage();
  }

  // ALLER VERS LES DIFFERENTES PAGES

  public goToNextPage(): void {
    this.currentPage = this.currentPage + 1;
    this.loadCurrentPage();
  }

  public goToPreviousPage(): void {
    this.currentPage = this.currentPage - 1;
    this.loadCurrentPage();
  }

  private loadCurrentPage(): void {
    this.cardService
      .getAllCards(this.currentPage)
      .subscribe((cardInfosResponse: CardDescription[]) => {
        this.cardDescriptions = cardInfosResponse;
      });
  }

  public searchCard(input: CustomEvent) {
    const searchCard = input.detail.value;
    if (searchCard !== '') {
      this.cardService
        .getCardByName(searchCard)
        .subscribe((cardInfosResponse: CardDescription[]) => {
          this.cardDescriptions = cardInfosResponse;
        });
    }
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
    if (this.displayFilterMonster.call) {
      this.showSpellFilterBlock = false;
    }
    if (this.displayFilterMonster.call) {
      this.showTrapFilterBlock = false;
    }
  }

  displayFilterSpell() {
    this.showSpellFilterBlock = !this.showSpellFilterBlock;
    if (this.showSpellFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    if (this.displayFilterSpell.call) {
      this.showMonsterFilterBlock = false;
    }
    if (this.displayFilterSpell.call) {
      this.showTrapFilterBlock = false;
    }
  }

  displayFilterTrap() {
    this.showTrapFilterBlock = !this.showTrapFilterBlock;
    if (this.showTrapFilterBlock) {
      this.buttonName = 'Hide';
    } else {
      this.buttonName = 'Show';
    }
    if (this.displayFilterTrap.call) {
      this.showMonsterFilterBlock = false;
    }
    if (this.displayFilterTrap.call) {
      this.showSpellFilterBlock = false;
    }
  }

  }
