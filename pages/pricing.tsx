import styled from 'styled-components'
import Header from '../components/structure/header'
import EmailInvite from '../components/structure/emailInvite'
import Footer from '../components/structure/footer'
import PricingSection from '../components/structure/pricingSection'

const StyledPricing = styled.div`
    max-width: 1440px;
    margin: auto;
    position: relative;
    overflow-x: hidden;
`
const Pricing = () => {
    return (
        <StyledPricing>
            <Header subPagesCase />
            <PricingSection />
            <EmailInvite />
            <Footer />
        </StyledPricing>
    )
}

export default Pricing
