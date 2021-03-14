import styled from 'styled-components'
import PricingPlan from './pricingPlan'

const StyledPricingSection = styled.section`
position: relative;
max-width: 1050px;
margin: auto;
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 100px;
& > h1{
    margin-bottom: 80px;
    color: ${p=>p.theme.sanJuanBlue};
    text-align: center;
    font-size: 2rem;
}
${p=>p.theme.media.tablet}{
    & > div{
        &:nth-child(2){
            display: flex;
        }
    }
    & > h1{
        font-size: 2.5rem;
    }
}
${p=>p.theme.media.desktop}{
    max-width: 1250px;
    padding-left: 40px;
    margin-top: 60px;
    & > h1{
        text-align: left;
        font-size: 3rem;
        margin-bottom: 60px;
    }
    & > div{
        & > section{
            &:nth-child(1){
                padding-left: 0px;
            }
        }
    }
}
`

const PricingSection = () => {
    return (
        <StyledPricingSection>
            <h1>Pricing</h1>
            <div>
                <PricingPlan h1='Free Plan' p='Build and test using our core set of products with up to 100 API requests' price={0} numberOfAdvantages={3} />
                <PricingPlan h1='Basic Plan' p='Launch your project with unlimited requests and no contractual minimums' price={249} numberOfAdvantages={5} />
                <PricingPlan h1='Premium Plan' p='Get tailored solutions, volume pricing, and dedicated support for your team' price={499} numberOfAdvantages={7} />
            </div>
        </StyledPricingSection>
    )
}

export default PricingSection
