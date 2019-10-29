import { CardDescription } from 'src/app/tab1/models/cardDescription';
import { CardImage } from './../../models/cardImage';
import { CardDescriptionService } from 'src/app/tab1/services/card-description-service.service';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-selectedcard',
  templateUrl: './selectedcard.component.html',
  styleUrls: ['./selectedcard.component.scss'],
})
export class SelectedcardComponent {

public id: number;
 public cardDesc: CardDescription[];
 public cardDD: CardDescription;
 public cardImage: CardImage;
 public currentPage = 1;
 private idCard: number;
 public cardDescriptionService: CardDescriptionService;

  constructor(
    route: ActivatedRoute,
    cardDescriptionService: CardDescriptionService,
    ) {

    this.id = route.snapshot.params.id;

    cardDescriptionService.getCardByID(this.id)
      .subscribe( ( res: CardDescription ) => { this.cardDD = res; });
  }

  private loadCurrentPage(): void {
    this.cardDescriptionService
      .getAllCards(this.currentPage)
      .subscribe((cardDescription: CardDescription[]) => {
        this.cardDesc = cardDescription;
      });
  }
  private getSelectedCard(): void {
    this.cardDescriptionService
      .getAllCards(this.idCard)
      .subscribe((cardDescription) => {
        this.cardDesc = cardDescription;
      });
}
}
