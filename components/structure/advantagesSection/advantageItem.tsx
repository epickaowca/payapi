import styled from 'styled-components'
import Image from 'next/image'

const StyledAdvantageItem = styled.article`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    & > h1{
        color: ${p=>p.theme.sanJuanBlue};
        margin-top: 25px;
        margin-bottom: 15px;
        font-size: 1.3rem;
    }
    & > p{
        color: ${p=>p.theme.sanJuanBlue};
        opacity: .7;
        max-width: 350px;
        line-height: 24px;
    }
    ${p=>p.theme.media.tablet}{
        margin-bottom: 0px;
        & > p{
            max-width: 300px;
        }
    }

`

interface AdvantageItemInterface {
    img: {
        imgName: string
        imgAlt: string
        imgWidth: number
        imgHeight: number
    }
    h1: string
    p: string
}


const AdvantageItem:React.FC<AdvantageItemInterface> = ({img,h1,p}) => {
    return (
        <StyledAdvantageItem>
            <Image src={`/asset/${img.imgName}`} alt={img.imgAlt} width={img.imgWidth} height={img.imgHeight} />
            <h1>{h1}</h1>
            <p>{p}</p>
        </StyledAdvantageItem>
    )
}

export default AdvantageItem
