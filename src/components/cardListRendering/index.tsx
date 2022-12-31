import styled from "styled-components";
import {useAppSelector, Card, selectAllCards} from '../../';



interface Props{
    sortingByLikesFlag: boolean;
}




function CardListRendering(props:Props){
    const cards = useAppSelector(selectAllCards);
    return(
        <CardsListWrapper>
                {
                    // checking sort by likes flag
                    props.sortingByLikesFlag === false ? 
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
    )
}

const CardsListWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-top: 100px;
`



export default CardListRendering;