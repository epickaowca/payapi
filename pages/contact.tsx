import styled from 'styled-components'
import Header from '../components/structure/header'
import EmailInvite from '../components/structure/emailInvite'
import Footer from '../components/structure/footer'
import ContactForm from '../components/structure/contactForm'
import Gallery from '../components/elements/gallery'

const StyledContact = styled.div`
    max-width: 1440px;
    margin: auto;
    position: relative;
    overflow-x: hidden;
    & > div{
        &:nth-child(2){
            padding: 10px;
            margin: 25px;
            & > h1{
                font-size: 1.8rem;
                text-align: center;
                max-width: 335px;
                margin: auto;
            }
        }
    }
    & > section{
        &:nth-child(3){
            & > section{
                display: flex;
                flex-direction: column;
                align-items: center;
                & > h2{
                    opacity: .8;
                    text-align: center;
                    padding: 20px;
                    max-width: 350px;
                }

            }
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(2){
                margin-top: 50px;
                & > h1{
                    font-size: 2.9rem;
                    max-width: 550px;
                }
            }
        }
        & > section{
            &:nth-child(3){
                & > section{
                    & > h2{
                        margin: 20px 0px;
                        font-size: 2rem;
                        max-width: 550px;
                    }
    
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > section{
            &:nth-child(3){
                display: flex;
                max-width: 1250px;
                margin: 40px auto;
                padding-left: 40px;
                align-items: center;
                justify-content: space-between;
                & > section{
                    & > h2{
                        text-align: left;
                    }
                }
            }
        }
        & > div{
            &:nth-child(2){
                max-width: 1250px;
                margin: 40px auto;
                padding-left: 40px;
                & > h1{
                    text-align: left;
                    margin: unset;
                }
            }
        }
    }
`
const Contact = () => {
    return (
        <StyledContact>
            <Header subPagesCase />
            <div>
                <h1>Submit a help request and we’ll get in touch shortly.</h1>
            </div>
            <section>
                <ContactForm />
                <section>
                    <h2>Join the thousands of innovators already building with us</h2>
                    <Gallery contactCase />
                </section>
            </section>
            <EmailInvite />
            <Footer />
        </StyledContact>
    )
}

export default Contact
