import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardDescription } from '../models/cardDescription';
import { Observable } from 'rxjs';
import { flatMap, skip, take, toArray, map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardDescriptionService {
  private readonly cardInfoByPage = 30;
  public loading = false;
  public name: string;

  constructor(private http: HttpClient) {}

  public getAllCards(page: number): Observable<CardDescription[]> {
    return this.http
      .get<CardDescription[]>('https://db.ygoprodeck.com/api/v5/cardinfo.php')
      .pipe(
        flatMap(e => e), // Transforme le tableau de donnée en simple donnée
        skip((page - 1) * this.cardInfoByPage),
        take(this.cardInfoByPage),
        toArray() // Transforme les données en tableau
      );
  }

  public getCardByName(name: string): Observable<CardDescription[]> {
    return this.http
      .get<CardDescription[]>(
        `https://db.ygoprodeck.com/api/v5/cardinfo.php?fname=${name}`
      )
      .pipe(
        flatMap(e => e), // Transforme le tableau de donnée en simple donnée
        take(this.cardInfoByPage),
        toArray() // Transforme les données en tableau
      );
  }

  public getCardByLevel(
    level: number,
  ): Observable<CardDescription[]> {
    return this.http
      .get<CardDescription[]>(
        `  https://db.ygoprodeck.com/api/v5/cardinfo.php?level=${level}`
      )
      .pipe(
        flatMap(e => e), // Transforme le tableau de donnée en simple donnée
        take(this.cardInfoByPage),
        toArray() // Transforme les données en tableau
      );
  }

  public getAllSpellCard(page: number): Observable<CardDescription[]> {
    return this.http
      .get<CardDescription[]>(
        'https://db.ygoprodeck.com/api/v5/cardinfo.php?type=Spell%20Card'
      )
      .pipe(
        flatMap(e => e), // Transforme le tableau de donnée en simple donnée
        take(this.cardInfoByPage),
        toArray() // Transforme les données en tableau
      );
  }

  public getCardByID(id: number): Observable<CardDescription> {
    return this.http.get<CardDescription>(
      'https://db.ygoprodeck.com/api/v5/cardinfo.php?name=' + id
    );
  }
}
