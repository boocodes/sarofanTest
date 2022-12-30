import styled from "styled-components";
import {likeCard, useAppDispatch} from '../../';

interface Props{
    imageSource: string;
    cardText: string;
    id: string;
    isLikedFlag: boolean;
}


function Card(props: Props){
    const dispatch = useAppDispatch();
    return(
        <ExternalWrapper isLikedFlag={props.isLikedFlag}>
            <ImageWrapper>
                <ResponseImage src={props.imageSource}/>
            </ImageWrapper>
            <TextWrapper>
                <CardText>
                    {props.cardText}
                </CardText>
            </TextWrapper>
            <LikeWrapper>
                <LikeIcon onClick={()=>dispatch(likeCard({id: props.id}))} src="./images/likeIcon.png"/>
            </LikeWrapper>
        </ExternalWrapper>
    )
}


interface IExternalWrapper{
    isLikedFlag: boolean;
}

const ExternalWrapper = styled.div<IExternalWrapper>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    background: ${props=>props.isLikedFlag === true ? 'gray' : 'none'};
    border: 1px solid black;
    padding-bottom: 30px;
    border-radius: 10px;
    
`
const ImageWrapper = styled.div`
    position: relative;
    padding: 20px 10px;
    width: 200px;
    
`

const ResponseImage = styled.img`
    position: relative;
    width: 100%;
    height: 200px;
`

const TextWrapper = styled.div`
    
`

const CardText = styled.p`
    font-size: 20px;
    text-align: center;
`
const LikeWrapper = styled.div`
    margin-top: 20px;
`
const LikeIcon = styled.img`
    cursor: pointer;
    width: 50px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`



export default Card;