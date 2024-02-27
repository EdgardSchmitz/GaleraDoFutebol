import { Container, Logo } from "./styles";
import logoImg from '@assets/icon_escudo_48px.png';
export function Header(){
    return(
    <Container>
        <Logo source={logoImg}/>
    </Container>
    );
}