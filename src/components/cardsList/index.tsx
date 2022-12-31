import { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import {useAppSelector, useAppDispatch, addCard, selectAllCards, CardListRendering} from '../../';

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
                <SortButton sortingByLikesFlag={sortByLikesFlag} onClick={()=>setSortByLikesFlag(!sortByLikesFlag)}>Sort by likes</SortButton>
            </SortButtonWrapper>
            <CardListRendering sortingByLikesFlag={sortByLikesFlag}/>
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

interface ISortButton{
    sortingByLikesFlag: boolean;
}


const SortButton = styled.button<ISortButton>`
    font-size: 22px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px 15px;
    background: ${props=>props.sortingByLikesFlag === false ? 'none' : 'green'}
`



export default CardsList;