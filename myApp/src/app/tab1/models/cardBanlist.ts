import { CardSet } from './cardSet';
import { CardImage } from './cardImage';
import { CardDescription } from 'src/app/tab1/models/cardDescription';
export interface CardBanlist {
    card_description: CardDescription[];
    card_images: CardImage[];
    card_sets: CardSet[];
    ban_ocg: string;
    ban_tcg: string;
}
