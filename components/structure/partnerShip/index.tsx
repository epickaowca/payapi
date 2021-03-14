import styled from 'styled-components'
import Article from './article'
import Gallery from '../../elements/gallery'
import Image from 'next/image'

const StyledPartnerShip = styled.section`
margin-top: 50px;
background: ${p=>p.theme.mirageBlue};
overflow: hidden;
position: relative;
& > div{
    &:nth-child(1){
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 40px auto;
        padding: 60px 10px;
        max-width: 1400px;
        z-index: 2;
        position: relative;
    }
    &:nth-child(2){
        z-index: 1 !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        top: -420px !important;
        position: absolute !important;
        width: 700px !important;
        max-width: unset !important;
    }
}
${p=>p.theme.media.desktop}{
    padding-left: 115px;
    & > div{
        &:nth-child(1){
            padding: 80px 10px; 
            flex-direction: row-reverse;
            justify-content: space-between;
        }
        &:nth-child(2){
            width: 780px !important;
            transform: unset !important;
            left: -250px !important;
            top: -300px !important;
        }
    }
}

`

const PartnerShip = () => {
    return (
        <StyledPartnerShip>
            <div>
                <Gallery />
                <Article />
            </div>
            <Image
                src="/asset/bg-pattern-circle.svg"
                alt="circle background"
                width={780} 
                height={780} 
            />
        </StyledPartnerShip>
    )
}

export default PartnerShip
