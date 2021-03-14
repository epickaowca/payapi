import styled from 'styled-components'
import Image from 'next/image'

const StyledSlideItem = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > article{
        text-align: center;
        padding: 25px;
        max-width: 350px;
        margin-top: -50px;
        & > h1{
            color: ${p=>p.theme.sanJuanBlue};
            font-size: 1.6rem;
            margin-bottom: 15px;
        }
        & > p{
            color: ${p=>p.theme.sanJuanBlue};
            opacity: .7;
        }
    }
    & > div{
        &:nth-child(1){
            margin-left: 50px !important;
        }
        &:nth-child(3){
            display: none !important;
        }
    }
    ${p=>p.theme.media.tablet}{
        & > article{
            max-width: 660px;
            & > h1{
                font-size: 2.5rem;
                margin-bottom: 30px;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        justify-content: flex-start;
        padding-left:115px;
        flex-direction: ${p=>p.reverse ? 'row-reverse' : 'row'};
        
        & > div{
            &:nth-child(1){
                ${p=>!p.reverse && `
                margin-left: -50px !important;
                `}
                z-index: 2;
            }
            &:nth-child(3){
                display: block !important;
                position: absolute !important;
                right: -450px;
                z-index: 1;
            }
        }
        & > article{
            max-width: 500px;
            text-align: left;
            margin-left: 40px;
            & > h1{
                font-size: 3rem;
            }
            & > p{
                line-height: 30px;
            }
        }
    }
`

interface SlideItemInterface {
    img: {
        imgName: string
        imgAlt: string
        imgWidth: number
        imgHeight: number
    }
    h1: string
    p: string
    reverse?: boolean
    widthCircle?: boolean
}


const SlideItem:React.FC<SlideItemInterface> = ({img, h1, p, reverse, widthCircle}) => {
    return (
        <StyledSlideItem reverse={reverse}>
            <Image src={`/asset/${img.imgName}`} alt={img.imgAlt} width={img.imgWidth} height={img.imgHeight} />
            <article>
                <h1>{h1}</h1>
                <p>{p}</p>
            </article>
            {widthCircle && <Image
                src="/asset/bg-pattern-circle.svg"
                alt="circle background"
                width={780} 
                height={780} 
            />}
            
        </StyledSlideItem>
    )
}

export default SlideItem
