import EmailCapture from '../../elements/emailCapture'
import styled from 'styled-components'

const StyledEmailInvite = styled.section`
display: flex;
flex-direction: column;
max-width: 350px;
margin: auto;
align-items: center;
& > h1{
    font-size: 1.8rem;
    color: ${p=>p.theme.sanJuanBlue};
}
${p=>p.theme.media.tablet}{
    margin-top: 100px;
    & > h1{
        font-size: 3rem;
    }
}
${p=>p.theme.media.desktop}{
    flex-direction: row;
    max-width: unset;
    justify-content: space-between;
    padding: 0px 150px;
    margin-bottom: 100px;
    & > div{
        margin: 0px;
        max-width: 400px;
    }
}
`

const EmailInvite = () => {
    return (
        <StyledEmailInvite>
            <h1>Ready to start?</h1>
            <EmailCapture />
        </StyledEmailInvite>
    )
}
export default EmailInvite