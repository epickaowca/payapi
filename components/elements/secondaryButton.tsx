import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid ${p=>p.case2 ? p.theme.sanJuanBlue : p.theme.linkWaterWhite};
    border-radius: 30px;
    background: transparent;
    color: ${p=>p.case2 ? p.theme.sanJuanBlue : 'white'};
    padding: 15px 30px;
    font-size: 1.1rem;
    opacity: ${p=>p.disabled ? '.6' : '1'};
    cursor: pointer;
    &:hover{
        color: ${p=>p.case2 ? 'white' : !p.disabled ? p.theme.mirageBlue : 'white'};
        background: ${p=>p.case2 ? p.theme.sanJuanBlue : !p.disabled ? 'white' : 'transparent'};
    };
`

interface ButtonInterface {
    content: string
    disabled?: boolean
    case2?: boolean
}


const SecondaryButton:React.FC<ButtonInterface> = ({content, disabled, case2})=> {
    return <Button disabled={disabled} case2={case2}>
        {content}
    </Button>
}
export default SecondaryButton

