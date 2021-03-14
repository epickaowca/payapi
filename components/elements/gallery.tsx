import styled from 'styled-components'
import TeslaImage from '../../public/asset/tesla.svg'
import MicrosoftImage from '../../public/asset/microsoft.svg'
import HewlettImage from '../../public/asset/hewlett-packard.svg'
import OracleImage from '../../public/asset/oracle.svg'
import GoogleImage from '../../public/asset/google.svg'
import NvidiaImage from '../../public/asset/nvidia.svg'

const StyledGallery = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 0px 10px;
margin-bottom: 40px;
max-width: 470px;
& > svg{
    min-width: 100px;
    margin: 20px 0px !important;
    width: 35% !important;
    margin: 25px !important;
    max-width: 140px !important;
    & > path{
        fill: ${p=>p.contactCase && p.theme.sanJuanBlue };
        }    
    }
    ${p=>p.theme.media.tablet}{
        max-width: 700px;
    }
`

interface GalleryInterface {
    contactCase?: boolean
}

const Gallery:React.FC<GalleryInterface> = ({contactCase}) => {
    return (
        <StyledGallery contactCase={contactCase}>
            <TeslaImage />
            <MicrosoftImage />
            <HewlettImage />
            <OracleImage />
            <GoogleImage />
            <NvidiaImage />
        </StyledGallery>
    )
}

export default Gallery
