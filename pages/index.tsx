import styled from 'styled-components'
import Header from '../components/structure/header'
import HomeUnderHeader from '../components/structure/homeUnderHeader'
import PartnerShip from '../components/structure/partnerShip'
import SlidesSection from '../components/structure/slidesSection'
import AdvantagesSection from '../components/structure/advantagesSection'
import EmailInvite from '../components/structure/emailInvite'
import Footer from '../components/structure/footer'

const StyledHome = styled.div`
    max-width: 1440px;
    margin: auto;
    position: relative;
    overflow-x: hidden;
`

export default function Home() {
  return (
    <StyledHome>
      <Header />
      <HomeUnderHeader />
      <PartnerShip />
      <SlidesSection />
      <AdvantagesSection />
      <EmailInvite />
      <Footer />
    </StyledHome>
  )
}
