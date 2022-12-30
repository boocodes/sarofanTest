import styled from "styled-components";


interface Props{
    imageSource: string;
    cardText: string;
    id: string;
    isLikedFlag: boolean;
}


function Card(props: Props){
    return(
        <ExternalWrapper>
            <ImageWrapper>
                <ResponseImage src={props.imageSource}/>
            </ImageWrapper>
            <TextWrapper>
                <CardText>
                    {props.cardText}
                </CardText>
            </TextWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    border: 1px solid black;
    padding-bottom: 30px;
    
`
const ImageWrapper = styled.div`
    position: relative;
    padding: 20px 10px;
    width: 200px;
`

const ResponseImage = styled.img`
    position: relative;
    width: 100%;
`

const TextWrapper = styled.div`
    
`

const CardText = styled.p`
    font-size: 20px;
    text-align: center;
`



export default Card;