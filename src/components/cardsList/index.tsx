import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import {useAppSelector, useAppDispatch, addCard, selectAllCards, Card} from '../../';


interface Props{

}

function CardsList(props:Props){
    const cards = useAppSelector(selectAllCards);
    console.log(cards);
    const disptach = useAppDispatch();
    useEffect(()=>{
        for(let i = 1; i <= 1; i++){
            const response = fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                return response.json();
              })
              .then((data) => {
                disptach(addCard({id: Math.random().toString(), imagesSource: data.message, isLikedFlag: false}))
              });
            
        }
    }, [])
    
    return(
        <>
            {cards.map(card=>{
                return (
                    <Card key={card.id} imageSource={card.imagesSource} cardText={'simple text'} isLikedFlag={card.isLikedFlag} id={card.id}/>
                )
            })}
        </>
    )
}



export default CardsList;