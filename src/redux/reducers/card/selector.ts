import { RootState } from "../../store";
import {ICardElement} from '../../../';
export const selectCardById = (state: RootState, id: string) => {
    state.card.cardsArray.filter((card:ICardElement) => {
        return card.id === id;
    })
}
export const selectAllCards = (state:RootState) => {
    return state.card.cardsArray;
}