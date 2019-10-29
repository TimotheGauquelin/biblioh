import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SelectedcardComponent } from './tab1/pagesmasterduel/selectedcard/selectedcard.component';
import { BanlistComponent } from './tab1/pagesmasterduel/banlist/banlist.component';
import { MycardlistComponent } from './tab1/pagesmasterduel/mycardlist/mycardlist.component';
import { DecklistComponent } from './tab1/pagesmasterduel/decklist/decklist.component';
import { CardListSpeedDuelComponent } from './tab3/pagesspeedduel/card-list-speed-duel/card-list-speed-duel.component';

const routes: Routes = [
  {path: 'duelmasterdecklist', component: DecklistComponent},
  {path: 'duelmastercardlist', component: MycardlistComponent},
  {path: 'duelmasterbanlist', component: BanlistComponent},
  {path: 'duelmastercard/:id', component: SelectedcardComponent},
  {path: 'speedduelcardlist', component: CardListSpeedDuelComponent},
  {path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
