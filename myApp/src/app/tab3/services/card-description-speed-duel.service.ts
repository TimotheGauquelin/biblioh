import { CardDescriptionSpeedDuel } from './../models/cardDescriptionSpeedDuel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { flatMap, skip, take, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CardDescriptionSpeedDuelService {
  private readonly cardInfoByPage = 30;
  public loading = false;

  constructor(private http: HttpClient) {}

  public getAllCardsSpeedDuel(page: number): Observable<CardDescriptionSpeedDuel[]> {
    return this.http.get<CardDescriptionSpeedDuel[]>('https://db.ygoprodeck.com/api/v5/cardinfo.php?format=Speed Duel')
    .pipe(
      flatMap(e => e), // Transforme le tableau de donnée en simple donnée
      skip((page - 1) * this.cardInfoByPage),
      take(this.cardInfoByPage),
      toArray() // Transforme les données en tableau
    );
  }
  }
