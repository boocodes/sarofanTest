import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICardElement } from '../../../';

interface ICardsArray{
    cardsArray: ICardElement[];
}

const initialState:ICardsArray = {
    cardsArray: []
}




interface IAddCard{
    id: string;
    isLikedFlag: boolean;
    imagesSource: string;
}
interface IDeleteCard{
    cardsForDelete: ICardElement;
}
interface ILikeCard{
    carForLike: ICardElement;
}

export const CardReducer = createSlice({
    initialState,
    name: 'card',
    reducers: {
        addCard: (state, {payload}:PayloadAction<IAddCard>) => {
            state.cardsArray.push(payload);
        },
        deleteCard: (state, {payload}:PayloadAction<IDeleteCard>)=> {
            state.cardsArray = state.cardsArray.filter(card => card.id !== payload.cardsForDelete.id);
        },
        likeCard: (state, {payload}:PayloadAction<ILikeCard>)=>{
            state.cardsArray.map(card=>{
                if(card.id === payload.carForLike.id){
                    card.isLikedFlag = true;
                }
            })
        }
    }
})


export const {addCard, likeCard, deleteCard} = CardReducer.actions;
export default CardReducer.reducer;


