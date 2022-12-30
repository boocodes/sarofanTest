import { RootState } from "../../store";
import {ICardElement} from '../../../';
export const selectCardById = (state: RootState, id: string) => {
    return state.card.cardsArray.filter((card:ICardElement) => {
        card.id === id;
    })
}
export const selectAllCards = (state:RootState) => {
    return state.card.cardsArray;
}