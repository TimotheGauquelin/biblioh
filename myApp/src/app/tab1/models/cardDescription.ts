import { CardBanlist } from './cardBanlist';
import { CardImage } from './cardImage';
import { CardSet } from './cardSet';

export interface CardDescription {
    id?: number;
    name: string;
    type: string;
    desc: string;
    race: string;
    card_sets: CardSet[];
    card_images: CardImage[];
    banlist_info: CardBanlist[];
    page: number;
}
