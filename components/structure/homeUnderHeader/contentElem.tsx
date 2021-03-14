import styled from 'styled-components'
import EmailCapture from '../../elements/emailCapture'

const StyledContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    margin: auto;
    & > h1{
        color: ${p=>p.theme.sanJuanBlue};
        text-align: center;
        font-size: 2.1rem;
    }
    & > p{
        color: rgba(0,0,0,.6);
        & > span{
            cursor: pointer;
            font-weight: 600;
            color: ${p=>p.theme.sanJuanBlue};
        }
    }
    ${p=>p.theme.media.tablet}{
        max-width: 450px;
        & > h1{
            font-size: 2.3rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        align-items: flex-start;
        margin: unset;
        & > h1{
            text-align: left;
            font-size: 3.4rem;
        }
    }
`

const ContentElem = () => {
    return (
        <StyledContent>
            <h1>Start building with our APIs for absolutely free.</h1>
            <EmailCapture />
            <p>Have any questions? <span>Contact Us</span></p>
        </StyledContent>
    )
}

export default ContentElem
