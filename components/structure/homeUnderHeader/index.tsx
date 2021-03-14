import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import ContentElem from './contentElem'

const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div{
        &:nth-child(1){
            margin-left: 30px !important;
            width: 250px !important;
        }
    }
    ${p=>p.theme.media.tablet}{
        & > div{
            &:nth-child(1){
                margin-left: 50px !important;
                width: 300px !important;
            }
        }
    }
    ${p=>p.theme.media.desktop}{
        flex-direction: row-reverse;
        justify-content: space-between;
        max-width: 1250px;
        margin: auto;
        padding-left: 40px;
        & > div{
            &:nth-child(1){
                margin-left: 50px !important;
                width: unset !important;
            }
        }
    }
`


const HomeUnderHeader = ()=>{
    return (
        <StyledWrapper>
            <Image 
                src="/asset/illustration-phone-mockup.svg"
                alt="phone ilustration"
                width={419}
                height={660}
            />
            <ContentElem />
        </StyledWrapper>
    )
}

export default HomeUnderHeader