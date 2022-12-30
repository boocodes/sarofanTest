import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import {useAppSelector, useAppDispatch, addCard, selectAllCards, Card} from '../../';


interface Props{

}


function CardsList(props:Props){
    const cards = useAppSelector(selectAllCards);
    const disptach = useAppDispatch();
    // component did mount 
    useEffect(()=>{
        // function to get a images from api
        for(let i = 1; i <= 5; i++){
            const response = fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                return response.json();
              })
              .then((data) => {
                // create cards with api`s images
                disptach(addCard({id: Math.random().toString(), imagesSource: data.message, isLikedFlag: false}))
              });
            
        }
    }, [])
    // use state with sorting by likes flag
    const [sortByLikesFlag, setSortByLikesFlag] = useState(false);
    return(
        <ExternalWrapper>
            <SortButtonWrapper>
                <SortButton onClick={()=>setSortByLikesFlag(!sortByLikesFlag)}>Sort by likes</SortButton>
            </SortButtonWrapper>
            <CardsListWrapper>
                {
                    // checking sort by likes flag
                    sortByLikesFlag === false ? 
                    // if flag false then will show all cards
                        cards.map(card=>{
                            return (
                                <Card key={card.id} imageSource={card.imagesSource} cardText={'simple text'} isLikedFlag={card.isLikedFlag} id={card.id}/>
                            )
                        })
                        :
                        // if flag is true then will show only liked cards
                        cards.map(card=>{
                            if(card.isLikedFlag){
                                return (
                                    <Card key={card.id} imageSource={card.imagesSource} cardText={'simple text'} isLikedFlag={card.isLikedFlag} id={card.id}/>
                                )
                            }
                        })
                }
            </CardsListWrapper>
        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SortButtonWrapper = styled.div`
    margin-top: 100px;
`
const SortButton = styled.button`
    font-size: 22px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px 15px;
`

const CardsListWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
`

export default CardsList;