import AdvantageItem from './advantageItem'
import styled from 'styled-components'

const StyledAdvantagesSection = styled.section`
    margin: 50px 0px;
    display: flex;
    flex-direction: column;
    ${p=>p.theme.media.tablet}{
        flex-direction: row;
        justify-content: center;
        & > article{
            margin: 0px;
            &:nth-child(2){
                margin: 0px 50px;
            }
        }
    }
`

const items = [
    {imgObj: {imgName: 'icon-personal-finances.svg',imgAlt: 'personal finances',imgWidth: 106,imgHeight: 106,}, h1: 'Personal Finances', p: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.'},
    {imgObj: {imgName: 'icon-banking-and-coverage.svg',imgAlt: 'banking and coverage',imgWidth: 106,imgHeight: 106,}, h1: 'Banking & Coverage', p: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.'},
    {imgObj: {imgName: 'icon-consumer-payments.svg',imgAlt: 'consumer payments',imgWidth: 106,imgHeight: 106,}, h1: 'Consumer Payments', p: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.'},
]

const AdvantagesSection = () => {
    return <StyledAdvantagesSection>
            {items.length && items.map((item,index)=><AdvantageItem key={index} img={item.imgObj} h1={item.h1} p={item.p} />)}
    </StyledAdvantagesSection>
}

export default AdvantagesSection
