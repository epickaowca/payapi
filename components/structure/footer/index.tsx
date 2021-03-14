import styled from 'styled-components'
import Image from 'next/image'
import Logo from '../../../public/asset/logo.svg'
import Link from 'next/link'

const StyledFooter = styled.footer`
    margin-top: 40px;
    padding: 50px 25px;    
    background: ${p=>p.theme.mirageBlue};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    & > div{
        &:nth-child(3){
            z-index: 1;
            position: absolute !important;
            bottom: -600px !important;
            width: 780px !important;
            max-width: unset !important;
        }
    }
    & > section{
        &:nth-child(1){
            display: flex;
            flex-direction: column;
            align-items: center;
            & > svg{
                & > g{
                    fill: white;
                }
            }
            & > nav{
                z-index: 2;
                position: relative;
                margin: 15px 0px;
                & > a{
                    cursor: pointer;
                    margin: 15px 0px;
                    color: rgba(255,255,255,.6);
                    font-size: 1.3rem;
                    &:hover{
                        color: white;
                    }
                }
                display: flex;
                flex-direction: column;
            }
        }
        &:nth-child(2){
            display: flex;
            & > div{
                cursor: pointer;
                &:nth-child(2){
                    margin: 0px 25px !important;
                }
                &:hover{
                    opacity: .7 !important;
                }
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        padding: 50px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & > div{
            &:nth-child(3){
                bottom: -530px !important;
                right: -300px !important;
                
            }
        }
        & > section{
            &:nth-child(1){
                flex-direction: row;
                & > nav{
                    flex-direction: row;
                    margin: 0px 15px;
                    & > a{
                        margin: 0px 35px;
                    }
                }
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        padding: 50px 100px;
    }
`

const Footer = () => {  <Image
    src="/asset/bg-pattern-circle.svg"
    alt="circle background"
    width={780} 
    height={780} 
/>
    return (
        <StyledFooter>
            <section>
                <Logo />
                <nav>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </section>
            <section>
                <Image src="/asset/twitter.svg" alt="twitter" width={24} height={20} />
                <Image src="/asset/facebook.svg" alt="facebook" width={24} height={24} />
                <Image src="/asset/linkedin.svg" alt="linkedin" width={24} height={20} />
            </section>
            <Image
                src="/asset/bg-pattern-circle.svg"
                alt="circle background"
                width={780} 
                height={780} 
            />
        </StyledFooter>
    )
}

export default Footer
