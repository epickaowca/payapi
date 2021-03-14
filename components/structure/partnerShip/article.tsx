import styled from 'styled-components'
import SecondaryButton from '../../elements/secondaryButton'

const StyledArticle = styled.article`
    color: white;
    max-width: 400px;
    text-align: center;
    & > h1{
        color: white;
        font-size: 1.8rem;
    }
    & > p{
        color: rgba(255,255,255,.5);
        margin: 30px 0px;
        line-height: 25px;
    }
    ${p=>p.theme.media.tablet}{
        & > h1{
            font-size: 2.5rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 450px;
        text-align: left;
    }
`

const Article = () => {
    return (
        <StyledArticle>
            <h1>Who we work with</h1>
            <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
            <SecondaryButton content="About Us" />
        </StyledArticle>
    )
}

export default Article
