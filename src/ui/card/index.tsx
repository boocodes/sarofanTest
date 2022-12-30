import styled from "styled-components";


interface Props{
    imageSource: string;
    cardText: string;
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
`
const ImageWrapper = styled.div`
    width: 80px;
`

const ResponseImage = styled.img`
    position: relative;
`

const TextWrapper = styled.div`
    width: 80px;
`

const CardText = styled.p`
    font-size: 20px;
`



export default Card;