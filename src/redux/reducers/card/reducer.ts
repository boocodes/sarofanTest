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
    id: string;
}
interface ILikeCard{
    id: string;
}

export const CardReducer = createSlice({
    initialState,
    name: 'card',
    reducers: {
        addCard: (state, {payload}:PayloadAction<IAddCard>) => {
            state.cardsArray.push(payload);
        },
        deleteCard: (state, {payload}:PayloadAction<IDeleteCard>)=> {
            state.cardsArray = state.cardsArray.filter(card => card.id !== payload.id);
        },
        likeCard: (state, {payload}:PayloadAction<ILikeCard>)=>{
            state.cardsArray.map(card=>{
                if(card.id === payload.id){
                    card.isLikedFlag = !card.isLikedFlag;
                }
            })
        },
        resetCards: (state) => {
            state.cardsArray = [];
        },
    }
})


export const {addCard, likeCard, deleteCard, resetCards} = CardReducer.actions;
export default CardReducer.reducer;


