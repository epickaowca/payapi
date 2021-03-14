import styled from 'styled-components'
import PrimaryButton from './primaryButton'

const StyledEmailCapture = styled.div`
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    width: 90%;
    & > button{
        width: 100%;
        margin-top: 25px;
    }
    & > input{
        outline: none;
        padding: 15px 20px;
        border: none;
        border-radius: 25px;
        margin-right: -40px;
        box-shadow: 0px 0px 15px rgba(0,0,0,.05);
        width: 100%;
        font-size: 1rem;
    }
    ${p=>p.theme.media.tablet}{
        flex-direction: row;
        & > button{
            margin-top: 0px;
        }
        & > input{
            width: 250px;
        }
    }
    ${p=>p.theme.media.desktop}{
        margin: 25px 0px;
        margin-top: 50px;
    }
`

const EmailCapture = () => {
    return (
            <StyledEmailCapture>
                <input type="text" placeholder="Enter email address" />
                <PrimaryButton content='Schedule a Demo' />
            </StyledEmailCapture>
    )
}

export default EmailCapture
