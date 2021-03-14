import styled from 'styled-components'

const Button = styled.button`
    border: none;
    border-radius: 30px;
    background: ${p=>p.theme.darkPink};
    color: white;
    padding: 15px 20px;
    font-size: 1rem;
    white-space: nowrap;
    ${p=>p.disabled ? `opacity: .6;` : `
    &:hover{
        opacity: .85;
    }
    `};
`

interface ButtonInterface {
    content: string
    disabled?: boolean
    click?: Function
}


const PrimaryButton:React.FC<ButtonInterface> = ({content, disabled, click})=> {
    return <Button onClick={click} disabled={disabled}>
        {content}
    </Button>
}
export default PrimaryButton

