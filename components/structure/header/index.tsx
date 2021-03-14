import { useState } from 'react'
import Image from 'next/image'
import Nav from './nav'
import styled from 'styled-components'
import Link from 'next/link'

const StyledHeader = styled.div`
& > div{
    &:nth-child(1){
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px;
    }
    &:nth-child(2){
        z-index: 1;
        max-width: unset !important;
        position: absolute !important;
        top: ${p=>p.subPagesCase ? '-200px' : '0px'} !important;
        right: ${p=>p.subPagesCase ? '-100px' : '50%'}  !important;
        transform: translate(50%, -70%);
        width: 1100px !important;
        height: 1100px !important;
    }
}
${p=>p.theme.media.tablet}{
    & > div{
        max-width: 800px;
        margin: auto;
        justify-content: space-between;
        &:nth-child(2){
            max-width: unset !important;
            position: absolute !important;
            transform: translate(50%, -50%);
            width: 900px !important;
            height: 900px !important;
            ${p=>p.subPagesCase && 'right: -150px !important'};
            ${p=>p.subPagesCase && 'top: -100px !important'};
        }
        & > div{
            &:nth-child(3){
                display: none !important;
            }
        }
    }
}
${p=>p.theme.media.desktop}{
    & > div{
        padding-left: 150px;
        max-width: 1250px;
        &:nth-child(2){
            top: ${p=>p.subPagesCase ? '-350px' : '0px'} !important;
            right: ${p=>p.subPagesCase ? '50px' : '0px'} !important;
            transform: translate(20%, -20%);
            width: 780px !important;
            height: 780px !important;
        }
        & > div{
            &:nth-child(1){
                margin-right: 80px !important;
            }
        }
    }
}
`

interface HeaderInterface {
    subPagesCase?: boolean
}

const Header:React.FC<HeaderInterface> = ({subPagesCase})=> {
    const [navOpen, setNavOpen] = useState(false)
    const navChangeHandler = ()=>{
        setNavOpen(!navOpen)
    }

    return (
        <StyledHeader subPagesCase={subPagesCase}>
            <div>
                <Image  
                    src="/asset/logo.svg"
                    alt="logo"
                    width={135}
                    height={38} 
                />
                <Nav changeMobileNav={navChangeHandler} navOpen={navOpen} />
                <Image onClick={navChangeHandler}
                    src="/asset/menu.svg"
                    alt="mobile menu"
                    width={28}
                    height={17}
                />
            </div>
            <Image
                src="/asset/bg-pattern-circle.svg"
                alt="circle background"
                width={780} 
                height={780} 
            />
        </StyledHeader>
    )
}

export default Header