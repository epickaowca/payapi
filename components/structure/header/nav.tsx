import styled from 'styled-components'
import PrimaryButton from '../../elements/primaryButton'
import Image from 'next/image'
import Link from 'next/link'

const NavStyled = styled.nav`
    transition: right ease .5s; 
    flex-direction: column;
    right: ${p=>p.navOpen ? '0px' : '-100%' };
    background: ${p=>p.theme.mirageBlue};
    display: flex;
    color: white;
    align-items: flex-end;
    position: absolute;
    top: 0px;
    height: 100vh;
    padding: 25px;
    width: 100vw;
    max-width: 300px;
    z-index: 1;

    & > div{
        &:nth-child(1){
            margin: 20px 0px !important;
        }
    }
    & > button{
        margin: 0px auto;
        margin-top: 20px;
    }

    ${p=>p.theme.media.tablet}{
        right: unset !important;
        padding: 0px;
        align-items: center;
        position: relative;
        flex-direction: row;
        height: auto;
        max-width: unset;
        width: 70%;
        background: transparent;
        justify-content: space-between;
        color: ${p=>p.theme.sanJuanBlue};
        & > div{
            &:nth-child(1){
                display: none !important;
            }
        }
        & > button{
            margin: 0px;
        }
    }
    ${p=>p.theme.media.desktop}{
        width: 90%;
    }
`

const StyledUl = styled.ul`
    border-top: 1px solid ${p=>p.theme.darkPink};
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 20px;
    flex-direction: column;
    & > li{
        list-style-type: none;
        margin: 20px 0px;
        & > a{
            font-size: 1.2rem;
            color: white;
            &:hover{
                opacity: .7;
            }
        }
    }
    ${p=>p.theme.media.tablet}{
        padding-top: 0px;
        border-top: none;
        flex-direction: row;
        & > li{
            & > a{
                color: unset;
            }
            margin: 0px 10px;
        }
    }
    ${p=>p.theme.media.desktop}{
        & > li{
            margin: 0px 30px;
            & > a{
                font-size: 1.4rem;
            }
        }
    }
`

interface NavInterface {
    navOpen?: boolean
    changeMobileNav?: ()=>void
    footerCase?: boolean
}

const Nav:React.FC<NavInterface> = ({navOpen, changeMobileNav}) => {
    return (
        <NavStyled navOpen={navOpen}>
            <Image onClick={changeMobileNav}
                src="/asset/close.svg"
                alt="close mobile nav"
                width={22}
                height={23} 
            />
            <StyledUl>
                <li>
                    <Link href="/pricing">
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        Contact
                    </Link>
                </li>
            </StyledUl>
            <PrimaryButton content='Schedule a Demo' />
        </NavStyled>
    )
}

export default Nav