import { Header } from '@components/Header';
import { Highligth } from '@components/hightlight';
import { GroupCard } from '@components/GroupCards';
import { Container} from './styles';

export function Groups() {
return (
    <Container>
        <Header/>
        <Highligth
        
        title='Turmas'
        subtitle='Jogue com a sua turma'
        />

        <GroupCard title='Turma do Riviera' />
    </Container>
);
}

