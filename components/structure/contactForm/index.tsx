import styled from 'styled-components'
import SecondaryButton from '../../elements/secondaryButton'

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px;
    max-width: 550px;
    margin: auto;
    margin-bottom: 40px;
    & > div{
        &:nth-child(6){
            display: flex;
            align-items: center;
            margin-top: 25px;
            & > input{
                cursor: pointer;
                appearance: none;
                background: #d5d5d5;
                width: 20px;
                height: 20px;
                flex-shrink: 0;
                display: flex;
                outline: none;
                &:after{
                    margin: auto;
                    content: '';
                    width: 14px;
                    height: 11px;
                    background-image: url("/asset/icon-check-white.svg");
                    display: block;
                    visibility: hidden;
                }
                &:hover{
                    background: #a5a5a5;
                }
                &:checked{
                    background: ${p=>p.theme.darkPink};
                }
                &:checked:after{
                    visibility: visible;
                }
            }
            & > label{
                cursor: pointer;
                margin-left: 35px;
                font-size: .9rem;
                color: ${p=>p.theme.sanJuanBlue};
            }
        }
    }
    & > button{
        margin-top: 25px;
        max-width: 200px;
    }
    ${p=>p.theme.media.tablet}{
        padding: 0px;
        & > div{
            &:nth-child(6){
                & > label{
                    font-size: 1.3rem;
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        margin-right: 50px;
    }
`

const StyledContactField = styled.input`
    padding: 15px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.4);
    font-size: 1.1rem;
    margin: 15px 0px;
    outline: none;
    background: transparent;
`

const StyledContactFieldTextArea = styled.textarea`
    padding: 15px;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,.4);
    font-size: 1.1rem;
    margin: 15px 0px;
    outline: none;
    background: transparent;
    resize: none;
    height: 100px;
`

const ContactForm = () => {
    return (
        <StyledContactForm>
            <StyledContactField type='text' placeholder='Name' />
            <StyledContactField type='email' placeholder='Email Address' />
            <StyledContactField type='text' placeholder='Company Name' />
            <StyledContactField type='text' placeholder='Title' />
            <StyledContactFieldTextArea placeholder='Message' />
            <div>
                <input type='checkbox' id='checkContact' />
                <label htmlFor='checkContact'>Stay up-to-date with company announcements and updates to our API</label>
            </div>
            <SecondaryButton case2 content='Submit' />
        </StyledContactForm>
    )
}

export default ContactForm
