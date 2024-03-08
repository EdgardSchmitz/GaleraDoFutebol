import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from '@assets/icon_escudo_48px.png';

type Props ={
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){
    return(
    <Container>
        {
            showBackButton &&
        <BackButton>
        <BackIcon/>
        </BackButton>
        }
        <Logo source={logoImg}/>
    </Container>
    );
}