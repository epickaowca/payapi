import styled from 'styled-components'

const StyledAboutArticle = styled.article`
    padding: 25px;
    text-align: center;
    max-width: 350px;
    margin: auto;
    & > h1{
        margin-bottom: 15px;
    }
    & > p{
        color: ${p=>p.theme.sanJuanBlue};
        opacity: .7;
        line-height: 25px;
    }
    ${p=>p.theme.media.tablet}{
        display: flex;
        max-width: 800px;
        text-align: left;
        padding-left: 40px;
        & > h1{
            font-size: 1.8rem;
            white-space: nowrap;
            margin-bottom: 0px;
            margin-right: 70px;
        }
        & > p{
            font-size: 1.2rem;
            line-height: 30px;
        }
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1050px;
        padding: 0px;
        margin: 90px auto;
        & > h1{
            font-size: 2rem;
            margin-right: 90px;
        }
        & > p{
            font-size: 1.3rem;
            line-height: 35px;
        }
    }
`

interface AboutArticleInterface {
    h1: string
    p: string
} 

const AboutArticle:React.FC<AboutArticleInterface> = ({h1, p}) => {
    return (
        <StyledAboutArticle>
            <h1>{h1}</h1>
            <p>{p}</p>
        </StyledAboutArticle>
    )
}

export default AboutArticle
