import styled from 'styled-components'
import Header from '../components/structure/header'
import EmailInvite from '../components/structure/emailInvite'
import Footer from '../components/structure/footer'
import AboutArticle from '../components/structure/aboutArticle'
import Image from 'next/image'

const StyledAbout = styled.div`
    max-width: 1440px;
    margin: auto;
    position: relative;
    overflow-x: hidden;
    & > div{
        &:nth-child(2){
            & > h1{
                max-width: 430px;
                margin: 25px auto;
                text-align: center;
                padding: 20px;
                font-size: 1.7rem;
            }
        }
        &:nth-child(5){
            position: relative !important;
            width: 768px !important;
            max-width: unset !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            margin-top: 35px !important;
        }
    }
    & > section{
        &:nth-child(9){
            margin-top: 35px;
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(2){
                & > h1{
                    font-size: 3.3rem;
                    max-width: 700px;
                }
            }
            &:nth-child(5){
                max-width: 100% !important;
                width: unset !important;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        & > div{
            &:nth-child(2){
                margin: auto;
                margin-top: 57px;
                max-width: 1050px;
                & > h1{
                    text-align: left;
                    margin: 0px;
                    padding: 0px;
                }
            }
        }
    }
`

const StyledSection = styled.section`
    margin: 25px 0px;    
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    & > hr{
        width: 100%;
        border: none;
        background: rgba(186,66,112, .5);
        height: 2px;
    }
    & > div{
        display: flex;
        flex-direction: column;
        margin: 25px 0px;
        & > p{
            margin-bottom: 5px;
            color: rgba(0,0,0,.59);
        }
        & > h2{
            color: ${p=>p.theme.darkPink};
            font-size: 1.9rem;
        }
    }
    ${p=>p.theme.media.tablet}{
        flex-direction: row;
        justify-content: center;
        max-width: 1100px;
        margin: auto;
        margin-top: 25px;
        & > hr{
            display: none;
        }
        & > div{
            border-top: 2px solid rgba(186,66,112, .5);
            border-bottom: 2px solid rgba(186,66,112, .5);
            margin: 0px 15px;
            text-align: left;
            padding: 25px 0px;
            width: 30%;
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1250px;
        & > div{
            & > p{
                font-size: 1.3rem;
            }
            & > h2{
                font-size: 2.2rem;
            }
        }
    }
`

const About = () => {
    return (
        <StyledAbout>
            <Header subPagesCase />
            <div>
                <h1>We empower innovators by delivering access to the financial system</h1>
            </div>
            <AboutArticle h1="Our Vision" p="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology." />
            <AboutArticle h1="Our Vision" p="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology." />
            <Image src='/asset/image-team-members.jpg' alt='tem-members' width={1440} height={500} />
            <StyledSection>
                <hr />
                <div>
                    <p>Team Members</p>
                    <h2>300+</h2>
                </div>
                <div>
                    <p>Offices in the US</p>
                    <h2>3</h2>
                </div>
                <div>
                    <p>Transactions analyzed</p>
                    <h2>10M+</h2>

                </div>
                <hr />
            </StyledSection>
            <AboutArticle h1="Our Vision" p="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology." />
            <AboutArticle h1="Our Vision" p="Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology." />
            <EmailInvite />
            <Footer />
        </StyledAbout>
    )
}

export default About
