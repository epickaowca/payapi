import styled from 'styled-components'
import SlideItem from './slideItem'

const StyledWrapper = styled.section`
    margin: 50px 0px;    
    & > section{
        &:nth-child(1){
            margin-bottom: 50px;
        }
    }
    ${p=>p.theme.media.desktop}{
        & > section{
            &:nth-child(1){
                margin-bottom: -50px;
            }
        }
    }
`

const SlidesSection = () => {
    const imgObj1 = {
        imgName: 'illustration-easy-to-implement.svg',
        imgAlt: 'easy implement',
        imgWidth: 605,
        imgHeight: 444,
    }
    const imgObj2 = {
        imgName: 'illustration-simple-ui.svg',
        imgAlt: 'Simple UI and UX',
        imgWidth: 722,
        imgHeight: 660,
    }
    return (
        <StyledWrapper>
            <SlideItem h1="Easy to implement" p="Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease." img={imgObj1} />
            <SlideItem widthCircle reverse h1="Simple UI & UX" p="Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. " img={imgObj2} />
        </StyledWrapper>
    )
}

export default SlidesSection
