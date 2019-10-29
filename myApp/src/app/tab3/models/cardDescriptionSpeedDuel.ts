import { CardImageSpeedDuel } from './cardImageSpeedDuel';

export interface CardDescriptionSpeedDuel {
    id: string;
    name: string;
    type: string;
    desc: string;
    race: string;
    card_images: CardImageSpeedDuel[];
}
