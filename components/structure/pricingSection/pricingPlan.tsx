import styled from 'styled-components'
import SecondaryButton from '../../elements/secondaryButton'

const StyledPricingPlan = styled.section`
    margin: auto;
    margin-bottom: 90px;
    max-width: 500px;
    padding: 0px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > h2{
        color: ${p=>p.theme.sanJuanBlue};
    }
    & > h1{
        font-size: 1.5rem;
        color: ${p=>p.theme.darkPink};
    }
    & > p{
        color: rgba(0, 0, 0, .5);
        max-width: 320px;
        margin: 25px 0px;
    }
    & > section{
        padding: 15px 0px;
        margin: 25px 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        border-top: 1.5px solid rgba(0,0,0,.3);
        border-bottom: 1.5px solid rgba(0,0,0,.3);
        & > ul{
            text-align: left;
        }
    }
    ${p=>p.theme.media.tablet}{
        margin: auto;
        max-width: 300px;
        & > button{
            font-size: 1rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        align-items: flex-start;
        text-align: left;
        margin: unset;
        max-width: unset;
        width: 33%;
        & > section{
            justify-content: flex-start;
            padding-left: 25px;
        }
        & > button{
            font-size: 1rem;
        }
        & > h1{
            font-size: 1.5rem;
        }
        & > p{
            max-width: 340px;
            font-size: 1.15rem;
        }
        & > h2{
            font-size: 2rem;
        }
    }
`

const StyledLi = styled.li`
    list-style-type: none;
    list-style-image: ${p=>!p.available ? "url('/asset/icon-check.svg')" : ''};
    margin: 15px 0px;
    & > span{
        margin-left: 15px;
        color: ${p=>p.available ? 'rgba(0,0,0,.5)' : p.theme.sanJuanBlue};
    }
    ${p=>p.theme.media.tablet}{
        margin: 20px 0px;
    }
    ${p=>p.theme.media.desktop}{
        margin: 25px 0px;
    }
`

const numberRange = [1, 2, 3, 4, 5, 6, 7] as const;
const avaiableAdvantages = ['Transactions', 'Auth', 'Identity', 'Investments', 'Assets', 'Liabilities', 'Income'];

interface PricingPlanInterface {
    h1: string
    p: string
    price: number
    numberOfAdvantages: typeof numberRange[number]
}

const PricingPlan:React.FC<PricingPlanInterface> = ({h1, p, price, numberOfAdvantages}) => {
    return (
        <StyledPricingPlan>
            <h1>{h1}</h1>
            <p>{p}</p>
            <h2>${price.toFixed(2)}</h2>
            <section>
                <ul>
                    {numberOfAdvantages && avaiableAdvantages.map((e,index)=><StyledLi available={numberOfAdvantages > index ? false : true} key={index}><span>{e}</span></StyledLi>)}
                </ul>
            </section>
            <SecondaryButton content='Request Access' case2 />
        </StyledPricingPlan>
    )
}

export default PricingPlan
